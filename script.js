let totalTasks = 0;
let completedTasks = 0;

function updateCounter() {
    document.getElementById('taskCounter').innerText = `Total: ${totalTasks} Realizadas: ${completedTasks}`;
}

function addTask() {
    const taskName = document.getElementById('newTask').value;

    if (taskName === '') return;

    totalTasks++;

    const table = document.getElementById('taskTable');

    const newRow = table.insertRow();

    newRow.innerHTML = `
       <td>${totalTasks}</td> 
       <td>${taskName}</td> 
       <td><input type='checkbox' onclick='completeTask(this)'></td> 
       <td><button onclick='deleteTask(this)'>X</button></td>`;

    updateCounter();
}

function completeTask(checkbox) {
    if (checkbox.checked) {
        completedTasks++;
        checkbox.parentNode.parentNode.classList.add('completed');
    } else {
        completedTasks--;
        checkbox.parentNode.parentNode.classList.remove('completed');
    }

    updateCounter();
}

function deleteTask(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    totalTasks--;
    updateCounter();
}
