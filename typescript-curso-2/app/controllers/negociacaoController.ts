import { DiasDasemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private MensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes, '');
    }

    public adiciona(): void {
        /*ZE*/
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        this.validaData(negociacao)
        this.limparForm();
    }

    private validaData(negociacao: Negociacao): void {
        if (this.ehDiaUtil(negociacao._data.getDay())) {
            this.negociacoes.adiciona(negociacao);
            this.atualizaView('Negociação adicionada com Sucesso', 'alert-info');
        } else {
            this.atualizaView('Data inválida para negociação.', 'alert-danger');
        }
    }

    private ehDiaUtil(day: number): boolean {
        return day > DiasDasemana.DOMINGO && day < DiasDasemana.SABADO
    }

    private limparForm(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(msg: string, classe: string): void {
        this.MensagemView.update(msg, classe);
        this.negociacoesView.update(this.negociacoes, classe);

    }
}