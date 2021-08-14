const button = document.querySelectorAll('span')

function changeClass(e){
    e.classList.toggle("off")
    e.classList.toggle("on")
}

button.forEach(span => span.addEventListener("click",function(){
    changeClass(this)
}))