class Task {
    constructor(){
        this.nane = 'boi'
        this.discription = 'sample desciption'

    }
}

function createTaksVisual(parent){
    let domInstanse = document.createElement('div')
    let descriptionDiv = document.createElement('span')

    let topDetails = document.createElement('div') 
        let left = document.createElement('div')
        let right = document.createElement('div')

    domInstanse.classList.add('task')

    topDetails.classList.add('top-details')
        left.classList.add('left')
        left.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="check-icon" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"/></svg>'
        left.innerHTML += '<div class="task-title">An Important Thing</div>'
        right.innerHTML = '<div class="due-date">27/01</div>'
    topDetails.appendChild(left)
    topDetails.appendChild(right)
            
    descriptionDiv.classList.add('textarea', 'displayN')
        descriptionDiv.setAttribute('role', 'textbox')
        descriptionDiv.toggleAttribute('contenteditable')


    domInstanse.appendChild(topDetails)
    domInstanse.appendChild(descriptionDiv)
    domInstanse.addEventListener('click', function (){
            domInstanse.classList.add(`expand`)
            descriptionDiv.classList.remove('displayN')
        })

    
    parent.appendChild(domInstanse)
}

export {Task, createTaksVisual}