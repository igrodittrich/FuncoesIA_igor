const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ter um Dragão de estimação ou um megarobô?",
        alternativas: [
            {
                texto: "Dragão, com certeza!",
                afirmacao: "Tendências medievais. "
            },
            {
                texto: "O robô deve ser muito doido...",
                afirmacao: "Melhor não te contar segredos do governo."
            }
        ]
    },
    {
        enunciado: "Qual dessas estações você prefere?",
        alternativas: [
            {
                texto: "Inverno.",
                afirmacao: "Parabéns pelo bom gosto, e sorvete é bom no frio."
            },
            {
                texto: "Verão.",
                afirmacao: "As vezes sair na rua com os amigos e aquele sol na cara é divertido."
            }
        ]
    },
    {
        enunciado: "Se você tivesse que se equipar com um desses itens, você escolheria:",
        alternativas: [
            {
                texto: "Uma espada.",
                afirmacao: "Imagina uma mega espada super ultra maneira com poderes mágicos. Eu teria uma."
            },
            {
                texto: "Um rifle.",
                afirmacao: "Ser um sniper num cenário apocalíptico já foi a fantasia de muita gente..."
            }
        ]
    },
    {
        enunciado: "Sua base de operações seria?",
        alternativas: [
            {
                texto: "Grande e exposta, de forma que ninguém ousasse atacar.",
                afirmacao: "Extravagante e passa a mensagem. Como um império."
            },
            {
                texto: "Secreta e bem defendida.",
                afirmacao: "Com essa base escondida, seus segredos também ficam.."
            }
        ]
    },
    {
        enunciado: "Você prefere....? ",
        alternativas: [
            {
                texto: "Dar uma boa nota para o Igor...?.",
                afirmacao: "Valeu pela nota!! Show de bola!!!"
            },
            {
                texto: "Dar uma nota mais ou menos...😥",
                afirmacao: "Não dá pra ganhar todas... 😭"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O resultado foi...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
