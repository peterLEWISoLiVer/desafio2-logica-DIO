const readline = require('readline/promises');

//Função que permite ler o que for digitado no terminal(declarar entrada, saída e receber a pergunta)
async function readLine(ask){
    
    const rl= readline.createInterface({ input: process.stdin, output: process.stdout});
    const response = await rl.question(ask)
    rl.close();
    return response;
}


async function program(){
    const nome_funcao_level = [/**peter, sentinela, 57 */];
    let escolha = 0;
    do{
        escolha = Number(await readLine("Escolha Digitando o número:\n 1-Criar Conta\n 2-Perfil\n 3-Ranking\n 0-Sair\nR: "));
        // Criação de contas(feed sistema)
        if(escolha === 1){
            let  nome= await readLine("Digite seu apelido: ");
            let level= Number(await readLine("Digite XP: "));
            let e = (await readLine("Qual sua identidade?\n----------------\nDuelista - O descolado amostradinho...\n________________\nIniciador - Desbravador confiante😎\n________________\nSentinela - Amigão da galera\n________________\NControlador - O orquestrador\n----------------")).toUpperCase();
            switch(e){                                    
                case "DUELISTA": 
                nome_funcao_level.push([nome,"Duelista",level]);
                console.log("Conta cadastrada. Obs: não da para excluir");
                break;

                case "INICIADOR": 
                nome_funcao_level.push([nome,"Iniciador",level]);
                console.log("Conta cadastrada. Obs: não da para excluir");
                break;

                case "SENTINELA": 
                nome_funcao_level.push([nome,"Sentinela",level]);
                console.log("Conta cadastrada. Obs: não da para excluir");
                break;

                case "CONTROLADOR": 
                nome_funcao_level.push([nome,"Controlador",level]);
                console.log("Conta cadastrada. Obs: não da para excluir");
                break;

                 default:
                console.log("Função inválida");
            }
            
             if((await readLine("Voltar para o menu(s/n)").toLowerCase)=="s"){
                console.clear()}
             else{escolha=0; console.clear()};
          };

            //Mostrar Perfil com base no nick
            if(escolha === 2){
                let busca= await readLine("Nickname: ");
                let resultado = nome_funcao_level.find((r)=>r[0]===busca);
                if(resultado){
                    console.log(`Nome: ${resultado[0]}\nFunção: ${resultado[1]}\nXP: ${resultado[2]}`);
                }
                else(console.log("Perfil não encontrado!"));
                 if((await readLine("Voltar para o menu(s/n)").toLowerCase)=="s"){console.clear()}
                 else{escolha=0; console.clear()};
            };
            //Ranking por nivel de XP
            if(escolha ===3){   
                        //"a" e "b" são objetos literários que se referem a linhas da matriz
                let ranking = nome_funcao_level.sort((a,b)=>b[2]-a[2]);
                console.log("Ranking:")
                for(let i=0;i<nome_funcao_level.length;i++)
                console.log(`\n ${i+1}° Nickname: ${nome_funcao_level[i][0]} | XP:${nome_funcao_level[i][2]}`)
             if((await readLine("Voltar para o menu(s/n)").toLowerCase)=="s"){console.clear()}
             else{escolha=0; console.clear()};
            };
      
   
    }while(escolha!=0);

     
}
program()