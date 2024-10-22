const accountId = 30081818
let accountEmail = "rsv@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState

//accountId = 2 // const is already declare so another value for const variable is not allowed

accountEmail = "rsv@asdf.com"
accountPassword = "12345678"
accountCity = "Wales"

console.log(accountId)

/* Prefer not to use var because of issue in block scope and functional scope*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])