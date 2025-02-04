// header section 
function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// This script is for controlling the slider animation timing and sliding testimonials
document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector('.testimonial-slider');
    let testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
  
    // Adjust interval time for switching testimonials
    setInterval(function () {
      currentIndex++;
      if (currentIndex >= testimonials.length) {
        currentIndex = 0;
      }
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 4000); // Every 4 seconds, the testimonials slide
  });
  

// JavaScript for Filter functionality(Course/Service Offering Section)
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
  
      // Show or hide courses based on category filter
      document.querySelectorAll('.course-card').forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

// JavaScript for Testimonials Carousel (Simple Swipe)
let currentIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalCards = testimonialCards.length;

function showNextTestimonial() {
  // Hide current card
  testimonialCards[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % totalCards;  // Cycle back to the first card
  testimonialCards[currentIndex].style.display = 'block';
}

function showPreviousTestimonial() {
  // Hide current card
  testimonialCards[currentIndex].style.display = 'none';
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;  // Cycle to the last card
  testimonialCards[currentIndex].style.display = 'block';
}

// Initialize the first testimonial to be visible
testimonialCards.forEach((card, index) => {
  if (index !== 0) {
    card.style.display = 'none';
  }
});

// Set up the carousel to auto-slide every 5 seconds
setInterval(showNextTestimonial, 5000);

// JavaScript for Reviews Carousel (Simple Swipe)
let currentReviewIndex = 0;
const reviewCards = document.querySelectorAll('.review-card');
const totalReviews = reviewCards.length;

function showNextReview() {
  // Hide current review card
  reviewCards[currentReviewIndex].style.display = 'none';
  currentReviewIndex = (currentReviewIndex + 1) % totalReviews;  // Cycle back to the first review
  reviewCards[currentReviewIndex].style.display = 'block';
}

function showPreviousReview() {
  // Hide current review card
  reviewCards[currentReviewIndex].style.display = 'none';
  currentReviewIndex = (currentReviewIndex - 1 + totalReviews) % totalReviews;  // Cycle to the last review
  reviewCards[currentReviewIndex].style.display = 'block';
}

// Initialize the first review to be visible
reviewCards.forEach((card, index) => {
  if (index !== 0) {
    card.style.display = 'none';
  }
});

// Set up the carousel to auto-slide every 5 seconds
setInterval(showNextReview, 5000);


// JavaScript to filter blog posts based on category
const categorySelect = document.getElementById('category-select');
const articleCards = document.querySelectorAll('.article-card');

categorySelect.addEventListener('change', (event) => {
  const selectedCategory = event.target.value;

  articleCards.forEach((card) => {
    const cardCategory = card.getAttribute('data-category');
    if (selectedCategory === 'all' || cardCategory === selectedCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});


// JavaScript for handling the form submission (Contact Us Section)
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
  
    // Log form data to the console for testing
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
  
    // You can replace this with an actual submission to a server or an email service
    alert('Thank you for contacting us! We will get back to you soon.');
  });

// JavaScript for Accordion Toggle(FAQs Section)
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;
    
    // Close all accordion items
    accordionButtons.forEach(item => {
      item.setAttribute('aria-expanded', 'false');
      item.nextElementSibling.style.display = 'none';
    });

    // Open the clicked accordion item if it's not already open
    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      button.nextElementSibling.style.display = 'block';
    }
  });
});


// JavaScript for Newsletter form submission (simple alert for demonstration)
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  const emailInput = document.querySelector('.newsletter-input');
  const email = emailInput.value;
  
  // For demonstration, show a simple success message
  if (email) {
    alert(`Thank you for subscribing with ${email}!`);
    emailInput.value = ''; // Clear the input field after submission
  }
});
