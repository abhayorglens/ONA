
 // Feature 2) Function to reveal different sections at home page whenever we do scroll down then one after the another section get appear
 function revealSections() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight * 0.7) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  // Scroll event listener
  window.addEventListener('scroll', () => {
    revealSections();
   
  });

  // Initial load checks
  window.addEventListener('load', () => {
    revealSections();
    
  });