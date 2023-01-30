const cards = document.querySelectorAll(".card");
const cardImgs = document.querySelectorAll(".card-img");

const imgArray = [
    {"id": 0, "title": "Moon", "image":"./assets/moon.jpg", "count": 0},
    {"id": 1, "title": "Sun", "image":"./assets/sun.jpg", "count": 0},
    {"id": 2, "title": "Telescope", "image":"./assets/telescope.jpg", "count": 0},
    {"id": 3, "title": "Stars", "image":"./assets/stars.jpg", "count": 0},
    {"id": 4, "title": "Astronaut", "image":"./assets/astronaut.jpg", "count": 0},
    {"id": 5, "title": "Rocket", "image":"./assets/rocket.jpg", "count": 0}
];

//Functions

// function to generate a random number
const randomNumber = () => {
    let random = Math.floor(Math.random() * 6);
    
    if(imgArray[random].count < 2){
        imgArray[random].count += 1;
        return random;
    }
    else{
        let randomNum = randomNumber();
        return randomNum; // without this function was returning undefined when called for a secind time.
    }
}

// functions to put images in cards
const assignImages = (card) => {
    
    const image = document.createElement('img');
    const h3 = document.createElement('h3');

    image.classList.add("memory-img");
    h3.classList.add("memory-title");

    let random = randomNumber();
    card.classList.add("flex");

    image.classList.add("hidden");
    h3.classList.add("hidden");

    image.classList.add(imgArray[random].id);

    image.setAttribute('src', imgArray[random].image);
    h3.innerText = imgArray[random].title;

    card.appendChild(image);
    card.appendChild(h3);
}

cards.forEach((card) => {
    assignImages(card);
});