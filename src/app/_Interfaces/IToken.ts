import { IUser } from "./IUser"

export interface IToken {
    access_token: string;
    user: IUser ;// Assurez-vous que l'interface IUser contient une propriété role
    refresh_token : string ;


}
