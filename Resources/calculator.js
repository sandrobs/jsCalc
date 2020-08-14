//cria variaveis de controle
var isOperador = false;
var operacao = '';
var numMemoria1 = 0;
var numMemoria2 = 0;
var isEqual = false;

function calculator(){ //cria os elementos da calculadora na DOM

    var divMain = document.getElementById("main");

    //cria campo de entrada de valores
    var inputEntrada = document.createElement("input");

    inputEntrada.setAttribute("id","inputEntrada");
    inputEntrada.setAttribute("disabled","");
    inputEntrada.value = 0;

    divMain.appendChild(inputEntrada);

    //cria primeira linha de botoes
    var divLinha1 = createDiv("divLinha1");

    var btn7 = createButton('btn7','7',7,"N");
    divLinha1.appendChild(btn7);

    var btn8 = createButton('btn8','8',8,"N");
    divLinha1.appendChild(btn8);

    var btn9 = createButton('btn9','9',9,"N");
    divLinha1.appendChild(btn9);

    var btnDV = createButton('btnDV','/','dv',"O");
    divLinha1.appendChild(btnDV);

    divMain.appendChild(divLinha1);

    //cria segunda linha de botoes
    var divLinha2 = createDiv("divLinha2");

    var btn4 = createButton('btn4','4',4,"N");
    divLinha2.appendChild(btn4);
 
    var btn5 = createButton('btn5','5',5,"N");
    divLinha2.appendChild(btn5);
 
    var btn6 = createButton('btn6','6',6,"N");
    divLinha2.appendChild(btn6);
 
    var btnMP = createButton('btnMP','X','mp',"O");
    divLinha2.appendChild(btnMP);
 
    divMain.appendChild(divLinha2);

    //cria terceira linha de botoes
    var divLinha3 = createDiv("divLinha3");

    var btn1 = createButton('btn1','1',1,"N");
    divLinha3.appendChild(btn1);
 
    var btn2 = createButton('btn2','2',2,"N");
    divLinha3.appendChild(btn2);
 
    var btn3 = createButton('btn3','3',3,"N");
    divLinha3.appendChild(btn3);
 
    var btnMN = createButton('btnMN','-','sb',"O");
    divLinha3.appendChild(btnMN);
 
    divMain.appendChild(divLinha3);

    //cria quarta linha de botoes
    var divLinha4 = createDiv("divLinha4");

    var btn0 = createButton('btn0','0',0,"N");
    divLinha4.appendChild(btn0);
 
    var btnPN = createButton('btnPN','+/-','ng',"NG");
    divLinha4.appendChild(btnPN);

    var btnDec = createButton('btnDec','.', 'dc',"DC");
    divLinha4.appendChild(btnDec);
 
    var btnPS = createButton('btnPS','+', 'sm',"O");
    divLinha4.appendChild(btnPS);
 
    divMain.appendChild(divLinha4);

    //cria quinta linha

    var divLinha5 = createDiv("divLinha5");

    var btnEqual = createButton('btnEqual','=', 'eq',"EQ");
    btnEqual.setAttribute("style","width: 252px;")
    divLinha5.appendChild(btnEqual);
 
    var btnC = createButton('btnC','C', 'c',"C");
    divLinha5.appendChild(btnC);
 
    divMain.appendChild(divLinha5);

}