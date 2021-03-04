import "./styles.scss";
import {DomCreator} from './dom-manipulator.js'
import {Task} from './task.js'

let dom = new DomCreator()

dom.createButton.addEventListener('click', () => {
    let a = new Task()
    console.log(a.domInstanse)
    //dom.displayArea.appendChild(a.domInstanse)
})
