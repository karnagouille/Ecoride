
<<<<<<< HEAD
const filter = document.getElementById("filter");
const btn = document.getElementById("btn");


btn.addEventListener("click",event=>{
event.preventDefault();
filter.classList.toggle("hidden")
=======
const btn = document.getElementById("friend");
const liste = document.getElementById("friends");


btn.addEventListener("click",event=>{
    event.preventDefault();
    liste.classList.toggle("cacher")
>>>>>>> 18187c8b9b637f8294e60ba5fb06f0f3267bb793
})