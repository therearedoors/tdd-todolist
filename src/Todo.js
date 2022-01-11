const date = new Date
class Todo {
    constructor(str, num, bool=false){
    this._id = num
    this._text = str.trim()
    this._isComplete = bool
    }
    get id(){
        return this._id
    }

    get text(){
        return this._text
    }

    get isComplete(){
      return this._isComplete
    }

    get day(){
        return date.getDay()
    }

    set isComplete(bool){
        this._isComplete = bool
    }
}

module.exports = Todo