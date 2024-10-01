// timeID to stop timer and also manipulate
let timeID;
// count
let count = 0;
// counter

let counter = document.querySelector('#counter');

// button   addEventListener click function


// start button
let start = document.querySelector('#start');

start.addEventListener('click', function(){
    timeID = setInterval(function(){
    count++
    // change text 
    counter.textContent = count
    }, 1000)
})

// pause button
let pause = document.querySelector('#pause');

pause.addEventListener('click', function(){
    clearInterval(timeID)
})


// reset button

let reset = document.querySelector('#reset')

reset.addEventListener('click', function(){
    count = 0 
    counter.textContent = count
    clearInterval(timeID)
})

