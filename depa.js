document.addEventListener('DOMContentLoaded', function() {
    const departmentForm = document.getElementById('department-form');
    const departmentsContainer = document.getElementById('departments');

    // Load existing departments from local storage
    let departments = JSON.parse(localStorage.getItem('hospitalDepartments')) || [
        {
            id: 1,
            name: 'Dental',
            description: 'Comprehensive dental care for all ages.',
            image: 'images/dential.jpg'
        },
        {
            id: 2,
            name: 'Orthopedic',
            description: 'Specialized care for bones, joints, and muscles.',
            image: 'images/ortho.jpg'
        },
        {
            id: 3,
            name: 'Cardiology',
            description: 'Expert care for heart and cardiovascular health.',
            image: 'images/cardio.jpg'
        },
        {
            id: 4,
            name: 'Optometry',
            description: 'Comprehensive eye care and vision services.',
            image: 'images/opto.jpg'
        },
        {
            id: 5,
            name: 'Gynecology',
            description: 'Specialized care for women\'s health.',
            image: 'images/gino.jpg'
        },
        {
            id: 6,
            name: 'Dermatology',
            description: 'Expert care for skin, hair, and nail conditions.',
            image: 'images/derma.png'
        }
    ];

    // Display existing departments
    displayDepartments();

    departmentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const deptName = document.getElementById('dept-name').value;
        const deptDescription = document.getElementById('dept-description').value;
        const deptImage = document.getElementById('dept-image').value;

        // Create department object
        const department = {
            id: Date.now(),
            name: deptName,
            description: deptDescription,
            image: deptImage
        };

        // Add department to array
        departments.push(department);

        // Save to local storage
        localStorage.setItem('hospitalDepartments', JSON.stringify(departments));

        // Clear form
        departmentForm.reset();

        // Display updated departments
        displayDepartments();
    });

    function displayDepartments() {
        departmentsContainer.innerHTML = '';
        departments.forEach((dept) => {
            const deptCard = document.createElement('div');
            deptCard.classList.add('department-card');
            deptCard.innerHTML = `
                <img src="${dept.image}" alt="${dept.name} Department">
                <div class="department-info">
                    <h2>${dept.name}</h2>
                    <p>${dept.description}</p>
                    
                </div>
            `;
            departmentsContainer.appendChild(deptCard);
        });
    }

    // Make deleteDepartment function global
    window.deleteDepartment = function(id) {
        departments = departments.filter(dept => dept.id !== id);
        localStorage.setItem('hospitalDepartments', JSON.stringify(departments));
        displayDepartments();
    }
});