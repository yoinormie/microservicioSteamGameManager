import {z} from 'zod'

export const schemaGetUserSteamID = z.object({
    steamID : z.string(),
    isCustom : z.boolean()
})

export const schemaGetUserStats = z.object({
    steamID : z.string()
    .length(17,"El id no es válido")
})

export const steamGameSchema = z.object({
  appid: z.number().int(),
  name: z.string(),
  playtimeForever: z.number().int().nonnegative(),
});

export const schemaMakeAchievementList = z.object({
    steamID : z.string()
    .length(17,"El id no es válido"),
    ownedGames : z.array(steamGameSchema)
})
