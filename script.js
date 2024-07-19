document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(task) {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.innerHTML = `<span>${task}</span>`;

        const completeButton = document.createElement('a');
        completeButton.className = 'secondary-content';
        completeButton.innerHTML = '<i class="material-icons">check</i>';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const editButton = document.createElement('a');
        editButton.className = 'secondary-content edit-button';
        editButton.innerHTML = '<i class="material-icons">edit</i>';
        editButton.addEventListener('click', () => {
            if (li.classList.contains('edit-mode')) {
                const input = li.querySelector('input');
                const newValue = input.value;
                li.innerHTML = `<span>${newValue}</span>`;
                li.classList.remove('edit-mode');
            } else {
                const currentText = li.querySelector('span').textContent;
                li.innerHTML = `<input type="text" value="${currentText}" />`;
                li.classList.add('edit-mode');
            }
            li.appendChild(completeButton);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
        });

        const deleteButton = document.createElement('a');
        deleteButton.className = 'secondary-content delete-button';
        deleteButton.innerHTML = '<i class="material-icons">delete</i>';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(completeButton);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
