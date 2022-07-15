let button = document.getElementById("button");
let numero1 = document.getElementById("input1");
let numero2 = document.getElementById("input2");

function soma(n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number") {
       return n1 + n2; 
    }
    else {
        return Number(n1) + Number(n2);
    }
}

button.addEventListener("click", () => {
    console.log(soma(numero1.value, numero2.value));
});