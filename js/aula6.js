// let  teste = {
//     nome: "cleide",
//     vitorias: "2",
//     empates: "1",
//     derotas: "1",
//     pontos: "0"
// }

// let  teste1 = {
//     nome: "cleide",
//     vitorias: "2",
//     empates: "1",
//     derotas: "1",
//     pontos: "0"
// }



// function calcularPontos(jogador){
//  const pontos = (jogador.vitorias * 3) + jogador.empates;
//  return pontos;
// }
// teste.pontos = calcularPontos();
// teste1.pontos = calcularPontos();

// const jogadores = [teste, teste1];

// function exibirJogadores(jogadores){
//     const elemento = ""
//     for(const i = 0; i < jogadores.length; i++){
//         elemento += "<tr><td>" + jogadores[i].nome + "</td>";
//         elemento += "<td>" + jogadores[i].vitorias + "</td>";
//         elemento += "<td>" + jogadores[i].empates + "</td>";
//         elemento += "<td>" + jogadores[i].derrotas + "</td>";
//         elemento += "<td>" + jogadores[i].pontos + "</td>";
//         elemento +=
//           "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
//         elemento +=
//           "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
//         elemento +=
//           "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
//         elemento += "</tr>";
//     }

//     const valores =document.getElementById("tabelaJogadores");
//     valores.innerHTML = e;
// }

// exibirJogadores(jogadores);

// function adicionarVitoria(i){
//     const jogador = jogadores[i];
//     jogador.vitorias++ ;
//     jogador.pontos = calcularPontos(jogador);
//     exibirJogadores(jogadores);
// }

// function adicionarEmpate(i){
//     const jogador = jogadores[i];
//     jogador.empates++ ;
//     jogador.pontos = calcularPontos(jogador);
//     exibirJogadores(jogadores);
// }

// function adicionarDerrota(i){
//     const jogador = jogadores[i];
//     jogador.derotas++ ;
//     jogador.pontos = calcularPontos(jogador);
//     exibirJogadores(jogadores);
// }

//          chave.  valor.
var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var gui = { nome: "Gui", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

var jogadores = [rafa, paulo, gui];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}