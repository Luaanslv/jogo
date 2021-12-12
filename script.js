
//processamento do jogo
var jogo = [];

//controle de elementos visuais 
var tabuleiro = [];

var quemjoga = 0; // 0= usuario| 1 = cpu
var verifica;
var jogando = true;
var nivel = 1;
var jogadacpu = 1;
var quemcomeca = 1;

function jogar(p) {
    if ((jogando) && (quemjoga === 0)){
        switch (p) {
                case 1:
                if (jogo[0][0] === "") {
                    jogo[0][0] = "X";
                    quemjoga = 1;
                }
            break;
                case 2:
                    if (jogo[0][1] === "") {
                        jogo[0][1] = "X";
                        quemjoga = 1;
                    }
            break;
                case 3:
                    if (jogo[0][2] === "") {
                        jogo[0][2] = "X";
                        quemjoga = 1;
                    }
            break;
                case 4:
                if (jogo[1][0] === "") {
                    jogo[1][0] = "X";
                    quemjoga = 1;
                }
            break;
                case 5:
                if (jogo[1][1] === "") {
                    jogo[1][1] = "X";
                    quemjoga = 1;
                }
            break;
                case 6:
                if (jogo[1][2] === "") {
                    jogo[1][2] = "X";
                    quemjoga = 1;
                }
            break;
                case 7:
                if (jogo[2][0] === "") {
                    jogo[2][0] = "X";
                    quemjoga = 1;
                }
            break;
                case 8:
                if (jogo[2][1] === "") {
                    jogo[2][1] = "X";
                    quemjoga = 1;
                }
            break;
                default: //case9
                if (jogo[2][2] === "") {
                    jogo[2][2] = "X";
                    quemjoga = 1;
                }
                break;
        }
        if (quemjoga == 1) {
            atualizar();
            verifica = verificavitoria();
            if (verifica != "") {
                alert(verifica + " venceu");
                jogando = false;
            }
            cpustart();
        }
    }
}

function atualizar() {
    for (var l = 0; l < 3; l++){
        for (var c = 0; c<3; c++){
            if (jogo[l][c] == "X") {
                tabuleiro[l][c].innerHTML = "X";
                tabuleiro[l][c].style.cursor = "default";
            }
            else if (jogo[l][c] == "O") {
                tabuleiro[l][c].innerHTML = "O";
                tabuleiro[l][c].style.cursor = "default";
            }
            else {
                tabuleiro[l][c].innerHTML = "";
                tabuleiro[l][c].style.cursor = "pointer"; 
            }
        }
    }
}

function cpustart() {
    if (jogando) {
        var l, c;
        if (nivel === 1) {
            do {
                l = Math.round(Math.random() * 2);
                c = Math.round(Math.random() * 2);
            } while (jogo[l][c] != "");
            jogo[l][c] = "O";
        } else if (nivel === 2) {
            //nivel 2
            
        }
        verifica = verificavitoria();
        if (verifica != "") {
            alert(verifica + " venceu");
            jogando = false;
        }
        atualizar();
        quemjoga = 0;
    }

}

function verificavitoria() {
    //linhas
    var l, c;
    for (l = 0; l < 3;l++ ){
        if ((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2]))
            return jogo[l][0];
    }

    //colunas
    for (c = 0; c < 3;c++ ){
        if ((jogo[0][c] == jogo[1][c]) && (jogo[1][c] ==  jogo[2][c]))
            return jogo[0][c];
    }
    //diagonais
    if ((jogo[0][0] == jogo[1][1]) && (jogo[1][1] ==  jogo[2][2])){
            return jogo[0][0];
    };
    if ((jogo[0][2] == jogo[1][1]) && (jogo[1][1] ==  jogo[2][0])){
        return jogo[0][2];
    };
    return "";
}

function start() {
    jogando = true;
    jogadacpu = 1;
    //matriz para os X e O
    jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    tabuleiro = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];
    atualizar();
    if (quemcomeca == 1) {
        quemcomeca = 0;
        quemjoga = quemcomeca;
        document.getElementById('dvstart').innerHTML = "Quem joga: Usuario";

    } else {
        quemcomeca = 1;
        quemjoga = quemcomeca;
        document.getElementById('dvstart').innerHTML = "Quem joga: Cpu";
        cpustart();
    }
}

window.addEventListener("load", start);
