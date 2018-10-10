function Tasklist(){
  this.list = [];
};

//add tasks

//delete tasks
Tasklist.prototype.deleteTask = function(Task){
  var gone = [];
  for(var index=0; index<this.list.length; index++) {
    console.log("task have been deleted");
    if(this.list[index].Task === Task){
      this.list.splice(index);
     console.log(gone);
    }
  }

};


//edit tasks






//dummy loader

//dummy/test content
