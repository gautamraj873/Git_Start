let form = document.getElementById('store');
let parentElem = document.getElementById('listOfItems');

document.addEventListener('DOMContentLoaded', () => {
    showUserOnScreen();
});

form.addEventListener('submit', addItem);
parentElem.addEventListener('click', deleteOrUpdateItem);

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

    axios.post('https://crudcrud.com/api/63b16f4112514649adb17463679e108b/users', obj)
    .then(response => {
        showUserOnScreen();
        form.reset();
    })
    .catch(error => {
        console.error(error);
    });
}

function showUserOnScreen(){
    parentElem.innerHTML = "";
    axios.get('https://crudcrud.com/api/63b16f4112514649adb17463679e108b/users')
    .then(response => {
        let itemsArray = response.data;
        if(itemsArray){
            for(let i=0; i<itemsArray.length; i++){
                let li = document.createElement('li');
                li.innerHTML = itemsArray[i].username + " - " + itemsArray[i].emailId + " - " + itemsArray[i].phoneNo + " ";
                let deleteButton = document.createElement('button');
                deleteButton.innerHTML = "Delete";
                deleteButton.setAttribute('data-index', itemsArray[i]._id);
                let editButton = document.createElement('button');
                editButton.innerHTML = "Edit";
                editButton.setAttribute('data-index', itemsArray[i]._id);
                li.appendChild(deleteButton);
                li.appendChild(editButton);
                parentElem.appendChild(li);
            }
        }
    })
    .catch(error => {
        console.error(error);
    });
}

function deleteOrUpdateItem(e){
    if(e.target.tagName === "BUTTON"){
        let index = e.target.getAttribute('data-index');
        let itemsArray = JSON.parse(localStorage.getItem('items'));
        if(e.target.innerHTML === "Delete") {
            axios.delete('https://crudcrud.com/api/63b16f4112514649adb17463679e108b/users/' + index)
            .then(response => {
                showUserOnScreen();
            })
            .catch(error => {
                console.error(error);
            });
        } else if(e.target.innerHTML === "Edit") {
            let user = itemsArray[index];
            document.getElementById('username').value = user.username;
            document.getElementById('emailId').value = user.emailId;
            document.getElementById('phoneNo').value = user.phoneNo;
            itemsArray.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(itemsArray));
        }
        showUserOnScreen();
    }
}
