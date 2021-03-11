import "./styles.scss";
import {DomCreator} from './dom-manipulator.js'
import {Task} from './task.js'


let dom = new DomCreator()
let index = 0

dom.createTaskBtn.addEventListener('click', () => {god()})

function god(){
    index++
    let a = new Task(index, dom.newTaskTitle.innerHTML)
    dom.add(a)
    a.createTaskVisual(dom.displayArea)
    a.completeBtn.addEventListener('click', function() {
        dom.remove(a.indexVal)
        console.log(dom.taskList)

    })

    dom.newTaskTitle.innerHTML = ''


    console.log(dom.taskList)

    
}


