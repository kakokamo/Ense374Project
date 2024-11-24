document.addEventListener('DOMContentLoaded', () => {
  const trailCardTemplate = document.querySelector("[data-trail-template]");
  const trailCardContainer = document.querySelector("[data-trail-cards-container]");
  const searchInput = document.querySelector("[data-search]");
  const searchForm = document.getElementById('trail-search-form');
  const trailResultsContainer = document.getElementById('trailResults');

  let trails = [];

  searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    trails.forEach(trail => {
      const isVisible = value && trail.location.toLowerCase().includes(value);
      trail.element.classList.toggle("hide", !isVisible);
    });
  });

  // First Fetch: Load trail data and populate the search results with location
  fetch("https://mocki.io/v1/a366d257-678a-4857-823f-e5b449fb3834")
    .then(res => res.json())
    .then(data => {
      trails = data.map(trail => {
        const card = trailCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        header.textContent = trail.location;
        card.classList.add("hide");

        // On clicking a card, populate the search input and filter results
        card.addEventListener("click", () => {
          searchInput.value = trail.location;
          searchInput.dispatchEvent(new Event("input"));
          card.classList.add("hide");
        });

        trailCardContainer.append(card);
        return { location: trail.location, element: card};
      });
    });

  // Second Fetch (after form submission): Filter trails based on user input
  const filterTrails = () => {
    const location = document.getElementById('search').value.toLowerCase();
    const elevation = document.getElementById('elevation').value;
    const terrain = document.getElementById('terrain').value.toLowerCase();
    const difficulty = document.getElementById('difficulty').value.toLowerCase();
    const duration = document.getElementById('duration').value.toLowerCase();
    const length = document.getElementById('length').value;
    const nearWater = document.getElementById('near-water').value.toLowerCase();
    const rating = document.getElementById('rating').value;

    // Show all trails first (clear previous results)
    trailCardContainer.innerHTML = '';
    // Filter trails based on input values
    trails.forEach(trail => {
      const trailData = trail.trailData;
      let isVisible = true;

      if (location && !trailData.location.toLowerCase().includes(location)) {
        isVisible = false;
      }
      if (elevation && trailData.elevation && trailData.elevation !== parseInt(elevation)) {
        isVisible = false;
      }
      if (terrain && !trailData.terrain.toLowerCase().includes(terrain)) {
        isVisible = false;
      }
      if (difficulty && trailData.difficulty.toLowerCase() !== difficulty) {
        isVisible = false;
      }
      if (duration && trailData.duration.toLowerCase() !== duration) {
        isVisible = false;
      }
      if (length && trailData.length && trailData.length !== parseInt(length)) {
        isVisible = false;
      }
      if (nearWater && trailData.nearWater.toLowerCase() !== nearWater) {
        isVisible = false;
      }
      if (rating && trailData.rating && trailData.rating !== parseInt(rating)) {
        isVisible = false;
      }

      if (isVisible) {
        const card = trailCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        header.textContent = trailData.location;
        trailCardContainer.append(card);
      }
    });
  };

  // Event listener for the search form submission
  searchForm.addEventListener('search-submit', (e) => {
    e.preventDefault();
    filterTrails(); // Filter and display the results based on user input
  });
});

