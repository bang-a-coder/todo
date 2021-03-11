class Task {
    constructor(indexVal, title){
        this.title = title
        this.discription = 'sample desciption'
        this.indexVal = indexVal
        this.completeBtn
    }


    createTaskVisual(parent){
        console.log('im supposed to create')
        let domInstanse = document.createElement('div')
        let descriptionDiv = document.createElement('span')

        let topDetails = document.createElement('div') 
            let left = document.createElement('div')
            let right = document.createElement('div')

        domInstanse.dataset.index = this.indexVal

        domInstanse.classList.add('task')

        topDetails.classList.add('top-details')
            left.classList.add('left')
            right.classList.add('right')

            let dltButton = document.createElement('div')
                dltButton.classList.add('dltButton')
                dltButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="check-icon" data-index="${this.indexVal}" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"/></svg>`

            topDetails.appendChild(dltButton)
            left.innerHTML += `<span class="textarea-new" role="textbox" contenteditable >${this.title}</span>`
            right.innerHTML = '<div class="due-date">27/01</div>'
        topDetails.appendChild(left)
        topDetails.appendChild(right)

        // dltButton.addEventListener('click', function(){
        //     console.log('clicked')
        // })

        this.completeBtn = dltButton                     //TODO CLEAN THE MESS

                
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
}

export {Task}