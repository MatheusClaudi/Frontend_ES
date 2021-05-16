export class Endereco {
    cidade: string;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;

    public Endereco(cidade: string, cep: string, rua: string, numero: string, bairro: string) {
        this.cidade = cidade;
        this.cep = cep;
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
    }
}