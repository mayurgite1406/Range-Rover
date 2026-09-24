//This is my js file.
// ===============================
// RANGE ROVER WEBSITE JAVASCRIPT
// ===============================


// BUILDS SIDEBAR

let buildsCheckbox = document.getElementById("builds-checkbox");
let buildsCars = document.querySelectorAll(".builds-car");

buildsCars.forEach(function(car)
{
    car.addEventListener("click", function()
    {
        console.log("Selected:", car.querySelector(".builds-car-name").innerText);
    });
});


// SUPPORT SIDEBAR

let supportCheckbox = document.getElementById("support-checkbox");


// CLOSE BUILDS SIDEBAR WHEN ESC IS PRESSED

document.addEventListener("keydown", function(event)
{
    if(event.key === "Escape")
    {
        if(buildsCheckbox)
        {
            buildsCheckbox.checked = false;
        }

        if(supportCheckbox)
        {
            supportCheckbox.checked = false;
        }
    }
});


// HERO BUTTONS

let commissionButton = document.getElementById("front-slide-first-button");
let findMoreButton = document.getElementById("front-slide-second-button");

if(commissionButton)
{
    commissionButton.addEventListener("click", function()
    {
        window.location.href =
        "https://www.rangerover.com/en-in/bespoke/index.html";
    });
}

if(findMoreButton)
{
    findMoreButton.addEventListener("click", function()
    {
        window.location.href =
        "https://www.rangerover.com/en-in/bespoke/index.html";
    });
}


// BUILT YOUR OWN BUTTON

let builtOwnButton = document.getElementById("built-own-second");

if(builtOwnButton)
{
    builtOwnButton.addEventListener("click", function()
    {
        window.location.href =
        "https://www.rangerover.com/lr/en_in/l460_k27/4d2iq/a-ev-550_a-fe_a-swb_e/ipr/personalise/model/";
    });
}


// CAR OPTION BUTTONS

let carExploreButtons =
    document.querySelectorAll(".car-option-explore");

carExploreButtons.forEach(function(button)
{
    button.addEventListener("click", function()
    {
        console.log("Explore button clicked");
    });
});


// SECOND SLIDESHOW

let slide1 = document.getElementById("slide1-radio");
let slide2 = document.getElementById("slide2-radio");
let slide3 = document.getElementById("slide3-radio");
let slide4 = document.getElementById("slide4-radio");
let slide5 = document.getElementById("slide5-radio");

let currentSlide = 1;


// NEXT SLIDE

function nextSlide()
{
    currentSlide++;

    if(currentSlide > 5)
    {
        currentSlide = 1;
    }

    if(currentSlide === 1)
    {
        slide1.checked = true;
    }

    if(currentSlide === 2)
    {
        slide2.checked = true;
    }

    if(currentSlide === 3)
    {
        slide3.checked = true;
    }

    if(currentSlide === 4)
    {
        slide4.checked = true;
    }

    if(currentSlide === 5)
    {
        slide5.checked = true;
    }
}


// PREVIOUS SLIDE

function previousSlide()
{
    currentSlide--;

    if(currentSlide < 1)
    {
        currentSlide = 5;
    }

    if(currentSlide === 1)
    {
        slide1.checked = true;
    }

    if(currentSlide === 2)
    {
        slide2.checked = true;
    }

    if(currentSlide === 3)
    {
        slide3.checked = true;
    }

    if(currentSlide === 4)
    {
        slide4.checked = true;
    }

    if(currentSlide === 5)
    {
        slide5.checked = true;
    }
}


// AUTOMATIC SLIDESHOW

setInterval(function()
{
    nextSlide();
}, 5000);