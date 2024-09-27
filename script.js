//IMC
// Abaixo de 17 - muito abaixo do peso.
// Entre 17 e 18,49 - abaixo do peso.
// Entre 18,50 e 24,99 - peso normal.
// Entre 25 e 29,99 - acima do peso.
// A partir de 30 - obesidade.
//IMC = PESO/(altura*altura)

var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    // alert(test);
    event.preventDefault();

    peso=document.getElementById('peso').value;
    altura=document.getElementById('altura').value;


    //testar a recepção das informações
    console.log(peso);
    console.log(altura);

    //calculo imc
    imc = peso/(altura*altura);

    console.log(imc);

    if(imc<17){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '</br>Seu resultado foi: '+imc+'</br>Cuidado você está muito abaixo do peso'
    }else if(imc>17 && imc<18.49){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '</br>Seu resultado foi: '+imc+'</br>Cuidado você está abaixo do peso'
    }else if(imc>18.5 && imc<=24.99){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = "</br> Seu resultado foi:"+imc+"</br>Você está com um  peso normal"
    }else if (imc>25 && imc<=29.99){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = "</br> Seu resultado foi:"+imc+"</br>Cuidado você está acima do peso"
    }else{
        resultado=document.getElementById('resultado');
        resultado.innerHTML = "</br> Seu resultado foi:"+imc+"</br>Cuidado você está obeso(a)"
    }
}