let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let sum = 0;

for (index = 0; index<numbers.length; index += 1) {
  sum = sum + numbers[index];
}
console.log(sum)