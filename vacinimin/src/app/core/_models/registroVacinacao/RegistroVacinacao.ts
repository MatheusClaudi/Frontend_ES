
export class RegistroVacinacao {

    id: number;
    idAgendamento: number;
    idLoteVacina: number;
    hora: Date;
    dose: number;

    public RegistroVacinacao(id: number, idAgendamento: number, idLoteVacina: number, hora: Date, dose: number) {
        this.id = id;
        this.idAgendamento = idAgendamento;
        this.idLoteVacina = idLoteVacina;
        this.hora = hora;
        this.dose = dose;
    }
}