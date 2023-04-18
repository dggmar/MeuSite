function calcular() {
    const numero1 = parseInt (document.getElementsByClassName('imput1'));
    const numero2 = parseInt (document.getElementsByClassName('input2'));

    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicação = numero1 * numero2;
    const divisão = numero1 / numero2;

    console.log(soma)

    document.getElementById('soma').innerHTML = soma;
    document.getElementById('subtração').innerHTML = subtracao;
    document.getElementById('multiplicação').innerHTML = multiplicação;
    document.getElementById('divisão').innerHTML = divisão;
}