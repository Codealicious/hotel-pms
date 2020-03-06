let formButtons = document.querySelector('.buttons');

formButtons.addEventListener('click', (e) => {
    let form = document.getElementById('resForm');
    form.action = e.target.value;
    form.submit()
})