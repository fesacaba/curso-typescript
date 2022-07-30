import { NegociacaoController } from "./controllers/negociacaoController.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Deu ruim')
}