const cards = document.querySelectorAll(".card");
const cardImgs = document.querySelectorAll(".card-img");
let revealedCard; //class will be added later on the revealed card through click listener.

let selectedImgs = [];
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

    let random = randomNumber(); //calling random function here
    card.classList.add("flex");

    image.classList.add("hidden");
    h3.classList.add("hidden");

    image.classList.add(imgArray[random].id);

    image.setAttribute('src', imgArray[random].image);

    h3.innerText = imgArray[random].title;

    card.appendChild(image);
    card.appendChild(h3);
}

// function to compare images
const compareImages = (imgOne, imgTwo, card, revealedCard) => {
    
    if(imgOne != imgTwo){
        hideImages(revealedCard);
        hideImages(card);
        revealedCard.classList.remove("revealed");
        selectedImgs = [];
    }
    else{
        revealedCard.classList.remove("revealed");
        selectedImgs = [];
    }

}

// function for revealing the images
const revealImages = (card) => {
    card.children[0].classList.add("hidden"); //card.children gives all the children of card-div in the form form of a node-list
    card.children[1].classList.remove("hidden");
    card.children[2].classList.remove("hidden");
}

// function to hide the image back
const hideImages = (card) => {
    card.children[0].classList.remove("hidden");
    card.children[1].classList.add("hidden");
    card.children[2].classList.add("hidden");
}

//forEach method on cards to assignImages and listener to each card
cards.forEach((card) => {
    
    assignImages(card);
    
    card.addEventListener('click', () => {
        revealImages(card);

        card.classList.add("revealed");
        revealedCard = document.querySelector(".revealed");

        selectedImgs.push(card.children[1].classList[1]);
        console.log(selectedImgs);
        console.log(revealedCard);

        if(selectedImgs.length == 2){
            compareImages(selectedImgs[0], selectedImgs[1], card, revealedCard);
        }
    });
});