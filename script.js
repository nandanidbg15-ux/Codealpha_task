const images = document.querySelectorAll(".image-box img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

images.forEach(function(image, index) {
    image.addEventListener("click", function() {
        currentIndex = index;
        popup.style.display = "flex";
        popupImg.src = this.src;
    });
});

nextBtn.addEventListener("click", function() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    popupImg.src = images[currentIndex].src;
});

prevBtn.addEventListener("click", function() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    popupImg.src = images[currentIndex].src;
});

closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

popup.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});