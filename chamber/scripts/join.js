
document.addEventListener("DOMContentLoaded", function () {
    // Timestamp
    const ts = document.getElementById("formTimestamp");
    if (ts) ts.value = new Date().toISOString();

    // Thank You Page Logic
    //const thankYouFields = [
    //"outputFirstName", "outputLastName",
    //"outputEmail", "outputMobile",
    // "outputBusiness", "outputTimestamp"
    //];
    //thankYouFields.forEach(id => {
    //const el = document.getElementById(id);
    //if (el) {
    //const param = id.replace("output", "").toLowerCase();
    //el.textContent = new URLSearchParams(window.location.search).get(param) || "N/A";
    // }
    // });

    const fieldMap = {
        outputFirstName: "firstName",
        outputLastName: "lastName",
        outputEmail: "email",
        outputMobile: "mobilePhone",
        outputBusiness: "organizationName",
        outputTimestamp: "formTimestamp"
    };

    Object.keys(fieldMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const param = fieldMap[id];
            el.textContent = new URLSearchParams(window.location.search).get(param) || "N/A";
        }
    });


    // Modal logic
    const triggers = document.querySelectorAll('.modal-trigger');
    if (triggers.length) {
        triggers.forEach(trigger => {
            trigger.addEventListener('click', function (e) {
                e.preventDefault();
                const modalId = this.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                if (modal) modal.style.display = 'block';
            });
        });

        document.querySelectorAll('.modal .close').forEach(close => {
            close.addEventListener('click', function () {
                this.closest('.modal').style.display = 'none';
            });
        });

        window.addEventListener('click', function (e) {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
    }
});
