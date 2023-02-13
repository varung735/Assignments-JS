import { red, blue, green, yellow, white, black, grey } from "./color.js";

const cardHolder = document.querySelectorAll(".card-holder");


//for each method on red array
red.forEach((color) => {
    const colorDiv = document.createElement('div');
    const colorH3 = document.createElement('h3');
    const colorP = document.createElement('p');
    const copyBtn = document.createElement('button');
    
    colorDiv.classList.add("color-card");
    colorH3.classList.add("color-name");
    colorH3.classList.add("hidden");
    colorP.classList.add("hex-code");
    colorP.classList.add("hidden");
    copyBtn.classList.add("copy-btn");
    copyBtn.classList.add("hidden");
    
    colorH3.innerText = color.colorName.toUpperCase();
    colorP.innerText = color.hex.toUpperCase();
    copyBtn.innerText = "Copy Code";

    colorDiv.appendChild(colorH3);
    colorDiv.appendChild(colorP);
    colorDiv.appendChild(copyBtn);

    if(cardHolder[0].classList.contains("red")){
        colorDiv.style.backgroundColor = color.hex;
        cardHolder[0].appendChild(colorDiv);

        colorDiv.addEventListener('mouseenter', () => {
            colorH3.classList.remove("hidden");
            colorP.classList.remove("hidden");
            copyBtn.classList.remove("hidden");
        });
        colorDiv.addEventListener('mouseleave', () => {
            colorH3.classList.add("hidden");
            colorP.classList.add("hidden");
            copyBtn.classList.add("hidden");
        });
        copyBtn.addEventListener('click', () => {
            window.navigator.clipboard.writeText(color.hex);
            copyBtn.innerText = "Copied!";
            setTimeout(() => {copyBtn.innerText = "Copy Code"}, 1000);
        });
    }
});

//for each method on green array
green.forEach((color) => {
    const colorDiv = document.createElement('div');
    const colorH3 = document.createElement('h3');
    const colorP = document.createElement('p');
    const copyBtn = document.createElement('button');

    colorDiv.classList.add("color-card");
    colorH3.classList.add("color-name");
    colorH3.classList.add("hidden");
    colorP.classList.add("hex-code");
    colorP.classList.add("hidden");
    copyBtn.classList.add("copy-btn");
    copyBtn.classList.add("hidden");

    colorH3.innerText = color.colorName.toUpperCase();
    colorP.innerText = color.hex.toUpperCase();
    copyBtn.innerText = "Copy Code";

    colorDiv.appendChild(colorH3);
    colorDiv.appendChild(colorP);
    colorDiv.appendChild(copyBtn);
    
    if(cardHolder[1].classList.contains("green")){
        colorDiv.style.backgroundColor = color.hex;
        cardHolder[1].appendChild(colorDiv);

        colorDiv.addEventListener('mouseenter', () => {
            colorH3.classList.remove("hidden");
            colorP.classList.remove("hidden");
            copyBtn.classList.remove("hidden");
        });
        colorDiv.addEventListener('mouseleave', () => {
            colorH3.classList.add("hidden");
            colorP.classList.add("hidden");
            copyBtn.classList.add("hidden");
        });
        copyBtn.addEventListener('click', () => {
            window.navigator.clipboard.writeText(color.hex);
            copyBtn.innerText = "Copied!";
            setTimeout(() => {copyBtn.innerText = "Copy Code"}, 1000);
        });
    }
});

//for each method for blue array
blue.forEach((color) => {
    const colorDiv = document.createElement('div');
    const colorH3 = document.createElement('h3');
    const colorP = document.createElement('p');
    const copyBtn = document.createElement('button');

    colorDiv.classList.add("color-card");
    colorH3.classList.add("color-name");
    colorH3.classList.add("hidden");
    colorP.classList.add("hex-code");
    colorP.classList.add("hidden");
    copyBtn.classList.add("copy-btn");
    copyBtn.classList.add("hidden");

    colorH3.innerText = color.colorName.toUpperCase();
    colorP.innerText = color.hex.toUpperCase();
    copyBtn.innerText = "Copy Code";

    colorDiv.appendChild(colorH3);
    colorDiv.appendChild(colorP);
    colorDiv.appendChild(copyBtn);
    
    if(cardHolder[2].classList.contains("blue")){
        colorDiv.style.backgroundColor = color.hex;
        cardHolder[2].appendChild(colorDiv);

        colorDiv.addEventListener('mouseenter', () => {
            colorH3.classList.remove("hidden");
            colorP.classList.remove("hidden");
            copyBtn.classList.remove("hidden");
        });
        colorDiv.addEventListener('mouseleave', () => {
            colorH3.classList.add("hidden");
            colorP.classList.add("hidden");
            copyBtn.classList.add("hidden");
        });
        copyBtn.addEventListener('click', () => {
            window.navigator.clipboard.writeText(color.hex);
            copyBtn.innerText = "Copied!";
            setTimeout(() => {copyBtn.innerText = "Copy Code"}, 1000);
        });
    }
});

//for each method for yellow array
yellow.forEach((color) => {
    const colorDiv = document.createElement('div');
    const colorH3 = document.createElement('h3');
    const colorP = document.createElement('p');
    const copyBtn = document.createElement('button');

    colorDiv.classList.add("color-card");
    colorH3.classList.add("color-name");
    colorH3.classList.add("hidden");
    colorP.classList.add("hex-code");
    colorP.classList.add("hidden");
    copyBtn.classList.add("copy-btn");
    copyBtn.classList.add("hidden");

    colorH3.innerText = color.colorName.toUpperCase();
    colorP.innerText = color.hex.toUpperCase();
    copyBtn.innerText = "Copy Code";

    colorDiv.appendChild(colorH3);
    colorDiv.appendChild(colorP);
    colorDiv.appendChild(copyBtn);
    
    if(cardHolder[3].classList.contains("yellow")){
        colorDiv.style.backgroundColor = color.hex;
        cardHolder[3].appendChild(colorDiv);

        colorDiv.addEventListener('mouseenter', () => {
            colorH3.classList.remove("hidden");
            colorP.classList.remove("hidden");
            copyBtn.classList.remove("hidden");
        });
        colorDiv.addEventListener('mouseleave', () => {
            colorH3.classList.add("hidden");
            colorP.classList.add("hidden");
            copyBtn.classList.add("hidden");
        });
        copyBtn.addEventListener('click', () => {
            window.navigator.clipboard.writeText(color.hex);
            copyBtn.innerText = "Copied!";
            setTimeout(() => {copyBtn.innerText = "Copy Code"}, 1000);
        });
    }
});

//for each method for black array
black.forEach((color) => {
    const colorDiv = document.createElement('div');
    const colorH3 = document.createElement('h3');
    const colorP = document.createElement('p');
    const copyBtn = document.createElement('button');

    colorH3.style.color = "#fff";
    colorP.style.color = "#fff";

    colorDiv.classList.add("color-card");
    colorH3.classList.add("color-name");
    colorH3.classList.add("hidden");
    colorP.classList.add("hex-code");
    colorP.classList.add("hidden");
    copyBtn.classList.add("copy-btn");
    copyBtn.classList.add("hidden");

    colorH3.innerText = color.colorName.toUpperCase();
    colorP.innerText = color.hex.toUpperCase();
    copyBtn.innerText = "Copy Code";

    colorDiv.appendChild(colorH3);
    colorDiv.appendChild(colorP);
    colorDiv.appendChild(copyBtn);
    
    if(cardHolder[4].classList.contains("black")){
        colorDiv.style.backgroundColor = color.hex;
        cardHolder[4].appendChild(colorDiv);

        colorDiv.addEventListener('mouseenter', () => {
            colorH3.classList.remove("hidden");
            colorP.classList.remove("hidden");
            copyBtn.classList.remove("hidden");
        });
        colorDiv.addEventListener('mouseleave', () => {
            colorH3.classList.add("hidden");
            colorP.classList.add("hidden");
            copyBtn.classList.add("hidden");
        });
        copyBtn.addEventListener('click', () => {
            window.navigator.clipboard.writeText(color.hex);
            copyBtn.innerText = "Copied!";
            setTimeout(() => {copyBtn.innerText = "Copy Code"}, 1000);
        });
    }
});

//for each method for white array
white.forEach((color) => {
    const colorDiv = document.createElement('div');
    const colorH3 = document.createElement('h3');
    const colorP = document.createElement('p');
    const copyBtn = document.createElement('button');
    
    copyBtn.style.backgroundColor = "#1F1F29";
    copyBtn.style.color = "#fff";

    colorDiv.classList.add("color-card");
    colorH3.classList.add("color-name");
    colorH3.classList.add("hidden");
    colorP.classList.add("hex-code");
    colorP.classList.add("hidden");
    copyBtn.classList.add("copy-btn");
    copyBtn.classList.add("hidden");

    colorH3.innerText = color.colorName.toUpperCase();
    colorP.innerText = color.hex.toUpperCase();
    copyBtn.innerText = "Copy Code";

    colorDiv.appendChild(colorH3);
    colorDiv.appendChild(colorP);
    colorDiv.appendChild(copyBtn);
    
    if(cardHolder[5].classList.contains("white")){
        colorDiv.style.backgroundColor = color.hex;
        cardHolder[5].appendChild(colorDiv);

        colorDiv.addEventListener('mouseenter', () => {
            colorH3.classList.remove("hidden");
            colorP.classList.remove("hidden");
            copyBtn.classList.remove("hidden");
        });
        colorDiv.addEventListener('mouseleave', () => {
            colorH3.classList.add("hidden");
            colorP.classList.add("hidden");
            copyBtn.classList.add("hidden");
        });
        copyBtn.addEventListener('click', () => {
            window.navigator.clipboard.writeText(color.hex);
            copyBtn.innerText = "Copied!";
            setTimeout(() => {copyBtn.innerText = "Copy Code"}, 1000);
        });
    }
});

//for each method for grey array
grey.forEach((color) => {
    const colorDiv = document.createElement('div');
    const colorH3 = document.createElement('h3');
    const colorP = document.createElement('p');
    const copyBtn = document.createElement('button');

    colorDiv.classList.add("color-card");
    colorH3.classList.add("color-name");
    colorH3.classList.add("hidden");
    colorP.classList.add("hex-code");
    colorP.classList.add("hidden");
    copyBtn.classList.add("copy-btn");
    copyBtn.classList.add("hidden");

    colorH3.innerText = color.colorName.toUpperCase();
    colorP.innerText = color.hex.toUpperCase();
    copyBtn.innerText = "Copy Code";

    colorDiv.appendChild(colorH3);
    colorDiv.appendChild(colorP);
    colorDiv.appendChild(copyBtn);
    
    if(cardHolder[6].classList.contains("grey")){
        colorDiv.style.backgroundColor = color.hex;
        cardHolder[6].appendChild(colorDiv);

        colorDiv.addEventListener('mouseenter', () => {
            colorH3.classList.remove("hidden");
            colorP.classList.remove("hidden");
            copyBtn.classList.remove("hidden");
        });
        colorDiv.addEventListener('mouseleave', () => {
            colorH3.classList.add("hidden");
            colorP.classList.add("hidden");
            copyBtn.classList.add("hidden");
        });
        copyBtn.addEventListener('click', () => {
            window.navigator.clipboard.writeText(color.hex);
            copyBtn.innerText = "Copied!";
            setTimeout(() => {copyBtn.innerText = "Copy Code"}, 1000);
        });
    }
});