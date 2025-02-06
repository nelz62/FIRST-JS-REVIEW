let todo = [];

const todoform = document.querySelector('.todo-form');
const todoinput = todoform.querySelector('input');
const todolist = document.querySelector('.todo-list');

function renderTodos(){

    todolist.innerHTML = '';
    todo.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = ` <span>${todo}</span>
        <button onclick ="editTodo(${index})">Edit</button>
        <button onclick ="deleteTodo(${index})">Delete</button>
        
        `;
        
        todolist.appendChild(li);
    });
function addTodo(){

    event.preventDefault();

    const newTodo = todoinput.value.trim();
    if(newTodo){
        todo.push(newTodo);
        renderTodos();
    
    todo.push(newTodo);
    renderTodos();
    }
}

function editTodo(index){
    const updateTodo = prompt('Edit Todo', todo[index]);
    if(updateTodo !== null){
        todo[index] = updateTodo.trim();
        renderTodos();
    }
}

function deleteTodo(index){
    if(confirm('Are you sure you want to delete this todo?')){
        todo.splice(index, 1);
        renderTodos();
    }

}
todoform.addEventListener('submit', addTodo);

renderTodos
}

