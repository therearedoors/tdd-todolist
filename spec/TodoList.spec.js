/*
DONE - Create a todo item that has an ID, text description, and starts off incomplete
DONE -  Get all todo items
DONE - Set a todo completed by its ID
DONE - Get only todo items that are incomplete
DONE - Get only todo items that are complete
DONE -  Search and return a todo item by its ID, or return a message saying it doesn’t exist
 Remove a todo item by its ID
*/

const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it("creates a todo item", () => {
    // set up
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("gets all todos", () => {
    // set up
    const one = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    const two = {
      id: 2,
      text: "make the bed!",
      status: "incomplete"
    }
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
    const expected = {
      id: 1,
      text: "Do the washing!",
      status: "complete"
    }
    // execute
    todoList.create("Do the washing!")
    const result = todoList.setComplete(1)
    // verify
    expect(result).toEqual(expected)
  })

  it("return all incomplete todo's", () => {
    // set up
    const one = {
      id: 1,
      text: "Make some food!",
      status: "complete"
    }
    const expected = [{
      id: 2,
      text: "Wash the dishes!",
      status: "incomplete",
    },
    {
      id: 3,
      text: "Feed the cat!",
      status: "incomplete"
    }]
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
    const one = {
      id: 1,
      text: "Make some food!",
      status: "incomplete"
    }
    const expected = [{
      id: 2,
      text: "Wash the dishes!",
      status: "complete",
    },
    {
      id: 3,
      text: "Feed the cat!",
      status: "complete"
    }]
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
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Make some food!")
    todoList.create("Wash the dishes!")
    todoList.create("Feed the cat!")
    const result = todoList.getTodo(1)

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
    const result = todoList.getTodo(5)

    // verify
    expect(result).toEqual(expected)
  })
  it("deletes a todo item", () => {
    // set up
    const expected = [{
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Make some food!")
    const result = todoList.deleteTodo(2)
    // verify
    expect(result).toEqual(expected)
  })
  it("returns error message for invalid input", () => {
    // set up
    const expected = "invalid ID"
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Make some food!")
    const result = todoList.deleteTodo("null")
    // verify
    expect(result).toEqual(expected)
  })
}) 

/*
const TodoList = require("../src/TodoList.js")
const Todo = require("../src/Todo.js")

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it("creates a todo item", () => {
    // set up
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    const expected = new Todo("turn the heating on!", 1)
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })

  it("gets all todo items", () => {
    // set up
    const todoOne = new Todo("turn the heating on!", 1)
    const todoTwo = new Todo("make the bed", 2)
    const expected = [todoOne,todoTwo]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("make the bed")
    const result = todoList.getAll()
    // verify
    expect(result).toEqual(expected)
  })
/*
  it("gets all todo items", () => {
    // set up
    const expected = ["turn the heating on!","make the bed"]
    const one = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    const two = {
      id: 2,
      text: "make the bed",
      status: "incomplete"
    }
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })
*/