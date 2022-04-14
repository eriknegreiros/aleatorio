    function qualTipoDeElemento(lista, posicao) {
        if (typeof lista [posicao] === 'number') {
            return 'tem um número'
        } return 'Não tem um número'
    }
    
    let tiposDiversos = [1.5,"String",true,10]
    

console.log(qualTipoDeElemento(tiposDiversos, 0,1,2,3))