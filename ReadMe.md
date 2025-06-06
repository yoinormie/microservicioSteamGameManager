# MicroservicioSteamGameManager

Este microservicio es el encargado de acceder a Steam Web API y obtener los datos de un usuario y sus juegos con estadísticas sobre ellos (progreso de logros, última vez jugado, tiempo total, etc.).

## Tecnologías

- Node.js  
- TypeScript  
- Express.js  
- Zod  
- Axios  
- Steam Web API  

## Uso del microservicio

### 1. Instalar Node.js en tu dispositivo  
Descarga e instala Node.js desde [https://nodejs.org/](https://nodejs.org/)

### 2. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/microservicioSteamGameManager.git
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Crear tu archivo `.env`

Debes configurar las siguientes variables en tu archivo `.env`:

```
PORT=          # Puerto en el que se ejecutará el microservicio
STEAM_API_KEY= # Tu clave de la Steam Web API. Puedes obtenerla en https://steamcommunity.com/dev/apikey
```

---

## Uso de la API

### **POST /steam/searchuser**

Obtiene los datos de un usuario de Steam.

**Body:**

```json
{
  "steamVanityUrl": "nombreDeUsuario"
}
```

**Response:**

```json
{
  "steamId": "7656119xxxxxxxxxx",
  "personaName": "Nombre en Steam",
  "profileUrl": "https://steamcommunity.com/id/usuario/",
  "avatar": "https://...",
  "lastLogOff": "2024-06-06T12:34:56Z"
}
```

---

### **POST /steam/searchgames**

Obtiene los juegos jugados por un usuario (solo los jugados).

**Body:**

```json
{
  "steamId": "7656119xxxxxxxxxx"
}
```

**Response:**

```json
[
  {
    "appId": 730,
    "name": "Counter-Strike 2",
    "playtimeHours": 120,
    "lastPlayed": "2024-06-05T20:10:00Z",
    "achievements": {
      "total": 167,
      "unlocked": 23
    }
  },
  {
    "appId": 570,
    "name": "Dota 2",
    "playtimeHours": 540,
    "lastPlayed": "2024-06-04T14:22:00Z",
    "achievements": {
      "total": 80,
      "unlocked": 55
    }
  }
]
```

---

## Licencia

Los detalles de la licencia de este software están en el archivo `LICENSE`.
