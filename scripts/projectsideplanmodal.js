document.querySelectorAll('.modal-trigger').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const modalId = this.dataset.modal;
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
    });
});

// Optional: Close modal when clicking outside modal-content
window.addEventListener('click', function (e) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
