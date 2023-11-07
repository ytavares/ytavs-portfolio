const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.intersectionRatio >= .5) {
      entry.target.classList.add('show');
    }
  })
}, {
  threshold: [0, .5, 1]
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/**
 * Animação de scroll pro icon da logo
 */

let currentPos = 0
const logoObject = document.querySelector('.iconLogo');
document.addEventListener('scroll', (event) => {
    if (window.scrollY > currentPos) {
      logoObject.classList.add('rotateRight')
      logoObject.classList.remove('rotateLeft')
    } else {
      logoObject.classList.add('rotateLeft')
      logoObject.classList.remove('rotateRight')
    }
    currentPos = window.scrollY;
})
document.addEventListener('scrollend', (event) => {
    logoObject.classList.remove('rotateLeft')
    logoObject.classList.remove('rotateRight')
})

/**
 * Config fullpage.js
 */
