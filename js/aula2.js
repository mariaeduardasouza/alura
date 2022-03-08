function Converter(){
    const valorE = document.getElementById("valor");
    const valor = valorE.value; 
    const valorDolar = parseFloat(valor);

    const valorReal = valorDolar * 5.11; //valor do dia 08/03/2022 

    const elementoConvertido = document.getElementById("valorConvertido");
    const valorConvertido = "O valor em real é R$ " + valorReal;
    elementoConvertido.innerHTML = valorConvertido;
}