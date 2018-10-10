function Tasklist(){
  this.list = [];
};

//add tasks
Tasklist.prototype.addTask = function (task) {
  var id = task.taskID;
  for (var i = 0; i < this.list.length; i++) {
    if (id == this.list[i].taskID){
      alert("Duplicate Task");
      return false;
    }
  }
  this.list.push(task);
  masterTasklist.createStorage();
  console.log("Task Added");
  return true;
};

//delete tasks
Tasklist.prototype.deleteTask = function(task){
  var id = task.taskID;
  for(var index=0; index<this.list.length; index++) {
    if(this.list[index].taskID === id){
      this.list.splice(index,1);
      console.log("Task removed");
      masterTasklist.createStorage();
      return true;
    }

  }
  console.log("Task was not removed");
  return false;
};


//edit tasks
// edit tasks will be a Task prototype, see task.js for fx.

//local storage
Tasklist.prototype.createStorage = function(){
  localStorage.setItem('masterTasklist',JSON.stringify(this.list));
  return console.log("Tasklist Saved.");
};

Tasklist.prototype.getStorage = function(){
  //creates empty array
  var taskObjs = [];
  //gets local storage and stores it as a var
  var jsonObj = JSON.parse(localStorage.getItem("masterTasklist"));
  console.log(jsonObj);
  //runs through each item in jsonObj and recreates them as a task object, then pushes re-prototyped tasks to taskObjs array
  for (var i = 0; i < jsonObj.length; i++) {
    taskObjs.push(new Task(
      jsonObj[i].taskName,
      //feeding null values as an empty string bypasses a local stroage js error which stops the loop because the item is undefined. we should resolve this more elegantly when start using a database
      jsonObj[i].dueDate || "",
      jsonObj[i].description,
      jsonObj[i].taskID));
  }
  //returns taskified array (this is what gets defined as the list when the page loads)
  return taskObjs;
};




// Make sure task title field is not empty


document.addEventListener("DOMContentLoaded", function(e){
  window.masterTasklist = new Tasklist();
  if (window.localStorage.length > 0) {
    console.log("Loading Last List State.");
    window.masterTasklist.list = masterTasklist.getStorage()}
    //if there is nothing in local storage, a new Library will be created, a set list of books will be loaded, and a copy will be stored in local storage
    else {
      console.log("Creating New Tasklist.");
      masterTasklist.addTask(taskNumber1);
      masterTasklist.createStorage();
    }
});

//dummy loader

//dummy/test content
