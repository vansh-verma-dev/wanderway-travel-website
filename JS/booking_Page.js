import { destinations } from "./Data.js";

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

console.log("ID:", id);

const selected = destinations.find(item => item.id == id);

const container = document.querySelector('#root');

if(!selected){
  container.innerHTML = "<h2>Not Found</h2>";
}
else{
  container.innerHTML = `
  <h1>${selected.name}</h1>
  <img src="${selected.image}">
  <p>${selected.description}</p>
  `;
}