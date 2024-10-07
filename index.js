"use strict";
const dropdown = document.getElementById('dropdown');
const hamburger = document.getElementById('hamburger');
const textarea = document.getElementById('textarea');
const savebtn = document.getElementById('savebtn');
const displayarea = document.getElementById('displayarea');
const user = document.getElementById('user');
const taskDisplay = document.getElementById('taskDisplay');
const taskbutton = document.getElementById('taskbutton');
let taskList = [];
dropdown.style.display = 'none';
hamburger.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});
savebtn.addEventListener('click', () => {
    const taskcontent = textarea.value;
    // console.log(taskcontent);
    if (taskcontent !== '') {
        const taskId = taskList.length + 1;
        const newTask = {
            id: taskId,
            content: taskcontent
        };
        taskList.push(newTask);
        taskDisplay.innerHTML += `<li><input type="checkbox" name="" 
          id="${newTask.id}" class="done"><span class="task-content">${newTask.content} </span><button class="delete"><i class="fa-solid fa-trash"></i></button></li>`;
        textarea.value = '';
        user.style.display = 'none';
        displayarea.style.display = 'block';
        taskbutton.style.display = 'block';
    }
    else {
        alert('please enter a task before saving');
    }
});
taskbutton.addEventListener('click', () => {
    user.style.display = 'block';
    displayarea.style.display = 'none';
});
taskDisplay.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('done')) {
        const listItem = target.closest('li');
        const taskContent = listItem.querySelector('.task-content');
        if (target.checked) {
            taskContent.style.textDecoration = 'line-through';
        }
        else {
            taskContent.style.textDecoration = 'none';
        }
    }
    if (target.classList.contains('delete') || target.closest('.delete')) {
        const listItem = target.closest('li');
        const taskId = listItem.dataset.id;
        taskList = taskList.filter(task => task.id.toString() !== taskId);
        listItem.remove();
    }
});
// const done = document.querySelectorAll('.done');
// for (let i=0; i<taskList.length; i++){
//     done[i].addEventListener('click', ()=>{
//     })
// }
