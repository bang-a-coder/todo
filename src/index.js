import "./styles.scss";
import {DomCreator,createTaskVisual} from './dom-manipulator.js'
import {Task} from './task.js'


let dom = new DomCreator()

dom.createButton.addEventListener('click', () => {god()})

function god(){
    let a = new Task()
    dom.add(a)
    console.log(dom.taskList)
}

god()

