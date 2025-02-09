const accountId = 72854 //constant values cant be changed
let accountEmail = "faz123@gmail.com"
var accountPassword = 1234
accountCity = "Andhra"
let accountState; //value will be undefined.
//accountId = 87575 
/*
prefer not to use var
because of issue in block scope and functional scope
*/

// console.log(accountId)
console.table([accountId, accountEmail,accountPassword,accountCity,accountState])