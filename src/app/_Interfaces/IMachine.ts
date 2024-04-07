import { UserForm } from "./UserForm";

export interface IMachine {
    idMachine?: number;
    name?: string;
    process?: string; // Vous devrez peut-être utiliser une énumération pour correspondre à l'enum Process côté Spring Boot
    troisPrinting?: string; // Même chose pour TROIS_PRINTING
    pricePerHour?: number| null;
    currency?: string; // Même chose pour Currency
    materials?: string[]; // Liste de matériaux comme tableau
    travelPerX?: number | null;
    travelPerY?: number| null;
    travelPerZ?: number| null;
    user?: UserForm; // Vous devrez créer une interface User similaire pour représenter l'utilisateur côté Angular
  }
  