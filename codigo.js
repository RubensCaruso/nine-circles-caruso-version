//VERSAÔ LIDA NO INDEX codigo de insersão lá embaixo deste codigo !
let versaoAtualdaMesa = "Beta 06_Ago_2026";

//30 - muitos ajustes, lousa agora fica abaixo das cartas marcadas como sempre no topo... cartas rastreadas agora tem numeração
//16-25 Ahustes gerais, em especial no popup das regras
//15 correção do bug MAQUINA DE ESCREVER DA lousa
//14 colocando confimação de fechamento em mais algumas janelas e categorizando os carimbos na barra da lousa
//13 ajuste na função que TRAVA TODAS AS CARTAS DO MESMO DECK NA MESA! Havia um bug que zoava o zindex fazendo as vezes cartas destravadas irem para tras das travadas por esta função. document.getElementById('create-note-btn').addEventListener('click', createNote); cria as NOTAS INTERNAS da mesa atraves do botão CRIAR NOTAS
//12 --> Ajuste transformando em aba os POST IT
//10 --> Nova barras criadas substituindo quase todos os popup!
//09_Junho_2026 --> todos agrupamentos ajustados!
//07 junho 2026 -->Novo dado D3 criado ebaaaaa!
//06_junho_2026 --> Ajustes nas notas popup... agora ao mover para fora da tela são minimizadas em icones!
//5_junho_2026 --> Vários ajustes e incrementos nas notas! bug que fazia parar de responder no undo e load parece corrigido!
//01_junho_2026 --> cartas que entram com bordas como miniaturas, protecao TRUE ATRIBUTO configurado para no load voltarem com as bordas
//17_maio_2026 -> ALERTS substituidos por mostrar TOAST
//05_Maio_2026 -> ajuste na regua para que ao fechar barra ela volte sem ligar pontos
//25_abr_2026 -> quase certo que clicl longo nos dados agora funciona e problema de movimentos rápidos despararem o rolamenteo resolvido no pc! Falta testar no celular
//24_Abr_2026 -> Correção do click longo para que funcione nos dados para sua seleção e não rolamento!
//22_Abr_2016 -> Regua agora sincronizsda com UNDO E REDO
//20_Abr_2026 -> novo ajuste permitindo somar ou subtrair um dos dados pelo teclado e selecionar sem rolar caso segure um pouco o dado
//18_Abr_2026 -> Ajuste e inclusão do teclado para os carimbos!
//16_Abr_2026 -> Ajuste na barra de carimbos usando agora tambem EMOJIS
//06_mar_2026 -> Otimizacao no Olheiro do minimapa para melhorar performance e correcao nos limites da mesa
//05_mar_2026 -> Ajuste nas funções RESIZECARD e ZOOMGROUPSIZE... elas estavam tendo problemas em redimensionar cartas muito grandes
//93003 mexendo na funcao ROLLDICE
//92002 resolvido popupzoom falhs gravacao!LOUSA e varios problemas do UNDO e REDO ajustados no index!
//90015 Lousa implementada + Ajustes gerais!
//80040 melhora nas rolagens dos dados (faces sem troca)
//80031 Ajuste nas notas! Tentando colocar novos recursos de edição! pequena correcao POPUPZOOM que estava quebrada.
//80020-30 1° SOM de rolamento de dado implementado!
//80010 openpopupzoom() regredido pois detectado problema!
//80000 Ajustes gerais mas muito apronfudados! O index foi ajustado tambem com relção ao sistema de embaralhamento que estava falho
//70020 Ajuste no blur ao virar FLIPCARD()
//70010 function waitUntilImagesFullyLoaded() ajustado assim como o codigo aqui para caso servidor ou internete lenta carregar ainda sim imagens não carregadas durante o setup!
//70000 funções: reativarFuncionalidadesMesa() e  placeCardOnTable(0 foram alteradas para que o clique nos dados seja mais preciso, especificamente ao mover o ponteiro do mouse que agora pode se afastar apos o clique, validando o rolamento!
//60010 função STACKCARD() que AGRUPA + EMBARALHA foi arrumada pois estava capturando cartas afastadas e depois mudando de local erroneamente ao final do embaralhamento
//Minijanela arrumada
//50010 na função handleAutoScroll() agora ha detecção se é mobile alterando o valor da cont edgeThreshold que define quando a mesa inicia o deslizar quando um item alcança as bordas da janela
//50000 Correção urgente no embaralhamento na pagina html!
//41000 Super ajustes gerais nas funções de openpopupzoom()!
//40030 - ajuste no index:observador de boxshadows perdidas como duplicatas azuis ou ao colocar a carta na mesa douradas!
//40020- Ajuste na função bringPopupToFront(popup), agora ao clicar ou tocar ela deseleciona a carta selecionada na mesa
//40010- Implementando popup de texto Openpopupnote() 
//40000- Ajuste nas funções UNDO e REDO no Index.html, agora restaurando tudo sem necessidade de atualizar pagina! 
//38000 - Ajuste na função function openPopupZoom(card), agora ela cria popups moviveis para poder tambem usar em regras! 
//37000 - Ajuste na função adjustZoom(action), agora simulando um arraste da mesa para manter o centro da janela enquanto faz o zoom!
//36000 - Ajuste para que as NOTAS fiquem abaixo das cartas marcadas como sempre no topo: bringNoteToFront(note) e ensureFixedCardsOnTop(); SENDO que nesta ultima é onde é feito o ajuste a cada X segundos organizando as cartas marcadas sempre no topo para que fique acima das demais! Agora as notas ficam abaixo sempre delas, mas acima das demais.
//35040 - Ajuste na função PLACECARDONTABLE, onde quando a carta é colocada na mesa, alem da borda GOLD colocada para facilitar sua localização na mesa, a carta é tambem selecionada! Definindo para isso um temporizador de alguns milesegundos para selecionar a cara colocada na mesa, IMPORTANTE, sem o temporizador a carta não era selecionada mesmo com o codigo funcionando! 
//35030 - Ajuste na função resizeCard(action) e zoomGroupSize(action) na função agora limitando o zoom em 1200px
//35020 - Ajuste na função  openPopupZoom(card) permitindo que a carta seja dilatada alem da seu tamanho original.
//35010 - AJuste na função ROLLDICE(CARD)tentando deixar mais aleátorio as rolagens (Essa modificação adiciona um fator sinusoidal à rolagem. O Math.sin(Date.now() / 1000) cria uma variação suave baseada no tempo)
//35000 - Na página index, incluido lógica que detecta teclas no teclado e as utiliza para chamar funções! 
//34010 - Na pagina index.html(Codigo corrigido lá ok! Nada aqui!) corrigido problema com as bordas tracejadas que ao dar undo ou redo ficavam com tamando 2! Agora todas as ocorrencias no index.html serão: item.style.border = 1
//34009 - marcador circulo amarelo DECK71 incluído!
//34008 - Pequeno ajuste naa funcao mostrar conteudo cartas mostrarConteudoCartas()!
//34007 - Ajuste na função selectCardOnTable(card) para que libere trazendo para frente as cartas com data-locked="true" sejam trazidas para frente, mesmo quando clicadas no popup de mostrarConteudoCartas()
//34005 - na função openpopupZoom(card), agora leva-se em consideração a rotação da carta ao mostrá-la na janela popup!
//34002 - Verifica se o elemento esta travada com data-locked == true, neste caso ela não fica transparente ao mover a mesa clicando sobre ela! ajustado para isso: function onTouchMove(event)  e  function onMouseMove(event)
//34001 - Compensação agora de 1800 passada para 4800! Ela restrinje o movimento das cartas na mesa, este valor funciona bem com cartas aumentadas! Ao simular os CLIQUES ( item.click(); // Simula o clique para garantir o estado) na linha 557...... para evitar que dados sejam colocados atras, diminui um pouco a quantidade para otimizar tempo de carregamento!
//34000 - notas ajustadas na função SAVEFULLPAGE() para o minimo de 10px.... basicamente corrigido o problema de ao carregar algumas notas ficarem esticadas quando o texto é pequeno! Tambem ajustado para ao salvar e restaurar usa HTML ai inves de Text.... isso parece que resolveu o problema de espaçamento entre os paragrafos errado (dobrado)
//33000 - Nova Função para cartas! função para virar a carta horizontalmente function rotateCardHorizontally()
//32000 - Agora ajuste melhor no pulsar amarelo, e ao mover cartas elas se tornam transparentes !
//310000 - Carta selecionada agora com efeito pulsante, ao parar o mouse agora o estado da carta é mostrado!
//300000 - ajustes gerais
//290000 - Vários ajustes com relação a border... alguns casos usando agora boxShadows para não alterar a posição das cartas! Função Duplicar e travar agora mais estável e removendo bordas desnecessárias!
//280014 - NOTAS agora respondem ao click se reorganiando no quesito z-index entre elas! As cartas com marcação sempre na frente ficarão na frente delas, as demais cartas ficam sempre abaxo!
//28013 - Função  Agruparetrazerfrente() agora funciona trazendo para FRETE e para TRAS tanto cartas quanto dos dados! Funciona igual ao bringCardToFront() que agora tambem verifica se é um dado, se for ignora o click simulado evitando rolamento acidental!
//28012 - agrupar E CRIAR  NOVO deck agora conta com condicional que evita que os DADOS sejam incluidos! Ainda não consegui resolver este problema com eles.
//28011 - Agora quando um dado é colocado na mesa ele já é rolado!
//28010 - Incluido nas NOTAS botão de TRAVAR/DESTRAVAR... 
//28001 - Função MOVEDECK() agora tem um temporizador que desliga apos um agrupamento caso o movimento nao ocorra dentro de um certo tempo (testando 3 segundos)Isso evita que ao apenas agrupar, caso não mova a pilha e selecionemos outra carta e a movemos ocorra o movimento tambem indesejado do deck anteriormente agrupado!
//28000 - movedeck() / StackCards() + groupandflipcards() + agruparetrazerparafrente() + zoomgroupsize ... ajustados! O stackcards()[AGRUPA E EMBARALHA]] agora chama direto a funcao deckmovie() vou ter que fazer para os outros agrupanentos! 
//v27001 - Colocado compensação manual de posicionamento do grid na mesa na função [abrirPopupGrid(0] 
//v26000 - Novo sistema de save e carga para arquivos criado!
//v25000 - novo UNDO e agora cartas no topo podem ao serem clicadas alternar sua posicao zindex! masvtenho que acertar o valor de configuracao na funcao selectCardOnTable! Quanto maior o valor, mais tempo demora para ao clicar nas do topo ela va para tras!
//v24002 - tentando ajustar para que o popup feche apos chamar a funcção de zoom na carta
//24001 - O KEEP ALIVE foi reimplementado agora sim respondendo corretamente! 
//24000 - efeitos visuais de virar aplicado as funcoes AGRUPAR+VIRAR e AGRUPAR+EMBARALHAR+VIRAR
//23004 - Grid se nada digitado, usara valires padrao 4 para espacamento e TODAS as cartas enpilhadas!
//23003 - Efeito de embaralhamento aplicado na função STACKCARDS(), somente no embaralhamento das cartas
//23002 - compensacao geral aumentada de 800 para 1800!

//23001
//23000
//22000
//v21000 -
// v20050 - resolvido problema com o arraste da mesa quando mouse sai da janela !
// v20024 - espaçamento problematico das imagens de fundo usando <br> corrigido removendo os <br> e aplicando diretametne css nas imagens de fundo!
// v20020 - Ajuste nas funções de movimento, agora diminuido ainda mais o pulinho pois levando em consideraçao a scale aplicada a carta!
//v20011- Popup de zoom para as carta aprimorado e agora inclui botão virar, cambiando entre cardX.jpeg e cardXback.jpeg 
//v20000 - Cartas Travadas na mesa não podem virar marcadores no topo, e vice versa!
//v15007 - popup de escolhas das faces dos dados ajustada para não ter botão fechar e incrementado função +ou- e face oposta no proprio popup! 

//v14700 - reintegrada a função stackCards() que agrupa e pilha o deck e agora dá as mesmas opçoes de embaralhamento da função shuffleDeckImages()
//14605 - Novo D20 azul incluido!
//14604 - novo formato de popup para,seleciknar faces dos dados!
// 14600 - deck descarte agora incluido no davece load!
// v14002 - Novo deck de Descarte implementado! Ajustes nos popup direto no codigo

//v13300 - REMOVIDO longpress, NO lugar colocado  botão.... 

//Ao colocar algum item na mesa ela fica 2,5 segundos com borda grossa azul para identificar! 

// IMPORTANTE: na função travar desabilitei a SIMULAÇÂO DO CLICK por conta dos dados já que se não ao travá-los eles rolam! Vamos verificar se não vai alterar mais nenhum funcionamento da mesa

// 1. Variáveis Globais (Devem estar no topo do arquivo)
let lousaAtiva = false;
let globalCanvas = null;
let globalCtx = null;
let carimboAtual = null;
let modoBorracha = false;
let corAtual = '#ff0000';
let grossuraAtual = 20;
let desenhando = false;
let popupFerramentas = null;

// Memórias de tamanho independentes
let tamanhoPincelSalvo = 20;  // Ou o valor que vier do seu Load
let tamanhoCarimboSalvo = 20; 
let tamanhoBorrachaSalvo = 20;
let tamanhoTextoAtual = 20;   // <<< ADICIONADO: Memória da Máquina de Escrever
let tamanhoReguaSalvo = 20;   // <<< ADICIONADO: Memória da Régua

// Memórias para a linha reta da lousa
let modoRegua = false;
let ultimoPontoRegua = null; // Armazena {x, y} do último clique
let pontosReguaUndo = [];
let pontosReguaRedo = [];


// --- ADICIONE ESTAS DUAS LINHAS AQUI 👇 ---
let modoTexto = false;
let lousaInputTexto = null; 
// -----------------------------------------


// Adicione esta linha no topo do seu arquivo JS (fora da função) para garantir o controle
window.rastroColorIndex = window.rastroColorIndex || 0;




//memoria para click longo bloquear o rolamento
let globalMouseDownTime = 0;
let globalLastPressDuration = 0;
let ultimaDuracaoClique = 0;

let bloqueioCarregamento = true;

// Libera o rolamento após 3 segundos da página aberta
setTimeout(() => {
    bloqueioCarregamento = false;
    console.log("🎲 Dados prontos para uso.");
}, 3000);









window.mostrarToast = function(mensagem, tipo = 'info') {
    console.log("📢 Toast disparado (100% clicável por trás):", mensagem, "Tipo:", tipo);

    let container = document.getElementById('vtt-toast-container-blindado');
    
    if (!container) {
        container = document.createElement('div');
        container.id = 'vtt-toast-container-blindado';
        document.documentElement.appendChild(container);
    }
    
    // CONTAINER: Ocupa a tela toda mas não bloqueia nada
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.justifyContent = 'center'; 
    container.style.alignItems = 'center';     
    container.style.gap = '12px';
    container.style.zIndex = '9999999999';    
    container.style.pointerEvents = 'none';    /* Atravessa o clique */

    // CRIAÇÃO DO TOAST
    const toast = document.createElement('div');
    toast.innerText = mensagem;
    
    // Estilos visuais elegantes e responsivos
    toast.style.background = 'rgba(26, 26, 26, 0.92)'; /* Levemente transparente para ver o fundo */
    toast.style.color = '#ffffff';
    toast.style.padding = '16px 26px';
    toast.style.borderRadius = '8px';
    toast.style.fontFamily = 'Arial, sans-serif';
    toast.style.fontSize = '16px';
    toast.style.fontWeight = 'bold';
    toast.style.textAlign = 'center';
    toast.style.boxShadow = '0 12px 40px rgba(0,0,0,0.85)';
    
    // O PULO DO GATO: Faz o balão também ignorar o mouse/toque. 
    // Qualquer clique aqui vai direto para a carta, dado ou lousa que estiver atrás!
    toast.style.pointerEvents = 'none'; 
    
    // Proteção para telas de celular
    toast.style.width = 'max-content';
    toast.style.maxWidth = '85vw';
    toast.style.boxSizing = 'border-box';
    
    // Efeito de transição suave
    toast.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    toast.style.transform = 'scale(0.7)';
    toast.style.opacity = '0';
    
    // Cor da borda lateral indicativa
    if (tipo === 'warning') {
        toast.style.borderLeft = '6px solid #ffcc00'; // Alerta (Amarelo)
    } else {
        toast.style.borderLeft = '6px solid #00ccff'; // Info (Azul)
    }
    
    container.appendChild(toast);
    
    // Ativa a animação de surgimento
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'scale(1)';
    }, 15);
    
    // Remove suavemente após 2 segundos (tempo ligeiramente menor já que é passivo)
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'scale(0.8)';
        setTimeout(() => { 
            toast.remove(); 
        }, 200);
    }, 2000);
}
























// ==========================================
// SISTEMA DE SOM DOS DADOS (Versão Final de Auto-Correção)
// ==========================================
var poolAudiosDado = [];
var indiceAudioDado = 0;
var audiosInicializados = false;

function criarAudiosDado() {
    if (!audiosInicializados) {
        for (let i = 0; i < 15; i++) {
            poolAudiosDado.push(new Audio('sons/dado.mp3'));
        }
        audiosInicializados = true;
        console.log("Sistema de áudio inicializado.");
    }
}

// Inicializa assim que o arquivo JS é lido pelo navegador
criarAudiosDado();

// Destrava para Mobile (continua necessário)
document.body.addEventListener('touchstart', function unlockAudio() {
    criarAudiosDado();
    poolAudiosDado.forEach(audio => {
        audio.volume = 0;
        audio.play().then(() => {
            audio.pause();
            audio.currentTime = 0;
        }).catch(() => {});
    });
    document.body.removeEventListener('touchstart', unlockAudio); 
}, { once: true });

function tocarSomDado() {
    criarAudiosDado(); 
    
    if (poolAudiosDado.length === 0) return;

    const som = poolAudiosDado[indiceAudioDado];
    som.volume = 1.0; 
    som.currentTime = 0; 
    
    // O play() retorna uma promessa, tratamos para evitar erros no console
    var playPromise = som.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Som aguardando interação do usuário para tocar no primeiro dado.");
        });
    }
    
    indiceAudioDado++;
    if (indiceAudioDado >= poolAudiosDado.length) indiceAudioDado = 0;
}











//aLGUMAS VARIAVEIS GLOBAIS... NÃO TODAS!
// === VARIÁVEIS DE RASTREIO INDIVIDUAL ===
const DECK_DO_MARCADOR = 73;            // Qual deck será o marcador
const TEMPO_PARA_MARCAR = 2000;         // Tempo parado (5000 = 5 segundos)
let rastreioTimers = new Map();         // Guarda os timers de cada carta rastreada
// Variáveis para rastrear o ponto anterior
let ultimaPosicaoX = 0;
let ultimaPosicaoY = 0;


// FLAG Impede o menu de abrir durante a restauração de foco
let bloqueioMenuRastreio = false; 




//FLAG PARA USO NO CELUKAR PARA QUANDO REDIMENDIONANDO O POPUPZOOM EKE BAO SER MOVIDO!
let isPopupResizing = false;

//________________________________________________________________________________________________

let lastCenterMinimap = { x: 100, y: 75 };
let dragging = false;
let minimapMinimizado = false;
let atualizarMinimapaPendente = false; // Flag global de controle

// Cria o minimapa na tela
function criarMinimapaMesa() {
  const minimap = document.createElement('div');
  minimap.id = 'minimap';

  Object.assign(minimap.style, {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    width: '200px',
    height: '150px',
    backgroundColor: '#111',
    border: '2px solid #fff',
    zIndex: '99999',
    overflow: 'hidden',
    opacity: '0.9',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'width 0.3s, height 0.3s',
    touchAction: 'none',
    pointerEvents: 'auto'
  });

  const minimapImg = document.createElement('img');
  minimapImg.id = 'minimap-image';
  Object.assign(minimapImg.style, {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    pointerEvents: 'none',
    top: '0',
    left: '0'
  });

  const linhaH = document.createElement('div');
  linhaH.id = 'linha-horizontal';
  Object.assign(linhaH.style, {
    position: 'absolute',
    height: '1px',
    width: '100%',
    backgroundColor: 'red',
    top: `${lastCenterMinimap.y}px`,
    left: '0',
    transform: 'translateY(-0.5px)',
    pointerEvents: 'none'
  });

  const linhaV = document.createElement('div');
  linhaV.id = 'linha-vertical';
  Object.assign(linhaV.style, {
    position: 'absolute',
    width: '1px',
    height: '100%',
    backgroundColor: 'red',
    left: `${lastCenterMinimap.x}px`,
    top: '0',
    transform: 'translateX(-0.5px)',
    pointerEvents: 'none'
  });

  const btnMin = document.createElement('div');
  btnMin.textContent = '×';
  btnMin.id = 'btn-minimizar';
  Object.assign(btnMin.style, {
    position: 'absolute',
    top: '2px',
    right: '5px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    zIndex: '100001',
    userSelect: 'none',
  });

  btnMin.addEventListener('click', (e) => {
    e.stopPropagation();
    minimap.style.width = '40px';
    minimap.style.height = '30px';
    minimapMinimizado = true;
  });

  minimap.addEventListener('click', () => {
    if (minimapMinimizado) {
      minimap.style.width = '200px';
      minimap.style.height = '150px';
      minimapMinimizado = false;
    }
  });

  minimap.addEventListener('touchend', () => {
    if (minimapMinimizado) {
      minimap.style.width = '200px';
      minimap.style.height = '150px';
      minimapMinimizado = false;
    }
  });

  // Ordem correta dos elementos
  minimap.appendChild(minimapImg);
  minimap.appendChild(linhaH);
  minimap.appendChild(linhaV);
  minimap.appendChild(btnMin);

  // ✅ Camada por cima da imagem para toque
  const minimapOverlay = document.createElement('div');
  minimapOverlay.id = 'minimap-overlay';
  Object.assign(minimapOverlay.style, {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '10',
    backgroundColor: 'transparent',
    touchAction: 'none',
    pointerEvents: 'auto'
  });
  minimap.appendChild(minimapOverlay);

  document.body.appendChild(minimap);

  iniciarArrasteMinimapa(minimapOverlay);
  solicitarAtualizacaoMinimapa();
}

function solicitarAtualizacaoMinimapa() {
  if (atualizarMinimapaPendente) return;
  atualizarMinimapaPendente = true;
  setTimeout(() => {
    atualizarImagemMinimapa();
    atualizarMinimapaPendente = false;
  }, 500);
}




    
//DEsativando temporariamente para tentar ter menos processamento! PAra reativar apague DESATIVADo
function atualizarImagemMinimapaDESATIVADO() {
  const table = document.getElementById('table-area');
  const minimapImg = document.getElementById('minimap-image');
  if (!table || !minimapImg) return;

  const scaleFactor = 0.05;

  if (window.innerWidth <= 768) {
  const markerCanvas = document.createElement('canvas');
  markerCanvas.width = table.scrollWidth * scaleFactor;
  markerCanvas.height = table.scrollHeight * scaleFactor;
  const ctx = markerCanvas.getContext('2d');

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, markerCanvas.width, markerCanvas.height);

  const allImgs = table.querySelectorAll('img');
  const cards = table.querySelectorAll('.card');
  const bgImgs = Array.from(allImgs).filter(img => !img.classList.contains('card'));

  // ✅ Carrega primeiro as imagens de fundo
  Promise.all(bgImgs.map(bg => {
    return new Promise(resolve => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = bg.src;
      img.onload = () => {
        const left = bg.offsetLeft;
        const top = bg.offsetTop;
        const width = bg.offsetWidth;
        const height = bg.offsetHeight;

        ctx.save();
        ctx.drawImage(
          img,
          left * scaleFactor,
          top * scaleFactor,
          width * scaleFactor,
          height * scaleFactor
        );
        ctx.restore();
        resolve();
      };
      img.onerror = resolve;
    });
  })).then(() => {
    // ✅ Agora sim, desenha as cartas
    return Promise.all(Array.from(cards).map(card => {
      return new Promise(resolve => {
        const imgSrc = card.getAttribute('data-original-src') || card.src;
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = imgSrc;

        img.onload = () => {
          const left = parseFloat(card.style.left) || 0;
          const top = parseFloat(card.style.top) || 0;
          const width = card.offsetWidth;
          const height = card.offsetHeight;

          const rotation = parseFloat(card.getAttribute('data-rotation')) || 0;
          const scale = parseFloat(card.getAttribute('data-scale')) || 1;

          const centerX = (left + width / 2) * scaleFactor;
          const centerY = (top + height / 2) * scaleFactor;
          const drawWidth = width * scale * scaleFactor;
          const drawHeight = height * scale * scaleFactor;

          ctx.save();
          ctx.translate(centerX, centerY);
          ctx.rotate(rotation * Math.PI / 180);
          ctx.drawImage(img, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
          ctx.restore();

          resolve();
        };
        img.onerror = resolve;
      });
    }));
  }).then(() => {
    minimapImg.src = markerCanvas.toDataURL();
  });

  return;
}

  // 💻 PC — mantém html2canvas normalmente
  const clone = table.cloneNode(true);
  clone.style.transform = 'scale(1)';
  clone.style.position = 'fixed';
  clone.style.top = '-9999px';
  clone.style.left = '-9999px';
  clone.style.width = table.scrollWidth + 'px';
  clone.style.height = table.scrollHeight + 'px';

  document.body.appendChild(clone);

  html2canvas(clone, {
    backgroundColor: null,
    useCORS: true,
    scale: 0.1
  }).then(canvas => {
    minimapImg.src = canvas.toDataURL();
    document.body.removeChild(clone);
  }).catch(() => {
    document.body.removeChild(clone);
  });
}





function getZoom() {
  const transform = document.getElementById('table-area').style.transform;
  const match = /scale\(([\d.]+)\)/.exec(transform);
  return match ? parseFloat(match[1]) : 1;
}

function atualizarMinimapa() {
  // vazio por enquanto
}

const compensationX = 0;
const compensationY = 0;

function iniciarArrasteMinimapa(minimap) {
  let dragging = false;

  function moverScrollMinimap(clientX, clientY) {
    const tableWrapper = document.getElementById('table-wrapper');
    const table = document.getElementById('table-area');
    const rect = minimap.getBoundingClientRect();
    const relX = (clientX - rect.left) / rect.width;
    const relY = (clientY - rect.top) / rect.height;

    const mesaW = table.scrollWidth;
    const mesaH = table.scrollHeight;
    
    
    const zoom = getZoom();

    const centerMesaX = relX * mesaW;
    const centerMesaY = relY * mesaH;

    const scrollX = (centerMesaX * zoom) - tableWrapper.clientWidth / 2;
    const scrollY = (centerMesaY * zoom) - tableWrapper.clientHeight / 2;

    tableWrapper.scrollLeft = scrollX;
    tableWrapper.scrollTop = scrollY;

    const linhaH = document.getElementById('linha-horizontal');
    const linhaV = document.getElementById('linha-vertical');
    const minimapX = relX * minimap.clientWidth;
    const minimapY = relY * minimap.clientHeight;

    if (linhaH) linhaH.style.top = `${minimapY + compensationY}px`;
    if (linhaV) linhaV.style.left = `${minimapX + compensationX}px`;

    lastCenterMinimap.x = minimapX;
    lastCenterMinimap.y = minimapY;
  }

  function start(e) {
    if (e.target.id === 'btn-minimizar') return;
    dragging = true;
    const pos = e.touches?.[0] || e;
    moverScrollMinimap(pos.clientX, pos.clientY);
    if (e.cancelable) e.preventDefault();
  }

  function move(e) {
    if (!dragging) return;
    const pos = e.touches?.[0] || e;
    moverScrollMinimap(pos.clientX, pos.clientY);
    if (e.cancelable) e.preventDefault();
  }

  function end() {
    dragging = false;
  }

  minimap.addEventListener('mousedown', start);
  minimap.addEventListener('mousemove', move);
  document.addEventListener('mouseup', end);

  minimap.addEventListener('touchstart', start, { passive: false });
  minimap.addEventListener('touchmove', move, { passive: false });
  document.addEventListener('touchend', end);
}

// Inicialização automática
window.addEventListener('load', () => {
  criarMinimapaMesa();
  setInterval(atualizarMinimapa, 300);
  
  // Injeta a versão da mesa no HTML de forma garantida no html
  const elVersao = document.getElementById('versao-mesa-display');
  if (elVersao && typeof versaoAtualdaMesa !== 'undefined') {
      elVersao.textContent = versaoAtualdaMesa;
  }
});




// Observador de mudanças na mesa
// Observador de mudanças na mesa
const mesa = document.getElementById('table-area');

if (mesa) {
  let debounceTimer = null;
  const observer = new MutationObserver((mutationsList) => {
    let movimentoRelevante = false;

    for (const mutation of mutationsList) {
      // Agora ele SÓ se importa se algo foi adicionado ou removido da mesa (ex: puxar carta do deck)
      if (mutation.type === 'childList') {
        movimentoRelevante = true;
      }
    }

    if (movimentoRelevante) {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        solicitarAtualizacaoMinimapa();
      }, 1000);
    }
  });

  observer.observe(mesa, {
    childList: true,
    subtree: true
    // AS DUAS LINHAS ABAIXO FORAM APAGADAS PARA SALVAR O PROCESSADOR:
    // attributes: true,
    // attributeFilter: ['style']
  });
}











//__________________________________________________________________________________


//Minimiza com dois toques ou cliques os poppups abertos!
// Área dock na tela (executa uma vez no seu código inicial)

//🧠 Gerador de cor baseado no ID:
let noteCounter = 1;
const popupNameMap = {}; // Relaciona popup.id → "Nota N"

function generateColorFromId(id) {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 70%, 50%)`;  // Cores vibrantes
}






//Dock construção
const dockContainer = document.createElement('div');
const dock = document.createElement('div');
dock.id = 'popup-dock';

function isMobile() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

if (isMobile()) {
  // Estilos para container fixo que limita ao viewport real
  Object.assign(dockContainer.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: `${window.visualViewport ? window.visualViewport.width : window.innerWidth}px`,
    height: `${window.visualViewport ? window.visualViewport.height : window.innerHeight}px`,
    overflow: 'hidden',
    pointerEvents: 'none', // deixar passar eventos fora do dock
    zIndex: '9999',
  });

  document.body.appendChild(dockContainer);

  // Estilos para dock absoluto dentro do container
  Object.assign(dock.style, {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    backgroundColor: 'rgba(0,0,0,0.85)',
    padding: '8px',
    borderRadius: '12px',
    pointerEvents: 'auto', // permitir interação dentro do dock
    maxWidth: '90vw',
    overflowX: 'auto',
  });

  dockContainer.appendChild(dock);

  // Atualiza tamanho do container conforme viewport muda
  function updateContainerSize() {
    const vv = window.visualViewport;
    if (vv) {
      dockContainer.style.width = vv.width + 'px';
      dockContainer.style.height = vv.height + 'px';
    } else {
      dockContainer.style.width = window.innerWidth + 'px';
      dockContainer.style.height = window.innerHeight + 'px';
    }
  }

  updateContainerSize();

  window.addEventListener('resize', updateContainerSize);
  window.addEventListener('scroll', updateContainerSize);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', updateContainerSize);
    window.visualViewport.addEventListener('scroll', updateContainerSize);
  }
} else {
  // Desktop - dock fixo no centro base como antes
  Object.assign(dock.style, {
    position: 'fixed',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '5px 10px',
    borderRadius: '8px',
    zIndex: '9999',
    boxShadow: '0 0 5px rgba(0,0,0,0.5)',
    maxWidth: '90vw',
    overflowX: 'auto'
  });

  document.body.appendChild(dock);
}





//Função de minimizar/restaurar com nome sequencial + cor fixa:
// 🧠 Mapas globais para nome e cor dos popups
const popupColorMap = {};  // popup.id → cor fixa

// 🎨 Gerador de cor baseado no id (mantido simples)
function generateColorFromId(id) {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 70%, 50%)`;  // cor vibrante
}





// 🗂️ Função de minimizar/restaurar com nome sequencial + cor fixa:
function toggleMinimizePopup(popup) {
    const isMinimized = popup.getAttribute('data-minimized') === 'true';
    const popupId = popup.id;

    // 🔗 A cor do marcador é baseada na borda atual do popup
    let color = 'gold'; // fallback

    if (popup.dataset.borderColor) {
        color = popup.dataset.borderColor;
    } else {
        // Tenta extrair da borda visível
        const border = popup.style.border;
        const colorMatch = border.match(/(#[0-9a-fA-F]{3,6}|rgba?\([^)]+\)|hsl\([^)]+\)|\brgb\([^)]+\)|\b[a-zA-Z]+\b)(?=\s*\)?$)/);
        if (colorMatch) {
            color = colorMatch[0];
        } else {
            // Fallback final com cor gerada
            if (!popupColorMap[popupId]) {
                popupColorMap[popupId] = generateColorFromId(popupId);
            }
            color = popupColorMap[popupId];
        }
    }

    if (!popupNameMap[popupId]) {
        let name = `Nota ${noteCounter++}`; // fallback padrão

        if (popup.classList.contains('popup-note')) {
            const textArea = popup.querySelector('[contenteditable]');
            if (textArea) {
                const text = textArea.innerText.trim();
                if (text.length > 0) {
                    const firstWord = text.split(/\s+/)[0];
                    name = firstWord.length > 20 ? firstWord.slice(0, 20) : firstWord;
                }
            }
        } else if (popup.classList.contains('popup-zoom')) {
            // Buscar o input numérico "Ir para imagem"
            const goToInput = popup.querySelector('input[type="number"]');
            if (goToInput && goToInput.value.trim() !== '') {
                name = `Page ${goToInput.value.trim()}`;
            } else {
                // fallback caso campo vazio
                name = `Image ${noteCounter++}`;
            }
        }

        popupNameMap[popupId] = name;
    }

    const name = popupNameMap[popupId];

    // ... resto do seu código que usa name e color para criar o botão do dock ...

    
    
    

    const existingButton = dock.querySelector(`[data-popup-id="${popupId}"]`);
if (!isMinimized) {
    if (existingButton) return;

    // 🔥 Salvar estado
if (popup.classList.contains('popup-zoom')) {
        const img = popup.querySelector('img');
        const imgContainer = popup.querySelector('.img-container');
        // 👇 A MESMA CORREÇÃO AQUI
        const scrollLeft = Math.max(imgContainer?.scrollLeft || 0, popup.scrollLeft || 0);
        const scrollTop = Math.max(imgContainer?.scrollTop || 0, popup.scrollTop || 0);

    const goToInput = popup.querySelector('input[type="number"]');
    const pageNumber = goToInput ? goToInput.value : '';

    // ✅ Garante que o popup tenha um id único, necessário para restaurar corretamente depois
    if (!popup.id) {
        popup.id = `popup-zoom-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }

    // ✅ Obtém a rotação numérica corretamente
    const rotation = img ? parseInt(img.getAttribute('data-rotation') || '0') : 0;

    popup.dataset.savedState = JSON.stringify({
        type: 'zoom',
        cardSrc: (() => {
            let src = img ? img.getAttribute('data-original-src') || img.src : null;
            if (img?.getAttribute('data-flipped') === 'true' && src) {
                src = src.replace('back.jpeg', '.jpeg'); // remove "back" antes de salvar
          
  }
            return src;
        })(),
        flipped: img?.getAttribute('data-flipped') === 'true',
        left: popup.style.left,
        top: popup.style.top,
        width: popup.style.width,
        height: popup.style.height,
        transform: img ? img.style.transform : 'rotate(0deg)',
        rotation: rotation, // ✅ Inserido corretamente
        imgWidth: img ? img.style.width : '400px',
        zIndex: popup.style.zIndex,
        popupId: popup.id, // ✅ usado no openPopupZoom e getElementById
        pageNumber: pageNumber,
scrollLeft: scrollLeft,
scrollTop: scrollTop,    
        loadAllPages: popup.dataset.loadAllPages === 'true', // 🔥 ADICIONE ESTA LINHA
        color: popup.dataset.borderColor || 'gold'
        
    
       });
} else if (popup.classList.contains('popup-note')) {
        const textArea = popup.querySelector('[contenteditable]');
        const body = textArea?.parentElement;

        popup.dataset.savedState = JSON.stringify({
            type: 'note',
            content: textArea ? textArea.innerHTML : '',
            left: popup.style.left,
            top: popup.style.top,
            width: popup.style.width,
            height: popup.style.height,
            backgroundColor: popup.style.backgroundColor,
            border: popup.style.border,
            textBackground: body ? body.style.backgroundColor : '',
            textColor: body ? body.style.color : '',
            zIndex: popup.style.zIndex,
            popupId: popup.id
        });
    }

    popup.style.display = 'none';
    popup.setAttribute('data-minimized', 'true');


        const dockButton = document.createElement('div');
        dockButton.classList.add('dock-button');
        dockButton.innerText = name;
        dockButton.title = name;

        Object.assign(dockButton.style, {
            backgroundColor: color,
            color: 'white',
            padding: '5px 10px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '12px',
            border: '2px solid white',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap'
        });

     dockButton.onclick = () => {
    const savedState = JSON.parse(popup.dataset.savedState || '{}');

    console.log('🔄 Restaurando popup:', savedState);

    popup.remove();

    if (savedState.type === 'zoom') {
        recreatePopupZoomFromState(savedState, popupNameMap[popupId]);  // ← passa o nome do marcador
    } else if (savedState.type === 'note') {
        recreatePopupNote(savedState);
    }

    dock.removeChild(dockButton);
};


        dockButton.setAttribute('data-popup-id', popupId);
        dock.appendChild(dockButton);
    } else {
        popup.style.display = 'block';
        popup.setAttribute('data-minimized', 'false');
        if (existingButton) existingButton.remove();
    }
}




// 🔄 Função para recriar popup de imagem exatamente com os dados salvos
// 🔄 Função para recriar popup de imagem exatamente com os dados salvos
function recreatePopupZoomFromState(state, markerName) {
    if (!state || !state.cardSrc) {
        console.error('Dados insuficientes para restaurar popup de imagem.');
        return;
    }

    const options = {
        left: state.left,
        top: state.top,
        width: state.width,
        height: state.height,
        zIndex: state.zIndex,
        transform: state.transform,
        rotation: state.rotation || '0',
        imgWidth: state.imgWidth,
        restoredPopupId: state.popupId,
        pageNumber: state.pageNumber,
        color: state.color,
        scrollLeft: state.scrollLeft || 0,
        scrollTop: state.scrollTop || 0,
        loadAllPages: state.loadAllPages
    };

    const dummyCard = document.createElement('img');
    
    // 👇 ADICIONE ESTAS DUAS LINHAS AQUI 👇
    dummyCard.dataset.pendingScrollLeft = state.scrollLeft || 0;
    dummyCard.dataset.pendingScrollTop = state.scrollTop || 0;
    // 👆 ---------------------------- 👆
    
    
    // Verifica se flipped está true e ajusta o src para a imagem de trás
    let cardSrcToUse = state.cardSrc;
    if (state.flipped) {
        if (!state.cardSrc.includes('back.jpeg')) {
            cardSrcToUse = state.cardSrc.replace(/\.jpeg$/i, 'back.jpeg');
        }
    }

    dummyCard.setAttribute('data-original-src', cardSrcToUse);
    dummyCard.setAttribute('data-rotation', state.rotation || '0');
    dummyCard.setAttribute('data-flipped', state.flipped ? 'true' : 'false');

    // Log para análise
    if(state.flipped) {
        console.log(`[Restore] Carta está virada! Usando verso.`);
    } else {
        console.log(`[Restore] Carta não está virada. Usando frente.`);
    }

    // Vincula a cor e abre o popup
    popupColorMap[state.popupId] = state.color;
    
    // ESTA FUNÇÃO ABAIXO DEVE CONTER O "RADAR" DE SCROLL PARA FUNCIONAR
    openPopupZoom(dummyCard, options);

} // FECHAMENTO EXATO DA FUNÇÃO. NÃO ADICIONE NADA ABAIXO DISSO.





function enableMinimizeOnDoubleClick(popup) {
    let lastTap = 0;

    function isInteractiveElement(el) {
        const tag = el.tagName.toLowerCase();
        if (['button', 'input', 'textarea', 'select', 'label'].includes(tag)) return true;
        // Verifica se é div editável
        if (tag === 'div' && el.isContentEditable) return true;
        return false;
    }

    popup.addEventListener('dblclick', (e) => {
        if (isInteractiveElement(e.target)) return;
        toggleMinimizePopup(popup);
    });

    popup.addEventListener('touchend', (e) => {
        if (isInteractiveElement(e.target)) return;

        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;

        if (tapLength < 500 && tapLength > 0) {
            e.preventDefault();
            toggleMinimizePopup(popup);
        }

        lastTap = currentTime;
    });
}










//_________________________________________________________________________________________________




//Algumas variaveis
let topPopupZIndex = 1000; // 🔝 Controle exclusivo dos popups (texto e imagem)

//🔥 Função centralizada para trazer qualquer popup (texto ou imagem) para frente:
function bringPopupToFront(popup) {
    deselectCard(); // Deseleciona carta selecionada anteriormente na mesa caso haja  como integro isso apos 

// 👇 INCLUÍDA A CLASSE .popup-note2 PARA AS REGRAS E ÍNDICES
    const allPopups = document.querySelectorAll('.popup-zoom, .popup-note, .popup-note2');

    // 🔝 Atualiza topPopupZIndex sempre que necessário
    const currentMax = Math.max(...Array.from(allPopups).map(p => parseInt(p.style.zIndex) || 1000), 1000);
    topPopupZIndex = Math.max(currentMax, topPopupZIndex) + 1;

    popup.style.zIndex = topPopupZIndex;
}










// Mantenha a página ativa com keep-alive
setInterval(() => {
    fetch('/jogos');  // Mande uma requisição ao servidor para manter a conexão viva
        console.log('keep-alive requisição enviada para o servidor...');
}, 60000);  // 60 segundos



function reloadCardImage() {
    if (!selectedCard) {
       // alert("Nenhuma carta selecionada!");
        mostrarToast("Nenhuma Carta selecionada!", "warning");
        return;
    }

    const cardSrc = selectedCard.getAttribute('data-original-src');
    selectedCard.src = '';  // Limpa o `src` temporariamente
    setTimeout(() => {
        const timestamp = new Date().getTime();  // Cache busting para evitar problemas de cache
        selectedCard.src = `${cardSrc}?t=${timestamp}`;
        //alert("Imagem da carta recarregada!");
        mostrarToast("Imagem da Carta recarregada!", "warning");
    }, 100);  // Pequeno delay para forçar o navegador a recarregar
}





//faz o tratametno de erro caso a imagem do deck não carregue! IMAGENS BARRA DA ESQUERDA
function reloadDeckImage(imgElement, src) {
    const timestamp = new Date().getTime();  // Gera um timestamp único
    imgElement.src = `${src}?t=${timestamp}`;  // Força o recarregamento da imagem com cache busting
}










//__________________________________________________________


// Função para obter o ID único da página a partir da meta tag
function getPageId() {
    const metaTag = document.querySelector('meta[name="game-id"]');
    return metaTag ? metaTag.getAttribute('content') : null;
}

// ID exclusivo da página atual
const pageId = getPageId();








function saveFullPage() {
    if (!pageId) {
      //  alert("ID do jogo não encontrado!");
          mostrarToast("ID do jogo não encontrado!", "warning");

        return;
    }

    // 1. Criamos um "clone" invisível da área da mesa
    // Isso permite mexer nos dados do save sem afetar o que você vê na tela
    const tableArea = document.getElementById('table-area');
    const tempContainer = tableArea.cloneNode(true);

    // 2. No CLONE, nós desligamos o registro de rastreio de todas as cartas
    const cartasNoClone = tempContainer.querySelectorAll('.card');
    cartasNoClone.forEach(carta => {
       // if (carta.getAttribute('data-tracked') === 'true') {
          //  carta.setAttribute('data-tracked', 'false');
      //  }
    });

    // 3. O conteúdo salvo será o HTML do CLONE (limpo), 
    // enquanto a sua mesa real continua com o rastreio ligado!
    const savedContent = tempContainer.innerHTML;

  
    // 4. Processamento das Notas
    const notes = document.querySelectorAll('.note');
    const notesData = Array.from(notes).map(note => ({
        content: note.innerHTML,
        left: note.style.left || "0px",
        top: note.style.top || "0px",
        // 👇 ADICIONE ESTAS DUAS LINHAS AQUI 👇
        width: note.style.width || (note.offsetWidth + 'px'),
        height: note.style.height || (note.offsetHeight + 'px'),
        backgroundColor: note.style.backgroundColor || "yellow",
        color: note.style.color || "black",
        padding: note.style.padding || "10px",
        borderRadius: note.style.borderRadius || "5px",
        border: note.style.border || "1px solid #ccc",
        minWidth: note.style.minWidth || "10px",
        zIndex: note.style.zIndex || "1",
        isLocked: note.isLocked || false 
    }));

    // ... restante do código (localStorage.setItem, etc.)



 // 📌 ADICIONE ESTA LINHA PARA DEPURAÇÃO
    console.log("Notas salvas no estado:", notesData);



    // Adicionar o conteúdo bruto do deck44
    const deck44Cards = allDecks[44] || []; 

    localStorage.setItem(`${pageId}_savedContent`, savedContent);
    localStorage.setItem(`${pageId}_notesData`, JSON.stringify(notesData));
    localStorage.setItem(`${pageId}_deck44Cards`, JSON.stringify(deck44Cards));


// Salvar os popups de zoom abertos
// Salvar os popups de zoom abertos
const popupZooms = document.querySelectorAll('.popup-zoom');

const visiblePopupsData = Array.from(popupZooms).map(popup => {
    const img = popup.querySelector('img');
    const transform = img?.style.transform || '';
    const rotationMatch = transform.match(/rotate\((-?\d+)deg\)/);
    const rotation = rotationMatch ? parseInt(rotationMatch[1]) : 0;

    
const imgContainer = popup.querySelector('.img-container');
    // Tenta ler o scroll atual da tela
    let currentScrollTop = Math.max(imgContainer?.scrollTop || 0, popup.scrollTop || 0);
    let currentScrollLeft = Math.max(imgContainer?.scrollLeft || 0, popup.scrollLeft || 0);
    // MÁGICA: Se o valor da tela for 0 (provavelmente porque está minimizado), 
    // ele puxa o valor do nosso "Adesivo de Memória".
    const scrollTop = currentScrollTop === 0 ? (parseInt(popup.getAttribute('data-memoria-top')) || 0) : currentScrollTop;
    const scrollLeft = currentScrollLeft === 0 ? (parseInt(popup.getAttribute('data-memoria-left')) || 0) : currentScrollLeft;


    return {
        cardSrc: img?.getAttribute('data-original-src') || '',
        left: popup.style.left || '0px',
        top: popup.style.top || '0px',
        zIndex: popup.style.zIndex || '1',
        width: popup.style.width || '',
        height: popup.style.height || '',
        transform: transform,
        rotation: rotation,
        flipped: img?.getAttribute('data-flipped') === 'true',
        imgWidth: img?.style.width || '',
        color: popup.dataset.borderColor || 'gold',
        popupId: popup.id || '',
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        loadAllPages: popup.dataset.loadAllPages === 'true' // 🔥 ADICIONE ESTA LINHA
   
        
    };
});

// Salvar os popups de zoom minimizados no dock
const dockMarkers = document.querySelectorAll('.dock-marker');

const dockPopupsData = Array.from(dockMarkers)
    .map(marker => {
        if (marker.dataset.savedState) {
            try {
                const state = JSON.parse(marker.dataset.savedState);
                state.popupId = state.popupId || marker.dataset.popupId || ''; // garante consistência
                return state;
            } catch (e) {
                console.error('Erro ao parsear estado salvo no dock:', e);
                return null;
            }
        }
        return null;
    })
    .filter(state => state !== null);

// Combina popups visíveis e minimizados
const popupZoomsData = [...visiblePopupsData, ...dockPopupsData];

// Salva no localStorage
localStorage.setItem(`${pageId}_popupZoomsData`, JSON.stringify(popupZoomsData));




 
// salva popups de texto abertos
 const popupNotes = Array.from(document.querySelectorAll('.popup-note'))
    .filter(popup => !popup.querySelector('img')); // Somente os que não são de imagem


const popupNotesData = Array.from(document.querySelectorAll('.popup-note'))
    .filter(popup => !popup.querySelector('img'))  // apenas popups de texto

    .map(popup => {
        const textArea = popup.querySelector('[contenteditable="true"]');
        return {
            id: popup.id || '',  // opcional: salva o id, se existir
            content: textArea ? textArea.innerHTML : '',
            left: popup.style.left || '200px',
            top: popup.style.top || '200px',
            width: popup.style.width || '400px',
            height: popup.style.height || '300px',
            zIndex: popup.style.zIndex || '1000',
            //backgroundColor: popup.style.backgroundColor || 'yellow',
            backgroundColor: 'yellow' || 'yellow',

            border: popup.style.border || '2px solid gold',
            color: textArea?.style.color || 'white'
        };
    });


localStorage.setItem(`${pageId}_popupNotesData`, JSON.stringify(popupNotesData));

  // ✅ SALVAR CONFIGURAÇÕES DA LOUSA (Tamanhos do Pincel e Carimbo)
    const lousaConfigsData = {
        tamanhoPincel: tamanhoPincelSalvo,
        tamanhoCarimbo: tamanhoCarimboSalvo,
        tamanhoTexto: tamanhoTextoAtual,    // <<< ADICIONADO: Salva o tamanho do texto
    tamanhoRegua: tamanhoReguaSalvo     // <<< ADICIONADO: Salva o tamanho da régua
    };
    localStorage.setItem(`${pageId}_lousaConfigsData`, JSON.stringify(lousaConfigsData));

    // 👇 INÍCIO DA CAPTURA DA CÂMERA 👇
    const tableWrapper = document.getElementById('table-wrapper');
    const tableCameraData = {
        zoom: typeof zoomLevel !== 'undefined' ? zoomLevel : 1,
        scrollLeft: tableWrapper ? tableWrapper.scrollLeft : 0,
        scrollTop: tableWrapper ? tableWrapper.scrollTop : 0
    };
    localStorage.setItem(`${pageId}_tableCameraData`, JSON.stringify(tableCameraData));
    // 👆 FIM DA CAPTURA DA CÂMERA 👆





// ... seu código de salvamento da câmera ...
    localStorage.setItem(`${pageId}_tableCameraData`, JSON.stringify(tableCameraData));
    
    
    
    
    
  

    localStorage.setItem(`${pageId}_savedContent`, savedContent);
    localStorage.setItem(`${pageId}_notesData`, JSON.stringify(notesData));
    localStorage.setItem(`${pageId}_deck44Cards`, JSON.stringify(deck44Cards));
    
  
    /* ... (Mantenha todo o código do meio intacto) ... */
    
    // 👇 ADICIONE ESTA LINHA PARA SALVAR NO LOCALSTORAGE 👇
    const combatStateData = getCombatState();
    localStorage.setItem(`${pageId}_combatStateData`, JSON.stringify(combatStateData));







// 👇 ADICIONE ESTE BLOCO AQUI PARA SALVAR AS JANELAS DE REGRAS E ÍNDICES 👇
    const popupRegrasData = Array.from(document.querySelectorAll('.popup-note2')).map(popup => {
        const iframe = popup.querySelector('iframe');
    
      //  const colorPicker = popup.querySelector('input[type="color"]');
     //   const color = colorPicker ? colorPicker.value : '#ffd700';
// E COLOQUE ESTA NO LUGAR:
const color = popup.dataset.corAtual || '#808080';





        // 👇 1. ADICIONE ISTO: Lê o valor numérico direto daquela barrinha (slider) de zoom da janela!
        const zoomSlider = popup.querySelector('input[type="range"]');
        const currentZoom = zoomSlider ? zoomSlider.value : '100';

        // MÁGICA DO SCROLL: Captura o scroll do iframe aberto ou a memória se estiver minimizado
        let currentScroll = popup.dataset.lastScroll || 0;
        try {
            if (iframe && popup.style.display !== 'none') {
                currentScroll = iframe.contentWindow.scrollY || iframe.contentWindow.document.documentElement.scrollTop;
            }
        } catch(e) {}

        const indices = [];
        
        const listaItems = popup.querySelectorAll('.item-indice');
        listaItems.forEach(item => {
            indices.push({
                nome: item.dataset.nome,
                anchorId: item.dataset.anchorId,
                texto: item.dataset.texto
            });
        });

        return {
            id: popup.id.replace('popup-regras-docs-', ''),
            left: popup.style.left,
            top: popup.style.top,
            width: popup.style.width,
            height: popup.style.height,
            zIndex: popup.style.zIndex,
            color: color,
            src: iframe ? iframe.getAttribute('src') : 'SpiderHunt.html',
            indices: indices,
            scroll: currentScroll,
            // 👇 2. ADICIONE ISTO: Grava o número do zoom no seu Save (JSON)
            zoom: currentZoom 
        };
    });
    
    
    
    
    
    
    

    localStorage.setItem(`${pageId}_popupRegrasData`, JSON.stringify(popupRegrasData));
    // 👆 FIM DO BLOCO DAS REGRAS 👆








    // Exibir JSON de backup
        // Exibir JSON de backup
    const backupData = JSON.stringify({
        savedContent,
        notesData,
        deck44Cards,
        popupZoomsData,
        popupNotesData,
        lousaConfigsData, 
        tableCameraData, 
        combatStateData,
        popupRegrasData // ✅ A CHAVE DE OURO ADICIONADA AQUI
    });



    
    

document.getElementById('backupText').value = backupData;

   // alert("Conteúdo salvo com sucesso!");
    mostrarToast("Conteúdo Salvo!", "warning");
}







// Verifica o sinal de clique do botão setup após o carregamento da página e clica agor no botão embaralhar!
window.addEventListener("load", () => {
    const clickShuffleButton = localStorage.getItem("clickShuffleButton");
    
    if (clickShuffleButton === "true") {
        // Aguarda um tempo após o carregamento completo da página para garantir que tudo foi carregado
        setTimeout(() => {
            const shuffleButton = document.getElementById("shuffle-button");
            
            if (shuffleButton) {
                shuffleButton.click(); // Clica no botão "shuffle-button"
             //   alert("Clique no botão 'Embaralhar setup' foi acionado com sucesso!");
                
                // Limpa o sinal do localStorage para garantir que o clique seja feito apenas uma vez
                localStorage.removeItem("clickShuffleButton");
            } else {
                alert("Botão 'Embaralhar setup' não encontrado!");
            }
        }, 1500); // Ajuste o tempo conforme necessário
    }
});


























//-----------------------------------------------------------------------------------------

//implementação do botão SETUP no index, que ao ser clicado carrega o setup que está aqui!
document.getElementById("setup-btn").addEventListener("click", () => {
    const setupContent = {
        savedContent: `\n\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- AQUI FICARIA AS IMAGENS FIXAS DA MESA! MAS NÂO CONSEGI AINDA FAZER FUNCIONAR DIREITO -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                    <!-- Cartas sorteadas aparecerão aqui -->\n                <canvas id=\"lousa-global-overlay\" width=\"5000\" height=\"5000\" style=\"position: absolute; left: 0px; top: 0px; width: 5000px; height: 5000px; z-index: 800; background: transparent; pointer-events: none; touch-action: none;\"></canvas><canvas id=\"lousa-temp-overlay\" width=\"5000\" height=\"5000\" style=\"position: absolute; left: 0px; top: 0px; width: 5000px; height: 5000px; z-index: 801; background: transparent; pointer-events: none; opacity: 0.7;\"></canvas><div class=\"card-container\" style=\"position: relative; background-color: transparent; opacity: 1; transition: opacity 0.4s ease-in-out;\"><img src=\"deck1/card1back.jpeg\" class=\"card deck1-card locked locked2\" data-original-src=\"deck1/card1.jpeg\" data-deck=\"1\" data-flipped=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; z-index: 2; position: absolute; left: 836px; top: 126.5px; opacity: 1;\" data-locked=\"true\" title=\"Carta Travada na mesa!\"></div><div class=\"card-container\" style=\"position: relative; background-color: transparent; opacity: 1; transition: opacity 0.4s ease-in-out;\"><img src=\"deck1/card2back.jpeg\" class=\"card deck1-card locked locked2\" data-original-src=\"deck1/card2.jpeg\" data-deck=\"1\" data-flipped=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; z-index: 1; position: absolute; left: 168px; top: 125.5px; opacity: 1;\" data-locked=\"true\" title=\"Carta Travada na mesa!\"></div><div class=\"card-container\" style=\"position: relative; background-color: transparent; opacity: 1; transition: opacity 0.4s ease-in-out;\"><img src=\"deck3/card5back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card5.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 7; position: absolute; left: 89px; top: 608px; opacity: 1;\"></div><div class=\"card-container\" style=\"position: relative; background-color: transparent; opacity: 1; transition: opacity 0.4s ease-in-out;\"><img src=\"deck3/card4back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card4.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 16; position: absolute; left: 34px; top: 833px; opacity: 1;\"></div><div class=\"card-container\" style=\"position: relative; background-color: transparent; opacity: 1; transition: opacity 0.4s ease-in-out;\"><img src=\"deck3/card2back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card2.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 10; position: absolute; left: 27px; top: 666px; opacity: 1;\"></div><div class=\"card-container\" style=\"position: relative; background-color: transparent; opacity: 1; transition: opacity 0.4s ease-in-out;\"><img src=\"deck3/card3back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card3.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 4; position: absolute; left: 43px; top: 521px; opacity: 1;\"></div><div class=\"card-container\" style=\"position: relative; background-color: transparent; opacity: 1; transition: opacity 0.4s ease-in-out;\"><img src=\"deck3/card1back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card1.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 13; position: absolute; left: 47px; top: 744px; opacity: 1;\"></div><img src=\"deck3/card3back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card3.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 5; position: absolute; left: 63px; top: 541px; opacity: 1;\" data-locked=\"false\"><img src=\"deck3/card3back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card3.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 6; position: absolute; left: 37px; top: 568px; opacity: 1;\" data-locked=\"false\"><img src=\"deck3/card5back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card5.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 8; position: absolute; left: 109px; top: 628px; opacity: 1;\" data-locked=\"false\"><img src=\"deck3/card5back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card5.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 9; position: absolute; left: 105px; top: 604px; opacity: 1;\" data-locked=\"false\"><img src=\"deck3/card2back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card2.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 11; position: absolute; left: 47px; top: 686px; opacity: 1;\" data-locked=\"false\"><img src=\"deck3/card2back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card2.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 12; position: absolute; left: 22px; top: 657px; opacity: 1;\" data-locked=\"false\"><img src=\"deck3/card1back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card1.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 14; position: absolute; left: 67px; top: 764px; opacity: 1;\" data-locked=\"false\"><img src=\"deck3/card1back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card1.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 15; position: absolute; left: 81px; top: 750px; opacity: 1;\" data-locked=\"false\"><img src=\"deck3/card4back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card4.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 18; position: absolute; left: 60px; top: 848px; opacity: 1;\" data-locked=\"false\"><img src=\"deck3/card4back.jpeg\" class=\"card fixed-on-top deckXcircular-card\" data-original-src=\"deck3/card4.jpeg\" data-deck=\"3\" data-flipped=\"true\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: white solid 1px; z-index: 17; position: absolute; left: 61px; top: 868px; opacity: 1;\" data-locked=\"false\"><div class=\"card-container\" style=\"position: relative; background-color: transparent; opacity: 1; transition: opacity 0.4s ease-in-out;\"><img src=\"deck55/card1.jpeg\" class=\"card fixed-on-top deck4circular-card\" data-original-src=\"deck55/card1.jpeg\" data-deck=\"55\" data-flipped=\"false\" data-fixed-on-top=\"true\" manter-border=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; outline: red solid 3px; z-index: 19; position: absolute; left: 483.5px; top: 1107px; opacity: 1;\"></div><div class=\"card-container\" style=\"position: relative; background-color: transparent; opacity: 1; transition: opacity 0.4s ease-in-out;\"><img src=\"https://rubenscaruso.github.io/mesa-vitual-projeto-caruso/spider_hunt/deck16/card3.jpeg?t=1780428702134\" class=\"card fixed-on-top deck1menor-dado\" data-original-src=\"deck16/card1.jpeg\" data-deck=\"16\" data-flipped=\"false\" data-unique-id=\"dice-1780428695300-643\" data-fixed-on-top=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; z-index: 21; position: absolute; left: 762.5px; top: 1061px; opacity: 1; transform: rotate(0deg) scale(0.6);\" data-scale=\"0.6000000000000001\"></div><div class=\"card-container\" style=\"position: relative; background-color: transparent; opacity: 1; transition: opacity 0.4s ease-in-out;\"><img src=\"https://rubenscaruso.github.io/mesa-vitual-projeto-caruso/spider_hunt/deck16/card4.jpeg?t=1780428698623\" class=\"card fixed-on-top deck1menor-dado\" data-original-src=\"deck16/card1.jpeg\" data-deck=\"16\" data-flipped=\"false\" data-unique-id=\"dice-1780428695832-453\" data-fixed-on-top=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; z-index: 20; position: absolute; left: 833.5px; top: 1061px; opacity: 1; transform: rotate(0deg) scale(0.6);\" data-scale=\"0.6000000000000001\"></div><div class=\"card-container\" style=\"position: relative; background-color: transparent; opacity: 1; transition: opacity 0.4s ease-in-out;\"><img src=\"deck2/card16back.jpeg\" class=\"card deck1-card selected\" data-original-src=\"deck2/card16.jpeg\" data-deck=\"2\" data-flipped=\"true\" draggable=\"false\" data-at-top=\"false\" style=\"background-color: transparent; z-index: 3; position: absolute; left: 560.5px; top: 897.5px; opacity: 1; transform: rotate(0deg) scale(0.5);\" data-scale=\"0.5000000000000001\"></div>
        
        
        
        
        
 `,
 
 
 
 
 


notesData:[]


 , deck44Cards:[]

 , popupZoomsData:[]
 

 
    };
    
    
    
  
    
    
    
    
    
    

    // Escapar o conteúdo como uma string JSON
    const escapedContent = JSON.stringify(setupContent);

    // Inserir o conteúdo escapado no textarea
    document.getElementById("backupText").value = escapedContent;





  // Limpa a pilha de undos
        localStorage.removeItem('undoStack');
        localStorage.removeItem('undoCount');
        console.log("Pilha de UNDO resetada após iniciar um novo jogo.");

        // Atualizar o marcador do número do UNDO
        updateUndoMarker(); // Atualiza o marcador para `(0)` imediatamente

function updateUndoMarker() {
    const marker = document.getElementById("undo-marker"); // Certifique-se de que o marcador está presente
    const undoStack = JSON.parse(localStorage.getItem('undoStack') || "[]"); // Recupera a pilha de UNDO do localStorage

    if (marker) {
        // Define o texto do marcador baseado no tamanho da pilha
        marker.innerText = `(${undoStack.length})`;
    }
}






//salva o sinal no localweb que há necessidade de clicar no botão de embaralhar após carregar a ṕágina com o botao setup! A sequencia deste codigo está mais para cima
document.querySelector("button[onclick='loadFromBackup()']").addEventListener("click", () => {
    // Marca que o clique do botão "shuffle-button" precisa acontecer após a recarga
    localStorage.setItem("clickShuffleButton", "true");
    
   
});






    // Acionar o clique no botão "Carregar o Save Colado na Janela"
    document.querySelector("button[onclick='loadFromBackup()']").click();








});





//---------------------------------------------------------------------------


//implementação do botão SETUP no index, que ao ser clicado carrega o setup que está aqui!
document.getElementById("setup2-btn").addEventListener("click", () => {
   const setupContent2 = {
       savedContent: `\n\n    \n\n\n\n\n\n  

 

`,
       notesData:[], 


deck44Cards:[]
    };


    // Escapar o conteúdo como uma string JSON
    const escapedContent2 = JSON.stringify(setupContent2);

    // Inserir o conteúdo escapado no textarea
    document.getElementById("backupText").value = escapedContent2;





  // Limpa a pilha de undos
        localStorage.removeItem('undoStack');
        localStorage.removeItem('undoCount');
        console.log("Pilha de UNDO resetada após iniciar um novo jogo.");

        // Atualizar o marcador do número do UNDO
       updateUndoMarker(); // Atualiza o marcador para `(0)` imediatamente

function updateUndoMarker() {
    const marker = document.getElementById("undo-marker"); // Certifique-se de que o marcador está presente
    const undoStack = JSON.parse(localStorage.getItem('undoStack') || "[]"); // Recupera a pilha de UNDO do localStorage

    if (marker) {
        // Define o texto do marcador baseado no tamanho da pilha
        marker.innerText = `(${undoStack.length})`;
    }
}






//salva o sinal no localweb que há necessidade de clicar no botão de embaralhar após carregar a ṕágina com o botao setup! 
document.querySelector("button[onclick='loadFromBackup()']").addEventListener("click", () => {
    // Marca que o clique do botão "shuffle-button" precisa acontecer após a recarga
    localStorage.setItem("clickShuffleButton", "true");
    
   
});





    // Acionar o clique no botão "Carregar o Save Colado na Janela"
    document.querySelector("button[onclick='loadFromBackup()']").click();



});





//----------------------------------------------------------------------------------





// Função para iniciar um novo jogo (apaga o conteúdo do jogo do localStorage e recarrega a página)
function startNewGame() {
    const pageId = getPageId();  // Obtém o ID da página atual

    if (!pageId) {
       // alert("ID do jogo não encontrado!");
                mostrarToast("ID do jogo não encontrado!", "warning");
        return;
    }

    // Exibe um alerta de confirmação
    const confirmDelete = confirm("Atenção: Qualquer SAVE feito será apagado sem possibilidade de restaurar! Caso queira fazer um SAVE manualmente e guardá-lo em texto, faça antes de continuar! Deseja iniciar um novo jogo apagando o anterior da existência no Universo?");
    
    if (confirmDelete) {
        // Apaga o conteúdo do jogo do localStorage
        localStorage.removeItem(`${pageId}_savedContent`);
        localStorage.removeItem(`${pageId}_notesData`);

        // Limpa a pilha de undos
        localStorage.removeItem('undoStack');
        localStorage.removeItem('undoCount');
        console.log("Pilha de UNDO resetada após iniciar um novo jogo.");

        // Atualizar o marcador do número do UNDO
        updateUndoMarker(); // Atualiza o marcador para `(0)` imediatamente

        // Recarrega a página para começar um novo jogo
        location.reload();
    } else {
        console.log("O jogo não foi apagado da existência. Ufa!");
    }
}

function updateUndoMarker() {
    const marker = document.getElementById("undo-marker"); // Certifique-se de que o marcador está presente
    const undoStack = JSON.parse(localStorage.getItem('undoStack') || "[]"); // Recupera a pilha de UNDO do localStorage

    if (marker) {
        // Define o texto do marcador baseado no tamanho da pilha
        marker.innerText = `(${undoStack.length})`;
    }
}


// Vincula o evento ao botão de Novo Jogo
document.getElementById('new-game-btn').addEventListener('click', startNewGame);




//_____________________________________________

// ✅ Qualquer popup vai para frente ao clicar (nota ou imagem)
document.addEventListener('mousedown', (e) => {
    const popup = e.target.closest('.popup-note, .popup-zoom, .popup-note2');
    if (popup) {
        bringPopupToFront(popup);
    }
});

document.addEventListener('touchstart', (e) => {
    const touch = e.touches?.[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const popup = target?.closest('.popup-note, .popup-zoom, .popup-note2');
    if (popup) {
        bringPopupToFront(popup);
    }
});




//_________________________________

//Após carregar load recria o funcionamento das popupNote NOTAS TIPO POST-IT)
function recreatePopupNote(data) {
    const popup = document.createElement('div');
    popup.classList.add('popup-note');
    popup.id = data.id || `popup-note-${Date.now()}`;

    Object.assign(popup.style, {
        position: 'absolute',
        left: data.left,
        top: data.top,
        width: data.width,
        height: data.height,
        backgroundColor: data.backgroundColor || 'black',
        border: data.border || '2px solid gold',
        borderRadius: '10px',
        zIndex: data.zIndex,
        padding: '0',
        boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    });

    // 🔶 HEADER
    const header = document.createElement('div');
    header.textContent = 'Nota';
    Object.assign(header.style, {
        backgroundColor: 'gold', color: 'black', padding: '4px 8px',
        cursor: 'move', fontWeight: 'bold', borderRadius: '8px 8px 0 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        position: 'sticky', top: '0', zIndex: '10'
    });

  const closeButton = document.createElement('button');
    closeButton.textContent = '❌';
    Object.assign(closeButton.style, {
        background: 'red', color: 'white', border: 'none', cursor: 'pointer',
        borderRadius: '50%', width: '20px', height: '20px', fontWeight: 'bold', fontSize: '12px'
    });

    // Função unificada para fechar com confirmação
    const fecharComConfirmacao = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        if (confirm("Deseja realmente apagar esta nota?")) {
            popup.remove();
            // Se o popup tiver um marcador associado, removemos também
            if (popup.associatedMarker) popup.associatedMarker.remove();
        }
    };

    closeButton.addEventListener('click', fecharComConfirmacao);
    closeButton.addEventListener('touchstart', fecharComConfirmacao, { passive: false });
    header.appendChild(closeButton);
    
    
    

    // 📝 BODY
    const body = document.createElement('div');
    Object.assign(body.style, {
        flexGrow: '1', width: '100%', display: 'flex', flexDirection: 'column',
        backgroundColor: data.textBackground || 'yellow', color: data.textColor || 'black',
        overflow: 'auto', padding: '8px'
    });

    const textArea = document.createElement('div');
    textArea.setAttribute('contenteditable', 'true');
    Object.assign(textArea.style, { flexGrow: '1', outline: 'none', border: 'none', width: '100%', height: '100%', fontSize: '16px', backgroundColor: 'inherit', color: 'inherit' });
    textArea.innerHTML = data.content || '(sem conteúdo)';
    body.appendChild(textArea);

    // 🔻 FOOTER
    const footer = document.createElement('div');
    Object.assign(footer.style, { width: '100%', height: '16px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'transparent', cursor: 'nwse-resize', userSelect: 'none' });

    const resizeHandle = document.createElement('div');
    Object.assign(resizeHandle.style, { width: '16px', height: '16px', background: 'gold', border: '1px solid black', opacity: '0.7', cursor: 'nwse-resize' });
    const resizeLabel = document.createElement('div');
    resizeLabel.textContent = 'Redimensionar';
    Object.assign(resizeLabel.style, { fontSize: '10px', color: 'gold', marginRight: '4px' });
    footer.appendChild(resizeLabel);
    footer.appendChild(resizeHandle);

    // 🔥 Handles
    const createDragHandle = (position) => {
        const handle = document.createElement('div');
        handle.style.position = 'absolute'; handle.style.background = 'gold'; handle.style.opacity = '0.6'; handle.style.cursor = 'grab'; handle.style.touchAction = 'none';
        if (position === 'left') Object.assign(handle.style, { top: '20px', left: '0', width: '6px', height: 'calc(100% - 40px)', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' });
        else if (position === 'right') Object.assign(handle.style, { top: '20px', right: '0', width: '6px', height: 'calc(100% - 40px)', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' });
        else if (position === 'bottom') Object.assign(handle.style, { bottom: '0', left: '0', width: '100%', height: '6px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' });
        return handle;
    };

    const leftHandle = createDragHandle('left');
    const rightHandle = createDragHandle('right');
    const bottomHandle = createDragHandle('bottom');

    popup.appendChild(header); popup.appendChild(body); popup.appendChild(footer);
    popup.appendChild(leftHandle); popup.appendChild(rightHandle); popup.appendChild(bottomHandle);
    document.body.appendChild(popup);

    // --- LÓGICA DE SCROLL ---
    if (data.scrollTop > 0 || data.scrollLeft > 0) {
        let attempts = 0;
        const scrollInterval = setInterval(() => {
            const container = popup.querySelector('.img-container');
            if (container) {
                container.scrollTop = data.scrollTop; container.scrollLeft = data.scrollLeft;
                if (Math.abs(container.scrollTop - data.scrollTop) < 2 || attempts > 20) clearInterval(scrollInterval);
            }
            attempts++; if (attempts >= 20) clearInterval(scrollInterval);
        }, 200);
    }

    // 🔧 Movimento e Detecção de Borda
    let isDragging = false;
    let offsetX = 0, offsetY = 0;








   const startDrag = (e) => {
        if (typeof isPopupResizing !== 'undefined' && isPopupResizing) return;
        const clientX = e.clientX || e.touches?.[0]?.clientX;
        const clientY = e.clientY || e.touches?.[0]?.clientY;

        if (typeof bringPopupToFront === 'function') bringPopupToFront(popup);

        // --- MÁGICA 1: DESENCAIXA A ABA SE FOR ARRASTADA ---
        popup.style.transition = 'none'; // Desliga a transição para arrasto imediato
        if (popup.dataset.isDockedOpen === 'true') {
            popup.dataset.isDockedOpen = 'false';
            if (popup.associatedMarker) {
                popup.associatedMarker.style.display = 'none'; // Esconde o marcador
            }
        }
        // ----------------------------------------------------

        isDragging = true;
        offsetX = clientX - popup.offsetLeft;
        offsetY = clientY - popup.offsetTop;
        if (popup.style) popup.style.cursor = 'grabbing';
        e.preventDefault();
        e.stopPropagation();
    };

    // (MANTENHA O SEU doDrag INTACTO AQUI)
const doDrag = (e) => {
        if (!isDragging) return;
        const clientX = e.clientX || e.touches?.[0]?.clientX;
        const clientY = e.clientY || e.touches?.[0]?.clientY;
        popup.style.left = `${clientX - offsetX}px`;
        popup.style.top = `${clientY - offsetY}px`;
    };



    const stopDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        if (popup.style) popup.style.cursor = 'move';

        const rect = popup.getBoundingClientRect();
        const halfWidth = rect.width / 2;
        
        const outLeft = (rect.left + halfWidth) < 0;
        const outRight = (rect.left + halfWidth) > window.innerWidth;
        const outTop = rect.top < -10;
        const outBottom = rect.top > (window.innerHeight - 40);

        if (outLeft || outRight || outTop || outBottom) {
            // 1. Descobre e salva em qual borda a nota bateu
            let borda = '';
            if (outLeft) borda = 'left';
            else if (outRight) borda = 'right';
            else if (outTop) borda = 'top';
            else if (outBottom) borda = 'bottom';
            
            popup.dataset.dockedEdge = borda;
            popup.dataset.isDockedOpen = 'false';

            // Esconde a nota
            popup.style.display = 'none';

            // 2. Cria ou recupera o marcador
            let marcador = popup.associatedMarker;
            if (!marcador) {
                marcador = document.createElement('div');
                popup.associatedMarker = marcador; 
                marcador.textContent = '📌'; 
                Object.assign(marcador.style, {
                    position: 'fixed',
                    width: '40px', height: '40px',
                    backgroundColor: popup.style.backgroundColor || 'yellow',
                    color: '#333', fontSize: '20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    transition: 'transform 0.2s ease', userSelect: 'none',
                    zIndex: 99999,
                    borderRadius: '8px',
                    border: '2px solid rgba(0,0,0,0.2)'
                });

                marcador.onmouseenter = () => { marcador.style.transform = 'scale(1.15)'; };
                marcador.onmouseleave = () => { marcador.style.transform = 'scale(1)'; };

                // --- MÁGICA 2: LÓGICA DE DESLIZAR A ABA (GAVETA) ---
                marcador.onclick = () => {
                    const bordaAtual = popup.dataset.dockedEdge;
                    const estaAberta = popup.dataset.isDockedOpen === 'true';
                    const rectMarcador = marcador.getBoundingClientRect();
                    
                    if (estaAberta) {
                        // RECOLHER A ABA (Animação de saída)
                        popup.style.transition = 'left 0.3s ease, top 0.3s ease';
                        if (bordaAtual === 'left') popup.style.left = `-${popup.offsetWidth}px`;
                        else if (bordaAtual === 'right') popup.style.left = `${window.innerWidth}px`;
                        else if (bordaAtual === 'top') popup.style.top = `-${popup.offsetHeight}px`;
                        else if (bordaAtual === 'bottom') popup.style.top = `${window.innerHeight}px`;
                        
                        popup.dataset.isDockedOpen = 'false';
                        
                        // Oculta completamente após a animação (300ms)
                        setTimeout(() => {
                            if (popup.dataset.isDockedOpen === 'false') popup.style.display = 'none';
                        }, 300);

                    } else {
                        // ABRIR A ABA (Animação de entrada)
                        popup.style.display = 'flex';
                        if (typeof topPopupZIndex !== 'undefined') popup.style.zIndex = ++topPopupZIndex;
                        
                        // Desliga a transição e posiciona escondido do lado de fora EXATAMENTE onde está o marcador
                        popup.style.transition = 'none';
                        const w = popup.offsetWidth;
                        const h = popup.offsetHeight;
                        
                        if (bordaAtual === 'left') {
                            popup.style.left = `-${w}px`;
                            popup.style.top = `${rectMarcador.top}px`;
                        } else if (bordaAtual === 'right') {
                            popup.style.left = `${window.innerWidth}px`;
                            popup.style.top = `${rectMarcador.top}px`;
                        } else if (bordaAtual === 'top') {
                            popup.style.top = `-${h}px`;
                            popup.style.left = `${rectMarcador.left}px`;
                        } else if (bordaAtual === 'bottom') {
                            popup.style.top = `${window.innerHeight}px`;
                            popup.style.left = `${rectMarcador.left}px`;
                        }
                        
                        // Força o navegador a recalcular a posição (Reflow) antes de animar
                        void popup.offsetWidth;
                        
                        // Liga a transição e desliza a aba para encostar no marcador
                        popup.style.transition = 'left 0.3s ease, top 0.3s ease';
                        if (bordaAtual === 'left') popup.style.left = '45px';
                        else if (bordaAtual === 'right') popup.style.left = `${window.innerWidth - w - 45}px`;
                        else if (bordaAtual === 'top') popup.style.top = '45px';
                        else if (bordaAtual === 'bottom') popup.style.top = `${window.innerHeight - h - 45}px`;
                        
                        popup.dataset.isDockedOpen = 'true';
                    }
                };
                // ----------------------------------------------------
                document.body.appendChild(marcador);
            }

            // 3. Configura o visual e alinha o marcador baseado na borda de impacto
            marcador.style.display = 'flex';
            marcador.style.left = 'auto'; marcador.style.right = 'auto';
            marcador.style.top = 'auto'; marcador.style.bottom = 'auto';

            if (outLeft) {
                marcador.style.left = '0px';
                marcador.style.top = `${Math.max(10, Math.min(window.innerHeight - 50, rect.top + 40))}px`;
                marcador.style.borderRadius = '0 8px 8px 0';
            } else if (outRight) {
                marcador.style.right = '0px';
                marcador.style.top = `${Math.max(10, Math.min(window.innerHeight - 50, rect.top + 40))}px`;
                marcador.style.borderRadius = '8px 0 0 8px';
            } else if (outTop) {
                marcador.style.top = '0px';
                marcador.style.left = `${Math.max(10, Math.min(window.innerWidth - 50, rect.left + halfWidth - 20))}px`;
                marcador.style.borderRadius = '0 0 8px 8px';
            } else if (outBottom) {
                marcador.style.bottom = '0px';
                marcador.style.left = `${Math.max(10, Math.min(window.innerWidth - 50, rect.left + halfWidth - 20))}px`;
                marcador.style.borderRadius = '8px 8px 0 0';
            }
        }
    };

    [header, leftHandle, rightHandle, bottomHandle].forEach(el => {
        el.addEventListener('mousedown', startDrag);
        el.addEventListener('touchstart', startDrag, { passive: false });
    });

    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchmove', doDrag, { passive: false });
    document.addEventListener('touchend', stopDrag);

    // 🔧 Redimensionamento e rest
    let isResizing = false;
    let resizeStartX, resizeStartY, startWidth, startHeight;

    const startResize = (e) => {
        isPopupResizing = true; isResizing = true;
        resizeStartX = e.clientX || e.touches?.[0]?.clientX;
        resizeStartY = e.clientY || e.touches?.[0]?.clientY;
        startWidth = popup.offsetWidth; startHeight = popup.offsetHeight;
        e.preventDefault(); e.stopPropagation();
    };
    const doResize = (e) => {
        if (!isResizing) return;
        const dx = (e.clientX || e.touches?.[0]?.clientX) - resizeStartX;
        const dy = (e.clientY || e.touches?.[0]?.clientY) - resizeStartY;
        popup.style.width = Math.max(200, startWidth + dx) + 'px';
        popup.style.height = Math.max(150, startHeight + dy) + 'px';
    };
    const stopResize = () => { isPopupResizing = false; isResizing = false; };

    resizeHandle.addEventListener('mousedown', startResize);
    resizeHandle.addEventListener('touchstart', startResize, { passive: false });
    document.addEventListener('mousemove', doResize);
    document.addEventListener('mouseup', stopResize);
    document.addEventListener('touchmove', doResize, { passive: false });
    document.addEventListener('touchend', stopResize);

    enableMinimizeOnDoubleClick(popup);
    const allPopups = document.querySelectorAll('.popup-note, .popup-zoom');
    topPopupZIndex = Math.max(...Array.from(allPopups).map(p => parseInt(p.style.zIndex) || 1), topPopupZIndex || 1000);
    popup.style.zIndex = data.zIndex || (++topPopupZIndex);

    [popup, header, footer, leftHandle, rightHandle, bottomHandle, textArea].forEach(el => {
        el.addEventListener('mousedown', () => deselectCard());
        el.addEventListener('touchstart', () => deselectCard(), { passive: true });
    });
}


//__________________________________________________________





// Função para carregar o estado da página do localStorage
function loadFullPage() {
// 🔥 Remove todos os popups existentes (texto e imagem)
document.querySelectorAll('.popup-note, .popup-zoom').forEach(el => el.remove());




    const pageId = getPageId();
    if (!pageId) {
      //  alert("ID do jogo não encontrado!");
              mostrarToast("ID do jogo não encontrado!", "warning");
        return;
    }

    const savedContent = localStorage.getItem(`${pageId}_savedContent`);
    const savedNotesData = localStorage.getItem(`${pageId}_notesData`);
    const savedDeck44Cards = JSON.parse(localStorage.getItem(`${pageId}_deck44Cards`) || "[]");
const savedCombat = localStorage.getItem(`${pageId}_combatStateData`);

if (savedCombat) {
    try {
        const combatData = JSON.parse(savedCombat);
        setCombatState(combatData);
    } catch (e) {
        console.error("Erro ao carregar estado do combate:", e);
    }
}


   // ✅ CARREGAR CONFIGURAÇÕES DA LOUSA E APLICAR ÀS MEMÓRIAS
 const savedLousaConfigs = localStorage.getItem(`${pageId}_lousaConfigsData`);
if (savedLousaConfigs) {
    try {
        const configs = JSON.parse(savedLousaConfigs);
        if (configs.tamanhoPincel) tamanhoPincelSalvo = configs.tamanhoPincel;
        if (configs.tamanhoCarimbo) tamanhoCarimboSalvo = configs.tamanhoCarimbo;
        
        // --- ADICIONADO: Reinjeta os valores salvos nas memórias ---
        if (configs.tamanhoTexto) tamanhoTextoAtual = configs.tamanhoTexto;
        if (configs.tamanhoRegua) tamanhoReguaSalvo = configs.tamanhoRegua;
        // -----------------------------------------------------------

        // Força a grossura atual a iniciar com o tamanho do pincel salvo 
        grossuraAtual = tamanhoPincelSalvo;
    } catch(e) {
        console.error("Erro ao carregar configs da lousa", e);
    }
}

    // 👇 CARREGA A CÂMERA E GUARDA NA JANELA PARA O RADAR USAR DEPOIS 👇
    const savedCamera = localStorage.getItem(`${pageId}_tableCameraData`);
    if (savedCamera) {
        window.cameraRestauracaoMesa = JSON.parse(savedCamera);
    }

   // Restaura o conteúdo salvo para o `table-area`
    
    
    

   // Restaura o conteúdo salvo para o `table-area`
    if (savedContent) {
        console.log(`Conteúdo encontrado para ${pageId}_savedContent.`);
        
        
document.getElementById('table-area').style.display = 'none'; // "Apaga a luz" para não travar
document.getElementById('table-area').innerHTML = savedContent;
        
        document.getElementById('table-area').innerHTML = savedContent;
        
        
// ==========================================
    // A SUA IDEIA: SIMULAR A COLOCAÇÃO DE UMA CARTA
    // ==========================================
    setTimeout(() => {
        const tableArea = document.getElementById('table-area');
        
        // 1. Cria uma "carta invisível" para enganar o sistema
        const cartaFalsa = document.createElement('div');
        cartaFalsa.style.width = '1px';
        cartaFalsa.style.height = '1px';
        
        // 2. Coloca na mesa (isso força a atualização que você quer)
        tableArea.appendChild(cartaFalsa);
        
        // 3. Uma fração de segundo depois, "acende a luz", remove a carta e finaliza
        setTimeout(() => {
            cartaFalsa.remove();
            tableArea.style.display = 'block'; // Mostra a mesa montada
            console.log("Tranco concluído! Simulação de carta feita com sucesso.");
                  //  deselectCard();
                    
             // 4. Remove a classe 'selected' de QUALQUER carta que a tenha
    document.querySelectorAll('.card.selected').forEach(card => {
        card.classList.remove('selected');
    });

// 5. Limpa o boxShadow e outline de TODAS as cartas da mesa (garantia extra)
document.querySelectorAll('.card').forEach(card => {
    // 👇 Só vai limpar a borda se a carta NÃO tiver o nosso atributo de proteção
    if (card.getAttribute('manter-border') !== 'true') {
        card.style.boxShadow = '';
        card.style.outline = ''; 
    }
});


    console.log("🧹 Sistema: Todas as cartas foram visualmente desselecionadas.");
       
                    
                    
                    

        }, 100);

    }, 800); // Espera quase 1 segundo para a memória do PC respirar
        
        
        
        
        // 🚀 INÍCIO DO CÓDIGO NOVO: Reatribui o reparo automático às imagens carregadas do Save
        document.querySelectorAll('#table-area img').forEach(img => {
            img.onerror = function() {
                let retries = parseInt(this.getAttribute('data-retries') || '0');
                if (retries < 5) { // Tenta até 5 vezes individualmente
                    this.setAttribute('data-retries', retries + 1);
                    console.log(`Tentativa ${retries + 1} de carregar imagem:`, this.src.split('?')[0]);
                    
                    let cleanSrc = this.getAttribute('data-original-src') || this.src.split('?')[0];
                    if (this.getAttribute('data-flipped') === 'true' && !cleanSrc.includes('back.jpeg')) {
                        cleanSrc = cleanSrc.replace(/\.jpeg$/i, 'back.jpeg');
                    }
                    
                    // Delay progressivo (espera 1s, depois 2s, depois 3s...) para não sobrecarregar a rede
                    setTimeout(() => {
                        this.src = `${cleanSrc}?repair=${new Date().getTime()}`;
                    }, 1000 * (retries + 1));
                }
            };
        });
        // 🚀 FIM DO CÓDIGO NOVO
        
    } else {
        console.log(`Nenhum conteúdo encontrado para ${pageId}_savedContent.`);
       // alert("Nenhum conteúdo salvo encontrado para este jogo!");
        mostrarToast("Nenhum conteúdo Salvo encontrado!", "warning");
        return;
    }

        
        
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        

  // Restaura as notas
if (savedNotesData) {
    console.log(`Dados de notas encontrados para ${pageId}_notesData.`);
    const notesData = JSON.parse(savedNotesData);

    // Remove as notas existentes antes de carregar as novas
    const existingNotes = document.querySelectorAll('.note');
    existingNotes.forEach(note => note.remove());

    const tableArea = document.getElementById('table-area');

    // Adiciona as notas restauradas
    notesData.forEach(noteData => {
        try { 
            const noteContainer = document.createElement('div');
            noteContainer.classList.add('note');
            
            // Garante que a bandeira fique fora da nota sem ser cortada
            noteContainer.style.overflow = 'visible'; 

            // 1. Injeta o HTML salvo
            noteContainer.innerHTML = noteData.content || '';

            // 2. Aplica as posições absolutas
            noteContainer.style.position = 'absolute';
            noteContainer.style.left = noteData.left || '0px';
            noteContainer.style.top = noteData.top || '0px';
            if (noteData.zIndex) noteContainer.style.zIndex = noteData.zIndex;

            // 3. Referências aos elementos internos
            const textArea = noteContainer.querySelector('.note-text-area');
            const handle = noteContainer.querySelector('.note-drag-handle');

            // 🛡️ BLINDAGEM DO HANDLE
            if (handle) {
                handle.setAttribute('contenteditable', 'false');
            }

            // 🛡️ BLINDAGEM DA TEXT AREA
            if (textArea) {
                textArea.addEventListener('keydown', (e) => {
                    if (e.key === 'Backspace') {
                        if (textArea.innerText.trim() === '' && window.getSelection().anchorOffset === 0) {
                            e.stopPropagation();
                        }
                    }
                });
            }

            // 4. Retira a bandeira original presa no HTML do Save
            const bandeiraOriginal = noteContainer.querySelector('.nota-bandeira');
            if (bandeiraOriginal) bandeiraOriginal.remove();

            // 5. Configura propriedades seguras (Fallback de segurança)
            const defaultBg = 'rgba(255, 255, 0, 0.1)';
            const defaultBorder = '1px solid rgb(204, 204, 204)';
            const backupColor = noteContainer.getAttribute('data-bg-color') || (noteData.backgroundColor !== 'transparent' ? noteData.backgroundColor : defaultBg);
            const backupBorder = noteContainer.getAttribute('data-border') || defaultBorder;
            const backupWidth = noteContainer.getAttribute('data-width') || (noteData.width !== '0px' ? noteData.width : '200px');
            const backupHeight = noteContainer.getAttribute('data-height') || 'auto';

            // Salva as referências originais no dataset
            noteContainer.setAttribute('data-bg-color', backupColor);
            noteContainer.setAttribute('data-border', backupBorder);
            noteContainer.setAttribute('data-width', backupWidth);
            noteContainer.setAttribute('data-height', backupHeight);

            // 6. Verifica se estava oculta ANTES de forçar os estilos de exibição
            const estavaOculta = (textArea && textArea.style.display === 'none') || noteContainer.classList.contains('nota-oculta');

            // Aplica os estilos normais (o CSS com !important vai sobrepor caso esteja oculta)
            noteContainer.style.backgroundColor = backupColor;
            noteContainer.style.border = backupBorder;
            noteContainer.style.width = backupWidth;
            noteContainer.style.height = backupHeight;
            noteContainer.style.padding = noteData.padding || '10px';
            noteContainer.style.minWidth = noteData.minWidth || '200px';
            if (textArea) textArea.style.display = 'flex';
            if (handle) handle.style.display = 'block';

            // Aplica definitivamente o estado Oculto ou Visível baseado no Save
            if (estavaOculta) {
                noteContainer.classList.add('nota-oculta');
            } else {
                noteContainer.classList.remove('nota-oculta');
            }

            // Lógica de bloqueio (Lock)
            noteContainer.isLocked = noteData.isLocked || false;
            if (noteContainer.isLocked) {
                noteContainer.classList.add('is-locked');
                noteContainer.style.pointerEvents = "none";
                if (handle) handle.style.pointerEvents = "auto";
            } else {
                noteContainer.style.pointerEvents = "auto";
            }

            // 7. Isolamento contra erros no motor de arrasto/eventos externos
            try {
                if (typeof addDragFunctionality === 'function') addDragFunctionality(noteContainer);
            } catch (errDrag) { 
                console.warn("⚠️ Arrasto ignorado nesta nota.", errDrag); 
            }
            
            try {
                if (typeof addNoteEvents === 'function') addNoteEvents(noteContainer);
            } catch (errEvent) { 
                console.warn("⚠️ Eventos padrão ignorados nesta nota.", errEvent); 
            }

            // 8. RESSUSCITA A BANDEIRA
            const novaBandeira = document.createElement('div');
            novaBandeira.className = 'nota-bandeira';
            novaBandeira.textContent = '🚩';
           novaBandeira.style.cssText = "position: absolute; top: -38px; left: 10px; transform: none; cursor: pointer; font-size: 20px; background-color: yellow !important; border: none !important; box-shadow: none !important; text-shadow: 0 1px 3px rgba(0,0,0,0.4); text-align: center; user-select: none; pointer-events: auto; z-index: 20; display: flex; align-items: center; justify-content: center; padding: 2px 4px;";
           
            // Isola o toque para não arrastar a mesa inteira
            ['mousedown', 'touchstart', 'pointerdown'].forEach(ev => {
                novaBandeira.addEventListener(ev, (e) => e.stopPropagation(), { passive: false });
            });

            // Lógica de mostrar/ocultar via Clique
            novaBandeira.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                noteContainer.classList.toggle('nota-oculta');
            });

            noteContainer.appendChild(novaBandeira);

            // Adiciona na mesa
            if (tableArea) {
                tableArea.appendChild(noteContainer);
            }

        } catch (erroGeral) {
            console.error("🔥 Erro fatal isolado em uma nota. O sistema não quebrou e seguirá carregando o resto.", erroGeral);
        }
    });

    // Lógica global para "fechar" edição ao clicar fora
    document.addEventListener('click', (e) => {
        const notes = document.querySelectorAll('.note');
        notes.forEach(note => {
            if (!note.contains(e.target)) {
                note.classList.remove('modo-editavel');
                note.classList.add('modo-invisivel');
            }
        });
    });

} else {
    console.log(`Nenhum dado de notas encontrado para ${pageId}_notesData.`);
}














    
   const popupNotesData = JSON.parse(localStorage.getItem(`${pageId}_popupNotesData`) || "[]")
    .map(p => ({ ...p, type: 'note' }));

const popupZoomsData = JSON.parse(localStorage.getItem(`${pageId}_popupZoomsData`) || '[]')
    .map(p => ({ ...p, type: 'zoom' }));

// 🔥 Combina os dois em uma única lista
const combinedPopups = [...popupNotesData, ...popupZoomsData];

// 🔝 Ordena pelo zIndex crescente
combinedPopups.sort((a, b) => parseInt(a.zIndex) - parseInt(b.zIndex));

// 🔥 Renderiza na ordem correta
combinedPopups.forEach(popup => {
    if (popup.type === 'note') {
        recreatePopupNote(popup);
    } else if (popup.type === 'zoom') {
    recreatePopupZoomFromState(popup, null);
}

});










// 👇 SUBSTITUA O SEU BLOCO ATUAL POR ESTE 👇
const savedPopupRegrasData = JSON.parse(localStorage.getItem(`${pageId}_popupRegrasData`) || "[]");

savedPopupRegrasData.forEach(config => {
    // Verifica se a função existe
    if (typeof abrirJanelaRegras === 'function') {
        
        // --- A LÓGICA DE CORREÇÃO: ---
        // Se o left for -9999px, a janela está salva como "docked".
        // Vamos forçar uma posição visível (100px, 100px) ANTES de abrir a janela.
        if (config.left === '-9999px') {
            config.left = '100px';
            config.top = '100px';
            // Também removemos a flag de docking se ela existir, para garantir que o script entenda que ela deve abrir aberta
            if (config.dataset) config.dataset.isDockedOpen = 'false';
        }

        // Agora chamamos a função com a configuração "limpa"
        abrirJanelaRegras(config); 
        
    } else {
        console.error("Função abrirJanelaRegras não encontrada.");
    }
});




    
    
// Restaura z-index e eventos das cartas {e notas}
//const restoredItems = document.querySelectorAll('.card, .note');
const restoredItems = document.querySelectorAll('.card');

const sortedItems = Array.from(restoredItems).sort((a, b) => {
    const zIndexA = parseInt(window.getComputedStyle(a).zIndex) || 0;
    const zIndexB = parseInt(window.getComputedStyle(b).zIndex) || 0;
    return zIndexA - zIndexB;
});

sortedItems.forEach(item => {
    item.addEventListener('click', () => selectCardOnTable(item));
    //Abaixo vários clicks para fazer os dados não irem para tras de cartas no fundo! Aparenetemente isso funciona
    item.click(); // Simula o clique para garantir o estado
  //      item.click(); // Simula o clique para garantir o estado
  //  item.click(); // Simula o clique para garantir o estado
  //  item.click(); // Simula o clique para garantir o estado
   // item.click(); // Simula o clique para garantir o estado
     
 
 
       
    



});

    
    
    


    reassignCardEvents();
    reassignTableEvents();
    reassignNoteEvents();
    ensureFixedCardsOnTop();
   
    
 reativarFuncionalidadesMesa();
    
    // 👇 ADICIONE ESTE BLOCO AQUI PARA REATIVAR O RASTREIO DAS CARTAS MARCADAS COM O ATRIBUTO 👇
    setTimeout(() => {
        const cartasRastreadas = document.querySelectorAll('.card[data-tracked="true"]');
        cartasRastreadas.forEach(carta => {
            console.log("📍 Rastreio reativado no Load para a carta:", carta);
            
            // Garante que a carta tem ID para o Map do timer não falhar
            if (!carta.id) carta.id = 'rastreada-' + Date.now();
            
            // Força as variáveis globais a recomeçarem do ponto atual da carta
            ultimaPosicaoX = parseFloat(carta.style.left) || 0;
            ultimaPosicaoY = parseFloat(carta.style.top) || 0;
            
            // Religa o motor de 5 segundos do seu codigo.js
            if (typeof iniciarTimerRastreio === 'function') {
                iniciarTimerRastreio(carta);
            }
        });
    }, 1500); // Aguarda 1.5s para garantir que o "tranco" de renderização da mesa passou
    // 👆 FIM DO BLOCO DE REATIVAÇÃO DO RASTREIO 👆

    // 🔝 Atualiza o topPopupZIndex após restaurar todos os popups
    const allPopups = document.querySelectorAll('.popup-note, .popup-zoom');
topPopupZIndex = Math.max(...Array.from(allPopups).map(p => parseInt(p.style.zIndex) || 1000), 1000);



// 👇 2. RESTAURE O PAINEL DE COMBATE AQUI 👇
    if (savedCombatState) {
        setCombatState(JSON.parse(savedCombatState));
    }


    
     if (savedDeck44Cards.length > 0) {
 //   alert(`Cartas encontradas no backup do deck44: ${savedDeck44Cards.length}`);

    // Mantém o formato correto de cada carta (objeto com src e originalDeck)
    allDecks[44] = savedDeck44Cards.map(card => {
        return { src: card.src, originalDeck: card.originalDeck }; // Mantém a formatação de src e originalDeck
    });

    // Remove as cartas do deck44 dos decks originais
    savedDeck44Cards.forEach(card => {
        for (const deck in allDecks) {
            if (deck !== "44") {
                // Verifica se o deck é o mesmo do originalDeck da carta
                if (allDecks[deck].some(src => src === (typeof card === 'string' ? card : card.src))) {
                //    alert(`Tentando remover carta ${card.src || card} do deck ${deck}`);

                    // Remove a carta do deck atual
                    allDecks[deck] = allDecks[deck].filter(src => src !== (typeof card === 'string' ? card : card.src));
                 //   alert(`Removida carta ${card.src || card} do deck ${deck}`);
                }
            }
        }
    });


} else {
  //  alert("Nenhuma carta encontrada no deck44 para restaurar.");
}

    console.log("Conteúdo carregado com sucesso!");
    
    
    
    
    
    
    
    
// 1. Antes de colar, apaga a luz
    const tableArea = document.getElementById('table-area');
    tableArea.style.visibility = 'hidden'; // Usar visibility é melhor que display:none para não bugar o scroll
    tableArea.innerHTML = savedContent;

 // =======================================================
        // O "TRANCO" FINAL: REATIVAÇÃO GARANTIDA (5 SEGUNDOS)
        // =======================================================
        setTimeout(() => {
            // Acende a luz da mesa
            tableArea.style.visibility = 'visible';
            
            // Reatribui eventos básicos
            if (typeof reassignCardEvents === 'function') reassignCardEvents();
            if (typeof reativarFuncionalidadesMesa === 'function') reativarFuncionalidadesMesa();
            
            // 🚀 ESTABILIZAÇÃO DE 5 SEGUNDOS: Aguarda o DOM processar totalmente
            setTimeout(() => {
                console.log("5 segundos atingidos: Iniciando reativação do teclado...");
                
                // 1. Limpa qualquer foco (blur) para destravar o teclado
                if (document.activeElement) document.activeElement.blur();
                window.focus();
                
                // 2. Chama a função do teclado
                if (typeof window.configurarTecladoMesa === 'function') {
                    window.configurarTecladoMesa();
                }
                
                // 3. Força o clique na primeira carta (o gatilho que você descobriu)
                const primeiraCarta = tableArea.querySelector('.card');
                if (primeiraCarta) {
                    primeiraCarta.click();
                    console.log("Teclado reativado e foco na carta aplicado.");
                }
            }, 5000); 

            // Tranco visual para forçar o navegador a renderizar o layout
            const cartaFalsa = document.createElement('div');
            cartaFalsa.className = 'card';
            cartaFalsa.style.display = 'none';
            tableArea.appendChild(cartaFalsa);
            
            setTimeout(() => {
                cartaFalsa.remove();
            }, 100);

        }, 600);
}


















// Função para recarregar a página da web e depois carregar o conteúdo salvo
function reloadAndLoadPage() {
    // Sinaliza que o conteúdo salvo deve ser carregado
    localStorage.setItem('shouldLoadContent', 'true');

    // Recarrega a página da web
    window.location.reload();  // Isso faz com que a página seja recarregada da internet
}

// Verifica se o conteúdo salvo deve ser carregado ao carregar a página
window.onload = function() {
    if (localStorage.getItem('shouldLoadContent') === 'true') {
        loadFullPage();
        // Após carregar o conteúdo, removemos o flag para evitar recarregar novamente
        localStorage.removeItem('shouldLoadContent');
                       }
    
    // Auto Save - executa a cada 10 minutos (600000 milissegundos)
    const saveInterval = 600000;  // 60.000 ms = 1 minuto   300000= 5 min   600000=10min
    setInterval(() => {
        saveFullPage();  // Chama a função saveFullPage para salvar a mesa sem os dados
       // alert("Mesa salva automaticamente!");  // Exibe o alerta após cada auto save
    }, saveInterval);  // Auto save automático a cada 1 minuto
};













// Função para carregar o conteúdo do backup e recarregar a página
// Função para carregar o conteúdo do backup e recarregar a página
function loadFromBackup() {
    const backupText = document.getElementById('backupText').value;
    if (!backupText) {
      //  alert("Por favor, cole o texto de backup para carregar.");
                mostrarToast("Por favor, cole o texto de Backup para carregar!", "warning");

        return;
    }

    try {
        const backupData = JSON.parse(backupText);

        // Verifica se o backup contém os dados necessários
        if (!backupData.savedContent || !backupData.notesData || !backupData.deck44Cards) {
           // alert("O backup está incompleto ou corrompido.");
                   mostrarToast("O Backup está incompleto ou corrompido", "warning");

            return;
        }

        // Recupera o ID da página atual
        const pageId = getPageId();
        if (!pageId) {
           // alert("ID do jogo não encontrado!");
                   mostrarToast("ID do jogo não encontrado!", "warning");

            return;
        }

       // Sobrescreve os dados no localStorage com as novas informações
        localStorage.setItem(`${pageId}_savedContent`, backupData.savedContent);
        localStorage.setItem(`${pageId}_notesData`, JSON.stringify(backupData.notesData));
        localStorage.setItem(`${pageId}_deck44Cards`, JSON.stringify(backupData.deck44Cards));
        localStorage.setItem(`${pageId}_popupZoomsData`, JSON.stringify(backupData.popupZoomsData || []));
        localStorage.setItem(`${pageId}_popupNotesData`, JSON.stringify(backupData.popupNotesData || []));
        
        
        
        
        // 👇 RESTAURA A JANELA DE REGRAS NO TEXTO COLADO 👇
        if (backupData.popupRegrasData) {
            localStorage.setItem(`${pageId}_popupRegrasData`, JSON.stringify(backupData.popupRegrasData));
        }

        
        
        
        
        
        
        

        // 👇 ADICIONE ESTA VERIFICAÇÃO PARA O COMBATE 👇
        if (backupData.combatStateData) {
            localStorage.setItem(`${pageId}_combatStateData`, JSON.stringify(backupData.combatStateData));
        }
     
     
     // ✅ RECUPERAR CONFIGURAÇÕES DA LOUSA DO TEXTO COLADO
        if (backupData.lousaConfigsData) {
            localStorage.setItem(`${pageId}_lousaConfigsData`, JSON.stringify(backupData.lousaConfigsData));
        }
    
        // 👇 GRAVA A CÂMERA DO TEXTO COLADO NO LOCALSTORAGE 👇
        if (backupData.tableCameraData) {
            localStorage.setItem(`${pageId}_tableCameraData`, JSON.stringify(backupData.tableCameraData));
        }
    
        // Atualiza o conteúdo de allDecks[44] diretamente
     
    
 
    
        // Atualiza o conteúdo de allDecks[44] diretamente
        allDecks[44] = backupData.deck44Cards;

        // Configura o sinalizador para carregar o conteúdo após recarregar
        localStorage.setItem('shouldLoadContent', 'true');

        // Recarrega a página
        window.location.reload();
               
        
    } catch (e) {
        //alert("Ocorreu um erro ao carregar o backup. Verifique o texto e tente novamente.");
                mostrarToast("Ocorreu um erro ao carregar o backup. Verifique o texto e tente novamente!", "warning");

        
        console.error(e);
    }
}






// facilita pois ao clicar no botão já copia o texto da janela!
function copyBackup() {
    const backupText = document.getElementById('backupText');
    backupText.select();
    backupText.setSelectionRange(0, 99999); // Compatível com dispositivos móveis

    try {
        const success = document.execCommand('copy');
        if (success) {
           // alert("Texto de backup copiado para a área de transferência!");
               mostrarToast("Texto de backup copiado para a área de transferência!", "warning");
        } else {
            throw new Error("Falha ao copiar");
        }
    } catch (err) {
       // alert("Por favor, copie o texto manualmente.");
                      mostrarToast("Por favor, copie o texto manualmente!", "warning");

    }
}






























let clickTimeout = null;  // Variável para armazenar o timeout
const clickDelay = 300; // Intervalo em milissegundos para aguardar um segundo clique
let isMoved = false;  // Flag para detectar se houve movimento
let initialPosition = { x: 0, y: 0 };  // Posição inicial da carta

// Função para detectar movimento da carta
function handleCardMovement(e) {
    const card = e.currentTarget;

    // Para dispositivos móveis (touchmove)
    if (e.type === "touchmove") {
        const touch = e.touches[0];
        if (touch) {
            const movedX = Math.abs(touch.clientX - initialPosition.x);
            const movedY = Math.abs(touch.clientY - initialPosition.y);

            // Se o movimento for maior que o limite definido, consideramos como movimento real
            if (movedX > 60 || movedY > 60) {
                isMoved = true;  // Marca que a carta foi movida
                e.preventDefault(); // Previne o comportamento padrão (para evitar o scroll)

            }
        }
    } 
    // Para desktop (mousemove)
    else if (e.type === "mousemove") {
        const cardRect = card.getBoundingClientRect();
        if (Math.abs(cardRect.left - initialPosition.x) > 2 || Math.abs(cardRect.top - initialPosition.y) > 2) {
            isMoved = true;  // Marca que a carta foi movida


        }
    }
}



function reassignCardEvents() {
    const cards = document.querySelectorAll('.card'); 

    cards.forEach(cardImage => {
        // 1. LIMPEZA TOTAL (Essencial para o Undo funcionar sem bugar)
        const newCard = cardImage.cloneNode(true);
        cardImage.parentNode.replaceChild(newCard, cardImage);
        cardImage = newCard; 

        const deckNumber = parseInt(cardImage.getAttribute('data-deck'), 10);
        const allowedDecks = [16, 17, 30, 31, 32, 33, 34, 40, 41, 42, 45, 46, 47, 61, 67];

        // --- PARTE A: ARRASTE E SELEÇÃO (Para TODOS: Cartas e Dados) ---
        cardImage.addEventListener('mousedown', onMouseDown);
        cardImage.addEventListener('touchstart', onTouchStart);
        
        cardImage.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            if (typeof openCardOptions === 'function') openCardOptions(cardImage);
        });

        // --- PARTE B: LÓGICA ESPECIAL (Apenas para DADOS) ---
        if (allowedDecks.includes(deckNumber)) {
            let singleClickTimer = null;
            let timerCliqueLongo = null;
            const doubleClickThreshold = 250; 
            let localStartX = 0, localStartY = 0;

            function rollDiceAction() {
                if (isMoved) return; 
                if (typeof tocarSomDado === 'function') tocarSomDado(); 
                
                cardImage.classList.add('flip-animation', 'loading-dice'); 

                const numFaces = [45, 46].includes(deckNumber) ? 20 
                               : deckNumber === 40 ? 3 
                               : deckNumber === 41 ? 4 
                               : deckNumber === 47 ? 8 
                               : deckNumber === 61 ? 12 : 6;

                const faceAleatoria = Math.floor(Math.random() * numFaces) + 1;
                const caminhoNovaFace = `deck${deckNumber}/card${faceAleatoria}.jpeg`;

                const imgPreload = new Image();
                imgPreload.src = `${caminhoNovaFace}?t=${new Date().getTime()}`;
                imgPreload.onload = function() {
                    cardImage.src = imgPreload.src;
                    cardImage.classList.remove('loading-dice');
                };
                setTimeout(() => cardImage.classList.remove('flip-animation'), 1500);
            }

            const startAction = (x, y) => {
                localStartX = x; localStartY = y;
                isMoved = false; 
                timerCliqueLongo = setTimeout(() => {
                    isMoved = true; 
                    if (typeof selectCardOnTable === 'function') selectCardOnTable(cardImage);
                }, 500);
            };

            const moveAction = (x, y) => {
                if (localStartX === 0) return;
                if (Math.abs(x - localStartX) > 5 || Math.abs(y - localStartY) > 5) {
                    isMoved = true; 
                    if (timerCliqueLongo) clearTimeout(timerCliqueLongo);
                }
            };

            cardImage.addEventListener('mousedown', (e) => startAction(e.clientX, e.clientY));
            cardImage.addEventListener('mousemove', (e) => moveAction(e.clientX, e.clientY));
            cardImage.addEventListener('mouseup', () => {
                if (timerCliqueLongo) clearTimeout(timerCliqueLongo);
                if (!isMoved) {
                    if (singleClickTimer) {
                        clearTimeout(singleClickTimer);
                        singleClickTimer = null;
                    } else {
                        singleClickTimer = setTimeout(() => {
                            if (!isMoved) rollDiceAction();
                            singleClickTimer = null;
                        }, doubleClickThreshold);
                    }
                }
                localStartX = 0; localStartY = 0;
            });

            // Toque para Dados
            cardImage.addEventListener('touchstart', (e) => startAction(e.touches[0].clientX, e.touches[0].clientY));
            cardImage.addEventListener('touchmove', (e) => moveAction(e.touches[0].clientX, e.touches[0].clientY));
            cardImage.addEventListener('touchend', (e) => {
                if (timerCliqueLongo) clearTimeout(timerCliqueLongo);
                if (isMoved) e.preventDefault();
                if (!isMoved) {
                     if (!singleClickTimer) {
                        singleClickTimer = setTimeout(() => {
                            if (!isMoved) rollDiceAction();
                            singleClickTimer = null;
                        }, doubleClickThreshold);
                     } else {
                        clearTimeout(singleClickTimer);
                        singleClickTimer = null;
                     }
                }
            });

        } else {
            // --- PARTE C: LÓGICA DE SELEÇÃO (Para CARTAS normais) ---
            // Como as cartas não rolam, o clique simples apenas as seleciona
            cardImage.addEventListener('click', (e) => {
                if (!isMoved) {
                    if (typeof selectCardOnTable === 'function') selectCardOnTable(cardImage);
                }
            });
        }
    });
}





// Função para rolar o dado com base no ID único
function rollDice(card) {
    // A carta clicada já é a imagem, então podemos usar diretamente ela
    const cardImage = card; // Aqui estamos assumindo que o 'card' é a imagem do dado

    if (!cardImage || !cardImage.getAttribute('data-unique-id')) {
        alert("Nenhuma imagem com 'data-unique-id' encontrada na carta.");
        return; // Sai da função se não encontrar a imagem
    }
    
    tocarSomDado(); // <--- ADICIONE ESTA LINHA AQUI

    // Pega o ID único do dado
    const uniqueId = cardImage.getAttribute('data-unique-id');

    // Pega o número do deck (do atributo data-deck da imagem do dado)
    const deckIdentifier = parseInt(cardImage.getAttribute('data-deck'), 10);

    // Mapeamento de decks para número de faces
    const deckFaceMapping = {
        16: 6,
        17: 6,
        18: 6,
        30: 6,
        31: 6,
        32: 6,
        33: 6,
        34: 6,
        40: 3, // Deck 40 é um dado de 3 lados
        42: 6,
        41: 4, // Deck 41 é um dado de 4 lados
        45: 20, // Deck 45 é um dado de 20 lados
        46: 20, // Deck 44 é um dado de 20 lados
        47: 8,  // Deck 47 é um dado de 8 lados
        61: 12  // Deck 61 é um dado de 12 lados
    };

    // Determina o número de faces do dado, com fallback para 6 faces
    const numFaces = deckFaceMapping[deckIdentifier] || 6;

// Gera uma face aleatória perfeitamente distribuída de 1 até numFaces
    const faceAleatoria = Math.floor(Math.random() * numFaces) + 1;

   const novaFace = `deck${deckIdentifier}/card${faceAleatoria}.jpeg`; // Caminho da nova face do dado

    // --- INÍCIO DO AJUSTE DE CARREGAMENTO SUAVE ---
    
    // 1. Aplica o efeito de desfoque (Blur) definido no seu CSS
    cardImage.classList.add('loading-dice');

    // 2. Cria o preloader para baixar a imagem em segundo plano
    const imgPreload = new Image();
    const finalUrl = `${novaFace}?t=${new Date().getTime()}`;

    // 3. Quando a imagem terminar de baixar no "limbo"
    imgPreload.onload = function() {
        // Só agora trocamos o src visível
        cardImage.src = imgPreload.src;
        // Remove o desfoque
        cardImage.classList.remove('loading-dice');
    };

    // Inicia o download da nova face
    imgPreload.src = finalUrl;

    // --- FIM DO AJUSTE ---

    // Adiciona a animação de flip (Giro)
    adicionarFlipVisual(cardImage);
}

// Função de animação de flip (mantida exatamente como a sua)
function adicionarFlipVisual(imgElement) {
    if (imgElement) {
        imgElement.classList.add('flip-animation');
        setTimeout(() => {
            imgElement.classList.remove('flip-animation');
        }, 1500); // Tempo da animação
    }
}

/*
// Adiciona o evento de clique na carta (mantido exatamente como o seu)
const cards = document.querySelectorAll('.card'); 
cards.forEach(card => {
    // Nota: Certifique-se de que não está adicionando múltiplos listeners se chamar esta parte várias vezes
    card.addEventListener('click', function () {
        if (card.getAttribute('data-unique-id')) { // Proteção para agir apenas em dados
            rollDice(card);
        }
    });
});
*/

//_________________________________________________________________________________________


























// Função para reatribuir os eventos para notas após UNDO / LOAD
function reassignNoteEvents() {
    const notes = document.querySelectorAll('.note');
    
    notes.forEach((note) => {
        try {
            // 0. Prevenção de erro: Garante que a nota ainda está atrelada à mesa antes de tentar clonar
            if (!note.parentNode) return;

            // 1. CLONAGEM PURIFICADORA
            const novaNota = note.cloneNode(true);
            note.parentNode.replaceChild(novaNota, note);
            
            // 2. ISOLAMENTO DO MOTOR EXTERNO: Se a função de arrasto falhar na nota oculta, não trava o sistema
            try {
                if (typeof addDragFunctionality === 'function') addDragFunctionality(novaNota);
            } catch (errDrag) {
                console.warn("⚠️ Aviso: addDragFunctionality falhou nesta nota (ela pode estar oculta).", errDrag);
            }
            
            // 3. ISOLAMENTO DOS EVENTOS EXTERNOS
            try {
                if (typeof addNoteEvents === 'function') addNoteEvents(novaNota);
            } catch (errEvent) {
                console.warn("⚠️ Aviso: addNoteEvents falhou nesta nota.", errEvent);
            }
            
            // 4. GARANTE A PROPRIEDADE DE TRAVA
            if (novaNota.getAttribute('data-locked') === 'true' || novaNota.title === "Nota Travada!") {
                novaNota.isLocked = true;
                novaNota.contentEditable = "false";
                novaNota.style.cursor = "not-allowed";
            } else {
                novaNota.isLocked = false;
                novaNota.contentEditable = "true";
                novaNota.style.cursor = "move";
            }

            // 5. IMPLEMENTAÇÃO DO ISOLAMENTO DE CLIQUE NA MESA
            novaNota.addEventListener('mousedown', (e) => { e.stopPropagation(); });
            novaNota.addEventListener('touchstart', (e) => { e.stopPropagation(); }, { passive: false });
            
            // --- 6. RESSUSCITA A BANDEIRA COM PREVENÇÃO DE DIMENSÕES ---
            const bandeira = novaNota.querySelector('.nota-bandeira');
            const textArea = novaNota.querySelector('.note-text-area');
            const handle = novaNota.querySelector('.note-drag-handle');

            if (bandeira) {
                novaNota.style.overflow = 'visible';

                ['mousedown', 'touchstart', 'pointerdown'].forEach(ev => {
                    bandeira.addEventListener(ev, (e) => e.stopPropagation(), { passive: false });
                });

                // Garante que o dataset padrão exista mesmo se a nota foi salva zerada
                if (!novaNota.dataset.width || novaNota.dataset.width === '0px') novaNota.dataset.width = '200px';
                if (!novaNota.dataset.bgColor) novaNota.dataset.bgColor = 'rgba(255, 255, 0, 0.1)';

                bandeira.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    const isHidden = novaNota.classList.contains('nota-oculta');

                    if (isHidden) {
                        // Mostrar a nota
                        novaNota.classList.remove('nota-oculta');
                        novaNota.style.backgroundColor = novaNota.dataset.bgColor;
                        novaNota.style.border = novaNota.dataset.border || '1px solid rgb(204, 204, 204)';
                        novaNota.style.width = novaNota.dataset.width;
                        novaNota.style.height = novaNota.dataset.height || 'auto';
                        
                        if (textArea) textArea.style.display = 'flex';
                        if (handle) handle.style.display = 'block';
                    } else {
                        // Salvar o tamanho antes de ocultar (apenas se for maior que 0)
                        if (novaNota.style.width !== '0px') novaNota.dataset.width = novaNota.style.width;
                        if (novaNota.style.height !== '0px') novaNota.dataset.height = novaNota.style.height;
                        novaNota.dataset.bgColor = novaNota.style.backgroundColor;
                        novaNota.dataset.border = novaNota.style.border;

                        // Ocultar a nota
                        novaNota.classList.add('nota-oculta');
                        novaNota.style.backgroundColor = 'transparent';
                        novaNota.style.border = 'none';
                        novaNota.style.width = '0px';
                        novaNota.style.height = '0px';
                        
                        if (textArea) textArea.style.display = 'none';
                        if (handle) handle.style.display = 'none';
                    }
                });
            }
        } catch (fatalError) {
            // Se qualquer erro bizarro ocorrer destruindo o processo de uma nota, 
            // ele cai aqui e O LOOP CONTINUA CARREGANDO AS OUTRAS NOTAS!
            console.error("🔥 Erro fatal ignorado ao restaurar uma nota. Pulando para a próxima...", fatalError);
        }
    });
    
    console.log(`♻️ Notas processadas após Undo/Load!`);
}











function reassignTableEvents() {
    const tableWrapper = document.getElementById('table-wrapper');

    // Evento para iniciar o arraste da mesa
    tableWrapper.addEventListener('mousedown', (e) => {
        if (!e.target.classList.contains('card') || e.target.getAttribute('data-locked') === 'true') {
            isDraggingTable = true;
            tableStartX = e.pageX - tableWrapper.offsetLeft;
            tableStartY = e.pageY - tableWrapper.offsetTop;
            scrollLeft = tableWrapper.scrollLeft;
            scrollTop = tableWrapper.scrollTop;
            tableWrapper.style.cursor = 'grabbing';
        }
    });

    // Evento para movimentar a mesa
    tableWrapper.addEventListener('mousemove', (e) => {
        if (isDraggingTable) {
            e.preventDefault();
            const x = e.pageX - tableWrapper.offsetLeft;
            const y = e.pageY - tableWrapper.offsetTop;
            tableWrapper.scrollLeft = scrollLeft - (x - tableStartX);
            tableWrapper.scrollTop = scrollTop - (y - tableStartY);
        }
    });

    // Finalizar o arraste
    tableWrapper.addEventListener('mouseup', () => {
        isDraggingTable = false;
        tableWrapper.style.cursor = 'grab';
    });

    // Interromper o arraste se o cursor sair da área da mesa
    tableWrapper.addEventListener('mouseleave', () => {
        isDraggingTable = false;
        tableWrapper.style.cursor = 'grab';
    });

    // Eventos de toque para dispositivos móveis
    tableWrapper.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        if (!touch.target.classList.contains('card') || touch.target.getAttribute('data-locked') === 'true') {
            isDraggingTable = true;
            tableStartX = touch.pageX - tableWrapper.offsetLeft;
            tableStartY = touch.pageY - tableWrapper.offsetTop;
            scrollLeft = tableWrapper.scrollLeft;
            scrollTop = tableWrapper.scrollTop;
            tableWrapper.style.cursor = 'grabbing';
        }
    });

    tableWrapper.addEventListener('touchmove', (e) => {
        if (isDraggingTable) {
            const touch = e.touches[0];
            const x = touch.pageX - tableWrapper.offsetLeft;
            const y = touch.pageY - tableWrapper.offsetTop;
            tableWrapper.scrollLeft = scrollLeft - (x - tableStartX);
            tableWrapper.scrollTop = scrollTop - (y - tableStartY);
        }
    });

    tableWrapper.addEventListener('touchend', () => {
        isDraggingTable = false;
        tableWrapper.style.cursor = 'grab';
    });

    // Interromper o arraste em dispositivos móveis se o toque sair da mesa
    tableWrapper.addEventListener('touchcancel', () => {
        isDraggingTable = false;
        tableWrapper.style.cursor = 'grab';
    });
}


















//__________________________________________________________________________________________________________
//_________________________________________________
//___________________________________________________________________________________________________





// Função para gerar automaticamente os nomes das imagens dos decks
function generateDeckImages(deckNumber, numCards) {
    const deck = [];
    for (let i = 1; i <= numCards; i++) {
        deck.push(`deck${deckNumber}/card${i}.jpeg`);
//deck.push(`https://www.aikidojundiai.wuaze.com/jogos/malleus_1666/deck${deckNumber}/card${i}.jpeg`);

    }
    return shuffleDeck(deck); // Embaralha o deck após gerar
}

// Função para embaralhar o deck usando o algoritmo de Fisher-Yates
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Troca as posições das cartas
    }
    return deck;
}

// Função para gerar todos os decks dinamicamente com base no número de decks e cartas por deck
function generateAllDecks(numDecks, numCardsPerDeck) {
    const allDecks = {};
    for (let i = 1; i <= numDecks; i++) {
        allDecks[i] = generateDeckImages(i, numCardsPerDeck[i - 1]);
    }
    return allDecks;
}


//Número de decks presentes com a relação do número de cartas presentes em cada um!
// Número de decks presentes com a relação do número de cartas presentes em cada um!
const numDecks = 72;

// Relação VISUAL, fácil de editar
const numCardsPerDeckObj = {
  deck1: 6,
  deck2: 6,
  deck3: 5,
  deck4: 36,
  deck5: 3,
  deck6: 18,
  deck7: 1,
  deck8: 1,
  deck9: 1,
  deck10: 1,
  deck11: 1,
  deck12: 1,
  deck13: 1,
  deck14: 1,
  deck15: 2,
  deck16: 1,
  deck17: 1,
  deck18: 1,
  deck19: 10,
  deck20: 1,
  deck21: 1,
  deck22: 1,
  deck23: 1,
  deck24: 1,
  deck25: 1,
  deck26: 1,
  deck27: 1,
  deck28: 1,
  deck29: 1,
  deck30: 1,
  deck31: 1,
  deck32: 1,
  deck33: 1,
  deck34: 1,
  deck35: 1,
  deck36: 1,
  deck37: 1,
  deck38: 1,
  deck39: 1,
  deck40: 1,
  deck41: 1,
  deck42: 1,
  deck43: 1,
  deck44: 0,
  deck45: 1,
  deck46: 1,
  deck47: 1,
  deck48: 1,
  deck49: 6,
  deck50: 39,
  deck51: 6,
  deck52: 7,
  deck53: 7,
  deck54: 13,
  deck55: 1,
  deck56: 14,
  deck57: 1,
  deck58: 1,
  deck59: 32,
  deck60: 4,
  deck61: 1,
  deck62: 1,
  deck63: 9,
  deck64: 6,
  deck65: 24,
  deck66: 3,
  deck67: 1,
  deck68: 12,
  deck69: 1,
  deck70: 2,
  deck71: 1,
  deck72: 1,
  deck73: 1,
};

// Geração automática do array a partir do objeto visual
const numCardsPerDeck = Array.from(
  { length: numDecks },
  (_, i) => numCardsPerDeckObj[`deck${i + 1}`] ?? 0
);

// Usa normalmente sua função existente
const allDecks = generateAllDecks(numDecks, numCardsPerDeck);



// Variáveis globais para o controle
let topZIndex = 1;
let currentElement = null;
let selectedCard = null;
let zoomLevel = 1;
let isDragging = false;
let isDraggingTable = false;
let offsetX = 0, offsetY = 0;
let tableStartX = 0, tableStartY = 0;
let scrollLeft = 0, scrollTop = 0;
let autoScrollInterval = null; // Para controlar o auto-scroll
let isCardLocked = false; // Estado de travamento
let novoConjunto = 0; // Para usar na colocação de novos conjuntos de dados






// Função para sortear uma carta de um dos decks
// Lista de decks que permitem cópias ilimitadas
const decksComCopiasIlimitadas = [7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 20, 21, 22, 23, 24, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 45, 46, 47, 50, 51, 54, 61, 67, 69, 71, 72]; // Exemplo: decks 1, 5 e 10 permitem cópias

//função que coloca as cartas na mesa.... contem tambem algumas regras especiais para alguns decks!
function drawCard(deckNumber) {
    // Caso especial: Deck 44 (Cemitério)
    if (deckNumber === 44) {
        if (allDecks[44].length === 0) {
           // alert("O Descarte está vazio!");
            mostrarToast("O Descarte está vazio!", "warning");
            return;
        }

        // Pega a última carta do Deck 44
        const cardData = allDecks[44].pop(); // Remove a última carta do Deck 44

        // Coloca a carta de volta na mesa e vincula ao deck original
        placeCardOnTable(cardData.originalDeck, cardData.src); // Usa o deck original

       // alert("Carta movida do Descarte para a mesa!");
        mostrarToast("Carta movida para a Mesa!", "warning");
        return;
    }







    // Lógica normal para os outros decks
    const deck = allDecks[deckNumber];

      // Verifica se há cartas no deck ou se o deck permite cópias ilimitadas
    if (deck.length === 0) {
        if (decksComCopiasIlimitadas.includes(deckNumber)) {
            const cardSrc = `deck${deckNumber}/card1.jpeg`; // Fonte da carta para cópia
            placeCardOnTable(deckNumber, cardSrc); // Coloca a cópia na mesa
        } else {
          //  alert(`Não há mais cartas no Deck ${deckNumber}!`);
            mostrarToast("Não há mais Cartas neste Deck!", "warning");
        }
        return;
    }


    // Seleciona uma carta aleatória
    const randomIndex = Math.floor(Math.random() * deck.length);
    const cardSrc = deck.splice(randomIndex, 1)[0]; // Remove a carta aleatória do deck

    placeCardOnTable(deckNumber, cardSrc); // Coloca a carta na mesa
}








// --------------------------------------------------------------------------------------------------------//






// Função para virar a carta (alternar entre frente e costas)
function flipCard(card) {

        closeCardOptions();  // Fechar popup de opções
mostrarToast("Carta VIRADA!");

    const targetCard = card || window.selectedCard;
    if (!targetCard) return;

    const originalSrc = targetCard.getAttribute('data-original-src');
    const isFlipped = targetCard.getAttribute('data-flipped') === 'true';
    const novoSrc = isFlipped ? originalSrc : originalSrc.replace('.jpeg', 'back.jpeg');

    const style = window.getComputedStyle(targetCard);
    const currentTransform = style.transform !== "none" ? style.transform : "";
    
    // 1. GIRO RÁPIDO: Usamos 180 graus direto. 
    // O tempo de 0.2s é o "ponto doce" entre ser rápido e ser visível.
    targetCard.style.transition = "transform 0.2s ease-in-out";
    targetCard.style.transform = `${currentTransform} rotateY(180deg)`;

    // 2. TROCA IMEDIATA: Sem esperar os 90 graus.
    atualizarImagemComBlur(targetCard, novoSrc, currentTransform);
    targetCard.setAttribute('data-flipped', !isFlipped ? 'true' : 'false');
    
// NOVA LINHA: Atualiza o minimapa após soltar o grupo de cartas
        solicitarAtualizacaoMinimapa();
}

function atualizarImagemComBlur(elementoImg, novoSrc, transformOriginal) {
    if (!elementoImg) return;

    elementoImg.classList.add('loading-dice');
    const imgPreload = new Image();
    const timestamp = new Date().getTime();
    elementoImg.dataset.lastAction = timestamp;

    imgPreload.onload = function() {
        if (elementoImg.dataset.lastAction == timestamp) {
            elementoImg.src = imgPreload.src;
            
            // 3. RESET DO GIRO: Volta para 0 para poder girar de novo no próximo clique
            // Fazemos isso sem transição para ser imperceptível
            setTimeout(() => {
                elementoImg.style.transition = "none";
                elementoImg.style.transform = `${transformOriginal} rotateY(0deg)`;
                elementoImg.classList.remove('loading-dice');
            }, 200); // Tempo igual à animação do CSS
        }
    };

    imgPreload.onerror = function() {
        elementoImg.style.transform = `${transformOriginal} rotateY(0deg)`;
        elementoImg.classList.remove('loading-dice');
    };

    imgPreload.src = `${novoSrc}?t=${timestamp}`;
}

//___________________________________________________________________________________________





//funcao que é usada para rolar varios dados de uma vez!
function rolarDado(deckNumber, cardImage, isManual = true) {
    if (!isManual) return;  // Ignora se não for chamado manualmente
    
  tocarSomDado(); // <--- ADICIONE ESTA LINHA AQUI  
    
    const numFaces = 6; // Número total de faces do dado
    const faceAleatoria = Math.floor(Math.random() * numFaces) + 1; // Seleciona uma face de 1 a 6
    const novaFace = `deck${deckNumber}/card${faceAleatoria}.jpeg`;

    // Atualiza a imagem do dado para simular o lançamento
    const timestamp = new Date().getTime();  // Cache busting
    cardImage.src = `${novaFace}?t=${timestamp}`;
    
    // Adiciona o flip visual sempre que a face muda
    adicionarFlipVisual(cardImage);  
}









// --------------------------------------------------------------------------------------------------------//


// Funçao para colocar a carta na mesa
function placeCardOnTable(deckNumber, cardSrc) {
    const tableWrapper = document.getElementById('table-wrapper');
    const tableArea = document.getElementById('table-area');

    // 1. Criamos o container totalmente invisível
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    cardContainer.style.position = 'relative';
    cardContainer.style.backgroundColor = 'transparent'; // Força transparência
    cardContainer.style.opacity = '0'; // Começa invisível
    cardContainer.style.transition = 'opacity 0.4s ease-in-out'; // Efeito de surgimento suave

    const cardImage = document.createElement('img');
    cardImage.style.backgroundColor = 'transparent'; // Evita o fundo branco da tag img
    
    const backSrc = cardSrc.replace('.jpeg', 'back.jpeg');

    // 2. Preparamos o carregamento da imagem
    const finalUrl = `${cardSrc}?t=${new Date().getTime()}`;
    
    // 3. O "Vigia": Só mostra a carta quando a imagem carregar 100%
    cardImage.onload = function() {
        cardContainer.style.opacity = '1'; // Revela o conjunto sem o flash branco
    };

    // Define o SRC para o navegador começar a baixar
    cardImage.src = finalUrl;

    // 4. Configurações da imagem (IDs, classes, etc)
    cardImage.classList.add('card');
    cardImage.setAttribute('data-original-src', cardSrc);
    cardImage.setAttribute('data-deck', deckNumber);
    cardImage.setAttribute('data-flipped', 'false');


    // Configurar o src da imagem e o atributo data
// Decks que devem entrar com a frente visível... dados devem sempre estar aqui para que a função escolher face funcione corretamente! 
    const decksFaceUp = [7, 8, 15, 16, 17,19, 20, 21, 22, 30, 31, 32, 33, 34, 35, 38, 39, 41, 42, 44, 45, 46, 47, 54, 55, 61, 66, 67, 68, 69, 71, 72];  
    if (decksFaceUp.includes(deckNumber)) {
        cardImage.src = cardSrc;
        cardImage.setAttribute('data-flipped', 'false');
    } else {
        cardImage.src = backSrc;
        cardImage.setAttribute('data-flipped', 'true');
    }

    cardImage.setAttribute('data-original-src', cardSrc);
 
   cardImage.classList.add('card');
    cardImage.setAttribute('data-deck', deckNumber);








    // Adicionar tratamento de erro para recarregar a imagem
    cardImage.onerror = function() {
        const src = cardImage.src.split('?')[0];  // Remove qualquer cache busting anterior
        const timestamp = new Date().getTime();  // Gera um novo timestamp
        cardImage.src = `${src}?t=${timestamp}`;  // Recarrega a imagem
    };

    cardContainer.appendChild(cardImage);
    tableArea.appendChild(cardContainer);







// Se o deck for dados, cria dados diferenciados
const allowedDecks = [16, 17, 30, 31, 32, 33, 34, 40, 41, 42, 45, 46, 47, 61, 67];
if (allowedDecks.includes(deckNumber)) {
    const uniqueId = `dice-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    cardImage.setAttribute('data-unique-id', uniqueId); 
    
    // Suas variáveis de controle mantidas
    let singleClickTimer = null;
    const doubleClickThreshold = 250; 
    let startX = 0, startY = 0;
    let isMoving = false; 
    let tempoInicioClique = 0;

    function rollDiceAction() {
        tocarSomDado(); 
        cardImage.classList.add('flip-animation');
        cardImage.classList.add('loading-dice'); 


 const numFaces = [45, 46].includes(deckNumber) ? 20 
                               : deckNumber === 40 ? 3 
                               : deckNumber === 41 ? 4 
                               : deckNumber === 47 ? 8 
                               : deckNumber === 61 ? 12 : 6;
       

        const faceAleatoria = Math.floor(Math.random() * numFaces) + 1;
        const caminhoNovaFace = `deck${deckNumber}/card${faceAleatoria}.jpeg`;

        const imgPreload = new Image();
        imgPreload.src = `${caminhoNovaFace}?t=${new Date().getTime()}`;

        imgPreload.onload = function() {
            cardImage.src = imgPreload.src;
            cardImage.classList.remove('loading-dice');
        };

        setTimeout(() => {
            cardImage.classList.remove('flip-animation');
        }, 1500);
    }

     rollDiceAction();

  // No início do bloco, além das suas variáveis, adicione esta:
    let timerCliqueLongo = null;

    function handleSingleClick() {
        if (isMoving) return; 
        if (singleClickTimer) {
            clearTimeout(singleClickTimer);
            singleClickTimer = null;
            return; 
        }
        singleClickTimer = setTimeout(() => {
            if (!isMoving) rollDiceAction(); 
            singleClickTimer = null; 
        }, doubleClickThreshold);
    }

    cardImage.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        startY = e.clientY;
        isMoving = false; 

        // ✅ ADICIONADO: Inicia o cronômetro para SELEÇÃO
        timerCliqueLongo = setTimeout(() => {
            isMoving = true; // Ao estourar o tempo, bloqueia a rolagem
            if (typeof selectCardOnTable === 'function') {
                selectCardOnTable(cardImage); 
                console.log("Dado selecionado (clique longo)");
            }
        }, 500); // 500ms segurando para selecionar
    });

    cardImage.addEventListener('mousemove', (e) => {
        if (startX === 0 && startY === 0) return;
        let diffX = Math.abs(e.clientX - startX);
        let diffY = Math.abs(e.clientY - startY);
        
        if (diffX > 5 || diffY > 5) {
            isMoving = true; 
            // ✅ ADICIONADO: Se moveu, cancela o timer de seleção
            if (timerCliqueLongo) {
                clearTimeout(timerCliqueLongo);
                timerCliqueLongo = null;
            }
        }
    });

    cardImage.addEventListener('mouseup', (e) => {
        // ✅ ADICIONADO: Limpa o timer de seleção ao soltar
        if (timerCliqueLongo) {
            clearTimeout(timerCliqueLongo);
            timerCliqueLongo = null;
        }

        handleSingleClick();
        startX = 0; startY = 0; 
    });

    // --- Repetir a lógica para o TOQUE (Celular) ---

    cardImage.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isMoving = false; 
        timerCliqueLongo = setTimeout(() => {
            isMoving = true;
            if (typeof selectCardOnTable === 'function') selectCardOnTable(cardImage);
        }, 600);
    });

    cardImage.addEventListener('touchmove', (e) => {
        let diffX = Math.abs(e.touches[0].clientX - startX);
        let diffY = Math.abs(e.touches[0].clientY - startY);
        if (diffX > 10 || diffY > 10) {
            isMoving = true; 
            if (timerCliqueLongo) clearTimeout(timerCliqueLongo);
        }
    });

    cardImage.addEventListener('touchend', (e) => {
        if (timerCliqueLongo) clearTimeout(timerCliqueLongo);
        e.preventDefault();
        handleSingleClick();
    });

    cardImage.addEventListener('dblclick', (e) => { e.stopPropagation(); });
}



    







    // Adicionar ativações específicas para as cartas colocadas por decks quando necessário
//Abaixo os decks que já entram como marcadores! Ou seja, sempre acima das demais.
    const decksComFixacaoNoTopo = [3, 7, 8, 9, 10,11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 49, 50, 54, 55, 56, 57, 61, 67, 68, 69, 71, 72, 73]; // Adicione os números dos decks aqui
    
    
    if (decksComFixacaoNoTopo.includes(deckNumber)) {
        cardImage.setAttribute('data-fixed-on-top', 'true'); 
        cardImage.classList.remove('locked2', 'fixed-on-top', 'destravada');

        // AJUSTE AQUI: Se for o marcador (73), não adiciona a classe visual do tracejado
        if (deckNumber === 73) {
            cardImage.style.outline = 'none';
            cardImage.style.border = 'none';
            cardImage.setAttribute("title", "Rastro"); 
        } else {
            // Para todos os outros, mantém o tracejado vermelho (Dashed Red)
            cardImage.classList.add('fixed-on-top'); 
            cardImage.setAttribute("title", "Carta Sempre no Topo!");
        }

        cardImage.removeAttribute("title"); // Limpa antes de redefinir (opcional, conforme seu código)
    }












// Adicionar classes específicas 
if ([1, 2, 4, 5, 6, 70].includes(deckNumber)) {
    cardImage.classList.add('deck1-card');
    }else if ([00000].includes(deckNumber)) {
        cardImage.classList.add('deck1miniatura-card');
    } else if ([00].includes(deckNumber)) {
        cardImage.classList.add('deck1menor-card');
        // Adiciona a borda
    cardImage.style.outline = '3px solid black'; // Linha simulando a borda
    // 👇 ADICIONA O ATRIBUTO DE PROTEÇÃO AQUI
    cardImage.setAttribute('manter-border', 'true'); 
    } else if ([24, 35, 38, 39, 54, 55, 57, 68].includes(deckNumber)) {
        cardImage.classList.add('deck4circular-card');
// Adiciona a borda
    cardImage.style.outline = '3px solid red'; // Linha simulando a borda
// 👇 ADICIONA O ATRIBUTO DE PROTEÇÃO AQUI
    cardImage.setAttribute('manter-border', 'true'); 
    } else if ([7, 8, 9, 10, 11, 12, 13, 14, 19, 36, 43, 69, 71, 72].includes(deckNumber)) {
        cardImage.classList.add('deckXcircular-card');
    } else if ([16, 17, 40, 41, 42, 67].includes(deckNumber)) {
        cardImage.classList.add('deck1menor-dado');
    }  else if ([15].includes(deckNumber)) {
        cardImage.classList.add('deck4circular-card');
// Adiciona a borda
    cardImage.style.outline = '3px solid white'; // Linha branca simulando a borda
    // 👇 ADICIONA O ATRIBUTO DE PROTEÇÃO AQUI
    cardImage.setAttribute('manter-border', 'true'); 
    } else if ([000000].includes(deckNumber)) {
        cardImage.classList.add('deck4circular-card');
// Adiciona a borda
    cardImage.style.outline = '3px solid grey'; // Linha ... simulando a borda
    // 👇 ADICIONA O ATRIBUTO DE PROTEÇÃO AQUI
    cardImage.setAttribute('manter-border', 'true'); 
    }  else if ([20].includes(deckNumber)) {
        cardImage.classList.add('deck4circular-card');
 // Adiciona a borda
    cardImage.style.outline = '3px solid green'; // Linha verde simulando a borda
// 👇 ADICIONA O ATRIBUTO DE PROTEÇÃO AQUI
    cardImage.setAttribute('manter-border', 'true'); 
       }  else if ([21].includes(deckNumber)) {
        cardImage.classList.add('deck4circular-card');
// Adiciona a borda
    cardImage.style.outline = '3px solid blue'; // Linha simulando a borda
// 👇 ADICIONA O ATRIBUTO DE PROTEÇÃO AQUI
    cardImage.setAttribute('manter-border', 'true'); 
    }  else if ([22].includes(deckNumber)) {
        cardImage.classList.add('deck4circular-card');
// Adiciona a borda 
    cardImage.style.outline = '3px solid Yellow'; // Linha simulando a borda
// 👇 ADICIONA O ATRIBUTO DE PROTEÇÃO AQUI
    cardImage.setAttribute('manter-border', 'true'); 
    }   else if ([23].includes(deckNumber)) {
        cardImage.classList.add('deck4circular-card');
// Adiciona a borda 
    cardImage.style.outline = '3px solid white'; // Linha simulando a borda
// 👇 ADICIONA O ATRIBUTO DE PROTEÇÃO AQUI
    cardImage.setAttribute('manter-border', 'true'); 
    } else if ([56, 59].includes(deckNumber)) {
        cardImage.classList.add('deck1menor-card');
    }   else if ([30, 31, 32, 33, 34, 45, 46, 47, 61, 67].includes(deckNumber)) {
        cardImage.classList.add('deck1menor-dado');
    }  else if ([18, 48, 53, 58, 60, 62, 63, 64, 65, 66].includes(deckNumber)) {
        cardImage.classList.add('deck1maior-card');
// Adiciona a borda 
  // cardImage.style.outline = '3px solid black'; // Linha  simulando a borda
// 👇 ADICIONA O ATRIBUTO DE PROTEÇÃO AQUI
   // cardImage.setAttribute('manter-border', 'true'); 
    } else if ([37].includes(deckNumber)) {
        cardImage.classList.add('deck4circular-spinner');
    } else if ([0].includes(deckNumber)) {
        cardImage.classList.add('card_decks');
// Adiciona a borda 
   cardImage.style.outline = '2px solid darkred'; // Linha  simulando a borda   
   // 👇 ADICIONA O ATRIBUTO DE PROTEÇÃO AQUI
    cardImage.setAttribute('manter-border', 'true'); 
    } else if ([51, 52].includes(deckNumber)) {
        cardImage.classList.add('fichas_decks');
    } else if ([0].includes(deckNumber)) {
        cardImage.classList.add('fichas2_decks');
    } else if (deckNumber === 73) {
        cardImage.classList.add('rastrear-marcador');
    }   else if ([49].includes(deckNumber)) {
        cardImage.classList.add('deck4miniaturas_retangulares-card');
    }   else if ([50].includes(deckNumber)) {
        cardImage.classList.add('deck4miniaturas_circulares-card');
        // Adiciona a borda 
   cardImage.style.outline = '2px solid darkred'; // Linha  simulando a borda 
   // 👇 ADICIONA O ATRIBUTO DE PROTEÇÃO AQUI
    cardImage.setAttribute('manter-border', 'true'); 
    } else if ([3].includes(deckNumber)) {
        cardImage.classList.add('deckXcircular-card');
        // Adiciona a borda 
   cardImage.style.outline = '1px solid white'; // Linha  simulando a borda 
   // 👇 ADICIONA O ATRIBUTO DE PROTEÇÃO AQUI
    cardImage.setAttribute('manter-border', 'true'); 
    }










// Verifica e salva o estilo de borda atual
const originalBorderShadow = cardImage.style.boxShadow;

// Aplica a nova sombra (Borda Amarela ALVo que ficará temporariamente para facilitar localização da carta colocada na mesa) com !important
cardImage.style.setProperty('box-shadow', '0 0 0 20px gold', 'important');

// Define um temporizador para restaurar a borda original após algum tempo(2500 milissegundos = 2,5 segundos)
setTimeout(() => {
 

// Remove a borda alvo amarela colocada para facilitar localização da carta ao ser colocada na mesa
    cardImage.style.setProperty('box-shadow', originalBorderShadow, 'important'); // Restaura a borda original com !important
 

}, 1100);





// Define um temporizador de alguns milesegundos para selecionar a cara colocada na mesa, IMPORTANTE, sem o temporizador a carta não era selecionada mesmo com o codigo funcionando! 
setTimeout(() => {

// ✅ Seleciona a carta logo apos ela ser colocada na mesa! Simula mousedown, mouseup e click
   ['touchstart', 'touchend', 'click', 'mousedown', 'mouseup'].forEach(eventType => {
    const event = new Event(eventType, { bubbles: true, cancelable: true });
    cardImage.dispatchEvent(event);
});
    // ✅ E reforça direto a seleção
    selectCardOnTable(cardImage);

}, 200);








    // Botão para virar a carta
    const flipButton = document.createElement('button');
    flipButton.innerHTML = '';
    flipButton.classList.add('flip-button');
    flipButton.style.position = 'absolute';
    flipButton.style.top = '5px';
    flipButton.style.right = '5px';

    // Evento do botão para virar a carta
    flipButton.addEventListener('click', () => {
        flipCard(cardImage, deckNumber, cardSrc);
    });

    // Adiciona o contêiner da carta à mesa
    cardContainer.appendChild(cardImage);
    tableArea.appendChild(cardContainer);

    
     // ⬇️ FORÇA seleção visual e lógica
    selectCardOnTable(cardImage);  // Garante o foco visual

    // ⬇️ Simula o clique real
    cardImage.click();  // Garante que eventos click são disparados
    
   

    // Obtém o nível de zoom atual da mesa
    const visibleCenterX = (tableWrapper.scrollLeft + tableWrapper.clientWidth / 2) / zoomLevel;
    const visibleCenterY = (tableWrapper.scrollTop + tableWrapper.clientHeight / 2) / zoomLevel;

    // Posiciona a carta para centralizar na janela visível
    cardImage.style.position = 'absolute';
    cardImage.style.left = `${visibleCenterX - (cardImage.offsetWidth / 2)}px`;
    cardImage.style.top = `${visibleCenterY - (cardImage.offsetHeight / 2)}px`;

    
    cardImage.addEventListener('mouseup', clearLongPressTimeout);
    cardImage.addEventListener('mouseleave', clearLongPressTimeout);
    cardImage.addEventListener('touchend', clearLongPressTimeout);
    cardImage.addEventListener('touchcancel', clearLongPressTimeout);
    cardImage.addEventListener('mousemove', clearLongPressTimeout);
    cardImage.addEventListener('touchmove', clearLongPressTimeout);

    cardImage.style.zIndex = topZIndex++;
    cardImage.draggable = false;
    cardImage.setAttribute('data-at-top', 'false');

    // Eventos de clique e toque para selecionar a carta e abrir o pop-up
    cardImage.addEventListener('click', (e) => selectCardOnTable(cardImage));
    cardImage.addEventListener('dblclick', () => openCardOptions(cardImage));
    cardImage.addEventListener('touchstart', handleTouch);
    cardImage.addEventListener('mousedown', onMouseDown);
    cardImage.addEventListener('touchstart', onTouchStart);

   // tableArea.appendChild(cardImage);
    

    
ensureFixedCardsOnTop(); //Função é chamada para que organize corretamente as cartas marcadas SEMPRE NO TO data-fixed_on_top=true



// Simula o clique na carta colocada na mesa! isso a tras para frente das demais, incluindo notas!
selectCardOnTable(cardImage);

if (cardImage.classList.contains('deck1menor-dado')) {
    rollDice(cardImage);
}

}






//_______________________________________________________________________________________________________________




//função importante que apos carregar a pagina espera um pouco e lê as cartas na mesa removendo elas dos decks criados! Assim evitaando duplicatas aoclicar nos decks se já houver cartas deles na mesa
function verificaCartasnaMesa() {
    const tableArea = document.getElementById('table-area');
    const existingCards = tableArea.getElementsByClassName('card'); // Obtém todas as cartas na mesa
    let somaMoedas = 0; // Inicializa a contagem de moedas

    if (existingCards.length > 0) {
        const cardDetails = Array.from(existingCards).map(card => {
            const deckNumbers = new Set();

            // Obtém o número do deck principal
            const deckNumber = parseInt(card.getAttribute('data-deck'), 10);
            if (!isNaN(deckNumber)) deckNumbers.add(deckNumber);

            // Obtém o número do deck original a partir do data-original-src (exemplo: "deckX/card2.jpeg")
            const originalSrc = card.getAttribute('data-original-src') || 'N/A';
            const match = originalSrc.match(/deck(\d+)\//); // Extrai o número após "deck"
            if (match) {
                const originalDeckNumber = parseInt(match[1], 10);
                if (!isNaN(originalDeckNumber)) deckNumbers.add(originalDeckNumber);
            }

            // Adiciona valor à soma de moedas com base no deck principal
            if (deckNumber === 38) {
                somaMoedas += 1; // Cada carta do deck38 vale 1 moeda
            } else if (deckNumber === 39) {
                somaMoedas += 5; // Cada carta do deck39 vale 5 moedas
            }

            return { deckNumbers, cardSrc: originalSrc };
        });

        // Atualiza o campo de moedas no HTML
        document.getElementById('moedas').textContent = `${somaMoedas} $`;

        // Remover as cartas de allDecks considerando ambos os decks
        cardDetails.forEach(({ deckNumbers, cardSrc }) => {
            deckNumbers.forEach(deckNum => {
                if (allDecks[deckNum]) {
                    allDecks[deckNum] = allDecks[deckNum].filter(card => card !== cardSrc);
                }
            });
        });
    } else {
        document.getElementById('moedas').textContent = "0 $"; // Zera se não houver cartas
    }
}

// Executa a função em intervalos como especificado
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(verificaCartasnaMesa, 2000);
    setTimeout(verificaCartasnaMesa, 4000);
    setInterval(verificaCartasnaMesa, 3000);
});




// --------------------------------------------------------------------------------------------------------//






// Função para lidar com toque duplo (dois toques)
let lastTouch = 0;
function handleTouch(event) {
    const currentTime = new Date().getTime();
    const timeSinceLastTouch = currentTime - lastTouch;

    if (timeSinceLastTouch < 150 && timeSinceLastTouch > 0) {
        openCardOptions(event.target);
    }

    lastTouch = currentTime;
}




// Função para selecionar uma carta (adicionar borda vermelha e trazer para frente)
function selectCardOnTable(card, forcarFrente = false) {
    if (isDragging) return;
    
    // Fechar popups de opções de notas antes de selecionar a carta
    closeNotePopups();
    
    
    

    // ✅ NOVO: Se estiver editando uma nota, desfoca
    if (document.activeElement && document.activeElement.isContentEditable) {
        console.log('Perdendo foco da nota, encerrando edição.');
        document.activeElement.blur();
    }
       
    

    // Remover borda da carta anterior
    if (selectedCard) {
        selectedCard.classList.remove('selected');
        selectedCard.style.opacity = '1';  // Restaura a opacidade para 100%
    }

    // Adicionar borda vermelha à carta atual
    selectedCard = card; // Usado no código geral para mouse e touch
    window.selectedCard = card; // Usado especificamente para o teclado


// 🎯 1. Garante que o sistema saiba qual é o elemento atual
    currentElement = card; 

    // 🎯 2. Se a carta é nova/clone e não tem status, força para OFF (false)
    if (!card.hasAttribute('data-tracked')) {
        card.setAttribute('data-tracked', 'false');
    }
    
    // 🎯 3. Atualiza o botão instantaneamente ao clicar na carta!
    atualizarEstadoBotaoRastreio(card);


    card.classList.add('selected');

    // Verificar se a carta atual está travada
    if (card.getAttribute('data-locked') === 'true' && !forcarFrente) {
        return;  // Impede de trazer para frente, mas continua com a seleção
    }

    // Verifica se a carta tem o atributo 'data-fixed-on-top' igual a 'true'
    if (card.getAttribute('data-fixed-on-top') === 'true') {
        // Encontra o maior z-index atual entre os marcadores do topo para jogá-la à frente deles
        const allFixed = Array.from(document.querySelectorAll('.card[data-fixed-on-top="true"]'));
        const maxFixedZ = Math.max(30000, ...allFixed.map(c => parseInt(c.style.zIndex) || 30000));
        card.style.zIndex = maxFixedZ + 1;
    } else {
        card.style.zIndex = topZIndex++;
        // Segurança extrema: Se você clicar 9.900 vezes na mesa, ele reorganiza antes de bater na Lousa!
        if (topZIndex > 9900) reorganizarZIndexCartas();
    }

    // Garantir que as cartas Travadas ainda fiquem no topo
    setTimeout(() => {
        ensureFixedCardsOnTop();
    }, 80);
  //  ensureFixedCardsOnTop();
 //   ensureFixedCardsOnTop();
 //   ensureFixedCardsOnTop();
 //   ensureFixedCardsOnTop();
  //  ensureFixedCardsOnTop();
  //  ensureFixedCardsOnTop();
  //  ensureFixedCardsOnTop();
  //  ensureFixedCardsOnTop();
    


    // Reorganiza os z-index das cartas para manter a hierarquia
    reorganizarZIndexCartas();
        ensureFixedCardsOnTop();  // ✅ Chama o reorganizador ao clicar numa carta

}

// Função para fechar popups de notas
function closeNotePopups() {
    const notePopups = document.querySelectorAll('.popup');  // Seleciona todos os popups
    notePopups.forEach(popup => {
        popup.style.display = 'none'; // Ou você pode usar popup.remove() para remover o elemento
    });
}





// --------------------------------------------------------------------------------------------------------//






function openCardOptions(card) {
// 🔴 SE A TRAVA ESTIVER ATIVA, PARA A EXECUÇÃO AQUI E NÃO ABRE O MENU
    if (bloqueioMenuRastreio) return;

    let cardOptions;
    let trackBtn;

    // 1. Identifica se clicou em um Dado ou em uma Carta Comum
    if (card.classList.contains('deck1menor-dado')) {
        cardOptions = document.getElementById('card-options2');
        trackBtn = document.getElementById('track-btn-2'); 
    } else {
        cardOptions = document.getElementById('card-options');
        trackBtn = document.getElementById('track-btn');  
    }

    const isFixedOnTop = card.getAttribute('data-fixed-on-top') === 'true';

    // 2. Mostrar o pop-up de opções e define a carta atual
    if (cardOptions) cardOptions.classList.add('show');
    currentElement = card;

    // 👇 --- SINCRONIZAÇÃO DO BOTÃO DE RASTREIO ---
    if (trackBtn) {
        const isTracked = card.getAttribute('data-tracked') === 'true';
        trackBtn.innerText = isTracked ? 'Rastrear: ON' : 'Rastrear: OFF';
        trackBtn.style.backgroundColor = isTracked ? 'darkred' : '';
        trackBtn.style.color = isTracked ? 'white' : '';
    }

    // 3. Lógica original: Desabilitar opções se a carta for "sempre visível"
    const bringFrontOption = document.getElementById('bring-to-front-option');
    const stackOption = document.getElementById('stack-option');

    if (isFixedOnTop) {
        if (bringFrontOption) bringFrontOption.style.display = 'none';
        if (stackOption) stackOption.style.display = 'none';
    } else {
        if (bringFrontOption) bringFrontOption.style.display = 'block';
        if (stackOption) stackOption.style.display = 'block';
    }
}



// Função para fechar o pop-up de opções (Ajustada para fechar todos os sub-menus)
function closeCardOptions() {
    const opt1 = document.getElementById('card-options');
    const opt2 = document.getElementById('card-options2');
    if (opt1) opt1.classList.remove('show');
    if (opt2) opt2.classList.remove('show');

    // FECHA A BARRA DE AGRUPAMENTO 
    const groupingBar = document.getElementById('grouping-bar');
    if (groupingBar) {
        groupingBar.classList.remove('show');
        setTimeout(() => groupingBar.remove(), 300);
    }

    // FECHA A BARRA DE REDIMENSIONAMENTO
    const resizeBar = document.getElementById('resize-bar');
    if (resizeBar) {
        resizeBar.classList.remove('show');
        setTimeout(() => resizeBar.remove(), 300);
    }
}

// Funcao para fechar popup do dado (Ajustada para fechar todos os sub-menus)
function closeCardOptions2() {
    const cardOptions = document.getElementById('card-options2');
    if (cardOptions) cardOptions.classList.remove('show');

    // FECHA A BARRA DE AGRUPAMENTO 
    const groupingBar = document.getElementById('grouping-bar');
    if (groupingBar) {
        groupingBar.classList.remove('show');
        setTimeout(() => groupingBar.remove(), 300);
    }

    // FECHA A BARRA DE REDIMENSIONAMENTO
    const resizeBar = document.getElementById('resize-bar');
    if (resizeBar) {
        resizeBar.classList.remove('show');
        setTimeout(() => resizeBar.remove(), 300);
    }
}







//-----------------------------------------------------------------------------------------------




// Função para trazer a carta para frente alternar o z-index da carta e fechar o popup
function bringCardToFront() {

// Fechar o popup de opções automaticamente (cartas)
    closeCardOptions();
// Fechar o popup de opções automaticamente (dados)
    closeCardOptions2();

    if (!currentElement) return;

    // 🔄 Garante que selectedCard está atualizado com o elemento atual
    selectedCard = currentElement;

    // Impedir a função se a carta estiver travada na base da mesa!
    if (selectedCard.getAttribute('data-locked') === 'true') {
        const userResponse = confirm("Esta carta está configurada como TRAVADA. Deseja alterar isso para continuar?");
        if (userResponse) {
            selectedCard.setAttribute('data-locked', 'false');
//selectedCard.style.border = '1px dashed transparent';
 //Elimina ostras classes antes de aplicar a nova!
        selectedCard.classList.remove('locked2', 'fixed-on-top', 'destravada');
        SelectedCard.classList.add('destravada');
        SelectedCard.removeAttribute("title"); // Remove atributo TITLE que mostra ao passar o mouse texto



    selectedCard.click(); // Simula o clique para garantir o estado

        } else {
           // alert("Operação cancelada. Configuração do marcador permanece inalterada.");
            mostrarToast("Operação Cancelada!", "warning");
            return;
        }
    }

    const isFixedOnTop = currentElement.getAttribute('data-fixed-on-top') === 'true';

    if (isFixedOnTop) {
        currentElement.setAttribute('data-fixed-on-top', 'false');
        //currentElement.style.border = '1px dashed transparent';
         //Elimina ostras classes antes de aplicar a nova!
        currentElement.classList.remove('locked2', 'fixed-on-top', 'destravada');
        currentElement.classList.add('destravada');
        currentElement.removeAttribute("title"); // Remove atributo TITLE que mostra ao passar o mouse texto
   
   
    // 🔒 Aviso de Removido do TOPO
       // alert("Removido Sempre no topo");
        mostrarToast("Removido SEMPRE NO TOPO", "warning");
   
   
    selectedCard.click(); // Simula o clique para garantir o estado
   

        // Só simula clique se não for dado
        if (!selectedCard.classList.contains('deck1menor-dado')) {
            simulateClickOnCard(selectedCard);
            console.log("✅ simulateClickOnCard executado.");
        } else {
            console.log("⛔ simulateClickOnCard ignorado: carta é um dado.");
        }
    } else {
        const fixedCards = document.querySelectorAll('[data-fixed-on-top="true"]');
        let highestZIndex = topZIndex;
    selectedCard.click(); // Simula o clique para garantir o estado

        fixedCards.forEach(card => {
            const cardZIndex = parseInt(card.style.zIndex) || 0;
            highestZIndex = Math.max(highestZIndex, cardZIndex);
        });

        topZIndex = highestZIndex + 1;
        currentElement.style.zIndex = topZIndex;
        currentElement.setAttribute('data-fixed-on-top', 'true');
        currentElement.setAttribute('data-at-top', 'true');
        //currentElement.style.border = '1px dashed red';
        //Elimina ostras classes antes de aplicar a nova!
        currentElement.classList.remove('locked2', 'fixed-on-top', 'destravada');
        currentElement.classList.add('fixed-on-top'); // dashed red na borda!
        currentElement.removeAttribute("title"); // Remove atributo TITLE que mostra ao passar o mouse texto
        currentElement.setAttribute("title", "Carta Sempre no Topo!"); //Coloca atributo TITLE

    // 🔒 Aviso de Colocado Sempre do TOPO
       // alert("Colocado Sempre no topo");
        mostrarToast("Colacada SEMPRE NO TOPO!", "warning");

    selectedCard.click(); // Simula o clique para garantir o estado

        // Só simula clique se não for dado
        if (!selectedCard.classList.contains('deck1menor-dado')) {
            simulateClickOnCard(selectedCard);
            console.log("✅ simulateClickOnCard executado.");
        } else {
            console.log("⛔ simulateClickOnCard ignorado: carta é um dado.");
        }
    }
}







// Função para garantir que as cartas Travadas no topo mantenham o maior z-index, mas mantendo a ordem relativa
function ensureFixedCardsOnTop() {
    console.log('🔄 ensureFixedCardsOnTop (com notas) executada em', new Date().toLocaleTimeString());

    const tableArea = document.getElementById('table-area');
    const cards = Array.from(tableArea.querySelectorAll('.card'));
    const notes = Array.from(tableArea.querySelectorAll('.note'));

    const fixedCards = cards.filter(card => card.getAttribute('data-fixed-on-top') === 'true');
    const normalCards = cards.filter(card => card.getAttribute('data-fixed-on-top') !== 'true');

    // 1️⃣ Cartas normais (ficam ABAIXO da lousa, de 1 até 9999)
    let currentZNormal = 1;
    normalCards.sort((a, b) => getZ(a) - getZ(b)).forEach(card => {
        card.style.zIndex = currentZNormal++;
    });
    topZIndex = currentZNormal; // Atualiza a contagem global para o clique das cartas normais

    // 2️⃣ Notas (ficam ACIMA da lousa, começando em 20000)
    let currentZNotes = 20000;
    notes.sort((a, b) => getZ(a) - getZ(b)).forEach(note => {
        note.style.zIndex = currentZNotes++;
    });

    // 3️⃣ Cartas fixas no Topo (acima de TUDO, começando em 30000)
    let currentZFixed = 30000;
    fixedCards.sort((a, b) => getZ(a) - getZ(b)).forEach(card => {
        card.style.zIndex = currentZFixed++;
    });

    function getZ(el) {
        return parseInt(window.getComputedStyle(el).zIndex) || 0;
    }
}



// Função para executar o código após 2 segundos
setTimeout(() => {
    checkCardsAndSetInterval();
}, 2000); // Delay de 2 segundos










//--------------------------------------------------------------------------------------

function updateCardTransform(card) {
    const rotation = parseFloat(card.getAttribute('data-rotation')) || 0;
    const scale = parseFloat(card.getAttribute('data-scale')) || 1;
    const translateX = parseFloat(card.getAttribute('data-translate-x')) || 0;
    const translateY = parseFloat(card.getAttribute('data-translate-y')) || 0;

    card.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg) scale(${scale})`;
}

function rotateCard(degrees = 45) {
    if (!selectedCard) {
       // alert("Nenhuma carta selecionada para rotacionar!");
          mostrarToast("Nenhuma carta selecionada para rotacionar!", "warning");

        return;
    }

    let currentRotation = parseFloat(selectedCard.getAttribute('data-rotation')) || 0;
    currentRotation = currentRotation + degrees; // 🔹 NÃO usa % 360
    selectedCard.setAttribute('data-rotation', currentRotation);

    updateCardTransform(selectedCard);
       mostrarToast("Carta Rotacionada!", "warning");

    
    // NOVA LINHA: Atualiza o minimapa após soltar o grupo de cartas
        solicitarAtualizacaoMinimapa();
}


// --------------------------------------------------------------------------------------------------------//







// Variáveis globais usadas
let initialClientX = 0;
let initialClientY = 0;
let initialScrollLeft = 0;
let initialScrollTop = 0;
let inactivityTimer;
//let autoScrollActive = false;
let autoScrollAnimationFrame = null;
let initialScrollLeftDuringDrag = 0;
let initialScrollTopDuringDrag = 0;
//let lastClientX = 0;
//let lastClientY = 0;

// Função para converter graus em radianos
function degToRad(deg) {
    return deg * (Math.PI / 180);
}

// Função para obter rotação e escala da carta
function getCardRotationAndScale(element) {
    let rotation = parseFloat(element.getAttribute('data-rotation')) || 0;
    let scale = parseFloat(element.getAttribute('data-scale')) || 1;
    return { rotation, scale };
}

// Função para iniciar o arraste com o mouse (cartas)
function onMouseDown(event) {
    if (event.target.classList.contains('card')) {
        event.preventDefault();
        currentElement = event.target;

        const rect = currentElement.getBoundingClientRect();
        const tableArea = document.getElementById('table-area');
        const tableWrapper = document.getElementById('table-wrapper');

        const { rotation, scale } = getCardRotationAndScale(currentElement);

        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        const rad = degToRad(-rotation);

        const unrotatedX = (clickX - rect.width / 2) / scale;
        const unrotatedY = (clickY - rect.height / 2) / scale;

        offsetX = unrotatedX * Math.cos(rad) - unrotatedY * Math.sin(rad) + rect.width / 2;
        offsetY = unrotatedX * Math.sin(rad) + unrotatedY * Math.cos(rad) + rect.height / 2;

        initialLeft = parseFloat(currentElement.style.left) || 0;
        initialTop = parseFloat(currentElement.style.top) || 0;

        initialClientX = event.clientX;
        initialClientY = event.clientY;

        initialScrollLeft = tableArea.scrollLeft;
        initialScrollTop = tableArea.scrollTop;

        initialScrollLeftDuringDrag = tableWrapper.scrollLeft;
        initialScrollTopDuringDrag = tableWrapper.scrollTop;

        lastClientX = event.clientX;
        lastClientY = event.clientY;

        selectCardOnTable(currentElement);

        isDragging = true;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        startAutoScroll();
    }
}

// Função para mover a carta com o mouse
function onMouseMove(event) {
    if (isDragging && currentElement.getAttribute('data-locked') !== 'true') {
        currentElement.style.opacity = '0.5';
    }
    lastClientX = event.clientX;
    lastClientY = event.clientY;
    moveCard(event);
    resetInactivityTimer();
}

// Função para finalizar o arraste com o mouse
function onMouseUp() {
    isDragging = false;
    if (currentElement) {
        currentElement.style.opacity = '1';
        
        // 👇 Inicia o rastreio (se a carta estiver marcada)
        iniciarTimerRastreio(currentElement);
        
        
    }
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    stopAutoScroll();
    
// NOVA LINHA: Atualiza o minimapa só quando soltar o clique
    solicitarAtualizacaoMinimapa();
}

// Função para iniciar o toque (arraste de cartas com toque)
function onTouchStart(event) {
    if (event.target.classList.contains('card')) {
        event.preventDefault();
        const touch = event.touches[0];
        currentElement = event.target;

        const rect = currentElement.getBoundingClientRect();
        const tableArea = document.getElementById('table-area');
        const tableWrapper = document.getElementById('table-wrapper');

        const { rotation, scale } = getCardRotationAndScale(currentElement);

        const clickX = touch.clientX - rect.left;
        const clickY = touch.clientY - rect.top;

        const rad = degToRad(-rotation);

        const unrotatedX = (clickX - rect.width / 2) / scale;
        const unrotatedY = (clickY - rect.height / 2) / scale;

        offsetX = unrotatedX * Math.cos(rad) - unrotatedY * Math.sin(rad) + rect.width / 2;
        offsetY = unrotatedX * Math.sin(rad) + unrotatedY * Math.cos(rad) + rect.height / 2;

        initialLeft = parseFloat(currentElement.style.left) || 0;
        initialTop = parseFloat(currentElement.style.top) || 0;

        initialClientX = touch.clientX;
        initialClientY = touch.clientY;

        initialScrollLeft = tableArea.scrollLeft;
        initialScrollTop = tableArea.scrollTop;

        initialScrollLeftDuringDrag = tableWrapper.scrollLeft;
        initialScrollTopDuringDrag = tableWrapper.scrollTop;

        lastClientX = touch.clientX;
        lastClientY = touch.clientY;

        selectCardOnTable(currentElement);

        isDragging = true;

        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);

        startAutoScroll();
        resetInactivityTimer();
    }
}

// Função para mover a carta com o toque
function onTouchMove(event) {
    if (isDragging && currentElement.getAttribute('data-locked') !== 'true') {
        currentElement.style.opacity = '0.5';
    }
    lastClientX = event.touches[0].clientX;
    lastClientY = event.touches[0].clientY;
    moveCard(event, true);
    resetInactivityTimer();
}

// Função para finalizar o arraste com toque
function onTouchEnd() {
    isDragging = false;
    clearTimeout(inactivityTimer);
    if (currentElement) {
        currentElement.style.opacity = '1';
        
    // 👇 Inicia o rastreio (se a carta estiver marcada)
        iniciarTimerRastreio(currentElement);    
        
    }
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
    stopAutoScroll();
    
// NOVA LINHA: Atualiza o minimapa só quando soltar o clique
    solicitarAtualizacaoMinimapa();
}

// Função para capturar o zoom real aplicado no elemento da mesa
function getZoomLevel() {
  const tableArea = document.getElementById('table-area');
  const style = window.getComputedStyle(tableArea);
  const transform = style.transform || style.webkitTransform;

  if (transform && transform !== 'none') {
    const match = transform.match(/^matrix\((.+)\)$/);
    if (match) {
      const values = match[1].split(', ');
      const scaleX = parseFloat(values[0]);
      return scaleX || 1;
    }
  }
  return 1;
}

// Função comum para mover a carta, usada tanto para mouse quanto para toque
// Função comum para mover a carta, usada tanto para mouse quanto para toque
function moveCard(event, isTouch = false) {
    if (!isDragging) return;
    if (!currentElement || currentElement.getAttribute('data-locked') === 'true') return;

    const clientX = isTouch ? event.touches[0].clientX : event.clientX;
    const clientY = isTouch ? event.touches[0].clientY : event.clientY;

    const tableArea = document.getElementById('table-area');
    const tableWrapper = document.getElementById('table-wrapper');
    const tableRect = tableArea.getBoundingClientRect();

    const { scale } = getCardRotationAndScale(currentElement);

    // Obter zoom real da mesa no momento
    const zoomLevel = getZoomLevel();

    const movementX = clientX - initialClientX;
    const movementY = clientY - initialClientY;

    // Compensação do scroll durante o arraste, dividida pelo zoom atual
    const scrollDeltaX = (tableWrapper.scrollLeft - initialScrollLeftDuringDrag) / zoomLevel;
    const scrollDeltaY = (tableWrapper.scrollTop - initialScrollTopDuringDrag) / zoomLevel;

    // Calcular nova posição da carta, considerando zoom, movimento do ponteiro e scroll compensado
    let newLeft = initialLeft + (movementX / zoomLevel) + scrollDeltaX;
    let newTop = initialTop + (movementY / zoomLevel) + scrollDeltaY;

    // --- INÍCIO DO COMPENSADOR DE ESCALA ---
    // Calculamos quanto a carta "encolheu" visualmente em relação ao seu tamanho real (offsetWidth)
    // Se a escala for 0.5, a compensação será metade da diferença, permitindo encostar na borda 0.
    const rect = currentElement.getBoundingClientRect();
    const compensacaoX = (currentElement.offsetWidth - (rect.width / zoomLevel)) / 2;
    const compensacaoY = (currentElement.offsetHeight - (rect.height / zoomLevel)) / 2;
    // --- FIM DO COMPENSADOR ---

    const cardWidth = currentElement.offsetWidth * scale;
    const cardHeight = currentElement.offsetHeight * scale;

    // limita o movimento da carta para as beiradas da mesa
    const marginleft = 30000; 
    const margintop = 30000; 

    const maxLeft = (tableRect.width - cardWidth) / zoomLevel + marginleft;
    const maxTop = (tableRect.height - cardHeight) / zoomLevel + margintop;

    // APLICANDO A COMPENSAÇÃO NOS LIMITES:
    // O limite mínimo deixa de ser 0 e passa a ser o negativo da compensação
    newLeft = Math.min(Math.max(newLeft, -compensacaoX), maxLeft + compensacaoX);
    newTop = Math.min(Math.max(newTop, -compensacaoY), maxTop + compensacaoY);

    currentElement.style.left = `${newLeft}px`;
    currentElement.style.top = `${newTop}px`;

    handleAutoScroll(clientX, clientY);
}


// Função para reiniciar o temporizador de inatividade
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(function () {
        if (currentElement) {
            currentElement.style.opacity = '1';
        }
    }, 1000);
}






// --------------------------------------------------------------------------------------------------------//





let autoScrollActive = false;
let lastClientX = 0;
let lastClientY = 0;

// Função para iniciar o auto-scroll da mesa
function startAutoScroll() {
    if (!autoScrollActive) {
        autoScrollActive = true;

        function scrollStep() {
            if (!autoScrollActive) return;

            const tableWrapper = document.getElementById('table-wrapper');
            let scrolled = false;

            let scrollXBefore = tableWrapper.scrollLeft;
            let scrollYBefore = tableWrapper.scrollTop;

            if (scrollDirection === 'up') {
                tableWrapper.scrollTop -= 10;
                scrolled = true;
            } else if (scrollDirection === 'down') {
                tableWrapper.scrollTop += 10;
                scrolled = true;
            }

            if (scrollDirection === 'left') {
                tableWrapper.scrollLeft -= 10;
                scrolled = true;
            } else if (scrollDirection === 'right') {
                tableWrapper.scrollLeft += 10;
                scrolled = true;
            }

            let scrollXAfter = tableWrapper.scrollLeft;
            let scrollYAfter = tableWrapper.scrollTop;

            // Calcula a diferença do scroll para compensar a posição da carta com zoom
            const deltaScrollX = (scrollXAfter - scrollXBefore) * (1 / zoomLevel);
const deltaScrollY = (scrollYAfter - scrollYBefore) * (1 / zoomLevel);


            if (isDragging && scrolled && currentElement && currentElement.getAttribute('data-locked') !== 'true') {
                const currentLeft = parseFloat(currentElement.style.left) || 0;
                const currentTop = parseFloat(currentElement.style.top) || 0;

                let newLeft = currentLeft - deltaScrollX;
                let newTop = currentTop - deltaScrollY;

                // Limita a carta dentro da mesa
                const tableArea = document.getElementById('table-area');
                const tableRect = tableArea.getBoundingClientRect();
                const { scale } = getCardRotationAndScale(currentElement);

                const cardWidth = currentElement.offsetWidth * scale;
                const cardHeight = currentElement.offsetHeight * scale;

                const maxLeft = (tableRect.width - cardWidth) / zoomLevel;
                const maxTop = (tableRect.height - cardHeight) / zoomLevel;

                newLeft = Math.min(Math.max(newLeft, 0), maxLeft);
                newTop = Math.min(Math.max(newTop, 0), maxTop);

                currentElement.style.left = `${newLeft}px`;
                currentElement.style.top = `${newTop}px`;
            }

            // Simula o movimento da carta com a última posição do cursor/toque
            if (isDragging && scrolled) {
                moveCard({ clientX: lastClientX, clientY: lastClientY });
            }

            requestAnimationFrame(scrollStep);
        }

        requestAnimationFrame(scrollStep);
    }
}

// Função para parar o auto-scroll da mesa
function stopAutoScroll() {
    autoScrollActive = false;
}

// Variável para armazenar a direção do scroll
let scrollDirection = null;

// Função para verificar se o dispositivo é mobile
function isMobile2() {
    const userAgent = navigator.userAgent;
    return /Mobi|Android|iPhone|iPad|iPod|webOS|BlackBerry|Windows Phone/.test(userAgent);
}

function handleAutoScroll(clientX, clientY) {
    const tableWrapper = document.getElementById('table-wrapper');
    const rect = tableWrapper.getBoundingClientRect();

    const edgeThreshold = isMobile2() ? 40 : 80;

    lastClientX = clientX;
    lastClientY = clientY;

    scrollDirection = null;

    // 🔥 PRIORIDADE PARA VERTICAL
    if (clientY < rect.top + edgeThreshold) {
        scrollDirection = 'up';
        return;
    }

    if (clientY > rect.bottom - edgeThreshold) {
        scrollDirection = 'down';
        return;
    }

    // Horizontal só se não for vertical
    if (clientX < rect.left + edgeThreshold) {
        scrollDirection = 'left';
    } else if (clientX > rect.right - edgeThreshold) {
        scrollDirection = 'right';
    }
}







// --------------------------------------------------------------------------------------------------------//





// Função para arrastar a mesa (área vazia)
const tableWrapper = document.getElementById('table-wrapper');

  // Evento para iniciar o arraste da mesa
    tableWrapper.addEventListener('mousedown', (e) => {
        if (!e.target.classList.contains('card') || e.target.getAttribute('data-locked') === 'true') {
            isDraggingTable = true;
            tableStartX = e.pageX - tableWrapper.offsetLeft;
            tableStartY = e.pageY - tableWrapper.offsetTop;
            scrollLeft = tableWrapper.scrollLeft;
            scrollTop = tableWrapper.scrollTop;
            tableWrapper.style.cursor = 'grabbing';
        }
    });

    // Evento para movimentar a mesa
    tableWrapper.addEventListener('mousemove', (e) => {
        if (isDraggingTable) {
            e.preventDefault();
            const x = e.pageX - tableWrapper.offsetLeft;
            const y = e.pageY - tableWrapper.offsetTop;
            tableWrapper.scrollLeft = scrollLeft - (x - tableStartX);
            tableWrapper.scrollTop = scrollTop - (y - tableStartY);
        }
    });

    // Finalizar o arraste
    tableWrapper.addEventListener('mouseup', () => {
        isDraggingTable = false;
        tableWrapper.style.cursor = 'grab';
    });

    // Interromper o arraste se o cursor sair da área da mesa
    tableWrapper.addEventListener('mouseleave', () => {
        isDraggingTable = false;
        tableWrapper.style.cursor = 'grab';
    });

    // Eventos de toque para dispositivos móveis
    tableWrapper.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        if (!touch.target.classList.contains('card') || touch.target.getAttribute('data-locked') === 'true') {
            isDraggingTable = true;
            tableStartX = touch.pageX - tableWrapper.offsetLeft;
            tableStartY = touch.pageY - tableWrapper.offsetTop;
            scrollLeft = tableWrapper.scrollLeft;
            scrollTop = tableWrapper.scrollTop;
            tableWrapper.style.cursor = 'grabbing';
        }
    });

    tableWrapper.addEventListener('touchmove', (e) => {
        if (isDraggingTable) {
            const touch = e.touches[0];
            const x = touch.pageX - tableWrapper.offsetLeft;
            const y = touch.pageY - tableWrapper.offsetTop;
            tableWrapper.scrollLeft = scrollLeft - (x - tableStartX);
            tableWrapper.scrollTop = scrollTop - (y - tableStartY);
        }
    });

    tableWrapper.addEventListener('touchend', () => {
        isDraggingTable = false;
        tableWrapper.style.cursor = 'grab';
    });

    // Interromper o arraste em dispositivos móveis se o toque sair da mesa
    tableWrapper.addEventListener('touchcancel', () => {
        isDraggingTable = false;
        tableWrapper.style.cursor = 'grab';
    });





// --------------------------------------------------------------------------------------------------------//





//função que controla o zoom nas carta de forma individual
function resizeCard(action) {
    if (!selectedCard || selectedCard.getAttribute('data-locked') === 'true') {
      //  alert("Esta carta está travada!");
        mostrarToast("Esta Carta está TRAVADA!", "warning");
        return;
    }

    let scale = parseFloat(selectedCard.getAttribute('data-scale')) || 1;
    const currentWidth = selectedCard.offsetWidth;
    const currentHeight = selectedCard.offsetHeight; // Pegamos a altura também
    const rotation = parseInt(selectedCard.getAttribute('data-rotation')) || 0;

    if (action === 'increase') {
        const nextScale = scale + 0.1;
        
        // Calculamos o tamanho que ela TERIA se aumentasse
        const visualWidth = currentWidth * nextScale;
        const visualHeight = currentHeight * nextScale;

        // TRAVA: Só aumenta se AMBAS as dimensões forem menores ou iguais a 6000px
        if (visualWidth <= 6000 && visualHeight <= 6000) {
            scale = nextScale;
        } else {
            console.log("Limite da mesa atingido (6000px)!");
        }
    } else if (action === 'decrease') {
        if (scale - 0.1 >= 0.1) {
            scale -= 0.1;
        }
    }

    selectedCard.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    selectedCard.setAttribute('data-scale', scale);
    
    // NOVA LINHA: Atualiza o minimapa após soltar o grupo de cartas
        solicitarAtualizacaoMinimapa();
}






// --------------------------------------------------------------------------------------------------------//







// Função para ajustar o zoom da mesa
function adjustZoom(action) {
            mostrarToast("Zoom da mesa Ajustado!");


    const tableArea = document.getElementById('table-area');
    const tableWrapper = document.getElementById('table-wrapper');
    const zoomStep = 0.09; //Aqui controlamos o PASSo desejado para os Zoom, no modelo anterior usava 0.1

    if (!tableArea || !tableWrapper) return;

    const wrapperWidth = tableWrapper.clientWidth;
    const wrapperHeight = tableWrapper.clientHeight;

    // Coordenadas do centro visível (em relação à mesa original)
    const centerX = (tableWrapper.scrollLeft + wrapperWidth / 2) / zoomLevel;
    const centerY = (tableWrapper.scrollTop + wrapperHeight / 2) / zoomLevel;

    // Aplicar zoom
    if (action === 'increase' && zoomLevel < 3.2) {
        zoomLevel += zoomStep;
    } else if (action === 'decrease' && zoomLevel > 0.3) {
        zoomLevel -= zoomStep;
    }

    tableArea.style.transform = `scale(${zoomLevel})`;
    tableArea.style.transformOrigin = 'top left';

    // Reposicionar scroll para manter o centro visível
    tableWrapper.scrollLeft = centerX * zoomLevel - wrapperWidth / 2;
    tableWrapper.scrollTop = centerY * zoomLevel - wrapperHeight / 2;


// ADICIONA ISTO NO FIM DA FUNÇÃO:
    if (typeof window.recalculaPreviewLousa === 'function') {
        window.recalculaPreviewLousa();
    }
}




//___________________________________________________________________________________________






//----------------------------------------------------------------------------





// Função para abrir o seletor de cartas de qualquer deck
// Função para abrir o seletor de cartas de qualquer deck
function openCardSelector(deckNumber) {
    // Verifica se o deck possui cartas
    if (!allDecks[deckNumber] || allDecks[deckNumber].length === 0) {
      //  alert("O deck está vazio ou não existe!");
     mostrarToast("O deck está vazio ou não existe!", "warning");

        return;
    }

    // Verificar se já existe um popup aberto e removê-lo
    const existingPopup2 = document.querySelector('.popup');
    if (existingPopup2) {
        existingPopup2.remove();
    }

    // Cria o popup2 para exibir as cartas
    const popup2 = document.createElement('div');
    popup2.classList.add('popup2');
    popup2.style.position = 'fixed';
    popup2.style.top = '0';
    popup2.style.left = '0';
    popup2.style.width = '100%';
    popup2.style.height = '100%';
    popup2.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    popup2.style.display = 'flex';
    popup2.style.justifyContent = 'center';
    popup2.style.alignItems = 'center';
    popup2.style.zIndex = '9999';

    // Cria o contêiner para as cartas do Deck
    const cardContainer = document.createElement('div');
    cardContainer.style.display = 'grid';
    cardContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';  // Duas colunas
    cardContainer.style.gap = '5px';  // Reduz o espaçamento entre as cartas
    cardContainer.style.backgroundColor = '#fff';
    cardContainer.style.padding = '20px';
    cardContainer.style.borderRadius = '10px';
    cardContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    cardContainer.style.maxHeight = '70%';  // Limita a altura do container
    cardContainer.style.maxWidth = '400px'; // Limita a largura do container
    cardContainer.style.width = '100%';  // Usa 100% da largura disponível
    cardContainer.style.height = 'auto'; // Ajusta a altura automaticamente
    cardContainer.style.overflowY = 'auto';

    // Obter as cartas disponíveis no deck
    let deck = allDecks[deckNumber];

    // Obter as cartas que já estão na mesa para o deck atual
    const cardsOnTable = Array.from(document.querySelectorAll(`.card[data-deck="${deckNumber}"]`))
                              .map(card => card.src.split('/').pop()); // Pegamos apenas o nome do arquivo

    // Filtrar as cartas que ainda estão disponíveis, removendo as que já estão na mesa
    const availableCards = deck.filter(card => !cardsOnTable.includes(card.split('/').pop()));

    // Exibir as cartas disponíveis no popup2
    availableCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.style.marginBottom = '10px';

        const cardImg = document.createElement('img');
        cardImg.src = card;
        cardImg.classList.add('card-thumbnail');
        cardImg.style.width = '80%'; // Ajustando o tamanho das imagens 
        cardImg.style.height = 'auto'; // Mantém a proporção da imagem

        // Adicionar o tratamento de erro na imagem
        cardImg.onerror = function() {
            const src = cardImg.src.split('?')[0];  // Remove o cache busting anterior
            const timestamp = new Date().getTime();  // Gera um novo timestamp
            cardImg.src = `${src}?t=${timestamp}`;  // Recarrega a imagem
        };

        // Adicionar o evento de clique para selecionar a carta
        cardImg.onclick = function() {
            chooseCardFromSelector(deckNumber, card); // Remover a carta e atualizar
            popup2.remove(); // Fecha o popup2 após a seleção
        };

        cardElement.appendChild(cardImg);
        cardContainer.appendChild(cardElement);
    });

    // Adiciona o contêiner ao popup2
    popup2.appendChild(cardContainer);

    // Adiciona o popup2 à página
    document.body.appendChild(popup2);

    // Fecha o popup2 se clicar fora do contêiner
    popup2.addEventListener('click', (e) => {
        if (e.target === popup2) {
            popup2.remove(); // Fecha o popup2
        }
    });

    // Adicionar o estilo CSS isolado para este popup2
    const style = document.createElement('style');
    style.innerHTML = `
        .popup2 {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9999;
        }

        .popup2 .card-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            max-height: 70%;  /* Limita a altura do contêiner */
            max-width: 400px; /* Limita a largura do contêiner */
            width: 100%;
            height: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);  /* Duas colunas */
            gap: 5px;  /* Menor espaçamento entre as cartas */
            overflow-y: auto;
        }

        .popup2 img {
            width: 40%;      /* Ajusta a largura das imagens para 40% */
            height: auto;     /* Mantém a proporção das imagens */
            cursor: pointer;
            object-fit: cover;
            border-radius: 5px;
        }

        .popup2 img:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
}

// Função para selecionar uma carta do popup e colocá-la na mesa
function chooseCardFromSelector(deckNumber, cardSrc) {
    // Colocar a carta na mesa
    placeCardOnTable(deckNumber, cardSrc);

    // Remover a carta do deck para que não possa ser sorteada novamente
    allDecks[deckNumber] = allDecks[deckNumber].filter(card => card !== cardSrc);

    // Fechar o seletor de cartas
    closeCardSelector();

    // Reabrir o popup com as cartas restantes
    openCardSelector(deckNumber);
}

// Função para fechar o seletor de cartas
function closeCardSelector() {
    const selector = document.querySelector('.popup2');
    if (selector) {
        selector.remove();
    }
}









// --------------------------------------------------------------------------------------------------------//
// Função para abrir o seletor de cartas do Deck 44 (Cemitério)
function openDeck44Selector() {
    // Verifica se o Deck 44 existe e tem cartas
    if (!allDecks[44] || allDecks[44].length === 0) {
       // alert("O Deck de Descarte está vazio ou não existe!");
       mostrarToast("O Deck de Descarte está vazio ou não existe!", "warning");

        return;
    }

     // Cria o popup para exibir as cartas
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    popup.style.display = 'flex';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.zIndex = '9999';

    // Cria o contêiner para as cartas do Deck
    const cardContainer = document.createElement('div');
    cardContainer.style.display = 'grid';
    cardContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';  // Duas colunas
    cardContainer.style.gap = '5px';  // Reduz o espaçamento entre as cartas
    cardContainer.style.backgroundColor = '#fff';
    cardContainer.style.padding = '20px';
    cardContainer.style.borderRadius = '10px';
    cardContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    cardContainer.style.maxHeight = '70%';  // Limita a altura do container
    cardContainer.style.maxWidth = '400px'; // Limita a largura do container
    cardContainer.style.width = '100%';  // Usa 100% da largura disponível
    cardContainer.style.height = 'auto'; // Ajusta a altura automaticamente
    cardContainer.style.overflowY = 'auto';

    // Adiciona as cartas do Deck 44 ao popup
    allDecks[44].forEach(cardData => {
        const cardElement = document.createElement('div');
        cardElement.style.marginBottom = '10px';

        const cardImage = document.createElement('img');
        cardImage.src = cardData.src;
        cardImage.classList.add('card-thumbnail');
        cardImage.style.width = '80%'; // Ajuste conforme necessário o tamanho da imagem
        cardImage.style.height = 'auto'; // Mantém a proporção da imagem

        // Ao clicar na carta, ela é colocada de volta na mesa no deck original
        cardImage.addEventListener('click', () => {
            // Coloca a carta de volta na mesa no deck original
            placeCardOnTable(cardData.originalDeck, cardData.src); 

            // Remove a carta do Deck 44
            allDecks[44] = allDecks[44].filter(card => card.src !== cardData.src);

            // Remove a carta do popup
            cardElement.remove();

            // Se não houver mais cartas no popup, fecha o popup
            if (cardContainer.children.length === 0) {
                popup.remove(); // Fecha o popup
            }
        });

        cardElement.appendChild(cardImage);
        cardContainer.appendChild(cardElement);
    });

    // Adiciona o contêiner ao popup
    popup.appendChild(cardContainer);

    // Adiciona o popup à página
    document.body.appendChild(popup);

    // Fecha o popup se clicar fora do contêiner
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.remove(); // Fecha o popup
        }
    });
}



























// Função para embaralhar um array (mantida do código original)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}





// --------------------------------------------------------------------------------------------------------//







function reshuffleDeck(deckNumber) {
    const confirmReshuffle = confirm(`Tem certeza de que deseja reembaralhar o Deck ${deckNumber} e recolher as cartas da mesa?`);
    if (!confirmReshuffle) return;

    const tableArea = document.getElementById('table-area');
    const cards = tableArea.querySelectorAll(`img[data-deck="${deckNumber}"]`);

    if (cards.length === 0) {
       // alert(`Nenhuma carta do Deck ${deckNumber} foi encontrada na mesa.`);
        mostrarToast("Nenhuma carta deste Deck foi encontrada na mesa!", "warning");
        return;
    }

    const removedCards = [];

    // Processa as cartas na mesa
    cards.forEach(card => {
        removedCards.push(card.dataset.originalSrc || card.src); // Adiciona ao array
        card.remove(); // Remove a carta da mesa
    });

    // Atualiza o deck com as cartas recolhidas
    allDecks[deckNumber] = allDecks[deckNumber] || [];
    allDecks[deckNumber].push(...removedCards);

    // Embaralha o deck atualizado
    shuffle(allDecks[deckNumber]);

    // Exibe um alerta com o resultado
  //  alert(`
    //    Deck ${deckNumber} reembaralhado!
  //      Cartas recolhidas da mesa: ${removedCards.length > 0 ? removedCards.join(', ') : 'Nenhuma'}.
  //  `);
}




//------------------------------------------------------------------------------------------------------





function clearLongPressTimeout() {
   // clearTimeout(longPressTimeout); // Cancela o timeout do clique longo
   // isLongPress = false; // Reseta a flag
}

function handleCardMovement(e) {
    const card = e.currentTarget;

    if (e.type === "touchmove") {
        const touch = e.touches[0];
        if (touch) {
            const movedX = Math.abs(touch.clientX - initialPosition.x);
            const movedY = Math.abs(touch.clientY - initialPosition.y);

            if (movedX > 2 || movedY > 2) { // Limite de movimento
                isMoved = true;
                clearLongPressTimeout(); // Cancela o clique longo ao detectar movimento
            }
        }
    } else if (e.type === "mousemove") {
        const cardRect = card.getBoundingClientRect();
        if (Math.abs(cardRect.left - initialPosition.x) > 2 || Math.abs(cardRect.top - initialPosition.y) > 2) {
            isMoved = true;
            clearLongPressTimeout(); // Cancela o clique longo ao detectar movimento
        }
    }
}


//---------------------------------------------------------------------------

// Função auxiliar para mover a img no popupzoom com o mouse!
let isDraggingScroll = false;



function enableDragToScroll(container) {
    let isScrolling = false;
    let startX, startY, scrollLeft, scrollTop;

    container.addEventListener('mousedown', (e) => {
        const target = e.target;
        const tag = target.tagName.toLowerCase();

        if (tag === 'img' || target === container) {
            isScrolling = true;
            isDraggingScroll = true; // 🚩 Ativa a flag
            startX = e.pageX - container.offsetLeft;
            startY = e.pageY - container.offsetTop;
            scrollLeft = container.scrollLeft;
            scrollTop = container.scrollTop;
            e.preventDefault();
        }
    });

    container.addEventListener('mousemove', (e) => {
        if (!isScrolling) return;
        const x = e.pageX - container.offsetLeft;
        const y = e.pageY - container.offsetTop;
        const walkX = x - startX;
        const walkY = y - startY;
        container.scrollLeft = scrollLeft - walkX;
        container.scrollTop = scrollTop - walkY;
    });

    container.addEventListener('mouseup', () => {
        isScrolling = false;
        isDraggingScroll = false; // 🚩 Desativa a flag
    });

    container.addEventListener('mouseleave', () => {
        isScrolling = false;
        isDraggingScroll = false; // 🚩 Desativa a flag
    });
}












function openPopupZoom(card, options = {}) {
    deselectCard();
    const originalRotation = parseInt(card.getAttribute('data-rotation')) || 0;
    const popupId = options.restoredPopupId || `popup-zoom-${Date.now()}`;
    const popup = document.createElement('div');
    popup.classList.add('popup-zoom');
    popup.id = popupId;

    // 🔥 NOVA LÓGICA DE MÚLTIPLAS PÁGINAS
    const loadAllPages = options.loadAllPages || false;
    popup.dataset.loadAllPages = loadAllPages ? 'true' : 'false'; // Salva para o dock/saves
    let sequenceImages = []; // Array para guardar todas as imagens carregadas
    let currentScrollIndex = 0; // Para os botões "Avançar/Voltar"


   
   


    // 🔄 Função que atualiza o número da página no campo
    function updatePageNumberInput() {
        const match = currentSrc.match(/card(\d+)(back)?\.jpeg$/);
        if (match) {
            const num = parseInt(match[1]);
            const isBack = !!match[2];
            const pageNumber = (num * 2) - (isBack ? 0 : 1);
            goToInput.value = pageNumber;
        }
    }


    popup.style.position = isMobile ? 'fixed' : 'absolute';
    popup.style.left = options.left || (isMobile ? '5%' : '200px');
    popup.style.top = options.top || (isMobile ? '5%' : '200px');
    popup.style.width = options.width || (isMobile ? '400px' : '400px');
popup.style.height = options.height || (isMobile ? '600px' : '600px');

    popup.style.backgroundColor = 'black';
   // popup.style.border = '2px solid gold';
   const borderColor = options.color || generateColorFromId(popupId);
popup.style.border = `3px solid ${borderColor}`;
popup.dataset.borderColor = borderColor; // ⬅️ Salva a cor diretamente no popup


   
    popup.style.borderRadius = '10px';
    popup.style.padding = '10px';
    popup.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
    popup.style.maxWidth = '90%';
    popup.style.maxHeight = '90%';
    popup.style.display = 'flex';
    popup.style.height = options.height || (isMobile ? '600px' : '600px');
popup.style.maxHeight = 'none';
popup.style.flex = '0 0 auto';

    
    popup.style.flexDirection = 'column';
    //popup.style.overflow = 'hidden';
    popup.style.overflow = 'auto';


    if (options.zIndex) {
        popup.style.zIndex = options.zIndex;
        topPopupZIndex = Math.max(topPopupZIndex, parseInt(options.zIndex) || 1000);
    } else {
        popup.style.zIndex = ++topPopupZIndex;
    }

    popup.addEventListener('mousedown', () => bringPopupToFront(popup));
    popup.addEventListener('touchstart', () => bringPopupToFront(popup));

    if (!isMobile) popup.style.cursor = 'move';

let imgWidth = options.imgWidth ? parseFloat(options.imgWidth) : 400;

// ✅ Esta linha abaixo é a nova correta:
// Ajuste definitivo para restaurar a rotação
let rotation = 0;
if (options.rotation !== undefined) {
    rotation = parseInt(options.rotation);
} else if (card.getAttribute('data-rotation') !== null) {
    rotation = parseInt(card.getAttribute('data-rotation')) || 0;
}


    let currentSrc = card.getAttribute('data-original-src');




    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    imgContainer.style.overflow = 'auto';
    imgContainer.style.position = 'relative';
    imgContainer.style.height = 'calc(100% - 60px)';
    imgContainer.style.flex = '1 1 auto';
    enableDragToScroll(imgContainer);

    // 🔥 EMBRULHO PARA EMPILHAR AS PÁGINAS
    const imgWrapper = document.createElement('div');
    imgWrapper.style.display = 'flex';
    imgWrapper.style.flexDirection = 'column';
    imgWrapper.style.alignItems = 'center';
    imgWrapper.style.gap = '10px'; // Espaço entre as páginas
    imgContainer.appendChild(imgWrapper);

    const img = document.createElement('img');
    // ... [MANTENHA O SEU CÓDIGO QUE DEFINE img.src E img.onload] ...



if (card.getAttribute('data-flipped') === 'true') {
    if (!currentSrc.includes('back.jpeg')) {
        img.src = currentSrc.replace('.jpeg', 'back.jpeg');
    } else {
        img.src = currentSrc;
    }
} else {
    img.src = currentSrc;
}

       // Configurações básicas da imagem (src, tamanho, estilos)
img.setAttribute('data-original-src', currentSrc);
img.setAttribute('data-flipped', card.getAttribute('data-flipped'));
img.style.height = 'auto';
img.style.width = imgWidth + 'px';
img.style.maxWidth = 'unset';
img.style.maxHeight = 'unset';
img.style.objectFit = 'contain';

// Define o src para disparar o carregamento
img.onload = () => {
    // Desliga transição para aplicar rotação inicial sem animação
    img.style.transition = 'none';

    if (options.rotation !== undefined) {
        rotation = parseInt(options.rotation);
    } else if (card.getAttribute('data-rotation') !== null) {
        rotation = parseInt(card.getAttribute('data-rotation')) || 0;
    } else {
        rotation = 0;
    }

    img.style.transform = `rotate(${rotation}deg)`;
    img.setAttribute('data-rotation', rotation);

    updateTransform();

    // Reativa transição depois de um breve tempo
    setTimeout(() => {
        img.style.transition = 'all 0.3s ease';
    }, 50);
};



  function updateTransform() {
    let maxVisibleWidth = imgWidth;

    sequenceImages.forEach(currentImg => {
        const naturalW = currentImg.naturalWidth || 1;
        const naturalH = currentImg.naturalHeight || 1;
        const aspect = naturalH / naturalW;
        const renderedHeight = imgWidth * aspect;
        
        currentImg.style.width = imgWidth + 'px';
        currentImg.style.transform = `rotate(${rotation}deg)`;
        currentImg.style.transition = 'transform 0.3s ease, width 0.3s ease, margin 0.3s ease';

        const normalizedRotation = ((rotation % 360) + 360) % 360;
        const isHorizontal = (normalizedRotation === 90 || normalizedRotation === 270);

        // 1. CALCULAR LARGURA E ALTURA VISUAIS (PÓS-GIRAR)
        const visualHeight = isHorizontal ? imgWidth : renderedHeight;
        const visualWidth = isHorizontal ? renderedHeight : imgWidth;

        // Atualiza qual a maior largura que o container precisa ter
        if (visualWidth > maxVisibleWidth) {
            maxVisibleWidth = visualWidth;
        }

        // 2. COMPENSAÇÃO DE ESPAÇO VERTICAL (PARA NÃO SOBREPOR)
        const diffY = visualHeight - renderedHeight;
        const basePadding = Math.max(10, Math.round(imgWidth * 0.18));
        const margemVerticalBase = loadAllPages ? 2 : basePadding;

        // 3. COMPENSAÇÃO DE ESPAÇO HORIZONTAL (PARA NÃO SUMIR NAS PONTAS)
        // Se a imagem deitada for maior que a largura padrão, empurramos a margem
        const diffX = isHorizontal ? (renderedHeight - imgWidth) / 2 : 0;

        currentImg.style.marginTop = margemVerticalBase + 'px';
        currentImg.style.marginBottom = (margemVerticalBase + diffY) + 'px';
        
        // Aplicamos o diffX nas margens laterais para o scroll "enxergar" as pontas
        currentImg.style.marginLeft = (basePadding + diffX) + 'px';
        currentImg.style.marginRight = (basePadding + diffX) + 'px';
        
        currentImg.style.transformOrigin = 'center center';
    });

    // 4. AJUSTE DO CONTAINER PAI
    // Forçamos o Wrapper a ter no mínimo a largura da maior imagem deitada
    if (imgWrapper) {
        imgWrapper.style.minWidth = (maxVisibleWidth + 100) + 'px'; 
    }
}

    
    
      function adjustPopupSizeForRotation() {
}
//função desativada para testes
  function adjustPopupSizeForRotation2() {
    const isRotated = rotation % 180 !== 0;
    const currentWidth = popup.offsetWidth;
    const currentHeight = popup.offsetHeight;

    if (isRotated) {
        // Trocar largura e altura do popup
        popup.style.width = `${currentHeight}px`;
        popup.style.height = `${currentWidth}px`;

        // Ajustar imgContainer para caber essa nova proporção
        imgContainer.style.width = '100%';
        imgContainer.style.height = `calc(100% - 60px)`; // mantém espaço para botões
    } else {
        // Voltar ao tamanho normal
        popup.style.width = `${currentWidth}px`;
        popup.style.height = `${currentHeight}px`;

        imgContainer.style.width = '100%';
        imgContainer.style.height = `calc(100% - 60px)`;
    }
}



    
  function rotateImage() {
    rotation = (rotation + 90); // 🔥 remove o % 360
    img.style.transform = `rotate(${rotation}deg)`;
  //  img.style.transformOrigin = 'center center';

    
   // card.setAttribute('data-rotation', rotation); // salva rotação acumulada
img.setAttribute('data-rotation', rotation);  // ✅ salva no img
   
       updateTransform();             // <-- chama aqui para recalcular paddings/margens

    adjustPopupSizeForRotation(); // 🔥 ajuste no popup ao girar

}



    
    
    
    

    function zoomIn() {
        imgWidth *= 1.05;
        updateTransform();
    }

    function zoomOut() {
        imgWidth /= 1.05;
        updateTransform();
    }






function virarImagem() {
     if (loadAllPages) { 
    // alert('No modo de leitura contínua, basta rolar para baixo para ver os versos ou próximas páginas.');
             mostrarToast("No modo de leitura contínua, basta rolar para baixo para ver os versos ou próximas páginas!", "warning");

      return; 
      }

    const isBack = img.src.includes('back');

    if (isBack) {
        // Se estiver no verso, volta para frente
        currentSrc = currentSrc.replace('back.jpeg', '.jpeg');
    } else {
        // Se estiver na frente, vai para verso
        currentSrc = currentSrc.replace('.jpeg', 'back.jpeg');
    }

    loadImageWithOverlay(currentSrc);

    // Atualiza atributo para controle visual
    img.setAttribute('data-flipped', isBack ? 'false' : 'true');

    // Atualiza também o atributo original da img e do card pra manter sincronizado
    img.setAttribute('data-original-src', currentSrc);
    card.setAttribute('data-original-src', currentSrc);

    updatePageNumberInput(); // Se quiser atualizar o campo de página
}



    function nextImage() {
         if (loadAllPages) {
              if (currentScrollIndex < sequenceImages.length - 1) { 
              currentScrollIndex++;
               sequenceImages[currentScrollIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
                } 
                } else {
        const matchFront = currentSrc.match(/card(\d+)\.jpeg$/);
        const matchBack = currentSrc.match(/card(\d+)back\.jpeg$/);
        let newSrc = null;

        if (matchFront) {
            newSrc = currentSrc.replace(`card${matchFront[1]}.jpeg`, `card${matchFront[1]}back.jpeg`);
        } else if (matchBack) {
            const nextNum = parseInt(matchBack[1]) + 1;
            newSrc = currentSrc.replace(`card${matchBack[1]}back.jpeg`, `card${nextNum}.jpeg`);
        }

        if (newSrc) {
            checkImageExists(newSrc, (exists) => {
                if (exists) {
                    currentSrc = newSrc;
                    img.setAttribute('data-original-src', currentSrc);
                    loadImageWithOverlay(newSrc);
                        updatePageNumberInput(); // <- Atualiza o campo numérico

                    
                } else {
                   // alert('Não há mais imagens à frente.');
                      mostrarToast("Não há mais imagens à frente!", "warning");
                }
            });
        }
    }
    }
    
    

    function previousImage() {
         if (loadAllPages) {
              if (currentScrollIndex > 0) {
                   currentScrollIndex--; sequenceImages[currentScrollIndex].scrollIntoView({ behavior: 'smooth', block: 'start' }); 
                   } 
                   } else {
        const matchFront = currentSrc.match(/card(\d+)\.jpeg$/);
        const matchBack = currentSrc.match(/card(\d+)back\.jpeg$/);
        let newSrc = null;

        if (matchBack) {
            newSrc = currentSrc.replace(`card${matchBack[1]}back.jpeg`, `card${matchBack[1]}.jpeg`);
        } else if (matchFront) {
            const currentNum = parseInt(matchFront[1]);
            if (currentNum === 1) {
              //  alert('Já está na primeira imagem.');
                  mostrarToast("Já está na primeira imagem!", "warning");
                return;
            }
            const prevNum = currentNum - 1;
            newSrc = currentSrc.replace(`card${matchFront[1]}.jpeg`, `card${prevNum}back.jpeg`);
        }

        if (newSrc) {
            checkImageExists(newSrc, (exists) => {
                if (exists) {
                    currentSrc = newSrc;
                    img.setAttribute('data-original-src', currentSrc);
                    loadImageWithOverlay(newSrc);
                    updatePageNumberInput(); // <- Atualiza o campo numérico

                    
                } else {
                   // alert('Não há mais imagens atrás.');
                      mostrarToast("Não há mais imagens atrás!", "warning");
                }
            });
        }
    }
}
                   
                   
                   
    const loadingOverlay = document.createElement('div');
    loadingOverlay.innerText = 'Carregando...';
    Object.assign(loadingOverlay.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        zIndex: '1000'
    });

    function showLoading() {
        loadingOverlay.style.display = 'flex';
    }

    function hideLoading() {
        loadingOverlay.style.display = 'none';
    }

    function checkImageExists(src, callback) {
        const tester = new Image();
        tester.onload = () => callback(true);
        tester.onerror = () => callback(false);
        tester.src = src;
    }

    function loadImageWithOverlay(newSrc) {
        showLoading();
        const tempImg = new Image();
        tempImg.onload = () => {
            img.src = newSrc;
            hideLoading();
        };
        tempImg.onerror = () => {
            hideLoading();
          //  alert("Erro ao carregar imagem: " + newSrc);
                   mostrarToast("Erro ao carregar a imagem!", "warning");

        };
        tempImg.src = newSrc + '?v=' + Date.now();
    }

    const btnContainer = document.createElement('div');
    btnContainer.style.display = 'flex';
    btnContainer.style.flexWrap = 'wrap';
    btnContainer.style.justifyContent = 'center';
    btnContainer.style.gap = '6px';
    btnContainer.style.marginTop = '10px';
    btnContainer.style.flex = '0 0 auto'; // garante fixo
btnContainer.style.background = '#111'; // opcional, destaca fundo
btnContainer.style.padding = '5px'; // opcional


    const popupHeader = document.createElement('div');
    popupHeader.innerText = '↔ Redimensionar';
    popupHeader.style.background = '#222';
    popupHeader.style.color = 'gold';
    popupHeader.style.padding = '5px 10px';
    popupHeader.style.cursor = 'se-resize';
    popupHeader.style.fontWeight = 'bold';
    popupHeader.style.userSelect = 'none';
    popupHeader.style.borderTop = '1px solid gold';
    popupHeader.style.textAlign = 'right';
    popupHeader.style.flexShrink = '0';


   


    const buttons = [
        { text: 'Zoom +', action: zoomIn },
        { text: 'Zoom -', action: zoomOut },
        { text: '⬅️', action: previousImage },
        { text: '➡️', action: nextImage },
        { text: '↔️ Verso', action: virarImagem },
        { text: '⟳ Girar', action: rotateImage }, // <-- adicionado
        { text: '❌', action: () => {
    popup.remove();
    card.setAttribute('data-rotation', originalRotation);
    console.log('🔄 Rotação restaurada na carta:', originalRotation);
}}
    ];

    buttons.forEach(({ text, action }) => {
        const btn = document.createElement('button');
        btn.innerText = text;
        btn.style.padding = '4px 10px';
        btn.style.cursor = 'pointer';
        btn.style.backgroundColor = '#444';
        btn.style.color = 'white';
        btn.style.border = 'none';
        btn.style.borderRadius = '4px';
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            action();
        });
        btnContainer.appendChild(btn);
    });

    // Campo "Ir para imagem"
    const goToContainer = document.createElement('div');
    goToContainer.style.display = 'flex';
    goToContainer.style.alignItems = 'center';
    goToContainer.style.gap = '6px';

    const goToLabel = document.createElement('label');
    goToLabel.textContent = 'Ir para imagem:';
    goToLabel.style.color = 'white';
    goToLabel.style.fontSize = '14px';

   // ⬇️ Campo numérico Page X
const goToInput = document.createElement('input');
goToInput.type = 'number';
goToInput.placeholder = 'Page';
goToInput.name = 'go-to-page'; // ✅ Necessário
goToInput.id = `go-to-page-${Date.now()}`; // ✅ Para acessibilidade
console.log('✅ Input criado com:', goToInput);


goToInput.style.width = '60px';
goToInput.style.marginTop = '5px';
goToInput.style.display = 'block';
goToInput.style.margin = '5px auto';

let valor = parseInt(options.pageNumber);
goToInput.value = (valor > 0) ? valor : 1;


//popup.appendChild(goToInput);


    const goToBtn = document.createElement('button');
    goToBtn.textContent = 'Ir';
    goToBtn.style.padding = '4px 10px';
    goToBtn.style.cursor = 'pointer';
    goToBtn.style.backgroundColor = '#444';
    goToBtn.style.color = 'white';
    goToBtn.style.border = 'none';
    goToBtn.style.borderRadius = '4px';

    goToBtn.addEventListener('click', () => {
        const num = parseInt(goToInput.value);
        if (!isNaN(num) && num > 0) {
            goToImage(num);
        }
    });

    goToInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            goToBtn.click();
        }
    });



    function goToImage(num) {
        if (loadAllPages) {
            // No modo de páginas empilhadas, apenas rola até a imagem correspondente
            const targetIndex = num - 1; // Página 1 = índice 0
            if (targetIndex >= 0 && targetIndex < sequenceImages.length) {
                sequenceImages[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
             //   alert("Aguarde a página carregar ou insira um número válido.");
               mostrarToast("Aguarde a página carregar ou insira um número válido!", "warning");

            }
        } else {
            // Modo original: troca a fonte da imagem única
            const matchDeck = currentSrc.match(/deck(\d+)\//);
            const deckNum = matchDeck ? matchDeck[1] : 1;
            const cardNum = Math.ceil(num / 2);
            const isBack = num % 2 === 0;
            const newSrc = `deck${deckNum}/card${cardNum}${isBack ? 'back' : ''}.jpeg`;

            checkImageExists(newSrc, (exists) => {
                if (exists) {
                    currentSrc = newSrc;
                    img.setAttribute('data-original-src', currentSrc);
                    loadImageWithOverlay(newSrc);
                } else {
                   // alert(`Imagem não encontrada.`);
                                   mostrarToast("Imagem não encontrada!", "warning");

                }
            });
        }
    }
    goToContainer.appendChild(goToLabel);
    goToContainer.appendChild(goToInput);
    goToContainer.appendChild(goToBtn);
    btnContainer.appendChild(goToContainer);

    imgWrapper.appendChild(img);
    sequenceImages.push(img); // Adiciona à nossa lista de controle
    
    
    
    
    
    
    
    
    
    imgContainer.appendChild(loadingOverlay);
    





// --- GRAVADOR DE MEMÓRIA DE SCROLL ---
    // Anota a posição continuamente. Se o popup for minimizado e "zerar", 
    // teremos o backup exato de onde a leitura parou salvo no dataset do popup.
    if (imgContainer) {
        imgContainer.addEventListener('scroll', () => {
            popup.setAttribute('data-memoria-top', imgContainer.scrollTop);
            popup.setAttribute('data-memoria-left', imgContainer.scrollLeft);
        });
    }
    popup.addEventListener('scroll', () => {
        popup.setAttribute('data-memoria-top', popup.scrollTop);
        popup.setAttribute('data-memoria-left', popup.scrollLeft);
    });
    // -------------------------------------

    
// Aplica scrollLeft e scrollTop se fornecidos
// --- NOVO BLOCO DE RESTAURAÇÃO DE SCROLL (NO FINAL DA openPopupZoom) ---
    if (options.scrollTop > 0) {
        let tentativas = 0;
        const scrollDestino = parseInt(options.scrollTop);
        const scrollL = parseInt(options.scrollLeft || 0);

        const radarScroll = setInterval(() => {
            if (imgContainer) {
                // 👇 APLICA O SCROLL EM AMBOS OS LOCAIS AO MESMO TEMPO
                imgContainer.scrollTop = scrollDestino;
                imgContainer.scrollLeft = scrollL;
                popup.scrollTop = scrollDestino;
                popup.scrollLeft = scrollL;

                // Lê qual dos dois aplicou o scroll
                const atualScroll = Math.max(imgContainer.scrollTop, popup.scrollTop);

                // VERIFICAÇÃO: Se chegou perto do destino ou já tentou por 10s
                if (Math.abs(atualScroll - scrollDestino) < 5 || tentativas > 50) {
                    console.log("[Scroll] Página restaurada com sucesso.");
                    clearInterval(radarScroll);
                }
            }
            tentativas++;
        }, 200); 
    }
    // ------------------------------------------
    
    
    popup.appendChild(imgContainer);
    popup.appendChild(btnContainer);
    popup.appendChild(popupHeader);
    
    // 🔥 MOTOR DE CARREGAMENTO CONTÍNUO
    if (loadAllPages) {
        function fetchNextPage(currentSrcToCheck) {
            const matchFront = currentSrcToCheck.match(/card(\d+)\.jpeg$/);
            const matchBack = currentSrcToCheck.match(/card(\d+)back\.jpeg$/);
            let nextFront = null, nextBack = null;

            if (matchFront) {
                // Se é frente, a próxima pode ser o verso, e depois a próxima frente
                nextBack = currentSrcToCheck.replace(`card${matchFront[1]}.jpeg`, `card${matchFront[1]}back.jpeg`);
                nextFront = currentSrcToCheck.replace(`card${matchFront[1]}.jpeg`, `card${parseInt(matchFront[1]) + 1}.jpeg`);
            } else if (matchBack) {
                // Se é verso, a próxima só pode ser a frente do próximo número
                nextFront = currentSrcToCheck.replace(`card${matchBack[1]}back.jpeg`, `card${parseInt(matchBack[1]) + 1}.jpeg`);
            }

            const tryLoad = (src, fallbackSrc) => {
                checkImageExists(src, (exists) => {
                    if (exists) {
                        appendNewPage(src);
                        fetchNextPage(src); // Achou! Continua procurando a próxima
                    } else if (fallbackSrc) {
                        tryLoad(fallbackSrc, null); // Se não achou verso, tenta a próxima página frente
                    }
                });
            };

            if (matchFront) tryLoad(nextBack, nextFront);
            else if (matchBack) tryLoad(nextFront, null);
        }

        function appendNewPage(src) {
            const newImg = document.createElement('img');
            newImg.src = src;
            newImg.setAttribute('data-original-src', src);
            newImg.setAttribute('data-flipped', src.includes('back') ? 'true' : 'false');
            newImg.style.height = 'auto';
            newImg.style.width = imgWidth + 'px';
            newImg.style.maxWidth = 'unset';
            newImg.style.maxHeight = 'unset';
            newImg.style.objectFit = 'contain';
            newImg.style.transition = 'none';

            newImg.onload = () => {
                updateTransform(); // Garante que a nova página nasça com o mesmo zoom/rotação
                setTimeout(() => { newImg.style.transition = 'all 0.3s ease'; }, 50);
            };

            imgWrapper.appendChild(newImg);
            sequenceImages.push(newImg); // Registra no array para aplicar transformações
        }

        // Dá a partida na busca a partir da imagem original que abriu o popup
        fetchNextPage(currentSrc);
    }
    
    document.body.appendChild(popup);
    
    
    popup.addEventListener('remove', () => {
    card.setAttribute('data-rotation', originalRotation);
    console.log('🔄 Rotação restaurada após remoção do popup:', originalRotation);
});

    
    // 🔥 Habilita minimizar/restaurar com duplo clique ou toque duplo
enableMinimizeOnDoubleClick(popup);

    

    bringPopupToFront(popup);

    // 🔄 Drag com mouse e touch + redimensionamento
    let isDragging = false;
    let offsetX = 0, offsetY = 0;
    let isResizing = false;
    let resizeStartX, resizeStartY, startWidth, startHeight;

    popupHeader.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizeStartX = e.clientX;
        resizeStartY = e.clientY;
        startWidth = popup.offsetWidth;
        startHeight = popup.offsetHeight;
        document.body.style.cursor = 'se-resize';
        e.stopPropagation();
    });
    
    
   // Redimensionamento por toque (mobile)
popupHeader.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    isResizing = true;
    resizeStartX = touch.clientX;
    resizeStartY = touch.clientY;
    startWidth = popup.offsetWidth;
    startHeight = popup.offsetHeight;
    document.body.style.cursor = 'se-resize';
    e.preventDefault();
}, { passive: false });

document.addEventListener('touchmove', (e) => {
    if (!isResizing || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const newWidth = startWidth + (touch.clientX - resizeStartX);
    const newHeight = startHeight + (touch.clientY - resizeStartY);
    popup.style.width = `${Math.max(250, newWidth)}px`;
    popup.style.height = `${Math.max(250, newHeight)}px`;
    e.preventDefault();
}, { passive: false });

document.addEventListener('touchend', () => {
    if (isResizing) {
        isResizing = false;
        document.body.style.cursor = 'default';
    }
});
 
    
    
    
    
    
    

    popup.addEventListener('mousedown', (e) => {
    if (isDraggingScroll) return; // 🚫 bloqueia drag do popup se scroll ativo

    const tag = e.target.tagName.toLowerCase();
    if (['input', 'textarea', 'button', 'select', 'label'].includes(tag)) return;

    if (!isResizing) {
        isDragging = true;
        offsetX = e.clientX - popup.offsetLeft;
        offsetY = e.clientY - popup.offsetTop;
        popup.style.cursor = 'grabbing';
        e.preventDefault();
    }
});






// Função auxiliar para verificar a borda
 const checkEdgeAndMinimize = (popup) => {
    // Pegamos as dimensões REAIS atuais do elemento após qualquer redimensionamento
    const width = popup.offsetWidth;
    const height = popup.offsetHeight;
    
    // Pegamos a posição atual
    const rect = popup.getBoundingClientRect();

    // Definimos a zona de gatilho (ex: quando 30% do popup encostar na borda)
    // Isso garante que se o popup estiver grande, ele minimize cedo,
    // e se estiver pequeno, ele minimize um pouco mais tarde.
    const triggerW = width * 0.3;
    const triggerH = height * 0.3;

    const isAtEdge = (
        rect.right < triggerW ||                 // Borda esquerda
        rect.left > (window.innerWidth - triggerW) || // Borda direita
        rect.bottom < triggerH ||                // Borda superior
        rect.top > (window.innerHeight - triggerH)    // Borda inferior
    );

    if (isAtEdge) {
        toggleMinimizePopup(popup);
    }
};


   // --- CORREÇÃO DO BLOQUEIO DE RESIZE ---

// Removemos a dependência apenas do popup e usamos o document para garantir 
// que, ao soltar o mouse em qualquer lugar, o redimensionamento pare.
document.addEventListener('mouseup', () => {
    if (isResizing) {
        isResizing = false;
        // Restaura o cursor para o padrão
        document.body.style.cursor = 'default';
        console.log("Resize finalizado com segurança.");
    }
    
    if (isDragging) {
        isDragging = false;
        // Chama a checagem de borda que criamos
        checkEdgeAndMinimize(popup);
    }
});

// Importante: garantir que o touch também limpe o estado
document.addEventListener('touchend', () => {
    if (isResizing) {
        isResizing = false;
    }
    if (isDragging) {
        isDragging = false;
        checkEdgeAndMinimize(popup);
    }
});



    document.addEventListener('mousemove', (e) => {
        if (isResizing) {
            const newWidth = startWidth + (e.clientX - resizeStartX);
            const newHeight = startHeight + (e.clientY - resizeStartY);
            popup.style.width = `${Math.max(250, newWidth)}px`;
            popup.style.height = `${Math.max(250, newHeight)}px`;
        } else if (isDragging) {
            popup.style.left = `${e.clientX - offsetX}px`;
            popup.style.top = `${e.clientY - offsetY}px`;
        }
    });

    

   // 🔄 Drag touch (ajustado para permitir scroll em img/imgContainer)
popup.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        const touch = e.touches[0];

        // 🚫 Impede iniciar drag se tocando em imagem ou container
        const target = e.target;
        const tag = target.tagName.toLowerCase();
        if (tag === 'img' || target === imgContainer) return;

        // ⛔ Impede iniciar arraste se estiver redimensionando
        if (isResizing) return;

        isDragging = true;
        offsetX = touch.clientX - popup.offsetLeft;
        offsetY = touch.clientY - popup.offsetTop;
    }
}, { passive: false });
    
    

    document.addEventListener('touchmove', (e) => {
        if (isDragging && e.touches.length === 1) {
            const touch = e.touches[0];
            popup.style.left = `${touch.clientX - offsetX}px`;
            popup.style.top = `${touch.clientY - offsetY}px`;
            e.preventDefault();
        }
    }, { passive: false });

   

// ✅ ADICIONE AQUI:
// ✅ Corrigido: Só foca na mesa sem alterar a carta selecionada
if (card && card.classList.contains('card')) {
  const mesa = document.getElementById('table-area');
  if (mesa) {
    mesa.setAttribute('tabindex', '0');
    
// ✅ preventScroll: true impede que a tela pule e esconda os botões no celular!
            setTimeout(() => mesa.focus({ preventScroll: true }), 100);
  }
}

} // ← esta é a chave final da função openPopupZoom(card)




//________________________________________________________________________________

// função que cria um popup com area de texto editavel
// função que cria um popup com area de texto editavel
function openPopupNote() {
    //const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (typeof deselectCard === 'function') deselectCard(); // Deseleciona carta selecionada anteriormente na mesa caso haja

    const popupId = `popup-note-${Date.now()}`;
    const popup = document.createElement('div');
    popup.classList.add('popup-note');
    popup.id = popupId;

    //position: absolute. Isso faz com que ele seja posicionado relativo ao container pai mais próximo que não seja estático
    popup.style.position = 'absolute'; // FIXED Ela não se move mais com o uso das barras de rolagem da pagina! ABSOLUTE sim
    popup.style.left = '200px';
    popup.style.top = '200px';
    popup.style.width = '400px';
    popup.style.height = '300px';
    popup.style.backgroundColor = 'yellow';
    
    const borderColor = typeof generateColorFromId === 'function' ? generateColorFromId(popupId) : 'gold';
    popup.style.border = `3px solid ${borderColor}`;

    popup.style.borderRadius = '10px';
    popup.style.zIndex = typeof topPopupZIndex !== 'undefined' ? ++topPopupZIndex : 999999;
    popup.style.padding = '0';
    popup.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.overflow = 'hidden';

    // 🔸 Barra superior (header) para arrastar e fechar
    const header = document.createElement('div');
    header.textContent = 'Nota';
    header.style.backgroundColor = 'gold';
    header.style.color = 'black';
    header.style.padding = '4px 8px';
    header.style.cursor = 'move';
    header.style.fontWeight = 'bold';
    header.style.borderRadius = '8px 8px 0 0';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.position = 'sticky';
    header.style.top = '0';
    header.style.zIndex = '10';

    const closeButton = document.createElement('button');
    closeButton.textContent = '❌';
    Object.assign(closeButton.style, {
        background: 'red',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        fontWeight: 'bold',
        fontSize: '12px',
    });
    
    // 🔥 Remove a nota E o marcador associado a ela se existir
 // 🔥 Remove a nota E o marcador associado a ela se existir com segurança
    const fecharNotaTotalmente = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        // Adiciona a caixa de confirmação antes de apagar
        if (confirm("Deseja realmente apagar esta nota?")) {
            popup.remove();
            if (popup.associatedMarker) popup.associatedMarker.remove();
        }
    };
    
    closeButton.addEventListener('click', fecharNotaTotalmente);
    closeButton.addEventListener('touchstart', fecharNotaTotalmente, { passive: false });

    header.appendChild(closeButton);

    // 🔸 Área de texto (editável)
    const textarea = document.createElement('div');
    textarea.contentEditable = 'true';
    textarea.style.flexGrow = '1';
    textarea.style.backgroundColor = 'yellow';
    textarea.style.color = 'black';
    textarea.style.border = 'none';
    textarea.style.outline = 'none';
    textarea.style.width = '100%';
    textarea.style.height = '100%';
    textarea.style.fontSize = '16px';
    textarea.style.padding = '8px';
    textarea.style.overflow = 'auto';

    // 🔸 Handle de redimensionamento
    const resizeHandle = document.createElement('div');
    Object.assign(resizeHandle.style, {    
        width: '16px',
        height: '16px',
        background: 'gold',
        opacity: '0.6',
        border: '1px solid black',
        position: 'absolute',
        right: '2px',
        bottom: '18px',
        cursor: 'nwse-resize',
    });

    const resizeLabel = document.createElement('div');
    resizeLabel.textContent = 'Redimensionar';
    Object.assign(resizeLabel.style, {
        position: 'absolute',
        bottom: '0px',
        right: '5px',
        fontSize: '10px',
        color: 'gold',
    });

    // 🔸 Bring to front ao clicar
    popup.addEventListener('mousedown', () => { if (typeof bringPopupToFront === 'function') bringPopupToFront(popup); });
    popup.addEventListener('touchstart', () => { if (typeof bringPopupToFront === 'function') bringPopupToFront(popup); }, {passive: true});

    // 🔸 Redimensionamento
    let isResizing = false;
    let resizeStartX = 0, resizeStartY = 0;
    let startWidth = 0, startHeight = 0;

    const startResize = (e) => {
        isResizing = true;
        const clientX = e.clientX || e.touches?.[0]?.clientX;
        const clientY = e.clientY || e.touches?.[0]?.clientY;
        resizeStartX = clientX;
        resizeStartY = clientY;
        startWidth = popup.offsetWidth;
        startHeight = popup.offsetHeight;
        e.preventDefault();
        e.stopPropagation();
    };

    const doResize = (e) => {
        if (!isResizing) return;
        const clientX = e.clientX || e.touches?.[0]?.clientX;
        const clientY = e.clientY || e.touches?.[0]?.clientY;
        const dx = clientX - resizeStartX;
        const dy = clientY - resizeStartY;

        popup.style.width = Math.max(200, startWidth + dx) + 'px';
        popup.style.height = Math.max(150, startHeight + dy) + 'px';
    };

    const stopResize = () => { isResizing = false; };

    resizeHandle.addEventListener('mousedown', startResize);
    document.addEventListener('mousemove', doResize);
    document.addEventListener('mouseup', stopResize);
    resizeHandle.addEventListener('touchstart', startResize, { passive: false });
    document.addEventListener('touchmove', doResize, { passive: false });
    document.addEventListener('touchend', stopResize);

    // 🔸 Movimento (arrastar)
    let isDragging = false;
    let offsetX = 0, offsetY = 0;











   const startDrag = (e) => {
        if (typeof isPopupResizing !== 'undefined' && isPopupResizing) return;
        const clientX = e.clientX || e.touches?.[0]?.clientX;
        const clientY = e.clientY || e.touches?.[0]?.clientY;

        if (typeof bringPopupToFront === 'function') bringPopupToFront(popup);

        // --- MÁGICA 1: DESENCAIXA A ABA SE FOR ARRASTADA ---
        popup.style.transition = 'none'; // Desliga a transição para arrasto imediato
        if (popup.dataset.isDockedOpen === 'true') {
            popup.dataset.isDockedOpen = 'false';
            if (popup.associatedMarker) {
                popup.associatedMarker.style.display = 'none'; // Esconde o marcador
            }
        }
        // ----------------------------------------------------

        isDragging = true;
        offsetX = clientX - popup.offsetLeft;
        offsetY = clientY - popup.offsetTop;
        if (popup.style) popup.style.cursor = 'grabbing';
        e.preventDefault();
        e.stopPropagation();
    };

    // (MANTENHA O SEU doDrag INTACTO AQUI)
const doDrag = (e) => {
        if (!isDragging) return;
        const clientX = e.clientX || e.touches?.[0]?.clientX;
        const clientY = e.clientY || e.touches?.[0]?.clientY;
        popup.style.left = `${clientX - offsetX}px`;
        popup.style.top = `${clientY - offsetY}px`;
    };



    const stopDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        if (popup.style) popup.style.cursor = 'move';

        const rect = popup.getBoundingClientRect();
        const halfWidth = rect.width / 2;
        
        const outLeft = (rect.left + halfWidth) < 0;
        const outRight = (rect.left + halfWidth) > window.innerWidth;
        const outTop = rect.top < -10;
        const outBottom = rect.top > (window.innerHeight - 40);

        if (outLeft || outRight || outTop || outBottom) {
            // 1. Descobre e salva em qual borda a nota bateu
            let borda = '';
            if (outLeft) borda = 'left';
            else if (outRight) borda = 'right';
            else if (outTop) borda = 'top';
            else if (outBottom) borda = 'bottom';
            
            popup.dataset.dockedEdge = borda;
            popup.dataset.isDockedOpen = 'false';

            // Esconde a nota
            popup.style.display = 'none';

            // 2. Cria ou recupera o marcador
            let marcador = popup.associatedMarker;
            if (!marcador) {
                marcador = document.createElement('div');
                popup.associatedMarker = marcador; 
                marcador.textContent = '📌'; 
                Object.assign(marcador.style, {
                    position: 'fixed',
                    width: '40px', height: '40px',
                    backgroundColor: popup.style.backgroundColor || 'yellow',
                    color: '#333', fontSize: '20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    transition: 'transform 0.2s ease', userSelect: 'none',
                    zIndex: 99999,
                    borderRadius: '8px',
                    border: '2px solid rgba(0,0,0,0.2)'
                });

                marcador.onmouseenter = () => { marcador.style.transform = 'scale(1.15)'; };
                marcador.onmouseleave = () => { marcador.style.transform = 'scale(1)'; };

                // --- MÁGICA 2: LÓGICA DE DESLIZAR A ABA (GAVETA) ---
                marcador.onclick = () => {
                    const bordaAtual = popup.dataset.dockedEdge;
                    const estaAberta = popup.dataset.isDockedOpen === 'true';
                    const rectMarcador = marcador.getBoundingClientRect();
                    
                    if (estaAberta) {
                        // RECOLHER A ABA (Animação de saída)
                        popup.style.transition = 'left 0.3s ease, top 0.3s ease';
                        if (bordaAtual === 'left') popup.style.left = `-${popup.offsetWidth}px`;
                        else if (bordaAtual === 'right') popup.style.left = `${window.innerWidth}px`;
                        else if (bordaAtual === 'top') popup.style.top = `-${popup.offsetHeight}px`;
                        else if (bordaAtual === 'bottom') popup.style.top = `${window.innerHeight}px`;
                        
                        popup.dataset.isDockedOpen = 'false';
                        
                        // Oculta completamente após a animação (300ms)
                        setTimeout(() => {
                            if (popup.dataset.isDockedOpen === 'false') popup.style.display = 'none';
                        }, 300);

                    } else {
                        // ABRIR A ABA (Animação de entrada)
                        popup.style.display = 'flex';
                        if (typeof topPopupZIndex !== 'undefined') popup.style.zIndex = ++topPopupZIndex;
                        
                        // Desliga a transição e posiciona escondido do lado de fora EXATAMENTE onde está o marcador
                        popup.style.transition = 'none';
                        const w = popup.offsetWidth;
                        const h = popup.offsetHeight;
                        
                        if (bordaAtual === 'left') {
                            popup.style.left = `-${w}px`;
                            popup.style.top = `${rectMarcador.top}px`;
                        } else if (bordaAtual === 'right') {
                            popup.style.left = `${window.innerWidth}px`;
                            popup.style.top = `${rectMarcador.top}px`;
                        } else if (bordaAtual === 'top') {
                            popup.style.top = `-${h}px`;
                            popup.style.left = `${rectMarcador.left}px`;
                        } else if (bordaAtual === 'bottom') {
                            popup.style.top = `${window.innerHeight}px`;
                            popup.style.left = `${rectMarcador.left}px`;
                        }
                        
                        // Força o navegador a recalcular a posição (Reflow) antes de animar
                        void popup.offsetWidth;
                        
                        // Liga a transição e desliza a aba para encostar no marcador
                        popup.style.transition = 'left 0.3s ease, top 0.3s ease';
                        if (bordaAtual === 'left') popup.style.left = '45px';
                        else if (bordaAtual === 'right') popup.style.left = `${window.innerWidth - w - 45}px`;
                        else if (bordaAtual === 'top') popup.style.top = '45px';
                        else if (bordaAtual === 'bottom') popup.style.top = `${window.innerHeight - h - 45}px`;
                        
                        popup.dataset.isDockedOpen = 'true';
                    }
                };
                // ----------------------------------------------------
                document.body.appendChild(marcador);
            }

            // 3. Configura o visual e alinha o marcador baseado na borda de impacto
            marcador.style.display = 'flex';
            marcador.style.left = 'auto'; marcador.style.right = 'auto';
            marcador.style.top = 'auto'; marcador.style.bottom = 'auto';

            if (outLeft) {
                marcador.style.left = '0px';
                marcador.style.top = `${Math.max(10, Math.min(window.innerHeight - 50, rect.top + 40))}px`;
                marcador.style.borderRadius = '0 8px 8px 0';
            } else if (outRight) {
                marcador.style.right = '0px';
                marcador.style.top = `${Math.max(10, Math.min(window.innerHeight - 50, rect.top + 40))}px`;
                marcador.style.borderRadius = '8px 0 0 8px';
            } else if (outTop) {
                marcador.style.top = '0px';
                marcador.style.left = `${Math.max(10, Math.min(window.innerWidth - 50, rect.left + halfWidth - 20))}px`;
                marcador.style.borderRadius = '0 0 8px 8px';
            } else if (outBottom) {
                marcador.style.bottom = '0px';
                marcador.style.left = `${Math.max(10, Math.min(window.innerWidth - 50, rect.left + halfWidth - 20))}px`;
                marcador.style.borderRadius = '8px 8px 0 0';
            }
        }
    };
    
    
    
    
    

    // 🔸 Criar áreas laterais e inferior para arrastar
    const createDragHandle = (position) => {
        const handle = document.createElement('div');
        handle.style.position = 'absolute';
        handle.style.background = 'transparent';
        handle.style.cursor = 'grab';

        switch (position) {
            case 'left':
                Object.assign(handle.style, { top: '20px', left: '0', width: '8px', height: 'calc(100% - 40px)' });
                break;
            case 'right':
                Object.assign(handle.style, { top: '20px', right: '0', width: '8px', height: 'calc(100% - 40px)' });
                break;
            case 'bottom':
                Object.assign(handle.style, { bottom: '0', left: '0', width: '100%', height: '8px' });
                break;
        }
        return handle;
    };

    const dragLeft = createDragHandle('left');
    const dragRight = createDragHandle('right');
    const dragBottom = createDragHandle('bottom');

    // 🔸 Eventos de drag (header e handles)
    [header, dragLeft, dragRight, dragBottom].forEach(el => {
        el.addEventListener('mousedown', startDrag);
        el.addEventListener('touchstart', startDrag, { passive: false });
    });

    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchmove', doDrag, { passive: false });
    document.addEventListener('touchend', stopDrag);

    // 🔸 Montagem final
    popup.appendChild(header);
    popup.appendChild(textarea);
    popup.appendChild(resizeHandle);
    popup.appendChild(resizeLabel);
    popup.appendChild(dragLeft);
    popup.appendChild(dragRight);
    popup.appendChild(dragBottom);
    
    document.body.appendChild(popup);
    
    // 🔥 Habilita minimizar/restaurar com duplo clique ou toque duplo (do seu script original)
    if (typeof enableMinimizeOnDoubleClick === 'function') enableMinimizeOnDoubleClick(popup);
}










//_______________________________________________________________________________

// Embaralha as imagens de todas as cartas presentes na mesa que sejam de um mesmo deck, com opções para embaralhar, rotacionar e virar
function shuffleDeckImages() {
    if (!selectedCard) {
       // alert("Nenhuma carta selecionada!");
          mostrarToast("Nenhuma Carta Selecionada", "warning");
        return;
    }

    const deckNumber = selectedCard.getAttribute('data-deck');
    if (!deckNumber) {
       // alert("A carta selecionada não pertence a um deck!");
         mostrarToast("A Carta selecionada não pertence a um Deck!", "warning"); 
        return;
    }

    const cards = document.querySelectorAll(`.card[data-deck='${deckNumber}']`);
    if (cards.length < 2) {
       // alert("Não há cartas suficientes para executar a função.");
         mostrarToast("Não há Cartas suficientes para executar a função!", "warning");
        return;
    }

    const confirmShuffle = confirm("Você deseja embaralhar as cartas deste deck?");
    const confirmRotation = confirm("Você deseja aplicar rotação aleatória às cartas?");
    const confirmFlip = confirm("Você deseja virar as cartas aleatoriamente (frente/costas)?");

    if (!confirmShuffle && !confirmRotation && !confirmFlip) {
      //  alert("Nenhuma ação foi selecionada. As cartas permanecerão inalteradas.");
          mostrarToast("Nenhuma ação foi selecionada. As Cartas permanecerão inalteradas! ", "warning");
        return;
    }

    const cardData = Array.from(cards).map(card => ({
        element: card,
        originalSrc: card.getAttribute('data-original-src'),
        backSrc: card.getAttribute('data-back-src') || card.getAttribute('data-original-src').replace('.jpeg', 'back.jpeg'),
        isFlipped: card.getAttribute('data-flipped') === 'true',
        rotation: parseInt(card.getAttribute('data-rotation')) || 0,
    }));

    // Embaralha os dados das cartas (mantendo posições fixas)
    if (confirmShuffle) {
        for (let i = cardData.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardData[i], cardData[j]] = [cardData[j], cardData[i]];
        }
    }

    // Atualiza os atributos e o estado visual das cartas
    cardData.forEach((data, index) => {
        const card = cards[index]; // A posição física no layout é fixa

        if (confirmShuffle) {
            // Atualiza a frente e o verso da carta
            card.setAttribute('data-original-src', data.originalSrc);
            card.setAttribute('data-back-src', data.backSrc);

            // Define a imagem visível com base no estado
            const newSrc = data.isFlipped ? data.backSrc : data.originalSrc;
            card.setAttribute('src', newSrc);

            // Atualiza o atributo de estado da face visível
            card.setAttribute('data-flipped', data.isFlipped.toString());
        }

        if (confirmRotation) {
            // Adiciona rotação aleatória em 0 ou 180 graus
            const newRotation = data.rotation + (Math.random() < 0.5 ? 0 : 180);
            card.style.transform = `rotate(${newRotation}deg)`;
            card.setAttribute('data-rotation', newRotation);
        }

        if (confirmFlip) {
            // Decide aleatoriamente se a carta será virada
            const shouldFlip = Math.random() < 0.5;
            if (shouldFlip) {
                card.setAttribute('src', data.backSrc);
                card.setAttribute('data-flipped', 'true');
            } else {
                card.setAttribute('src', data.originalSrc);
                card.setAttribute('data-flipped', 'false');
            }
        }
    });

    // Mensagem consolidada informando o que foi realizado
    let message = "Ações realizadas com sucesso:\n";
    if (confirmShuffle) message += "- Cartas embaralhadas (imagens trocadas).\n";
    if (confirmRotation) message += "- Rotação aleatória aplicada.\n";
    if (confirmFlip) message += "- Algumas cartas foram viradas aleatoriamente.\n";

    alert(message);
}




















//___________________________________________________________________________________________


function reorganizarZIndexCartas() {
    const cartas = document.querySelectorAll('.card');

    const cartasOrdenadas = Array.from(cartas).sort((a, b) => {
        const fixedA = a.getAttribute('data-fixed-on-top') === 'true';
        const fixedB = b.getAttribute('data-fixed-on-top') === 'true';
        const lockedA = a.getAttribute('data-locked') === 'true';
        const lockedB = b.getAttribute('data-locked') === 'true';
        const zIndexA = parseInt(a.style.zIndex) || 0;
        const zIndexB = parseInt(b.style.zIndex) || 0;

        if (fixedA && !fixedB) return 1;
        if (!fixedA && fixedB) return -1;
        if (lockedA && !lockedB) return -1;
        if (!lockedA && lockedB) return 1;

        return zIndexA - zIndexB;
    });

    // ... (o sort inicial fica igual)
    
    let currentZNormal = 1;
    let currentZFixed = 30000; // Base do andar "Sempre no Topo"

    cartasOrdenadas.forEach((carta) => {
        const isFixed = carta.getAttribute('data-fixed-on-top') === 'true';
        
        // Distribui para a camada correta
        if (isFixed) {
            carta.style.zIndex = currentZFixed++;
        } else {
            carta.style.zIndex = currentZNormal++;
        }

        // ✅ Atualiza o estilo visual da carta
        atualizarEstiloCarta(carta);
    });

    topZIndex = currentZNormal; // Reseta o contador global de cliques para não furar o teto
}


// Função para carregar a página e reorganizar as cartas ao finalizar o carregamento
window.onload = function() {
    loadFullPage();
    reorganizarZIndexCartas();  // Chama a função de reorganização após o carregamento
    // Chame a função para garantir que as cartas sejam atualizadas
ensureFixedCardsOnTop();
};





function atualizarEstiloCarta(carta) {
    const isLocked = carta.getAttribute('data-locked') === 'true';
    const isFixed = carta.getAttribute('data-fixed-on-top') === 'true';

    if (isLocked) {
        carta.classList.add('locked');
    } else {
        carta.classList.remove('locked');
    }

    if (isFixed) {
        carta.classList.add('fixed-on-top');
    } else {
        carta.classList.remove('fixed-on-top');
    }
}







// --------------------------------------------------------------------------------------------------------//







//_________________________________________________________________________________________















// Função que agrupa e vira as cartas!
function groupAndFlipCards() {
    // Garantir que existe uma carta selecionada
    if (!selectedCard) {
      //  alert("Nenhuma carta selecionada!");
      mostrarToast("Nenhuma Carta selecionada!", "warning");
        return;
    }

    // Impedir a função se a carta estiver travada
    if (selectedCard.getAttribute('data-locked') === 'true') {
       // alert("Esta carta está travada!");
         mostrarToast("Esta Carta está TRAVADA!", "warning");
        return;
    }

    closeCardOptions();  // Fechar popup de opções

    // --- NOVA LÓGICA DE CAPTURA (Coordenadas Lógicas + Validação de Escala/Tamanho) ---
    const allCards = Array.from(document.querySelectorAll('.card:not(.dice)'));
    const cardsToMove = [selectedCard];  // Iniciar com a carta selecionada

    // 👉 PEGANDO OS DADOS COMPLETOS DA CARTA SELECIONADA
    const selectedLeft = selectedCard.offsetLeft;
    const selectedTop = selectedCard.offsetTop;
    const selectedWidth = selectedCard.offsetWidth;
    const selectedHeight = selectedCard.offsetHeight;
    const selectedScale = parseFloat(selectedCard.getAttribute('data-scale')) || 1;

    // 👉 TOLERÂNCIA AUMENTADA (Deixa pegar cartas levemente desalinhadas na pilha)
    const capturaTolerancia = 120;

    // Iterar sobre todas as cartas e agrupar as que estão próximas e idênticas no tamanho
    allCards.forEach(card => {
        if (card !== selectedCard) {
            const isCurrentlyLocked = card.getAttribute('data-locked') === 'true'; // Verifica se a carta está travada
            
            // Se a carta não estiver travada, continua o processo de agrupar
            if (!isCurrentlyLocked) {
                const cardLeft = card.offsetLeft;
                const cardTop = card.offsetTop;
                const cardWidth = card.offsetWidth;
                const cardHeight = card.offsetHeight;
                const cardScale = parseFloat(card.getAttribute('data-scale')) || 1;
                
                // 1. Verifica se as cartas estão próximas
                const isCloseVertically = Math.abs(cardTop - selectedTop) <= capturaTolerancia;
                const isCloseHorizontally = Math.abs(cardLeft - selectedLeft) <= capturaTolerancia;
                
                // 2. Verifica se possuem EXATAMENTE o mesmo tamanho físico e a mesma escala visual
                const isSameSize = (cardWidth === selectedWidth) && (cardHeight === selectedHeight);
                const isSameScale = (cardScale === selectedScale);

                // 3. Só agrupa se estiver no raio de distância E for idêntica no tamanho
                if (isCloseVertically && isCloseHorizontally && isSameSize && isSameScale) {
                    cardsToMove.push(card);
                }
            }
        }
    });

    // Função para virar uma carta com animação
    function flipCardIndividually(card) {
        if (!card) return;

        const isFlipped = card.getAttribute('data-flipped') === 'true';
        const computedStyle = window.getComputedStyle(card);
        const currentTransform = computedStyle.transform !== "none" ? computedStyle.transform : "";

        // Adiciona a animação de rotação
        card.style.transition = "transform 0.5s";
        card.style.transform = `${currentTransform} rotateY(90deg)`;

        setTimeout(() => {
            if (isFlipped) {
                // Mostrar a frente (reverter)
                const originalCardSrc = card.getAttribute('data-original-src');  // Obter frente original
                card.setAttribute('src', originalCardSrc);
                card.setAttribute('data-flipped', 'false');
            } else {
                // Mostrar as costas específicas da carta
                const originalCardSrc = card.getAttribute('data-original-src');
                const backSrc = originalCardSrc.replace('.jpeg', 'back.jpeg');  // Substituir pela imagem de costas
                card.setAttribute('src', backSrc);
                card.setAttribute('data-flipped', 'true');
            }

            // Completa a rotação suavemente
            card.style.transform = `${currentTransform} rotateY(0deg)`;
        }, 250); // Troca a imagem no meio da animação
    }

    // Virar todas as cartas agrupadas
    cardsToMove.forEach(card => {
        flipCardIndividually(card);  // Chama a função para virar individualmente
    });

    // Agora as cartas estão agrupadas e viradas corretamente

    // Zerar as transformações de todas as cartas antes de movê-las, mas preservar a posição
    cardsToMove.forEach(card => {
        // Zerar as transformações de rotação e redimensionamento, mas manter a posição (left, top)
        card.style.position = 'absolute'; // Garante que a posição é absoluta
    });

    moveDeck(selectedCard);
}







// --------------------------------------------------------------------------------------------------------//







//Função que agrupa para movimentar um pilha de cartas!
//Função que agrupa para movimentar um pilha de cartas!
function moveDeck() {
    if (!selectedCard) {
       // alert("Nenhuma carta selecionada!");
      mostrarToast("Nenhuma Carta selecionada!", "warning");

        return;
    }

    if (selectedCard.getAttribute('data-locked') === 'true') {
      //  alert("Esta carta está travada!");
          mostrarToast("Esta Carta está TRAVADA!", "warning");

        return;
    }

    closeCardOptions();

    const allCards = Array.from(document.querySelectorAll('.card:not(.dice)'));
    const tableWrapper = document.getElementById('table-wrapper');

    const cardsToMove = [];
    const cardOffsets = new Map();

    // 👉 PEGANDO OS DADOS COMPLETOS DA CARTA SELECIONADA
    const selectedLeft = selectedCard.offsetLeft;
    const selectedTop = selectedCard.offsetTop;
    const selectedWidth = selectedCard.offsetWidth;
    const selectedHeight = selectedCard.offsetHeight;
    const selectedScale = parseFloat(selectedCard.getAttribute('data-scale')) || 1;

    // 👉 TOLERÂNCIA AUMENTADA (Deixa pegar cartas levemente desalinhadas na pilha)
    const capturaTolerancia = 120;

    allCards.forEach(card => {
        if (card.getAttribute('data-locked') !== 'true') {
            const cardLeft = card.offsetLeft;
            const cardTop = card.offsetTop;
            const cardWidth = card.offsetWidth;
            const cardHeight = card.offsetHeight;
            const cardScale = parseFloat(card.getAttribute('data-scale')) || 1;
            
            // 1. Verifica se as cartas estão próximas (na área aumentada)
            const isCloseVertically = Math.abs(cardTop - selectedTop) <= capturaTolerancia;
            const isCloseHorizontally = Math.abs(cardLeft - selectedLeft) <= capturaTolerancia;
            
            // 2. Verifica se possuem EXATAMENTE o mesmo tamanho físico e a mesma escala visual
            const isSameSize = (cardWidth === selectedWidth) && (cardHeight === selectedHeight);
            const isSameScale = (cardScale === selectedScale);
            
            // 3. Só agrupa se estiver no raio de distância E for idêntica no tamanho
            if (isCloseVertically && isCloseHorizontally && isSameSize && isSameScale) {
                cardsToMove.push(card);
                cardOffsets.set(card, { x: 0, y: 0 });
            }
        }
    });

    let startX, startY;
    let initialLeft = selectedCard.offsetLeft;
    let initialTop = selectedCard.offsetTop;

    let initialScrollLeft = tableWrapper.scrollLeft;
    let initialScrollTop = tableWrapper.scrollTop;

    cardsToMove.forEach(card => {
        let offsets = cardOffsets.get(card);
        card.style.left = `${initialLeft + (offsets?.x || 0)}px`;
        card.style.top = `${initialTop + (offsets?.y || 0)}px`;
        card.style.position = 'absolute';
    });

    // 👉 Função para reordenar cartas pelo z-index
    function reorderCards(cards) {
        return cards.sort((a, b) => {
            const zIndexA = parseInt(window.getComputedStyle(a).zIndex) || 0;
            const zIndexB = parseInt(window.getComputedStyle(b).zIndex) || 0;
            return zIndexA - zIndexB;
        });
    }

    // 👉 Reordenar cartas antes de simular o clique
    const orderedCardsToMove = reorderCards(cardsToMove);

    // 👉 Simular clique nas cartas reordenadas
    orderedCardsToMove.forEach(card => {
        card.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        }));
    });

    // ⏱️ Cancelamento automático se o movimento não começar em 2 segundos
    let moveStarted = false;
    let cancelMoveTimeout = setTimeout(() => {
        if (!moveStarted) {
            console.log("Movimentação não iniciou em 2 segundos. Cancelando...");
            document.removeEventListener('mousedown', startMove);
            document.removeEventListener('touchstart', startMove);
        }
    }, 2000);

    function onDeckMove(event) {
        const currentX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
        const currentY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY;

        const deltaX = (currentX - startX) / zoomLevel;
        const deltaY = (currentY - startY) / zoomLevel;

        const scrollOffsetX = (tableWrapper.scrollLeft - initialScrollLeft) / zoomLevel;
        const scrollOffsetY = (tableWrapper.scrollTop - initialScrollTop) / zoomLevel;

        const newLeft = initialLeft + deltaX + scrollOffsetX;
        const newTop = initialTop + deltaY + scrollOffsetY;

        cardsToMove.forEach(card => {
            card.style.left = `${newLeft}px`;
            card.style.top = `${newTop}px`;
        });
    }

    function stopDeckMove() {
      
        document.removeEventListener('mousemove', onDeckMove);
        document.removeEventListener('mouseup', stopDeckMove);
        document.removeEventListener('touchmove', onDeckMove);
        document.removeEventListener('touchend', stopDeckMove);
        
        // NOVA LINHA: Atualiza o minimapa após soltar o grupo de cartas
        solicitarAtualizacaoMinimapa();
        
    }

    function startMove(event) {
        moveStarted = true;
        clearTimeout(cancelMoveTimeout);
        startX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
        startY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY;


        document.addEventListener('mousemove', onDeckMove);
        document.addEventListener('mouseup', stopDeckMove);
        document.addEventListener('touchmove', onDeckMove);
        document.addEventListener('touchend', stopDeckMove);
    }

    document.addEventListener('mousedown', startMove, { once: true });
    document.addEventListener('touchstart', startMove, { once: true });
}






// --------------------------------------------------------------------------------------------------------//


// Função que alinha todas as cartas em uma pilha única
function alignCardsOnTop(cardsToMove) {
    const referenceCard = cardsToMove[0]; 
    const left = referenceCard.style.left;
    const top = referenceCard.style.top;

    cardsToMove.forEach((card) => {
        card.style.transition = "none"; 
        card.style.left = left;
        card.style.top = top;
    });
}

// Função para animar o embaralhamento das cartas mantendo a posição final
function animateShuffle(cardsToMove) {

    alignCardsOnTop(cardsToMove); // Alinha todas as cartas antes de iniciar!

    return new Promise(resolve => {

        const initialPositions = cardsToMove.map(card => {
            return {
                card,
                left: card.style.left,
                top: card.style.top,
                transform: card.style.transform
            };
        });

        const totalCards = cardsToMove.length;
        const angleStep = (Math.PI * 2) / totalCards;

        cardsToMove.forEach((card, index) => {

            const angle = angleStep * index;
            const offsetX = Math.cos(angle) * 100;
            const offsetY = Math.sin(angle) * 100;

            card.style.transition = "transform 0.5s ease-in-out, opacity 0.3s";
            card.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${Math.random() * 360}deg)`;
        });

        setTimeout(() => {

            // Restaura posição das cartas
            initialPositions.forEach(({ card, left, top, transform }) => {
                card.style.transform = transform;
                card.style.left = left;
                card.style.top = top;
            });

            // Agora faz o ajuste dos z-index das cartas data-fixed-on-top === 'true'
            const fixedCards = cardsToMove.filter(card => card.getAttribute('data-fixed-on-top') === 'true');

            // Reescreve os z-index das cartas fixas conforme a nova ordem
            fixedCards.forEach((card, index) => {
                card.style.zIndex = index + 1; // Apenas reordena entre elas
            });

            setTimeout(() => {
                resolve();
            }, 500);

        }, 500);
    });
}




// Função para agrupar e reembaralhar mover cartas, zerando a rotação e redimensionamento, mas alinhando uma sobre a outra
// Função para agrupar e reembaralhar mover cartas, zerando a rotação e redimensionamento, mas alinhando uma sobre a outra
function stackCards() {
    // ==========================================
    // CONFIGURAÇÕES DO PROGRAMADOR
    // ==========================================
    const PERMITIR_ROTACAO = true; 
    const PERMITIR_VIRAR = true;   
    // ==========================================

    if (!selectedCard) {
       // alert("Nenhuma carta selecionada!");
       mostrarToast("Nenhuma Carta selecionada!", "warning");
       return;
    }

    // --- NOVA LÓGICA DE CAPTURA (Coordenadas Lógicas + Validação de Escala/Tamanho) ---
    const allCards = Array.from(document.querySelectorAll('.card:not(.dice)'));
    const cardsToMove = [];

    // 👉 PEGANDO OS DADOS COMPLETOS DA CARTA SELECIONADA
    const selectedLeft = selectedCard.offsetLeft;
    const selectedTop = selectedCard.offsetTop;
    const selectedWidth = selectedCard.offsetWidth;
    const selectedHeight = selectedCard.offsetHeight;
    const selectedScale = parseFloat(selectedCard.getAttribute('data-scale')) || 1;

    // 👉 TOLERÂNCIA AUMENTADA (Deixa pegar cartas levemente desalinhadas na pilha)
    const capturaTolerancia = 120;

    allCards.forEach(card => {
        if (card.getAttribute('data-locked') !== 'true') {
            const cardLeft = card.offsetLeft;
            const cardTop = card.offsetTop;
            const cardWidth = card.offsetWidth;
            const cardHeight = card.offsetHeight;
            const cardScale = parseFloat(card.getAttribute('data-scale')) || 1;
            
            // 1. Verifica se as cartas estão próximas (na área aumentada)
            const isCloseVertically = Math.abs(cardTop - selectedTop) <= capturaTolerancia;
            const isCloseHorizontally = Math.abs(cardLeft - selectedLeft) <= capturaTolerancia;
            
            // 2. Verifica se possuem EXATAMENTE o mesmo tamanho físico e a mesma escala visual
            const isSameSize = (cardWidth === selectedWidth) && (cardHeight === selectedHeight);
            const isSameScale = (cardScale === selectedScale);
            
            // 3. Só agrupa se estiver no raio de distância E for idêntica no tamanho
            if (isCloseVertically && isCloseHorizontally && isSameSize && isSameScale) {
                cardsToMove.push(card);
            }
        }
    });

    const confirmShuffle = confirm("Você deseja embaralhar as cartas?");
    if (!confirmShuffle) {
        moveDeck(selectedCard);
        return;
    }

    // --- BLOCO DE ROTAÇÃO (ESCOLHA POR NÚMERO OU EM BRANCO) ---
    // --- BLOCO DE ROTAÇÃO (PERGUNTA 1) ---
    if (PERMITIR_ROTACAO) {
        const perguntaRotacao = prompt(
            "Escolha o tipo de ROTAÇÃO aleatória:\n\n" +
            "1 - Rotação de 90° (De lado)\n" +
            "2 - Rotação de 180° (Inverter)\n\n" +
            "Deixe em BRANCO (ou Cancelar) para Sem Rotação.\n" +
            "Digite o número da opção:"
        );

        let anguloEscolhido = 0;
        if (perguntaRotacao === "1") anguloEscolhido = 90;
        else if (perguntaRotacao === "2") anguloEscolhido = 180;

        if (anguloEscolhido > 0) {
            cardsToMove.forEach(card => {
                let scale = parseFloat(card.getAttribute('data-scale')) || 1;
                let currentRotation = parseFloat(card.getAttribute('data-rotation')) || 0;
                let novaRotacaoAdicional = Math.random() < 0.5 ? 0 : anguloEscolhido;
                let totalRotation = currentRotation + novaRotacaoAdicional;

                card.style.transform = `rotate(${totalRotation}deg) scale(${scale})`;
                card.setAttribute('data-rotation', totalRotation);
            });
        }
    }

    // --- BLOCO DE VIRAR (PERGUNTA 2) ---
    if (PERMITIR_VIRAR) {
        const perguntaVirar = prompt(
            "Deseja VIRAR as cartas aleatoriamente (Frente/Verso)?\n\n" +
            "1 - Sim, virar aleatoriamente\n\n" +
            "Deixe em BRANCO (ou Cancelar) para Sem VIRAR.\n" +
            "Digite o número da opção:"
        );

        // Só executa se o usuário digitar especificamente "1"
        if (perguntaVirar === "1") {
            setTimeout(() => {
                cardsToMove.forEach(card => {
                    let scale = parseFloat(card.getAttribute('data-scale')) || 1;
                    const isFlipped = Math.random() < 0.5;
                    const originalSrc = card.getAttribute('data-original-src');
                    const backSrc = originalSrc.replace('.jpeg', 'back.jpeg');
                    
                    const computedStyle = window.getComputedStyle(card);
                    const currentTransform = computedStyle.transform !== "none" ? computedStyle.transform : "";

                    card.style.transition = "transform 0.5s";
                    card.style.transform = `${currentTransform} rotateY(90deg)`;

                    setTimeout(() => {
                        card.setAttribute('src', isFlipped ? backSrc : originalSrc);
                        card.setAttribute('data-flipped', isFlipped ? 'true' : 'false');
                        card.style.transform = `${currentTransform} rotateY(0deg)`;
                        card.setAttribute('data-scale', scale);
                    }, 250);
                });
            }, 1000);
        }
    }

    // --- PROCESSAMENTO FINAL DE EMBARALHAMENTO LOGICO ---
    function reorderCards(cards) {
        return cards.sort((a, b) => {
            const zIndexA = parseInt(window.getComputedStyle(a).zIndex) || 0;
            const zIndexB = parseInt(window.getComputedStyle(b).zIndex) || 0;
            return zIndexA - zIndexB;
        });
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    if (typeof animateShuffle === "function") animateShuffle(cardsToMove);
    const orderedCardsToMove = reorderCards(cardsToMove);
    shuffle(orderedCardsToMove);

    orderedCardsToMove.forEach(card => {
        card.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    });

    // Chama a movimentação para alinhar todas na mesma posição (X, Y)
    moveDeck(selectedCard);
}








// --------------------------------------------------------------------------------------------------------//






// Função para agrupar e trazer frente
function Agruparetrazerfrente() {
    if (!selectedCard) {
        mostrarToast("Nenhuma Carta selecionada!", "warning");
        console.log("❌ Nenhuma carta selecionada.");
        return;
    }

    console.log("📌 Carta selecionada:", selectedCard);
    closeCardOptions();

    // --- NOVA LÓGICA DE CAPTURA (Coordenadas Lógicas + Validação) ---
    const allCards = Array.from(document.querySelectorAll('.card:not(.dice)'));
    const cardsToMove = [];

    // Dados da carta selecionada para comparação
    const selectedLeft = selectedCard.offsetLeft;
    const selectedTop = selectedCard.offsetTop;
    const selectedWidth = selectedCard.offsetWidth;
    const selectedHeight = selectedCard.offsetHeight;
    const selectedScale = parseFloat(selectedCard.getAttribute('data-scale')) || 1;
    const capturaTolerancia = 120;

    // Adiciona a selecionada ao grupo
    cardsToMove.push(selectedCard);

    // Itera para agrupar cartas na mesma posição e com mesmas propriedades
    allCards.forEach(card => {
        if (card !== selectedCard) {
            const cardLeft = card.offsetLeft;
            const cardTop = card.offsetTop;
            const cardWidth = card.offsetWidth;
            const cardHeight = card.offsetHeight;
            const cardScale = parseFloat(card.getAttribute('data-scale')) || 1;

            const isCloseVertically = Math.abs(cardTop - selectedTop) <= capturaTolerancia;
            const isCloseHorizontally = Math.abs(cardLeft - selectedLeft) <= capturaTolerancia;
            const isSameSize = (cardWidth === selectedWidth) && (cardHeight === selectedHeight);
            const isSameScale = (cardScale === selectedScale);

            if (isCloseVertically && isCloseHorizontally && isSameSize && isSameScale) {
                cardsToMove.push(card);
            }
        }
    });

    console.log("📦 Total de cartas agrupadas:", cardsToMove.length);

    // Lógica de Travar/Destravar
    const someLocked = cardsToMove.some(card => card.getAttribute('data-locked') === 'true');
    
    if (someLocked) {
        const userResponse = confirm("Uma ou mais cartas estão TRAVADAS. Deseja destravá-las?");
        if (!userResponse) {
            mostrarToast("Operação Cancelada!", "warning");
            return;
        }

        cardsToMove.forEach(card => {
            card.setAttribute('data-locked', 'false');
            card.setAttribute('data-fixed-on-top', 'false');
            card.removeAttribute('data-at-top');
            card.classList.remove('locked2', 'fixed-on-top', 'destravada');
            card.classList.add('destravada'); 
            card.removeAttribute("title");
        });
    } else {
        const allAlreadyFixed = cardsToMove.every(card => card.getAttribute('data-fixed-on-top') === 'true');

        if (allAlreadyFixed) {
            cardsToMove.forEach(card => {
                card.setAttribute('data-fixed-on-top', 'false');
                card.removeAttribute('data-at-top');
                card.classList.remove('locked2', 'fixed-on-top', 'destravada');
                card.classList.add('destravada'); 
                card.removeAttribute("title");
            });
        } else {
            cardsToMove.forEach(card => {
                card.setAttribute('data-fixed-on-top', 'true');
                card.setAttribute('data-at-top', 'true');
                card.classList.remove('locked2', 'fixed-on-top', 'destravada');
                card.classList.add('fixed-on-top');
                card.removeAttribute("title");
                card.setAttribute("title", "Carta Sempre no Topo!");
            });
        }
    }

    // Chamar movimentação final
    moveDeck(selectedCard);
    console.log("🚚 moveDeck() chamado com:", selectedCard);
}








// --------------------------------------------------------------------------------------------------------//





//Função que da o zoom numa pilha de cartas
function zoomGroupSize(action) {
    // Garantir que existe uma carta selecionada
    if (!selectedCard) {
        mostrarToast("Nenhuma Carta selecionada!", "warning");
        return;
    }

    // Trava função se a carta estiver travada
    if (selectedCard.getAttribute('data-locked') === 'true') {
        mostrarToast("Esta Carta está TRAVADA!", "warning");
        return;
    }

    // --- NOVA LÓGICA DE CAPTURA (Coordenadas Lógicas + Validação) ---
    const allCards = Array.from(document.querySelectorAll('.card:not(.dice)'));
    const cardsToMove = [];

    // Dados da carta guia (selecionada)
    const selectedLeft = selectedCard.offsetLeft;
    const selectedTop = selectedCard.offsetTop;
    const selectedWidth = selectedCard.offsetWidth;
    const selectedHeight = selectedCard.offsetHeight;
    const selectedScale = parseFloat(selectedCard.getAttribute('data-scale')) || 1;
    const capturaTolerancia = 120; // Tolerância para capturar cartas da pilha

    // Adiciona a selecionada ao grupo
    cardsToMove.push(selectedCard);

    // Itera para agrupar cartas na mesma posição e com mesmas propriedades
    allCards.forEach(card => {
        if (card !== selectedCard && card.getAttribute('data-locked') !== 'true') {
            const cardLeft = card.offsetLeft;
            const cardTop = card.offsetTop;
            const cardWidth = card.offsetWidth;
            const cardHeight = card.offsetHeight;
            const cardScale = parseFloat(card.getAttribute('data-scale')) || 1;

            const isCloseVertically = Math.abs(cardTop - selectedTop) <= capturaTolerancia;
            const isCloseHorizontally = Math.abs(cardLeft - selectedLeft) <= capturaTolerancia;
            const isSameSize = (cardWidth === selectedWidth) && (cardHeight === selectedHeight);
            const isSameScale = (cardScale === selectedScale);

            // Só agrupa se estiver no raio de distância E for idêntica no tamanho/escala
            if (isCloseVertically && isCloseHorizontally && isSameSize && isSameScale) {
                cardsToMove.push(card);
            }
        }
    });

    // Diminui ou aumenta todas as cartas do grupo
    cardsToMove.forEach(card => {
        if (!card) return;

        let scale = parseFloat(card.getAttribute('data-scale')) || 1;
        let rotation = parseInt(card.getAttribute('data-rotation')) || 0;

        // Modifica a escala
        if (action === 'increase') {
            const nextScale = scale + 0.1;
            // Limite de 6000px visual para não estourar a performance
            if ((card.offsetWidth * nextScale) <= 6000 && (card.offsetHeight * nextScale) <= 6000) {
                scale = nextScale;
            }
        } else if (action === 'decrease' && scale > 0.1) {
            scale -= 0.1; 
        }

        // Aplica a rotação e a nova escala
        card.style.transform = `rotate(${rotation}deg) scale(${scale})`;
        card.setAttribute('data-scale', scale);
        card.setAttribute('data-rotation', rotation);
    });

    // Função para reordenar as cartas com base no z-index antes do clique
    function reorderCards(cards) {
        return cards.sort((a, b) => {
            const zIndexA = parseInt(window.getComputedStyle(a).zIndex) || 0;
            const zIndexB = parseInt(window.getComputedStyle(b).zIndex) || 0;
            return zIndexA - zIndexB;
        });
    }

    // Simular o clique nas cartas reordenadas para atualizar o foco/ordem na mesa
    const orderedCardsToMove = reorderCards(cardsToMove);
    orderedCardsToMove.forEach(card => {
        card.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        }));
    });

    // Chama a função de movimento do seu sistema
    moveDeck(selectedCard);
}








// --------------------------------------------------------------------------------------------------------//







// Função para redimensionar o DADO, mantendo a rotação atual e tudo ok! 0.8 usei aqui ok!
function resizeCard2(action) {


    if (!currentElement) return;

    let scale = parseFloat(currentElement.getAttribute('data-scale')) || 1;

    if (action === 'increase' && scale <8) {
        scale += 0.1; 
    } else if (action === 'decrease' && scale > 0.1) {
        scale -= 0.1; 
    }

    let rotation = parseInt(currentElement.getAttribute('data-rotation')) || 0;

    currentElement.style.transform = `rotate(${rotation}deg) scale(${scale+0.8})`;

    currentElement.setAttribute('data-scale', scale);

    // fecha janela popup de opcoes automaticamente
    //closeCardOptions();
}





// Função rotacionar para o dado já fazendo o ajuste de   currentElement.style.transform = `rotate(${rotation}deg) scale(${scale+0.8})`; ..... provavel ter que ajustar isso em outras mesas para evitar conflito ao rotacionar
function rotateCard2() {
    if (currentElement) {
        let rotation = parseInt(currentElement.getAttribute('data-rotation')) || 0;
        rotation += 45; // Aumenta a rotação em 45 graus sem limite

        let scale = parseFloat(currentElement.getAttribute('data-scale')) || 1;

        // Aplica a rotação e a escala
        currentElement.style.transform = `rotate(${rotation}deg) scale(${scale})`;

        currentElement.setAttribute('data-rotation', rotation); // Armazena o novo valor de rotação
        
        //closeCardOptions(); // Fecha opções de carta (se houver)
        
        // NOVA LINHA: Atualiza o minimapa após soltar o grupo de cartas
        solicitarAtualizacaoMinimapa();
    }
}



// --------------------------------------------------------------------------------------------------------//





// Funcao que abre barra de opcoes de REDIMENSIONAR + e - para CARTAS
function openResizeOptions_cartas() {
    // 1. Não fechamos mais o popup principal para manter o empilhamento!

    // 2. Se a barra de redimensionamento já estiver aberta, fecha (efeito Toggle)
    let resizeBar = document.getElementById('resize-bar');
    if (resizeBar) {
        resizeBar.classList.remove('show');
        setTimeout(() => resizeBar.remove(), 300);
        return;
    }

    // 3. Descobre qual barra principal está aberta para calcular a altura exata
    const opt1 = document.getElementById('card-options');
    const opt2 = document.getElementById('card-options2');
    let mainBar = null;
    
    if (opt1 && opt1.classList.contains('show')) mainBar = opt1;
    else if (opt2 && opt2.classList.contains('show')) mainBar = opt2;
    
    const mainBarHeight = mainBar ? mainBar.offsetHeight : 85;

    // 4. Cria a nova barra
    resizeBar = document.createElement('div');
    resizeBar.id = 'resize-bar';
    resizeBar.classList.add('card-options'); 
    resizeBar.style.bottom = `${mainBarHeight}px`; // Fica empilhada acima da principal
    resizeBar.style.borderTop = '2px solid darkred'; 
    resizeBar.style.zIndex = '1000000000000000'; 

    const selectedCard = currentElement; // O elemento (carta) selecionado no momento

    // 5. Botão para aumentar o tamanho
    const increaseButton = document.createElement('button');
    increaseButton.textContent = 'Carta +';
    increaseButton.addEventListener('click', () => {
        resizeCard('increase', selectedCard); 
        mostrarToast("Carta AUMENTADA!", "warning");
    });

    // 6. Botão para diminuir o tamanho
    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = 'Carta -';
    decreaseButton.addEventListener('click', () => {
        resizeCard('decrease', selectedCard); 
        mostrarToast("Carta DIMINUIDA!", "warning");
    });

    // 7. Botão vermelho de fechar
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.style.backgroundColor = 'red';
    closeButton.style.color = 'white';
    closeButton.addEventListener('click', () => {
        resizeBar.classList.remove('show');
        setTimeout(() => resizeBar.remove(), 300);
    });

    // 8. Monta a barra e adiciona à tela
    resizeBar.append(increaseButton, decreaseButton, closeButton);
    document.body.appendChild(resizeBar);

    // 9. Dispara a animação de subida
    requestAnimationFrame(() => {
        resizeBar.classList.add('show');
    });
}





//_____________________________________________________________________

// Função que abre a BARRA DE AGRUPAMENTO (acima da barra de opções principal)
function openGroupingOptions() {
    // 1. NÃO fechamos mais as opções principais! Mantemos ambas ativas.

    // 2. Se a barra de agrupamento já estiver aberta, clicar novamente a fecha (efeito Toggle)
    let groupingBar = document.getElementById('grouping-bar');
    if (groupingBar) {
        groupingBar.classList.remove('show');
        setTimeout(() => groupingBar.remove(), 300); // Remove após a animação terminar
        return;
    }

    // 3. Descobre qual barra principal está aberta para calcular a altura exata
    const opt1 = document.getElementById('card-options');
    const opt2 = document.getElementById('card-options2');
    let mainBar = null;
    
    if (opt1 && opt1.classList.contains('show')) mainBar = opt1;
    else if (opt2 && opt2.classList.contains('show')) mainBar = opt2;
    
    // Calcula a altura da barra inferior. Se der erro, assume o padrão de 85px do seu CSS
    const mainBarHeight = mainBar ? mainBar.offsetHeight : 85;

    // 4. Cria a nova barra
    groupingBar = document.createElement('div');
    groupingBar.id = 'grouping-bar';
    // Aplica a MESMA classe mágica que você já fez no CSS (blur, scroll horizontal, animação)
    groupingBar.classList.add('card-options'); 
    groupingBar.style.bottom = `${mainBarHeight}px`; // Fica empilhada perfeitamente acima da principal
    groupingBar.style.borderTop = '2px solid darkred'; // Diferencial visual para a barra de agrupamento
    groupingBar.style.zIndex = '1000000000000000'; // Um nível z-index para não conflitar com popups maiores

    // 5. Função interna para fechar ambas as barras quando uma ação de agrupar for concluída
    const closeBothPopups = () => {
        groupingBar.classList.remove('show');
        setTimeout(() => groupingBar.remove(), 300);
        closeCardOptions();
        closeCardOptions2();
    };

    // 6. Função auxiliar para criar os botões com mais facilidade
    const createBtn = (texto, acao, estilosExtras = {}) => {
        const btn = document.createElement('button');
        btn.textContent = texto;
        btn.addEventListener('click', acao);
        Object.assign(btn.style, estilosExtras);
        return btn;
    };

    // 7. Criação dos botões (com os mesmos textos e funções da sua popup antiga)
    const btnAgrupar = createBtn('Agrupar essa pilha de Cartas', () => { moveDeck(); closeBothPopups(); });
    const btnAgruparTopo = createBtn('Agrupar essa pilha de Cartas + Sempre no Topo', () => { Agruparetrazerfrente(); closeBothPopups(); });
    
    const btnZoomMais = createBtn('Agrupar essa pilha de cartas + Zoom', () => { zoomGroupSize('increase'); closeBothPopups(); }, { border: '2px solid #1a1a1a' });
    const btnZoomMenos = createBtn('Agrupar essa pilha de cartas - Zoom', () => { zoomGroupSize('decrease'); closeBothPopups(); }, { border: '2px solid #1a1a1a' });
    
    const btnVirar = createBtn('Agrupar essa pilha de cartas + Virar(frente/verso)', () => { groupAndFlipCards(); closeBothPopups(); });
    const btnEmbaralhar = createBtn('Agrupar essa pilha de cartas + Embaralhar', () => { stackCards(); closeBothPopups(); });
    const btnRetornar = createBtn('Agrupar essa pilha de cartas + Retornar aos seus Decks de origem', () => { groupAndReturnCardsToDecks(); closeBothPopups(); });
    const btnTravar = createBtn('Travar/Destravar Cartas do mesmo DECK na mesa', () => { toggleLockDeck(); closeBothPopups(); });
    const btnEmbaralharMesa = createBtn('Embaralhar Cartas do mesmo DECK colocadas na Mesa + Opções', () => { shuffleDeckImages(); closeBothPopups(); }, { border: '2px solid red' });
    
    const btnCriarDeck = createBtn('Agrupar essa pilha de cartas + Criar Deck único!', () => { groupCardsAndChangeDeck(); closeBothPopups(); }, { background: 'rgba(255, 0, 0, 0.5)' });
    const btnGrid = createBtn('Grid', () => { abrirPopupGrid(); closeBothPopups(); });
    
    const btnFechar = createBtn('Fechar Grupo', () => {
        groupingBar.classList.remove('show');
        setTimeout(() => groupingBar.remove(), 300);
    }, { backgroundColor: 'red', color: 'white' });

    // 8. Adiciona todos os botões na nova barra
    groupingBar.append(
        btnAgrupar, btnAgruparTopo, btnZoomMais, btnZoomMenos, 
        btnVirar, btnEmbaralhar, btnRetornar, 
        btnTravar, btnEmbaralharMesa, 
        btnCriarDeck, btnGrid, btnFechar
    );

    // Adiciona a barra à página
    document.body.appendChild(groupingBar);

    // 9. Dispara a animação de slide-up (transform: translateY(0)) do seu CSS
    requestAnimationFrame(() => {
        groupingBar.classList.add('show');
    });
}


















//---------------------------------------------------------------------------------------------------------


// Funcao que abre mini popup de opcoes com faces dos dados
function openDiceFaceOptions() {

// Fechar o popup de opções automaticamente (dados)
    closeCardOptions2();

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = ' 1000000000000002';

    const dicePopup = document.createElement('div');
    dicePopup.classList.add('dice-face-popup');
    dicePopup.style.display = 'flex';
    dicePopup.style.flexDirection = 'column';
    dicePopup.style.alignItems = 'center';
    dicePopup.style.backgroundColor = '#fff';
    dicePopup.style.padding = '20px';
    dicePopup.style.borderRadius = '10px';
    dicePopup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    dicePopup.style.maxHeight = '70%';
    dicePopup.style.maxWidth = '400px';
    dicePopup.style.width = '100%';
    dicePopup.style.overflowY = 'auto';





  const selectedDie = currentElement;
const deckNumber = selectedDie.getAttribute('data-deck');

const deckFaceMapping = {
    16: 6,
    17: 6,
    18: 6,
    30: 6,
    31: 6,
    32: 6,
    33: 6,
    34: 6,
    40: 3, // Deck 40 é um dado de 3 lados
    41: 4,
    42: 6,
    45: 20,
    46: 20, // Deck 44 é um dado de 20 lados
    47: 8,  // Deck 47 é um dado de 8 lados
    61: 12  // Deck 61 é um dado de 12 lados
};

const numFaces = deckFaceMapping[deckNumber] || 6;

// Verifica se o dado já foi rolado, garantindo que mostramos a face correta
const currentSrc = selectedDie.src.includes("back.jpeg") 
    ? selectedDie.getAttribute('data-original-src') 
    : selectedDie.src;

let currentFaceMatch = currentSrc.match(/card(\d+)\.jpeg/);
let currentFace = currentFaceMatch ? parseInt(currentFaceMatch[1], 10) : 1;








    // Seção "Somar ou subtrair do dado atual"
    const faceControlSectionTitle = document.createElement('p');
    const boldFaceControlTitle = document.createElement('b');
    boldFaceControlTitle.textContent = 'Somar ou subtrair do Dado Atual';
    faceControlSectionTitle.appendChild(boldFaceControlTitle);
    faceControlSectionTitle.style.textAlign = 'center';
    faceControlSectionTitle.style.color = 'black';
    faceControlSectionTitle.style.marginBottom = '10px';
    dicePopup.appendChild(faceControlSectionTitle);

    const faceControlSection = document.createElement('div');
    faceControlSection.style.display = 'flex';
    faceControlSection.style.justifyContent = 'center';
    faceControlSection.style.alignItems = 'center';
    faceControlSection.style.gap = '10px';
    faceControlSection.style.marginTop = '10px';
    dicePopup.appendChild(faceControlSection);

    const decreaseFaceButton = document.createElement('button');
    decreaseFaceButton.textContent = '-';
    decreaseFaceButton.style.padding = '10px';
    decreaseFaceButton.style.fontSize = '16px';
    decreaseFaceButton.style.cursor = 'pointer';
    faceControlSection.appendChild(decreaseFaceButton);

    const faceImageIndicator = document.createElement('img');
    faceImageIndicator.src = `deck${deckNumber}/card${currentFace}.jpeg?t=${new Date().getTime()}`;
    faceImageIndicator.style.width = '50px';
    faceImageIndicator.style.height = '50px';
    faceImageIndicator.style.objectFit = 'cover';
    faceImageIndicator.style.border = '2px solid gray'; // Borda cinza na face entre os botões + e -
    faceImageIndicator.style.borderRadius = '4px';
    faceControlSection.appendChild(faceImageIndicator);

    const increaseFaceButton = document.createElement('button');
    increaseFaceButton.textContent = '+';
    increaseFaceButton.style.padding = '10px';
    increaseFaceButton.style.fontSize = '16px';
    increaseFaceButton.style.cursor = 'pointer';
    faceControlSection.appendChild(increaseFaceButton);

    decreaseFaceButton.addEventListener('click', () => {
        currentFace = currentFace > 1 ? currentFace - 1 : numFaces;
        faceImageIndicator.src = `deck${deckNumber}/card${currentFace}.jpeg?t=${new Date().getTime()}`;
        selectedDie.src = `deck${deckNumber}/card${currentFace}.jpeg?t=${new Date().getTime()}`;
    });

    increaseFaceButton.addEventListener('click', () => {
        currentFace = currentFace < numFaces ? currentFace + 1 : 1;
        faceImageIndicator.src = `deck${deckNumber}/card${currentFace}.jpeg?t=${new Date().getTime()}`;
        selectedDie.src = `deck${deckNumber}/card${currentFace}.jpeg?t=${new Date().getTime()}`;
    });

    // Seção "Escolha a face"
    const chooseFaceTitle = document.createElement('p');
    const boldText = document.createElement('b');  // Criando o elemento <b>
    boldText.textContent = 'Escolha a face:';  // Atribuindo o texto ao <b>
    chooseFaceTitle.appendChild(boldText);  // Adicionando o <b> ao <p>
    chooseFaceTitle.style.textAlign = 'center';
    chooseFaceTitle.style.color = 'black';
    chooseFaceTitle.style.margin = '20px 0 10px';
    dicePopup.appendChild(chooseFaceTitle);

    const gridContainer = document.createElement('div');
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    gridContainer.style.gap = '10px';
    gridContainer.style.justifyItems = 'center';
    gridContainer.style.width = '100%';
    dicePopup.appendChild(gridContainer);

    for (let face = 1; face <= numFaces; face++) {
        const faceButton = document.createElement('button');
        faceButton.style.border = 'none';
        faceButton.style.background = 'none';
        faceButton.style.padding = '0';

        const faceImage = document.createElement('img');
        faceImage.src = `deck${deckNumber}/card${face}.jpeg?t=${new Date().getTime()}`;
        faceImage.alt = `Face ${face}`;
        faceImage.style.width = '50px';
        faceImage.style.height = '50px';
        faceImage.style.objectFit = 'cover';

        // Adicionando borda cinza à face atual
        if (face === currentFace) {
            faceImage.style.border = '2px solid gray';
        }

        faceButton.appendChild(faceImage);

        faceButton.addEventListener('click', () => {
            currentFace = face;
            faceImageIndicator.src = `deck${deckNumber}/card${currentFace}.jpeg?t=${new Date().getTime()}`;
            selectedDie.src = `deck${deckNumber}/card${currentFace}.jpeg?t=${new Date().getTime()}`;
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        });

        gridContainer.appendChild(faceButton);
    }

    // Seção "Referência de faces opostas"
    if (numFaces <= 6) {
        const referenceSection = document.createElement('div');
        referenceSection.style.marginTop = '20px';
        referenceSection.style.textAlign = 'center';
        referenceSection.style.width = '100%';

        const referenceTitle = document.createElement('p');
        const boldReferenceTitle = document.createElement('b');
        boldReferenceTitle.textContent = 'Referência de faces opostas:';
        referenceTitle.appendChild(boldReferenceTitle);
        referenceTitle.style.marginBottom = '10px';
        referenceTitle.style.color = 'black';
        referenceSection.appendChild(referenceTitle);

        const oppositeFaces = [
            { face1: 1, face2: numFaces },
            { face1: 2, face2: numFaces - 1 },
            { face1: 3, face2: numFaces - 2 }
        ];

        oppositeFaces.forEach(pair => {
            const pairContainer = document.createElement('div');
            pairContainer.style.display = 'flex';
            pairContainer.style.justifyContent = 'center';
            pairContainer.style.alignItems = 'center';
            pairContainer.style.gap = '10px';

            const createFaceImage = (face) => {
                const faceImg = document.createElement('img');
                faceImg.src = `deck${deckNumber}/card${face}.jpeg?t=${new Date().getTime()}`;
                faceImg.alt = `Face ${face}`;
                faceImg.style.width = '25px';
                faceImg.style.height = '25px';
                faceImg.style.objectFit = 'cover';
                faceImg.style.cursor = 'pointer';

                // Borda cinza na face atual da referência de faces opostas
                if (face === currentFace) {
                    faceImg.style.border = '2px solid gray';
                }

                faceImg.addEventListener('click', () => {
                    currentFace = face;
                    faceImageIndicator.src = `deck${deckNumber}/card${currentFace}.jpeg?t=${new Date().getTime()}`;
                    selectedDie.src = `deck${deckNumber}/card${currentFace}.jpeg?t=${new Date().getTime()}`;
                    document.body.removeChild(overlay);  // Fechar o popup
                });

                return faceImg;
            };

            const face1Img = createFaceImage(pair.face1);
            const separator = document.createElement('span');
            separator.textContent = '<->';
            separator.style.color = 'black';
            const face2Img = createFaceImage(pair.face2);

            pairContainer.appendChild(face1Img);
            pairContainer.appendChild(separator);
            pairContainer.appendChild(face2Img);
            referenceSection.appendChild(pairContainer);
        });

        dicePopup.appendChild(referenceSection);
    }

    overlay.appendChild(dicePopup);

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            document.body.removeChild(overlay);
        }
    });

    document.body.appendChild(overlay);

    closeCardOptions2();
}











//____________________________________________________________________________________________________________



// Funcao que abre barra com opcoes de REDIMENSIONAR o DADO
function openResizeOptions() {
    // 1. Não fechamos mais o popup principal!

    // 2. Se a barra de redimensionamento já estiver aberta, fecha
    let resizeBar = document.getElementById('resize-bar');
    if (resizeBar) {
        resizeBar.classList.remove('show');
        setTimeout(() => resizeBar.remove(), 300);
        return;
    }

    // 3. Descobre qual barra principal está aberta
    const opt1 = document.getElementById('card-options');
    const opt2 = document.getElementById('card-options2');
    let mainBar = null;
    
    if (opt1 && opt1.classList.contains('show')) mainBar = opt1;
    else if (opt2 && opt2.classList.contains('show')) mainBar = opt2;
    
    const mainBarHeight = mainBar ? mainBar.offsetHeight : 85;

    // 4. Cria a nova barra
    resizeBar = document.createElement('div');
    resizeBar.id = 'resize-bar';
    resizeBar.classList.add('card-options'); 
    resizeBar.style.bottom = `${mainBarHeight}px`; 
    resizeBar.style.borderTop = '2px solid darkred'; 
    resizeBar.style.zIndex = '1000000000000000'; 

    const selectedCard = currentElement;

    // 5. Botão para aumentar o tamanho
    const increaseButton = document.createElement('button');
    increaseButton.textContent = 'Dado +';
    increaseButton.addEventListener('click', () => {
        resizeCard('increase', selectedCard); 
    });

    // 6. Botão para diminuir o tamanho
    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = 'Dado -';
    decreaseButton.addEventListener('click', () => {
        resizeCard('decrease', selectedCard); 
    });

    // 7. Botão vermelho de fechar
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.style.backgroundColor = 'red';
    closeButton.style.color = 'white';
    closeButton.addEventListener('click', () => {
        resizeBar.classList.remove('show');
        setTimeout(() => resizeBar.remove(), 300);
    });

    // 8. Monta a barra e adiciona à tela
    resizeBar.append(increaseButton, decreaseButton, closeButton);
    document.body.appendChild(resizeBar);

    // 9. Dispara a animação
    requestAnimationFrame(() => {
        resizeBar.classList.add('show');
    });
}




// --------------------------------------------------------------------------------------------------------//




// Função para recolher uma carta selecionada de volta para o deck usando o botão no popup
// Função para recolher uma carta selecionada de volta para o deck usando o botão no popup
function returnCardToDeck() {

// Fechar o popup de opções automaticamente
    closeCardOptions();

    if (!selectedCard) {
       // alert("Nenhuma carta selecionada!");
        mostrarToast("Nenhuma Carta selecionada!", "warning");

        return;
    }

    // Verificar se a carta está travada
    if (selectedCard.classList.contains('locked')) {
       // alert("A carta está travada e não pode ser recolhida!");
       mostrarToast("A Carta está travada e não pode ser recolhida!", "warning");

        return;
    }

    const deckNumber = selectedCard.getAttribute('data-deck');
    const originalCardSrc = selectedCard.getAttribute('data-original-src');

    // Verificar se o deck existe
    if (!allDecks[deckNumber]) {
       // alert(`Deck ${deckNumber} não encontrado!`);
    mostrarToast("Deck não encontrado!", "warning");

        return;
    }

    // Remover a carta da mesa
    selectedCard.remove();

    // Verificar se a carta já existe no deck antes de adicioná-la
    if (!allDecks[deckNumber].includes(originalCardSrc)) {
        allDecks[deckNumber].push(originalCardSrc);
        // Embaralha o deck após adicionar a carta
        shuffleDeck(allDecks[deckNumber]); // Chama a função de embaralhamento no deck específico

        // Opcional: Atualizar a interface para mostrar que a carta foi recolhida
        updateDeckDisplay(deckNumber);
    } else {
      //  alert(`A carta já está no Deck ${deckNumber} e não será adicionada novamente.`);
    }

    // Fechar o pop-up de opções
    closeCardOptions();
}











// --------------------------------------------------------------------------------------------------------//




// Função para AGRUPAR e retornar todas as cartas aos seus respectivos decks
function groupAndReturnCardsToDecks() {
    // Se não houver uma carta selecionada, exibe alerta e retorna
    if (!selectedCard) {
        mostrarToast("Nenhuma Carta selecionada!", "warning");
        return;
    }

    // Verifica se a carta selecionada está travada
    const isSelectedCardLocked = selectedCard.getAttribute('data-locked') === 'true'; // Verifica se a carta está travada
    if (isSelectedCardLocked) {
        mostrarToast("A carta selecionada está travada e não pode ser recolhida!", "warning");
        return; // Impede o retorno da carta se estiver travada
    }

    // Seleciona todas as cartas não agrupadas na mesa
    const allCards = Array.from(document.querySelectorAll('.card:not(.dice)')); // Excluindo cubos e dados
    const cardsToReturn = [selectedCard];  // Começar com a carta selecionada

    // 👉 PEGANDO OS DADOS COMPLETOS DA CARTA SELECIONADA
    const selectedLeft = selectedCard.offsetLeft;
    const selectedTop = selectedCard.offsetTop;
    const selectedWidth = selectedCard.offsetWidth;
    const selectedHeight = selectedCard.offsetHeight;
    const selectedScale = parseFloat(selectedCard.getAttribute('data-scale')) || 1;

    // 👉 TOLERÂNCIA AUMENTADA para capturar a pilha
    const capturaTolerancia = 60;

    // Iterar sobre todas as cartas e agrupar as que estão próximas e idênticas
    allCards.forEach(card => {
        if (card !== selectedCard) {
            const isCurrentlyLocked = card.getAttribute('data-locked') === 'true'; // Verifica se a carta está travada
            
            // Se a carta não estiver travada, continua o processo de agrupar
            if (!isCurrentlyLocked) {
                const cardLeft = card.offsetLeft;
                const cardTop = card.offsetTop;
                const cardWidth = card.offsetWidth;
                const cardHeight = card.offsetHeight;
                const cardScale = parseFloat(card.getAttribute('data-scale')) || 1;

                // 1. Verifica se as cartas estão próximas
                const isCloseVertically = Math.abs(cardTop - selectedTop) <= capturaTolerancia;
                const isCloseHorizontally = Math.abs(cardLeft - selectedLeft) <= capturaTolerancia;

                // 2. Verifica se possuem EXATAMENTE o mesmo tamanho físico e a mesma escala visual
                const isSameSize = (cardWidth === selectedWidth) && (cardHeight === selectedHeight);
                const isSameScale = (cardScale === selectedScale);

                // 3. Só agrupa se estiver no raio de distância E for idêntica no tamanho/escala
                if (isCloseVertically && isCloseHorizontally && isSameSize && isSameScale) {
                    cardsToReturn.push(card);
                }
            }
        }
    });

    // Agora que as cartas foram agrupadas, vamos retornar cada uma ao seu respectivo deck
    cardsToReturn.forEach(card => {
        const deckNumber = card.getAttribute('data-deck'); // Obtém o número do deck da carta
        const cardSrc = card.getAttribute('data-original-src'); // Obtém o caminho original da carta

        // Verifica se o deck existe antes de adicionar a carta
        if (allDecks[deckNumber]) {
            // Verificar se a carta já existe no deck antes de adicioná-la
            if (!allDecks[deckNumber].includes(cardSrc)) {
                allDecks[deckNumber].push(cardSrc); // Retorna a carta ao respectivo deck

                // Embaralha o deck após adicionar a carta
                shuffleDeck(allDecks[deckNumber]); // Chama a função de embaralhamento no deck específico
            }
        }

        // Remove a carta da mesa
        card.remove();
    });

    // Fechar o pop-up de opções
    closeCardOptions();
}

// só funcionava por conta do botão no html... mas se o botão não estiver lá trava a criação dos dados!
//document.getElementById('groupReturnButton').addEventListener('click', groupAndReturnCardsToDecks);






//----------------------------------------------------------------------------



// Função para agrupar e mover cartas sem alterar nenhuma transformação feita!
function travarPilhaDeck() {
    // Garantir que existe uma carta selecionada
    if (!selectedCard) {
        mostrarToast("Nenhuma Carta selecionada!", "warning");
        return;
    }

    // Fechar o popup de opções automaticamente
    closeCardOptions();

    // --- NOVA LÓGICA DE CAPTURA (Coordenadas Lógicas + Validação) ---
    const allCards = Array.from(document.querySelectorAll('.card:not(.dice)')); // Filtra dados
    const cardsToMove = [];

    // Dados da carta guia (selecionada)
    const selectedLeft = selectedCard.offsetLeft;
    const selectedTop = selectedCard.offsetTop;
    const selectedWidth = selectedCard.offsetWidth;
    const selectedHeight = selectedCard.offsetHeight;
    const selectedScale = parseFloat(selectedCard.getAttribute('data-scale')) || 1;
    const capturaTolerancia = 60; // Tolerância para capturar cartas da pilha

    // Adicionar a carta selecionada ao grupo de cartas
    cardsToMove.push(selectedCard);

    // Iterar sobre todas as cartas e agrupar as que estão próximas e idênticas
    allCards.forEach(card => {
        if (card !== selectedCard) {
            const cardLeft = card.offsetLeft;
            const cardTop = card.offsetTop;
            const cardWidth = card.offsetWidth;
            const cardHeight = card.offsetHeight;
            const cardScale = parseFloat(card.getAttribute('data-scale')) || 1;

            // 1. Verifica se as cartas estão próximas
            const isCloseVertically = Math.abs(cardTop - selectedTop) <= capturaTolerancia;
            const isCloseHorizontally = Math.abs(cardLeft - selectedLeft) <= capturaTolerancia;

            // 2. Verifica se possuem EXATAMENTE o mesmo tamanho físico e a mesma escala visual
            const isSameSize = (cardWidth === selectedWidth) && (cardHeight === selectedHeight);
            const isSameScale = (cardScale === selectedScale);

            // 3. Agrupa se estiverem próximas e forem idênticas
            if (isCloseVertically && isCloseHorizontally && isSameSize && isSameScale) {
                cardsToMove.push(card);
            }
        }
    });

    // Verificar o estado da carta selecionada
    const isSelectedCardLocked = selectedCard.getAttribute('data-locked') === 'true';

    // Exibir uma mensagem de confirmação ao usuário
    const action = isSelectedCardLocked ? 'destravar' : 'travar';
    const userConfirmed = confirm(`Deseja ${action} a pilha de cartas?`);

    if (!userConfirmed) {
        return; // Cancelar a operação caso o usuário não confirme
    }

    // Aplicar a ação de travar ou destravar com base na confirmação
    const newLockedState = isSelectedCardLocked ? 'false' : 'true';

    if (newLockedState === 'false') {
        // Destravando: iterar novamente sobre as cartas agrupadas
        cardsToMove.forEach(card => {
            card.setAttribute('data-locked', 'false');
            card.style.border = 'none'; // Remove a borda
            
            // Mantém a padronização de classes do seu sistema
            card.classList.remove('locked2', 'locked'); 
            card.classList.add('destravada');
        });
    } else {
        // Travando: Apenas trava as cartas agrupadas
        cardsToMove.forEach(card => {
            card.setAttribute('data-locked', 'true');
            card.style.border = '1px dashed rgba(200, 200, 200, 0.2)'; // Adiciona a borda
            
            // Mantém a padronização de classes do seu sistema
            card.classList.remove('destravada');
            card.classList.add('locked2'); 
        });
    }

    // Função para reordenar as cartas com base no z-index
    function reorderCards(cards) {
        return cards.sort((a, b) => {
            const zIndexA = parseInt(window.getComputedStyle(a).zIndex) || 0; // Obtém o z-index da carta A
            const zIndexB = parseInt(window.getComputedStyle(b).zIndex) || 0; // Obtém o z-index da carta B
            
            return zIndexA - zIndexB; // Ordena pelo z-index
        });
    }

    // Reordenar as cartas agrupadas antes de simular os cliques
    const orderedCardsToMove = reorderCards(cardsToMove);

    // Simular o clique nas cartas reordenadas
    orderedCardsToMove.forEach(card => {
        card.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        }));
    });
}


//---------------------------------------------------------------------






//Travar/destravar no fundo da mesa
function toggleLockCard() {

// Fechar o popup de opções automaticamente (cartas)
    closeCardOptions();
// Fechar o popup de opções automaticamente (dados)
    closeCardOptions2();

    if (!selectedCard) {
      //  alert("Nenhuma carta selecionada!");
                    mostrarToast("Nenhuma Carta selecionada!", "warning");

        return;
    }

    // Impedir a função se a carta estiver no topo como marcador!
    if (selectedCard.getAttribute('data-fixed-on-top') === 'true') {
        const userResponse = confirm("Esta carta está configurada como Marcador SEMPRE NO TOPO. Deseja alterar isso para continuar?");
        if (userResponse) {
            selectedCard.setAttribute('data-fixed-on-top', 'false');
            // ❗ Ao remover o topo, volta para o estilo destravado normal
           // selectedCard.style.border = '1px dashed transparent';
             //Elimina ostras classes antes de aplicar a nova!
        selectedCard.classList.remove('locked2', 'fixed-on-top', 'destravada');
        selectedCard.classList.add('destravada'); 
        selectedCard.removeAttribute("title"); // Remove atributo TITLE que mostra ao passar o mouse texto
        } else {
           // alert("Operação cancelada. Configuração do marcador permanece inalterada.");
                       mostrarToast("Operação cancelada. Configuração do marcador permanece inalterada!", "warning");
           
            return;
        }
    }

    const isCurrentlyLocked = selectedCard.getAttribute('data-locked') === 'true';

    if (!isCurrentlyLocked) {
        // 🔒 TRAVAR
        //alert("Carta travada!");
                    mostrarToast("Carta TRAVADA!", "warning");

        selectedCard.setAttribute('data-locked', 'true');
        selectedCard.classList.add('locked');
        selectedCard.setAttribute('draggable', 'false');
       // selectedCard.style.border = '1px dashed rgba(200, 200, 200, 0.2)';
        //Elimina ostras classes antes de aplicar a nova!
        selectedCard.classList.remove('locked2', 'fixed-on-top', 'destravada');
        selectedCard.classList.add('locked2'); 
        selectedCard.removeAttribute("title"); // Remove atributo TITLE que mostra ao passar o mouse texto
        selectedCard.setAttribute("title", "Carta Travada na mesa!"); //Coloca atributo TITLE

        // Resolvendo alguns problemas visuais ao destravar
    selectedCard.click(); // Simula o clique
        
    } else {
        // 🔓 DESTRAVAR
       // alert("Carta destravada!");
                    mostrarToast("Carta DESTRAVADA!", "warning");

        selectedCard.setAttribute('data-locked', 'false');
        selectedCard.classList.remove('locked');
        selectedCard.setAttribute('draggable', 'true');
                  //  selectedCard.style.border = '1px dashed transparent';
                   //Elimina ostras classes antes de aplicar a nova!
        selectedCard.classList.remove('locked2', 'fixed-on-top', 'destravada');
        selectedCard.classList.add('destravar'); 
        selectedCard.removeAttribute("title"); // Remove atributo TITLE que mostra ao passar o mouse texto

        
        
          // Resolvendo alguns problemas visuais ao destravar
    selectedCard.click(); // Simula o clique

        // ✅ Verifica se a carta ainda é "topo"
        if (selectedCard.getAttribute('data-fixed-on-top') === 'true') {
            //selectedCard.style.border = '1px dashed red';
             //Elimina ostras classes antes de aplicar a nova!
            selectedCard.classList.remove('locked2', 'fixed-on-top', 'destravada');
            selectedCard.classList.add('fixed-on-top'); // dashed red na borda!
            selectedCard.removeAttribute("title"); // Remove atributo TITLE que mostra ao passar o mouse texto
            selectedCard.setAttribute("title", "Carta Sempre no Topo!"); //Coloca atributo TITLE

            
        } else {
           // selectedCard.style.border = '1px dashed transparent';
            //Elimina ostras classes antes de aplicar a nova!
        selectedCard.classList.remove('locked2', 'fixed-on-top', 'destravada');
        selectedCard.classList.add('destravada'); 
        selectedCard.removeAttribute("title"); // Remove atributo TITLE que mostra ao passar o mouse texto

        }
    }

    // 🔻 Adicionar a remoção da borda cinza, caso ela exista
    const borderStyle = getComputedStyle(selectedCard).border;
    if (borderStyle.includes('1px dashed rgba(200, 200, 200, 0.2)')) {
       // selectedCard.style.border = '1px dashed transparent'; // Remove a borda cinza
         //Elimina ostras classes antes de aplicar a nova!
        selectedCard.classList.remove('locked2', 'fixed-on-top', 'destravada');
        selectedCard.classList.add('destravada'); 
        selectedCard.removeAttribute("title"); // Remove atributo TITLE que mostra ao passar o mouse texto

    }

   // Mensagem ao usuário
  //  alert(isCurrentlyLocked ? "Deck destravado!" : "Deck travado!");

    // Reorganiza os z-index das cartas para manter a hierarquia entre as carta travadas no fundo!
    reorganizarZIndexCartas();
}




//---------------------------------------------------------------------------------




// Função para travar ou destravar todo o deck presente na mesa!
// Função para travar ou destravar todo o deck presente na mesa!
function toggleLockDeck() {
    if (!selectedCard) {
        mostrarToast("Nenhuma Carta selecionada!", "warning");
        return;
    }

    // Obtém o número do deck da carta selecionada
    const deckNumber = selectedCard.getAttribute('data-deck');
    if (!deckNumber) {
        mostrarToast("A carta selecionada não pertence a um deck!", "warning");
        return;
    }

    // Seleciona todas as cartas do mesmo deck na mesa
    const cards = document.querySelectorAll(`.card[data-deck='${deckNumber}']`);

    // Verifica o estado de travamento da primeira carta para determinar a ação (travar ou destravar)
    const isCurrentlyLocked = cards[0]?.getAttribute('data-locked') === 'true';

    // Mensagem de confirmação dinâmica
    const action = isCurrentlyLocked ? "DESTRAVAR" : "TRAVAR";
    const confirmAction = confirm(`Você tem certeza que deseja ${action} todas as cartas deste deck?`);

    if (!confirmAction) {
        return; // Se o usuário cancelar, a função não faz nada
    }

    // Itera sobre as cartas e aplica a lógica de travar/destravar
    cards.forEach(card => {
        if (!isCurrentlyLocked) {
            // 👉 TRAVANDO AS CARTAS
            card.setAttribute('data-locked', 'true');
            card.classList.add('locked');
            card.setAttribute('draggable', 'false');

            // 👉 A CORREÇÃO: Força o z-index para 0 (fundo da mesa) em vez de jogar para o topo.
            // Isso garante que cartas soltas não sumam atrás delas.
            card.style.zIndex = 0;

            // Elimina outras classes antes de aplicar a nova!
            card.classList.remove('locked2', 'fixed-on-top', 'destravada');
            card.classList.add('locked2');
            card.removeAttribute("title"); // Remove atributo TITLE que mostra ao passar o mouse texto
            card.setAttribute("title", "Carta Travada na Mesa!"); // Coloca atributo TITLE

        } else {
            // 👉 DESTRAVANDO AS CARTAS
            card.setAttribute('data-locked', 'false');
            card.classList.remove('locked');
            card.setAttribute('draggable', 'true');

            // Elimina outras classes antes de aplicar a nova!
            card.classList.remove('locked2', 'fixed-on-top', 'destravada');
            card.classList.add('destravada');
            card.removeAttribute("title"); // Remove atributo TITLE que mostra ao passar o mouse texto

            // Se a carta estiver Travada no topo, adiciona as classes correspondentes
            if (card.getAttribute('data-fixed-on-top') === 'true') {
                // Elimina outras classes antes de aplicar a nova!
                card.classList.remove('locked2', 'fixed-on-top', 'destravada');
                card.classList.add('fixed-on-top'); // dashed red na borda!
                card.removeAttribute("title"); // Remove atributo TITLE que mostra ao passar o mouse texto
                card.setAttribute("title", "Carta Sempre no Topo!"); // Coloca atributo TITLE
            }
        }
    });

    // Reorganiza os z-index das cartas para manter a hierarquia final perfeita
    reorganizarZIndexCartas();
}








//________________________________________________________________________________




// Função para duplicar a carta
function duplicateCard() {
    mostrarToast("Carta DUPLICADA!");

    if (!selectedCard) {
        mostrarToast("Nenhuma Carta selecionada!", "warning");
        return;
    }

    if (selectedCard.classList.contains('deck1menor-dado')) {
        mostrarToast("Não é possível clonar um dado ainda!", "warning");
        return;
    }

    const clone = selectedCard.cloneNode(true); 

    // 1. FORÇA O RASTREAMENTO PARA OFF (Independente da original)
    clone.setAttribute('data-tracked', 'false'); 
    
    // 2. ID ÚNICO E ALEATÓRIO (Crucial para o sistema de timers não bugar)
    clone.id = 'rastreada-' + Date.now() + '-' + Math.floor(Math.random() * 1000);

    // 3. IDENTIFICAÇÃO DE CLONE
    clone.setAttribute('data-is-clone', 'true'); 

    // 4. LIMPEZA DE DADOS DE RASTREIO ANTERIORES
    clone.removeAttribute('data-rastro-count');
    clone.removeAttribute('data-rastro-color');
    clone.classList.remove('rastreador-marcador');

    // 5. LIMPEZA DE VISUAIS
    setTimeout(() => {
        const borderStyle = getComputedStyle(clone).border;
        if (borderStyle.includes('1px dashed rgba(200, 200, 200, 0.2)')) {
            clone.style.border = '1px dashed transparent';
        }
    }, 0);

    // 6. POSICIONAMENTO E Z-INDEX
    clone.classList.remove('selected', 'locked');
    clone.style.left = `${parseInt(selectedCard.style.left) + 20}px`; 
    clone.style.top = `${parseInt(selectedCard.style.top) + 20}px`;
    clone.setAttribute('data-locked', 'false'); 
    clone.classList.remove('locked'); 
    clone.style.zIndex = topZIndex++; 

    // Efeito visual de clone
    const originalBorderShadow = clone.style.boxShadow;
    clone.style.boxShadow = '0 0 0 15px blue';
    setTimeout(() => { clone.style.boxShadow = originalBorderShadow; }, 2500);

    // 7. ADICIONA NA MESA
    const tableArea = document.getElementById('table-area');
    tableArea.appendChild(clone);

    // 8. REGISTRO DE EVENTOS
    clone.addEventListener('click', (e) => {
        selectCardOnTable(clone);
        // Atualiza o botão imediatamente ao selecionar o clone "OFF"
        atualizarEstadoBotaoRastreio(clone); 
    });
    
    clone.addEventListener('dblclick', () => openCardOptions(clone));
    clone.addEventListener('mousedown', onMouseDown);
    clone.addEventListener('touchstart', onTouchStart);
    clone.addEventListener('touchstart', handleTouch);
    clone.addEventListener('mouseup', clearLongPressTimeout);
    clone.addEventListener('mouseleave', clearLongPressTimeout);
    clone.addEventListener('touchend', clearLongPressTimeout);
    clone.addEventListener('touchcancel', clearLongPressTimeout);
    clone.addEventListener('mousemove', clearLongPressTimeout);
    clone.addEventListener('touchmove', clearLongPressTimeout);
    
    ensureFixedCardsOnTop(); 
    
    // Seleciona e força a atualização visual do botão para refletir que o clone está OFF
    selectCardOnTable(clone);
    atualizarEstadoBotaoRastreio(clone);
}





//___________________________________________




// Função para apagar a carta, verificando se é a última cópia com a mesma imagem
// Função para apagar a carta, registrando o deck original
// Função para apagar a carta, registrando o deck original
function deleteCard() {

// Fechar o popup de opções automaticamente (cartas)
    closeCardOptions();
// Fechar o popup de opções automaticamente (dados)
    closeCardOptions2();

    if (!selectedCard) {
      //  alert("Nenhuma carta selecionada!");
                  mostrarToast("Nenhuma Carta selecionada!", "warning");

        return;
    }

    const deckNumber = parseInt(selectedCard.getAttribute('data-deck')); // Obtém o número do deck da carta
    const cardSrc = selectedCard.getAttribute('data-original-src'); // Obtém a imagem original da carta
    const tableArea = document.getElementById('table-area');

    // Busca todas as cartas na mesa com a mesma imagem
    const identicalCardsOnTable = tableArea.querySelectorAll(`img[data-original-src="${cardSrc}"]`);

    // Confirmação antes de apagar a carta
    const confirmDelete = confirm("Tem certeza de que deseja remover esta Carta da mesa e colocá-la no deck de Descarte?");
    if (confirmDelete) {
        // Registra a carta no Deck 44, mas também salva o deck original
        if (!allDecks[44]) {
            allDecks[44] = []; // Garante que o deck 44 exista
        }
        
        // Salva o deck original junto com a carta no Deck 44
        const cardData = {
            src: cardSrc,
            originalDeck: deckNumber // Registra o deck original
        };
        allDecks[44].push(cardData);

        // Remove a carta da mesa
        selectedCard.remove();
        selectedCard = null; // Limpa a seleção
        closeCardOptions(); // Fecha o popup após a ação

      //  alert("Carta movida para o Deck de Descarte!");
    } else {
    //    alert("Ação cancelada. A carta não foi movida para o Deck de Descarte!.");
    }
}













//_______________________________________________________________________________________________




// Função que rola todos os dados do mesmo deck quando o botão no popup é clicado
function rollAllDice() {
    closeCardOptions2(); // Fecha o popup após a ação

    const diceElements = document.querySelectorAll('.deck1menor-dado'); // Seletor para os dados
    const selectedDeck = selectedCard.getAttribute('data-deck'); // Obtém o valor do deck selecionado

    // Mapeamento de decks para número de faces dos dados, tem que fazer isso no outro codigo igual acima na restauração do save!!
    const deckFaceMapping = {
        16: 6,
        17: 6,
        18: 6,
        30: 6,
        31: 6,
        32: 6,
        33: 6,
        34: 6,
        40: 3, // Deck 40 é um dado de 3 lados
        42: 6,
        41: 4,
        45: 20, // Exemplo: deck 44 é um dado de 20 lados
        46: 20, // Deck 44 é um dado de 20 lados
        47: 8,  // Deck 47 é um dado de 8 lados
    61: 12  // Deck 61 é um dado de 12 lados
    };

    diceElements.forEach(dice => {
        const deckNumber = dice.getAttribute('data-deck'); // Obtém o valor do deck de cada dado



        // Verifica se o dado pertence ao deck selecionado
        if (deckNumber === selectedDeck) {
        
  tocarSomDado(); // <--- ADICIONE ESTA LINHA AQUI
        
            const numFaces = deckFaceMapping[deckNumber] || 6; // Determina o número de faces do dado
            const randomFace = Math.floor(Math.random() * numFaces) + 1; // Gera uma face aleatória
            const newFacePath = `deck${deckNumber}/card${randomFace}.jpeg`;

            // Atualiza a face do dado
            dice.src = `${newFacePath}?t=${new Date().getTime()}`; // Cache busting para evitar problemas de cache

            // Aplica a animação de flip
            adicionarFlipVisual(dice);
        }
    });
}







//_________________________________________________________________________________________


//Função que agrupa as cartas e cria um novo deck para o jogador!
function groupCardsAndChangeDeck() {
    if (!selectedCard) {
        mostrarToast("Nenhuma Carta selecionada!", "warning");
        return;
    }

    if (selectedCard.getAttribute('data-locked') === 'true') {
        mostrarToast("Esta Carta está TRAVADA!", "warning");
        return;
    }

    // Perguntar se o usuário deseja realmente alterar o deck
    const confirmChange = window.confirm("Você realmente deseja alterar o deck?");
    if (!confirmChange) return;

    // Gerar um número único para o deck
    let newDeckId = generateUniqueDeckId();
    if (!newDeckId) {
        mostrarToast("Erro ao gerar ID do Deck!", "warning");
        return;
    }

    // --- NOVA LÓGICA DE CAPTURA (Coordenadas Lógicas + Validação) ---
    const allCards = Array.from(document.querySelectorAll('.card:not(.dice)'));
    const cardsToMove = [];
    
    // Dados da carta guia (selecionada)
    const selectedLeft = selectedCard.offsetLeft;
    const selectedTop = selectedCard.offsetTop;
    const selectedWidth = selectedCard.offsetWidth;
    const selectedHeight = selectedCard.offsetHeight;
    const selectedScale = parseFloat(selectedCard.getAttribute('data-scale')) || 1;
    const capturaTolerancia = 120;

    // Adiciona a selecionada
    cardsToMove.push(selectedCard);

    // Itera para agrupar
    allCards.forEach(card => {
        if (card !== selectedCard && card.getAttribute('data-locked') !== 'true') {
            const cardLeft = card.offsetLeft;
            const cardTop = card.offsetTop;
            const cardWidth = card.offsetWidth;
            const cardHeight = card.offsetHeight;
            const cardScale = parseFloat(card.getAttribute('data-scale')) || 1;

            const isCloseVertically = Math.abs(cardTop - selectedTop) <= capturaTolerancia;
            const isCloseHorizontally = Math.abs(cardLeft - selectedLeft) <= capturaTolerancia;
            const isSameSize = (cardWidth === selectedWidth) && (cardHeight === selectedHeight);
            const isSameScale = (cardScale === selectedScale);

            if (isCloseVertically && isCloseHorizontally && isSameSize && isSameScale) {
                cardsToMove.push(card);
            }
        }
    });

    // 🚫 VERIFICA SE EXISTEM DADOS NA PILHA
    const containsDice = cardsToMove.some(card =>
        card.classList.contains('deck1menor-dado') || 
        card.classList.contains('dado') || 
        card.classList.contains('dice')
    );

    if (containsDice) {
        mostrarToast("Não é possível agrupar dados em um novo deck. Remova os dados para prosseguir!", "warning");
        return;
    }

    // Fechar o popup de opções automaticamente
    closeCardOptions();

    // Atualizar os atributos das cartas antes da mudança
    cardsToMove.forEach(card => {
        const currentDeck = card.getAttribute('data-deck'); 
        card.setAttribute('data-original-deck', currentDeck); 
        card.setAttribute('data-deck', newDeckId); 
    });

    // Criar dinamicamente um novo deck na interface
    if (!document.getElementById(`deck-${newDeckId}`)) {
        createNewDeck(newDeckId, `Deck ${newDeckId}`);
    }

    // Chamar a função de movimentação passando o ID do novo deck
    moveDeck(newDeckId);

    alert(`Cartas agrupadas e agora pertencem ao deck '${newDeckId}', podendo ser movidas como um grupo!`);
}







// Função para gerar um número único de ID para o deck
function generateUniqueDeckId() {
    let newDeckId;
    do {
        newDeckId = Math.floor(Math.random() * (10000 - 500)) + 500; // Gera um número entre 500 e 9999
    } while (document.getElementById(`deck-${newDeckId}`)); // Verifica se o ID já existe

    return newDeckId;
}





//cria o deck dinamico!
function createNewDeck(deckId, deckName) {
    const decksContainer = document.getElementById("decks_dinamicos");

    // Verifica se o deck já foi criado para evitar duplicação
    if (document.getElementById(`deck-${deckId}`)) {
        console.warn(`Deck ${deckId} já existe.`);
        return;
    }

    // Cria o elemento do deck
    const deckDiv = document.createElement("div");
    deckDiv.classList.add("deck");
    deckDiv.id = `deck-${deckId}`;

    // Seleciona a primeira carta do deck, que foi movida
    const firstCard = document.querySelector(`.card[data-deck='${deckId}']`);
    if (!firstCard) {
        console.warn(`Nenhuma carta encontrada para o deck ${deckId}.`);
        return;
    }

    // Obtém a imagem da carta para ser usada como a imagem do deck
    const deckImage = document.createElement("img");
    deckImage.src = firstCard.getAttribute('data-original-src'); // Usa a imagem da carta
    deckImage.alt = `Deck ${deckId}`;
    deckImage.classList.add("deck-back");
    deckImage.onclick = () => drawCard(deckId);
    deckImage.onerror = () => reloadDeckImage(deckImage, `deck${deckId}/deck-back.jpeg`);

    // Cria o título do deck
    const deckTitle = document.createElement("p");
    deckTitle.innerHTML = `<center>${deckName}</center>`;

    // Cria os botões
    const recolherButton = document.createElement("button");
    recolherButton.innerText = "Recolher";
    recolherButton.onclick = () => reshuffleDeck(deckId);

    const selecionarButton = document.createElement("button");
    selecionarButton.innerText = "Selecionar Carta";
    selecionarButton.onclick = () => openCardSelector(deckId);

    // Adiciona os elementos ao deck
    deckDiv.appendChild(deckImage);
    deckDiv.appendChild(deckTitle);
    deckDiv.appendChild(recolherButton);
    deckDiv.appendChild(selecionarButton);

    // Adiciona o deck na div de decks dinâmicos
    decksContainer.appendChild(deckDiv);
}




//_______________________________________________________________________________________














//___________________________________________________________________________________________


//mostra cartas do deck iterado
function mostrarConteudoCartas() {
    if (!selectedCard) {
       // alert("Nenhuma carta selecionada!");
        mostrarToast("Nenhuma Carta selecionada!", "warning");
        return;
    }

    // Fecha o popup de opções (se necessário)
    closeCardOptions();

    // Seleciona todas as cartas (usando :not(.dice) para alinhar com o restante do sistema)
    const allCards = Array.from(document.querySelectorAll('.card:not(.dice)')); 
    const cardsToShow = [];

    // 👉 PEGANDO OS DADOS COMPLETOS DA CARTA SELECIONADA
    const selectedLeft = selectedCard.offsetLeft;
    const selectedTop = selectedCard.offsetTop;
    const selectedWidth = selectedCard.offsetWidth;
    const selectedHeight = selectedCard.offsetHeight;
    const selectedScale = parseFloat(selectedCard.getAttribute('data-scale')) || 1;

    // 👉 TOLERÂNCIA AUMENTADA (Deixa pegar cartas levemente desalinhadas na pilha)
    const capturaTolerancia = 120;

    // Itera sobre todas as cartas para identificar as empilhadas
    allCards.forEach(card => {
        if (card !== selectedCard) {
            const cardLeft = card.offsetLeft;
            const cardTop = card.offsetTop;
            const cardWidth = card.offsetWidth;
            const cardHeight = card.offsetHeight;
            const cardScale = parseFloat(card.getAttribute('data-scale')) || 1;

            // 1. Verifica se as cartas estão próximas (na área aumentada)
            const isCloseVertically = Math.abs(cardTop - selectedTop) <= capturaTolerancia;
            const isCloseHorizontally = Math.abs(cardLeft - selectedLeft) <= capturaTolerancia;

            // 2. Verifica se possuem EXATAMENTE o mesmo tamanho físico e a mesma escala visual
            const isSameSize = (cardWidth === selectedWidth) && (cardHeight === selectedHeight);
            const isSameScale = (cardScale === selectedScale);

            // 3. Só adiciona se estiver no raio de distância E for idêntica no tamanho
            if (isCloseVertically && isCloseHorizontally && isSameSize && isSameScale) {
                cardsToShow.push(card);
            }
        }
    });

    // Adiciona a carta selecionada à lista de exibição
    cardsToShow.unshift(selectedCard);

    if (cardsToShow.length === 0) {
       // alert("Nenhuma carta empilhada encontrada!");
        mostrarToast("Nenhuma Carta EMPILHADA encontrada!", "warning");
        return;
    }

    // Criação do popup2 (fundo escuro)
    const popup2 = document.createElement('div');
    popup2.classList.add('popup');
    popup2.style.position = 'fixed';
    popup2.style.top = '0';
    popup2.style.left = '0';
    popup2.style.width = '100%';
    popup2.style.height = '100%';
    popup2.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    popup2.style.display = 'flex';
    popup2.style.justifyContent = 'center';
    popup2.style.alignItems = 'center';
    popup2.style.zIndex = '9999';

    // Criação do conteúdo do popup
    const popupContent = document.createElement('div');
    popupContent.style.backgroundColor = 'white';
    popupContent.style.borderRadius = '10px';
    popupContent.style.padding = '20px';
    popupContent.style.display = 'grid';
    popupContent.style.gridTemplateColumns = 'repeat(2, 1fr)';
    popupContent.style.gap = '10px';
    popupContent.style.overflowY = 'auto';
    popupContent.style.maxHeight = '80vh';

    // Adiciona imagens das cartas empilhadas ao popup (sem setas)
    cardsToShow.forEach(card => {
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.alignItems = 'center';

        const cardImage = document.createElement('img');
        const frontSrc = card.getAttribute('data-original-src');
        cardImage.src = frontSrc || card.getAttribute('src');
        cardImage.style.width = '150px';
        cardImage.style.cursor = 'pointer';

        // Aplica rotação se existir
        const rotation = card.getAttribute('data-rotation') || '0';
        cardImage.style.transform = `rotate(${rotation}deg)`;
        cardImage.setAttribute('data-rotation', rotation);

        // Evento para selecionar a carta ao clicar no popup
        cardImage.addEventListener('click', () => {
            selectCardOnTable(card, true); // Força trazer para frente mesmo travada
            document.body.removeChild(popup2); // Fecha popup

            setTimeout(() => {
                const flippedSrc = card.getAttribute('data-original-src');
                card.setAttribute('src', flippedSrc);
                card.setAttribute('data-flipped', 'false');
            }, 1000);
        });

        wrapper.appendChild(cardImage);
        popupContent.appendChild(wrapper);
    });

    // Adiciona o conteúdo ao popup
    popup2.appendChild(popupContent);

    // Fecha o popup ao clicar fora
    popup2.addEventListener('click', (event) => {
        if (event.target === popup2) {
            document.body.removeChild(popup2);
        }
    });

    // Adiciona o popup ao body
    document.body.appendChild(popup2);
}

// Vincula a função ao botão "MOSTRAR CONTEÚDO"
document.getElementById('mostrar-conteudo-btn').addEventListener('click', mostrarConteudoCartas);






//__________________________________________


//criar grid
//criar grid
function abrirPopupGrid() {
    // Garantir que existe uma carta selecionada
    if (!selectedCard) {
      //  alert("Nenhuma carta selecionada!");
        mostrarToast("Nenhuma Carta selecionada!", "warning");
        return;
    }

    closeCardOptions(); // Fecha a popup principal de opções de cartas
    closeCardOptions2(); // Fecha a popup principal de opções dos dados

    const allCards = Array.from(document.querySelectorAll('.card:not(.dice)')); // Filtra dados
    const cardsToMove = [];

    // Adicionar a carta selecionada ao grupo de cartas
    cardsToMove.push(selectedCard);

    // 👉 PEGANDO OS DADOS COMPLETOS DA CARTA SELECIONADA
    const selectedLeft = selectedCard.offsetLeft;
    const selectedTop = selectedCard.offsetTop;
    const selectedWidth = selectedCard.offsetWidth;
    const selectedHeight = selectedCard.offsetHeight;
    const selectedScale = parseFloat(selectedCard.getAttribute('data-scale')) || 1;

    // 👉 TOLERÂNCIA AUMENTADA para capturar a pilha
    const capturaTolerancia = 120;

    // Iterar sobre todas as cartas e agrupar as que estão próximas
    allCards.forEach(card => {
        if (card !== selectedCard) {
            const isCurrentlyLocked = card.getAttribute('data-locked') === 'true';
            
            if (!isCurrentlyLocked) {
                const cardLeft = card.offsetLeft;
                const cardTop = card.offsetTop;
                const cardWidth = card.offsetWidth;
                const cardHeight = card.offsetHeight;
                const cardScale = parseFloat(card.getAttribute('data-scale')) || 1;

                // 1. Verifica se as cartas estão próximas
                const isCloseVertically = Math.abs(cardTop - selectedTop) <= capturaTolerancia;
                const isCloseHorizontally = Math.abs(cardLeft - selectedLeft) <= capturaTolerancia;

                // 2. Verifica se possuem EXATAMENTE o mesmo tamanho físico e a mesma escala visual
                const isSameSize = (cardWidth === selectedWidth) && (cardHeight === selectedHeight);
                const isSameScale = (cardScale === selectedScale);

                // 3. Agrupa se estiverem próximas e forem idênticas
                if (isCloseVertically && isCloseHorizontally && isSameSize && isSameScale) {
                    cardsToMove.push(card);
                }
            }
        }
    });

    // Exibir a quantidade de cartas agrupadas diretamente na prompt
    const numCards = cardsToMove.length;
    let numColumns = prompt(`Você agrupou ${numCards} cartas. Quantas colunas você deseja no grid? (Digite apenas o número, caso contrário usaremos todas as ${numCards} cartas!)  `);

    // Se o jogador não digitar nada ou fornecer um valor inválido, usar numCards como padrão
    numColumns = (numColumns && !isNaN(numColumns) && numColumns > 0) 
        ? parseInt(numColumns, 10) 
        : numCards;

    // Perguntar ao jogador qual valor de spacing deseja usar
    let spacing = prompt("Qual valor de espaçamento você deseja entre as cartas? (Digite apenas o número, o valor padrão é 4)");

    // Usar 4 como valor padrão se o jogador não fornecer um valor
    spacing = (spacing && !isNaN(spacing) && spacing > 0) 
        ? parseInt(spacing, 10) 
        : 4;

    // Encontrar o contêiner da mesa
    const gridContainer = document.querySelector('#table-area');
    gridContainer.style.position = 'relative';

    // 👉 NOVA LÓGICA DE GRID: Dispensa as compensações manuais (compensacaoX/Y e zoomLevel)!
    // O passo lógico considera o tamanho visual da carta (tamanho real * escala) + o espaçamento.
    const passoX = (selectedWidth * selectedScale) + spacing;
    const passoY = (selectedHeight * selectedScale) + spacing;

    // A origem do grid será exatamente onde a carta principal está no tabuleiro.
    const baseLeft = selectedLeft;
    const baseTop = selectedTop;

    function fecharTodosPopups() {
        // Procurar todos os popups na página
        const popups = document.querySelectorAll('.popup, .modal, #grouping-popup');

        // Iterar sobre cada popup e esconder
        popups.forEach(popup => {
            popup.style.display = 'none';
        });
        console.log('Todos os popups foram fechados.');
    }

    // Chamar a função para fechar todos os popups
    fecharTodosPopups();

    // Ordenar as cartas pela ordem do z-index (do menor para o maior)
    cardsToMove.sort((a, b) => {
        const zIndexA = parseInt(window.getComputedStyle(a).zIndex) || 0;
        const zIndexB = parseInt(window.getComputedStyle(b).zIndex) || 0;
        return zIndexA - zIndexB; 
    });

    // Reposicionar as cartas no grid
    cardsToMove.forEach((card, index) => {
        // Calcula a linha e a coluna da carta no grid
        const row = Math.floor(index / numColumns); // Linha
        const column = index % numColumns; // Coluna

        // Calcular a posição final usando apenas a matemática do tabuleiro lógico
        const xPosition = baseLeft + (column * passoX);
        const yPosition = baseTop + (row * passoY);

        // Fecha o popup de opções (se necessário)
        closeCardOptions();

        // Atualizar a posição da carta no DOM
        card.style.position = 'absolute';
        card.style.left = `${xPosition}px`;
        card.style.top = `${yPosition}px`;

        // Coloca a carta dentro do contêiner da mesa, caso ainda não tenha sido adicionada
        if (!gridContainer.contains(card)) {
            gridContainer.appendChild(card);
        }
    });
}







//_________________________________________________________

//função para virar a carta horizontalmente
function rotateCardHorizontally() {
    if (!selectedCard) {
       // alert("Nenhuma carta selecionada!");
                    mostrarToast("Nenhuma Carta selecionada!", "warning");

        return;
    }

    const currentTransform = selectedCard.style.transform || "rotateY(0deg)";
    const newAngle = currentTransform.includes("rotateY(180deg)") ? "rotateY(0deg)" : "rotateY(180deg)";

    selectedCard.style.transition = "transform 0.6s";
    selectedCard.style.transform = newAngle;
    
    // NOVA LINHA: Atualiza o minimapa após soltar o grupo de cartas
        solicitarAtualizacaoMinimapa();
}






//________________________________________________________

//função para alterar dinamicamente a cor de uma imagem!
function toggleColorSlider() {
    const container = document.getElementById("color-slider-container");
    container.style.display = container.style.display === "none" ? "block" : "none";
}

function applyHueToCard(hue) {
    if (!selectedCard) {
       // alert("Nenhuma carta selecionada!");
                   mostrarToast("Nenhuma Carta selecionada!", "warning");

        return;
    }
    selectedCard.style.filter = `hue-rotate(${hue}deg)`;
}









//_____________________________________________________________


        
     function bringNoteToFront(note) {
    if (!note || note.isLocked) return;

    const tableArea = document.getElementById('table-area');
    const allNotes = Array.from(tableArea.querySelectorAll('.note'));
    const maxZ = Math.max(...allNotes.map(n => parseInt(n.style.zIndex) || 0));

    note.style.zIndex = maxZ + 1;

    // Depois reorganiza para não passar das cartas fixas
    ensureFixedCardsOnTop();
}



        
        
        
        



// A variável isEditingMode não é mais necessária para o funcionamento, 
// pois agora as ações estão fisicamente separadas, mas mantive a declaração para não quebrar outros scripts.
let isEditingMode = false; 
let selectedNote = null; 

// Função para criar uma nova nota de anotação INTERNA atraves do botão CRIAR NOTAS
function createNote() {
    const tableArea = document.getElementById('table-area');
    const tableWrapper = document.getElementById('table-wrapper');
    const currentZoom = typeof zoomLevel !== 'undefined' ? zoomLevel : 1;
    
    // 1. Criar o Container principal da nota
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note');
    noteContainer.isLocked = false;
    
    // 2. Criar a área de texto (textArea)
    const textArea = document.createElement('div');
    textArea.classList.add('note-text-area');
    textArea.contentEditable = "true";
    textArea.spellcheck = false;
    
    textArea.addEventListener('focus', function() {
        if (this.innerText === "Clique para digitar...") {
            this.innerText = "";
            this.style.color = "black";
        }
    });

    textArea.addEventListener('blur', function() {
        if (this.innerText.trim() === "") {
            this.innerText = "Clique para digitar...";
            this.style.color = "rgba(0, 0, 0, 0.5)";
        }
    });

    textArea.addEventListener('input', function() {
        this.style.height = 'auto'; 
        this.style.height = (this.scrollHeight) + 'px'; 

        if (noteContainer.scrollHeight > noteContainer.clientHeight + 2) {
            noteContainer.style.height = 'auto';
        }
    });

    // 3. Criar a barra de arraste interna
    const dragHandle = document.createElement('div');
    dragHandle.classList.add('note-drag-handle');
    dragHandle.innerText = '⋮⋮⋮ Mover ⋮⋮⋮';

    // =========================================================================
    // 🚩 4. CRIAR E CONFIGURAR A BANDEIRA (FIXA NA ESQUERDA PARA EVITAR DESLOCAMENTO)
    // =========================================================================
    const bandeira = document.createElement('div');
    bandeira.className = 'nota-bandeira';
    bandeira.innerHTML = '🚩';
    
    Object.assign(bandeira.style, {
        position: 'absolute',
        top: '-38px',         // Mais alta em relação ao topo da nota
        left: '10px',         // Fixada à esquerda para estabilidade total
        transform: 'none',    // Sem translação
        cursor: 'pointer',
        fontSize: '20px',     
      //  backgroundColor: 'transparent', // Fundo transparente
          backgroundColor: 'yellow', // Fundo amarelo

        border: 'none',                 // Sem borda
        boxShadow: 'none',              // Sem sombra de caixa
        textShadow: '0 1px 3px rgba(0,0,0,0.4)', // Sombra suave no emoji para legibilidade
        textAlign: 'center',
        userSelect: 'none',
        pointerEvents: 'auto',
        zIndex: '20',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px 4px'
    });




    function handleBandeiraToggle(e) {
        e.stopPropagation(); // Evita propagar para a mesa

        const isHidden = noteContainer.classList.toggle('nota-oculta');
        
        if (isHidden) {
            // Salva o estado atual e fixa a largura exata antes de ocultar
            noteContainer.dataset.savedBg = noteContainer.style.backgroundColor;
            const currentWidth = noteContainer.offsetWidth + 'px';
            noteContainer.dataset.savedWidth = currentWidth;
            noteContainer.dataset.savedHeight = noteContainer.style.height;

            // Esconde texto e barra de arraste
            textArea.style.display = 'none';
            dragHandle.style.display = 'none';
            
            noteContainer.style.resize = 'none';
            noteContainer.style.border = 'none';
            noteContainer.style.backgroundColor = 'transparent';
            noteContainer.style.boxShadow = 'none';
            
            // Mantém a largura exata travada
            noteContainer.style.minWidth = currentWidth;
            noteContainer.style.width = currentWidth;
            noteContainer.style.minHeight = '0';
            noteContainer.style.height = '0';

            // Realça um pouco mais a sombra da bandeira quando minimizada
            bandeira.style.textShadow = '0 2px 6px rgba(0,0,0,0.7)';
        } else {
            // Restaura o visual completo da nota
            textArea.style.display = 'flex';
            dragHandle.style.display = 'block';
            
            noteContainer.style.resize = 'both';
            noteContainer.style.border = '1px solid #ccc';
            noteContainer.style.backgroundColor = noteContainer.dataset.savedBg || 'rgba(255, 255, 0, 0.1)';
            noteContainer.style.boxShadow = '2px 2px 10px rgba(0,0,0,0.3)';
            noteContainer.style.minWidth = '200px';
            noteContainer.style.minHeight = '100px';
            noteContainer.style.width = noteContainer.dataset.savedWidth || 'auto';
            noteContainer.style.height = noteContainer.dataset.savedHeight || 'auto';

            bandeira.style.textShadow = '0 1px 3px rgba(0,0,0,0.4)';
        }
    }

    // Clique ou toque simples na bandeira alterna entre mostrar/ocultar
    bandeira.addEventListener('click', handleBandeiraToggle);
    bandeira.addEventListener('touchstart', (e) => {
        e.stopPropagation();
    }, { passive: true });
    // =========================================================================

    // 5. Estilos do Container Principal
    Object.assign(noteContainer.style, {
        position: 'absolute',
        boxSizing: 'border-box', // Impede variação de tamanho ao remover/adicionar bordas
        backgroundColor: 'rgba(255, 255, 0, 0.1)',
        borderRadius: '5px',
        border: '1px solid #ccc',
        zIndex: 1000000000,
        display: 'flex',
        flexDirection: 'column',
        minWidth: '200px',
        minHeight: '100px',
        height: 'auto',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
        resize: 'both',      
        overflow: 'visible',   // ESSENCIAL: Permite que a bandeira fique para fora sem ser cortada!
        pointerEvents: 'auto' 
    });

    // Estilos do textArea
    Object.assign(textArea.style, {
        padding: '10px',
        flex: '1',
        height: 'auto',
        overflow: 'hidden',   
        outline: 'none',
        color: "rgba(0, 0, 0, 0.5)"
    });
    textArea.innerText = "Clique para digitar...";

    // Estilos do dragHandle
    Object.assign(dragHandle.style, {
        height: '24px',
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        cursor: 'move',
        textAlign: 'center',
        lineHeight: '24px',
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.6)',
        userSelect: 'none'
    });

    // 6. Montagem
    noteContainer.appendChild(bandeira); 
    noteContainer.appendChild(dragHandle);
    noteContainer.appendChild(textArea);
    
    // Posicionamento inicial na tela
    const visibleCenterX = (tableWrapper.scrollLeft + tableWrapper.clientWidth / 2) / currentZoom;
    const visibleCenterY = (tableWrapper.scrollTop + tableWrapper.clientHeight / 2) / currentZoom;
    noteContainer.style.left = `${visibleCenterX - 100}px`;
    noteContainer.style.top = `${visibleCenterY - 75}px`;

    tableArea.appendChild(noteContainer);
   
    noteContainer.addEventListener('mousedown', (e) => {
        e.stopPropagation(); 
    });

    noteContainer.addEventListener('touchstart', (e) => {
        e.stopPropagation(); 
    }, { passive: false });

    // 7. Ativar funcionalidades
    addDragFunctionality(noteContainer);
    addNoteEvents(noteContainer);
    
    noteContainer.dispatchEvent(new MouseEvent('click'));
}

function selectNote(note) {
    if (selectedNote) {
        selectedNote.classList.remove('selected');
    }
    selectedNote = note;
    selectedNote.classList.add('selected');
}

function deleteSelectedNote() {
    if (selectedNote) {
        selectedNote.remove();
        selectedNote = null;
    }
}

function addDragFunctionality(element) {
    let startX, startY;
    let isDragging = false;

    // Se a nota estiver oculta, arrasta pela própria bandeira. Se estiver aberta, arrasta pela barra interna.
    const dragHandle = (element.classList.contains('nota-oculta')) ? element.querySelector('.nota-bandeira') : (element.querySelector('.note-drag-handle') || element);

    dragHandle.addEventListener('mousedown', (event) => {
        if (element.isLocked) return;
        if (typeof bringNoteToFront === 'function') bringNoteToFront(element);

        const existingPopup = document.querySelector('.popup');
        if (existingPopup) existingPopup.remove();

        event.preventDefault(); 
        event.stopPropagation();

        const rect = element.getBoundingClientRect();
        startX = event.clientX - rect.left;
        startY = event.clientY - rect.top;
        isDragging = true;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        if (typeof startAutoScroll === 'function') startAutoScroll();
    });

    dragHandle.addEventListener('touchstart', (event) => {
        if (element.isLocked) return;
        if (typeof bringNoteToFront === 'function') bringNoteToFront(element);

        const existingPopup = document.querySelector('.popup');
        if (existingPopup) existingPopup.remove();

        event.preventDefault(); 
        event.stopPropagation();

        const touch = event.touches[0];
        const rect = element.getBoundingClientRect();
        startX = touch.clientX - rect.left;
        startY = touch.clientY - rect.top;
        isDragging = true;

        document.addEventListener('touchmove', onTouchMove, { passive: false });
        document.addEventListener('touchend', onTouchEnd);

        if (typeof startAutoScroll === 'function') startAutoScroll();
    }, { passive: false });

    function onMouseMove(event) {
        if (!isDragging) return;
        
        const tableArea = document.getElementById('table-area');
        const tableRect = tableArea.getBoundingClientRect();
        const currentZoom = typeof zoomLevel !== 'undefined' ? zoomLevel : 1;
        const zoomCompensation = (1 / currentZoom) * 4800;

        let newLeft = (event.clientX - tableRect.left - startX) / currentZoom;
        let newTop = (event.clientY - tableRect.top - startY) / currentZoom;

        const maxLeft = (tableRect.width - element.offsetWidth) / currentZoom + zoomCompensation;
        const maxTop = (tableRect.height - element.offsetHeight) / currentZoom + zoomCompensation;

        element.style.left = `${Math.min(Math.max(newLeft, 0), maxLeft)}px`;
        element.style.top = `${Math.min(Math.max(newTop, 0), maxTop)}px`;

        if (typeof handleAutoScroll === 'function') handleAutoScroll(event.clientX, event.clientY);
    }

    function onTouchMove(event) {
        if (!isDragging) return;
        event.preventDefault(); 
        
        const touch = event.touches[0];
        const tableArea = document.getElementById('table-area');
        const tableRect = tableArea.getBoundingClientRect();
        const currentZoom = typeof zoomLevel !== 'undefined' ? zoomLevel : 1;
        const zoomCompensation = (1 / currentZoom) * 4800;

        let newLeft = (touch.clientX - tableRect.left - startX) / currentZoom;
        let newTop = (touch.clientY - tableRect.top - startY) / currentZoom;

        const maxLeft = (tableRect.width - element.offsetWidth) / currentZoom + zoomCompensation;
        const maxTop = (tableRect.height - element.offsetHeight) / currentZoom + zoomCompensation;

        element.style.left = `${Math.min(Math.max(newLeft, 0), maxLeft)}px`;
        element.style.top = `${Math.min(Math.max(newTop, 0), maxTop)}px`;

        if (typeof handleAutoScroll === 'function') handleAutoScroll(touch.clientX, touch.clientY);
    }

    function onMouseUp() {
        if (!isDragging) return;
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        if (typeof debouncedSaveState === 'function') debouncedSaveState();
        if (typeof stopAutoScroll === 'function') stopAutoScroll();
    }

    function onTouchEnd() {
        if (!isDragging) return;
        isDragging = false;
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
        if (typeof debouncedSaveState === 'function') debouncedSaveState();
        if (typeof stopAutoScroll === 'function') stopAutoScroll();
    }
}

function addNoteEvents(note) {
    if (typeof deselectCard === 'function') {
        note.addEventListener('click', deselectCard);
        note.addEventListener('touchstart', deselectCard);
    }

    note.addEventListener('click', (event) => {
        if (note.classList.contains('nota-oculta')) return;

        event.stopPropagation();
        
        if (typeof bringNoteToFront === 'function') bringNoteToFront(note);
        if (typeof showPopup === 'function') showPopup(note);
    });

    note.addEventListener('touchstart', (event) => {
        if (note.classList.contains('nota-oculta')) return;

        if (typeof bringNoteToFront === 'function') bringNoteToFront(note);
        if (typeof showPopup === 'function') showPopup(note);
    }, { passive: false });
}

// POPUP das opções das notas [BOTÃO CRIAR NOTAS]
function showPopup(note) {
    const existingPopup = document.querySelector('.popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    const popup = document.createElement('div');
    popup.classList.add('popup');
    
    popup.style.position = 'fixed';
    popup.style.bottom = '20px';
    popup.style.right = '20px';
    popup.style.left = 'auto';
    popup.style.top = 'auto';
    
    popup.style.backgroundColor = 'white';
    popup.style.border = '1px solid #444';
    popup.style.borderRadius = '8px';
    popup.style.padding = '15px';
    popup.style.boxShadow = '-5px -5px 15px rgba(0,0,0,0.3)';
    popup.style.zIndex = 1000000000000001;
    popup.style.textAlign = 'center';
    popup.style.minWidth = '250px';

    const deleteNoteBtn = document.createElement('button');
    deleteNoteBtn.id = 'delete-note-btn';
    deleteNoteBtn.innerText = 'Apagar Nota';
    deleteNoteBtn.addEventListener('click', () => {
        const confirmDelete = window.confirm('Tem certeza de que deseja apagar esta nota?');
        if (confirmDelete) {
            note.remove();
            popup.remove();
        }
    });

    const lockNoteBtn = document.createElement('button');
    lockNoteBtn.id = 'lock-note-btn';
    lockNoteBtn.innerText = note.isLocked ? 'Destravar' : 'Travar';
    lockNoteBtn.addEventListener('click', () => {
        note.isLocked = !note.isLocked;
        note.contentEditable = note.isLocked ? "false" : "true";
        note.style.cursor = note.isLocked ? "not-allowed" : "move";
        if (note.isLocked) {
            note.title = "Nota Travada!";
            note.style.border = "2px dashed rgba(0, 0, 0, 0.3)";
            note.style.pointerEvents = "none"; 
            note.querySelector('.note-drag-handle').style.pointerEvents = "auto";
        } else {
            note.title = "";
            note.style.border = "1px solid #ccc";
            note.style.pointerEvents = "auto";
        }
        lockNoteBtn.innerText = note.isLocked ? 'Destravar' : 'Travar';
    });

    const toggleSolidBtn = document.createElement('button');
    toggleSolidBtn.id = 'toggle-solid-btn';
    
    const isSolid = note.dataset.isSolid === 'true';
    toggleSolidBtn.innerText = isSolid ? 'Sólida: ON' : 'Sólida: OFF';
    
    toggleSolidBtn.addEventListener('click', () => {
        const currentlySolid = note.dataset.isSolid === 'true';
        const newSolidState = !currentlySolid;
        
        note.dataset.isSolid = newSolidState;
        toggleSolidBtn.innerText = newSolidState ? 'Sólida: ON' : 'Sólida: OFF';
        
        const bgColor = note.style.backgroundColor || 'rgba(255, 255, 0, 0.1)';
        const newAlpha = newSolidState ? '0.99' : '0.1'; 
        const newBg = bgColor.replace(/rgba?\((\d+,\s*\d+,\s*\d+)(?:,\s*[\d\.]+)?\)/, `rgba($1, ${newAlpha})`);
        
        note.style.backgroundColor = newBg;
        note.dataset.savedBg = newBg;
    });

    const mainButtonsDiv = document.createElement('div');
    mainButtonsDiv.style.marginBottom = '10px';
    mainButtonsDiv.appendChild(deleteNoteBtn);
    mainButtonsDiv.appendChild(lockNoteBtn);
    mainButtonsDiv.appendChild(toggleSolidBtn);

    const colorButtonsDiv = document.createElement('div');
    colorButtonsDiv.style.marginTop = '10px';

    const colorOptions = [
        { name: 'red', rgba: 'rgba(255, 0, 0, 0.1)' },
        { name: 'green', rgba: 'rgba(0, 128, 0, 0.1)' },
        { name: 'blue', rgba: 'rgba(0, 0, 255, 0.1)' },
        { name: 'yellow', rgba: 'rgba(255, 255, 0, 0.1)' },
        { name: 'grey', rgba: 'rgba(128, 128, 128, 0.1)' }
    ];

    colorOptions.forEach(color => {
        const colorBtn = document.createElement('button');
        colorBtn.innerText = `Cor: ${color.name}`;
        colorBtn.style.backgroundColor = color.rgba.replace('0.1', '0.7'); 
        colorBtn.style.color = '#000';
        colorBtn.style.margin = '2px';
        
        colorBtn.addEventListener('click', () => {
            const finalAlpha = note.dataset.isSolid === 'true' ? '0.99' : '0.1';
            const selectedBg = color.rgba.replace('0.1', finalAlpha);
            note.style.backgroundColor = selectedBg;
            note.dataset.savedBg = selectedBg;
        });
        
        colorButtonsDiv.appendChild(colorBtn);
    });

    popup.appendChild(mainButtonsDiv);
    popup.appendChild(colorButtonsDiv);

    const textArea = note.querySelector('.note-text-area');
    const textToolsLabel = document.createElement('p');
    textToolsLabel.innerText = "Configurar Estilo:";
    textToolsLabel.style.margin = "10px 0 10px 0";
    textToolsLabel.style.fontWeight = "bold";
    popup.appendChild(textToolsLabel);

    const toolBar = document.createElement('div');
    toolBar.style.display = 'grid';
    toolBar.style.gridTemplateColumns = 'repeat(3, 1fr)';
    toolBar.style.gap = '8px';
    popup.appendChild(toolBar);

    const applyFormat = (cmd, val = null) => {
        if (textArea) textArea.focus();
        document.execCommand('styleWithCSS', false, true);
        document.execCommand(cmd, false, val);
    };

    const btnB = document.createElement('button');
    btnB.innerText = 'B';
    btnB.style.fontWeight = 'bold';
    btnB.onclick = () => applyFormat('bold');

    const btnI = document.createElement('button');
    btnI.innerText = 'I';
    btnI.style.fontStyle = 'italic';
    btnI.onclick = () => applyFormat('italic');

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        const colorBar = document.createElement('div');
        colorBar.style.display = 'flex';
        colorBar.style.gap = '5px';
        colorBar.style.justifyContent = 'center';
        colorBar.style.alignItems = 'center';
        
        const cores = ['#000000', '#FF0000', '#0000FF', '#008000', '#800080', '#FFA500'];
        cores.forEach(cor => {
            const btnCor = document.createElement('button');
            btnCor.style.width = '25px';
            btnCor.style.height = '25px';
            btnCor.style.backgroundColor = cor;
            btnCor.style.border = '1px solid #999';
            btnCor.style.borderRadius = '50%';
            btnCor.onclick = () => applyFormat('foreColor', cor);
            colorBar.appendChild(btnCor);
        });
        
        toolBar.appendChild(btnB);
        toolBar.appendChild(btnI);
        toolBar.appendChild(colorBar);
    } else {
        const textColorInput = document.createElement('input');
        textColorInput.type = 'color';
        textColorInput.style.height = '35px';
        textColorInput.style.width = '100%';
        textColorInput.oninput = (e) => applyFormat('foreColor', e.target.value);
        
        toolBar.appendChild(btnB);
        toolBar.appendChild(btnI);
        toolBar.appendChild(textColorInput);
    }

    const sizeContainer = document.createElement('div');
    sizeContainer.style.marginTop = '10px';
    sizeContainer.innerHTML = '<span style="font-size:12px;">Tamanho:</span>';
    const sizeSlider = document.createElement('input');
    sizeSlider.type = 'range';
    sizeSlider.min = '1'; sizeSlider.max = '7';
    sizeSlider.value = '3';
    sizeSlider.style.width = '100%';
    sizeSlider.oninput = (e) => applyFormat('fontSize', e.target.value);
    sizeContainer.appendChild(sizeSlider);
    popup.appendChild(sizeContainer);

    document.body.appendChild(popup);
    
    document.addEventListener('click', function closePopup(event) {
        if (!popup.contains(event.target) && event.target !== note) {
            popup.remove();
            document.removeEventListener('click', closePopup);
        }
    });
}

document.getElementById('create-note-btn').addEventListener('click', createNote);
document.getElementById('delete-note-btn').addEventListener('click', deleteSelectedNote);















// __________________________________________________________________________________

//Função em teste para descelecionar uma carta ao clicar numa nota
function deselectCard() {
    if (window.selectedCard) {
        console.log('Desselecionando a carta:', window.selectedCard);

        // Se quiser remover borda ou efeitos visuais:
        window.selectedCard.classList.remove('selected'); 

        // Se houver outras classes visuais, pode removê-las aqui também

        window.selectedCard = null;
    }
}



//_________________________________________________________________________________________________________________


function reativarFuncionalidadesMesa() {

    // 👇 ADICIONE ESTE BLOCO DE LIMPEZA AQUI 👇
    // Caça e destrói caixas de texto que voltaram pelo Undo/Redo
    const textosFantasmas = document.querySelectorAll('.lousa-texto-fantasma');
    textosFantasmas.forEach(fantasma => fantasma.remove());
    lousaInputTexto = null; // Garante que a variável seja resetada
    // 👆 FIM DO BLOCO DE LIMPEZA 👆



    // === RESTAURAÇÃO DA LOUSA NO UNDO/REDO (Mantido conforme seu original) ===
    const canvasAntigo = document.getElementById('lousa-global-overlay');
    let imagemRecuperada = null;

    if (canvasAntigo) {
        imagemRecuperada = canvasAntigo.getAttribute('data-saved-drawing');
        const lousasFantasmas = document.querySelectorAll('#lousa-global-overlay');
        lousasFantasmas.forEach(l => l.remove());
    }

    globalCanvas = null;
    initLousaGlobal();

    if (imagemRecuperada && globalCtx) {
        importarDesenhoLousa(imagemRecuperada);
        globalCanvas.setAttribute('data-saved-drawing', imagemRecuperada);
    }
    
    if (globalCanvas) {
        if (lousaAtiva) {
            globalCanvas.style.pointerEvents = 'auto';
            globalCanvas.style.cursor = 'crosshair';
        } else {
            globalCanvas.style.pointerEvents = 'none';
            globalCanvas.style.cursor = 'default';
        }
    }

    // Reatribuições de sistemas paralelos
    reassignNoteEvents();
    reassignTableEvents();
    ensureFixedCardsOnTop();
    reorganizarZIndexCartas();
    
    if (typeof setupOutsideImageClickListener === "function") setupOutsideImageClickListener();

    // ==========================================
    // REATRIBUIÇÃO DE EVENTOS DAS CARTAS E DADOS
    // ==========================================
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // 1. LIMPEZA ABSOLUTA: Clonar o elemento é a única forma de garantir que o 
        // Undo não traga eventos zumbis ou empilhe novos.
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        card = newCard; 

        card.classList.remove('loading-dice');
        card.classList.remove('flip-animation');

        // Reatribui Arraste e Rotação (Funções globais)
        card.addEventListener('mousedown', onMouseDown);
        card.addEventListener('touchstart', onTouchStart);
        card.addEventListener('contextmenu', rotateCard);
        
        // Clique Simples (Seleção)
        card.addEventListener('click', (e) => {
            if (!isMoved) selectCardOnTable(card);
        });

        // Opções (DblClick)
        card.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            openCardOptions(card);
        });

        // Toque duplo Mobile
        // ✅ Correção definitiva para dois toques (Mobile)
        card.addEventListener('touchend', (e) => {
            // Se houve movimento brusco (isMoved global ou local), cancela a abertura
            if (isMoved) return;

            const currentTime = new Date().getTime();
            // O segredo: se carregar um save, o dataset.lastTouch pode estar vazio ou com lixo
            const lastTouchStr = card.getAttribute('data-last-touch');
            const lastTouch = lastTouchStr ? parseInt(lastTouchStr, 10) : 0;
            
            const timeSinceLastTouch = currentTime - lastTouch;

            // Se o toque anterior foi há menos de 300ms, abre as opções
            if (timeSinceLastTouch < 300 && timeSinceLastTouch > 30) {
                // Limpa para evitar disparos triplos
                card.setAttribute('data-last-touch', '0');
                
                if (typeof openCardOptions === 'function') {
                    openCardOptions(card);
                }
            } else {
                // Se foi um toque simples, apenas registra o tempo atual
                card.setAttribute('data-last-touch', currentTime.toString());
            }
        });

        // LÓGICA ESPECIAL PARA DADOS
        const deckNumber = parseInt(card.getAttribute('data-deck'), 10);
        const allowedDecks = [16, 17, 30, 31, 32, 33, 34, 41, 40, 42, 45, 46, 47, 61, 67];

        if (allowedDecks.includes(deckNumber)) {
            let singleClickTimer = null;
            const doubleClickThreshold = 250;
            let startX = 0, startY = 0;
            let tempoInicioClique = 0;
            let localIsMoving = false;

            // MOUSE
            card.addEventListener('mousedown', (e) => {
                startX = e.clientX;
                startY = e.clientY;
                localIsMoving = false;
                tempoInicioClique = Date.now();
            });

            // Captura movimento para travar a rolagem se arrastar
            card.addEventListener('mousemove', (e) => {
                if (startX === 0) return;
                const dist = Math.sqrt(Math.pow(e.clientX - startX, 2) + Math.pow(e.clientY - startY, 2));
                if (dist > 7) localIsMoving = true; 
            });

            card.addEventListener('mouseup', (e) => {
                const duracao = Date.now() - tempoInicioClique;
                // Se demorou demais (clique longo) ou se moveu o mouse, não rola
                if (duracao > 350 || localIsMoving || isMoved) {
                    startX = 0; 
                    return;
                }

                if (!singleClickTimer) {
                    singleClickTimer = setTimeout(() => {
                        rollDice(card);
                        singleClickTimer = null;
                    }, doubleClickThreshold);
                } else {
                    clearTimeout(singleClickTimer);
                    singleClickTimer = null;
                }
                startX = 0;
            });

            // TOUCH (Celular)
            card.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                localIsMoving = false;
                tempoInicioClique = Date.now();
            });

            card.addEventListener('touchmove', (e) => {
                const dist = Math.sqrt(Math.pow(e.touches[0].clientX - startX, 2) + Math.pow(e.touches[0].clientY - startY, 2));
                if (dist > 10) localIsMoving = true;
            });

            card.addEventListener('touchend', (e) => {
                const duracao = Date.now() - tempoInicioClique;
                if (duracao > 350 || localIsMoving || isMoved) return;

                if (!singleClickTimer) {
                    singleClickTimer = setTimeout(() => {
                        rollDice(card);
                        singleClickTimer = null;
                    }, doubleClickThreshold);
                } else {
                    clearTimeout(singleClickTimer);
                    singleClickTimer = null;
                }
            });
        }
    });

    // 👇 CHAVE DE ATIVAÇÃO DO TECLADO ADICIONADA AQUI 👇
    // Executa após todas as cartas e elementos da mesa terem sido restaurados
    if (typeof window.configurarTecladoMesa === 'function') {
        window.configurarTecladoMesa();
    }
}








//______________________________________________________//



// --- VIGIA DE AUTO-CURA (RE-DOWNLOAD AUTOMÁTICO) ---
setInterval(() => {
    // Busca todas as imagens que estão com a classe de blur
    const cartasTravadas = document.querySelectorAll('img.loading-dice');

    cartasTravadas.forEach(img => {
        // Se a imagem ainda está com blur, mas o navegador diz que NÃO completou o download
        // ou se já passou muito tempo (neste caso, o setInterval cuida do tempo)
        
        console.log("🛠️ Detectada imagem travada no blur. Forçando re-download...");

        const srcBase = img.getAttribute('src').split('?')[0]; // Pega o caminho limpo da imagem
        const novoTimestamp = new Date().getTime();
        
        // Forçamos um NOVO endereço. O navegador é obrigado a baixar de novo!
        img.src = `${srcBase}?retry=${novoTimestamp}`;

        // Verificação extra: Se após o novo src ela carregar, o onload padrão (que já existe no seu código) 
        // ou este pequeno gatilho abaixo vai limpar o blur.
        img.onload = () => {
            img.classList.remove('loading-dice');
            console.log("✅ Imagem recuperada com sucesso!");
        };
    });
}, 5000); // Varre a mesa a cada 5 segundos


//________________________________________________________________________________________

// 1. Sincroniza o visual do botão com o estado REAL da carta selecionada
function atualizarEstadoBotaoRastreio(cartaReferencia) {
    if (!cartaReferencia) return;
    
    const btn = cartaReferencia.classList.contains('deck1menor-dado')
        ? document.getElementById('track-btn-2')
        : document.getElementById('track-btn');

    if (!btn) return;

    // Normaliza: se não tem o atributo, considera falso
    let isTracked = cartaReferencia.getAttribute('data-tracked') === 'true';

    // Atualiza o botão
    btn.innerText = isTracked ? 'Rastrear: ON' : 'Rastrear: OFF';
    btn.style.backgroundColor = isTracked ? 'darkred' : '';
    btn.style.color = isTracked ? 'white' : '';
}

//________________________________________________________________________________________



// TRECCHOS PARA O RASTREIO DE ALGUMAS CARTAS COLOCANDO PASSINHOS A CADA 5S
// --- LIGA / DESLIGA O RASTREIO ---
function toggleCardTracking() {
    if (!currentElement) return;

    // Lê o estado atual. Se for null, considera false.
    let attr = currentElement.getAttribute('data-tracked');
    if (attr === null) attr = 'false';

    // Se está falso, vira true. Se está true, vira falso.
    const novoEstado = (attr === 'false'); 

    // Aplica na carta
    currentElement.setAttribute('data-tracked', novoEstado ? 'true' : 'false');
    
    // Atualiza o botão imediatamente
    atualizarEstadoBotaoRastreio(currentElement);

    if (novoEstado) {
        // --- LIGANDO ---
        mostrarToast("Rastreio ON!", "success");
        if (!currentElement.id) currentElement.id = 'rastreada-' + Date.now();
        ultimaPosicaoX = parseFloat(currentElement.style.left) || 0;
        ultimaPosicaoY = parseFloat(currentElement.style.top) || 0;
    } else {
        // --- PAUSANDO ---
        mostrarToast("Rastreio Pausado!", "warning");
        const id = currentElement.id;
        // Mata o timer imediatamente!
        if (id && typeof rastreioTimers !== 'undefined' && rastreioTimers.has(id)) {
            clearTimeout(rastreioTimers.get(id));
            rastreioTimers.delete(id);
        }
    }
}

// --- TIMER DE 5 SEGUNDOS (Com trava de segurança) ---
function iniciarTimerRastreio(carta) {
    // 🛑 SE NÃO ESTIVER ON, MORRE AQUI
    if (!carta || carta.getAttribute('data-tracked') !== 'true') return;

    const cardId = carta.id;
    if (!cardId) return;
    
    // Limpa timers anteriores para não acumular
    if (typeof rastreioTimers !== 'undefined' && rastreioTimers.has(cardId)) {
        clearTimeout(rastreioTimers.get(cardId));
    }

    const posX = carta.style.left;
    const posY = carta.style.top;

    const timer = setTimeout(() => {
        // 🛑 ANTES DE EXECUTAR, VERIFICA DE NOVO SE AINDA ESTÁ ON
        if (carta.getAttribute('data-tracked') === 'true' && carta.parentNode && carta.style.left === posX && carta.style.top === posY) {
            executarRastreio(carta);
        }
    }, TEMPO_PARA_MARCAR); // Usa a sua variável de 2000ms/5000ms

    if (typeof rastreioTimers !== 'undefined') rastreioTimers.set(cardId, timer);
}

// --- CRIADOR DO RASTRO VISUAL (Com trava de segurança) ---
function executarRastreio(cartaReferencia) {
    // 🛑 A TRAVA FINAL ABSOLUTA
    if (cartaReferencia.getAttribute('data-tracked') !== 'true') return;
    if (cartaReferencia.classList.contains('rastreador-marcador')) return;

    const paletaCores = [
        'rgba(255, 0, 0, 0.4)', 'rgba(0, 255, 255, 0.4)', 'rgba(0, 255, 0, 0.4)',
        'rgba(255, 255, 0, 0.4)', 'rgba(255, 0, 255, 0.4)', 'rgba(0, 100, 255, 0.4)', 'rgba(255, 165, 0, 0.4)'
    ];

    let corDaCarta = cartaReferencia.getAttribute('data-rastro-color');
    if (!corDaCarta) {
        corDaCarta = paletaCores[window.rastroColorIndex % paletaCores.length];
        cartaReferencia.setAttribute('data-rastro-color', corDaCarta);
        window.rastroColorIndex++; 
    }

    let atualX = parseFloat(cartaReferencia.style.left) || 0;
    let atualY = parseFloat(cartaReferencia.style.top) || 0;

    if (cartaReferencia.getAttribute('data-is-clone') === 'true') {
        atualX -= 5; 
        atualY -= 19; 
    }

    const larguraReal = cartaReferencia.offsetWidth + 'px';
    const alturaReal = cartaReferencia.offsetHeight + 'px';
    const scaleOriginal = cartaReferencia.getAttribute('data-scale') || 1;

    if (ultimaPosicaoX === 0 && ultimaPosicaoY === 0) {
        ultimaPosicaoX = atualX;
        ultimaPosicaoY = atualY;
    }

    const dx = atualX - ultimaPosicaoX;
    const dy = atualY - ultimaPosicaoY;

    // Só desenha se moveu de verdade
    if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;

    const markerSrc = `deck${DECK_DO_MARCADOR}/card1.jpeg`;
    placeCardOnTable(DECK_DO_MARCADOR, markerSrc);

    const tableArea = document.getElementById('table-area');
    const todasCartas = tableArea.querySelectorAll('.card');
    const novoMarcador = todasCartas[todasCartas.length - 1];

    if (novoMarcador) {
        novoMarcador.classList.add('rastreador-marcador');
        novoMarcador.style.width = larguraReal;
        novoMarcador.style.height = alturaReal;
        novoMarcador.style.pointerEvents = 'none'; 
        novoMarcador.style.boxShadow = 'none';
        novoMarcador.style.outline = 'none';
        novoMarcador.classList.remove('selected', 'fixed-on-top');
        novoMarcador.style.zIndex = "15000"; 
        novoMarcador.style.setProperty('opacity', '0.4', 'important');
        
        novoMarcador.style.left = atualX + 'px';
        novoMarcador.style.top = atualY + 'px';

        let angulo = (dx === 0 && dy === 0) ? 0 : Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        novoMarcador.style.transformOrigin = 'center center';
        novoMarcador.style.setProperty('transform', `rotate(${angulo}deg) scale(${scaleOriginal})`, 'important');
        novoMarcador.setAttribute('data-scale', scaleOriginal);

        ultimaPosicaoX = atualX;
        ultimaPosicaoY = atualY;

        let rastroCount = parseInt(cartaReferencia.getAttribute('data-rastro-count')) || 0;
        rastroCount++;
        cartaReferencia.setAttribute('data-rastro-count', rastroCount);

        const numeroRastro = document.createElement('div');
        numeroRastro.classList.add('texto-rastro');
        numeroRastro.innerText = rastroCount;
        
        Object.assign(numeroRastro.style, {
            position: 'absolute', left: atualX + 'px', top: atualY + 'px',
            width: larguraReal, height: alturaReal, display: 'flex',
            alignItems: 'center', justifyContent: 'center', color: corDaCarta,
            fontWeight: '900', fontSize: '13px', fontFamily: 'Arial, sans-serif',
            pointerEvents: 'none', zIndex: '15001', transformOrigin: 'center center',
            transform: `rotate(0deg) scale(${scaleOriginal})`
        });

        novoMarcador.parentNode.appendChild(numeroRastro);

        setTimeout(() => {
            cartaReferencia.style.zIndex = topZIndex++;
            bloqueioMenuRastreio = true;
            selectCardOnTable(cartaReferencia);
            setTimeout(() => { bloqueioMenuRastreio = false; }, 100);
            if (novoMarcador) {
                novoMarcador.classList.remove('selected');
                novoMarcador.style.boxShadow = 'none';
            }
        }, 300);
    }
}

//______________________________________________________//




// Função para remover todos os rastros (Deck 73) da mesa
function limparTodosOsRastreios() {
    // 1. Janela de confirmação
    const confirmacao = confirm("Você tem certeza que deseja limpar todos os rastreios da mesa? Esta ação não pode ser desfeita.");

    // Se o usuário clicar em "Cancelar", a função para aqui mesmo
    if (!confirmacao) {
        return;
    }

    const cartasNaMesa = document.querySelectorAll("#table-area .card");
    let contadorRemovido = 0;

    // Identificador do deck de rastreio
    const ID_DO_MARCADOR = 73; 

    cartasNaMesa.forEach(carta => {
        // Zera o contador de todas as cartas
        carta.setAttribute('data-rastro-count', '0');
        
        // Remove os marcadores visuais
        const deckId = parseInt(carta.getAttribute("data-deck"), 10);
        
        if (deckId === ID_DO_MARCADOR) {
            const container = carta.parentNode;
            if (container && container.classList.contains('card-container')) {
                container.remove();
            } else {
                carta.remove();
            }
            contadorRemovido++;
        }
    });

    // Remove os números flutuantes
    document.querySelectorAll('.texto-rastro').forEach(num => num.remove());

    console.log(`[Rastreio] Limpeza concluída: ${contadorRemovido} marcadores removidos.`);
    mostrarToast("Rastreio limpo! O próximo passo começará do 1.", "info");
}




//________________________________________________________________
// ==========================================
// SISTEMA DE LOUSA GLOBAL - BARRA HORIZONTAL FIXA
// ==========================================


function initLousaGlobal() {
    const mesa = document.getElementById('table-area');
    if (!mesa || globalCanvas) return;

    globalCanvas = document.createElement('canvas');
    globalCanvas.id = 'lousa-global-overlay';
    globalCanvas.width = 5000;
    globalCanvas.height = 5000;

    Object.assign(globalCanvas.style, {
        position: 'absolute',
        left: '0', top: '0',
        width: '5000px', height: '5000px',
     //   zIndex: '800', //TESTANDO O VALOR MAIS BAIXO FIXO PARA A LOUSA abaixo das notas e do popup das regras mas acima das cartas em geral!!
     // Antes estava assim: zIndex: '800',
zIndex: '10000', // LOUSA DEFINIDA AQUI
     
        background: 'transparent',
        pointerEvents: 'none',
        touchAction: 'none'
    });

    globalCtx = globalCanvas.getContext('2d');
    mesa.appendChild(globalCanvas);

    setupEventosDesenho();

    // Toque duplo para reabrir ferramentas
    let lastLousaTouch = 0;
    globalCanvas.addEventListener('dblclick', () => { if (lousaAtiva) gerenciarPopupFerramentas(true); });
    globalCanvas.addEventListener('touchstart', (e) => {
        const now = Date.now();
        if (now - lastLousaTouch < 300 && lousaAtiva) gerenciarPopupFerramentas(true);
        lastLousaTouch = now;
    }, { passive: false });
}









function setupEventosDesenho() {
    // --- A CAMADA FANTASMA ---
    let tempCanvas = document.getElementById('lousa-temp-overlay');
    let tempCtx;
    if (!tempCanvas) {
        tempCanvas = document.createElement('canvas');
        tempCanvas.id = 'lousa-temp-overlay';
        tempCanvas.width = 5000;
        tempCanvas.height = 5000;
        Object.assign(tempCanvas.style, {
            position: 'absolute', left: '0', top: '0',
            width: '5000px', height: '5000px',
          //  zIndex: '801',
          // Antes estava assim: zIndex: '801',
zIndex: '10001', // PINCEL TEMPORÁRIO AQUI
            background: 'transparent',
            pointerEvents: 'none',
            opacity: '0.7' 
        });
        const mesa = document.getElementById('table-area');
        if (mesa) mesa.appendChild(tempCanvas);
        tempCtx = tempCanvas.getContext('2d');
    } else {
        tempCtx = tempCanvas.getContext('2d');
    }

    let ultimaPosicao = { x: 0, y: 0 };
    
    // CORREÇÃO 1: Variável presa à janela para não ser apagada no Undo/Redo
    window.usarCamadaTemp = false; 

    const getCoords = (e) => {
        const rect = globalCanvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const zoom = typeof zoomLevel !== 'undefined' ? zoomLevel : 1;
        return {
            x: (clientX - rect.left) / zoom,
            y: (clientY - rect.top) / zoom
        };
    };

    const iniciar = (e) => {
        if (!lousaAtiva) return;
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        
        const pos = getCoords(e);
        ultimaPosicao = pos;

        if (carimboAtual) {
            globalCtx.save();
            globalCtx.globalCompositeOperation = 'source-over';
            globalCtx.globalAlpha = 0.7; 
            globalCtx.fillStyle = corAtual;
            const tamanho = (parseInt(grossuraAtual) || 20) + 20; 
            globalCtx.font = `bold ${tamanho}px Arial`;
            globalCtx.textAlign = 'center';
            globalCtx.textBaseline = 'middle';
            globalCtx.fillText(carimboAtual, pos.x, pos.y);
            globalCtx.restore();

            globalCanvas.setAttribute('data-saved-drawing', exportarDesenhoLousa());
            if (typeof saveState === 'function') saveState();
            return; 
        }

        desenhando = true;
        window.usarCamadaTemp = !modoBorracha;

        if (window.usarCamadaTemp) {
            tempCtx.lineCap = 'round';
            tempCtx.lineJoin = 'round';
            tempCtx.lineWidth = grossuraAtual;
            tempCtx.strokeStyle = corAtual;
            tempCtx.fillStyle = corAtual;
            tempCtx.globalCompositeOperation = 'source-over';

            tempCtx.beginPath();
            tempCtx.arc(pos.x, pos.y, grossuraAtual / 2, 0, Math.PI * 2);
            tempCtx.fill();
        } else {
            globalCtx.lineCap = 'round';
            globalCtx.lineJoin = 'round';
            globalCtx.lineWidth = grossuraAtual;
            globalCtx.globalCompositeOperation = 'destination-out';
            
            // CORREÇÃO 2: Força da borracha em 100% para evitar falhas ao apagar
            globalCtx.globalAlpha = 1.0; 

            globalCtx.beginPath();
            globalCtx.moveTo(pos.x, pos.y);
            globalCtx.lineTo(pos.x, pos.y);
            globalCtx.stroke();
        }
    };

    const desenhar = (e) => {
        if (!desenhando || !lousaAtiva) return;
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();

        const pos = getCoords(e);

        if (window.usarCamadaTemp) {
            tempCtx.beginPath();
            tempCtx.moveTo(ultimaPosicao.x, ultimaPosicao.y);
            tempCtx.lineTo(pos.x, pos.y);
            tempCtx.stroke();
        } else {
            globalCtx.beginPath();
            globalCtx.moveTo(ultimaPosicao.x, ultimaPosicao.y);
            globalCtx.lineTo(pos.x, pos.y);
            globalCtx.stroke();
        }

        ultimaPosicao = pos;
    };

    const parar = () => {
        if (desenhando) {
            desenhando = false;

            if (window.usarCamadaTemp) {
                globalCtx.save();
                globalCtx.globalCompositeOperation = 'source-over';
                globalCtx.globalAlpha = 0.7; 
                globalCtx.drawImage(tempCanvas, 0, 0);
                globalCtx.restore();

                tempCtx.clearRect(0, 0, 5000, 5000);
            } else {
                globalCtx.closePath();
            }

            globalCanvas.setAttribute('data-saved-drawing', exportarDesenhoLousa());
            if (typeof saveState === 'function') saveState();
        }
    };

    // CORREÇÃO 3: Exorcizando o evento "fantasma" antigo antes de colocar o novo!
    if (window._lousaMouseUp) {
        window.removeEventListener('mouseup', window._lousaMouseUp);
    }
    window._lousaMouseUp = parar;

    // Conectando os eventos corretamente
globalCanvas.addEventListener('mousedown', (e) => {
    if (!lousaAtiva) return;

    // --- NOVA TRAVA MÁQUINA DE ESCREVER ---
    if (modoTexto) {
        e.preventDefault();
        e.stopPropagation();

        // Se clicou em outro lugar mas tinha um texto aberto, finaliza ele primeiro
        if (lousaInputTexto) finalizarTextoLousa();

        const pos = getCoords(e);
        iniciarTextoLousa(pos.x, pos.y);
        return; // Sai daqui para não desenhar círculos do pincel
    }
    // --------------------------------------

    // AJUSTE: Só entra no modo régua se NÃO houver carimbo selecionado...
    
    
    
    if (modoRegua && !carimboAtual && !modoBorracha) { 
        e.preventDefault();
        e.stopPropagation();

        // 1. Usa a SUA função para pegar a coordenada exata com o Zoom da mesa
        const pos = getCoords(e); 

        if (ultimoPontoRegua === null) {
            ultimoPontoRegua = { x: pos.x, y: pos.y };
            
            // CONTROLO DE TRANSPARÊNCIA (0.1 invisível até 1.0 sólido)
            globalCtx.globalAlpha = 0.7; 
            
            globalCtx.beginPath();
            globalCtx.arc(pos.x, pos.y, grossuraAtual / 2, 0, Math.PI * 2);
           // --- ADICIONE/VERIFIQUE ESTA LINHA ABAIXO ---
                globalCtx.fillStyle = corAtual;
            globalCtx.fill();
            globalCtx.globalAlpha = 1.0;
        } else {
            // ---> INSIRA ESTAS DUAS LINHAS AQUI <---
            pontosReguaUndo.push({ x: ultimoPontoRegua.x, y: ultimoPontoRegua.y });
            pontosReguaRedo = [];
            // Desenha a linha
            globalCtx.beginPath();
            globalCtx.lineWidth = grossuraAtual;
            globalCtx.strokeStyle = corAtual;
            globalCtx.lineCap = "round";
            
            // CONTROLO DE TRANSPARÊNCIA DA LINHA
            globalCtx.globalAlpha = 0.7; 
                               
            globalCtx.moveTo(ultimoPontoRegua.x, ultimoPontoRegua.y);
            globalCtx.lineTo(pos.x, pos.y);
            globalCtx.stroke();
            globalCtx.globalAlpha = 1.0; // Reset
            
            ultimoPontoRegua = { x: pos.x, y: pos.y };

            // 2. GRAVAÇÃO CORRETA: Tira a foto pro HTML antes de chamar o saveState
            globalCanvas.setAttribute('data-saved-drawing', exportarDesenhoLousa());
            if (typeof saveState === 'function') saveState();
        }
        return;
    }

    // Se a régua estiver desligada (ou se houver carimbo/borracha ativos), usa o pincel original/carimbo
    iniciar(e); 
});

    globalCanvas.addEventListener('mousemove', desenhar);
    window.addEventListener('mouseup', window._lousaMouseUp);

globalCanvas.addEventListener('touchstart', (e) => {
    if (!lousaAtiva) return;
    
    // --- NOVA TRAVA MÁQUINA DE ESCREVER ---
    if (modoTexto) {
        e.preventDefault();
        e.stopPropagation();

        if (lousaInputTexto) finalizarTextoLousa();

        const pos = getCoords(e);
        iniciarTextoLousa(pos.x, pos.y);
        return;
    }
    // --------------------------------------

    // AJUSTE: Só entra na régua se NÃO houver carimbo e NÃO for borracha...
    
    
    
    if (modoRegua && !carimboAtual && !modoBorracha) {
        e.preventDefault();
        e.stopPropagation();
        
        // 1. Pega coordenadas com Zoom
        const pos = getCoords(e);

        if (ultimoPontoRegua === null) {
            ultimoPontoRegua = { x: pos.x, y: pos.y };
            
            // CONTROLO DE TRANSPARÊNCIA NO TOUCH
            globalCtx.globalAlpha = 0.7; 
                               
            globalCtx.beginPath();
            globalCtx.arc(pos.x, pos.y, grossuraAtual / 2, 0, Math.PI * 2);
           // --- ADICIONE/VERIFIQUE ESTA LINHA ABAIXO ---
                globalCtx.fillStyle = corAtual;
            globalCtx.fill();
            globalCtx.globalAlpha = 1.0;
        } else {
            
                       // ---> INSIRA ESTAS DUAS LINHAS AQUI <---
            pontosReguaUndo.push({ x: ultimoPontoRegua.x, y: ultimoPontoRegua.y });
            pontosReguaRedo = [];
            globalCtx.beginPath();
            globalCtx.lineWidth = grossuraAtual;
            globalCtx.strokeStyle = corAtual;
            globalCtx.lineCap = "round";
            
            // CONTROLO DE TRANSPARÊNCIA DA LINHA
            globalCtx.globalAlpha = 0.7; 
            
            globalCtx.moveTo(ultimoPontoRegua.x, ultimoPontoRegua.y);
            globalCtx.lineTo(pos.x, pos.y);
            globalCtx.stroke();
            globalCtx.globalAlpha = 1.0;
            
            ultimoPontoRegua = { x: pos.x, y: pos.y };

            // 2. GRAVAÇÃO CORRETA
            globalCanvas.setAttribute('data-saved-drawing', exportarDesenhoLousa());
            if (typeof saveState === 'function') saveState();
        }
        return;
    }
    
    // Se a régua estiver desligada (ou sobreposta por carimbo/borracha), inicia pincel/carimbo/borracha
    iniciar(e);
}, { passive: false });



    globalCanvas.addEventListener('touchmove', desenhar, { passive: false });
    globalCanvas.addEventListener('touchend', parar, { passive: false });
}













function alternarLousaGlobal() {
    if (!globalCanvas) initLousaGlobal();
    lousaAtiva = !lousaAtiva;

    const btn = document.getElementById('btn-toggle-lousa');
    if (lousaAtiva) {
        globalCanvas.style.pointerEvents = 'auto';
        globalCanvas.style.cursor = 'crosshair';
        if (btn) { 
            btn.innerText = '✏️ LOUSA: ON'; 
            btn.style.backgroundColor = '#ffd700'; 
            btn.style.color = 'black'; 
        }
        gerenciarPopupFerramentas(true);
    } else {
        globalCanvas.style.pointerEvents = 'none';
        if (btn) { 
            btn.innerText = '✏️ ATIVAR LOUSA'; 
            btn.style.backgroundColor = '#222'; 
            btn.style.color = '#ffd700'; 
        }
        gerenciarPopupFerramentas(false);
    }
}














function gerenciarPopupFerramentas(exibir) {



    // 1. PRIMEIRO: Sempre que 'exibir' for true, deselecionamos a carta.
    // Isso deve ficar no topo da função para rodar TODAS as vezes.
    if (exibir) {
        if (typeof deselectCard === 'function') {
            deselectCard();
            console.log("🎨 Lousa aberta: Carta desselecionada.");
        }
    }


// 2. CRIAÇÃO (Roda apenas na primeira vez)
    if (!popupFerramentas && exibir) {  
        popupFerramentas = document.createElement('div');
        popupFerramentas.id = 'lousa-tools-bar';
        
        Object.assign(popupFerramentas.style, {
            position: 'fixed', left: '50%', bottom: '20px', transform: 'translateX(-50%)',
            width: 'min(95vw, 450px)', height: '55px', backgroundColor: 'rgba(0,0,0,0.95)',
            border: '1px solid gold', borderRadius: '25px', zIndex: '1000001',
            display: 'flex', alignItems: 'center', justifyContent: 'space-around',
            padding: '0 15px', boxShadow: '0 0 15px rgba(255, 215, 0, 0.4)', userSelect: 'none'
        });





// 1. MENU DE CARIMBOS (REESTRUTURADO COM CATEGORIAS)
        const stampMenu = document.createElement('div');
        stampMenu.id = 'lousa-stamp-scroll'; 
        
        Object.assign(stampMenu.style, {
            position: 'fixed',
            bottom: '85px', 
            left: '50%',
            transform: 'translateX(-50%)',
            width: '95vw',
            height: '60px',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(5px)',
            border: '1px solid white',
            borderRadius: '10px',
            zIndex: '1000002',
            display: 'none', 
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '10px', // Espaçamento levemente menor para as categorias
            padding: '0 15px',
            boxShadow: '0 -4px 15px rgba(0, 0, 0, 0.5)',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            flexWrap: 'nowrap',
            boxSizing: 'border-box'
        });

        // Esconde a barra de rolagem visualmente
        const styleSheet = document.createElement("style");
        styleSheet.innerText = "#lousa-stamp-scroll::-webkit-scrollbar { display: none; }";
        document.head.appendChild(styleSheet);

        // 🗂️ DICIONÁRIO DE CATEGORIAS
        const categoriasCarimbos = {
            "Símbolos e Texto": [
                'x', '✓', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
                'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 
                'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 
                'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 
                'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', 
                '⬅', '➡', '⬆', '⬇', '↔', '↕', '—', '■', '▲', '◆', '★', '●'
            ],
            "Estados e Marcações": [
                '❌', '⭕', '❓', '❗', '⭐', '❤️', '🎯', '🟢', '🔴', '💤', '👁️', '✨', '💨'
            ],
            "Heróis e Classes": [
                '🧙', '🛡️', '🗡️', '🏹', '⛪', '🎹', '👤', '👣', '⚔️', '🪓', '🥊', '🥷', '🌿'
            ],
            "Natureza e Taverna": [
                '💧', '🌊', '🛶', '🐟', '🏝️', '🔥', '❄️', '☁️', '⛈️', '🌿', '🌳', '🪵',
                '⛺', '🍽️', '🍖', '🍞', '🍺', '🍷'
            ],
            "Cenário e Exploração": [
                '🚪', '🔓', '🗝️', '🪜', '🕸️', '🔦', '🧭', '🗺️', '⚒️', '🕳️', '⛓️', '🏰', '🏛️', '🛌', '🪑'
            ],
            "Inimigos e Monstros": [
                '💀', '👹', '🐲', '🕷️', '🐺', '🐀', '💥', '🩸', '☣️', '🐉', '👻', '🧟', '🦇', '🐍', '👿'
            ],
            "Tesouros e Itens": [
                '📦', '💎', '🧪', '📜', '💰', '👑', '💍', '🔮', '📿', '🎁'
            ]
        };

        // 🔄 FUNÇÃO: Renderiza os botões das categorias principais
        function renderCategorias() {
            stampMenu.innerHTML = ''; // Limpa a barra
            
            Object.keys(categoriasCarimbos).forEach(cat => {
                const btnCat = document.createElement('button');
                btnCat.innerText = `📂 ${cat}`;
       
       btnCat.style.cssText = `
    background: #333; 
    border: 1px solid red; 
    border-radius: 8px; 
    color: white; 
    font-size: 14px; 
    font-weight: bold; 
    cursor: pointer; 
    padding: 8px 16px; 
    
    /* Alterações aqui */
    display: flex;           /* Usar flex simples */
    flex: 0 0 auto;          /* Não crescer nem diminuir, manter tamanho do conteúdo */
    white-space: nowrap;     /* Força o texto em uma linha só */
    align-items: center; 
    justify-content: center;
    transition: background 0.2s;
    height: 40px;            /* Altura fixa ajuda a manter alinhado */
    min-width: fit-content;  /* Garante que ele nunca seja menor que o texto */
`;
                
                btnCat.onmouseover = () => btnCat.style.background = '#555';
                btnCat.onmouseout = () => btnCat.style.background = '#333';

                btnCat.onclick = (e) => {
                    e.stopPropagation();
                    renderEmojis(cat); // Ao clicar, "entra" na pasta
                };
                stampMenu.appendChild(btnCat);
            });
        }

        // 🔄 FUNÇÃO: Renderiza os emojis da categoria escolhida
        function renderEmojis(categoria) {
            stampMenu.innerHTML = ''; // Limpa a barra
            
            // Botão ⬅️ Voltar
            const btnVoltar = document.createElement('button');
            btnVoltar.innerText = '⬅️ Voltar';
            btnVoltar.style.cssText = 'background:darkred; border:1px solid white; border-radius:8px; color:white; font-size:14px; font-weight:bold; cursor:pointer; padding:5px 10px; flex-shrink:0; display:inline-flex; justify-content:center; align-items:center; margin-right:5px;';
            btnVoltar.onclick = (e) => {
                e.stopPropagation();
                renderCategorias(); // Volta para a tela de pastas
            };
            stampMenu.appendChild(btnVoltar);

            // Carrega os emojis
            categoriasCarimbos[categoria].forEach(simbolo => {
                const btnC = document.createElement('button');
                btnC.innerText = simbolo;
                btnC.style.cssText = 'background:#222; border:1px solid #444; border-radius:8px; color:gold; font-size:18px; cursor:pointer; padding:5px 15px; flex-shrink:0; min-width:45px; display:inline-flex; justify-content:center; align-items:center; transition: background 0.2s;';
                
                btnC.onmouseover = () => btnC.style.background = '#444';
                btnC.onmouseout = () => btnC.style.background = '#222';

                btnC.onclick = (e) => {
                    e.stopPropagation();
                    
                    // Lógica original de seleção do carimbo
                    carimboAtual = (carimboAtual === simbolo) ? null : simbolo;
                    modoBorracha = false; 
                    globalCtx.globalCompositeOperation = 'source-over';
                    btnEraser.style.filter = 'grayscale(1)';

                    if (carimboAtual) {
                        grossuraAtual = tamanhoCarimboSalvo;
                        sizeInput.value = tamanhoCarimboSalvo;
                    } else {
                        grossuraAtual = tamanhoPincelSalvo;
                        sizeInput.value = tamanhoPincelSalvo;
                    }
                    
                    btnMainStamp.style.textShadow = carimboAtual ? '0 0 8px white' : 'none';
                    if (typeof atualizarPreview === 'function') atualizarPreview();
                };
                stampMenu.appendChild(btnC);
            });
        }

        // Inicializa a barra mostrando as categorias
        renderCategorias();
        popupFerramentas.appendChild(stampMenu);






        // 2. PALETA DE CORES
        const colorPalette = document.createElement('div');
        colorPalette.style.cssText = 'display:flex; gap:6px; align-items:center;';
        const cores = ['#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff', '#ffff00'];

        cores.forEach(cor => {
            const pastilha = document.createElement('div');
            Object.assign(pastilha.style, {
                width: '16px', height: '16px', backgroundColor: cor, borderRadius: '50%',
                cursor: 'pointer', flexShrink: '0', transition: 'transform 0.1s',
                border: cor.toLowerCase() === corAtual.toLowerCase() ? '2px solid gold' : '1px solid rgba(255,255,255,0.3)'
            });

            pastilha.onclick = () => {
                corAtual = cor;
                colorPalette.querySelectorAll('div').forEach(p => p.style.border = '1px solid rgba(255,255,255,0.3)');
                pastilha.style.border = '2px solid gold';
                if (typeof atualizarPreview === 'function') atualizarPreview();
            };
            colorPalette.appendChild(pastilha);
        });



// 3. CONTROLE DE TAMANHO (SLIDER)
        const sizeInput = document.createElement('input');
        sizeInput.type = 'range'; sizeInput.min = '1'; sizeInput.max = '60'; sizeInput.value = grossuraAtual;
        sizeInput.style.width = '70px';
        
      sizeInput.oninput = (e) => {
            const valor = parseFloat(e.target.value);
            grossuraAtual = valor;

            // Salva na memória correta conforme o que está ativo no momento!
            if (modoBorracha) {
                tamanhoBorrachaSalvo = valor;
            } else if (carimboAtual || (typeof stampMenu !== 'undefined' && stampMenu.style.display === 'flex')) {
                tamanhoCarimboSalvo = valor;
            } else if (modoTexto) {
                tamanhoTextoAtual = valor; // <<< ISOLAMENTO DO TEXTO
            } else if (modoRegua) {
                tamanhoReguaSalvo = valor; // <<< ISOLAMENTO DA RÉGUA
            } else {
                tamanhoPincelSalvo = valor; // <<< ISOLAMENTO DO PINCEL
            }

            if (typeof atualizarPreview === 'function') atualizarPreview();
        };




       // --- 1. CRIAÇÃO DE TODOS OS BOTÕES PRIMEIRO (Para evitar erros de referência) ---

      // --- BOTÕES COM TAMANHO REDUZIDO ---
        
        // PINCEL
        const btnPincel = document.createElement('button');
        btnPincel.innerHTML = '🖌️';
        btnPincel.style.cssText = 'background:none; border:none; font-size:15px; cursor:pointer; filter:grayscale(0); transition:0.2s; padding:0px;';


// --- ADICIONE O BOTÃO DE TEXTO AQUI 👇 ---
        // TEXTO / MÁQUINA DE ESCREVER
        const btnTexto = document.createElement('button');
        btnTexto.innerHTML = '⌨️';
        btnTexto.style.cssText = 'background:none; border:none; font-size:15px; cursor:pointer; filter:grayscale(1); transition:0.2s; padding:0px;';
        btnTexto.title = 'Máquina de Escrever';
        // ----------------------------------------


        // RÉGUA (LINHA RETA)
        const btnRegua = document.createElement('button');
        btnRegua.innerHTML = '📏';
        btnRegua.style.cssText = 'background:none; border:none; font-size:15px; cursor:pointer; filter:grayscale(1); transition:0.2s; padding:0px;';
        btnRegua.title = 'Ligar Pontos (Régua)';

       // CARIMBOS
const btnMainStamp = document.createElement('button');
btnMainStamp.innerText = '💮'; // 🌟 Escolhi o '💮' (Selo/Carimbo Oficial), veja outras opções abaixo!
btnMainStamp.style.cssText = 'background:none; border:none; font-size:15px; cursor:pointer; filter:grayscale(1); transition:0.2s; padding:0px;';

        // BORRACHA
        const btnEraser = document.createElement('button');
        btnEraser.innerText = '🧽';
        btnEraser.style.cssText = 'background:none; border:none; font-size:15px; cursor:pointer; filter:grayscale(1); transition:0.2s; padding:0px;';

        // LIMPAR
        const btnClear = document.createElement('button');
        btnClear.innerText = '🗑️';
        btnClear.style.cssText = 'background:none; border:none; font-size:15px; cursor:pointer; padding:0px;';

        // FECHAR
        const btnClose = document.createElement('button');
        btnClose.innerText = '✕';
        btnClose.style.cssText = 'background:none; border:none; color:gold; font-size:15px; cursor:pointer; font-weight:bold; padding:0px; margin-left:5px;';

       // --- 2. FUNÇÃO DE LIMPEZA (Versão Corrigida para Reset Visual) ---
       const limparModos = () => {
            // Reset lógico
            modoBorracha = false;
            carimboAtual = null;
            modoRegua = false;
            modoTexto = false; // <<< ADICIONADO AQUI
            ultimoPontoRegua = null; 
            globalCtx.globalCompositeOperation = 'source-over';
            
            
            // Garante que não deixe textos pendentes se o usuário trocar de ferramenta
            if (typeof finalizarTextoLousa === 'function') finalizarTextoLousa(); // <<< ADICIONADO AQUI
            
            // Reset VISUAL
            const botoes = [btnPincel, btnRegua, btnMainStamp, btnEraser, btnTexto]; // <<< INCLUA O btnTexto
            botoes.forEach(btn => {
                if (btn) {
                    btn.style.filter = 'grayscale(1)';
                }
            });

            if (typeof stampMenu !== 'undefined') stampMenu.style.display = 'none';
        };

        // --- 3. CONFIGURAÇÃO DOS CLIQUES (Lógica das Ferramentas) ---

        btnPincel.onclick = () => {
            limparModos();
            btnPincel.style.filter = 'grayscale(0) drop-shadow(0 0 5px skyblue)';
            grossuraAtual = tamanhoPincelSalvo;
            sizeInput.value = tamanhoPincelSalvo;
            if (typeof atualizarPreview === 'function') atualizarPreview();
        };
        
        
        
        
        
        
     btnTexto.onclick = () => {
            const estavaAtivo = modoTexto;
            limparModos();
            if (!estavaAtivo) {
                modoTexto = true;
                btnTexto.style.filter = 'grayscale(0) drop-shadow(0 0 5px white)'; // Destaca que está ativo
                
                // --- SINCRONIA ISOLADA DO TEXTO ---
                grossuraAtual = tamanhoTextoAtual; 
                sizeInput.value = tamanhoTextoAtual;
                
                if (typeof atualizarPreview === 'function') atualizarPreview();
            } else {
                btnPincel.onclick(); // Clicar nele de novo volta pro Pincel
            }
        }; 

        btnRegua.onclick = () => {
            const estavaAtivo = modoRegua;
            limparModos(); 
            
            if (!estavaAtivo) {
                modoRegua = true;
                btnRegua.style.filter = 'grayscale(0) drop-shadow(0 0 5px lime)';
                
                // --- SINCRONIA ISOLADA DA RÉGUA ---
                grossuraAtual = tamanhoReguaSalvo; 
                sizeInput.value = tamanhoReguaSalvo;
                
                if (typeof atualizarPreview === 'function') atualizarPreview();
            } else {
                btnPincel.onclick();
            }
        };

        btnMainStamp.onclick = (e) => {
            e.stopPropagation();
            
              


            
            // 1. CHAMA A LIMPEZA (Isso vai fazer o btnRegua voltar a ficar cinza)
            limparModos(); 
           
            
            if (typeof stampMenu !== 'undefined') {
                stampMenu.style.display = 'flex';
            }
            
            // Sincroniza tamanho
            grossuraAtual = tamanhoCarimboSalvo;
            sizeInput.value = tamanhoCarimboSalvo;
            if (typeof atualizarPreview === 'function') atualizarPreview();
        };

        btnEraser.onclick = () => {
            limparModos();
            modoBorracha = true;
            globalCtx.globalCompositeOperation = 'destination-out';
            btnEraser.style.filter = 'grayscale(0) drop-shadow(0 0 5px gold)';
            grossuraAtual = tamanhoBorrachaSalvo;
            sizeInput.value = tamanhoBorrachaSalvo;
            if (typeof atualizarPreview === 'function') atualizarPreview();
        };

        btnClear.onclick = () => { 
            if(confirm("Limpar lousa?")) { 
                globalCtx.clearRect(0,0,5000,5000); 
                if(typeof registrarUndoLousa === 'function') registrarUndoLousa(); 
            } 
        };

        btnClose.onclick = () => {
            if (typeof lousaAtiva !== 'undefined' && lousaAtiva) {
                alternarLousaGlobal(); 
            } else {
                gerenciarPopupFerramentas(false);
            }
        };

        // --- 4. MONTAGEM FINAL DA BARRA ---
popupFerramentas.append(colorPalette, sizeInput, btnPincel, btnRegua, btnTexto, btnMainStamp, btnEraser, btnClear, btnClose);


        // ==========================================
        // PREVIEW VISUAL DO PINCEL / BORRACHA
        // ==========================================
        const previewContainer = document.createElement('div');
        previewContainer.style.cssText = `position: absolute; bottom: 110%; left: 50%; transform: translateX(-50%); display: flex; justify-content: center; align-items: center; width: 80px; height: 80px; pointer-events: none;`;

        const brushPreview = document.createElement('div');
        brushPreview.id = 'brush-preview-circle';
        brushPreview.style.cssText = `border-radius: 50%; transition: all 0.1s ease; box-shadow: 0px 2px 5px rgba(0,0,0,0.5);`;

        previewContainer.appendChild(brushPreview);
        popupFerramentas.appendChild(previewContainer);

      
      
      // 1. Variável para lembrar o tamanho do pincel (adicione no topo da função gerenciarPopupFerramentas)
        let tamanhoPincelMemoria = sizeInput.value;

        const atualizarPreview = () => {
            if (!brushPreview) return;

            const zoomAtual = getZoom();
            const tamanhoBase = parseFloat(sizeInput.value);
            const tamanhoComZoom = tamanhoBase * zoomAtual;

            brushPreview.style.width = tamanhoComZoom + 'px';
            brushPreview.style.height = tamanhoComZoom + 'px';
            brushPreview.style.zIndex = '20000'; 
            
            const menuCarimbos = document.getElementById('lousa-stamp-scroll');
            const menuAberto = menuCarimbos && menuCarimbos.style.display === 'flex';
            
            brushPreview.style.position = 'fixed';
            brushPreview.style.bottom = menuAberto ? '160px' : '80px';
            brushPreview.style.left = '50%';
            brushPreview.style.transform = 'translateX(-50%)';
            brushPreview.style.transition = 'bottom 0.2s ease'; 
            brushPreview.style.pointerEvents = 'none';

            if (carimboAtual) {
                brushPreview.innerText = carimboAtual;
                brushPreview.style.display = 'flex';
                brushPreview.style.alignItems = 'center';
                brushPreview.style.justifyContent = 'center';
                brushPreview.style.fontSize = (tamanhoComZoom * 1.9) + 'px'; 
                brushPreview.style.color = corAtual;
                brushPreview.style.backgroundColor = 'transparent';
                brushPreview.style.border = '1px solid rgba(255,255,255,0.4)';
                brushPreview.style.borderRadius = '0';
            } else if (modoBorracha) {
                brushPreview.innerText = '';
                brushPreview.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                brushPreview.style.border = '1px dashed #fff';
                brushPreview.style.borderRadius = '50%';
            } else {
                brushPreview.innerText = '';
                brushPreview.style.backgroundColor = corAtual;
                brushPreview.style.border = '2px solid rgba(255, 255, 255, 0.6)';
                brushPreview.style.borderRadius = '50%';
            }
        };

        window.recalculaPreviewLousa = atualizarPreview;      
      
      
      
      
      
      
        // 2. Ajuste no clique para trocar entre tamanhos de Pincel e Carimbo
        btnMainStamp.onclick = (e) => {
            e.stopPropagation();
            
            // 1. CHAMA A LIMPEZA GERAL (Desliga teclado, régua, borracha e reseta as cores)
            limparModos();
            
            // 2. CARIMBO INICIAL! Já entregamos o X selecionado
            carimboAtual = 'x'; 
            
            // 3. ATIVA O VISUAL DO CARIMBO
            btnMainStamp.style.filter = 'grayscale(0) drop-shadow(0 0 5px white)';
            
            // 4. ABRE O MENU E CONFIGURA TAMANHO
            if (stampMenu) stampMenu.style.display = 'flex';
            
            grossuraAtual = tamanhoCarimboSalvo;
            sizeInput.value = tamanhoCarimboSalvo;
            
            // 5. ATUALIZA O CURSOR PARA JÁ MOSTRAR O X
            if (typeof atualizarPreview === 'function') atualizarPreview();
        };

        
        
        
// --- MONTAGEM DA BARRA E APPENDS FINAL ---
popupFerramentas.append(colorPalette, sizeInput, btnPincel, btnTexto, btnRegua, btnMainStamp, btnEraser, btnClear, btnClose);


        document.body.appendChild(popupFerramentas);
        
        atualizarPreview();
    }
    
   // 3. EXIBIÇÃO / OCULTAÇÃO E RESET DA RÉGUA
    if (popupFerramentas) {
        popupFerramentas.style.display = exibir ? 'flex' : 'none';
        
        // Se estiver escondendo a lousa (exibir === false)
        if (!exibir) {
            // --- RESET DA RÉGUA AQUI ---
            // Zeramos o ponto inicial para que a régua recomece do zero na próxima vez
            ultimoPontoRegua = null; 
          //  modoRegua = false; // Desativa o modo para garantir
            
            // Opcional: Força a volta visual para o pincel para evitar confusão
            if (typeof btnPincel !== 'undefined') {
                limparModos(); // Usa sua função interna para limpar filtros e estados
                btnPincel.style.filter = 'grayscale(0) drop-shadow(0 0 5px skyblue)';
            }

            console.log("📏 Régua zerada: O próximo uso começará de um novo ponto.");
        }
    }
}





    
// Funções de suporte
function exportarDesenhoLousa() {
    if (!globalCanvas) return null;
    return globalCanvas.toDataURL("image/png");
}

function importarDesenhoLousa(dataURL) {
    if (!dataURL || !globalCtx) return;
    const img = new Image();
    img.onload = function() {
        globalCtx.clearRect(0, 0, globalCanvas.width, globalCanvas.height);
        globalCtx.drawImage(img, 0, 0);
    };
    img.src = dataURL;
}

//-----------------------------------------------------------------------------------






// ==========================================
// FUNÇÕES DA MÁQUINA DE ESCREVER (TEXTO NA LOUSA)
// ==========================================

function iniciarTextoLousa(x, y) {
    const mesa = document.getElementById('table-area');
    const tamanhoFonte = (parseInt(grossuraAtual) || 20) + 20;

    // 1. Cria um Container para agrupar controles e área de texto
    const container = document.createElement('div');
    container.classList.add('lousa-texto-fantasma'); // Mantém a classe para limpeza no Undo/Redo
    Object.assign(container.style, {
        position: 'absolute',
        left: x + 'px',
        top: (y - (tamanhoFonte / 2)) + 'px',
        zIndex: '10000',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        borderRadius: '8px',
        padding: '5px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
        border: `1px solid ${corAtual}`
    });

    // 2. Cria a barra de controles (Arrastar, Confirmar, Cancelar)
    const controles = document.createElement('div');
    Object.assign(controles.style, {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: '5px',
        cursor: 'move', // Cursor indica que pode ser arrastado aqui
        color: 'white',
        fontSize: '14px',
        userSelect: 'none'
    });

    const dragHandle = document.createElement('span');
    dragHandle.innerText = '✋ Mover';
    dragHandle.style.padding = '0 5px';
    dragHandle.style.fontWeight = 'bold';

    const acoes = document.createElement('div');
    
    const btnConfirmar = document.createElement('button');
    btnConfirmar.innerText = '✔️';
    btnConfirmar.title = 'Carimbar na Lousa';
    btnConfirmar.style.cssText = 'background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 5px; padding: 2px 8px; font-size: 14px;';
    
    const btnCancelar = document.createElement('button');
    btnCancelar.innerText = '❌';
    btnCancelar.title = 'Cancelar';
    btnCancelar.style.cssText = 'background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; padding: 2px 8px; font-size: 14px;';

    acoes.appendChild(btnConfirmar);
    acoes.appendChild(btnCancelar);
    controles.appendChild(dragHandle);
    controles.appendChild(acoes);

    // 3. Cria a área de texto (textarea)
    lousaInputTexto = document.createElement('textarea');
    Object.assign(lousaInputTexto.style, {
        backgroundColor: 'transparent',
        color: corAtual,
        font: `bold ${tamanhoFonte}px Arial`,
        border: `1px dashed rgba(255,255,255,0.3)`, // Borda sutil apenas para guia
        outline: 'none',
        overflow: 'hidden',
        whiteSpace: 'pre',
        lineHeight: '1.2',
        resize: 'none',
        minWidth: '80px',
        minHeight: (tamanhoFonte * 1.5) + 'px',
        padding: '2px'
    });

    // Faz a caixa de texto crescer automaticamente conforme se digita
    lousaInputTexto.addEventListener('input', function() {
        this.style.width = 'auto';
        this.style.width = (this.scrollWidth + 5) + 'px';
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight + 5) + 'px';
    });

    // Monta a estrutura
    container.appendChild(controles);
    container.appendChild(lousaInputTexto);
    mesa.appendChild(container);

    // Foca para abrir o teclado imediatamente
    setTimeout(() => lousaInputTexto.focus(), 50);

    // ==========================================
    // LÓGICA DE ARRASTE DO PAINEL DE TEXTO
    // ==========================================
    let isDraggingText = false;
    let startX, startY, startLeft, startTop;

    const dragStart = (e) => {
        isDraggingText = true;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        startX = clientX;
        startY = clientY;
        startLeft = parseFloat(container.style.left) || 0;
        startTop = parseFloat(container.style.top) || 0;
        e.stopPropagation();
    };

    const dragMove = (e) => {
        if (!isDraggingText) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        // Pega o zoom atual para o arraste ser na velocidade correta
        const zoom = typeof zoomLevel !== 'undefined' ? zoomLevel : 1;
        const dx = (clientX - startX) / zoom;
        const dy = (clientY - startY) / zoom;

        container.style.left = (startLeft + dx) + 'px';
        container.style.top = (startTop + dy) + 'px';
        e.stopPropagation();
    };

    const dragEnd = () => { isDraggingText = false; };

    // Atrela os eventos de arraste na barra de controles
    controles.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);

    controles.addEventListener('touchstart', dragStart, { passive: false });
    document.addEventListener('touchmove', dragMove, { passive: false });
    document.addEventListener('touchend', dragEnd);

    // Impede que clicar no textarea arraste a mesa
    lousaInputTexto.addEventListener('mousedown', (e) => e.stopPropagation());
    lousaInputTexto.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: false });

    // ==========================================
    // LÓGICA DOS BOTÕES
    // ==========================================
    btnCancelar.onclick = (e) => {
        e.stopPropagation();
        container.remove();
        lousaInputTexto = null;
        mostrarToast("Texto cancelado", "info");
    };

    btnConfirmar.onclick = (e) => {
        e.stopPropagation();
        
        
        
        
        finalizarTextoLousaConfirmado(container, lousaInputTexto, tamanhoFonte);
    };
    
    // Substituímos o evento "blur" (que carimbava sozinho ao clicar fora) 
    // por esta nova lógica dos botões.
}







function finalizarTextoLousaConfirmado(container, textarea, tamanhoFonte) {
    if (!textarea) return;

    const texto = textarea.value;
    
    // Calcula a posição EXATA do textarea relativo à mesa
    // container.style.left + textarea.offsetLeft
    const x = parseFloat(container.style.left) + textarea.offsetLeft;
    const y = parseFloat(container.style.top) + textarea.offsetTop;

    // Se tiver digitado algo, carimba no Canvas
    if (texto.trim() !== "") {
        globalCtx.save();
        globalCtx.globalCompositeOperation = 'source-over';
        globalCtx.globalAlpha = 1.0;
        globalCtx.fillStyle = textarea.style.color;
        globalCtx.font = `bold ${tamanhoFonte}px Arial`;
        globalCtx.textAlign = 'left';
        globalCtx.textBaseline = 'top';

        // Suporte a múltiplas linhas (caso o jogador aperte Enter)
        const linhas = texto.split('\n');
        
        // 🎛️ CONTROLE DE CALIBRAÇÃO:
        // Se o texto ainda carimbar para cima, aumente a margemCima.  -X vai subindo o carimbado
        // Se o texto ainda carimbar para a esquerda, aumente a margemEsquerda. 3
        const margemCima = 13;       
        const margemEsquerda = 5;   

        let linhaY = y + margemCima; 

        linhas.forEach((linha) => {
            globalCtx.fillText(linha, x + margemEsquerda, linhaY); 
            linhaY += tamanhoFonte * 1.2; 
        });

        globalCtx.restore();

        // Grava o estado para o Undo/Redo e Save
        if (globalCanvas) globalCanvas.setAttribute('data-saved-drawing', exportarDesenhoLousa());
        if (typeof saveState === 'function') saveState();
        
        mostrarToast("Texto carimbado!", "info");
    }

    // Limpa os elementos
    container.remove();
    if (lousaInputTexto === textarea) lousaInputTexto = null;
}



// Função para fechar e limpar qualquer janela de texto que tenha ficado aberta ao trocar de ferramenta
function finalizarTextoLousa() {
    const textosPendentes = document.querySelectorAll('.lousa-texto-fantasma');
    textosPendentes.forEach(container => {
        container.remove(); // Fecha a janela
    });
    lousaInputTexto = null; // Reseta a variável de controle
}


//------------------------------------------------------------------------------------



//função que restaura valores na aba de combate!
function setCombatState(state) {
    if (!state) return;

    // 1. Restaura Herói
    heroHp = state.hero.hp;
    heroMaxHp = state.hero.maxHp;
    heroDmg = state.hero.dmg;
    
    // 👇 ADICIONE ESTAS 3 LINHAS PARA RESTAURAR O TURNO 👇
    if (state.hero.turn) {
        currentTurn = state.hero.turn;
        updateTurnDisplay();
    }
    
    const heroNotes = document.getElementById('heroNotes');
    if (heroNotes) {
        heroNotes.value = state.hero.notes || "";
        // Restaura a altura do herói, se ela existir no objeto salvo
        if (state.hero.notesHeight) heroNotes.style.height = state.hero.notesHeight;
    }
    updateHeroDisplay();

    // 2. Reconstrói Inimigos
    const container = document.getElementById('enemiesContainer');
    container.innerHTML = ""; 
    enemiesData = {}; 
    
    enemyCounter = 0; 

    state.enemies.forEach(data => {
        addNewEnemy(); 
        const id = enemyCounter - 1;
        
        enemiesData[id].hp = data.hp;
        enemiesData[id].maxHp = data.maxHp;
        enemiesData[id].str = data.str;
        
        document.getElementById(`enemyHpDisplay-${id}`).innerText = `${data.hp}/${data.maxHp}`;
        document.getElementById(`enemyStrDisplay-${id}`).innerText = data.str;
        
        // Restaura a altura do inimigo
        const noteEl = document.getElementById(`enemyNotes-${id}`);
        if(noteEl) {
            noteEl.value = data.notes || "";
            // Verifica se a altura foi salva e aplica
            if (data.notesHeight) noteEl.style.height = data.notesHeight;
        }
    });
}








//---------------------------------------------------------------------------------
/**
 * Captura o estado atual do Painel de Combate.
 * Utilize esta função dentro da sua função saveFullPage().
 */
function getCombatState() {
    // 1. Coleta os dados do Herói
    // Usamos o document.getElementById direto para garantir que pegamos o elemento atual
    const heroNotesEl = document.getElementById('heroNotes');
    
    const heroState = {
        hp: heroHp, 
        maxHp: heroMaxHp,
        dmg: heroDmg,
        turn: currentTurn, // 👈 ADICIONE ESTA LINHA AQUI
        notes: heroNotesEl ? heroNotesEl.value : "",
        // Aqui está a captura da altura
        notesHeight: heroNotesEl ? heroNotesEl.style.height : "" 
    };

    // 2. Coleta os dados de todos os inimigos ativos
    const enemiesState = Object.keys(enemiesData).map(id => {
        const notesElement = document.getElementById(`enemyNotes-${id}`);
        return {
            id: id,
            hp: enemiesData[id].hp,
            maxHp: enemiesData[id].maxHp,
            str: enemiesData[id].str,
            notes: notesElement ? notesElement.value : "",
            // Aqui está a captura da altura do inimigo
            notesHeight: notesElement ? notesElement.style.height : ""
        };
    });

    return {
        hero: heroState,
        enemies: enemiesState
    };
}




//-----------------------------------------------------------------------------

