import { Router } from "express";
import { ValidateBody } from "../Middleware/steam.middleware";
import { schemaGetUserStats, schemaGetUserSteamID, schemaMakeAchievementList } from "../Schemas/steam.schemas";
import { getAchievementsInGames, getUserGames, getUserWithSteamID } from "../Controller/steam.controller";

const route = Router()

route.post('/getsteamiduser', ValidateBody(schemaGetUserSteamID), getUserWithSteamID)
route.post('/getuserslibrary', ValidateBody(schemaGetUserStats), getUserGames)
route.post('/makeachievementslist', ValidateBody(schemaMakeAchievementList), getAchievementsInGames)

export default route