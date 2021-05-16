export class VacinaFormErrors {
    
    requiredMessage = "*Campo vazio";

    errorMessages = 
    {

        'id': [
            { type: 'required', message: this.requiredMessage },
        ],
        
        'nome' : [
            { type: 'required', message: this.requiredMessage },
        ], 
        'criador': [
            { type: 'required', message: this.requiredMessage },
        ],
        'doses': [
            { type: 'required', message: this.requiredMessage },
        ],
    }
}