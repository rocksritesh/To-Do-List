window.onload = function() {
  const prevItems = JSON.parse(localStorage.getItem('todo')) || [];
  prevItems.forEach((item, index) => {
    addTaskToList(item.task, index); // yha prr key se kamm nhi chlega index no bhi denna pdega  
  });
};

function addtask() {
  const task = document.getElementById("inputask").value;

  if (task === "") {  
    alert("Please enter a task");
    return;
  }
  const prevItems = JSON.parse(localStorage.getItem('todo')) || [];
  prevItems.push({task});
  localStorage.setItem('todo', JSON.stringify(prevItems));
  addTaskToList(task, prevItems.length -1);     // js me work line to line hota hai to aab ye krega iske bdd value ko show krwayega 
  document.getElementById("inputask").value = "";
  }

    function addTaskToList(taskContent,index) {
      const tasklist = document.getElementById("tasklist");
      const newtask = document.createElement("li");
      newtask.textContent = taskContent; 

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "DELETE";
      deleteBtn.onclick = function () {
        if (confirm("Are you sure you want to delete?")) {
        const prevItems =JSON.parse(localStorage.getItem('todo')) || [];
        prevItems.splice(index, 1); // yha prr me push use krr rha hu to deleted array wapis aa rhe hai 
        localStorage.setItem('todo',JSON.stringify(prevItems));
        newtask.remove();
        }
      };
      newtask.appendChild(deleteBtn);

      const updateBtn = document.createElement("button");
      updateBtn.textContent = "UPDATE";
      updateBtn.onclick = function () {
        const newContent = prompt("Enter here new task content:");
        if (newContent) {
          newtask.firstChild.textContent = newContent;
          //lets take the data update in local storage 
          const prevItems = JSON.parse(localStorage.getItem('todo')) || [] ;
          prevItems[index].task = newContent;
          localStorage.setItem('todo', JSON.stringify(prevItems));
        }
      };
      newtask.appendChild(updateBtn);
      tasklist.appendChild(newtask);
    }

    