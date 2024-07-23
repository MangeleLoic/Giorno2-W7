const saveBtn = document.getElementById('save');
const resetBtn = document.getElementById('reset');
const textArea = document.getElementById('input-textArea');

const save = function () {
    const textAreaValue = textArea.value
    localStorage.setItem('textContent', textAreaValue);

}
saveBtn.addEventListener('click', save);


const reset = function () {
    textArea.value = '';
    localStorage.removeItem('textContent');
};

resetBtn.addEventListener('click', reset);

