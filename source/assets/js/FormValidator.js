class FormValidator {
    constructor(form, successHendler = () => {}) {
        this.form = form;
        this.requiredInputs = form.querySelectorAll('.validator-required');
        this.emailInputs = form.querySelectorAll('input[type=email]');
        this.phoneInputs = form.querySelectorAll('input[type=tel]');
        this.button = form.querySelectorAll('[type=submit]');
        this.onSuccess = successHendler;

        console.log(this.requiredInputs);
        this.initEvents();
        this.initPohneInputs();
    }

    initEvents() {
        this.form.addEventListener("submit", this.formSubmitHandler.bind(this));
    }

    initPohneInputs() {
        this.phoneInputs.forEach((input) => {
            input.dataset.completed = false;
            $(input).mask('+(38) 000 000-0000', {
                onComplete: function(cep) {
                    input.dataset.completed = true;
                }
            });
        });
    }

    formSubmitHandler(event) {
        event.preventDefault();
        let valRes1 = this.validateAllRequired();
        let valRes2 = this.validateAllEmails();
        let valRes3 = this.validateAllPhones();
    
        if(valRes1 && valRes2 && valRes3) this.onSuccess();
    }

    validateAllRequired() {
        let validate = true;
        this.requiredInputs.forEach((input) => {
            if (!input.value) {
                input.classList.add("error");
                validate = false;
            } else {
                input.classList.remove("error");
            }
        });
        return validate;
    }

    validateAllPhones(){
        let validate = true;
        this.phoneInputs.forEach((input) => {
            if (input.dataset.completed === 'false') {
                input.classList.add("error");
                validate = false;
            } else {
                input.classList.remove("error");
            }
        });
        return validate;
    }

    validateAllEmails() {
        let validate = true;
        this.emailInputs.forEach((input) => {
            if (!FormValidator.validateEmail(input.value)) {
                input.classList.add("error");
                validate = false;
            } else {
                input.classList.remove("error");
            }
        });
        return validate;
    }

    static validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

export default FormValidator;