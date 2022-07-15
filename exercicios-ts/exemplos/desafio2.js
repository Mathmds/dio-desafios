"use strict";
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
var Profissoes;
(function (Profissoes) {
    Profissoes[Profissoes["Atriz"] = 0] = "Atriz";
    Profissoes[Profissoes["Padeiro"] = 1] = "Padeiro";
    Profissoes[Profissoes["Carteiro"] = 2] = "Carteiro";
    Profissoes[Profissoes["Ator"] = 3] = "Ator";
})(Profissoes || (Profissoes = {}));
let pessoa1 = {
    nome: "Gustavo",
    idade: 21,
    trabalho: Profissoes.Ator
};
let pessoa2 = {
    nome: "Lucas",
    idade: 18,
    trabalho: Profissoes.Padeiro
};
let pessoa3 = {
    nome: "Geovana",
    idade: 28,
    trabalho: Profissoes.Atriz
};
let pessoa4 = {
    nome: "Geros",
    idade: 22,
    trabalho: Profissoes.Carteiro
};
console.log(pessoa4);
