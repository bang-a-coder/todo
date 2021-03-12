import "./styles.scss";
import {DomCreator} from './dom-manipulator.js'
import {Task} from './task.js'


let dom = new DomCreator()
let index = 0

dom.createTaskBtn.addEventListener('click', () => {god()})

function god(){
    index++
    let task = new Task(index, dom.newTaskTitle.innerHTML)
    dom.add(task)
    task.createTaskVisual(dom.displayArea)
    task.completeBtn.addEventListener('click', function() {
        dom.remove(task.indexVal)
        console.log(dom.taskList)

    })

    dom.newTaskTitle.innerHTML = ''


    console.log(dom.taskList)

    
}


