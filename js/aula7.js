const cartas = [
    carta1={    
        nome: "cleide",
        atributo: {
            ataque: 7,
            defesa: 8,
            fofoca: 9,
        }
    },

    carta2={    
        nome: "celia",
        atributo: {
            ataque: 6,
            defesa: 3,
            fofoca: 10,
        }
    },

    carta3={    
        nome: "cidinha",
        atributo: {
            ataque: 8,
            defesa: 5,
            fofoca: 8,
        }
    }
]

const cartas = [cartas.carta1,cartas.carta2,cartas.carta3]
const maquina;
const jogador;

function sortearCarta() {
  const numeroCartaMaquina = parseInt(Math.random() * 3);
  maquina = cartas[numeroCartaMaquina];

  const numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  jogador = cartas[numeroCartaJogador];
  console.log(jogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  const opcoes = document.getElementById("opcoes");
  const opcoesTexto = "";

  for (const atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  const radioAtributos = document.getElementsByName("atributo");

  for (const i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  const atributoSelecionado = obtemAtributoSelecionado();
  const elementoResultado = document.getElementById("resultado");
  const valorCartaJogador = jogador.atributos[atributoSelecionado];
  const valorCartaMaquina = maquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
  console.log(maquina);
}
  