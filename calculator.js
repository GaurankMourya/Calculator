let string = "";
var display = document.querySelector('.display');
let buttons = document.querySelectorAll(".enter");
let ON = document.querySelector('.onn')
let OFF = document.querySelector('.off')

ON.addEventListener('click', function () {
    OFF.style.display = "flex"
    Array.from(buttons).forEach(function(value){
        value.style.display = "flex"
    })
});

Array.from(buttons).forEach(function (value) {
    value.addEventListener('click', function (event) {
        if (value.innerHTML == '=') {
            string = eval(string);
            display.innerHTML = `${string}`
        }
        else if(value.innerHTML == "AC"){
            string = "";
            display.innerHTML = `${string}`
        }
        else {
            string += value.innerHTML;
            display.innerHTML = `${string}`
        }
    })
})

OFF.addEventListener('click', function () {
    ON.style.display = "flex"
    OFF.style.display = "none"
    Array.from(buttons).forEach(function(value){
        value.style.display = "none"
    })
})
