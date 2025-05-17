export class steamGame {
  private appid: number;
  private name: string;
  private playtimeForever: number;

  constructor(appid: number, name: string, playtimeForever: number) {
    this.appid = appid;
    this.name = name;
    this.playtimeForever = playtimeForever;
  }

  public getAppid(): number {
    return this.appid;
  }

  public getName(): string {
    return this.name;
  }

  public getPlaytimeForever(): number {
    return this.playtimeForever;
  }

  public toJSON() {
    return {
      appid: this.appid,
      name: this.name,
      playtimeForever: this.playtimeForever
    };
  }
}