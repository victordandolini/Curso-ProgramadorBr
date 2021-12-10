let argv = process.argv.slice(2);
// let operador = require("./Operadores Aritimeticos")
let soma = require("./Operadores Aritimeticos").soma
let multiplica = require("./Operadores Aritimeticos").multiplica
let diminui = require("./Operadores Aritimeticos").diminui
let divide = require("./Operadores Aritimeticos").divide

let a = Number(argv[1]);
let b = Number(argv[2]);
let c = "";

if (argv[0] == "s"){
   c = soma(a, b)    
} else if (argv[0] == "d"){
    c = diminui(a, b)
} else if (argv[0] == "m"){
    c = multiplica(a, b)
} else if (argv[0] == "/"){
    c = divide(a, b)
} else{
 c ="Opção invalida"
}

console.log(c);