function calcular(){
    const nota1 = document.getElementById("nota1");
    const primeiroValor = nota1.value;

    const nota2 = document.getElementById("nota2");
    const segundoValor = nota2.value;

    const calcular = (primeiroValor + segundoValor) /2 ;

    const media = document.getElementById("mediaFinal");
    const mediafinal = "sua media foi:" + calcular;

    media.innerHTML = mediafinal;

}
