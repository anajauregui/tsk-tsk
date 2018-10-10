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
  this.showTask(task);

  masterTasklist.createStorage();
  console.log("Task Added");
  return true;
};


Tasklist.prototype.calcDaysOld = function (dateAdded) {
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  var dateAdded = new Date(dateAdded).getTime();
  var currentDate = new Date().getTime();
  var daysOld = Math.abs(dateAdded - currentDate);

  return Math.round(daysOld / oneDay);
}

//Populate task list
Tasklist.prototype.showTask = function(task) {
  var daysOld = this.calcDaysOld(task.dateAdded);

  if(task.dueDate === "Invalid Date") {
    var month = daysOld.toString();
    var day = 'Days Old';
  } else {
    var dueDate = (task.dueDate).split(' ');
    var month = dueDate[1];
    var day = dueDate[2];
  }

  $('.main-task-container').append(`
    <div id="${task.taskID}" class="container task">
      <div class="row">
        <div class="col-12 col-md-10 offset-1 task-content level-1">
          <div class="row">
            <div class="col-2 col-md-1 justify-content-center complete-box my-auto ">
              <input type="checkbox">
              <span class="checkmark"></span>
            </div>
            <div class="col-7 col-md-9 d-flex">
              <p class="m-0 align-self-center">${task.taskName}</p>
            </div>
            <div class="col-3 col-md-2 d-flex justify-content-center">
              <div class="align-self-center text-center days-old-count">
                <p class="m-0">${month}</p>
                <p class="m-0 days-old">${day}</p>
                <button type="button" class="btn tooltip-btn" data-toggle="tooltip" data-placement="left" title="${task.description}">...</button>
              </div>
            </div>
            <!-- edit buttons, will collapse and expand on click of edit-icon class below, but cannot code that until js is on the table -->
            <div class="col-12 collapse" id="edit-this-task-id-1">
              <div class="edit-content">
                <button type="button" class="btn edit-button" data-toggle="collapse" data-target="#edit-this-task-id-1">Done</button>
                <button type="button" class="btn edit-button" data-toggle="modal" data-target="#delete-task-modal">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1 edit-container edit-icon d-none d-sm-none d-md-block">
          <img src="assets/edit.png" data-toggle="collapse" data-target="#edit-this-task-id-1">
        </div>
      </div>
    </div>
  `)
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
