let tasks=JSON.parse(localStorage.getItem("tasks")) || [];

displayTask();

function addTask(){

let input=document.getElementById("taskInput");

if(input.value==""){
alert("Enter Task");
return;
}

tasks.push({
name:input.value,
done:false
});

localStorage.setItem("tasks",JSON.stringify(tasks));

input.value="";

displayTask();

}

function displayTask(){

let list=document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

list.innerHTML+=`

<li class="${task.done?'completed':''}">

${task.name}

<div>

<button onclick="completeTask(${index})">✔</button>

<button onclick="deleteTask(${index})">❌</button>

</div>

</li>

`;

});

document.getElementById("count").innerText=tasks.length;

}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTask();

}

function completeTask(index){

tasks[index].done=!tasks[index].done;

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTask();

}

function searchTask(){

let value=document.getElementById("search").value.toLowerCase();

let items=document.querySelectorAll("li");

items.forEach(item=>{

item.style.display=item.innerText.toLowerCase().includes(value)?"flex":"none";

});

}