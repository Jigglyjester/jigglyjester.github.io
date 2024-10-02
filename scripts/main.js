// image switcher

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/luna-wolf.webp") {
    myImage.setAttribute("src", "images/luna.webp");
  } else {
    myImage.setAttribute("src", "images/luna-wolf.webp");
  }
};

// personalised message

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Tell me your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to the chapter, brother ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to the chapter, brother ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}