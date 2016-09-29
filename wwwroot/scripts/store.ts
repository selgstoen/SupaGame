export interface IStore {
    RegisterScore(userId : number, score : number[] );
    GetScoreForUser(userId : number) : number[];
}

export class Store implements IStore {
    private internalStore: Array<UserScore>;

    constructor() {
        this.internalStore = [];
    }

    public RegisterScore(userId : number, score : number[] ) {
        this.internalStore.push(new UserScore(userId, score));
    }

    GetScoreForUser(userId : number) : number[] {
         return [];
    };
}

class UserScore {
    constructor(userId : number, score : number[]) {
        this.UserId = userId;
        this.Score = score;
    }

    public UserId : number;
    public Score : number[];
}