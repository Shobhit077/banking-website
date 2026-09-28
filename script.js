// DOM Elements
const sidebarItems = document.querySelectorAll('.nav-item[data-target]');
const sections = document.querySelectorAll('.page-section');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const transferForm = document.getElementById('transferForm');
const successModal = document.getElementById('successModal');

// 1. Tab Switching Logic
function switchTab(targetId) {
    // Update active class on sidebar
    sidebarItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-target') === targetId) {
            item.classList.add('active');
        }
    });

    // Show correct section
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');

    // On mobile, close sidebar after clicking
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
    }
}

// Bind click events to sidebar items
sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        switchTab(item.getAttribute('data-target'));
    });
});

// 2. Mobile Menu Toggle
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

// 3. Fund Transfer Logic (Mock UI interaction)
if (transferForm) {
    transferForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success modal
        successModal.classList.add('active');
        
        // Reset form
        transferForm.reset();
    });
}

// Close Modal
function closeModal() {
    successModal.classList.remove('active');
    switchTab('dashboard'); // Redirect to dashboard after transfer
}

// 4. Profile Form (Mock submission)
const profileForm = document.getElementById('profileForm');
if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Profile updated successfully!');
    });
}

// Log Out Mock
const logoutBtn = document.querySelector('.logout');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        alert('You have been securely logged out.');
        // In a real app, window.location.href = '/login.html'
    });
}
