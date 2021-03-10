class DomCreator {
    constructor(){
        this.displayArea = document.querySelector('.main')
        //this.createTaskBtn = document.querySelector('.new-todo-button')
        this.newTaskArea = document.querySelector(`.create-task`)
        this.newTaskTitle = document.querySelector(`.textarea-new`)
        this.createTaskBtn = document.querySelector(`#add-button`)

        this.taskList = []
        this.detectFocus()

    }

    add(task){
        this.taskList.push(task)
    }

    remove(idxVal) {
        this.taskList = this.taskList.filter(item => item.indexVal != idxVal)
        let ripDaddy = document.querySelector(`div[data-index="${idxVal}"]`);
        ripDaddy.parentElement.removeChild(ripDaddy)
    }
    
    appendToMain(thing){
        this.displayArea.appendChild(thing)
    }

    detectFocus(){
        this.newTaskTitle.addEventListener('focus', function(){
            console.log('im focused')
        })

    }
    

    
}

export {DomCreator}