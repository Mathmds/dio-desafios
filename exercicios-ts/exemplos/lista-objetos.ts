const pessoa = {
    nome: "Fabio",
    idade: 25,
    trabalho: "desenvolvedora"
}

enum Profissao {
    Professor,
    Desenvolvedor,
    Atriz,
    Carteiro
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const carlos: Pessoa = {
    nome: "Carlos",
    idade: 23,
    profissao: Profissao.Carteiro
}

const mauro: Estudante = {
    nome: "mauro",
    idade: 18,
    materias: ["EC", "CC", "GA", "MT"]
}

function listaMaterias(lista:string[]) {
    for (const item of lista) {
        console.log("-", item);
    }
}
listaMaterias(mauro.materias);