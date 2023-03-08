'use strict'
import removeTask from "./Components/removeTask.js";
import taskCompleted from "./Components/taskComplete.js";

const CreateTask = (e) => {
e.preventDefault()
const task = document.createElement('li')
task.classList.add('card')
const content =
    `
    <div> 
        <i class="far fa-check-square icon check-icon"></i>
        <span class="task">${input.value}</span> 
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i> 
    `
    task.insertAdjacentHTML('beforeend', content)

    cardList.appendChild(task)
    
    input.value = ''
}




const cardList = document.querySelector('[data-task]')
const input = document.querySelector('[data-form-input]')
const create_btn = document.querySelector('[data-form-btn]')

create_btn.addEventListener('click', CreateTask)
cardList.addEventListener('click', taskCompleted);
cardList.addEventListener('click', removeTask);