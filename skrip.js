const texts = ["Do more things with 8-1", "Do unexpected things with 8-1"];
let index = 0;
const textElement = document.getElementById("changingText");

function changeText() {
    if (textElement) {
        textElement.style.opacity = 0;
        setTimeout(() => {
            index = (index + 1) % texts.length;
            textElement.textContent = texts[index];
            textElement.style.opacity = 1; 
        }, 500); 
    }
}

setInterval(changeText, 3000);