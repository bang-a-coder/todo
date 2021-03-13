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

    task.saveButton.addEventListener('click', function() {
        console.log('clicked')
        console.log('input is ' + task.descriptionDiv.innerHTML)
        task.description = task.descriptionDiv.innerHTML
        task.saveButton.classList.add('displayN')
        task.descriptionDiv.classList.add('displayN')
        task.domInstanse.classList.remove('expand')

        dom.updateDescription(task.indexVal,  task.titleDiv.innerHTML,task.descriptionDiv.innerHTML)
        console.log(task.description)
        console.log(dom.taskList)
        populateStorage()

    })

    dom.newTaskTitle.innerHTML = ''


    console.log(dom.taskList)

    
}


if(!localStorage.getItem('domList')) {
    populateStorage();
  } else {
    setStyles();
  }

function populateStorage(){
    console.log('populate')
    localStorage.setItem('domList', dom.taskList)
}

function setStyles(){
    console.log('set')
    dom.taskList = localStorage.getItem('domList')
}

