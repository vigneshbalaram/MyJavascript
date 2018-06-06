const myTodo = []

myTodo.unshift('search new home')
myTodo.unshift('relocate soon')
myTodo.unshift('hit new envi')
myTodo.unshift('achieve your mindset')

for (let index = myTodo.length-1; index >=0; index--) {
    console.log(`my task no.${index} and to do is ${myTodo[index]} `)
    
}


