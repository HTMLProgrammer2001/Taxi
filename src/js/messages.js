let timer = null,
    message = document.querySelector('#message-window');

function onMessage(){
    message.classList.remove('show');
    message.classList.remove('hide');

    message.classList.remove('alert-success');
    message.classList.remove('alert-danger');

    if(timer)
        clearTimeout(timer);

    timer = setTimeout(() => {
        message.classList.add('hide');
    }, 5000);
}

export const showSuccessMessage = (content) => {
    onMessage();

    message.querySelector('.img').src = require('assets/success.png');
    message.querySelector('.text').textContent = content;

    message.classList.add('alert-success');
    message.classList.add('show');
};

export const showDangerMessage = (content) => {
    onMessage();

    message.querySelector('.img').src = require('assets/danger.png');
    message.querySelector('.text').textContent = content;

    message.classList.add('alert-danger');
    message.classList.add('show');
};