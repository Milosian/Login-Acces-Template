const form = document.querySelector('.form');
const footer = document.querySelector('.footer');
    
form.addEventListener('submit', e => {
    e.preventDefault();
    
    const data = new FormData(form);
    const name = data.get('name');
    const password = data.get('password');

    footer.textContent = name  + " " + password;
});
