function somar (n1,n2) {
    return n1+n2
}
function subtrair (n1,n2) {
    return n1-n2
}
function multiplicar (n1,n2){
    return n1*n2
}
function dividir (n1,n2){
    if (n2!=0) {
    return n1/n2}

    else {
        return "Impossível dividir por zero!!"
    }
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}
