import {Task} from './task.js'


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
        console.log('runingin"')
        localStorage.setItem('domList', JSON.stringify(this.taskList))          // Update localStorage on change
        console.log(localStorage)
    }

    updateDescription(idxVal, title, description) {
        const updateThis = this.taskList.find( task => task.indexVal === idxVal)

        updateThis.description = description
        updateThis.title = title
    }

    remove(idxVal) {
        this.taskList = this.taskList.filter(item => item.indexVal != idxVal)
        let ripDaddy = document.querySelector(`div[data-index="${idxVal}"]`);
        ripDaddy.parentElement.removeChild(ripDaddy)
        localStorage.setItem('domList', JSON.stringify(this.taskList))          // Update localStorage on change

    }

    render() {
        console.log('Rendering')

        let data = JSON.parse(localStorage.getItem('domList')).map(e =>  Task.fromObj(e))

        this.taskList = data
        console.log(this.taskList)
        this.taskList.forEach(e => {e.createTaskVisual(this.displayArea)})
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