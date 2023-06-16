// Open / Close menu navbar
const menuBtn =  document.querySelector('#navbarOpen')
const closeBtn =  document.querySelector('#navbarClose')
const navbarMenu = document.querySelector('#navbarMenu')

if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        navbarMenu.classList.add('show__menu')
    })
}

if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        navbarMenu.classList.remove('show__menu')
    })
}


// Close menu navbar when clicking any option
const navbarLink =  document.querySelectorAll('.navbar__link')

function linkAction() {

    const navbar = document.querySelector('#navbarMenu')
    navbar.classList.remove('show__menu')
}

navbarLink.forEach(target =>  target.addEventListener('click', linkAction))


// Change menu navbar color when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolling', window.scrollY)
})