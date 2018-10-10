

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
  console.log("Task Added");
  return true;
};
//delete tasks

//edit tasks





document.addEventListener("DOMContentLoaded", function(e){
  window.masterTasklist = new Tasklist();
});

//dummy loader

//dummy/test content
