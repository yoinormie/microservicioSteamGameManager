export class steamAchievement {
    private name: string;
    private achieved: boolean;

    constructor(name: string, achieved: boolean) {
        this.name = name;
        this.achieved = achieved;
    }


    public getName(): string {
        return this.name;
    }

    public isAchieved(): boolean {
        return this.achieved;
    }

    public toString(): object {
        return {
            name: this.name,
            achieved: this.achieved
        };
    }
}
