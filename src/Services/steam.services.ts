import axios from "axios";
import {steamProfile} from '../Models/steam.profile';
import { steamGame } from "../Models/steam.game";
import { steamAchievement } from "../Models/steam.achievement";
import { gameProperty } from "../Models/steam.property";


/**
 * 
 * @param customURL id personalizado por el usuario de la cuenta de Steam
 * @returns id de la cuenta (el que no es personalizado, utilizado para buscar internamente en la plataforma (y en las interfaces de la API))
 */

export async function getIDFromCustomURL(customURL: string) : Promise<string>{
    const response = await axios.get('https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/', {
        params: {
            key: process.env.APIKEY,
            vanityurl: customURL
        }
    }
    )
    return response.data.response.steamid as string

}


/**
 * 
 * @param steamId id del perfil de un usuario
 * @returns un objeto con los datos de ese usuario
 */

export async function getUserStats(steamId: string) : Promise<steamProfile>{
    const response = await axios.get('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/', {
        params: {
            key: process.env.APIKEY,
            steamids: steamId
        }
    })
    const player = response.data.response.players[0]
    return new steamProfile(player.steamid, player.personaname ?? null, player.profileurl, player.realname ?? null, player.loccountrycode ?? null)
}


export async function getOwnedGames(steamid: string) {
    const response = await axios.get('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/', {
        params: {
            key: process.env.APIKEY,
            steamid: steamid,
            include_played_free_games: 1,
            include_appinfo: 1,
        }
    })
    const gameList = response.data.response.games ?? []
    const ownedGames : steamGame[] = await Promise.all(
  gameList.map(async (game: any) => ({
    appid: game.appid,
    name: game.name,
    playtimeForever: game.playtime_forever,
  }))
);

    return ownedGames

}

export async function makeAchievementsList(ownedGames: steamGame[], steamId: string) {
    var achievementList : steamAchievement[]
    var gamesPropety : gameProperty[] = []
    for (const game of ownedGames) {
        achievementList = []
        const response = await axios.get('http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/', {
            params: {
                appid: game.getAppid(),
                key: process.env.APIKEY,
                steamid: steamId
            }
        })
        for(const achievement of response.data.players.achievements){
            const achieved = achievement.achieved == 1 ? true : false
            achievementList.push(
                new steamAchievement(
                    achievement.apiname,
                    achieved
                )
            )
        }
        gamesPropety.push(new gameProperty(
            game.getAppid(),
            steamId,
            achievementList
        ))
    }
    return gamesPropety
}