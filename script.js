// seleciona todos os elementos <button> da página e os guarda na constante 'botoes' como uma lista
const botoes = document.querySelectorAll("button");

// passar por cada botão da lista (um por um) para aplicar as regras abaixo
botoes.ForEach(function (botao) {

    // criar uma váriavel interna para controla se O BOTÃO ATUAL ou não (começa como falso)
    let curtiu = false;

    // adiciona um "escutador" que guarda o clice especificamente neste botão
    botao.addEventlistener("click", botaoClicado);

    // define a função que roda toda vez que este botão específico recebe um clique
    function botaoClicado() {
        // exibe uma mensagem no console do navegador apenas para testar se o click funcionou
        console.log("fui clicado");

        // procura e seleciona a tag <span> (o número do contador) que está dentro deste botão
        let texto = botao.querySelector("span");

        // se o usuário ainda não tiver clicado neste botão (curtiu é igual a false)
        if (curtiu===false) {
            texto.textContent++; // soma mais um ao número atual do contador
            curtiu = true; // muda o status para true (indicando que agora está "curtido")

            // caso o usuário clique novamente (ou seja curtiu já era true)
        } else {
            texto.textContent--; // subitrai -1 do contador (desfaz a curtida)
            curiu = false;       // volta o status para false (permitindo curtir de novo depois)
        }
    }
});