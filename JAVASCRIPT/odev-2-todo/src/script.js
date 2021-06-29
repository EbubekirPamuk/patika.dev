
let input = document.querySelector('#task');
let button = document.querySelector('.button');
let list = document.querySelector('#list');
let clear = document.querySelector('.clear');
let toastSuc = document.querySelector('.error');
let toastErr = document.querySelector('.success');
let toastComp = document.querySelector('.complete');

// Add Item
button.addEventListener('click', () => {
  if (input.value == '') {
    toastSuc.style.display="block";
    setInterval(() => {
        toastSuc.style.display="none";
    }, 4000);
    return
  }

  list.innerHTML += `
  <li class="list-item">
    ${input.value}
  <a href="#" class="clear">X</a>
  </li>`

   input.value = '';
   toastErr.style.display="block";
    setInterval(() => {
        toastErr.style.display="none";
    }, 4000);
});
// Delete Item
list.addEventListener('click', e => {
  if (e.target.className == 'clear') {
    e.target.parentElement.remove();
    e.preventDefault();
    toastComp.style.display="block";
    setInterval(() => {
        toastComp.style.display="none";
    }, 4000);
  }
});
