import axios from "axios";

async function getIDFromCustomURL(customURL: string) {
    const response = await axios.get('https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/', {
        params: {
            key: process.env.APIKEY,
            vanityurl: customURL
        }
    }
    )
    return response.data.response.steamid

}

async function getUserStats(steamId: string) {
    const response = await axios.get('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/', {
        params: {
            key: process.env.APIKEY,
            steamids: steamId
        }
    })
    const player = response.data.response.players[0]
    return new steamProfile(player.steamid, player.personaname ?? null, player.profileurl, player.realname ?? null, player.loccountrycode ?? null)
}


async function getOwnedGames(steamid: string) {

    const response = await axios.get('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/', {
        params: {
            key: process.env.APIKEY,
            steamid: steamid,
            include_played_free_games: 1,
            include_appinfo: 1,
        }
    })
    const gameList = response.data.response.games ?? []
    const ownedGames = gameList.map(async (game: any) => {
        new steamGame(
            game.appid,
            game.name,
            game.playtime_forever
        )
    })

    return ownedGames

}

async function makeAchievementsList(ownedGames:steamGame[], steamId:string) {
    for(const game of ownedGames){
        const response = axios.get('http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/',{
            params:{
               appid: game.getAppid(),
               key: process.env.APIKEY

            }
        })
    }
}