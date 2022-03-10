var listaFilmes = [];

function exibir() {
  var elementoResultado = document.getElementById("resultado");
  var linkFilme = document.getElementById("link").value; // extrair link do usuário

  if (listaFilmes.includes(linkFilme)) {
    alert("Você ja incluiu esse filme.");
  } else {
    listaFilmes.push(linkFilme); // inserção do link na lista
    var qtdItem = listaFilmes.length; // tamanho da lista
    elementoResultado.innerHTML =
      elementoResultado.innerHTML +
      "<img src=" +
      listaFilmes[qtdItem - 1] +
      ">";
  }
}