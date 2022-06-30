//Crie uma função construtora que tenha como atributos: nome (string), 
//quantidade de faltas (number) e notas (array de números). 

/*Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, 
que simplesmente aumenta o número de faltas em 1. 
Crie alguns alunos para testar a sua função construtora. 
*/



class aluno {
    constructor(nome, quantidadeFaltas, notas) {

        this.nome = nome;
        this.quantidadeFaltas = quantidadeFaltas;
        this.notas = notas;

        this.calcularMedia = function () {
            const array = this.notas;
            const avg = array.reduce((a, b) => a + b, 0) / array.length;
            return avg;
        };

        this.faltas = function () {
            return this.quantidadeFaltas += 1;
        };
    }
}
    
const antonia = new aluno("Antonia Franco", 1, [5, 3, 7]);
//console.log(maria);

let antoniaMedia = antonia.calcularMedia();
//console.log(mariaMedia);

let antoniaFaltas = antonia.faltas();
antoniaFaltas = antonia.faltas();
//console.log(mariaFaltas);

const vinicius = new aluno("Vinicius Taurisano", 2, [9, 10, 8]);

const samara = new aluno("Samara Cavalcante", 9, [10, 6, 9]);

const listaAlunos = [antonia, vinicius, samara];
//console.log(listaAlunos);


/*crie o objeto literal curso que tem como atributos: nome do curso (string), 
nota de aprovação (number), faltas máximas (number) e uma lista de estudantes 
(um array composto pelos alunos criados no passo 2). */

/*Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais 
na propriedade lista de estudantes do objeto curso.
*/


let curso = {
    nomeCurso: "CTD",
    notaAprovacao: 7,
    faltasMaximas: 5,
    listaEstudantes: listaAlunos,

    adicionarAluno(nome, quantidadeFaltas, notas) {
        let alunoInsert = new aluno(nome, quantidadeFaltas, notas);
        this.listaEstudantes.push(alunoInsert);
    },

    verificaAprovacaoIndividual(estudante) {
        let media = estudante.calcularMedia();
        let mediaComAjuste = this.notaAprovacao + this.notaAprovacao * 0.10;

        if (media >= this.notaAprovacao && estudante.quantidadeFaltas < this.faltasMaximas) {
            return true
        } else if ((media >= mediaComAjuste) && estudante.quantidadeFaltas == this.faltasMaximas) {
            return true
        } else {
            return false
        }
    },
    verificaAprovacaoColetiva() {
        let resultado = [];
        for (let i = 0; i < this.listaEstudantes.length; i++) {
            resultado.push(this.verificaAprovacaoIndividual(this.listaEstudantes[i]));
        }
        return resultado
    }
};

let aprovados = curso.verificaAprovacaoColetiva();
console.log(aprovados);

const addAluno = curso.adicionarAluno("Antonio", 1, [6,8,7]);
console.log(listaAlunos);

let verificaAprovacaoIndividual = curso.verificaAprovacaoIndividual(vinicius);
console.log(verificaAprovacaoIndividual);
console.log(vinicius.quantidadeFaltas);
console.log(vinicius.calcularMedia());