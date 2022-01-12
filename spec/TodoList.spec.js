const TodoList = require("../src/TodoList.js")
const Todo = require("../src/Todo.js")

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it("creates a todo item", () => {
    // set up
    const expected = new Todo("turn the heating on!", 1)
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("gets all todos", () => {
    // set up
    const one = new Todo("turn the heating on!",1)
    const two = new Todo("make the bed!",2)
    const expected = [one, two]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("make the bed!")
    const result = todoList.getAll() 
    // verify
    expect(result).toEqual(expected)
  })

  it("set todo: complete by ID", () => {
    // set up
    const expected = new Todo(`Do the washing!`, 1, true)
    // execute
    todoList.create("Do the washing!")
    const result = todoList.setComplete(1)
    // verify
    expect(result).toEqual(expected)
  })

  it("return all incomplete todo's", () => {
    // set up
    const one = new Todo("Wash the dishes!", 2)
    const two = new Todo("Feed the cat!", 3)
    const expected = [one,two]
    // execute
    todoList.create("Make some food!")
    todoList.create("Wash the dishes!")
    todoList.create("Feed the cat!")
    todoList.setComplete(1)
    const result = todoList.getIncomplete()
    // verify
    expect(result).toEqual(expected)
  })
  
  it("return all complete todo's", () => {
    // set up
    const one = new Todo("Wash the dishes!",2,true)
    const two = new Todo("Feed the cat!",3,true)
    const expected = [one,two]
    // execute
    todoList.create("Make some food!")
    todoList.create("Wash the dishes!")
    todoList.create("Feed the cat!")
    todoList.setComplete(2)
    todoList.setComplete(3)
    const result = todoList.getComplete()
    // verify
    expect(result).toEqual(expected)
  })

  it("search for TODO by id", () => {
    // set up
    const expected = new Todo("Wash the dishes!",3)
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Make some food!")
    todoList.create("Wash the dishes!")
    todoList.create("Feed the cat!")
    const result = todoList.getTodo('3')

    // verify
    expect(result).toEqual(expected)
  })
  it("returns message if Todo not found", () => {
    // set up
    const expected = "Todo not found"
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Make some food!")
    todoList.create("Wash the dishes!")
    todoList.create("Feed the cat!")
    const result = todoList.getTodo('5')

    // verify
    expect(result).toEqual(expected)
  })
  it("deletes a todo item", () => {
    // set up
    const expected = [new Todo("Make some food!",2)]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Make some food!")
    const result = todoList.deleteTodo(2)
    // verify
    expect(result).toEqual(expected)
  })
  it("returns error message for invalid input", () => {
    // set up
    const expected = null
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Make some food!")
    const result = todoList.deleteTodo(null)
    // verify
    expect(result).toEqual(expected)
  })
  /*
  it("gets todos for a certain day", () => {
    // set up
    const one = new Todo("Make some food!", 1)
    const two = new Todo("Wash the dishes!", 2)
    const expected = [one, two]
    // execute
    //todoList.create("turn the heating on!")
    todoList.create("Make some food!")
    todoList.create("Wash the dishes!")
    //todoList.create("Feed the cat!")
    const result = todoList.getTodosForThisDay("Monday")
    // verify
    expect(result).toEqual(expected)
  })
  */
}) 