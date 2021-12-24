const title = document.querySelector("div#something h1:nth-child(1)")

function reset(){
    title.style.color = "white";
    title.style.fontSize = "32px"
    title.innerText = "Merry Christmas!"
}

function resetWindow(){
    title.style.color = "#1f1f1f";
    title.style.fontSize = "32px"
    title.innerText = "Merry Christmas!"
}

function handleTitleClick(){
    title.innerText = "Mouse was cilked!"
    title.style.color = "tomato"
}

function handleTitleEnter(){
    title.innerText = "Mouse is here!"
    title.style.fontSize = "35px"
    title.style.color = "#666666"
}

function handleTitleMouseLeave() {
    title.innerText = "Mouse is gone!"
    title.style.fontSize = "32px"
    title.style.color = "#6699CC"
    if(document.body.style.backgroundColor == "beige"){
        setTimeout(resetWindow, 500);
    }
    else{
        setTimeout(reset, 500);
    }
}

function handleWindeResize() {
    document.body.style.backgroundColor = "beige"
    resetWindow()
}

function handleWindowCopy (){
    alert("copier!");
}

title.addEventListener("click", handleTitleClick)
title.addEventListener("mouseenter", handleTitleEnter)
title.addEventListener("mouseleave", handleTitleMouseLeave)

window.addEventListener("resize", handleWindeResize)
window.addEventListener("copy", handleWindowCopy)