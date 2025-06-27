
const filter = document.getElementById("filter");
const btn = document.getElementById("btn");


btn.addEventListener("click",event=>{
event.preventDefault();
filter.classList.toggle("hidden")
})