export class LoteVacinaFormErrors {
    
    requiredMessage = "*Campo vazio";

    errorMessages = 
    {

        'id': [
            { type: 'required', message: this.requiredMessage },
        ],
       

        'name': [
            { type: 'required', message: this.requiredMessage },
        ],
        
        'quantity': [
            { type: 'required', message: this.requiredMessage },
        ],

        'stationId' : [
            { type: 'required', message: this.requiredMessage },
        ],

        
    }
}