export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes);
    }
    ehIgual(neg) {
        return JSON.stringify(this.negociacoes) == JSON.stringify(neg.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map