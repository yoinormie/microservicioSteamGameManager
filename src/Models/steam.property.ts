class gameProperty{
    private appid : number
    private steamid : string
    private steamAchievements : steamAchievement[]

  constructor(appid: number, steamid: string, steamAchievements: steamAchievement[]) {
    this.appid = appid;
    this.steamid = steamid;
    this.steamAchievements = steamAchievements;
  }

  public getAppid(): number {
    return this.appid;
  }

  public getSteamid(): string {
    return this.steamid;
  }

  public getSteamAchievements(): steamAchievement[] {
    return this.steamAchievements;
  }

  public toString() {
    return {
      appid: this.appid,
      steamid: this.steamid,
      steamAchievements: this.steamAchievements.map(a => a.toString ? a.toString() : a),
    };
  }
}