var moon = document.querySelector('#moon');
var sun = document.querySelector('#sun');
var fond = document.querySelector('.fond');
var form = document.querySelector('.form');
var h1 = document.querySelector('.h1');
var bouton = document.querySelector('.bouton');
var label = document.querySelector('.label');
var copyid = document.querySelector('#copy');
var h4 = document.querySelector('.h4');
var li = document.querySelector('.li a');
var li1 = document.querySelector('.li1 a');
var li2 = document.querySelector('.li2 a');
var li3 = document.querySelector('.li3 a');
var li4 = document.querySelector('.li4 a');
var rst = document.getElementById('rst');

// Dark to light
moon.addEventListener('click', ()=>{
	sun.classList.add('active');
	moon.classList.add('remove');
	fond.classList.add('active');
	form.classList.add('active');
	h1.classList.add('active');
	bouton.classList.add('active');
	label.classList.add('active');
	copyid.classList.add('active');
	drop.classList.add('ok');
	social.classList.add('ok');
	h4.classList.add('active');
	close.classList.add('ok');
	li.classList.add('active');
	li1.classList.add('active');
	li2.classList.add('active');
	li3.classList.add('active');
	li4.classList.add('active');
	rst.classList.add('ok');
});
// Light to Dark
sun.addEventListener('click', ()=>{
	sun.classList.remove('active');
	moon.classList.remove('remove');
	fond.classList.remove('active');
	form.classList.remove('active');
	h1.classList.remove('active');
	bouton.classList.remove('active');
	label.classList.remove('active');
	copyid.classList.remove('active');
	drop.classList.remove('ok');
	social.classList.remove('ok');
	h4.classList.remove('active');
	close.classList.remove('ok');
	li.classList.remove('active');
	li1.classList.remove('active');
	li2.classList.remove('active');
	li3.classList.remove('active');
	li4.classList.remove('active');
	rst.classList.remove('ok');
});

var social = document.querySelector('.social');
var drop = document.querySelector('#down');
var close = document.querySelector('#times');
// down to social
drop.addEventListener('click', ()=>{
	social.classList.toggle('active');
});
// close to social
close.addEventListener('click', ()=>{
	social.classList.remove('active');
});



// text repeater
var bouton = document.querySelector('#bouton');
bouton.addEventListener('click', (e) => {
    // Empêcher le formulaire de se soumettre
    e.preventDefault();
    
    var input = document.querySelector('.textarea').value;
    var repeat = parseInt(document.querySelector('#input').value);
    var output = document.querySelector('.result');
    var danger = document.querySelector('.zt_alert');
    let resultat = '';
    for (var i = 0; i < repeat; i++) {
        resultat += input + '\n'; // Utilisez '\n' pour un saut de ligne
    }
    
    // Vérification des limites
    if (isNaN(repeat) || repeat < 1 || repeat > 5000) {
    			danger.classList.add('active');
       danger.innerHTML = " ✘ Please enter the number between 1 and 5000";
    }else{
  // Remplacer les sauts de ligne par des balises <br> pour un affichage HTML correct
    output.innerHTML = resultat.replace(/\n/g, '<br>');
    var zt = document.getElementById('zt')
    zt.classList.add('scc');
       zt.innerHTML = " ✔ Successful "; 
    }

});




document.addEventListener('DOMContentLoaded', () => {
    const copyIcon = document.getElementById('copy');
    const textarea = document.querySelector('.textarea');
    const resultDiv = document.querySelector('.result');
    const form = document.querySelector('.form');

    // Fonction pour copier le texte
    function copyText() {
        // Crée un élément temporaire pour stocker le texte à copier
        const tempInput = document.createElement('textarea');
        tempInput.value = resultDiv.innerText; // Le texte généré à copier
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        // Affiche une alerte pour indiquer que le texte a été copié
            var alerte = document.querySelector('.success');
        alerte.classList.add('ok')
        alerte.innerHTML = " ✔ Text copied to clipboard";
    }

    // Ajoute l'événement de clic sur l'icône de copie
    copyIcon.addEventListener('click', copyText);
});


var anim = document.querySelector('.anim')
setTimeout(function() {
  anim.style.display = "none";
}, 2500);