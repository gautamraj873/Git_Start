let form = document.getElementById('store');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    let inputValue = document.getElementById('name').value;

    localStorage.setItem('Name', inputValue);
};

