document.addEventListener("DOMContentLoaded", async function () {
    const membersContainer = document.getElementById("members-container");
    const toggleButton = document.getElementById("toggle-view");

    let isGridView = true;

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const data = await response.json();
            displayMembers(data.members);
        } catch (error) {
            console.error("Error fetching member data:", error);
            membersContainer.innerHTML = "<p>Failed to load members.</p>";
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = "";
        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");

            memberCard.innerHTML = `
                <img src="${member.imageurl}" alt="${member.company_name}" class="member-image">
                <div class="member-info">
                    <h3>${member.company_name}</h3>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member["phone number"]}</p>
                    <p><a href="${member["website URL"]}" target="_blank">Visit Website</a></p>
                    <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                </div>
            `;

            membersContainer.appendChild(memberCard);
        });

        updateView();
    }

    function updateView() {
        if (isGridView) {
            membersContainer.classList.add("grid-view");
            membersContainer.classList.remove("list-view");
            toggleButton.setAttribute("aria-label", "Switch to list view");
            toggleButton.setAttribute("title", "Switch to list view");
            toggleButton.textContent = "🔲 Grid View"; // Optional: Icon indicator
        } else {
            membersContainer.classList.add("list-view");
            membersContainer.classList.remove("grid-view");
            toggleButton.setAttribute("aria-label", "Switch to grid view");
            toggleButton.setAttribute("title", "Switch to grid view");
            toggleButton.textContent = "📃 List View"; // Optional: Icon indicator
        }
    }

    toggleButton.addEventListener("click", function () {
        isGridView = !isGridView;
        updateView();
    });

    fetchMembers();
});
