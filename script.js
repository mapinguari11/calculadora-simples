let operador = '';
let valor1 = 0;
let valor2 = 0;
let resultado = 0;

function selecionar(id) {
    let tipo = document.getElementById(id).id;
    operador = tipo;
}

function calcular() {
    valor1 = parseInt(document.getElementById('valor-1').value);
    valor2 = parseInt(document.getElementById('valor-2').value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert('Por favor, insira valores numéricos válidos.');
        return;
    }

    resultado = parseInt(document.getElementById('resultado').value);

    switch (operador) {
        case 'adicionar':
            adicionar();
            break;

        case 'subtrair':
            subtrair();
            break;
        
        case 'multiplicar':
            multiplicar();
            break
        case 'dividir':
            dividir();
            break;
        
        default:
            alert('Selecione o tipo de operação')
            return;
    }

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('valor-1').value = '';
    document.getElementById('valor-2').value = '';
}

function adicionar() {
    let operacao = valor1 + valor2;
    resultado = operacao;
    operador = '';
}

function subtrair() {
    let operacao = valor1 - valor2;
    resultado = operacao;
    operador = '';
}

function multiplicar() {
    let operacao = valor1 * valor2;
    resultado = operacao;
    operador = '';
}

function dividir() {
    if (valor2 === 0) {
        alert('Não pode dividir por 0. Informe outro valor');
        return;
    }

    let operacao  = valor1 / valor2;
    resultado = operacao;
    operador = '';
}