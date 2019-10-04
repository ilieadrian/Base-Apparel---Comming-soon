const inputs = document.querySelectorAll('input');
const pattern = {
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

function validate(field, regex) {

    if (regex.test(field.value)) {
        field.className = 'valid';
        document.getElementById('p__error').classList.remove('p__error__show');
        document.getElementById('form__id').classList.remove('form__error__show');

    } else {
        field.className = 'invalid';
        document.getElementById('btn').disabled = true;
        document.getElementById('p__error').classList.add('p__error__show');
        document.getElementById('form__id').classList.add('form__error__show');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(patterns[e.target.attributes.name.value]);
        validate(e.target, pattern[e.target.attributes.name.value]);
    });
});

validate();