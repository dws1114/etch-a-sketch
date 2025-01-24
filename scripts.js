function createDivs(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        const container = document.querySelector(".container");

        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "pixel")
        newDiv.setAttribute("style", "border: 1px solid black;")
        newDiv.style.height = "20px";
        newDiv.style.width = "20px";

        container.appendChild(newDiv);
    }
}

function mouseOverEvent() {
    const pixels = document.querySelectorAll(".pixel");

    for (let pixel of pixels) {
        pixel.addEventListener("mouseover", () => {
            function getRandomRGB() {
                const r = Math.floor(Math.random() * 256); // Random between 0-255
                const g = Math.floor(Math.random() * 256); 
                const b = Math.floor(Math.random() * 256); 
              
                return `rgb(${r}, ${g}, ${b})`;
              }
            pixel.style.background = getRandomRGB();
        })
    }
}

createDivs(256);
mouseOverEvent();

const resetSketchBtn = document.querySelector(".reset-button");

resetSketchBtn.addEventListener("click", () => {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    const newSketchSize = parseInt(prompt("What size square would you like your new sketch pad to be?"));
    if (newSketchSize > 100) {
        newSketchSize = parseInt(prompt("Please enter a number less than or equal to 100"));
    } else if (newSketchSize <= 100) {
        container.style.width = `${newSketchSize * 20}px`;
        createDivs(newSketchSize**2);
    } else {
        alert("Error");
    }

    mouseOverEvent();  
});