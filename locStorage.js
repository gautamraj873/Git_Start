let form = document.getElementById('store');
let parentElem = document.getElementById('listOfItems');

form.addEventListener('submit', addItem);
parentElem.addEventListener('click', deleteItem);

function addItem(e){
    e.preventDefault();

    let nameValue = document.getElementById('username').value;
    let emailValue = document.getElementById('emailId').value;
    let phoneValue = document.getElementById('phoneNo').value;

    const obj = {
        username : nameValue,
        emailId : emailValue,
        phoneNo : phoneValue
    };

    let itemsArray = [];
    if(localStorage.getItem('items')){
        itemsArray = JSON.parse(localStorage.getItem('items'));
    }
    itemsArray.push(obj);
    localStorage.setItem('items', JSON.stringify(itemsArray));

    showUserOnScreen();

    form.reset();
}

function showUserOnScreen(){
    parentElem.innerHTML = "";
    let itemsArray = JSON.parse(localStorage.getItem('items'));

    if(itemsArray){
        for(let i=0; i<itemsArray.length; i++){
            let li = document.createElement('li');
            li.innerHTML = itemsArray[i].username + " - " + itemsArray[i].emailId + " - " + itemsArray[i].phoneNo + " ";
            let deleteButton = document.createElement('button');
            deleteButton.innerHTML = "Delete";
            deleteButton.setAttribute('data-index', i);
            li.appendChild(deleteButton);
            parentElem.appendChild(li);
        }
    }
}

function deleteItem(e){
    if(e.target.tagName === "BUTTON"){
        let index = e.target.getAttribute('data-index');
        let itemsArray = JSON.parse(localStorage.getItem('items'));
        itemsArray.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        showUserOnScreen();
    }
}
