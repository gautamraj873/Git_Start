let itemList = document.querySelector('#items');

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//childNode
console.log(itemList.childNodes);

//children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
console.log(itemList.firstChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement
let newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');
let newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);
newDiv.style.fontSize = '30px';


container.insertBefore(newDiv, h1);

var parentNode = document.getElementById('items');
parentNode.innerHTML = '<li class="list-group-item">Hello World</li>' + parentNode.innerHTML