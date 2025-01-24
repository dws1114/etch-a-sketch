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

createDivs(256);

const pixels = document.querySelectorAll(".pixel");

for (let pixel of pixels) {
    pixel.addEventListener("mouseover", () => {
        pixel.style.background = "black";
    })
}