document.addEventListener('scroll', () =>{
    const navbar = document.querySelector('nav')
    const navItemContainer = document.getElementById('nav-item-container')
    if(window.scrollY > 0){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navItemContainer = document.getElementById('nav-item-container');

    burgerMenu.addEventListener('click', () => {
        navItemContainer.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!burgerMenu.contains(event.target) && !navItemContainer.contains(event.target)) {
            navItemContainer.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    });
});
