const container = document.querySelector(".container");
const title = document.querySelector(".title");
const button = document.querySelector(".button");

const changeTheme = () => {
    if(container.classList.contains("day-theme")){
        button.style.backgroundColor = "#DC0000";
        title.innerText = "This is Night Theme";
        container.classList.remove("day-theme");
        container.classList.add("night-theme");
    }
    else{
        button.style.backgroundColor = "#F9F54B";
        title.innerText = "This is Day Theme";
        container.classList.remove("night-theme");
        container.classList.add("day-theme");
    }
};

button.addEventListener('click', () => {changeTheme()});