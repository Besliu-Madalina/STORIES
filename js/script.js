AOS.init({
    duration: 900,
    offset: 100,
    once: true
});

window.addEventListener("load", function() {
    var loadingScreen = document.getElementById("loading-screen");
    setTimeout(function () {
        loadingScreen.style.display = "none";
    }, 1800);
});

function mobile() {
    var x = document.getElementById("navbar");

    if (x.className === "navigation") {
        x.className = "navigation mobile";
    } else {
        x.className = "navigation";
    }
}

function onload() {
    getYear();
    console.log('page loaded');
    // setScrollListener();
}

function getYear() {
    var d = new Date(),
        date = d.getDate(),
        mon = d.getMonth(),
        yr = d.getFullYear();
    // var days = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];
    // document.getElementById("year").innerHTML = ((date < 10) ? '0' + date : date) + "/" +
    document.getElementById("year").innerHTML = ('0' + date).slice(-2) + "/" +
        // (((mon + 1) < 10) ? '0' + (mon + 1) : (mon + 1)) + "/" + yr + " " + days[d.getDay()];
        ('0' + (mon + 1)).slice(-2) + "/" + yr;
}





// var link = document.querySelector(".nav-btn")
// var button = document.querySelector(".mobile-close")
// var nav = document.querySelector(".main-navigation")
// var site = document.querySelector(".site-navigation")
// var logo = document.querySelector(".header-logo")


// link.addEventListener("click", function () {
//     nav.classList.add("mobile-main-nav")
//     site.classList.add("mobile-site-nav")
//     button.classList.add("close-btn")
//     link.classList.add("nav-btn-none")
//     logo.classList.add("header-logo-none")
// })

// button.addEventListener("click", function () {
//     nav.classList.remove("mobile-main-nav")
//     site.classList.remove("mobile-site-nav")
//     link.classList.remove("nav-btn-none")
//     logo.classList.remove("header-logo-none")
//     button.classList.remove("close-btn")
// })
