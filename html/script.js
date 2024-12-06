
window.changementDePage = function(href){
    const filler = document.querySelector('.screen-filler');
    filler.style.visibility = 'visible'; // Rends l'écran visible
    filler.style.opacity = 1; // Assombrit l'écran
    setTimeout(function() { 
        window.location.href = href; // Change de page après 700ms (ou un peu plus)
    }, 700);
}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){
        document.querySelector('.screen-filler').style.opacity = 0;
    }, 100);
    setTimeout(function() {
        document.querySelector('.screen-filler').style.visibility = 'hidden';
    }, 700);
});