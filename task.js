function Task(taskName, dueDate, description, taskID) {
  this.userID = null;
  this.completed = false;

  //be sure to switch the taskID designations when we hook up a real database

  this.taskName = taskName;
  this.dueDate = new Date(dueDate.toString()) || null;
  this.description = description;
  this.taskID = taskID;
  this.addedDate = new Date();
};



//edit tasks
// fourth parameter is ID
// will not have fx to edit id.
Task.prototype.editTask = function(obj){
  // var tList = masterTasklist.list;

  // find index helper fx
  function findID(e){
    return e.taskID === obj.taskID;
  }
  //stores task index after finding it by id
  var tTaskIDindex = masterTasklist.list.findIndex(findID);
  console.log("task index: "+ tTaskIDindex);
  //set edit object values to the targeted tasks
  if (tTaskIDindex === -1) {
    return console.log("invalid ID");
  }
  if (obj.taskName) {
    masterTasklist.list[tTaskIDindex].taskName = obj.taskName;
  }
  if (obj.dueDate) {
    masterTasklist.list[tTaskIDindex].dueDate = new Date(obj.dueDate.toString()) || null;
  }
  if (obj.description) {
    masterTasklist.list[tTaskIDindex].description = obj.description;
  }
  console.log('"' + masterTasklist.list[tTaskIDindex].taskName + '"' + " has been edited.");
  return masterTasklist.list;
};

// example obj: var taskNumber1 = new Task("Task 1", "october", "This is task number 1" , 1)
//exp. cmd: masterTasklist.list[0].editTask({taskName: "edited task 1", description: "edited desc 1", taskID: 1}

// TESTING GROUND - Using task 3 as example //
var taskNumber1 = new Task("Task 1", "october", "This is task number 1" , 1) ;
var taskNumber2 = new Task("Name", "feb 17 2018", "This is task number 2" , 2) ;
var taskNumber3 = new Task("Three", "nov 17 2018", "This is task number 3" , 3) ;
//
// var customName = $("#tempTaskName");
// customName.text("My Custom Task Title");
//
// var customDueDate = $("#tempDueDate");
// customDueDate.text("Due Tomorrow");
//
// var customDescription = $("#tempTaskDescription[title='tempDescription']");
// customDescription.attr("title", "Stuff to do");
