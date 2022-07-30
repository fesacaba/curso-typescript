import { DiasDasemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.MensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes, '');
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        this.validaData(negociacao);
        this.limparForm();
    }
    validaData(negociacao) {
        if (this.ehDiaUtil(negociacao._data.getDay())) {
            this.negociacoes.adiciona(negociacao);
            this.atualizaView('Negociação adicionada com Sucesso', 'alert-info');
        }
        else {
            this.atualizaView('Data inválida para negociação.', 'alert-danger');
        }
    }
    ehDiaUtil(day) {
        return day > DiasDasemana.DOMINGO && day < DiasDasemana.SABADO;
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView(msg, classe) {
        this.MensagemView.update(msg, classe);
        this.negociacoesView.update(this.negociacoes, classe);
    }
}
