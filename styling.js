function changeColor() {
    var box = document.getElementById("box");
    if (box.style.backgroundColor === "red") {
        box.style.backgroundColor = "blue";
        box.textContent = "BLUE!!!  🤣"
    } else {
        box.style.backgroundColor = "red";
        box.textContent = "Red! Click again for blue"
    }
    box.style.color = "white";
    
}

function changeToYellow() {
    var box = document.getElementById("box");
    box.style.backgroundColor = "yellow";
    box.style.color = "black"
    box.textContent = "You clicked the button 👍🏼"
    box.classList.add("hover");
}
