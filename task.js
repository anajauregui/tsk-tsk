function Task(taskName, dueDate, description, taskID, dateAdded) {
  this.userID = null;
  this.completed = false;

  //be sure to switch the taskID & dateAdded designations when we hook up a real database

  this.taskName = taskName;
  this.dueDate = new Date(dueDate).toDateString();
  this.description = description;
  this.taskID = taskID;
  this.dateAdded = new Date(dateAdded).toDateString();//eventually this will just be new Date() with no param passed in and that will be the current date.
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
  // .replace with regexp to remove all whitespace in boolean check, does not work for &#8239; (thin space) or &nbsp; (non-breaking space), hopefully we wont run into this stuff.
  if (obj.taskName.replace(/\s+/g,"")) {
    masterTasklist.list[tTaskIDindex].taskName = obj.taskName.trim();
  }
  // may need to be null at times.
  if (obj.dueDate) {
    masterTasklist.list[tTaskIDindex].dueDate = new Date(obj.dueDate.toString()) || null;
  }
  if (obj.description) {
    masterTasklist.list[tTaskIDindex].description = obj.description;
  }
  console.log('"' + masterTasklist.list[tTaskIDindex].taskName + '"' + " has been edited.");
  masterTasklist.createStorage();
  return masterTasklist.list;
};

// example obj: var taskNumber1 = new Task("Task 1", "october", "This is task number 1" , 1)
//exp. cmd: masterTasklist.list[0].editTask({taskName: "edited task 1", description: "edited desc 1", taskID: 1}

// TESTING GROUND - Using task 3 as example //

var taskNumber1 = new Task("Task 1", "oct 30 2018", "This is task number 1" , 1, new Date().toDateString()) ;
var taskNumber2 = new Task("Task 2", "feb 17 2018", "This is task number 2" , 2, "oct 8 2018") ;
var taskNumber3 = new Task("Task 3", "nov 17 2018", "This is task number 3" , 3, "oct 7 2018") ;
var taskNumber4 = new Task("Task 4", "", "This is task number 4", 4, "oct 4 2018");
var taskNumber5 = new Task("Task 5", "oct 9 2018", "This is task number 5", 5, "oct 7 2018");
var taskNumber6 = new Task("Task 6", "oct 7 2018", "This is task number 6", 6, "oct 10 2018");

// var customName = $("#tempTaskName");
// customName.text("My Custom Task Title");
//
// var customDueDate = $("#tempDueDate");
// customDueDate.text("Due Tomorrow");
//
// var customDescription = $("#tempTaskDescription[title='tempDescription']");
// customDescription.attr("title", "Stuff to do");
