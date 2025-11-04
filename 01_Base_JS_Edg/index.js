console.log('Hello World!')
console.log('Fundamentos de Computação e Algoritmos')

// Sobre variáveis javascript
{
    let f_name = 'Alex'; // causa erro se console.log fora do escopo
    const ZIP = 500067; // causa erro se console log fora do escopo
    var age = 25; // não causa erro por ser global
    console.log(f_name);
    console.log(ZIP);
}

// console.log(f_name);
// console.log(ZIP);
console.log(age);


// [COMANDOS DE REPETIÇÃO]:

// for([inicialização]; [condição]; [expressão final])
for (var i = 0; i < 9; i++) {
    console.log(i);
}

// while (condição) { rotina }
var n = 0;
var x = 0;

while (n < 3){
    n++;
    x += n;
    //console.log(n);
    console.log(x);
}

// do statement while (condição)
var resultado = '';
var i = 0;
do {
    i += 1;
    resultado += 1 + ' ';
}
while (i > 0 && i < 5)

console.log(resultado)


// [COMANDOS DE SELEÇÃO]:

// If - else
var numero = 5;

if (numero > 0) {
  console.log("O número é positivo");
} else if (numero < 0) {
  console.log("O número é negativo");
} else {
  console.log("O número é zero");
}


// Switch case
var dia = 3;

switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Dia inválido");
}

// operador ternário
var idade = 20;

var podeDirigir = idade >= 18 ? "Sim, pode dirigir" : "Não pode dirigir";

console.log(podeDirigir);


// [CRIAÇÃO DE FUNÇÕES]:
function avaliaParidade(limiteSuperior) {
    for(let i=0; i < limiteSuperior; i++) {
        if(i%2==1)
            console.log(i + ' é um número Ímpar')
        else
            console.log(i + ' é um número Par')
    }
}

avaliaParidade(10)

// [Forma de declaração de uma ARRAY (ou Vetor, ou Lista)]:

// Forma 1, iniciando sem elemento e posteriormente populando
let daysOfWeek = []
console.log(daysOfWeek)

daysOfWeek = ['Segunda-feira', 'Terça-feira', 'Quarta-feira']
console.log(daysOfWeek)

// Forma 2
let daysOfWeek1 = new Array();
console.log(daysOfWeek1)

daysOfWeek1 = new Array(3) // reservando espaços
console.log(daysOfWeek1)

daysOfWeek1 =  new Array('Segunda-feira', 'Terça-feira', 'Quarta-feira')
console.log(daysOfWeek1)

// Manipulando Array - acessando recuros
const fibonacci = []
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++)
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];

for (let i = 1; i < fibonacci.length; i++)
  console.log(fibonacci[i])

// Array bidimensional / Matriz
var avarageTemp = []
avarageTemp[0] = [72, 75, 79, 79, 81, 81]
avarageTemp[1] = [81, 79, 75, 75, 73, 73]
console.log(avarageTemp)

//********
// Pilha
//********
class Stack {
  constructor() {
    this.itens = [];
  }

  push(elemento) {
    this.itens.push(elemento);
  }

  pop() {
    return this.itens.pop();
  }

  peek() {
    return this.itens[this.itens.length - 1];
  }

  isEmpty() {
    return this.itens.length === 0;
  }

  clear() {
    this.itens = [];
  }

  size() {
    return this.itens.length
  }
}

var myStack = new Stack()

console.log(myStack);

myStack.push(5);
console.log(myStack);
console.log(myStack.peek());

myStack.push(8);
console.log(myStack);
console.log(myStack.size());

myStack.push(11);
console.log(myStack);
console.log(myStack.isEmpty());
console.log(myStack);

myStack.pop();
console.log(myStack);
console.log(myStack.size());

myStack.clear();
console.log(myStack);
console.log(myStack.size());


//********
// Fila
//********
class Queue {
  constructor() {
    this.itemFila = [];
  }

  enqueue(elementoFila) {
    this.itemFila.push(elementoFila);
  }

  dequeue() {
    return this.itemFila.shift();
  }

  peek() {
    if(this.itemFila.length==0)
      return undefined
    else
      return this.itemFila[0];
  }

  isEmpty() {
    return this.itemFila.length === 0;
  }

  clear() {
    this.itemFila = [];
  }

  size() {
    return this.itemFila.length
  } 
}

var myQueue = new Queue()

console.log(myQueue);

myQueue.enqueue(5);
console.log(myQueue);
console.log(myQueue.peek());

myQueue.enqueue(8);
console.log(myQueue);
console.log(myQueue.size());

myQueue.enqueue(11);
console.log(myQueue);
console.log(myQueue.isEmpty());
console.log(myQueue);

myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.size());

myQueue.clear();
console.log(myQueue.isEmpty);
console.log(myQueue.size());


// CONJUNTOS - SET
var mySet = new Set();

mySet.add(0)
console.log(mySet)
console.log('----------')

mySet.add(1)
console.log(mySet)
console.log('----------')

mySet.add(1)
console.log(mySet)
console.log('----------')

mySet.add(2)
console.log(mySet)
console.log('----------')

mySet.add(3)
console.log(mySet)
console.log('----------')

mySet.add(2)
console.log(mySet)
console.log('----------')

// CONJUNTOS - MAPs
// Criando um Map
let frutas = new Map();

// Adicionando itens
frutas.set("maçã", 2);
frutas.set("banana", 5);
frutas.set("laranja", 3);

// Acessando um valor
console.log("Quantidade de bananas:", frutas.get("banana")); // 5

// Verificando se uma chave existe
console.log("Tem maçã?", frutas.has("maçã")); // true

// Removendo uma chave
frutas.delete("laranja");

// Tamanho do Map
console.log("Total de frutas:", frutas.size); // 2

// Iterando sobre o Map
for (let [fruta, quantidade] of frutas) {
  console.log(`${fruta}: ${quantidade}`);
}

const myMap = new Map()
  myMap.set(0, 'zero')
  myMap.set(1, 'um')

  for (const[r,s] of myMap) {
    console.log(r + '=' + s)
  }
