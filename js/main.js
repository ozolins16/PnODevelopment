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


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Stop the #section-id from appearing in the URL
    const sectionId = this.getAttribute('href').substring(1); // Get ID without #
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Keep your smooth scrolling
      history.replaceState(null, null, window.location.pathname); // Remove # from URL
    }
  });
});

document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault(); // stop normal form submission
  const form = e.target;

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    // redirect to your own page
    window.location.href = "https://pnodevelopment.com/";
  } else {
    alert("There was a problem submitting the form.");
  }
});
