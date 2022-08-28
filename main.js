// SHOW SIDEBAR
const navMenu = document.getElementById('sidebar'),
      navToogle = document.getElementById('nav-toogle'),
      navClose = document.getElementById('nav-close')

if(navToogle) {
    navToogle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

// SIDEBAR HIDDEN
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

// MIXITUP FILTER TRENDS
let mixerPortfolio = mixitup('.trends__container', {
    selectors: {
        target: '.trend__card'
    },
    animation: {
        duration: 300
    }
});

// Link Active Trend
const linkTrend = document.querySelectorAll('.trend__item')

function activeTrend() {
    linkTrend.forEach(l=> l.classList.remove('active-trend'))
    this.classList.add('active-trend')
}

linkTrend.forEach(l=> l.addEventListener("click", activeTrend))

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}


// SCROLL UP
var mybutton = document.getElementById("BtnToTop");

// When the user scrolls down 20px from the top of the document, show the button
document.addEventListener('scroll', function(e)
{
    scrollFunction();
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// THEME LIGHT AND DARK MODE
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("uil-sun");
    dayNight.querySelector("i").classList.toggle("uil-moon");
    document.body.classList.toggle("light");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("light"))
    {
        dayNight.querySelector("i").classList.add("uil-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.add("uil-sun");
    }
})

