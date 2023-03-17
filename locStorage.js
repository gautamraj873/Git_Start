let form = document.getElementById('store');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    let nameValue = document.getElementById('username').value;
    let emailValue = document.getElementById('emailId').value;
    let phoneValue = document.getElementById('phoneNo').value;

    // localStorage.setItem('name', nameValue);
    // localStorage.setItem('email', emailValue);
    // localStorage.setItem('phoneNo', phoneValue);

    const obj = {
        username : nameValue,
        emailId : emailValue,
        phoneNo : phoneValue
    };

    let obj_serialized = JSON.stringify(obj);

    localStorage.setItem('userDetails', obj_serialized);

    let obj_deserialized = JSON.parse(localStorage.getItem('userDetails'));
    console.log(obj_deserialized);
    showUserOnScreen(obj_deserialized);

    function showUserOnScreen(obj_deserialized){
    const parentElem = document.getElementById('listOfItems');
    parentElem.innerHTML = parentElem.innerHTML + `<li>${obj_deserialized.username} - ${obj_deserialized.emailId} - ${obj_deserialized.phoneNo}</li>`
    }
    
};