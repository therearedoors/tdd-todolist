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
        console.log('Goodbye')
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
    return parseCreate(input)
    }
    if (mode === "get"){
    return parseGet(input)
    }
    return "Invalid input"
}

function parseCreate(input){
    let output = ""
    const todo = todoList.create(input)
    output += `To-do: ${todo.text}`
    output += ` ID: ${todo.id}`
    output += ` Status: ${todo.isComplete ? 'complete' : 'incomplete'}`
    return output
}

function parseOptions(input){
    if (input === "get" || input === "create"){
        mode = input
    }
    if (input === "get")
        return console.log(`Received 'get', enter the todo ID, 'complete' for complete todos, 'incomplete' for incomplete ones, or 'all' for all.`,'\n','Options and quit still available.')
    if (input === "create"){
        return console.log(`Received 'create', please enter your next todo, or enter 'options' or 'quit.`, '\n')
    }
}

function parseGet(input){
    if (isNaN(input)){
        if (input === "complete"){
            return parseList(todoList.getComplete())
        }
        if (input === "incomplete"){
            return parseList(todoList.getIncomplete())
        }
    }
    return parseTodo(todoList.getTodo(input))
}

function parseList(list){
    let output = ""
    for (todo of list){
        output += parseTodo(todo)
        output += '\n'
    }
    return output
}

function parseTodo(todo){
    if (typeof(todo) === 'string'){
        return "Todo not found"
    }
    let output = ""
    output += `To-do: ${todo.text}`
    output += ` ID: ${todo.id}`
    output += ` Status: ${todo.isComplete ? 'complete' : 'incomplete'}`
    return output
}