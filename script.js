const btns = document.querySelectorAll('.btns');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelectorAll('.modal');

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modal.forEach((el) => {
            el.classList.remove('modal--visible');
        })

    document.body.classList.add("stop-scroling"); // убираем скролл
    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
});
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        document.body.classList.remove("stop-scroling"); // добавляем скролл
        modal.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    }
});

let form = document.querySelector('.js-form'),
formInputs = document.querySelectorAll('.js-input'),
inputPhone = document.querySelector('.js-input-phone');

function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone)); 
}

form.onsubmit = function () {
    let phoneVal = inputPhone.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if(emptyInputs.length !== 0) {
        console.log('inputs not filed');
        return false;
    }

    if (!validatePhone(phoneVal)) {
        console.log('phone not valid');
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
    }
}

// копируем номер при нажатии на него
const number = document.querySelector('.num');

number.addEventListener('click', (e) => {
    navigator.clipboard.writeText("+380-888-76-54");
    alert("Текст скопирован!");
});