class Todo {
    constructor(str, num){
    this._id = num
    this._text = str
    this._status = false
    }

    get id(){
        return this._id
    }

    get text(){
        return this._text
    }

    get status(){
      return this._status
    }
}

module.exports = Todo