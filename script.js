"use strict"

function somar(){
    const valor1 = Number(document.querySelector('#entrada1').value);
    const valor2 = Number(document.querySelector('#entrada2').value);
    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = `Resultado: ${valor1 + valor2}`;
};

function subtrair(){
    const valor1 = Number(document.querySelector('#entrada1').value);
    const valor2 = Number(document.querySelector('#entrada2').value);
    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = `Resultado: ${valor1 - valor2}`;

};

function multiplicar(){
    const valor1 = Number(document.querySelector('#entrada1').value);
    const valor2 = Number(document.querySelector('#entrada2').value);
    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = `Resultado: ${valor1 * valor2}`;
  
};

function dividir(){
    const valor1 = Number(document.querySelector('#entrada1').value);
    const valor2 = Number(document.querySelector('#entrada2').value);
    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = `Resultado: ${valor1 / valor2}`;

};

    