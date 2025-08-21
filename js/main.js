const hiddenElements = document.querySelectorAll('.hidden, .hidden-left, .hidden-right');

document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // Optional: Stop observing once it’s shown
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
hiddenElements.forEach(el => observer.observe(el));
});

//NAV SCROLL EFFECT
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;

        // Blur background when scrolling down from top
        if (currentScroll > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide navbar when scrolling down, show when scrolling up
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            navbar.classList.add('hide');
        } else {
            navbar.classList.remove('hide');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // prevent negative values
    });
});



// BURGER MENU TOGGLE
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navItemContainer = document.getElementById('nav-item-container');

    burgerMenu.addEventListener('click', () => {
        navItemContainer.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    const navLinks = navItemContainer.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navItemContainer.classList.remove('active');
            burgerMenu.classList.remove('active');
        });
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!burgerMenu.contains(event.target) && !navItemContainer.contains(event.target)) {
            navItemContainer.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    });
});


// FORM SUBMISSION
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

document.getElementById("option1").addEventListener("change", function () {
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3");
  if (this.checked) {
    option2.checked = false;
    option3.checked = false;
    document.getElementById("option1-label").style.color = "#12AAFB";
    document.getElementById("option2-label").style.color = "#ffffffff";
    document.getElementById("option3-label").style.color = "#ffffffff";
  } else {
    document.getElementById("option1-label").style.color = "#ffffffff";
  }
}
);

document.getElementById("option2").addEventListener("change", function () {
  const option1 = document.getElementById("option1");
  const option3 = document.getElementById("option3");
  if (this.checked) {
    option1.checked = false;
    option3.checked = false;
    document.getElementById("option2-label").style.color = "#12AAFB";
    document.getElementById("option1-label").style.color = "#ffffffff";
    document.getElementById("option3-label").style.color = "#ffffffff";
  } else {
    document.getElementById("option2-label").style.color = "#ffffffff";
  }
}
);

document.getElementById("option3").addEventListener("change", function () {
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  if (this.checked) {
    option1.checked = false;
    option2.checked = false;
    document.getElementById("option3-label").style.color = "#12AAFB";
    document.getElementById("option1-label").style.color = "#ffffffff";
    document.getElementById("option2-label").style.color = "#ffffffff";
  } else {
    document.getElementById("option2-label").style.color = "#ffffffff";
  }
}
);