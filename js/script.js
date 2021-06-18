const { init } = require("browser-sync");


function check() {
    let submit = document.getElementsByClassName('but')[0];
    if (document.getElementById('check').checked)
    submit.disabled = '';
    else
    submit.disabled = 'disabled';
}
function checki() {
    let submit = document.getElementsByClassName('buto')[0];
    if (document.getElementById('checkr').checked)
    submit.disabled = '';
    else
    submit.disabled = 'disabled';
}


//modal

       
      
function modalOpen(){
    const modal = document.querySelector('.modal');
    modal.classList.add('show');
    modal.classList.remove('hide');
}
function modalClose(){
    const modal = document.querySelector('.modal');
    const  modalCloseBtn = document.querySelector('.modal__close');
    modal.classList.add('hide');
    modal.classList.remove('show');
}

function modaliOpen(){
    const modal = document.querySelector('.modali');
    modal.classList.add('show');
    modal.classList.remove('hide');
}
function modaliClose(){
    const modal = document.querySelector('.modali');
    const  modalCloseBtn = document.querySelector('.modal__close');
    modal.classList.add('hide');
    modal.classList.remove('show');
}