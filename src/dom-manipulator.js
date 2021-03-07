class DomCreator {
    constructor(){
        this.displayArea = document.querySelector('.main')
        this.createButton = document.querySelector('.new-todo-button')
        this.taskList = []
    }

    

    appendToMain(thing){
        this.displayArea.appendChild(thing)
    }

    
}

export {DomCreator}