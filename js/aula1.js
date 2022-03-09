function calcular(){
    const nota1 =parseInt(document.getElementById("nota1").value);
    const nota2 = parseInt(document.getElementById("nota2").value);
    const nota3 = parseInt(document.getElementById("nota3").value);
    const nota4 = parseInt(document.getElementById("nota4").value);

    const calcular = (nota1 + nota2 + nota3 + nota4) /4 ;

    const media = document.getElementById("mediaFinal");

    media.innerHTML = "Sua media foi: " + calcular;

} 
