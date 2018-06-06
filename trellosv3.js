const myTodos = ['Buy camera','Record videos','youtube']
const myTodosNew =[{
    Title :'Buy camera',
    isDone : false,
},{
    Title :'Record videos',
    isDone : false,
},{
    Title :'youtube',
    isDone : false,
}]

const index = myTodosNew.findIndex(function(todo, index){
console.log(todo);

    return todo.Title === 'yotube'
})

console.log(index);
