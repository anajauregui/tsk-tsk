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
  var tList = Tasklist.list;

  // find index helper fx
  function findID(e){
    return e === obj.taskID;
  }
  //stores task index after finding it by id
  var tTaskIDindex = Tasklist.list.findIndex(findID);
  //set edit object values to the targeted tasks
  if (obj.taskName) {
    Tasklist.list[tTaskIDindex].taskName = obj.taskName;
  }
  if (obj.dueDate) {
    Tasklist.list[tTaskIDindex].dueDate = new Date(obj.dueDate.toString()) || null;
  }
  if (obj.description) {
    Tasklist.list[tTaskIDindex].description = obj.description;
  }
};

// example obj: var taskNumber1 = new Task("Task 1", "october", "This is task number 1" , 1) ;

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
