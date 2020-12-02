(function(){
    // Поставить лейбл вверх, если инпут не пустой
    let inputs = document.querySelectorAll('.form__input');
    let onChangeInputAddListener = function (input) {
        let onChangeInput = function (evt) {
            evt.preventDefault();
            if (input.value) {
                input.classList.add('form__input-filled');
            }
            else{
                input.classList.remove('form__input-filled');
            }
        }
        input.addEventListener('input', onChangeInput);
    }
    for (let i = 0; i < inputs.length; i++) {
        onChangeInputAddListener(inputs[i]);
    }
    // Инпут номера карты
    let cardInputs = document.querySelectorAll('.form__input-number');
    let onCardInputAddListener = function (input) {
        let len = input.value.length;
        let onCardInput = function (evt) {
            evt.preventDefault();
            if (input.value.length >= len) {
                for (let c = 0; c < input.value.length; c++) {
                    let cur = input.value[c];
                    if (c != 4 && c != 5 && c != 10 && c != 11 && c != 16 && c != 17) {
                        if (((cur === ' ') || !(cur * 1 > 0)) && (cur !== '0')) {
                            input.value = input.value.slice(0, c);
                        }
                    }
                    else if (cur !== ' '){
                        input.value = input.value.slice(0, c) + ' ' + input.value.slice(c, input.value.length); 
                    }
                };
                if (input.value.length > 22) {
                    input.value = input.value.slice(0, 22); 
                }
                if  (input.value.length > 21) {
                    document.querySelector('.main__createprofile').querySelector('.form__input-date').focus();
                }
                if (input.value.length == 4 || input.value.length == 10 || input.value.length == 16) {
                    input.value+= '  ';
                }
            }
            else{
                let cl = input.value.length;
                if (cl === 6 || cl === 12 || cl === 18) {
                    input.value = input.value.slice(0, cl-2);
                }
            }
            len = input.value.length;
        }
        let onCardInputChange = function (evt) {
            len = input.value.length;
        }
        let onCardFocus = function (evt) {
            evt.preventDefault();
            len = input.value.length;
        }
        input.addEventListener('change', onCardInputChange);
        input.addEventListener('input', onCardInput);
        input.addEventListener('focus', onCardFocus);
    }
    for (let j = 0; j < cardInputs.length; j++) {
        onCardInputAddListener(cardInputs[j])
    }
    // Инпут даты
    let dateInputs = document.querySelectorAll('.form__input-date');
    let onDateInputAddListener = function (input) {
        let len = input.value.length;
        let onDateInput = function (evt) {
            evt.preventDefault();
            let onDatePaste = function (evt) {
                len = 0;
                let paste = evt.clipboardData.getData('text');
                paste = paste.slice(0, 2) + ' / ' + paste.slice(2, 4);
                input.value = paste;
            }
            input.addEventListener('paste', onDatePaste);
            if (input.value.length >= len) {
                if (input.value.length > 7) {
                    input.value = input.value.slice(0, 7);
                }
                if (input.value.length > 6) {
                    document.querySelector('.main__createprofile').querySelector('.form__input-cvc').focus();
                }
                if (input.value.length === 2) {
                    input.value+= ' / ';
                }
                for (let c = 0; c < input.value.length; c++) {
                    let cur = input.value[c];
                    if (c != 2 && c != 3 && c != 4) {
                        if (!(cur * 1 > 0) && (cur !== '0')){
                            input.value = input.value.slice(0, c);
                        }
                    }
                    else if (input.value.length == 3) {
                        if (!(cur * 1 > 0) && (cur !== '0')){
                            input.value = input.value.slice(0,c);
                        }
                        else{
                            input.value = input.value.slice(0, c) + ' / ' + input.value.slice(c, input.value.length); 
                        }
                    }
                    else if (input.value.length == 4) {
                        if (!(cur * 1 > 0) && (cur !== '0')){
                            input.value = input.value.slice(0,c);
                        }
                        else{
                            input.value = input.value.slice(0, c) + ' / ' + input.value.slice(c, input.value.length); 
                        }
                    }
                }
            }
            else{
                let cl = input.value.length;
                if (cl === 5) {
                    input.value = input.value.slice(0, cl-3);
                }
                if (cl === 4) {
                    input.value = input.value.slice(0, cl-3);
                }
            }
            len = input.value.length;
        }
        let onDatePaste = function (evt) {
            let paste = evt.clipboardData.getData('text');
            console.log(paste);
            paste = paste.slice(0, 2) + ' / ' + paste.slice(2, 4);
            input.value = paste;
        }
        let onDateInputChange = function (evt) {
            len = input.value.length;
        }
        let onDateFocus = function (evt) {
            evt.preventDefault();
            len = input.value.length;
        }
        input.addEventListener('change', onDateInputChange);
        input.addEventListener('input', onDateInput);
        input.addEventListener('focus', onDateFocus);
    }
    // Инпут CVC
    let cvcInputs = document.querySelectorAll('.form__input-cvc');
    let onCvcInputAddListener = function (input) {
        let onCvcInputChange = function (evt) {
            evt.preventDefault();
            for (let c = 0; c < input.value.length; c++) {
                let cur = input.value[c];
                if (!(cur * 1 > 0) && (cur !== '0')){
                    input.value = input.value.slice(0, c);
                }
            }
            if (input.value.length > 2) {
                document.querySelector('.main__createprofile').querySelector('.form__input-name').focus();
            }
        }
        input.addEventListener('input', onCvcInputChange);
    }
    for (let p = 0; p < cvcInputs.length; p++) {
        onCvcInputAddListener(cvcInputs[p]);
    }
    for (let v = 0; v < dateInputs.length; v++) {
        onDateInputAddListener(dateInputs[v]);
    }

})();