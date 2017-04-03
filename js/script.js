var todoList = {
  todos: [],
  /* old code, not used anymore. not doing anything in DOM with this code, not needed.
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todos list is empty");
      } else {
        console.log("My Todos:");
        for (var i = 0; i < this.todos.length; i++ ) {
          if (this.todos[i].completed === true) {
            console.log("(x)", this.todos[i].todoText);
          } else {
          console.log("( )", this.todos[i].todoText);
          }
        }
    }
  },*/
  // keep the naming convention you used in mind here
  addToDo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    // Get number of completed todos.
     for (var i = 0; i < totalTodos; i++) {
       if (this.todos[i].completed === true) {
         completedTodos++
       }
     }
     
    // Case 1: If everything's true, make everything false
    if (completedTodos === totalTodos) {
      // Make everything false
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      // Case 2: Otherwise, make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    
  }
};

var handlers = {
  addTodo: function () {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addToDo(addTodoTextInput.value);
    addTodoTextInput.value = "Add another one?";
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value); // REMEMBER: the valueAsNumber argument, we doing this because it must reference to number position (line 25) and this is number, thus valueAsNumber
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = "Add some more?";
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value="";
    view.displayTodos();
  },
    toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      var todo = todoList.todos[i];
      var todoTextWithCompletion = "";
      
      if (todo.completed === true) {
        todoTextWithCompletion = "(x) " + todo.todoText;
      } else {
        todoTextWithCompletion = "( ) " + todo.todoText;
      }
      
      todoLi.textContent = todoTextWithCompletion
      todosUl.appendChild(todoLi);
    }
  }
};