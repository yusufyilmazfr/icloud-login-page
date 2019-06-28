const submit = document.getElementById('submit');
const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.forms.form;


getAllEvent();

function getAllEvent() {
    username.addEventListener('keypress', controlToInput);
    password.addEventListener('keypress', controlToInput);
    submit.addEventListener('click', controlToInput2);
}

function controlToInput(e) {
    if (e.key == 'Enter') {
        if (username.value == '' || password.value == '')
            return
        else
            form.submit();
    }
}

function controlToInput2() {
    if (username.value == '' || password.value == '')
        return
    else
        form.submit();
}

