class Task {
    constructor(indexVal, title){
        this.title = title
        this.description = 'empty'
        this.indexVal = indexVal

        this.domInstanse
        this.completeBtn
        this.saveButton
        this.descriptionDiv
    }


    createTaskVisual(parent){
        console.log('im supposed to create')
        let domInstanse = document.createElement('div')
        let descriptionDiv = document.createElement('span')
        let saveButton = document.createElement('div')

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
            this.completeBtn = dltButton                     //TODO CLEAN THE MESS

            topDetails.appendChild(dltButton)
            left.innerHTML += `<span class="textarea-new" role="textbox" contenteditable >${this.title}</span>`
            right.innerHTML = '<div class="due-date">27/01</div>'
        topDetails.appendChild(left)
        topDetails.appendChild(right)

        // dltButton.addEventListener('click', function(){
        //     console.log('clicked')
        // })


                
        descriptionDiv.classList.add('textarea', 'displayN')
            descriptionDiv.setAttribute('role', 'textbox')
            descriptionDiv.toggleAttribute('contenteditable')

        this.descriptionDiv = descriptionDiv
        

        saveButton.classList.add('save-button', 'displayN')
            saveButton.innerHTML = 'Save'

            // saveButton.addEventListener('click', function() {
            //     console.log('clicked')
            //     console.log(typeof(descriptionDiv.innerHTML) + descriptionDiv.innerHTML)
            //     this.description = descriptionDiv.innerHTML
            //     saveButton.classList.add('displayN')
            //     descriptionDiv.classList.add('displayN')
            //     domInstanse.classList.remove('expand')
            //     //domInstanse.addEventListener('click', expand)
            //     console.log(this.description)
            // })

        this.saveButton = saveButton


        domInstanse.appendChild(topDetails)
        domInstanse.appendChild(descriptionDiv)
        domInstanse.appendChild(saveButton)
        domInstanse.addEventListener('click', expand)

        this.domInstanse = domInstanse
        
            function expand(e){
                if (e.target == domInstanse || e.target == topDetails) {
                    domInstanse.classList.add(`expand`)
                    descriptionDiv.classList.remove('displayN')
                    saveButton.classList.remove('displayN')
                }

                return
            }
        
        parent.appendChild(domInstanse)
    }
}

export {Task}