# M2 do Leandro Precaro B. Filho

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 6 questões objetivas assinalando a alternativa correta
- Resolva as 4 questões dissertativas escrevendo no próprio arquivo .md
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com ChatGPT e afins: entregar algo só para ganhar nota não faz você aprender e ficar mais inteligente. Não seja dependente da máquina! (E não se envolva em plágio!)
- ao final, publique seu arquivo lista_02.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

**1)** Considere o seguinte código JavaScript:

```javascript
//EX01
let p = 10;
let q = 3;
let r = 6;

let resultado = (p % q === 1) && (r * 2 > p) || (q + r < p);
console.log(resultado);

const valores = [3, 6, 9, 12, 15];
let produto = 1;

for (let j = 0; j < valores.length; j++) {
  produto *= valores[j];
}

console.log("O produto dos valores é:", produto);


```
Qual das seguintes alternativas melhor descreve o que o código faz?
```
A) O código avalia a expressão booleana, imprime `true`, calcula o produto dos números na lista e imprime o resultado no console.
```

B) O código avalia a expressão booleana, imprime `false`, calcula o produto dos números na lista e imprime o resultado no console.

C) O código avalia a expressão booleana, imprime `true` e, em seguida, verifica se o número 6 está na lista.

D) O código avalia a expressão booleana, imprime `false` e ordena os valores em ordem crescente.


______

**2)** O código a seguir contém duas funções que calculam o limite de crédito de um cliente com base nos seus gastos e na renda mensal.

```javascript
// Versão 1 da função de análise de crédito
function analisarCredito1() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    do {
        totalCompras += compras[i];
        i++;
    } while (limite >= totalCompras && i < compras.length);

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
```

```javascript
// Versão 2 da função de análise de crédito
function analisarCredito2() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    while (limite >= totalCompras && i < compras.length) {
        totalCompras += compras[i];
        i++;
    }

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
```
Se ambas as funções forem executadas com os valores fornecidos, qual será a saída exibida no console?
```
A) Ambas as funções exibirão: 'Seu crédito foi aprovado. Saldo disponível: 400.'
```

B) analisarCredito1() exibirá: 'Seu crédito foi negado. Saldo disponível: -600.', enquanto analisarCredito2() exibirá: 'Seu crédito foi negado. Saldo disponível: -200.'

C) analisarCredito1() exibirá: 'Seu crédito foi negado. Saldo disponível: -200.', enquanto analisarCredito2() exibirá: 'Seu crédito foi aprovado. Saldo disponível: 100.'

D) Ambas as funções exibirão: 'Seu crédito foi aprovado Saldo disponível: 500.'
______

**3)** Considere o seguinte trecho de código em JavaScript:
```javascript
//EX03
const idade = 21;

if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto!");
} else if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
}
```
Qual das seguintes alternativas melhor descreve o comportamento do código?

A) O código verifica se a idade indica um adulto ou um idoso e exibe a mensagem correspondente.
```
B) O código verifica se a idade pertence à faixa adulta. Se for, exibe "Você é um adulto!". Caso contrário, verifica se é menor de idade e exibe "Você é menor de idade!". Se nenhuma das condições anteriores for verdadeira, exibe "Você está na melhor idade!".
```

C) O código verifica se a idade está entre 18 e 60 anos e, se for, imprime "Você é um adulto!". Se não estiver nesse intervalo, imprime "Você está na melhor idade!".

D) O código verifica se a idade é menor de 18, entre 18 e 60 ou acima de 60, imprimindo uma mensagem específica para cada caso.
______

**4)** Qual será o resultado impresso no console após a execução do seguinte código?
```javascript
//EX04
var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400];

for (var i = 0; i < consumoDispositivos.length; i++) {
    var consumo = consumoDispositivos[i];

    if (consumo <= energiaDisponivel) {
        console.log("Dispositivo " + (i+1) + " ligado. Energia restante: " + (energiaDisponivel - consumo));
        energiaDisponivel -= consumo;
    } else if (consumo <= energiaDisponivel + bateriaExtra) {
        console.log("Dispositivo " + (i+1) + " ligado com bateria extra. Energia restante: " + ((energiaDisponivel + bateriaExtra) - consumo));
        energiaDisponivel = 0;
        bateriaExtra -= (consumo - energiaDisponivel);
    } else {
        console.log("Dispositivo " + (i+1) + " não pode ser ligado. Energia insuficiente.");
    }
}
```
//primeiro parte: 900 com enenergia normal. segunda parte: 300 com energia normal, terceira parte: 200 na bateria reserva, quarta parte: 0, mas ligada, quinta parte; desligado

Escolha a opção que responde corretamente:

A)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 200

Dispositivo 4 ligado com bateria extra. Energia restante: 0

Dispositivo 5 ligado. Energia restante: -200

B)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.

C)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 400

Dispositivo 4 não pode ser ligado. Energia insuficiente.
```
D)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado. Energia restante: 300

Dispositivo 3 ligado com bateria extra. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.
```

______

**5)** Qual é a principal função do método update() em um jogo desenvolvido com Phaser.js?

Escolha a opção que melhor descreve seu propósito:

A) O método update() é responsável por carregar os assets do jogo antes da cena ser exibida.
```
B) O método update() é chamado continuamente a cada quadro (frame) do jogo, sendo usado para atualizar a lógica, movimentação e interações dos objetos na cena.
```
C) O método update() renderiza todos os sprites na tela e garante que a física do jogo seja processada corretamente.

D) O método update() é chamado apenas uma vez após a criação da cena, sendo utilizado para configurar variáveis iniciais do jogo.
______

**6)** Qual é o principal objetivo do módulo Matter.js Physics em Phaser.js?

Escolha a opção que responde corretamente:
```
A) Simular física avançada, incluindo corpos rígidos, colisões complexas e interação entre objetos com gravidade e forças.
```
B) Gerenciar eventos de entrada do usuário, como cliques e toques na tela, permitindo movimentação de personagens.

C) Renderizar gráficos otimizados para jogos 2D e garantir uma taxa de quadros estável.

D) Criar animações automáticas para sprites e objetos interativos sem necessidade de programação de movimentação.

______

# Questões dissertativas

**7)** Uma loja online deseja implementar um sistema de classificação de pedidos com base no valor total da compra. O sistema deve determinar a categoria de um pedido com as seguintes regras:

```

Pedidos abaixo de R$50,00 → "Frete não disponível!"

Pedidos entre R$50,00 e R$199,99 (inclusive) → "Frete com custo adicional!"

Pedidos de R$200,00 ou mais → "Frete grátis!"
```
Implemente um pseudocódigo que receba o valor total da compra e exiba a classificação correta do frete para o cliente.
```javascript
//pseudocódigo da função para separar e determinar o frete das compras
INÍCIO
    FUNÇÃO mostrarFrete(valorPedido)
    
        valorPedido ← ARREDONDAR(valorPedido, 2)  // Garantir 2 casas decimais

        SE valorPedido < 50.00 E valorPedido >= 0 ENTÃO
            RETORNAR "O preço final ficou R$ ", valorPedido, ", então você não tem frete disponível meu chapa!"
        
        SENÃO SE valorPedido >= 50.00 E valorPedido <= 199.99 ENTÃO
            RETORNAR "O preço final ficou R$ ", valorPedido, ", então você tem frete com custo adicional! O bolso vai doer um pouco."
        
        SENÃO SE valorPedido >= 200.00 ENTÃO
            RETORNAR "O preço final ficou R$ ", valorPedido, ", então você tem frete grátis! Bem demais irmãozinho."
        
    FIM FUNÇÃO

    // Testando a função
    ESCREVER mostrarFrete(200.00)
    ESCREVER mostrarFrete(74)
    ESCREVER mostrarFrete(199)
    ESCREVER mostrarFrete(0)

FIM

```

```javascript
//código real da função para separar e determinar o frete das compras
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
```
______

**8)** Considere a implementação da classe base Veiculo em um sistema de modelagem de veículos. Sua tarefa é implementar, utilizando pseudocódigo, as classes derivadas Carro e Moto, que herdam da classe Veiculo, adicionando atributos específicos e métodos para calcular o consumo de combustível de um carro e de uma moto, respectivamente.

```
Classe Veiculo:
Atributos:

modelo
ano
Método Construtor(modelo, ano):

Define os valores dos atributos modelo e ano com os valores passados como parâmetro.
Método CalcularConsumo():
```
Implementação genérica para cálculo de consumo, a ser sobrescrita pelas subclasses.
Agora, implemente as classes Carro e Moto, garantindo que ambas herdem de Veiculo e possuam métodos específicos para calcular o consumo de combustível com base na quilometragem e eficiência do veículo.
______
```javascript
//pseudocódigo do problema acima
CLASSE Veículo:
    ATRIBUTOS:
        modelo
        ano

    MÉTODO consumoCombustivel():
        km_L É IAGUAL A kmRodados DIVIDIDO POR litro
        ESCREVER "Seu", nome, modelo, "ano", ano, "fez", km_L, "Km/L na cidade."

CLASSE Carro HERDA Veículo:
    ATRIBUTOS:
        nome
        litro
        kmRodados
        eficiencia

    MÉTODO consumoCombustivelCarro():
        km_Litros É IGUAL A (kmRodados DIVIDIDO POR litro) MULTIPLICADO POR eficiencia
        ESCREVER "Seu", nome, modelo, "ano", ano, "fez", km_Litros, "Km/L na cidade."

CLASSE Moto HERDA Veículo:
    ATRIBUTOS:
        nome
        litro
        kmRodados
        eficiencia

    MÉTODO consumoCombustivelMoto():
        km_Litros É IGUAL A (kmRodados DIVIDIDO POR litro) MULTIPLICADO POR eficiencia
        ESCREVER "Seu", nome, modelo, "ano", ano, "fez", km_Litros, "Km/L na cidade."

// Criar instância de Carro
VAR carrinho É IGUAL A NOVO Carro("Wolkswagen", "Polo", 52, "2023", 790, 0.65)
CHAMAR carrinho.consumoCombustivelCarro()

ESCREVER "-------------------------------------------------------"

// Criar instância de Moto
VAR motinha É IGUAL A NOVO Moto("Ducati", "Veron", 15, "2024", 200, 0.60)
CHAMAR motinha.consumoCombustivelMoto()

```


```javascript
//código do tal exercicio
class Veículo {
    constructor(modelo, ano){
        this.modelo = modelo;
        this.ano = ano
    }

    consumoCombustivel(){
        let km_L= this.kmRodados/this.litro
        console.log(`Seu ${this.nome} ${this.modelo} ano ${this.ano} fez ${km_L}Km/L na cidade. `)
    };
};

class Carro extends Veículo{
    constructor(nome, modelo, litro, ano, kmRodados, eficiencia){
        super(modelo, ano)
        this.nome = nome;
        this.litro = litro;
        this.kmRodados = kmRodados;
        this.eficiencia = eficiencia;
    }

    consumoCombustivelCarro(){
        let km_Litros = (this.kmRodados/this.litro)*this.eficiencia
        console.log(`Seu ${this.nome} ${this.modelo} ano ${this.ano} fez ${km_Litros}Km/L na cidade. `)
    }
}
let carrinho = new Carro("Wolkswagen", "Polo", 52, "2023", 790, 0.65)
carrinho.consumoCombustivelCarro();
console.log("-------------------------------------------------------");

class Moto extends Veículo{
    constructor(nome, modelo, litro, ano, kmRodados, eficiencia){
        super(modelo, ano)
        this.nome = nome;
        this.litro = litro;
        this.kmRodados = kmRodados;
        this.eficiencia= eficiencia;
}
consumoCombustilMoto(){
    let km_Litros = (this.kmRodados/this.litro)*this.eficiencia
    console.log(`Seu ${this.nome} ${this.modelo} ano ${this.ano} fez ${km_Litros}Km/L na cidade. `)
};
};

let motinha = new Moto("Ducati", "Veron", 15, "2024", 200, 0.60);
motinha.consumoCombustilMoto();
```


**9)** Você é um cientista da NASA e está ajudando no desenvolvimento de um sistema de pouso para sondas espaciais em Marte. Seu objetivo é calcular o tempo necessário para que a sonda reduza sua velocidade até um nível seguro para pouso, considerando uma velocidade inicial de entrada na atmosfera marciana e uma taxa de desaceleração constante causada pelo atrito atmosférico e retrofoguetes.

Entretanto, a sonda não pode ultrapassar um tempo máximo de descida para evitar desvios orbitais, nem pode desacelerar além de um limite mínimo, pois isso poderia causar instabilidade no pouso.

Implemente a lógica dessa simulação em pseudocódigo, considerando a seguinte equação para atualização da velocidade:

Considere a fórumla de atualização velocidade:
```
    velocidade = velocidadeInicial - desaceleracao * tempo
```
Seu programa deve determinar quanto tempo será necessário para que a sonda atinja uma velocidade segura de pouso, sem ultrapassar os limites estabelecidos.
______
```javascript
//pseudocódigo do tempo necessário para fazer um pouso tranquilo
Função calcularTempoPouso(velocidadeInicial, desaceleracao, tempoMaximo, velocidadeSegura, desaceleracaoMinima):
    tempo = 0
    velocidadeAtual = velocidadeInicial
    
    # Enquanto a velocidade for maior que a velocidade segura
    Enquanto velocidadeAtual > velocidadeSegura:
        # Verifica se o tempo já ultrapassou o limite
        Se tempo >= tempoMaximo:
            Retornar "Tempo máximo excedido. Pouso não possível dentro do limite de tempo."
        
        # Verifica se a desaceleração é menor que o limite mínimo
        Se desaceleracao < desaceleracaoMinima:
            Retornar "Desaceleração mínima atingida. Pouso não seguro."
        
        # Atualiza a velocidade da sonda com base no tempo
        velocidadeAtual = velocidadeInicial - desaceleracao * tempo
        
        # Incrementa o tempo em 1 segundo
        tempo = tempo + 1
        
    # Retorna o tempo necessário para atingir a velocidade segura de pouso
    Retornar "Tempo necessário para o pouso seguro: " + tempo + " segundos."

# Exemplo de uso
velocidadeInicial = 100  # velocidade inicial em m/s
desaceleracao = 2        # desaceleração constante em m/s²
tempoMaximo = 60         # tempo máximo de descida em segundos
velocidadeSegura = 5     # velocidade segura de pouso em m/s
desaceleracaoMinima = 0.5 # desaceleração mínima em m/s²

resultado = calcularTempoPouso(velocidadeInicial, desaceleracao, tempoMaximo, velocidadeSegura, desaceleracaoMinima)
Escrever(resultado)

```
```javascript
//código do tempo necessário para fazer um pouso tranquilo
function calcularTempoPouso(velocidadeInicial, desaceleracao, tempoMaximo, velocidadeSegura, desaceleracaoMinima) {
    let tempo = 0;
    let velocidadeAtual = velocidadeInicial;
    
    // Enquanto a velocidade for maior que a velocidade segura
    while (velocidadeAtual > velocidadeSegura) {
        // Verifica se o tempo já ultrapassou o limite
        if (tempo >= tempoMaximo) {
            return "Tempo máximo excedido. Pouso não possível dentro do limite de tempo.";
        }
        
        // Verifica se a desaceleração é menor que o limite mínimo
        if (desaceleracao < desaceleracaoMinima) {
            return "Desaceleração mínima atingida. Pouso não seguro.";
        }
        
        // Atualiza a velocidade da sonda com base no tempo
        velocidadeAtual = velocidadeInicial - desaceleracao * tempo;
        
        // Incrementa o tempo em 1 segundo
        tempo += 1;
    }
    
    // Retorna o tempo necessário para atingir a velocidade segura de pouso
    return `Tempo necessário para o pouso seguro: ${tempo} segundos.`;
}

// medidas de velocidade estão em m/s e aceleração estão em m/s² e te,po está em segundos
let velocidadeInicial = 1000;  
let desaceleracao = 3.73;       
let tempoMaximo = 420;         
let velocidadeSegura = 10;     
let desaceleracaoMinima = 0.5; 

let resultado = calcularTempoPouso(velocidadeInicial, desaceleracao, tempoMaximo, velocidadeSegura, desaceleracaoMinima);
console.log(resultado);
```

**10)** Em um sistema de análise financeira, as operações de investimento de uma empresa podem ser representadas por matrizes, onde cada linha representa um tipo de investimento e cada coluna representa um período de tempo.

A seguir, é fornecida a implementação da função SomarMatrizesInvestimento(matrizA, matrizB), que soma os valores de duas matrizes de investimento. Sua tarefa é implementar uma função semelhante, porém que realize a multiplicação das matrizes de investimento, determinando como os investimentos afetam os resultados ao longo do tempo.

```
Função SomarMatrizesInvestimento(matrizA, matrizB):  
    # Verifica se as matrizes têm o mesmo número de linhas e colunas  
    Se tamanho(matrizA) ≠ tamanho(matrizB) então:  
        Retornar "As matrizes não podem ser somadas. Elas têm dimensões diferentes."  
    Senão:  
        linhas <- tamanho(matrizA)  
        colunas <- tamanho(matrizA[0])  
        matrizResultado <- novaMatriz(linhas, colunas)  

        # Loop para percorrer cada elemento das matrizes e calcular a soma  
        Para i de 0 até linhas-1 faça:  
            Para j de 0 até colunas-1 faça:  
                matrizResultado[i][j] <- matrizA[i][j] + matrizB[i][j]  

        Retornar matrizResultado  

# Exemplo de uso da função  
investimentosAno1 <- [[1000, 2000], [1500, 2500]]  
investimentosAno2 <- [[1200, 1800], [1300, 2700]]  

totalInvestimentos <- SomarMatrizesInvestimento(investimentosAno1, investimentosAno2)  
Escrever("Total de investimentos acumulados:")  
ImprimirMatriz(totalInvestimentos)  
```
Agora, implemente a função MultiplicarMatrizesInvestimento(matrizA, matrizB), que multiplica as duas matrizes, simulando o efeito de diferentes fatores de crescimento e impacto financeiro nos investimentos ao longo do tempo.