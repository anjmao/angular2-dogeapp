
declare module App {

    interface IModelBase {
        createdAt?: Date;
        updatedAt?: Date;
    }

    interface IDogeFriend extends IModelBase {
        idDogeFriend?: number;
        firstName: string;
        lastName: string;
        favoriteDogePhrase?: string;
        reputation?: number;
    }

}


declare module 'app' {

    module e {
        
    }

    export = e;
}