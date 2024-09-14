document.addEventListener('DOMContentLoaded', function() {
    // Load service counts from local storage
    let serviceCounts = JSON.parse(localStorage.getItem('hospitalServiceCounts')) || {
        appointment: 0,
        ambulance: 0,
        contact: 0,
        feedback: 0
    };

    // Update initial counts
    updateCounts();

    // Function to increment service count
    window.incrementService = function(service) {
        serviceCounts[service]++;
        updateCounts();
        saveToLocalStorage();
    }

    // Function to update displayed counts
    function updateCounts() {
        document.getElementById('appointment-count').textContent = serviceCounts.appointment;
        document.getElementById('ambulance-count').textContent = serviceCounts.ambulance;
        document.getElementById('contact-count').textContent = serviceCounts.contact;
        document.getElementById('feedback-count').textContent = serviceCounts.feedback;
    }

    // Function to save counts to local storage
    function saveToLocalStorage() {
        localStorage.setItem('hospitalServiceCounts', JSON.stringify(serviceCounts));
    }
});