var link = document.querySelector('.button__address');
var popup = document.querySelector('.modal');
var close = popup.querySelector('.modal__close');

var shadow = document.querySelector('.modal__overlay');

var form = popup.querySelector('.modal__form');
var login = popup.querySelector('.modal__input--login');
var mail = popup.querySelector('.modal__input--mail');

var storage = localStorage.getItem('modal__input--login');

// Открытие окна и тени
link.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('modal__show');
    shadow.classList.add('modal__overlay-shadow');
      if (storage) {
        login.value = storage;
        mail.focus();
    } else {
        login.focus();
    }
});


// закрытие окна
close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('modal__show');
    popup.classList.remove('modal__error');
    shadow.classList.remove('modal__overlay-shadow');
});

// отправка формы
form.addEventListener('submit', function (event) {
        if (!login.value || !password.value) {
        popup.classList.remove('modal__error');
        //popup.offsetWidth = popup.offsetWidth;
        console.log('Нужно ввести имя и электронную почту');
        popup.classList.add('modal__error');
        event.preventDefault();
    } else {
        localStorage.setItem('login', login.value);
        localStorage.setItem('mail', password.value);
    }
});

// закрытие на esc
window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains('modal__show')) {
            popup.classList.remove('modal__show');
            popup.classList.remove('modal__error');
            shadow.classList.remove('modal__overlay-shadow');
        }
    }
});


// закрытие при нажатии на тень
shadow.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove('modal__show');
    popup.classList.remove('modal__error');
    shadow.classList.remove('modal__overlay-shadow');
});
