(function () {
    // Variables
    let profilesPage = document.querySelector('.main__profiles');
    let changeProfilePage = document.querySelector('.main__changeprofile');
    let backButton = changeProfilePage.querySelector('.back__button');
    let saveButton = changeProfilePage.querySelector('.save__button');


    // Inputs
    let inputName = changeProfilePage.querySelector('#name');
    let inputSurname = changeProfilePage.querySelector('#surname');
    let inputOtch = changeProfilePage.querySelector('#otch');
    let inputEmail = changeProfilePage.querySelector('#email');
    let inputFirst = changeProfilePage.querySelector('#first');
    let inputSecond = changeProfilePage.querySelector('#second');
    let inputCity = changeProfilePage.querySelector('#city');
    let inputZip = changeProfilePage.querySelector('#zip');
    let inputCountry = changeProfilePage.querySelector('#country');
    let inputDistrict = changeProfilePage.querySelector('#district');
    let inputNumber = changeProfilePage.querySelector('#number');
    let inputDate = changeProfilePage.querySelector('#date');
    let inputCvc = changeProfilePage.querySelector('#cvc');
    let inputProfileName = changeProfilePage.querySelector('#profilename');
    
    // Functions
    const onBackButtonClick = function (evt) {
        profilesPage.classList.remove('dn');
        changeProfilePage.classList.add('dn');
        document.title = 'Cactus Web';
    };
    const onSaveButtonClick = function (evt) {
        evt.preventDefault();
        profiles[window.profileIndex] = {
            name: inputProfileName.value,
            person : {
                name: inputName.value,
                surname: inputSurname.value,
                otch: inputOtch.value,
                email: inputEmail.value,  
            },
            address : {
                first : inputFirst.value,
                second: inputSecond.value,
                city: inputCity.value,
                district: inputDistrict.value,
                country: inputCountry.value,
                zip: inputZip.value,
            },
            pay : {
                number: inputNumber.value,
                date: inputDate.value,
                cvc: inputCvc.value,
            } 
        }
        window.resetInputs(changeProfilePage);
        profilesPage.querySelectorAll('.profiles__item')[window.profileIndex]
                    .querySelector('.profile__name')
                    .textContent = window.profiles[window.profileIndex].name;
        profilesPage.classList.remove('dn');
        changeProfilePage.classList.add('dn');
    };
    saveButton.addEventListener('click', onSaveButtonClick);
    backButton.addEventListener('click', onBackButtonClick);




})();