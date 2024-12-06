window.changementDePage = function(href){
    const filler = document.querySelector('.screen-filler');
    filler.style.opacity = 1; // Assombrit l'écran
    filler.style.visibility = 'visible'; // Rends l'écran visible
    setTimeout(function() { 
        window.location.href = href; // Change de page après 700ms (ou un peu plus)
    }, 700); // Assurez-vous que ce délai est supérieur à la durée de la transition CSS (.5s ici)
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.screen-filler').style.opacity = 0;
    setTimeout(function() {
        document.querySelector('.screen-filler').style.visibility = 'hidden';
    }, 700);
});