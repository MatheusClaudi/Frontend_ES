import { StatusAgendamento } from "./StatusAgendamento";


export class Agendamento {

    id: number;
    idCliente: number;
    dose: number;

    idPosto: number;
    dataAgendamento: Date;
    idSlotHorario: number;
    idLoteVacina: number;

    dataAbertura: Date;
    statusAgendamento: StatusAgendamento ;
    comentario: string;

    public Agendamento(id: number,
                       idCliente: number,
                       dose: number,
                       idPosto: number,
                       dataAgendamento: Date,
                       idSlotHorario: number,
                       idLoteVacina: number,
                        
                       dataAbertura: Date,
                       statusAgendamento: StatusAgendamento,
                       comentario: string){

        this.id = id;
        this.idCliente = idCliente;
        this.dose = dose;
        this.idPosto = idPosto;
        this.dataAgendamento = dataAgendamento;
        this.idSlotHorario = idSlotHorario;
        this.idLoteVacina = idLoteVacina;
        this.dataAbertura = dataAbertura;                        
        this.statusAgendamento = statusAgendamento;
        this.comentario = comentario;
    }
}