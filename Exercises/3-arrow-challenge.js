const tasks = {
    tasks:[{
        text:'Stuff',
        completed:true
    },{
        text:'Run',
        completed:false
    },{
        text:'Workout',
        completed:false
    }],
    getTasks(){
        return this.tasks.filter(task => task.completed !== true)
    }
}



// console.log(tasks.tasks.filter(task => task.completed !== true))
console.log(tasks.getTasks())