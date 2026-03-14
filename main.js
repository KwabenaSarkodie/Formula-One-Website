document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('welcome-popup');
    const closeBtn = document.getElementById('close-popup');

    if (popup && closeBtn) {
        // Show popup with a slight delay for dramatic effect
        setTimeout(() => {
            popup.classList.add('show');
        }, 500);

        closeBtn.addEventListener('click', () => {
            popup.classList.remove('show');
        });
    }
});
