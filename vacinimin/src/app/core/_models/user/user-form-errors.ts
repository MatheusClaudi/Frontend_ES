
export class UserFormErrors {
    
    requiredMessage = "*Campo vazio";

    errorMessages = 
    {

        'id': [
            { type: 'required', message: this.requiredMessage },
        ],
        'name': [
            { type: 'required', message: this.requiredMessage },
        ],
        'sobrenome': [
            { type: 'required', message: this.requiredMessage },
        ],
        'passwordConfirm' : [
            { type: 'required', message: this.requiredMessage },
        ],
        'password' : [
            { type: 'required', message: this.requiredMessage },

        ],
        'dataNascimento': [
            { type: 'required', message: this.requiredMessage },
        ],
        'email': [
            { type: 'required', message: this.requiredMessage },
        ],
        'cpf': [
            { type: 'required', message: this.requiredMessage },
        ],

        'cidade': [
            { type: 'required', message: this.requiredMessage },
        ],
        'cep': [
            { type: 'required', message: this.requiredMessage },
        ],
        'rua': [
            { type: 'required', message: this.requiredMessage },
        ],
        'numero': [
            { type: 'required', message: this.requiredMessage },
        ],
        'bairro': [
            { type: 'required', message: this.requiredMessage },
        ],

        'permissaoUsuario': [
            { type: 'required', message: this.requiredMessage },
        ],

        'postoAssociado': [
            { type: 'required', message: this.requiredMessage },
        ],
    }
}