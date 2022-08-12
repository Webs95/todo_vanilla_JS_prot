import "./styles.css";
const input = document.querySelector(".input");
const add = document.querySelector(".add");
const list = document.querySelector(".list");
const listWrapper = document.querySelector(".list__wrapper");
const tasksArr = [];

let listHeight;

add.addEventListener("click", () => {
  const newElem = document.createElement("li");
  newElem.classList.add("list__item");
  tasksArr.push(input.value);
  let lastItem = tasksArr[tasksArr.length - 1];
  newElem.textContent = `#${tasksArr.length} ${lastItem}`;
  list.appendChild(newElem);
  input.value = null;
  listHeight = list.offsetHeight;
  listHeight > 50
    ? (listWrapper.style.overflowY = "scroll")
    : (listWrapper.style.overflowY = null);
  console.log(listHeight);
});
