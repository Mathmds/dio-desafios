"use strict";
let button = document.getElementById("button");
let valor1 = document.getElementById("input1");
let valor2 = document.getElementById("input2");
function somar(n1, n2, devprintar, frase) {
    let somafinal = n1 + n2;
    if (devprintar) {
        console.log(frase + somafinal);
    }
    return n1 + n2;
}
let devprintar = true;
let frase = "O valor digitado foi: ";
if (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
        if (valor1 && valor2) {
            console.log(somar(Number(valor1.value), Number(valor2.value), devprintar, frase));
        }
    });
}
