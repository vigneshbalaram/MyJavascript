const superheroes = ['viki','hny','vihaa']
superheroes.unshift('sai');
superheroes.push('sai vihaa')
superheroes.splice(2,3,'saisai')
console.log(superheroes);

let sayHello = function(name, number){
    console.log(`HI ${name} welcome to my page `) 
    console.log(`HI ${name} you have ${number} posts`) 


superheroes.forEach(sayHello);

sayHello('sai vihaa',5)


