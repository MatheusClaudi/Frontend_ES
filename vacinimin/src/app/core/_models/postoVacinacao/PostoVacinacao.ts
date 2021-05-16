import { Endereco } from "../util/Endereco";

export class PostoVacinacao {
    id: number;
    name: string;
    zipCode: string;
    state: string;
    city: string;
    district: string;
    address: string;
    
    qtdVaccine: number;
    createAt: string;
    updateAt: string;
}