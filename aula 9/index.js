
var readlineSync = require("readline-sync");

console.log("-------------- MICROONDAS SUPER VELOZ--------------");

const tempoPipoca = 10;
const tempoMacarrao = 8;
const tempoCarne = 15;
const tempoFeijao = 12;
const tempoBrigadeiro = 8;

let operacao = readlineSync.question(`

Ola, escolha uma opção de comida para qual deseja utilizar o mircroondas:
-------------------------------------------------------
      1 - Pipoca             
      2 - Macarrao           
      3 - Carne
      4 - Feijao
      5 - Brigadeiro
------------------------------------------------------


`);

let tempoEscolhido = readlineSync.questionInt(`

E qual eh o tempo que deseja para esse prato?

`);

microondas(operacao, tempoEscolhido);

function microondas(operacao, tempoEscolhido) {
  let tempoPadraoComida = 0;

  switch (operacao) {
    case "1":
      tempoPadraoComida = tempoPipoca;
      break;

    case "2":
      tempoPadraoComida = tempoMacarrao;
      break;

    case "3":
      tempoPadraoComida = tempoCarne;
      break;

    case "4":
      tempoPadraoComida = tempoFeijao;
      break;

    case "5":
      tempoPadraoComida = tempoBrigadeiro
      break;

    default:
      console.log("Erro operação não reconhecida.");
  }


  if (tempoEscolhido < tempoPadraoComida) {
    console.log("Tempo insuficiente.")
  }
  else if (tempoEscolhido >= tempoPadraoComida && tempoEscolhido < (tempoPadraoComida * 2)) {
    console.log("Prato pronto, bom apetite!!!")
  }
  else if (tempoEscolhido >= (tempoPadraoComida * 2) && tempoEscolhido < (tempoPadraoComida * 3)) {
    console.log("Sua comida queimou!")
  }
  else if (tempoEscolhido >= (tempoPadraoComida * 3)) {
    console.log("Kabuuuuuuuuuuuum!")
  }
  else {
    console.log("Bugou o mircroondas! =D")
  }
}