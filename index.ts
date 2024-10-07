
const dropdown = document.getElementById('dropdown') as HTMLElement;
const hamburger = document.getElementById('hamburger') as HTMLButtonElement;
const textarea = document.getElementById('textarea') as HTMLTextAreaElement;
const savebtn = document.getElementById('savebtn') as HTMLButtonElement;
const displayarea = document.getElementById('displayarea') as HTMLElement;
const user = document.getElementById('user') as HTMLElement;
const taskDisplay = document.getElementById('taskDisplay') as HTMLElement;
const taskbutton = document.getElementById('taskbutton') as HTMLButtonElement;




interface Details{
    id: number,
    content: string| number
}

let taskList: Details[] = []


dropdown.style.display='none';

hamburger.addEventListener('click', ()=>{
    dropdown.style.display =  dropdown.style.display==='none'? 'block': 'none';  
})

savebtn.addEventListener('click', ()=>{
   const taskcontent = textarea.value;
  // console.log(taskcontent);
   

   if(taskcontent !== ''){
        const taskId = taskList.length + 1;

        const newTask: Details = {
            id: taskId,
            content: taskcontent
        };

   taskList.push(newTask);


  taskDisplay.innerHTML += `<li><input type="checkbox" name="" 
          id="${newTask.id}" class="done"><span class="task-content">${newTask.content} </span><button class="delete"><i class="fa-solid fa-trash"></i></button></li>`;
    
   textarea.value = '';
   user.style.display= 'none';
   displayarea.style.display = 'block';
   taskbutton.style.display = 'block';
   }else{
    alert('please enter a task before saving')
   }

   
})

taskbutton.addEventListener('click', ()=>{
    user.style.display= 'block';
   displayarea.style.display = 'none';

})


taskDisplay.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
  

    if (target.classList.contains('done') ) {
      const listItem = target.closest('li')!;
      const taskContent = listItem.querySelector('.task-content') as HTMLElement;
      if ((target as HTMLInputElement).checked) {
        taskContent.style.textDecoration = 'line-through';
      } else {
        taskContent.style.textDecoration = 'none';
      }
    }
  

    if (target.classList.contains('delete') || target.closest('.delete')) {
      const listItem = target.closest('li')!;
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


