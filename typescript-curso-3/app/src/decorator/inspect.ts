export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
        console.log(`___ Metodo ${propertyKey}`);
        console.log(`___ Parametros ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`___ Retorno ${JSON.stringify(retorno)}`);

        return retorno
    }

    return descriptor;
}