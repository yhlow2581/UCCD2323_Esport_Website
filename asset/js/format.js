// ================= MOBILE NAVIGATION MENU =================
var navToggle = document.getElementById("navToggle");
var navLinks = document.getElementById("navLinks");

navToggle.onclick = function () {
    navLinks.classList.toggle("open");
};

// ================= FADE IN WHEN SCROLLING =================
function revealOnScroll() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
            reveals[i].classList.add("visible");
        }
    }
}

// ================= SESSION STORAGE REMEMBER SCROLL POSITION =================
var pageKey = "scrollPosition_" + location.pathname;

window.addEventListener("scroll", function () {
    sessionStorage.setItem(pageKey, window.scrollY);
    revealOnScroll();
});

// ================= LOGIN STATUS =================
function updateLoginStatus() {
    var loginLink = document.getElementById("loginLink");
    if (!loginLink) {
        return;
    }

    var isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        loginLink.textContent = "Hi! Welcome.";
        loginLink.href = "#";
    } else {
        loginLink.textContent = "Log In";
        loginLink.href = "login.html";
    }
}

// ================= PAGE LOAD =================
window.addEventListener("load", function () {
    var savedPosition = sessionStorage.getItem(pageKey);
    if (savedPosition !== null) {
        window.scrollTo(0, Number(savedPosition));
    }

    revealOnScroll();
    updateLoginStatus();
});

// ================= CHECK LOGIN =================
function checkLogin() {
    var isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        return true;
    }

    window.alert("Please log in first.");
    window.location.href = "login.html";

    return false;
}