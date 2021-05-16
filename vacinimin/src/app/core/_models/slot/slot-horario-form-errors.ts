export class SlotHorarioFormErrors {
    
    requiredMessage = "*Campo vazio";

    errorMessages = 
    {
        'initialDate': [
            { type: 'required', message: this.requiredMessage },
        ],
        'finalDate': [
            { type: 'required', message: this.requiredMessage },
        ],
        'qtdVaccine': [
            { type: 'required', message: this.requiredMessage },
        ],
        'priority': [
            { type: 'required', message: this.requiredMessage },
        ],
        
    }
}