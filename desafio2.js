const readline = require('readline/promises');

async function readLine(ask) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const response = await rl.question(ask);
  rl.close();
  return response;
}


function calcularRankeadas(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }  

  return { saldoVitorias, nivel };
}

async function program() {
  let continuar = "s";

  while (continuar === "s") {
    let vitorias = Number(await readLine("Digite a quantidade de vitórias: "));
    let derrotas = Number(await readLine("Digite a quantidade de derrotas: "));

    // Guarda o retorno da função em uma variável
    let resultado = calcularRankeadas(vitorias, derrotas);

    console.log(`O Herói tem de saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);

    continuar = (await readLine("\nDeseja calcular outro jogador? (s/n): ")).toLowerCase();
    console.clear();
  }
}

program();
