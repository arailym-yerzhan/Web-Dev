// Simple To-Do List JavaScript
// Basic DOM manipulation without classes

// Get elements from HTML
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task when form is submitted
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // stop page refresh
  
  // Get input value
  let taskText = taskInput.value;
  
  // Check if input is empty
  if (taskText.trim() === '') {
    alert('Please enter a task');
    return;
  }
  
  // Create new list item
  let listItem = document.createElement('li');
  
  // Create checkbox
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  // Create task text span
  let textSpan = document.createElement('span');
  textSpan.className = 'task-text';
  textSpan.textContent = taskText;
  
  // Create delete button
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.type = 'button';
  
  // Add elements to list item
  listItem.appendChild(checkbox);
  listItem.appendChild(textSpan);
  listItem.appendChild(deleteBtn);
  
  // Add list item to task list
  taskList.appendChild(listItem);
  
  // Clear input
  taskInput.value = '';
  taskInput.focus();
  
  // Checkbox event - mark task as done
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      textSpan.classList.add('done');
    } else {
      textSpan.classList.remove('done');
    }
  });
  
  // Delete button event
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(listItem);
  });
});
