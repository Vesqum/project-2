document.addEventListener('DOMContentLoaded', function() {


    const nav = document.querySelector('.navbar');
    const allNavLink = document.querySelector('.nav-link');
    const collapse = document.querySelector('.navbar-collapse');


    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    allNavLink.forEach(el => el.addEventListener('click', () => collapse.classList.remove('show')))
    window.addEventListener('scroll', addShadow)
})

