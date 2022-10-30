const $ = document.querySelector.bind(document)
const $$ = document.querySelector.bind(document)

// doi tuong
function Validator(options) {
    // ham lay the cha
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }

    }

    var selectorRules = {};

    // ham thuc vien validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // lay ra cac pt cua selector
        var rules = selectorRules[rule.selector]
        console.log("TCL: validate -> rules", rules.length)


        // neu cop loi thi dung kiem tra
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }





        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        } else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }
        return !errorMessage
    }
    // lay element cua form can validate
    var formElement = document.querySelector(options.form)
    if (formElement) {
        // xu ly khu submit form
        formElement.onsubmit = function(e) {
                e.preventDefault();

                var isFormValid = true;
                // thuc hien lap qua tung rules vaf lalidate
                options.rules.forEach(function(rule) {

                    var inputElement = formElement.querySelector(rule.selector)



                    var isValid = validate(inputElement, rule);
                    if (!isValid) {
                        isFormValid = false;
                    }
                });

                if (isFormValid) {
                    // submit voi js
                    if (typeof options.onsubmit === 'function') {
                        var enableInputs = formElement.querySelectorAll('[name]')
                        var formValues = Array.from(enableInputs).reduce(function(values, input) {
                            switch (input.type) {
                                case 'radio':
                                    values[input.name] = formElement.querySelector('[name="' + input.name + '"]:checked').value
                                    break;
                                case 'checbox':
                                    if (input.matches(':checked')) {
                                        values[input.name] = [];
                                        return values;
                                    }
                                    if (!Array.isArray(values[input.name])) {
                                        values[input.name] = [];

                                    }
                                    values[input.name].push(input.value)
                                    break;
                                case 'file':
                                    values[input.name] = inputElement.files;
                                    break;

                                default:
                                    values[input.name] = input.value

                            }
                            return values
                        }, {});

                        options.onsubmit(formValues)
                    }
                    // th submit voi hanh vi mac dinh
                } else {
                    formElement.onsubmit();
                }




            }
            // xu ly moi rules va xu ly (lang nghe sk blue)
        options.rules.forEach(function(rule) {
            // luu lai cac rule cho moi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]

            }

            var inputElements = formElement.querySelectorAll(rule.selector)
            Array.from(inputElements).forEach(function(inputElement) {

                // xu ly th blur ra khoi input
                inputElement.onblur = function() {
                        validate(inputElement, rule);
                    }
                    // xu ly moi khi nhap input
                inputElement.oninput = () => {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message')
                    errorElement.innerText = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')

                }

            })

        });

    }
}
//  dinh nghia cac rules
// nguyen tac cua cac rules
// 1.khi co loi thi tra ra message loi
// 2.khi hop le tra ve undefined
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message || 'vui long nhap truong nay'
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'truong nay fai la email'

        }
    }
}
Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `vui long nhap toi thieu ${min} ky tu`
        }
    }
}
Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Nhap lai khong dung'
        }
    }
}