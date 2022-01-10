- Create a todo item that has an ID, text description, and starts off incomplete
- Get all todo items
- Set a todo completed by its ID
- Get only todo items that are incomplete
- Get only todo items that are complete
- Search and return a todo item by its ID, or return a message saying it doesn’t exist
- Remove a todo item by its ID

// Add your domain model below
| Objects | Properties    | Messages           | Output     |
| :------ | :---------    | :-------           | :-----     |
| TD List | contents(arr) | getAll()           | arr        |
|         |               | getIncomplete()    | arr        |
|         |               | getComplete()      | arr        |
|         |               | getTodo(arr[id])   | object/err |
|         |               | setStatus(arr[id]) | ?          |
|         |               | removeTodo(arr[id])|            |
|  To-do  | ID, text,     | getID()            | number     |
|         | status        | getStatus()        | boolean    |
|         |               | getText()          | string     |
|         |               |                    |            |
|         |               |                    |            | 









|         |               |                |        |