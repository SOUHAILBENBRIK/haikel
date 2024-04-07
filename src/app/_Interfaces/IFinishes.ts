import { UserForm } from "./UserForm";

export interface IFinishes {
    idFinishes?: number;
    process?: string; // Vous devrez peut-être utiliser une énumération pour correspondre à l'enum Process côté Spring Boot
    name?: string; // Liste de matériaux comme tableau
    user?: UserForm; // Vous devrez créer une interface User similaire pour représenter l'utilisateur côté Angular

  }
  