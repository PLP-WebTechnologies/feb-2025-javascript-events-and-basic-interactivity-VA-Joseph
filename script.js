// Text Change
document.getElementById('changeTextBtn').addEventListener('click', function () {
    this.textContent = "Text Changed!";
});

// Hover Event
document.getElementById('hoverBtn').addEventListener('mouseover', function () {
    this.style.backgroundColor = '#3498db';
});
document.getElementById('hoverBtn').addEventListener('mouseout', function () {
    this.style.backgroundColor = '';
});

// Double Click Secret
document.getElementById('secretBtn').addEventListener('dblclick', function () {
    alert("You discovered the secret action!");
});

// Key Press Detector
document.getElementById('keyInput').addEventListener('keyup', function (e) {
    document.getElementById('keyOutput').textContent = `You typed: ${e.key}`;
});

// Slideshow Logic
const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3"
];
let current = 0;

function showImage(index) {
    document.getElementById('slideshow').src = images[index];
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

// Tabs
function showTab(tabId) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let tab of tabs) {
        tab.style.display = 'none';
    }
    document.getElementById(tabId).style.display = 'block';
}

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const message = document.getElementById('formMessage');

    if (name.value === "" || email.value === "" || password.value === "") {
        message.textContent = "All fields are required.";
        message.style.color = "red";
        return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email.value)) {
        message.textContent = "Enter a valid email.";
        message.style.color = "red";
        return;
    }

    if (password.value.length < 8) {
        message.textContent = "Password must be at least 8 characters.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
});
