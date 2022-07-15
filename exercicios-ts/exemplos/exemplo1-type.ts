let button = document.getElementById("button");
let valor1 = document.getElementById("input1") as HTMLInputElement;
let valor2 = document.getElementById("input2") as HTMLInputElement;

function somar(n1: number, n2: number, devprintar: boolean, frase: string) {
    let somafinal = n1 + n2;
    if (devprintar) {
        console.log(frase + somafinal);
    }
    return n1 + n2;
    
}

let devprintar: boolean = true;
let frase: string = "O valor digitado foi: ";
if (button) {
    button?.addEventListener("click", () => {
        if (valor1 && valor2) {
           console.log(somar(Number(valor1.value), Number(valor2.value), devprintar, frase)); 
        }
    });    
}

