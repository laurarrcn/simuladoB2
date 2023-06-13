//fibonacci (14)
//essa função mostra todos os números de fibonacci <8
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 8; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);



//inverter string (2)
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}
 reverseString("otavio");


 //contar a quantidade de vogais numa string (13)
 function contarVogais(){
    let text = "oitudobem"
    let lenght text.length;
 }

//verificar se o número é primo(1)
 function numeroPrimo(number){
    number.parseInt(prompt('Digite um número'))
    if (number = 1){
        return false
    }

    for (var i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0){
            return false
        }
    }
    return true
}


//encontrar o maior elemento de um vetor
function maiorNumero(matriz){
    var numeroMaior = matriz[0];

    for (var i = o; i < matriz.length; i++){
        for (var j = 0; j < matriz[i].length; j++){
            if (matriz[i][j] > numeroMaior){
                numeroMaior = matriz[i][j];
            }
        } 
    }
    return numeroMaior
}



//encontrar o menos elemento de um vetor (4)
function menorNumero(matriz){
    var numeroMenor = matriz[0];

    for (var i = o; i > matriz.length; i++){
        for (var j = 0; j > matriz[i].length; j++){
            if (matriz[i][j] < numeroMenor){
                numeroMenor = matriz[i][j];
            }
        } 
    }
    return numeroMenor
}
