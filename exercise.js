// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const text = document.querySelector('#product')
const qty = document.querySelector('#qty')
const lis = document.querySelector('#list')

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    const newItem = document.createElement('li');
    newItem.innerText = `${qty.value} ${text.value}`
    lis.append(newItem);
    text.value= "";
    qty.value= "";
})

