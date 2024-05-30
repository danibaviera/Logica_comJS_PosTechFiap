import prompt from 'prompt-sync'
let pergunte = prompt();

console.log('Programa da Média');

console.log('infome a nota1:');
let nota1 = Number(pergunte());

console.log('informe a nota3:');
let nota2 = Number(pergunte());

console.log('informe a nota3:');
let nota3 = Number(pergunte());

let media = ((nota1 + nota2 + nota3) / 3);

console.log ('A média é: ' + media);


//Programa de cálculo em cupom de desconto
// Aqui precisamos do valor da compra e o valor do cupom de desconto

console.log('Programa de Cupom de desconto');

console.log('Informe o valor da compra:');
let valorCompra = Number(pergunte());

console.log('Informe valor do Cupom:');
let valorCupom = Number(pergunte());

let desconto = valorCompra * valorCupom / 100;
let total = valorCompra - desconto;

console.log('O valor total da compra é: ' + total);

// Programa da hipotenusa 

console.log('Programa da hipotenusa');

console.log('Informe o cateto adjacente:');
let catAdjacente = Number(pergunte());

console.log('Informe o cateto oposto:');
let catOposto = Number(pergunte());

let catA2 = Math.pow(catAdjacente, 2);
let catO2 = Math.pow(catOposto, 2);
let soma = catA2 + catO2;

let hipotenusa = Math.sqrt(soma);

console.log('A hipotenusa é: ' + soma);


// Programa ABNT 

console.log('Programa ABNT');

console.log('Informar nome do autor:');
let nome = pergunte();

let primeiroNome = nome.charAt(0);
let posEspaco = nome.indexOf(' ');
let ultimoNome = nome.substring(posEspaco,nome.length);

let abnt = ultimoNome.toUpperCase() + ', ' + primeiroNome;

console.log(abnt); 
