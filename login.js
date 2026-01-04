


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


const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');
const togglePasswordBtn = document.getElementById('toggle-password');
const toggleRegisterPasswordBtn = document.getElementById('toggle-register-password');
const notificationContainer = document.getElementById('notification-container');


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
    
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
    
    
    notification.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
};


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


togglePasswordBtn.addEventListener('click', () => {
    togglePasswordVisibility('password', togglePasswordBtn);
});

toggleRegisterPasswordBtn.addEventListener('click', () => {
    togglePasswordVisibility('register-password', toggleRegisterPasswordBtn);
});


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        
        localStorage.setItem('umkmUser', JSON.stringify(user));
        
        
        if (rememberMe) {
            localStorage.setItem('umkmRememberMe', 'true');
        } else {
            localStorage.removeItem('umkmRememberMe');
        }
        
        showNotification('Login berhasil! Mengarahkan ke halaman utama...', 'success');
        
        
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


registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;
    const userType = document.getElementById('user-type').value;
    const agreeTerms = document.getElementById('agree-terms').checked;
    
    
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
    
    
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        showNotification('Email sudah terdaftar. Silakan gunakan email lain.', 'error');
        return;
    }
    
    
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        password: password,
        type: userType,
        isAdmin: false
    };
    
    
    users.push(newUser);
    
    
    localStorage.setItem('umkmUser', JSON.stringify(newUser));
    
    showNotification('Pendaftaran berhasil! Akun Anda telah dibuat.', 'success');
    
    
    setTimeout(() => {
        if (userType === 'seller') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'index.html';
        }
    }, 1500);
});


document.querySelectorAll('.btn-social').forEach(button => {
    button.addEventListener('click', () => {
        showNotification('Fitur login sosial masih dalam pengembangan.', 'info');
    });
});


document.querySelector('.forgot-password').addEventListener('click', (e) => {
    e.preventDefault();
    showNotification('Fitur reset password akan mengirim email ke alamat Anda.', 'info');
});


const checkExistingLogin = () => {
    const savedUser = localStorage.getItem('umkmUser');
    const rememberMe = localStorage.getItem('umkmRememberMe');
    
    if (savedUser && rememberMe) {
        
        const user = JSON.parse(savedUser);
        document.getElementById('email').value = user.email;
        document.getElementById('remember-me').checked = true;
    }
};


document.addEventListener('DOMContentLoaded', () => {
    checkExistingLogin();
});