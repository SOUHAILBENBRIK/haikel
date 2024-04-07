// user-form.model.ts

export interface UserForm {
    firstName?: string;
    lastName?: string;
    address?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    country?: string; // Le '?' marque le champ comme optionnel
    city?: string;
    role:string;
    photoUrl?:string;
    codepostal?:string;
    phoneNumber?:string;
    agreeTerms?: boolean;
  }
  