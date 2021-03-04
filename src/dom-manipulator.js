class DomCreator {
    constructor(){
        this.displayArea = document.querySelector('.main')
        this.createButton = document.querySelector('.new-todo-button')
    }

    onBtnClick(f){
        this.createButton.addEventListener('click', function(f) {
            f()
        })
    }
}

export {DomCreator}