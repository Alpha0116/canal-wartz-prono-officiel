// Empêcher le navigateur de retenir la position de scroll au rafraîchissement
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
// Forcer le retour tout en haut au chargement
window.scrollTo(0, 0);

// Redirection globale vers WhatsApp au moindre clic sur la page
document.addEventListener('click', function (e) {
  if (e.target.closest('#telegram-btn')) {
    return;
  }
  window.location.href = "https://whatsapp.com/channel/0029VbCXxoyJZg48UCwXYD2U";
});

// Défilement automatique lent
let autoScrollSpeed = 1;
let autoScrollInterval;

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    window.scrollBy(0, autoScrollSpeed);

    // Vérifier si on a atteint le bas de la page
    if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // Repartir tout en haut sans s'arrêter
      window.scrollTo(0, 0);
    }
  }, 35);
}

// Lancer le défilement automatique après 2 secondes
setTimeout(startAutoScroll, 2000);
