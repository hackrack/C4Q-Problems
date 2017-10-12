// This app helps to create daily agenda.
function createTask(title, completed){
    var task = {
      title: title,
      completed: completed
    }
    return task;
}

function forEachElem(arr, callback){
  for (var i = 0; i < arr.length; i++){
    var object = arr[i];
    callback(object, i);
  }
}

var tasks = [];

function activeTasks(array) {
  for (var i = 0; i < array.length; i++) {
    var object = array[i];
    for (var key in object) {
      if (object[key] === false) {
        console.log(i + ". " + object.title + ". Completed " + object.completed);
      }
    }
  }
}

function completedTasks(array) {
  for (var i = 0; i < array.length; i++) {
    var object = array[i];
    for (var key in object) {
      if (object[key] === true) {
        console.log(i + ". " + object.title + ". Completed " + object.completed);
      }
    }
  }
}

var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function adding(array, title) {
  array.push(createTask(title, false));
  return array;
}

function toggle(array, boolean, index) {
  for (var i = 0; i < array.length; i++) {
    var object = array[i];
    for (var key in object) {
      if (i === index) {
        if (key === 'completed') {
          object[key] = boolean;
          console.log(index + ". " + key + " " + object[key]);
        }
      }
    }
  }
}

rl.on('line', function(input) {
  var array = input.split("");
  var title = "";
  if (array[0] === "A" && array[1] === "D" & array[2] === "D") {
    for (var i = 4; i < array.length; i++) {
      var char = array[i];
      title += char;
    }
      forEachElem(adding(tasks, title), function(element, index) {
        console.log(index + ". " + element.title + ". Completed " + element.completed);
      });
  } else if (array[0] === 't' && array[1] === 'o' &&
             array[2] === 'g' && array[3] === 'g' &&
             array[4] === 'l' && array[5] === 'e') {
      toggle(tasks, true, Number(array[7]));
  } else if (
    array[0] === "s" && array[1] === "h" &&
    array[2] === "o" && array[3] === "w" &&
    array[4] === " " && array[5] === "a" &&
    array[6] === "l" && array[7] === "l"
  ) {
    forEachElem(tasks, function(element, index) {
      console.log(index + ". " + element.title + ". Completed " + element.completed);
    });
  } else if (
      array[0] === "s" && array[1] === "h" &&
      array[2] === "o" && array[3] === "w" &&
      array[4] === " " && array[5] === "a" &&
      array[6] === "c" && array[7] === "t" &&
      array[8] === "i" && array[9] === "v" &&
      array[10] === "e"
  ) {
      activeTasks(tasks);
  } else if (
      array[0] === "s" && array[1] === "h" &&
      array[2] === "o" && array[3] === "w" &&
      array[4] === " " && array[5] === "c" &&
      array[6] === "o" && array[7] === "m" &&
      array[8] === "p" && array[9] === "l" &&
      array[10] === "e" && array[11] === "t" &&
      array[12] === "e" && array[13] === "d"
  ) {
      completedTasks(tasks);
  } else {
      console.log("Please ADD your task");
  }
})
