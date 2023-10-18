document.addEventListener("DOMContentLoaded", function () {
    const mainView = document.getElementById("main-view");
    const rulesDiv = document.getElementById("rules");
    const likesDiv = document.getElementById("likes");
    const backToMainButtons = document.querySelectorAll("#back-to-main");

    function showDiv(divToShow) {
        mainView.style.display = "none";
        rulesDiv.style.display = "none";
        likesDiv.style.display = "none";
        divToShow.style.display = "block";
    }

    function showMainView() {
        mainView.style.display = "block";
        rulesDiv.style.display = "none";
        likesDiv.style.display = "none";
    }

    backToMainButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            showMainView();
        });
    });

    document.querySelector(".left-div").addEventListener("click", function () {
        showDiv(rulesDiv);
    });

    document.querySelector(".right-div").addEventListener("click", function () {
        showDiv(likesDiv);
    });
});



// copyright year

document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    const copyrightYearElement = document.getElementById("year");

    if (copyrightYearElement) {
        copyrightYearElement.textContent = currentYear;
    }
});

