const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    contactForm.reset();
});
const darkModeBtn = document.getElementById("dark-mode-btn");

darkModeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.innerText = "☀️ Light Mode";
    } else {
        darkModeBtn.innerText = "🌙 Dark Mode";
    }
});
const texts = ["Frontend Developer", "Web Developer", "B.Tech CSE Student"];
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        document.getElementById("typing-text").textContent +=
            texts[textIndex].charAt(charIndex);

        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1200);
    }
}

function eraseText() {
    if (charIndex > 0) {
        document.getElementById("typing-text").textContent =
            texts[textIndex].substring(0, charIndex - 1);

        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 300);
    }
}

typeText();