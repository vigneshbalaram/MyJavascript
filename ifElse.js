var studentGrade = 7

if (studentGrade == 5) {
    console.log("Pass") 
}
else if (studentGrade == 10) {
    console.log("Excellent")
    
}
else if (studentGrade == 3)
{
    console.log("poor")
}
else
{
    console.log("fail")
}

 let usVerified = true
 let isLoggedIn = true
 let hasPaymentToken = true
 let guest = true

if (!usVerified && isLoggedIn && hasPaymentToken) {
    console.log('greeting the user ')
    console.log('You are a valid user')
}
else if  (!usVerified || guest) {
console.log('please subscribe us for full version')    
} else {
    console.log('please contact admin')
}



