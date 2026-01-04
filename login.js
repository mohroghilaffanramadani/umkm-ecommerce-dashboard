// login.js - Login and Registration Logic

// Sample user data for demo
const users = [
    {
        id: 1,
        name: "Demo User",
        email: "demo@umkmdigital.id",
        password: "demo123",
        type: "buyer",
        isAdmin: false
    },
    {
        id: 2,
        name: "Admin UMKM",
        email: "admin@umkmdigital.id",
        password: "admin123",
        type: "seller",
        isAdmin: true
    },
    {
        id: 3,
        name: "UMKM Sumber Rezeki",
        email: "seller@umkmdigital.id",
        password: "seller123",
        type: "seller",
        isAdmin: false
    }
];

// DOM Elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');
const togglePasswordBtn = document.getElementById('toggle-password');
const toggleRegisterPasswordBtn = document.getElementById('toggle-register-password');
const notificationContainer = document.getElementById('notification-container');

// Show notification
const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'times-circle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    notificationContainer.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
    
    // Click to dismiss
    notification.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
};

// Toggle password visibility
const togglePasswordVisibility = (inputId, button) => {
    const passwordInput = document.getElementById(inputId);
    const icon = button.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
};

// Toggle between login and register forms
showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Toggle password visibility
togglePasswordBtn.addEventListener('click', () => {
    togglePasswordVisibility('password', togglePasswordBtn);
});

toggleRegisterPasswordBtn.addEventListener('click', () => {
    togglePasswordVisibility('register-password', toggleRegisterPasswordBtn);
});

// Login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Save user to localStorage for demo
        localStorage.setItem('umkmUser', JSON.stringify(user));
        
        // Save remember me preference
        if (rememberMe) {
            localStorage.setItem('umkmRememberMe', 'true');
        } else {
            localStorage.removeItem('umkmRememberMe');
        }
        
        showNotification('Login berhasil! Mengarahkan ke halaman utama...', 'success');
        
        // Redirect after delay
        setTimeout(() => {
            if (user.isAdmin) {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'index.html';
            }
        }, 1500);
    } else {
        showNotification('Email atau kata sandi salah. Coba lagi.', 'error');
    }
});

// Register form submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;
    const userType = document.getElementById('user-type').value;
    const agreeTerms = document.getElementById('agree-terms').checked;
    
    // Validation
    if (!name || !email || !password || !confirmPassword || !userType) {
        showNotification('Harap isi semua kolom yang wajib diisi.', 'error');
        return;
    }
    
    if (password.length < 8) {
        showNotification('Kata sandi minimal 8 karakter.', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Konfirmasi kata sandi tidak cocok.', 'error');
        return;
    }
    
    if (!agreeTerms) {
        showNotification('Anda harus menyetujui Syarat & Ketentuan.', 'error');
        return;
    }
    
    // Check if email already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        showNotification('Email sudah terdaftar. Silakan gunakan email lain.', 'error');
        return;
    }
    
    // Create new user (in a real app, this would be sent to a server)
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        password: password,
        type: userType,
        isAdmin: false
    };
    
    // For demo, we'll just add to the users array
    users.push(newUser);
    
    // Save to localStorage
    localStorage.setItem('umkmUser', JSON.stringify(newUser));
    
    showNotification('Pendaftaran berhasil! Akun Anda telah dibuat.', 'success');
    
    // Redirect after delay
    setTimeout(() => {
        if (userType === 'seller') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'index.html';
        }
    }, 1500);
});

// Social login buttons (demo only)
document.querySelectorAll('.btn-social').forEach(button => {
    button.addEventListener('click', () => {
        showNotification('Fitur login sosial masih dalam pengembangan.', 'info');
    });
});

// Forgot password link
document.querySelector('.forgot-password').addEventListener('click', (e) => {
    e.preventDefault();
    showNotification('Fitur reset password akan mengirim email ke alamat Anda.', 'info');
});

// Check if user is already logged in
const checkExistingLogin = () => {
    const savedUser = localStorage.getItem('umkmUser');
    const rememberMe = localStorage.getItem('umkmRememberMe');
    
    if (savedUser && rememberMe) {
        // Auto-fill login form
        const user = JSON.parse(savedUser);
        document.getElementById('email').value = user.email;
        document.getElementById('remember-me').checked = true;
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkExistingLogin();
});