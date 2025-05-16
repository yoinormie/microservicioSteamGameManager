/**
 * Fichero donde se definen los endpoints de este microservicio.
 */
import { Request, Response } from 'express';
import { schemaGetUserStats, schemaGetUserSteamID, schemaMakeAchievementList } from '../Schemas/steam.schemas'
import * as service from '../Services/steam.services'

export const getUserWithSteamID = async (req: Request, res: Response) => {
    let bodyParsed = schemaGetUserSteamID.safeParse(req.body)
    if (bodyParsed.success) {
        var data = bodyParsed.data
        if (data.isCustom) {
            data.steamID = await service.getIDFromCustomURL(data.steamID)
        }
        var user = await service.getUserStats(data.steamID)
        //Llamada a spring a guardar al usuario
    }
}

export const getUserGames = async (req: Request, res: Response) => {
    let bodyParsed = schemaGetUserStats.safeParse(req.body)
    if (bodyParsed.success) {
        var data = bodyParsed.data
        const userGames = service.getOwnedGames(data.steamID)
        //Llamada a guardar los juegos
    }
}

export const getAchievementsInGames = async (req: Request, res: Response) => {
    let bodyParsed = schemaMakeAchievementList.safeParse(req.body)
    if (bodyParsed.success) {
        const gameList: steamGame[] = bodyParsed.data.ownedGames.map(
            (game: any) => new steamGame(game.appid, game.name, game.playtimeForever)
        ); 
        var gameProperties = service.makeAchievementsList(gameList, bodyParsed.data.steamID)
        //Llamada a spring para guardar los logros
    }
}