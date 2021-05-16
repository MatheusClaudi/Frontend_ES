export class RegistroFormErrors {
    
    requiredMessage = "*Campo vazio";

    errorMessages = 
    {

        'id': [
            { type: 'required', message: this.requiredMessage },
        ],
        
        'idAgendamento' : [
            { type: 'required', message: this.requiredMessage },
        ], 
        'idLoteVacina': [
            { type: 'required', message: this.requiredMessage },
        ],
        'hora': [
            { type: 'required', message: this.requiredMessage },
        ],
        'dose': [
            { type: 'required', message: this.requiredMessage },
        ],
    }
}