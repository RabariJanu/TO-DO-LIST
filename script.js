    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
        const newTask = document.createElement('li');
        newTask.innerText = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        
        deleteButton.onclick = function () {
          taskList.removeChild(newTask);
        };
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        taskInput.value = '';
      }
    }