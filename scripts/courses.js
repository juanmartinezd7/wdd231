const courses = [
    { subject: 'CSE', number: 110, title: 'CSE 110', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'WDD 130', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'CSE 111', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'CSE 210', credits: 2, completed: true },
    { subject: 'WDD', number: 131, title: 'WDD 131', credits: 2, completed: true },
    { subject: 'WDD', number: 231, title: 'WDD 231', credits: 2, completed: false }
];

function displayCourses(filteredCourses = courses) {
    const container = document.getElementById("courses-list");
    container.innerHTML = "";

    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course-card");
        courseDiv.classList.add(course.completed ? "completed" : "not-completed");

        courseDiv.textContent = course.title;

        container.appendChild(courseDiv);
        totalCredits += course.credits;
    });

    document.getElementById("total-credits").textContent = totalCredits;
}

function filterCourses(type) {
    if (type === "all") {
        displayCourses();
    } else {
        const filtered = courses.filter(course => course.subject === type);
        displayCourses(filtered);
    }
}

displayCourses();





