let useremail ='123abcaassd'
let password = '1234'

let userChecker = function(user){
    if(user.includes(123) && (user.length>6))
    {
        return true
    }

    return false
}


let passChecker = function(pass){
    if(pass.includes(1234) && (pass.length>8)){
        return true
    }
 return false  

}

console.log( userChecker(password));
console.log( userChecker(useremail));