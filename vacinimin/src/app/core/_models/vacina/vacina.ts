

export class Vacina {
    id: number;
    nome: string;
    criador: string;
    doses: number;

    public Vacina(id: number,nome: string,criador: string,doses: number){
        this.id = id;
        this.nome = nome;
        this.criador = criador;
        this.doses =doses;
    }
 }