export function imprimir(...objetos: Array<any>){
    for(let objeto of objetos){
        console.log(objeto.paraTexto())
    }
}