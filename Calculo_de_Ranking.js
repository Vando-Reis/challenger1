const readline = require('readline');

// Cria uma interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para fazer perguntas ao usuário
function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

// Função principal que obtém entradas do usuário
(async function() {
    const vitorias = await perguntar('Total de vitórias? ');
    const derrotas = await perguntar('Total derrotas? ');
    
    rl.close(); // Fecha a interface
    
    const saldoVitorias = retornaCalculo(parseInt(vitorias), parseInt(derrotas));
    console.log('O Herói tem saldo de ' + saldoVitorias + ' e está no nível ' + classificarNivel(saldoVitorias));
})();

function retornaCalculo(vitorias, derrotas) {
    return vitorias - derrotas; // retorna o resultado da função retornaCalculo
}

function classificarNivel(saldoVitorias) {
    if (saldoVitorias < 10) {
        return 'Ferro';
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        return 'Bronze';
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        return 'Prata';
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        return 'Ouro';
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        return 'Diamante';
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        return 'Lendário';
    } else if (saldoVitorias > 100) {
        return 'Imortal';
    } else {
        return 'Desconhecido';
    }
}
