// NAVBAR TOGGLE
const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelector('.nav-link');


toggle.addEventListener('click', openMenu);
navLink.addEventListener("click", closeMenu);

function openMenu() {
    toggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    toggle.classList.remove('active');
    navMenu.classList.remove('active');
}

//NAVBAR BACKGROUND COLOR  CHANGE WHEN SCROLLING
window.onscroll = () => {
    scrollNavbar()
};

scrollNavbar = () => {
    const navbar = document.getElementById('navbar');
    if (document.documentElement.scrollTop > 100) {
        navbar.style.backgroundColor = 'rgba(20,2,0,.8)';
        navbar.style.transition = 'all .5s';
    } else {
        navbar.style.backgroundColor = 'inherit';
    }
}

//COUNTER
const counters = document.querySelectorAll('.counter');
const counterSection = document.querySelector('.counter-area');
const speed = 200;
function incCounter(){
counters.forEach(counter => {

    const animate = () => {

        const value = +counter.getAttribute('data-count');
        const data = +counter.innerText;
        const time = value / speed;

        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }
    }
    animate();
});
};

// While scrolling down counter works
const counterSectionOptions = {
    rootMargin: "0px"
};

const counterSectionObserver = new IntersectionObserver(function(entries,counterSectionObserver){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }else{
            incCounter();
        }
    })
},counterSectionOptions);

counterSectionObserver.observe(counterSection);