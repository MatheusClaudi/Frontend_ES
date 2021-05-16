
export class AgendamentoFormErrors {
    
    requiredMessage = "*Campo vazio";

    errorMessages = 
    {

        'id': [
            { type: 'required', message: this.requiredMessage },
        ],

        'idCliente': [
            { type: 'required', message: this.requiredMessage },
        ],
        'dose': [
            { type: 'required', message: this.requiredMessage },
        ],

        'idPosto': [
            { type: 'required', message: this.requiredMessage },
        ],
        'dataAgendamento': [
            { type: 'required', message: this.requiredMessage },
        ],
        'idSlotHorario': [
            { type: 'required', message: this.requiredMessage },
        ],
        'idLoteVacina': [
            { type: 'required', message: this.requiredMessage },
        ],

        'dataAbertura': [
            { type: 'required', message: this.requiredMessage },
        ],
        'statusAgendamento': [
            { type: 'required', message: this.requiredMessage },
        ],
        'comentario': [
            { type: 'required', message: this.requiredMessage },
        ],
        
    }
}