const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
// Perguntas referentes ao Cerrado
    {
        enunciado: "João e Maria estavam explorando uma reserva natural do Cerrado durante as férias, admirando a paisagem e a diversidade de plantas e animais. Enquanto caminhavam, João perguntou a Maria se ela sabia ela sabia o porquê era importante proteger as espécies do Cerrado. Ela respondeu:",
        alternativas: [
            {
                texto:"Porque a extinção de espécies pode desequilibrar o ecossistema e afetar outros seres vivos.",
                afirmacao: "afirmacao"
            },
            {
                texto:"O Cerrado é muito grande e pode se recuperar, então a preocupação com a extinção não é prioridade.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Eles continuaram andando até encontrar um guia local que lhes contou sobre a biodiversidade do Cerrado. O guia mencionou que, além da extinção de espécies, o Cerrado também enfrenta problemas de erosão do solo. O que contribui à erosão do solo?",
        alternativas: [
            {
                texto:"A erosão do solo no Cerrado é causada principalmente pelo desmatamento e práticas agrícolas inadequada",
                afirmacao: "afirmacao"
            },
            {
                texto:"A erosão do solo é um processo natural que não é influenciado pelas atividades humanas.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "No caminho de volta, eles viram várias árvores e plantas características do Cerrado. João ficou curioso e perguntou como o Cerrado influencia o clima da nossa região?",
        alternativas: [
            {
                texto:"O Cerrado ajuda a manter a umidade do ar e abriga grande parte das nascentes de rios que abastecem o país.",
                afirmacao: "afirmacao" 
            },
            {
                texto:"O Cerrado não tem influência significativa no clima da nossa região, uma vez que está longe daqui.",
                afirmacao: "afirmacao"
            }
        ]
    },
// Perguntas referentes à Amazônia
    {
        enunciado: "Carlos e Pedro estavam andando pela amazônia, quando Carolos perguntou por que é importante proteger as espécies da Amazônia, já que era tão grande. Pedro pensou e respondeu:",
        alternativas: [
            {
                texto:"Porque a perda de biodiversidade pode desequilibrar o ecossistema e afetar outros seres vivos.",
                afirmacao: "afirmacao" 
            },
            {
                texto:"Não faz diferença se algumas espécies desaparecerem, a Amazônia é muito grande e pode se recuperar em pouco tempo.",
                afirmacao: "afirmacao" 
            }
        ]
    },
    {
        enunciado: "Ao lerem notícias na internet, eles descobriram que a destruição da floresta afeta também o clima. Como a Amazônia influencia o clima do nosso país?",
        alternativas: [
            {
                texto:"A Amazônia ajuda a regular o clima fluenciando nos padrões de chuva.",
                afirmacao: "afirmacao" 
            },
            {
                texto:"A Amazônia não tem influência significativa no clima do nosso país, outros biomas mais próximos são mais influentes.",
                afirmacao: "afirmacao" 
            }
        ]
    },
    {
        enunciado: "Eles também viram uma reportagem com o cacique local, que falou sobre como a destruição da floresta afetava sua comunidade.",
        alternativas: [
            {
                texto:"A destruição da Amazônia impacta negativamente as comunidades originárias, destruindo seus lares e recursos naturais essenciais para sua sobrevivência.",
                afirmacao: "afirmacao" 
            },
            {
                texto:"As comunidades originárias não são muito afetadas pela destruição da Amazônia, pois aonde vivem hoje, é isolado das florestas.",
                afirmacao: "afirmacao" 
            }
        ]
    },
    {
// Perguntas referentes à Mata Atlântica
        enunciado: "Serjão é um professor de geografia e levou seu sobrinho para uma reserva de mata nativa no Sudeste. Ele perguntou ao sobrinho como esse bioma afeta a economia.",
        alternativas: [
            {
                texto:"A Mata Atlântica é importante para a economia, pois fornece recursos naturais, turismo e contribui para a agricultura sustentável.",
                afirmacao: "afirmacao" 
            },
            {
                texto:"A Mata Atlântica não tem impacto significativo na economia, pois é apenas uma área de preservação pequena.",
                afirmacao: "afirmacao" 
            } 
        ]
    },
    {
        enunciado: "Após sua resposta, ele perguntou por que ela também é vital para comunidades locais.",
         alternativas: [
            {
                texto:"A Mata Atlântica fornece recursos essenciais, como água e alimentos, além de ser uma fonte de renda para muitas famílias.",
                afirmacao: "afirmacao" 
            },
            {
                texto:"As comunidades locais não dependem da Mata Atlântica para sua sobrevivência, já que a região é toda urbanizada hoje.",
                afirmacao: "afirmacao" 
            }
        ]
   },
   {
        enunciado: "Como última pergunta, ele questionou como afetava o clima da região?",
        alternativas: [
            {
                texto:"A destruição da Mata Atlântica pode causar mudanças nos padrões de chuva e aumentar a temperatura, desestabilizando o clima regional.",
                afirmacao: "afirmacao" 
            },
            {
                texto:"A destruição da Mata Atlântica não afeta o clima regional, pois o clima é controlado por fatores globais.",
                afirmacao: "afirmacao" 
            }
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativas of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent =  alternativas.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativas))
                caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Fim do projeto!! :D";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

