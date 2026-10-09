alert("jogo do numero secreto!");
let numeroMaximo = 15;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
     chute = prompt("Digite um numero entre 1 e" + " " + numeroMaximo);
        if(numeroSecreto == chute){
        break;
    } else{
        if(chute > numeroSecreto){
            alert("O numero secreto é menor que" + " " + chute);
        } else{
            alert("O numero secreto é maior que" + " " + chute);
        }  
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert("ACERTOU" + " " + numeroSecreto + " " + "com" + " " + tentativas + " " + palavraTentativa);