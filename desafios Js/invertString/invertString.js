// Reverter String:

// Crie uma função que inverte uma string. Por exemplo, "hello" deve se tornar "olleh".

let word = prompt("Digite uma palavra:");

let inverteword = "";

for(let i = word.length  -1; i >= 0 ; i++ ){
inverteword += word[i]
}

console.log(inverteword)

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Digite uma palavra: ', (word) => {
//   let inverteword = "";

//   for (let i = word.length - 1; i >= 0; i--) {
//     inverteword += word[i];
//   }

//   console.log(inverteword);
//   rl.close();
// });
