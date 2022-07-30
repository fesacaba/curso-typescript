import { View } from "./view.js";
export class MensagemView extends View {
    template(model, classe) {
        return `
            <p class="alert ${classe}">${model}</p>
        `;
    }
    update(model, classe) {
        const template = this.template(model, classe);
        this.element.innerHTML = template;
    }
}
