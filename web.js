
document.querySelector('#menu-btn').addEventListener('click', function() {
    const navbar = document.querySelector('.nav-divupper');
    navbar.classList.toggle('open');
});
//---------------navbar scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const mediaQuery = window.matchMedia('(min-width: 992px)');
    if (mediaQuery.matches) { // If screen width is 992px or greater
      if (window.scrollY > 50) {
        navbar.classList.add('fixed');
      } else {
        navbar.classList.remove('fixed');
      }
    } else { // If screen width is less than 992px
      navbar.classList.remove('fixed');
    }
  });


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav-divupper');
    if (navbar.classList.contains('open')) {
        navbar.classList.remove('open');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.main-img');
    let currentIndex = 0;
  
    function changeImage() {
      images[currentIndex].style.opacity = 0; // Hide the current image
      currentIndex = (currentIndex + 1) % images.length; // Move to the next image
      images[currentIndex].style.opacity = 1; // Show the next image
    }
  
    // Initialize the images opacity
    images.forEach((img, index) => {
      img.style.transition = 'opacity 1s';
      img.style.opacity = index === 0 ? 1 : 0;
    });
  
    setInterval(changeImage, 5000); // Change image every 5 seconds
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.main-img');
    let currentIndex = 0;
  
    function changeImage() {
      images[currentIndex].style.opacity = 0; // Hide the current image
      currentIndex = (currentIndex + 1) % images.length; // Move to the next image
      images[currentIndex].style.opacity = 1; // Show the next image
    }
  
    // Initialize the images opacity
    images.forEach((img, index) => {
      img.style.transition = 'opacity 1s';
      img.style.opacity = index === 0 ? 1 : 0;
    });
  
    setInterval(changeImage, 5000); // Change image every 5 seconds
  });
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-div1 a');
  
    // Set the active link based on the current URL
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
      }
    });
  
    // Add click event listener to each link
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));
  
        // Add 'active' class to the clicked link
        this.classList.add('active');
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    var carouselElement = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(carouselElement);
  });
   
      //dropdown
     
      document.addEventListener("DOMContentLoaded", function() {
        const caretIcon = document.getElementById('pages-caret');
        const dropdownContent = document.querySelector('.drop-down .dropdown-content');
    
        caretIcon.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            event.stopPropagation(); // Stop the click event from propagating to the window
            dropdownContent.classList.toggle('show');
        });
    
        // Close the dropdown if the user clicks outside of it
        window.addEventListener('click', function(event) {
            if (!dropdownContent.contains(event.target) && !caretIcon.contains(event.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    
        // Close the dropdown if the user scrolls
        window.addEventListener('scroll', function() {
            dropdownContent.classList.remove('show');
        });
    });
    

 

// ----------------------testimonial code

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'slide',
    grabCursor: true,
    loop: true,
    slidesPerView: 3, // Display exactly 3 slides at a time
    spaceBetween: 0, // Remove space between slides
    autoplay: {
        delay: 3000, // Autoplay every 3 seconds
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        slideChange: function () {
            // Add class to active slide
            this.slides.forEach(slide => {
                slide.classList.remove('active-slide'); // Remove previous active class
            });
            this.slides[this.activeIndex + 1].classList.add('active-slide'); // Add active class to the current slide
        },
    },
});

// The following code for stopping autoplay on hover has been removed
/*
var swiperContainer = document.querySelector('.swiper-container');

swiperContainer.addEventListener('mouseenter', function() {
    TrandingSlider.autoplay.stop(); // Stop autoplay
});

swiperContainer.addEventListener('mouseleave', function() {
    TrandingSlider.autoplay.start(); // Restart autoplay
});
*/

// Query to dynamically adjust slides per view
function updateSlidesPerView() {
    if (window.innerWidth <= 480) {
        TrandingSlider.params.slidesPerView = 1; // 1 slide for extra small screens
    } else if (window.innerWidth <= 768) {
        TrandingSlider.params.slidesPerView = 2; // 2 slides for small screens
    } else {
        TrandingSlider.params.slidesPerView = 3; // 3 slides for larger screens
    }
    TrandingSlider.update(); // Update Swiper instance
}

// Call function on initial load
updateSlidesPerView();

// Update on window resize
window.addEventListener('resize', updateSlidesPerView);
