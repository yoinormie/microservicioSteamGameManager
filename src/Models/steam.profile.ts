export class steamProfile {
  private steamId: string;
  private personaName: string;
  private profileURL: string;
  private realName: string;
  private locCountryCode: string;

  constructor(
    steamId: string,
    personaName: string,
    profileURL: string,
    realName?: string,
    locCountryCode?: string
  ) {
    this.steamId = steamId;
    this.personaName = personaName;
    this.profileURL = profileURL;
    this.realName = realName ?? '';
    this.locCountryCode = locCountryCode ?? "";
  }

  // Getters
  public getSteamId(): string {
    return this.steamId;
  }

  public getPersonaName(): string {
    return this.personaName;
  }

  public getProfileURL(): string {
    return this.profileURL;
  }

  public getRealName(): string {
    return this.realName;
  }

  public getLocCountryCode(): string {
    return this.locCountryCode;
  }
}