let form = document.getElementById('store');
let parentElem = document.getElementById('listOfItems');

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
      .then(function (response) {
        showUserOnScreen();
        form.reset();
      })
      .catch(function (error) {
        console.log(error);
      });
}

function showUserOnScreen(){
    parentElem.innerHTML = "";

    axios.get('https://crudcrud.com/api/63b16f4112514649adb17463679e108b/users')
      .then(function (response) {
        let itemsArray = response.data;

        if(itemsArray){
            localStorage.setItem('items', JSON.stringify(itemsArray)); // Store data in local storage
            for(let i=0; i<itemsArray.length; i++){
                let li = document.createElement('li');
                li.innerHTML = itemsArray[i].username + " - " + itemsArray[i].emailId + " - " + itemsArray[i].phoneNo + " ";
                let deleteButton = document.createElement('button');
                deleteButton.innerHTML = "Delete";
                deleteButton.setAttribute('data-id', itemsArray[i]._id);
                let editButton = document.createElement('button');
                editButton.innerHTML = "Edit";
                editButton.setAttribute('data-id', itemsArray[i]._id);
                li.appendChild(deleteButton);
                li.appendChild(editButton);
                parentElem.appendChild(li);
            }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}

function deleteOrUpdateItem(e){
    if(e.target.tagName === "BUTTON"){
        let id = e.target.getAttribute('data-id');

        if(e.target.innerHTML === "Delete") {
            axios.delete(`https://crudcrud.com/api/63b16f4112514649adb17463679e108b/users/${id}`)
              .then(function (response) {
                showUserOnScreen();
              })
              .catch(function (error) {
                console.log(error);
              });
        } else if(e.target.innerHTML === "Edit") {
            let itemsArray = JSON.parse(localStorage.getItem('items')); // Retrieve data from local storage
            let index = -1;
            for(let i=0; i<itemsArray.length; i++) {
              if(itemsArray[i]._id === id) {
                index = i;
                break;
              }
            }
            if(index !== -1) {
              let user = itemsArray[index];
              document.getElementById('username').value = user.username;
              document.getElementById('emailId').value = user.emailId;
              document.getElementById('phoneNo').value = user.phoneNo;
              itemsArray.splice(index, 1);
              localStorage.setItem('items', JSON.stringify(itemsArray)); // Update data in local storage
            }
        }
        showUserOnScreen();
    }
}
