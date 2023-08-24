const writeForm = document.getElementById("write-form");
const writeInput = document.querySelector("#write-form input");
const writeList = document.getElementById("write-list");

const TITLE_KEY = "titles";
const CONTETN_KEY = "contents";

let titles = [];
let contents = [];

function saveWrites() {
  localStorage.setItem(TITLE_KEY, JSON.stringify(titles));
  localStorage.setItem(CONTETN_KEY,JSON.stringify(contents));
}

function deletewrite(event) {
  const li = event.target.parentElement; // target은 클릭된 HTML element, parentElement는 클릭된 element의 부모
  li.remove();
  writes = writes.filter((titles) => write.id !== parseInt(li.id));
  contents = contentss.filter((contents) => content.id !== parseInt(li.id));
  savewrites();
}

function handlewriteSubmit(event) {
  event.preventDefault();
  const newwrite = writeInput.value; // input의 현재 value를 새로운 변수에 복사
  writeInput.value = ""; // 엔터치면 비워짐.
  const newwriteObj = {
    text: newwrite,
    id: Date.now(), // 10000분의 1초를 주는 함수
  };
  writes.push(newwriteObj);
  
  savewrites();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // li 안에 span 넣는 법
    li.appendChild(button);
    toDoList.appendChild(li);
  }

writeForm.addEventListener("submit", handlewriteSubmit);

const savedwrites = localStorage.getItem(WRITES_KEY);
const savedContents = localStorage.getItem(CONTETN_KEY);
