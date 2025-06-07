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

### **POST /getsteamiduser**

Convierte una URL personalizada de Steam (Vanity URL) en un SteamID64 válido y devuelve información básica del usuario.

**Body:**

```json
{
  "steamID": "nombrePersonalizado",
  "isCustom": true
}
```

**Funcionalidad:**

- Si `isCustom` es `true`, se convierte la Vanity URL en un SteamID.
- Se obtiene información del usuario usando su SteamID.
- Devuelve un objeto con información básica del perfil de Steam.

**Response esperado:**

```json
{
  "steamid": "7656119xxxxxxxxxx",
  "personaName": "Nombre en Steam",
  "profileUrl": "https://steamcommunity.com/id/usuario/",
  "realName": "Nombre Real",
  "country": "US"
}
```

---

### **POST /getuserslibrary**

Devuelve la lista de juegos que posee el usuario junto con su tiempo de juego total.

**Body:**

```json
{
  "steamID": "7656119xxxxxxxxxx"
}
```

**Funcionalidad:**

- Recupera todos los juegos que el usuario ha jugado o posee.
- Incluye datos como nombre del juego, ID de la app, y minutos totales jugados.

**Response esperado:**

```json
[
  {
    "appid": 730,
    "name": "Counter-Strike 2",
    "playtimeForever": 1200
  },
  {
    "appid": 570,
    "name": "Dota 2",
    "playtimeForever": 3000
  }
]
```

---

### **POST /makeachievementslist**

Genera la lista de logros obtenidos por el usuario en cada uno de sus juegos.

**Body:**

```json
{
  "steamID": "7656119xxxxxxxxxx",
  "ownedGames": [
    {
      "appid": 730,
      "name": "Counter-Strike 2",
      "playtimeForever": 1200
    }
  ]
}
```

**Funcionalidad:**

- Por cada juego proporcionado, obtiene los logros asociados para el usuario.
- Devuelve una estructura con los logros obtenidos y su estado (logrado o no).

**Response esperado:**

```json
[
  {
    "appid": 730,
    "steamid": "7656119xxxxxxxxxx",
    "achievements": [
      {
        "apiName": "WIN_ONE_MATCH",
        "achieved": true
      },
      {
        "apiName": "HEADSHOT_KING",
        "achieved": false
      }
    ]
  }
]
```

---

## Licencia

Los detalles de la licencia de este software están en el archivo `LICENSE`.

