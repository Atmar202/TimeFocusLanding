// DOM Elements
const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const nameVar = document.querySelector('#name');
const focusVar = document.querySelector('#focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBackgroundGreet() {
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour < 10) {
        // Afternoon
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// Get Name
function getName() {
    if(localStorage.getItem('#name') === null) {
        nameVar.textContent = '[Enter Name]';
    } else {
        nameVar.textContent = localStorage.getItem('#name');
    }
}

// Set Name
function setName(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('#name', e.target.innerText);
            nameVar.blur();
        }
    } else {
        localStorage.setItem('#name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('#focus') === null) {
        focusVar.textContent = '[Enter Focus]';
    } else {
        focusVar.textContent = localStorage.getItem('#focus');
    }
}

// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('#focus', e.target.innerText);
            focusVar.blur();
        }
    } else {
        localStorage.setItem('#focus', e.target.innerText);
    }
}

nameVar.addEventListener('keypress', setName);
nameVar.addEventListener('blur', setName);
focusVar.addEventListener('keypress', setFocus);
focusVar.addEventListener('blur', setFocus);

// Run
showTime();
setBackgroundGreet();
getName();
getFocus();