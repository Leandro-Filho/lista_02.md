function somarMatrizesInvestimento(matrizA, matrizB) {
    // Verifica se as matrizes têm o mesmo número de linhas e colunas
    if (matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length) {
        return "As matrizes não podem ser somadas. Elas têm dimensões diferentes.";
    }

    let linhas = matrizA.length;
    let colunas = matrizA[0].length;
    let matrizResultado = new Array(linhas).fill().map(() => new Array(colunas).fill(0));

    // Loop para percorrer cada elemento das matrizes e calcular a soma
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            matrizResultado[i][j] = matrizA[i][j] + matrizB[i][j];
        }
    }

    return matrizResultado;
}

// Exemplo de uso da função
let investimentosAno1 = [[1000, 2000], [1500, 2500]];
let investimentosAno2 = [[1200, 1800], [1300, 2700]];

let totalInvestimentos = somarMatrizesInvestimento(investimentosAno1, investimentosAno2);

console.log("Total de investimentos acumulados:");
console.log(totalInvestimentos);