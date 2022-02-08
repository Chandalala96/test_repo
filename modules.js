//CommonJS, every file is a module (by default);
//Modules, Encapsulated code (only share minimum);

// 

// const sayHi = (name) => {
//     console.log(`Wassup ${name}`);
// }

const names = require('./firstmodule');
const sayHi = require('./secondmodule');
const data = require('./thirdmodule');
console.log(data);
sayHi("TrapSlik");
sayHi(names.name1);
sayHi(names.name2);