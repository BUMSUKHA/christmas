const h1 = document.querySelector("div#something h1:nth-child(1)")

function reset(){
    h1.style.color = "white";
    h1.style.fontSize = "32px"
    h1.innerText = "Merry Christmas!"
}

function resetWindow(){
    h1.style.color = "#1f1f1f";
    h1.style.fontSize = "32px"
    h1.innerText = "Merry Christmas!"
}

function handleTitleClick(){
    let h1Text;
    const currentColor = h1.style.color;
    let newColor;
    h1Text = "Mouse was cilked!"
    h1.innerText = h1Text

    if(currentColor == "tomato"){
        newColor = "#fd5c63"
    }
    else{
        newColor = "tomato"
    }
    h1.style.color = newColor;
}

function handleTitleEnter(){
    h1.innerText = "Mouse is here!"
    h1.style.fontSize = "35px"
    h1.style.color = "#666666"
}

function handleTitleMouseLeave() {
    h1.innerText = "Mouse is gone!"
    h1.style.fontSize = "32px"
    h1.style.color = "#6699CC"
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

h1.addEventListener("click", handleTitleClick)
h1.addEventListener("mouseenter", handleTitleEnter)
h1.addEventListener("mouseleave", handleTitleMouseLeave)

window.addEventListener("resize", handleWindeResize)