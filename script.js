document.addEventListener('DOMContentLoaded', function() {
    const getReportBtn = document.getElementById('getReportBtn');
    const popupOverlay = document.getElementById('popupOverlay');
    const reportForm = document.getElementById('reportForm');
    const confirmationPopup = document.getElementById('confirmationPopup');
    const reportCountElement = document.getElementById('reportCount');

    let reportCount = 9851;

    getReportBtn.addEventListener('click', function() {
        popupOverlay.style.display = 'flex';
    });

    document.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
        if (e.target === confirmationPopup) {
            confirmationPopup.style.display = 'none';
        }
    });

    reportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Email validation
        const emailInput = reportForm.querySelector('input[name="email"]');
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If email is valid, proceed with form submission
        reportCount++;
        reportCountElement.textContent = reportCount;

        // Hide the form popup and show the confirmation popup
        popupOverlay.style.display = 'none';
        confirmationPopup.style.display = 'flex';

        // Reset the form
        reportForm.reset();
    });
});