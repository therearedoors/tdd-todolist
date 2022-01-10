const Todo = require("../src/Todo.js")
const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
    }
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
        const output = []
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].isComplete === true) {
                output.push(this.list[i])
            }
        }
        return output
    }

    getIncomplete () {
        const output = []
        for (let i = 0; i < this.list.length; i++) {
        if (this.list[i]["isComplete"] === false) {
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

    getTodosForThisDay(day){
        return this.list.filter(todo => days[`${todo['day']}`] === day)
    }


    deleteTodo(id){
        if (!this.list[id-1]){
            return "invalid ID"
        }
        const output = []
        for(let i = 0; i < this.list.length; i++) {
            if (this.list[i]['id'] !== parseInt(id)) {
                output.push(this.list[i])
            }
        }
        return output
    }
  }
  module.exports = TodoList