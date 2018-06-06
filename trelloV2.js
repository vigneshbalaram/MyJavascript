let myTodos ={
    name : 'Vignesh',
    day:'Monday',
    meeting : 0,
    meetDone :0 ,
    addMeeting : function(meet){
    this.meeting = this.meeting + meet
    
    },
    addSummary : function(){
        return `Hi ${this.name} have ${this.meeting + this.meetDone} meetings for today`
    },
    meetingDone : function(meet){
        this.meetDone = this.meetDone - meet
    },
    reset : function(){
        this.meeting = 0
        this.meetDone = 0
        return `your meetings  has been resetted`
    }

}

myTodos.addMeeting(5)
myTodos.meetingDone(2)
console.log(myTodos.addSummary())
console.log(myTodos.reset())
console.log(myTodos)


//Assignment


