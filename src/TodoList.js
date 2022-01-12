const Todo = require("../src/Todo.js")
class TodoList {
    constructor(){
    this.list = []
    this.nextID = 1
}
    create(str){
      const todo = new Todo(str, this.nextID)
      this.nextID++
      this.list.push(todo)
      return todo
    }

    getAll(){
        return this.list
    }

    setComplete(numberID) {
       this.list[numberID - 1].isComplete = true
       return this.list[numberID - 1]
    }

    getComplete() {
        return this.getStatus(true)
    }

    getIncomplete () {
        return this.getStatus(false)
    }

    getStatus(status){
        const output = []
        for (let i = 0; i < this.list.length; i++) {
        if (this.list[i]["isComplete"] === status) {
            output.push(this.list[i])
        }
        }
        return output
    }


    getTodo(id) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i]['id'] == id) {
                return this.list[i]
            }
        }
        return "Todo not found"
    }


    deleteTodo(id){
        if (!this.list[id-1]){          // needs fixing - currently will break if someone tries to 'get' todos by ID after some have been deleted, this could be fixed by using a for loop to find by id, instead of the id-1 hack used here.
            return null
        }
        return this.list.splice(id-1,1)
    }
  }
  module.exports = TodoList