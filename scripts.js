// Fonction pour filtrer les cartes
function filterCards(filter) {
    const cards = document.querySelectorAll('.card');

    if (filter === 'all') {
        cards.forEach(card => card.style.display = 'block');
    } else {
        cards.forEach(card => {
            if (card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Fonction pour afficher les compétences dans la popup spécifique
function showCompetences(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';
}

// Fonction pour fermer la popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

// Afficher toutes les cartes par défaut
window.onload = () => filterCards('all');
