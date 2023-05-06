const calcular = document.getElementById('calcular')

calcular.addEventListener('click',imc)


function imc(){
 const nome = document.querySelector('#nome').value 
 const altura = document.querySelector('#altura').value
 const peso = document.querySelector('#peso').value
 const resultado = document.querySelector('.result')

if(nome != '' && altura!= '' && peso != ''){

 const valorImc = (peso/(altura*altura)).toFixed(1)

const classificacao

if(valorImc<18.5){
    classificacao = 'abaixo do peso'
}else if(valorImc<25){
    classificacao = 'peso ideal <b>parabéns<b>'
}else if(valorImc<30){
    classificacao = 'levemente Acima do peso'
}else if(valorImc<35){
    classificacao = 'obesidade grau I'
}else if(valorImc<40){
    classificacao = 'obesidade grau II (severa)'    
 

resultado.innerHTML =`${nome} ${valorImc}`
}else{

resultado.innerHTML = 'preencha todos os campos'
}



}


