//cria variaveis de controle
var isOperador = false;
var operacao = '';
var numMemoria1 = 0;

function InicializaElementos(){

    var divMain = document.getElementById("main");

    //cria campo de entrada de valores
    var inputEntrada = document.createElement("input");

    inputEntrada.setAttribute("id","inputEntrada");
    inputEntrada.setAttribute("disabled","");
    inputEntrada.value = 0;

    divMain.appendChild(inputEntrada);

    //cria primeira linha de botoes
    var divLinha1 = criaDiv("divLinha1");

    var btn7 = criaBotao('btn7','7',7);
    divLinha1.appendChild(btn7);

    var btn8 = criaBotao('btn8','8',8);
    divLinha1.appendChild(btn8);

    var btn9 = criaBotao('btn9','9',9);
    divLinha1.appendChild(btn9);

    var btnDV = criaBotao('btnDV','/','dv');
    divLinha1.appendChild(btnDV);

    divMain.appendChild(divLinha1);

    //cria segunda linha de botoes
    var divLinha2 = criaDiv("divLinha2");

    var btn4 = criaBotao('btn4','4',4);
    divLinha2.appendChild(btn4);
 
    var btn5 = criaBotao('btn5','5',5);
    divLinha2.appendChild(btn5);
 
    var btn6 = criaBotao('btn6','6',6);
    divLinha2.appendChild(btn6);
 
    var btnMP = criaBotao('btnMP','X','mp');
    divLinha2.appendChild(btnMP);
 
    divMain.appendChild(divLinha2);

    //cria terceira linha de botoes
    var divLinha3 = criaDiv("divLinha3");

    var btn1 = criaBotao('btn1','1',1);
    divLinha3.appendChild(btn1);
 
    var btn2 = criaBotao('btn2','2',2);
    divLinha3.appendChild(btn2);
 
    var btn3 = criaBotao('btn3','3',3);
    divLinha3.appendChild(btn3);
 
    var btnMN = criaBotao('btnMN','-','sb');
    divLinha3.appendChild(btnMN);
 
    divMain.appendChild(divLinha3);

    //cria quarta linha de botoes
    var divLinha4 = criaDiv("divLinha4");

    var btn0 = criaBotao('btn0','0',0);
    divLinha4.appendChild(btn0);
 
    var btnPN = criaBotao('btnPN','+/-','ng');
    divLinha4.appendChild(btnPN);

    var btnDec = criaBotao('btnDec','.', 'dc');
    divLinha4.appendChild(btnDec);
 
    var btnPS = criaBotao('btnPS','+', 'sm');
    divLinha4.appendChild(btnPS);
 
    divMain.appendChild(divLinha4);

    //cria quinta linha

    var divLinha5 = criaDiv("divLinha5");

    var btnEqual = criaBotao('btnEqual','=', 'eq');
    btnEqual.setAttribute("style","width: 252px;")
    divLinha5.appendChild(btnEqual);
 
    var btnC = criaBotao('btnC','C', 'c');
    divLinha5.appendChild(btnC);
 
    divMain.appendChild(divLinha5);

}

function criaDiv(id){

    var div =  document.createElement("div");
    div.setAttribute('id',id);

    return div;

}

function criaBotao(id, texto, value){

    var botao = document.createElement("button");
    botao.setAttribute("id",id);
    botao.setAttribute("value",value);
    botao.setAttribute("onclick","clickBotao('"+botao.getAttribute('value')+"')")
    var texto = document.createTextNode(texto);
    botao.appendChild(texto);

    return botao;

}

function clickBotao(fn){
    
    if (fn == 'dv' || fn == 'mp' || fn == 'sb' || fn == 'sm') { //valida se acionou uma operação
        
        isOperador = true;
        operacao = fn;

    } else if (fn == 0 || fn == 1 || fn == 2 || fn == 3 || fn == 4 || fn == 5 || fn == 6 || fn == 7 || fn == 8 || fn == 9) { //valida se acionou um numero

        var isDecimal = existeDecimal();

        if (isOperador == true || inputEntrada.value == 0) {
            
            if (isDecimal == true) {

                inputEntrada.value += fn;
            } else {

                inputEntrada.value = fn;
            }
            
        } else {

            inputEntrada.value += fn;
        }

    } else if (fn == 'dc') {

        var isDecimal = existeDecimal();

        if (isDecimal == false) { //se nao tem ponto decimal, adiciona

            inputEntrada.value += '.'
        }

    } else if (fn == 'eq') {
        


    } else if (fn == 'c') {
        
        inputEntrada.value = 0;
        isOperador = false;
        operacao = '';

    } else {
        //faz nada
    }

}

function existeDecimal() {
    
    var valorInput = inputEntrada.value;
    var n = valorInput.indexOf('.');
    var isDecimal = true;

    if (n  < 0) {
        isDecimal = false;
    }

    return isDecimal;

}

function calcula() {
    
    var resultado = 0;
    var numMemoria2 = inputEntrada.value;

    switch (operacao) {

        case 'dv':
            
            if (numMemoria1 == 0) {
                inputEntrada.value = "ERRO"
            } else {
                resultado = numMemoria1/numMemoria2;
                inputEntrada.value = resultado;
            }

            break;

        case 'mp':
            resultado = numMemoria1*numMemoria2;
            inputEntrada.value = resultado;
            break;
        case 'sb':
            resultado = numMemoria1-numMemoria2;
            inputEntrada.value = resultado;
            break;
    
        case 'sm':
            resultado = numMemoria1+numMemoria2;
            inputEntrada.value = resultado;   
            break;

        default:

            break;

    }

}