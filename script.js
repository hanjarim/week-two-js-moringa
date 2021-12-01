let firstInput = document.querySelector('#firstInput');
let secondInput = document.querySelector('#secondInput');
let btnAdd = document.querySelector('button');
let Result = document.querySelector('h1');

btnAdd.addEventListener('click', () =>{
    let total = parseInt(firstInput.value) + parseInt(secondInput.value);
     Result.innerText = total;
});
