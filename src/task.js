class Task {
    constructor(indexVal, title, description='empty'){
        this.title = title
        this.description = description
        this.indexVal = indexVal

        this.domInstanse
        this.titleDiv
        this.completeBtn
        this.saveButton
        this.descriptionDiv
    }

    static fromObj(jason){
        let taaask = new Task(jason.indexVal, jason.title, jason.description)
        console.log(taaask)
        return new Task(jason.indexVal, jason.title, jason.description)
    }


    createTaskVisual(parent){
        console.log(`what's my purpose? guess I just create divs`)
        let domInstanse = document.createElement('div')

        let topDetails = document.createElement('div') 
            let left = document.createElement('div')
            let right = document.createElement('div')
        
        let titleDiv = document.createElement('span')
        let descriptionDiv = document.createElement('span')
        let saveButton = document.createElement('div')
        let dltButton = document.createElement('div')

        domInstanse.dataset.index = this.indexVal
            domInstanse.classList.add('task')

        topDetails.classList.add('top-details')
            dltButton.classList.add('dltButton')
            dltButton.id = 'completeButton'
            dltButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="check-icon" data-index="${this.indexVal}" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"/></svg>`
            left.classList.add('left')
                titleDiv.classList.add('textarea-new')
                    titleDiv.setAttribute('role', 'textbox')
                    titleDiv.toggleAttribute('contenteditable')
                    titleDiv.innerHTML = this.title

            left.appendChild(titleDiv)
            right.classList.add('right')
                right.innerHTML = '<div class="due-date">27/01</div>'
        topDetails.appendChild(dltButton)
        topDetails.appendChild(left)
        topDetails.appendChild(right)
                
        descriptionDiv.classList.add('textarea', 'displayN')
            descriptionDiv.setAttribute('role', 'textbox')
            descriptionDiv.toggleAttribute('contenteditable')

        saveButton.classList.add('save-button', 'displayN')
            saveButton.innerHTML = 'Save'

        domInstanse.appendChild(topDetails)
        domInstanse.appendChild(descriptionDiv)
        domInstanse.appendChild(saveButton)
        domInstanse.addEventListener('click', expand)

        this.domInstanse = domInstanse
        this.completeBtn = dltButton  
        this.descriptionDiv = descriptionDiv
        this.saveButton = saveButton
        this.titleDiv = titleDiv

        
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