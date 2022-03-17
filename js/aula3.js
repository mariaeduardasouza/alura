function Chutar(){
    const numeroSecreto = parseInt(Math.random() * 11);
    const resultado = document.getElementById("resultado")
    const chute = parseInt(document.getElementById("valor").value);

    if(chute == numeroSecreto){
        resultado.innerHTML = "Acertou, o numero secreto era:" + numeroSecreto;
    }else if(chute > 10 || chute < 0){
        resultado.innerHTML = "Digite um numero de 0 a 10";
    }else{
        resultado.innerHTML = "Errou, o numero secreto era:" + numeroSecreto;
    }

}