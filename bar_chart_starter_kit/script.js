//const list = document.querySelector("ul");

//const li = document.createElement("li");
//li.style.setProperty("--height", "10");
//list.appendChild(li);

//const columnArray = [];
//setInterval(generateColumns, 1000);

//function generateColumns() {
//columnArray.push(Math.round(Math.random() * 100));
//console.log("columnArray)", columnArray);

const list = document.querySelector("ul");
const columnArray = [];
setInterval(generateColumns, 1000);

function generateColumns() {
  columnArray.push(Math.round(Math.random() * 101));
  const li = document.createElement("li");
  li.style.setProperty("--height", Math.round(Math.random() * 101));
  list.appendChild(li);
  if (columnArray.length > 20) {
    columnArray.shift();
    list.removeChild(list.firstElementChild);
  }
}
