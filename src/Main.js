const TodoList = require("../src/TodoList.js")
const todoList = new TodoList()

let mode = "create"
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('\n',`Please enter today's to-dos, or enter 'quit' to exit. Enter 'options' for more.`,'\n')
rl.on('line', (line) => {
  console.log('\n',`Received: ${line}`, '\n');
  runCommand(`${line}`)
  });
function runCommand(input){
    if (input === `quit`){
        process.stdin.unref();
        return 'Goodbye'
    } else console.log(parseCommand(input), '\n')
}

function parseCommand(input){
    if (input === "options"){
        mode = "options"
        return "Enter 'get' to get todos, 'set' to mark todos as done. Enter 'delete' to delete todos. To continue to enter your todos, enter 'create'."
    }
    else if (mode === "options"){
        return parseOptions(input)
    }
    if (mode === "create"){
    return stringifyCreate(input)
    }
    if (mode === "get"){
    return parseGet(input)
    }
    if (mode === "set"){
    return parseSet(input)
    }
    if (mode === "delete"){
    return parseDelete(input)
    }
    return "Invalid input"
}

function stringifyCreate(input){
    let output = ""
    const todo = todoList.create(input)
    output += `To-do: ${todo.text}`
    output += ` ID: ${todo.id}`
    output += ` Status: ${todo.isComplete ? 'complete' : 'incomplete'}`
    return output
}

function parseOptions(input){
    if (input === "get" || input === "create" || input === "set" || input === "delete"){
        mode = input
    }
    if (input === "get")
        return `Received 'get', enter the todo ID, 'complete' for complete todos, 'incomplete' for incomplete ones, or 'all' for all.\nOptions and quit still available.`
    if (input === "create"){
        return `Received 'create', please enter your next todo, or enter 'options' or 'quit.`
    }
    if (input === "set"){
        return `Received 'set', please enter the ID of the todo you wish to mark complete, or enter 'options' or 'quit'`
    }
    if (input === "delete"){
        return `Received 'delete', please enter the ID of the todo you wish to delete, or enter 'options' or 'quit'` 
    }
}

function parseGet(input){
    if (isNaN(input)){
        if (input === "complete"){
            return stringifyList(todoList.getComplete())
        }
        if (input === "incomplete"){
            return stringifyList(todoList.getIncomplete())
        }
        if (input === "all"){
            return stringifyList(todoList.getAll())
        }
    }
    return stringifyTodo(todoList.getTodo(input))
}

function parseSet(input){
    if (isNaN(input)){
        return `Invalid ID, please try again or enter 'options' to choose another option.`
    }
    return stringifyTodo(todoList.setComplete(input))
}

function parseDelete(input){
    if (isNaN(input)){
        return `Invalid ID, please try again or enter 'options' to choose another option.`
    }
    return todoList.deleteTodo(input) ? `Todo deleted.` : `Invalid ID, please try again or enter 'options' to choose another option.`
}

function stringifyList(list){
    let output = ""
    for (todo of list){
        output += stringifyTodo(todo)
        output += '\n'
    }
    if (output === ""){
        return "No todos found."
    }
    return output
}

function stringifyTodo(todo){
    if (typeof(todo) === 'string'){
        return "Todo not found"
    }
    let output = ""
    output += `To-do: ${todo.text}`
    output += ` ID: ${todo.id}`
    output += ` Status: ${todo.isComplete ? 'complete' : 'incomplete'}`
    return output
}