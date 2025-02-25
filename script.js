let tasks = []
function addTask(){
    var taskInput = document.getElementById('todoInput');
    var taskValue = taskInput.value;

    //Checking if input is empty or not 
    if(taskValue.trim() !== ""){
        //add Task 
        tasks.push({
            text: taskValue,
            completed: false
        })
        taskInput.value = ""
        updateTodoList()
        console.log(tasks)
    }
}

function updateTodoList(){
    const todoList = document.getElementById('todoList');
    // clear existing lists/data
    todoList.innerHTML = ""
    tasks.forEach((task) =>{
       var listItem =  document.createElement('li');
       listItem.textContent = task.text
       listItem.className = task.completed ? 'completed' : " "
       listItem.onclick = function(){
        toogleCompleted(task)
       }
       todoList.appendChild(listItem);
    })
    // function to calculate tools ,completed
    updateAggregrate()
}

function toogleCompleted(task){
    task.completed = !task.completed
    updateTodoList()
}

function updateAggregrate(){
    var totalTasks = document.getElementById('totalTasks');
    var completedTasks = document.getElementById('completedTasks');
    var total = tasks.length
    var completed = tasks.reduce((acc,task)=>{
        return task.completed ? acc + 1 : acc
    },0);
    totalTasks.textContent = total;
    completedTasks.textContent = completed
}

function filterTasks(){
    var searchInput = document.getElementById('searchInput');
    var searchValue = searchInput.value.toLowerCase()

    var filteredTasks = tasks.filter((task)=>{
        return task.text.toLowerCase().includes(searchValue);
    })

    //update todolist with filterTask
    updateTodoListWithFilteredTasks(filteredTasks);
}

function updateTodoListWithFilteredTasks(filteredTasks){
    var todoList = document.getElementById('todoList');

    todoList.innerHTML = ""

    filteredTasks.forEach((task) =>{
    var listItem =  document.createElement('li')
       listItem.textContent = task.text 
       listItem.className = task.completed ? 'completed' : " " 
       listItem.onclick = function(){
        toogleCompleted(task)
       }
       todoList.appendChild(listItem)
    })
    updateAggregrate();
}




/*Key value in the number */
window.addEventListener('keydown', function(e){
    console.log(e.keyCode)
});