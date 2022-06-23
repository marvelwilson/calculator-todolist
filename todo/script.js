;//selectors
function seletor(element){
    return document.querySelector(element)
}
const todoInput = seletor('.todo-input')
const todoButton = seletor('.todo-button')
const todoList = seletor('.todo-list')
const filterOption = seletor('.filter-todo')



//Event Listener
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)
filterOption.addEventListener('click', filterTodo)

function addTodo(event){
    //prevent default
    event.preventDefault()
if (todoInput.value!="") {
  
    //create a Dom element
    todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    newTodo = document.createElement('li')
    newTodo.innerText=todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    
    //check mark btn
    completedBtn = document.createElement('button')
    completedBtn.innerHTML='<i>&check;</i>'
    completedBtn.classList.add('complete-btn')
    todoDiv.appendChild(completedBtn)


    item = [];
      
    
    if(localStorage.getItem('todoitems')==null){
      item.push(todoInput.value)
     localStorage.setItem('todoitems',JSON.stringify(item))
    }else{
      item = JSON.parse(localStorage.getItem('todoitems'))
      item.push(todoInput.value)
      localStorage.setItem('todoitems',JSON.stringify(item))
    }
      //check trash btn
      trashBtn = document.createElement('button')
      trashBtn.innerHTML='<i>&times;</i>'
      trashBtn.classList.add('trash-btn')
      todoDiv.appendChild(trashBtn)

      todoList.appendChild(todoDiv)
      todoInput.value=""
     
      

    
      console.log(item)
}
}
window.onload = function () {
  items = JSON.parse(localStorage.getItem('todoitems'))
  for (let index = 0; index < items.length; index++) {
    
    todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    newTodo = document.createElement('li')
    newTodo.innerText=items[index]
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    
    //check mark btn
    completedBtn = document.createElement('button')
    completedBtn.innerHTML='<i>&check;</i>'
    completedBtn.classList.add('complete-btn')
    todoDiv.appendChild(completedBtn)
       //check trash btn
       trashBtn = document.createElement('button')
       trashBtn.innerHTML='<i>&times;</i>'
       trashBtn.classList.add('trash-btn')
       trashBtn.setAttribute('onclick','trash('+index+')')
       todoDiv.appendChild(trashBtn)
       todoList.appendChild(todoDiv)


     

  }
  

}
function trash(id) {
  items = JSON.parse(localStorage.getItem('todoitems'))
  console.log(items)
 newitems = items.splice(id,1-id)
 if (newitems) {
   localStorage.setItem('todoitems', JSON.stringify(items))
 }

}
 function deleteCheck(e){
         item = e.target
         if (item.classList[0]==="trash-btn") {
             const todo = item.parentElement;
             todo.classList.add('fall')
            todo.addEventListener('transitionend', function(params) {
                todo.remove() 
             })
             
         }
         if (item.classList[0]==="complete-btn") {
            const todo = item.parentElement;
            todo.classList.toggle('completed')
        }
      }
      function filterTodo(e) {
          const todos = todoList.childNodes;
          todos.forEach(function (todo) {
            //   console.log(todo)
              switch (e.target.value) {
                  case 'all':
                    todo.style='display:flex'
                    console.log()
                      break;
                      case 'completed':
                          console.log(todo.ownerDocument)
                      if (todo.classList.contains('completed')) {
                        todo.style='display:flex'
                      }else{
                        todo.style.display='none'
                      }
                   
              }
          });
      }
     