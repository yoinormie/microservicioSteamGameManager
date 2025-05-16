import {z} from 'zod'

export const schemaGetUserSteamID = z.object({
    steamID : z.string(),
    isCustom : z.boolean()
})

export const schemaGetUserStats = z.object({
    steamID : z.string()
    .length(17,"El id no es válido")
})