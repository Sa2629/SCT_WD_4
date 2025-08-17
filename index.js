const taskInput = document.getElementById("task");
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const addBtn = document.getElementById("add-btn");
    const taskList = document.getElementById("task-list");

    addBtn.addEventListener("click", addTask);

    function addTask() {
      const taskText = taskInput.value.trim();
      const taskDate = dateInput.value;
      const taskTime = timeInput.value;

      if (!taskText) {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");

      const taskSpan = document.createElement("span");
      taskSpan.textContent = `${taskText} (${taskDate || "No Date"} ${taskTime || ""})`;

      const actionsDiv = document.createElement("div");
      actionsDiv.classList.add("task-actions");

      // Complete button
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "✔";
      completeBtn.classList.add("complete-btn");
      completeBtn.onclick = () => {
        li.classList.toggle("completed");
      };

      // Edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "✏";
      editBtn.classList.add("edit-btn");
      editBtn.onclick = () => {
        const newTask = prompt("Edit task:", taskText);
        if (newTask) {
          taskSpan.textContent = `${newTask} (${taskDate || "No Date"} ${taskTime || ""})`;
        }
      };

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.onclick = () => {
        taskList.removeChild(li);
      };

      actionsDiv.appendChild(completeBtn);
      actionsDiv.appendChild(editBtn);
      actionsDiv.appendChild(deleteBtn);

      li.appendChild(taskSpan);
      li.appendChild(actionsDiv);

      taskList.appendChild(li);

      // Clear inputs
      taskInput.value = "";
      dateInput.value = "";
      timeInput.value = "";
    }