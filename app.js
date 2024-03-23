/*

1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

*/

const indice = 13;
let soma = 0;
let k = 0;

do {
  k += 1;
  soma += k;
} while (k < indice);

console.log(soma);

//RESPOSTA: soma = 91

//-----------------------------------------------------------------------------------

/*

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde,informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
F(n + 2) = F(n + 1) + F(n)

*/

const x = 80;
const fibo = [0, 1];

do {
  let newFibo = fibo[fibo.length - 1] + fibo[fibo.length - 2];
  fibo.push(newFibo);
} while (fibo[fibo.length - 1] <= x);

if (fibo.includes(x)) {
  console.log(`${x} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${x} não pertence à sequência de Fibonacci.`);
}

//-----------------------------------------------------------------------------------

/*

3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, _9_
(soma-se de 2 em 2)

b) 2, 4, 8, 16, 32, 64, _128_
(multiplos de 2)

c) 0, 1, 4, 9, 16, 25, 36, _49_
(soma-se os intervalos de números ímpares subsequentes com o último número, exemplo:
1 -> 4 (1 + 3);
4 -> 9 (4 + 5);
9 -> 16 (9 + 7);    
)

d) 4, 16, 36, 64, _100_
(é um sequência de quadrados de números pares.
    2² = 4; 
    4² = 16;
    6² = 36;
    8² = 64;
)

e) 1, 1, 2, 3, 5, 8, _13_
(próximo valor sempre será a soma dos 2 valores anteriores)

f) 2,10, 12, 16, 17, 18, 19, _200_
(todos os números começam com a letra D)
*/

//-----------------------------------------------------------------------------------

/*

4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente.
Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser.
Seu objetivo é descobrir qual interruptor controla qual lâmpada.
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

Resposta:

Ligaria o primeiro interruptor e deixaria ligado por alguns minutos, depois eu o desligaria e ligaria o segundo interruptor,
após isso eu entraria em uma das salas e observaria alguns casos possíveis, como:

1- Se a lâmpada estiver acesa, então o segundo interruptor é o que controla a lâmpada.
2- Se a lâmpada estiver apagada e estiver quente ao toca-la, então o primeiro interruptor é o que controla essa lâmpada.
3- Se a lâmpada estiver apagada e estiver fria ao toque, então sei que é o terceiro interruptor que controla essa lâmpada.

Assim, com duas idas até uma das salas das lâmpadas, consigo saber qual interruptor controla cada lâmpada.

*/

//-----------------------------------------------------------------------------------

/* 

5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

*/

function inverterCaracteres(palavra) {
  let palavraInvertida = "";
  for (var i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  return palavraInvertida;
}

console.log(inverterCaracteres("camila"));
