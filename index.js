//Ejercicio #0
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, pete, mary];
let usersMapped = [];

for (let usr of users) {
    usersMapped.push({ fullName: usr.name + ' ' + usr.surname, id: usr.id });
}

console.log("==========Resultado Ejercicio #0==========")
console.log(usersMapped);
alert(usersMapped[0].id) // 1
alert(usersMapped[0].fullName) // John Smith
console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith
//Ejercicio #1
let fruits = ["Apples", "Pear", "Orange"];// insertar un nuevo valor en la "copia"
let shoppingCart = fruits; shoppingCart.push("Banana");// ¿Qué hay en las frutas?
console.log("==========Resultado Ejercicio #1==========")
console.log(shoppingCart); // ? 4
//alert( fruits.length ); // ? 4
console.log(fruits.length); // ? 4
//Ejercicio #2
let arrobj = ["Jazz", "Blues"];
console.log("==========Resultado Ejercicio #2==========")
console.log(arrobj);
arrobj.push("Rock-n-Roll");
console.log(arrobj);
arrobj[Math.floor((arrobj.length - 1) / 2)] = "Classics";
console.log(arrobj);
arrobj.shift();
console.log(arrobj);
arrobj.unshift("Rap", "Reggae");
console.log(arrobj);
//Ejercicio #3
let arrnumbers = [0];
const sumInput = () => {
    const prm = prompt('Enter any number or `Cancelar` for end');
    if (prm == 'Cancelar' || prm == '' || prm == null || prm == undefined) {
        let sumt = arrnumbers.reduce((acc, curr) => {
            return parseInt(acc) + parseInt(curr);
        });
        console.log(`Result is: ${arrnumbers}`);
        console.log(`Result is: ${sumt}`);
    } else if (prm >= 0) {
        arrnumbers.push(prm);
        sumInput();
    } else {
        let sumt = arrnumbers.reduce((acc, curr) => {
            return parseInt(acc) + parseInt(curr);
        });
        console.log(`Result is: ${arrnumbers}`);
        console.log(`Result is: ${sumt}`);
    }
};
console.log("==========Resultado Ejercicio #3==========")
sumInput();
//Ejercicio #4
const filterRange = (data, a, b) => {
    let dat = [];
    for (var i = 0, len = data.length; i < len; i++) {
        if (data[i] >= a && data[i] <= b) {
            dat.push(data[i]);
        }
    }
    return dat;
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log("==========Resultado Ejercicio #4==========")
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)
console.log(filtered); // 3,1 (matching values)
console.log(arr); // 5,3,8,1 (not modified)
//Ejercicio #5
const copySorted = (data) => {
    let rs2 = data.slice().sort();
    return rs2;
}
let arr2 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr2);
console.log("==========Resultado Ejercicio #5==========")
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr2); // HTML, JavaScript, CSS (no changes)
//Ejercicio #6
function Calculator() {
    this.calculate = function (str) {
        let split = str.split(' '),
            a = +split[0],
            operator = split[1],
            b = +split[2];
        return this.method[operator](a, b);
    };

    this.method = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.addMethod = function (operator, funct) {
        this.method[operator] = funct;
    };
}
let calc = new Calculator;
alert(calc.calculate("3 + 7")); // 10
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
console.log("==========Resultado Ejercicio #6==========")
alert( result ); // 8
console.log(result); // 8
//Ejercicio #8
let login = 'Empleado';
let mensaje;
mensaje = (login == 'Empleado') ? 'Hola' : mensaje;
mensaje = (login == 'Director') ? 'Saludos' : mensaje;
mensaje = (login == '') ? 'Sin inicio de sesión' : mensaje;
mensaje = (login == null) ? '' : mensaje;
console.log("==========Resultado Ejercicio #8==========")
console.log(mensaje);