const accountId = 14234
let accountEmail = "hare@gmail.com"
var accountPassword = "23443"
accountCity = "Jaipur"
let accountState;

// accountId = 2 - not allowed
console.log(accountId);

accountEmail = "h@gmail.com"
accountPassword = "8900"
accountCity = "bengaluru"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])



/*
Prefer not to use var
because of issue in block scope and functional scope
*/