
export class PostoVacinacaoFormErrors {
    
    requiredMessage = "*Campo vazio";

    errorMessages = 
    {

        'id': [
            { type: 'required', message: this.requiredMessage },
        ],

        'name': [
            { type: 'required', message: this.requiredMessage },
        ],

        'city': [
            { type: 'required', message: this.requiredMessage },
        ],
        'zipCode': [
            { type: 'required', message: this.requiredMessage },
        ],
        'address': [
            { type: 'required', message: this.requiredMessage },
        ],
        'state': [
            { type: 'required', message: this.requiredMessage },
        ],
        'district': [
            { type: 'required', message: this.requiredMessage },
        ],
        'qtdVaccine': [
            { type: 'required', message: this.requiredMessage },
        ]
    }
}