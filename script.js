$(document).ready(function() {
   $('#mobile_btn').on('click', function() {
    $('#mobile_menu').toggleClass('active')
    $('#mobile_btn').find('i').toggleClass('fa-x') // find para achar o i que fará a troca de classe
   })
    
})