export class Negociacao {

    constructor(
        public _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeStrign: string, valorString: string): Negociacao {
        const date = new Date(dataString.replace(/-/g, ','));
        const quantidade = parseInt(quantidadeStrign);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}