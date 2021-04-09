import { Role } from "./role";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    role: Role;
    token?: string;
}