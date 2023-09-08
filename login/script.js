const form = document.querySelector('.form');
const username = document.querySelector('.user-name');
const user_password = document.querySelector('.user-password');
form.addEventListener('submit', e => {
    e.preventDefault();
    
    const data = new FormData(form);
    const name = data.get('name');
    const password = data.get('password');
    
    username.textContent = 'Username: ' + name;
    user_password.textContent = 'Password: ' + password;
});
