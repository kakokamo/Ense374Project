fetch("https://mocki.io/v1/8d150210-96ca-419d-8a45-7c06f1e70771")
  .then(res => res.json())
  .then(data => {
    const trailCards = [];

    // Loop through the data to create and store the trail cards
    data.forEach(trail => {
      const trailLocationCard = document.createElement("div");
      trailLocationCard.classList.add("trail-location-card");
      trailLocationCard.style.display = "none"; // Hide initially

      const locationHeader = document.createElement("h2");
      locationHeader.textContent = trail.location;
      trailLocationCard.appendChild(locationHeader);

      trail.names.forEach(trailDetail => {
        const trailCard = document.createElement("div");
        trailCard.classList.add("trail-card");

        const trailName = document.createElement("h3");
        trailName.textContent = trailDetail.name;
        trailCard.appendChild(trailName);

        const trailDetails = document.createElement("ul");
        const durationItem = document.createElement("li");
        durationItem.textContent = `Duration: ${trailDetail.duration}`;
        trailDetails.appendChild(durationItem);

        const terrainItem = document.createElement("li");
        terrainItem.textContent = `Terrain: ${trailDetail.terrain}`;
        trailDetails.appendChild(terrainItem);

        const elevationItem = document.createElement("li");
        elevationItem.textContent = `Elevation: ${trailDetail.elevation}`;
        trailDetails.appendChild(elevationItem);

        const difficultyItem = document.createElement("li");
        difficultyItem.textContent = `Difficulty: ${trailDetail.difficulty}`;
        trailDetails.appendChild(difficultyItem);

        const lengthItem = document.createElement("li");
        lengthItem.textContent = `Length: ${trailDetail.length}`;
        trailDetails.appendChild(lengthItem);

        const nearWaterItem = document.createElement("li");
        nearWaterItem.textContent = `Near Water: ${trailDetail.nearWater}`;
        trailDetails.appendChild(nearWaterItem);

        const ratingItem = document.createElement("li");
        ratingItem.textContent = `Rating: ${trailDetail.userRating}`;
        trailDetails.appendChild(ratingItem);

        trailCard.appendChild(trailDetails);

        const image = document.createElement("img");
        image.src = trailDetail.image;
        image.alt = `${trailDetail.name} image`;
        trailCard.appendChild(image);

        // Add click event to the image to set the search bar to the location
        image.addEventListener('click', function() {
          document.getElementById("search").value = trail.location; // Update search bar with location
          filterTrails(); // Trigger the filter function
        });

        trailLocationCard.appendChild(trailCard);

        // Store the trail card and location for later filtering
        trailCards.push({
          element: trailLocationCard,
          trailName: trailDetail.name,
          location: trail.location
        });
      });

      document.getElementById("trailCardContainer").appendChild(trailLocationCard);
    });

    // Filter function
    window.filterTrails = function() {
      const query = document.getElementById("search").value.toLowerCase();

      trailCards.forEach(trail => {
        const trailName = trail.trailName.toLowerCase();
        const location = trail.location.toLowerCase();

        // Show or hide the trail based on the search query matching either trail name or location
        if (trailName.includes(query) || location.includes(query)) {
          trail.element.style.display = "block"; // Show trail if it matches
        } else {
          trail.element.style.display = "none"; // Hide trail if it doesn't match
        }
      });
    };

    // Event listener for search input to show/hide the trail container
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
      const trailContainer = document.getElementById('trailCardContainer');
      if (searchInput.value.trim() === '') {
        trailContainer.style.display = 'none'; // Hide results if input is cleared
      } else {
        trailContainer.style.display = 'block'; // Show results if input has value
        filterTrails(); // Trigger the filter function
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



