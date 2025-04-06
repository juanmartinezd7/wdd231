document.addEventListener("DOMContentLoaded", () => {
    fetch("data/places.json")
        .then(response => response.json())
        .then(jsonData => {
            const cardContainer = document.getElementById("card-containerPlaces");

            const eligiblePlaces = jsonData.places.filter(place =>
                place.cost === "Free" || place.cost === "Varies by event"
            );

            const shuffledPlaces = eligiblePlaces.sort(() => 0.5 - Math.random());
            const placesToShow = shuffledPlaces.slice(0, 8);

            placesToShow.forEach((place) => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
            <div class="card-name"><h2>${place.name}</h2></div>
            <div class="card-picturePlace">
              <img src="${place.photo_url}" alt="${place.name}" loading="lazy">
            </div>
            <div class="card-description">
              <p><strong>Address:</strong> ${place.address}</p>
              <p><strong>Cost:</strong> ${place.cost}</p>
              <p><strong>Description:</strong> ${place.description}</p>
            </div>
            <div class="card-info">
              <a href="${place["website URL"]}" target="_blank">Click to find more about this place</a>
            </div>
          `;


                cardContainer.appendChild(card);
            });
        }) // closes second .then()
        .catch(error => console.error("Error loading JSON data:", error));
}); // closes DOMContentLoaded

