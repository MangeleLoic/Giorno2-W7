const saveBtn = document.getElementById('save');
const resetBtn = document.getElementById('reset');
const textArea = document.getElementById('input-textArea');
const showUser = document.getElementById('savedUser')
const Conteggio = document.getElementById('timer')

const save = function () {
    const textAreaValue = textArea.value
    localStorage.setItem('username', textAreaValue);

}
saveBtn.addEventListener('click', save);

const show = function() {

    const savedValue = localStorage.getItem('username');
    if (savedValue) {
        showUser.innerText = savedValue ? savedValue : '';
    }
   

}

saveBtn.addEventListener('click', show);


const reset = function () {
    textArea.value = '';
    localStorage.removeItem('username');
};

resetBtn.addEventListener('click', reset);



function cronometro() {
    let timer = JSON.parse(sessionStorage.getItem('timer'));
    Conteggio.innerText = timer;
    timer++;
    sessionStorage.setItem('timer', timer);
}

setInterval(cronometro, 1000);
cronometro();