document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formNode = document.querySelector("#create-task-form");
  formNode.addEventListener("submit", buildTaskLister);
});


const buildTaskLister = (event) => {
  event.preventDefault();
  const inputNode = document.querySelector("#new-task-description");
  const tasksNode = document.querySelector("#tasks");
  console.log(inputNode.value);

  // listNode is a list to take in individual inputs from the inputTaskNode.
  // The buttonNode is for deleting liNode after the task is done
  const listNode = document.createElement("li");
  const buttonNode = document.createElement("button");
  buttonNode.id = "delete-button";
  buttonNode.addEventListener("click", deleteTask);

  buttonNode.textContent = "X";
  listNode.textContent = inputNode.value;
  listNode.append(buttonNode);

  tasksNode.append(listNode);
};

const deleteTask = (e) => {
  const liNode = e.target.parentNode;
  liNode.remove();
};