let selection = document.getElementById("hotel");

selection.addEventListener('change', (e) => {
    let form = document.getElementById('hotels');
    form.action = `/hotels/${e.target.value}`;
});