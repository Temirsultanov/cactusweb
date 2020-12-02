(function(){
    let resetInputs = function (container) {
        inputs = container.querySelectorAll('.form__input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
            inputs[i].classList.remove('form__input-filled');
        }
    };
    let indexOfProfile = function (profile) {
        let index;
        let profilesBlocks = window.profilesWrap.querySelectorAll('.profiles__item');
        for (let i = 0; i < window.profiles.length; i++) {
            if (profile == profilesBlocks[i]) {
                index = i;
            }
        }
        return index;
    }
    let createChangePage = function (page, profile) {
        let index = indexOfProfile(profile);
        page.querySelector('#name').value = window.profiles[index].person.name;
        page.querySelector('#surname').value = window.profiles[index].person.surname;
        page.querySelector('#otch').value = window.profiles[index].person.otch;
        page.querySelector('#email').value = window.profiles[index].person.email;
        page.querySelector('#first').value = window.profiles[index].address.first;
        page.querySelector('#second').value = window.profiles[index].address.second;
        page.querySelector('#city').value = window.profiles[index].address.city;
        page.querySelector('#zip').value = window.profiles[index].address.zip;
        page.querySelector('#country').value = window.profiles[index].address.country;
        page.querySelector('#district').value = window.profiles[index].address.district;
        let cardNumber = window.profiles[index].pay.number;
        page.querySelector('#number').value = cardNumber.slice(0, 4) + '  ' + cardNumber.slice(4, 8) + '  ' + cardNumber.slice(8, 12) + '  ' + cardNumber.slice(12, 16);
        page.querySelector('#date').value = window.profiles[index].pay.date;
        page.querySelector('#cvc').value = window.profiles[index].pay.cvc;
        page.querySelector('#profilename').value = window.profiles[index].name;
        page.querySelector('#name').classList.add('form__input-filled');
        page.querySelector('#surname').classList.add('form__input-filled');
        page.querySelector('#otch').classList.add('form__input-filled');
        page.querySelector('#email').classList.add('form__input-filled');
        page.querySelector('#first').classList.add('form__input-filled');
        page.querySelector('#second').classList.add('form__input-filled');
        page.querySelector('#city').classList.add('form__input-filled');
        page.querySelector('#zip').classList.add('form__input-filled');
        page.querySelector('#country').classList.add('form__input-filled');
        page.querySelector('#district').classList.add('form__input-filled');
        page.querySelector('#number').classList.add('form__input-filled');
        page.querySelector('#date').classList.add('form__input-filled');
        page.querySelector('#cvc').classList.add('form__input-filled');
        page.querySelector('#profilename').classList.add('form__input-filled');
    }
    const checkValid = function (page) {
        let valid1;
        let valid2;
        let valid3;
        let valid4;
        let inputName = page.querySelector('#name');
        let inputSurname = page.querySelector('#surname');
        let inputOtch = page.querySelector('#otch');
        let inputEmail = page.querySelector('#email');
        let inputFirst = page.querySelector('#first');
        let inputSecond = page.querySelector('#second');
        let inputCity = page.querySelector('#city');
        let inputZip = page.querySelector('#zip');
        let inputCountry = page.querySelector('#country');
        let inputDistrict = page.querySelector('#district');
        let inputNumber = page.querySelector('#number');
        let inputDate = page.querySelector('#date');
        let inputCvc = page.querySelector('#cvc');
        let inputProfileName = page.querySelector('#profilename');
        if (inputCvc.value.length !== 3) {
            inputCvc.classList.add('invalid__form');
            inputCvc.classList.remove('valid__form');
            vali1 = false;
        }
        else{
            if (inputCvc.classList.contains('invalid__form')) {
                inputCvc.classList.remove('invalid__form');
                inputCvc.classList.add('valid__form');
            }
            valid1 = true;
        }
        if (inputNumber.value.length !== 22) {
            inputNumber.classList.add('invalid__form');
            inputNumber.classList.remove('valid__form');
            valid2 = false;
        }
        else{
            if (inputNumber.classList.contains('invalid__form')) {
                inputNumber.classList.remove('invalid__form');
                inputNumber.classList.add('valid__form');
            }
            valid2 = true;
        }
        if (inputDate.value.length !== 7) {
            inputDate.classList.add('invalid__form');
            inputDate.classList.remove('valid__form');
            valid4 = false;
        }
        else{
            if (inputDate.classList.contains('invalid__form')) {
                inputDate.classList.remove('invalid__form');
                inputDate.classList.add('valid__form');
            }
            valid4 = true;
        }
        let flag;
        let currentFlag = true;
            for (let i = 0; i < window.profiles.length; i++) {
                if (window.profiles[i].name == inputProfileName.value) {
                    currentFlag = false;
                }
            }
        flag = currentFlag;
        if (inputProfileName.value.length == 0 || !flag) {
            inputProfileName.classList.add('invalid__form');
            inputProfileName.classList.remove('valid__form');
            valid3 = false;
        }
        else{
            if (inputProfileName.classList.contains('invalid__form')) {
                inputProfileName.classList.remove('invalid__form');
                inputProfileName.classList.add('valid__form');
            }
            valid3 = true;
        }
        const profileNameInputValid = function (evt) {
            evt.preventDefault();
            let currentFlag = true;
            for (let i = 0; i < window.profiles.length; i++) {
                if (window.profiles[i].name == inputProfileName.value) {
                    currentFlag = false;
                }
            }
            flag = currentFlag;
            if (inputProfileName.value.length == 0 || !flag) {
                inputProfileName.classList.add('invalid__form');
                inputProfileName.classList.remove('valid__form');
                valid3 = false;
            }
            else{
                if (inputProfileName.classList.contains('invalid__form')) {
                    inputProfileName.classList.remove('invalid__form');
                    inputProfileName.classList.add('valid__form');
                }
                valid3 = true;
            }
        }
        const cvcInputValid = function (evt) {
            evt.preventDefault();
            if (inputCvc.value.length !== 3) {
                inputCvc.classList.add('invalid__form');
                inputCvc.classList.remove('valid__form');
                vali1 = false;
            }
            else{
                if (inputCvc.classList.contains('invalid__form')) {
                    inputCvc.classList.remove('invalid__form');
                    inputCvc.classList.add('valid__form');
                }
                valid1 = true;
            }
        }
        const numberInputValid = function (evt) {
            evt.preventDefault();
            if (inputNumber.value.length !== 22) {
                inputNumber.classList.add('invalid__form');
                inputNumber.classList.remove('valid__form');
                valid2 = false;
            }
            else{
                if (inputNumber.classList.contains('invalid__form')) {
                    inputNumber.classList.remove('invalid__form');
                    inputNumber.classList.add('valid__form');
                }
                valid2 = true;
            }
        }
        const dateInputValid = function (evt) {
            evt.preventDefault();
            if (inputDate.value.length !== 7) {
                inputDate.classList.add('invalid__form');
                inputDate.classList.remove('valid__form');
            }
            else{
                if (inputDate.classList.contains('invalid__form')) {
                    inputDate.classList.remove('invalid__form');
                    inputDate.classList.add('valid__form');
                }
            }
        }
        inputDate.addEventListener('input', dateInputValid);
        inputCvc.addEventListener('input', cvcInputValid);
        inputNumber.addEventListener('input', numberInputValid);
        inputProfileName.addEventListener('input', profileNameInputValid);
        if (valid1 && valid2 && valid3 && valid4){
            inputDate.removeEventListener('input', dateInputValid);
            inputCvc.removeEventListener('input', cvcInputValid);
            inputNumber.removeEventListener('input', numberInputValid);
            inputProfileName.removeEventListener('input', profileNameInputValid);
            inputDate.classList.remove('valid__form');
            inputCvc.classList.remove('valid__form');
            inputProfileName.classList.remove('valid__form');
            inputNumber.classList.remove('valid__form');
            return true;
        };
    }
    window.checkValid = checkValid;
    window.resetInputs = resetInputs;
    window.indexOfProfile = indexOfProfile;
    window.createChangePage = createChangePage;
})();