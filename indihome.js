// Scroll effect for header
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
  });
  
  // Filter packages by region
  function tampilkanPaket() {
    const wilayah = document.getElementById('wilayah').value;
    const paket = document.querySelectorAll('.package-card');
  
    paket.forEach(card => {
      const wilayahCard = card.getAttribute('data-wilayah');
      if (wilayah === "semua" || wilayahCard.includes(wilayah)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
  
  // Initialize package display
  tampilkanPaket();