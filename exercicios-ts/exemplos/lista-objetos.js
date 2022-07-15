"use strict";
const pessoa = {
    nome: "Fabio",
    idade: 25,
    trabalho: "desenvolvedora"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Desenvolvedor"] = 1] = "Desenvolvedor";
    Profissao[Profissao["Atriz"] = 2] = "Atriz";
    Profissao[Profissao["Carteiro"] = 3] = "Carteiro";
})(Profissao || (Profissao = {}));
const carlos = {
    nome: "Carlos",
    idade: 23,
    profissao: Profissao.Carteiro
};
const mauro = {
    nome: "mauro",
    idade: 18,
    materias: ["EC", "CC", "GA", "MT"]
};
function listaMaterias(lista) {
    for (const item of lista) {
        console.log("-", item);
    }
}
listaMaterias(mauro.materias);
