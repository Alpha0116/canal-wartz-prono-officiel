// WARTZ PRONO OFFICIEL — Interactions & Logic
(function () {
  "use strict";

  // Prevent browser scroll restoration
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);

  const TELEGRAM_URL = "https://t.me/+2KFGHc6h3gI5MmZk";
  const AUTO_REDIRECT_DELAY = 10000; // 10 secondes

  let redirectTimer = null;
  let hasRedirected = false;

  // Fonction de redirection avec annulation du timer
  function redirectToTelegram() {
    if (hasRedirected) return;
    hasRedirected = true;

    if (redirectTimer) {
      clearTimeout(redirectTimer);
      redirectTimer = null;
    }

    window.location.href = TELEGRAM_URL;
  }

  // Lance le décompte de 10 secondes au chargement
  redirectTimer = setTimeout(function () {
    redirectToTelegram();
  }, AUTO_REDIRECT_DELAY);

  // Si l'utilisateur clique n'importe où : redirection immédiate + annulation du décompte
  document.addEventListener("click", function () {
    redirectToTelegram();
  });

  // Défilement automatique continu de la page (auto-scroll)
  let autoScrollSpeed = 1;
  let scrolling = true;

  function autoScroll() {
    if (scrolling) {
      window.scrollBy(0, autoScrollSpeed);
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        window.scrollTo(0, 0);
      }
    }
    requestAnimationFrame(autoScroll);
  }

  // Démarre l'auto-scroll rapidement après le chargement
  setTimeout(function () {
    requestAnimationFrame(autoScroll);
  }, 1200);
})();
