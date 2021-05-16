import { Endereco } from "../util/Endereco";
import { Role } from "./Role";

export class User {
    id: number;
    name: string;
    email: string;
    cpf: string;
    role: Role;
    preUserId: number;
    stationId: number;
    token?: string;

    secondSlotId: number;
    secondVaccine: string;
    secondVaccineDate: string;

    firstSlotId: number;
    firstVaccine: string;
    firstVaccineDate: string;


    static tomouPrimeiraDose(user: User): boolean {
        return !!user.firstVaccine && !!user.firstVaccineDate; 
    }

    static tomouSegundaDose(user: User): boolean {
        return !!user.secondVaccine && !!user.secondVaccineDate;
    }

    static temAgendamentoAberto(user: User): boolean {
        return (!!user.firstSlotId && !user.firstVaccine) || (!!user.secondSlotId && !user.secondVaccine);
    }

    static temFirstAgendamentoAberto(user: User): boolean {
        return (!!user.firstSlotId && !user.firstVaccine);
    }

    static temSecondAgendamentoAberto(user: User): boolean {
        return (!!user.secondSlotId && !user.secondVaccine);
    }

    static getDoseAgendamentoAberto(user: User): number {
        if (!!user.firstSlotId && !user.firstVaccine) {
            return 1
        }
        else if (!!user.secondSlotId && !user.secondVaccine) {
            return 2
        }
        else {
            return 0
        }
    }

    
}