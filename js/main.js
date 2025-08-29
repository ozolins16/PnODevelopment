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
// document.getElementById("contact-form").addEventListener("submit", async function(e) {
//   e.preventDefault(); // stop normal form submission
//   const form = e.target;
// 
//   const formData = new FormData(form);
// 
//   const response = await fetch(form.action, {
//     method: "POST",
//     body: formData,
//     headers: { 'Accept': 'application/json' }
//   });
// 
//   if (response.ok) {
//     // redirect to your own page
//     window.location.href = "http://127.0.0.1:5500/index.html?message=sent";
//   } else {
//     alert("There was a problem submitting the form.");
//   }
// });

// === FORM HANDLING ===
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // mark success before redirecting
      sessionStorage.setItem("formSuccess", "true");
      window.location.href = "http://127.0.0.1:5500/"; // main page
    } else {
      alert("There was a problem submitting the form.");
    }
  });
}

// === POPUP HANDLING ON MAIN PAGE ===
document.addEventListener("DOMContentLoaded", function() {
  const confirmationBox = document.getElementById("message-confirmation");

  if (sessionStorage.getItem("formSuccess") === "true") {
    if (confirmationBox) {
      // show it
      confirmationBox.classList.remove("message-confirmation-hidden");
      confirmationBox.classList.add("message-confirmation-visible");

      // auto-hide after 3 seconds
      setTimeout(() => {
        confirmationBox.classList.remove("message-confirmation-visible");
        confirmationBox.classList.add("message-confirmation-hidden");
      }, 3000);
    }
    // clear so it doesn’t repeat on refresh
    sessionStorage.removeItem("formSuccess");
  }
});



// PRICING OPTIONS TOGGLE


document.getElementById("monthly_option").addEventListener("change", function () {
  const one_time_payment_option = document.getElementById("one_time_payment_option");
  const contact_us_option = document.getElementById("contact_us_option");
  if (this.checked) {
    one_time_payment_option.checked = false;
    contact_us_option.checked = false;
    document.getElementById("monthly_option-label").style.color = "#12AAFB";
    document.getElementById("one_time_payment_option-label").style.color = "#ffffffff";
    document.getElementById("contact_us_option-label").style.color = "#ffffffff";
  } else {
    document.getElementById("monthly_option-label").style.color = "#ffffffff";
  }
}
);

document.getElementById("one_time_payment_option").addEventListener("change", function () {
  const monthly_option = document.getElementById("monthly_option");
  const contact_us_option = document.getElementById("contact_us_option");
  if (this.checked) {
    monthly_option.checked = false;
    contact_us_option.checked = false;
    document.getElementById("one_time_payment_option-label").style.color = "#12AAFB";
    document.getElementById("monthly_option-label").style.color = "#ffffffff";
    document.getElementById("contact_us_option-label").style.color = "#ffffffff";
  } else {
    document.getElementById("one_time_payment_option-label").style.color = "#ffffffff";
  }
}
);

document.getElementById("contact_us_option").addEventListener("change", function () {
  const monthly_option = document.getElementById("monthly_option");
  const one_time_payment_option = document.getElementById("one_time_payment_option");
  if (this.checked) {
    monthly_option.checked = false;
    one_time_payment_option.checked = false;
    document.getElementById("contact_us_option-label").style.color = "#12AAFB";
    document.getElementById("monthly_option-label").style.color = "#ffffffff";
    document.getElementById("one_time_payment_option-label").style.color = "#ffffffff";
  } else {
    document.getElementById("contact_us_option-label").style.color = "#ffffffff";
  }
}
);