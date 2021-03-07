class DomCreator {
    constructor(){
        this.displayArea = document.querySelector('.main')
        this.createButton = document.querySelector('.new-todo-button')
    }

    

    appendToMain(thing){
        this.displayArea.appendChild(thing)
    }

    
}

export {DomCreator}