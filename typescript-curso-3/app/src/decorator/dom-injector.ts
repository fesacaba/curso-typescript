export function domInjector(seletor: string){
    return function(target: any, propertyKey: string){
        console.log(`Modificando protype ${target.constructor.name} e adicionando gger para o propriendade ${propertyKey}`);
       
        let elemento: HTMLElement;

        const getter = function(){
            if(!elemento){
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando elemento do DOm com o Seletor ${seletor} para injetar em ${propertyKey}`);
            }
            return elemento;
        }

        Object.defineProperty(target, propertyKey, {get: getter})
    }
}