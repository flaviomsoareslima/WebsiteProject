
const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menuButtons");


hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
})

const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.portefolioCard');
const resultsCount = document.getElementById('resultsCount');

function updateCount() {
    const visibleCards = [...cards].filter(card => card.style.display !== 'none');
    const count = visibleCards.length;

    resultsCount.textContent = `${count} projeto${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''}`;
}


updateCount();

searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();

    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();

        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    updateCount();
});

document.querySelectorAll('.portefolioCard').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});











