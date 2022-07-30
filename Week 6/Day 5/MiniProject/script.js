window.addEventListener('load', ()=>{
	const form =document.querySelector("#new-task-form");
	const input=document.querySelector("#new-task-input");
	const desc=document.querySelector("#description");
    const start=document.querySelector("#meeting-time1");
    const end=document.querySelector("#meeting-time2");
    const list_el =document.querySelector("#tasks");

   const task=input.value;

const task_el= document.createElement("div");
task_el.classList.add("task");

const task_content_el=document.createElement("div");
task_content_el.classList.add("content");


task_el.appendChild(task_content_el);
const task_input_el=document.createElement("input");
task_input_el.classList.add("text");
task_content_el.type="text";
task_input_el.value=task;
task_input_el.setAttribute("readonly", "readonly");

task_content_el.appendChild(task_input_el);

const task_actions_el= document.createElement("div");
task_actions_el.classList.add("actions");

const task_edit_el=document.createElement("button");
task_edit_el.classList.add("edit");
task_edit_el.innerHTML= "Edit";

const task_delete_el= document.createElement("button");
task_delete_el.classList.add("delete");
task_delete_el.innerHTML="Delete";

task_actions_el.appendChild(task_edit_el);
task_actions_el.appendChild(task_delete_el);

task_el.appendChild(task_actions_el);


list_el.appendChild(task_el);

input.value="";

task_edit_el.addEventListener('click', ()=>{
	task_input_el.removeAttributes("readonly");
	task_input_el.focus();
	task_edit_el.innerText="Save";
})
})

start=document.getElementById("meeting-time1");
end=document.getElementById("meeting-time2");

let dateValue=start.end.value;

start.value="";
end.value="";

let obj={
	todo:inputValue,
	start: start,
	end: end, 
}

edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todo));
				DisplayTodos()

			})
		})

		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		})

	
