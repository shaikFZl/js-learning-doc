const name = "Fazil"
const count = 50

console.log(`Today, ${name} has ${count} challenges a head to complete his daily streak`)

const gameName = new String('offline-games')

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('f'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,6)
console.log(anotherString)

const newStringOne = "     Fazil    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://fazil.com/fazil%40shaik"
console.log(url.replace('%40', '-'));

console.log(url.includes('fazil'));
console.log(gameName.split('-'));
