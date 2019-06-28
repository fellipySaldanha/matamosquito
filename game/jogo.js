let altura = 0;
let largura = 0;
let vidas = 1;
let time = 15;
let level = window.location.search;
let tempoNivel = level.replace('?', '');

if(tempoNivel === 'normal'){
    tempoMosca = 1100;
}
if(tempoNivel === 'dificil'){
    tempoMosca = 900;
}
if(tempoNivel === 'hardcore'){
    tempoMosca = 700;
}

function ajustaTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanho();

function posicao() {
    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    let img = document.createElement('img');
    img.src = 'imagens/mosca.png';
    img.className = tamanhoMosca() + ' ' + ladoAleatorio();
    img.style.position = 'absolute';
    img.style.left = posicaoX + 'px';
    img.style.top = posicaoY + 'px';
    img.id = 'mosca';
    img.onclick = () => {
        document.getElementById('mosca').remove();
    }

    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove();

        if (vidas > 3) {
            window.location.href = 'gameover.html';
        } else {
            document.getElementById('v' + vidas).src = './imagens/coracao_vazio.png';
            vidas++
        }
    }


    document.body.appendChild(img);
}

let cronometro =
    setInterval(() => {
        time -= 1
        if(time < 0){
            clearInterval(cronometro);
            clearInterval(criaMosca);
            window.location.href = 'vitoria.html';
        }else{
            document.getElementById('tempo').innerHTML = time;
        }
    }, 1000);



function tamanhoMosca() {
    let classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosca01';

        case 1:
            return 'mosca02';

        case 2:
            return 'mosca03';
    }
}
function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'ladoA';

        case 1:
            return 'ladoB';

    }
}