//Usando nuevo metodo que salio hace poquito de JS (toReversed())
//No conozco su soporte en las versiones de navegadores
//La diferencia con su metodo "hermano" ( reverse() ) es que no modifica el array original.

function reverseNewMethod(string) {
    return string.split("").toReversed().join("");
}

console.log(reverseNewMethod("hola"));


//Usando el metodo reverse()

function reverseOldMethod(string) {
    return string.split("").reverse().join("");
}

console.log(reverseOldMethod("hello"));

//Metodo iterativo usando for loop descendente

function reverseIterative(string) {
    const res = [];
    for (let i = string.length- 1; i >= 0; i--) {
      res.push(string[i]);
    }
    return res.join("");
  }
  
  console.log(reverseIterative("bonjour"));