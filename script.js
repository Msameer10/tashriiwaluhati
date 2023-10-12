// h1 animation

document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".animate-slide");
    
    // Add the "animate-slide" class after a short delay to trigger the animation
    setTimeout(function () {
        title.classList.add("animate-slide");
    }, 500); // Adjust the delay (in milliseconds) as needed
});


// copyright year

document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    const copyrightYearElement = document.getElementById("year");

    if (copyrightYearElement) {
        copyrightYearElement.textContent = currentYear;
    }
});
