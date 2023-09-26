// progress bar //
window.addEventListener('scroll', function() {
  var windowHeight = window.innerHeight;
  var fullHeight = document.documentElement.scrollHeight;
  var scrolled = window.scrollY;

  var progress = (scrolled / (fullHeight - windowHeight)) * 100;
  document.querySelector('.progress-bar').style.width = progress + '%';
});




// header sticky scrolling //
const header = document.querySelector('header');
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50)
}); 





//Typed Text Animate
var typedText = document.getElementById("p-Top");
var textToType = "'Hello! I'm Salami Ibrahim, a skilled web developer and UI/UX designer. With a passion for creating visually stunning and user-friendly websites, I strive to deliver exceptional digital experiences. Whether you need a custom website, responsive design, or a complete redesign, I'm here to bring your vision to life. Explore my portfolio and let's discuss how I can help you achieve your digital goals.'";
var speed = 50; // The speed of typing, in milliseconds per character.

function typeWriter() {
  if (textToType.length > 0) {
    typedText.innerHTML += textToType.charAt(0);
    textToType = textToType.substring(1);
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 1000); // Start typing after a delay of 1 second.

//MultiText
const multiText = document.getElementById("multiText");
const strings = ["coder", "ui/ux designer", "web developer", "graphics designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === strings.length) {
    count = 0;
  }
  currentText = strings[count];
  letter = currentText.slice(0, ++index);
  
  multiText.textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, typeSpeed);
}

function backspace() {
  letter = currentText.slice(0, --index);
  multiText.textContent = letter;

  if (letter.length === 0) {
    count++;
    if (count === strings.length) {
      count = 0;
    }
    currentText = strings[count];
    index = 0;
  }

  setTimeout(type, backSpeed);
}

let typeSpeed = 150; // typing speed in milliseconds
let backSpeed = 80; // backspacing speed in milliseconds
let delay = 2000; // delay between strings in milliseconds

setTimeout(type, delay);
