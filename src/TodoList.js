//const Todo = require("../src/Todo.js")
class TodoList {
    constructor(){
    this.list = []
    this.nextID = 1
    }
    create(str){
      const todo = {
          id: this.nextID,
          text: str,
          status: "incomplete"
      }
      this.nextID++
      this.list.push(todo)
      return todo
    }

    setComplete(numberID) {
       this.list[numberID - 1]["status"] = "complete"
       return this.list[numberID - 1]
    }

    getComplete() {
        const output = []
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i]["status"] === "complete") {
                output.push(this.list[i])
            }
        }
        return output
    }

    getIncomplete () {
        const output = []
        for (let i = 0; i < this.list.length; i++) {
        if (this.list[i]["status"] === "incomplete") {
            output.push(this.list[i])
        }
        }
        return output
    }

    getTodo(id) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i]['id'] === id) {
                return this.list[i]
            }
        }
        return "Todo not found"
    }
  
    getAll(){
        return this.list
    }

    deleteTodo(id){
        if (typeof(id) !== "number"){
            return "invalid ID"
        }
        const output = []
        for(let i = 0; i < this.list.length; i++) {
            if (this.list[i]['id'] !== id) {
                output.push(this.list[i])
            }
        }
        return output
    }
  }
  module.exports = TodoList 