function createDiv(id){

    var div =  document.createElement("div");
    div.setAttribute('id',id);

    return div;

}

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



            break;

        case 'DC': //decimal
            



            break;

        case 'EQ': //igual



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

function entradaNum(val) {

    var isDecimal = existDecimal();

    if (isOperador == true || inputEntrada.value == 0){
        if(isDecimal == true){
            inputEntrada.value += val;
        } else{
            inputEntrada.value = val;
        }
    } else {
        inputEntrada.value += val;
    }

}

function entradaDec() {
    var isDecimal = existDecimal();

    if (isDecimal == false) {
        inputEntrada.value += '.'
    }

}

function entradaOperador(){

    var valentradas = inputEntrada.value;

    

}

function limpar() {
    inputEntrada.value = 0;
    isOperador = false;
    operacao = '';
}