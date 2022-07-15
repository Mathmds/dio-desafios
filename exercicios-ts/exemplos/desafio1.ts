// Como podemos rodar isso em um arquivo .ts sem causar erros?
/*/
let employee = {};
employee.code = 10;
employee.name = "John";
/*/

interface emprego {
    codigo: number,
    nome: string
}

let employee: emprego = {
    codigo: 10,
    nome: "Jhon"
}

console.log(employee);