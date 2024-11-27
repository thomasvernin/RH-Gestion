// Fonction pour filtrer les cartes
function filterCards(category) {
    // Réinitialiser l'état des filtres
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.classList.remove('active'); // Enlever la classe active de tous les boutons
    });

    // Ajouter la classe active au bouton sélectionné
    const selectedButton = document.querySelector(`.filter-btn[onclick="filterCards('${category}')"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }

    // Afficher ou masquer les cartes selon la catégorie sélectionnée
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';  // Afficher la carte
        } else {
            card.style.display = 'none';   // Masquer la carte
        }
    });
}

// Fonction pour afficher les compétences dans la popup
function showCompetences(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'flex';
}

// Fonction pour fermer la popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

// Initialisation de la page : définir "tous" comme sélectionné par défaut et afficher toutes les cartes
document.addEventListener("DOMContentLoaded", () => {
    // Marquer le filtre "tous" comme sélectionné par défaut
    const allButton = document.querySelector('.filter-btn[onclick="filterCards(\'all\')"]');
    if (allButton) {
        allButton.classList.add('active'); // Ajouter la classe active au filtre "tous"
    }

    // Afficher toutes les cartes par défaut
    filterCards('all');
});


