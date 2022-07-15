// Como podemos melhorar o esse código usando TS?
/*/
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
/*/

enum Profissoes {
    Atriz,
    Padeiro,
    Carteiro,
    Ator
}

interface funcionarios{
    nome: string,
    idade: number,
    trabalho: Profissoes
}

let pessoa1: funcionarios = {
    nome: "Gustavo",
    idade: 21,
    trabalho: Profissoes.Ator
}

let pessoa2: funcionarios = {
    nome: "Lucas",
    idade: 18,
    trabalho: Profissoes.Padeiro
}

let pessoa3: funcionarios = {
    nome: "Geovana",
    idade: 28,
    trabalho: Profissoes.Atriz
}

let pessoa4: funcionarios = {
    nome: "Geros",
    idade: 22,
    trabalho: Profissoes.Carteiro
}

console.log(pessoa4);