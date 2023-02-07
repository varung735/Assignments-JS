const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

//functions

//function to insert value into display
const insertValue = (value) => {
    display.value += value;
}

//function to clear display
const clearDisplay = () => {
    display.value = 0;
}

//listeners

buttons.forEach((button) => {
    // this condition doesn't apply the click listener on buttons which have "no-listener" class
    if(!button.classList.contains("no-listener")){
        //event listener
        button.addEventListener('click', () => {
            let id = button.getAttribute('id');
            if(display.value == 0){
                display.value = null;
            }
            if(id != null){
                insertValue(id);
            }
        });
    }

});