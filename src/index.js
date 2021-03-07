import "./styles.scss";
import {DomCreator} from './dom-manipulator.js'
import {Task} from './task.js'


let dom = new DomCreator()
let index = 0

dom.createButton.addEventListener('click', () => {god()})

function god(){
    index++
    let a = new Task(index)
    dom.add(a)
    console.log(dom.taskList)
    
}

god()

