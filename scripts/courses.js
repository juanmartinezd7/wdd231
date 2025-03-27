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
        courseDiv.classList.add("course-card", course.completed ? "completed" : "not-completed");

        courseDiv.textContent = course.title;

        courseDiv.addEventListener('click', () => {
            displayCourseDetails(course);
        });

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

function displayCourseDetails(course) {
    const courseDetails = document.getElementById("courseDetails");

    // Assign custom content based on subject
    let certificate = "Web and Computer Programming";
    let description = "This course introduces students to the World Wide Web and to careers in web site design and development.";
    let technologies = "HTML, CSS, JavaScript";

    if (course.subject === "CSE") {
        certificate = "Computer Science Fundamentals";
        description = "This course covers foundational programming concepts using modern problem-solving techniques.";
        technologies = "Python, Algorithms, Data Structures, C#";
    } else if (course.subject === "WDD") {
        certificate = "Web Development and Design";
        description = "Students build interactive websites and learn design principles for modern web applications.";
        technologies = "HTML, CSS, JavaScript";
    }

    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Certificate:</strong> ${certificate}</p>
        <p>${description}</p>
        <p><strong>Technologies:</strong> ${technologies}</p>
    `;

    courseDetails.showModal();

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener('click', () => {
        courseDetails.close();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayCourses();
});








