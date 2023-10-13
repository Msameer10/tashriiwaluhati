
  

// copyright year

document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    const copyrightYearElement = document.getElementById("year");

    if (copyrightYearElement) {
        copyrightYearElement.textContent = currentYear;
    }
});
