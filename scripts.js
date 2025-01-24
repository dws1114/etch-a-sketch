function createDivs(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        const container = document.querySelector(".container");

        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "pixel")
        newDiv.setAttribute("style", "border: 1px solid black;")
        newDiv.style.height = "50px";
        newDiv.style.width = "50px";

        container.appendChild(newDiv);
    }
}

createDivs(256);