const trailCardTemplate = document.querySelector("[data-trail-template]");
const trailCardContainer = document.querySelector("[data-trail-cards-container]");
const searchInput = document.querySelector("[data-search]");
const searchForm = document.getElementById('trail-search-form');

let trails = [];


searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  trails.forEach(trail => {
    const isVisible = value && trail.location.toLowerCase().includes(value);
    trail.element.classList.toggle("hide", !isVisible);

    if (isVisible) {
      const body = trail.element.querySelector("[data-body]");
      body.innerHTML = ""; // Clear previous names

      // Add matching trail names
      trail.names.forEach(trailName => {
        const trailInfo = `
          <div>
            <br><br><br>
            <strong>${trailName.name}:</strong><br>
            Elevation: ${trailName.elevation}<br>
            Terrain: ${trailName.terrain}<br>
            Difficulty: ${trailName.difficulty}<br>
            Duration: ${trailName.duration}<br>
            Length: ${trailName.length}<br>
            Near-water: ${trailName.nearWater}<br>
            Rating: ${trailName.userRating}<br>
            <image src="${trailName.image}" class="post-photo-full"></image>
          </div>
        `;

        body.innerHTML += trailInfo;
      });
    }
  });
});

fetch("https://mocki.io/v1/a5bdf2b4-3e83-44aa-bb8a-6cdea58e391d")
  .then(res => res.json())
  .then(data => {
    trails = data.map(trail => {
      const card = trailCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");

      header.textContent = trail.location;

      card.classList.add("hide");

      // Add click event for selecting a trail
      card.addEventListener("click", () => {
        searchInput.value = trail.location;
        searchInput.dispatchEvent(new Event("input"));
      });

      trailCardContainer.append(card);
      return { location: trail.location, names: trail.names, element: card };
    });
  });

