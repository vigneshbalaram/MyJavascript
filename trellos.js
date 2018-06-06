let myTodos ={
     day : 'Monday',
     myMeeting : 0,
     meetDone : 0,
}

let addMeeting = function (todos,meet = 0) {

   todos.myMeeting = todos.myMeeting + meet
    
}

let meetingDone = function (todos,meet = 0) {
    todos.meetDone =todos.meetDone -meet
}

let resetDay = function(todos){
    todos.myMeeting = 0
    todos.meetDone = 0
}

let SummaryOfDay = function (todos) {
    let meetLeft = todos.myMeeting + todos.meetDone
    return `you have ${meetLeft} of meeting today !`
}

addMeeting(myTodos,5)
addMeeting(myTodos,4)
meetingDone(myTodos,3)
addMeeting(myTodos,1)
console.log( SummaryOfDay(myTodos));
console.log(myTodos);

