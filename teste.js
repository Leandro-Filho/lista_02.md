
function mostrarFrete(valorPedido){

    valorPedido = valorPedido.toFixed(2)//garantir 2 casas decimais
 
    //conferir se o valorPedido será menor que 50 reais, se for verdadeiro retornará o seu return
     if(valorPedido < 50.00 && valorPedido >= 0){ 
         return `O preço final ficou R$ ${valorPedido}, então voce não tem frete disponível meu chapa!`
     }
     //conferir se o valorPedido será menor que 199,99 reais e maior ou igual a 50.00, se for verdadeiro retornará o seu return
     else if(valorPedido >= 50.00 && valorPedido <= 199.99){
         return `O preço final ficou R$ ${valorPedido}, então voce tem frete com custo adicional! O bolso vai doer um pouco.`
     }
     //conferir se o valorPedido será maior ou iagual que 200.00 reais, se for verdadeiro retornará o seu return
     else if(valorPedido >= 200.00){
         return `O preço final ficou R$ ${valorPedido}, então voce tem frete grátis! Bem demais irmãozinho.`
     }
     
     
 }
 //testar o código
 console.log(mostrarFrete(200.00));
 console.log(mostrarFrete(74));
 console.log(mostrarFrete(199));
 console.log(mostrarFrete(0));