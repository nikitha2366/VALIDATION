// Form validation
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;

    if (name === '' || email === '') {
        alert('Please fill in all fields');
        return;
    }

    if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
    }

    // Form is valid, submit it
    form.submit();
});

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Interactive menu
const menu = document.getElementById('menu');
const menuItems = menu.querySelectorAll('li');

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('mouseover', () => {
        menuItem.classList.add('active');
    });

    menuItem.addEventListener('mouseout', () => {
        menuItem.classList.remove('active');
    });
});

// Dynamic content updates
const updateButton = document.getElementById('updateButton');
const contentDiv = document.getElementById('content');

updateButton.addEventListener('click', () => {
    const currentTime = new Date().toLocaleTimeString();
    contentDiv.innerHTML = `Current time: ${currentTime}`;
});