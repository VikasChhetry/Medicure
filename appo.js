document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointmentForm');
    const appointmentsList = document.getElementById('appointmentsList');

    // Load existing appointments from local storage
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    // Display existing appointments
    displayAppointments();

    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const patientName = document.getElementById('patientName').value;
        const patientEmail = document.getElementById('patientEmail').value;
        const patientPhone = document.getElementById('patientPhone').value;
        const appointmentDate = document.getElementById('appointmentDate').value;
        const appointmentTime = document.getElementById('appointmentTime').value;
        const doctorName = document.getElementById('doctorName').value;

        // Create appointment object
        const appointment = {
            patientName,
            patientEmail,
            patientPhone,
            appointmentDate,
            appointmentTime,
            doctorName
        };

        // Add appointment to array
        appointments.push(appointment);

        // Save to local storage
        localStorage.setItem('appointments', JSON.stringify(appointments));

        // Clear form
        appointmentForm.reset();

        // Display updated appointments
        displayAppointments();
    });

    function displayAppointments() {
        appointmentsList.innerHTML = '';
        appointments.forEach((appointment, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${appointment.patientName}</strong> - 
                ${appointment.appointmentDate} at ${appointment.appointmentTime} with ${appointment.doctorName}
                
            `;
            appointmentsList.appendChild(li);
        });
    }

    // Make deleteAppointment function global
    window.deleteAppointment = function(index) {
        appointments.splice(index, 1);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        displayAppointments();
    }
});