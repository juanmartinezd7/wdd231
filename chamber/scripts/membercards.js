document.addEventListener("DOMContentLoaded", () => {
    fetch("data/members.json")
        .then(response => response.json())
        .then(jsonData => {
            const cardContainer = document.getElementById("card-container");

            // Filter members with Gold or Silver membership levels
            const eligibleMembers = jsonData.members.filter(member =>
                member.membership_level === "Gold" || member.membership_level === "Silver"
            );

            // Shuffle the eligible members
            const shuffledMembers = eligibleMembers.sort(() => 0.5 - Math.random());

            // Select the first 3 after shuffling
            const membersToShow = shuffledMembers.slice(0, 3);

            membersToShow.forEach(member => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${member.imageurl}" alt="${member.company_name}">
                    <h2>${member.company_name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member["phone number"]}</p>
                    <a href="${member["website URL"]}" target="_blank">Visit Website</a>
                    <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                `;

                cardContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading JSON data:", error));
});


