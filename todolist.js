
function TaskRepository () {
    var taskList = [];

    function add (task) {
        taskList.push(task);
        console.log("Task [" + task + "] added to list.");
    }

}

//events and listeners = controller
document.getElementById('taskSubmit').onclick = function addTask() {

    var unhideDiv = document.getElementById('savedTasks');
    if(unhideDiv.className=='hidden');
        unhideDiv.className = 'unhidden';

    var item = document.getElementById('taskBox').value;
    document.getElementById('savedTasks').innerHTML += "<p>" + item + "</p>";
}
