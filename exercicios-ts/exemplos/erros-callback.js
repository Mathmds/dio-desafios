"use strict";
function somarValor(valor1, valor2) {
    if (typeof valor1 === "string" || typeof valor2 === "string") {
        return valor1.toString() + valor2.toString();
    }
    else {
        return valor1 + valor2;
    }
}
function somarValorCallbakc(n1, n2, callback) {
    let resultado = n1 + n2;
    return callback(resultado);
}
console.log(somarValor(15, 15));
console.log(somarValor("oi ", "guys"));
console.log(somarValor(18, " vezes"));
function mostraError(erro, codigo) {
    throw { error: erro, code: codigo };
}
mostraError("olha essa linha ai home", 30);
