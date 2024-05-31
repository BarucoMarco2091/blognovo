$(document).ready(function() {
    const sections = $('section');
    const navItem = $('.flex-container')

    $(window).on('scroll', function(){
        const header = $('header')
        const scrollPosition = $(window).scrollTop() - header.outerHeight()
        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)')
        }
    })
    ScrollReveal().reveal('.services', {
        origin:'left',
        duration:2000,
        distance:'20%'
    })
    
})