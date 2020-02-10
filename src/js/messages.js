let timer = null,
    message = document.querySelector('#message-window'),
    success = require('assets/success.png'),
    danger = require('assets/danger.png');

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

    message.querySelector('.img').src = success;
    message.querySelector('.text').textContent = content;

    message.classList.add('alert-success');

    message.querySelector('.img').onload = () => {
        message.classList.add('show');
    };
};

export const showDangerMessage = (content) => {
    onMessage();

    message.querySelector('.img').src = danger;
    message.querySelector('.text').textContent = content;

    message.classList.add('alert-danger');

    message.querySelector('.img').onload = () => {
        message.classList.add('show');
    };
};