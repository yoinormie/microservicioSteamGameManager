import { Router } from "express";
import { ValidateBody } from "../Middleware/steam.middleware";
import { schemaGetUserStats, schemaGetUserSteamID, schemaMakeAchievementList } from "../Schemas/steam.schemas";
import { getAchievementsInGames, getUserGames, getUserWithSteamID } from "../Controller/steam.controller";

/**
 * Clase que define los endPoints del microservicio
 */

const route = Router()
//EndPoint usado para solicitar un perfil de steam con un id (tanto custom como no)
route.post('/getsteamiduser', ValidateBody(schemaGetUserSteamID), getUserWithSteamID)
//EndPoint usado para obtener la librería de un usuario
route.post('/getuserslibrary', ValidateBody(schemaGetUserStats), getUserGames)
//EndPoint para formar la lista de losgros y completar la relación jugador/juego
route.post('/makeachievementslist', ValidateBody(schemaMakeAchievementList), getAchievementsInGames)


route.post('/getsteamiduser', ValidateBody(schemaGetUserSteamID), getUserWithSteamID)
route.post('/getuserslibrary', ValidateBody(schemaGetUserStats), getUserGames)
route.post('/makeachievementslist', ValidateBody(schemaMakeAchievementList), getAchievementsInGames)

export default route