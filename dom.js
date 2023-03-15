let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';

var odd=document.querySelectorAll('li:nth-child(odd');
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}


for(let i=0;i<items.length;i++)
{
    items[i].style.fontWeight = 'bold';
}

