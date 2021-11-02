# Test-Driven Development

## Todo App

### Learning Objectives
- Setup and use a test framework to help test code
- Use the Red Green Refactor loop to develop code
- Test-drive a program with multiple functions with unit tests

### Quickstart
1. Fork this repository
2. Clone your fork to your local machine (example command below, see note)
3. Install project dependencies

**NOTE: Replace `YOUR_GITHUB_USERNAME` with your github username if using the command below**
```sh
$ git clone git@github.com:YOUR_GITHUB_USERNAME/boolean-uk-tdd-todo-app.git && cd boolean-uk-tdd-todo-app
$ npm ci # to install dependencies
```

### Instructions
1. Follow a test-driven development process. Start with creating a domain model, then write a test, and pass it by writing source code. Repeat until you've finished.

### Requirements

You should be able to run this in your JS console (using your node REPL, or browser console). For any assumptions made, represent this in your domain model.

- Create a todo item that has an ID, text description, and starts off incomplete
- Show all todo items
- Show only todo items that are incomplete
- Show only todo items that are complete
- Search for a todo item by its ID and show it, or return a message saying it doesn’t exist
- Remove a todo item by its ID
- Only show the first 20chars of a todo item text description when showing multiple todo items. When showing a single todo, show all the text description

#### Example interactions
```sh
$ node
> const todoApp = require('./src/todoApp.js') // load your program into your REPL
undefined
> todoApp.create("Do the laundry")
{id: 1, text: "Do the laundry", status: "incomplete"}
> todoApp.create("Make the bed")
{id: 2, text: "Make the bed", status: "incomplete"}
> todoApp.setComplete(2)
{id: 2, text: "Make the bed", status: "complete"}
> todoApp.setComplete(3)
"Todo item not found"
> todoApp.showAll()
[{id: 1, text: "do laundry", status: "incomplete"}, {id: 2, text: "make the bed", status: "complete"}]
```

#### Further work

- Recreate this app using an object-oriented approach (eg: using classes)
- Add a user interface to this app so you can run this from the command line (don't worry about test-driving this once your unit tests for your app logic are passing)
