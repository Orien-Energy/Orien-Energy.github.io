const navlinks = document.getElementById("navlinks");
const navlinksholder = document.getElementById("navlinksholder")
const hamburgerbutton = document.getElementById("hamburgerbutton")
const btn = document.getElementById("expand-menu-button");

const mediaQuery = 'screen and (max-width: 800px)';

const mql = window.matchMedia(mediaQuery);

// hide menu

function hideMenu() {
    navlinks.style.transform = "translate(0px, -100%)";
    navlinksholder.style.display = "none";
    navlinksholder.style.height = "0px";
    navlinksholder.style.borderTop = "none";
    hamburgerbutton.style.background = "none";

    document.getElementById("expand-menu-button").setAttribute("aria-expanded", "false");
}

function showMenu() {
    navlinksholder.style.display = "block";
    navlinksholder.style.height = "auto";
    navlinks.style.transform = "translate(0px, 0px)";
    navlinksholder.style.borderTop = "2px solid rgb(129, 114, 101)";
    hamburgerbutton.style.background = "#f3dfce";

    document.getElementById("expand-menu-button").setAttribute("aria-expanded", "true");
}

const mediaChanged = (e) => {
    // reset whenever screen changes form
    document.getElementById("expand-menu-button").setAttribute("aria-expanded", "false");

    if (e.matches) {
        // small screen
        navlinksholder.style.display = "none";
        // console.log("small screen");
    } else {
        navlinksholder.style.display = "block";
        navlinks.style.transform = "translate(0px, 0px)";
        navlinksholder.style.height = "auto";
        navlinksholder.style.borderTop = "none";
        hamburgerbutton.style.background = "none";
        // console.log("big screen");
    }
}

mql.addEventListener('change', mediaChanged);

// navlinksholder.style.background = "red";

// if (smallScreen == "true") {
//     btn.addEventListener("click", menuClick());
// }




// want to close menu when escape key is pressed

function escKeyDown(e) {
    if (e.keyCode == "27") {
        hideMenu();
    }
}

document.addEventListener("keydown", (event) => {
    if (event.keyCode == 27) {
        hideMenu();
    }
});

// want to close menu when user clicks outside menu AND menu button

const onClickOutside = (element, callback) => {
    document.addEventListener('click', e => {
        if ((!element.contains(e.target)) && (!btn.contains(e.target))) {
            if (btn.getAttribute("aria-expanded") == "true") {
                callback();
                console.log("Clicked");
            }
        }
    });
};

onClickOutside(navlinksholder, hideMenu);

// toggles menu between on and off
function menuClick() {
    var x = btn.getAttribute("aria-expanded");

    if (x == "true") {
        // hide menu

        hideMenu();

    } else {
        // expand menu

        showMenu();

        //         window.setTimeout(function() {
        //   document.getElementById('fade3').className += ' fade-in'
        // }, 50)

    }
}

btn.addEventListener("click", menuClick);