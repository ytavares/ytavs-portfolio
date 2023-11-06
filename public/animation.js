const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.intersectionRatio >= .5) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
}, {
  threshold: [0, .5, 1]
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));