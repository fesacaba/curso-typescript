export abstract class View<T>{

    protected element: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const element = document.querySelector(seletor);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} nao existe no dom`)
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T, classe: string): string;

    public update(model: T, classe: string): void {
        let template = this.template(model, classe);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}