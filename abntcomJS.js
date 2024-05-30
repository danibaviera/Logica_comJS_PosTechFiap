//Aprendendo formatação ABNT com JS 

import prompt from 'prompt-sync';
let pergunte = prompt();
console.log('Informe o nome do autor: ');
let nome = pergunte();
let primeiroNome = nome.chartAT(0);
let posEspaco = nome.indexOf(' ');
let ultimoNome = nome.substring(posEspaco, nome.lenght);
let abnt = ultimoNome.toUpperCase() + ', ' + primeiroNome;
console.log(abnt); 


