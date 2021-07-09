/* Abre e fecha o menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
   nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () { 
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scrool */
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
if(window.scrollY >= navHeight) {
 // SINTAXA LOUCONA - MAIOR QUE O HEADER
 header.classList.add('scroll')
} else {
 // SINTAXA LOUCONA - MENOR QUE O HEADER
 header.classList.remove('scroll')
}
})

/* Testimonials slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
})

/* ScrollReveal*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
`#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links
footer .brand, footer .social
`, { interval: 100}
)

/*botão voltar ao inicio */
const backToTopButton = document.querySelector('.voltar-ao-inicio')
window.addEventListener('scroll', function() {
  if (window.scrollY >= 500){
    backToTopButton.classList.add('show')
} else {
  backToTopButton.classList.remove('show')
}
})