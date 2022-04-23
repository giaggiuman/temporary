// Globals - no window

// __dirname - path to directory
// __filename - file name
// require - function to use modules (CommonJs) 
// module - INFO ABOUT CURRENT MODULE (file)
// process - info about env where the program is being uxecuted

console.log(__filename);

setInterval(() => {
console.log("sex");
}, 1000)

//Modules

const names = require('./4names');
const sayHi = require('./5-utils');

const { dog } = require('./6-alternative-flavour');
const { singlePerson } = require('./6-alternative-flavour');
const cucco = require('./6-alternative-flavour')
require('./7-mind-gramade')
// console.log(singlePerson);

if (singlePerson.inventory[0] == "item2") {
    console.log("bravo")
} else {console.log('caco')}



sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
