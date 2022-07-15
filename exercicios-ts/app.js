"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
/*/
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
/*/
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let somaValor = document.getElementById("soma");
let saldoAtual = document.getElementById("campo-saldo");
let saldo = 0;
saldoAtual.textContent = `${saldo} R$"`;
botaoAtualizar.addEventListener("click", () => {
    let valor1 = Number(somaValor.value);
    saldo += valor1;
    return saldoAtual.textContent = `${saldo} R$"`;
});
botaoLimpar.addEventListener("click", () => {
    saldo = 0;
    return saldoAtual.textContent = `${saldo} R$"`;
});
