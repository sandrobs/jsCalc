//cria div
function createDiv(id){

    var div =  document.createElement("div");
    div.setAttribute('id',id);

    return div;

}

//cria elemento button
function createButton(id, text, value, fn){

    var button = document.createElement("button");
    button.setAttribute("id",id);
    button.setAttribute("value",value);
    button.setAttribute("fn",fn);
    button.setAttribute("onclick","pressButton('"+button.getAttribute('value')+"','"+button.getAttribute('fn')+"')");
    var textNode = document.createTextNode(text);
    button.appendChild(textNode);

    return button;

}

//function executada em todas as call dos buttons
function pressButton(value, fn){
    
    var inputEntrada = document.getElementById('inputEntrada');

    switch(fn){

        case 'N': //numerico

             entradaNum(value);

            break;

        case 'O': //operador


            isOperador = true;
            operacao = value;

            break;

        case 'NG': //negativo~positivo

            converteNumero();

            break;

        case 'DC': //decimal
            
            entradaDec();

            break;

        case 'EQ': //igual
            if (isEqual){

            }
            calcula(operacao);
            
            break;

        case 'C': //limpa memoria

            limpar();

            break;

        default: // na teoria nao cai aqui
            break;
    }

}

function existDecimal() {
    
    var valorInput = inputEntrada.value;
    var n = valorInput.indexOf('.');
    var isDecimal = true;

    if (n  < 0) {
        isDecimal = false;
    }

    return isDecimal;

}

function calcula(operator) {
    
    let resultado = 0;
    numMemoria2 = inputEntrada.value;

    switch (operator) {

        case 'dv':
            
            if (numMemoria1 == 0) {
                inputEntrada.value = "ERRO"
            } else {
                resultado = parseFloat(numMemoria1/numMemoria2);
                inputEntrada.value = resultado;
            }

            break;

        case 'mp':
            resultado = parseFloat(numMemoria1*numMemoria2);
            inputEntrada.value = resultado;
            break;
        case 'sb':
            resultado = parseFloat(numMemoria1-numMemoria2);
            inputEntrada.value = resultado;
            break;
    
        case 'sm':
            resultado =  parseFloat(numMemoria1)+parseFloat(numMemoria2);
            inputEntrada.value = resultado;   
            break;

        default:

            break;

    }

}

function entradaNum(value) {

    var isDecimal = existDecimal();

    if (isOperador){
        numMemoria1 = inputEntrada.value;
        inputEntrada.value = value;
    } else{

        if (inputEntrada.value == 0){

            if(isDecimal == true){
                inputEntrada.value += value;
            } else {
                
                inputEntrada.value = value;
            }
    
        } else {
            inputEntrada.value += value;
        }
    }

}

function entradaDec() {
    var isDecimal = existDecimal();

    if (isDecimal == false) {
        inputEntrada.value += '.'
    }

}

function converteNumero(){
    let value = inputEntrada.value;
    value = value* (-1);
    inputEntrada.value = value;
}

function limpar() {
    inputEntrada.value = 0;
    numMemoria1 = 0;
    numMemoria2 = 0;
    isOperador = false;
}