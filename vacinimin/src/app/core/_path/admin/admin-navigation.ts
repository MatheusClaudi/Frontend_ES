
export class AdminNavigation {

    base = "admin/"

    paths =
    [
        { str: 'Users', path: this.base +'userTable'},
        { str: 'Postos', path: this.base +'postoVacinacaoTable'},
    ] 
}