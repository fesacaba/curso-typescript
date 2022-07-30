import { View } from "./view.js";

export class MensagemView extends View<string> {

    protected template(model: string, classe: string): string {
        return `
            <p class="alert ${classe}">${model}</p>
        `
    }

    public update(model: string, classe: string): void {
        const template = this.template(model, classe);
        this.element.innerHTML = template;
    }

}