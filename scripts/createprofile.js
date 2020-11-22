(function () {
    // Variables
    let profilesPage = document.querySelector('.main__profiles');
    let createProfilePage = document.querySelector('.main__createprofile');
    let backButton = createProfilePage.querySelector('.back__button');
    let saveButton = createProfilePage.querySelector('.save__button');

    // Inputs
    let inputName = createProfilePage.querySelector('#name');
    let inputSurname = createProfilePage.querySelector('#surname');
    let inputOtch = createProfilePage.querySelector('#otch');
    let inputEmail = createProfilePage.querySelector('#email');
    let inputFirst = createProfilePage.querySelector('#first');
    let inputSecond = createProfilePage.querySelector('#second');
    let inputCity = createProfilePage.querySelector('#city');
    let inputZip = createProfilePage.querySelector('#zip');
    let inputCountry = createProfilePage.querySelector('#country');
    let inputDistrict = createProfilePage.querySelector('#district');
    let inputNumber = createProfilePage.querySelector('#number');
    let inputDate = createProfilePage.querySelector('#date');
    let inputCvc = createProfilePage.querySelector('#cvc');
    let inputProfileName = createProfilePage.querySelector('#profilename');

    // Functions
    const onBackButtonClick = function (evt) {
        evt.preventDefault();
        profilesPage.classList.remove('dn');
        createProfilePage.classList.add('dn');
        document.title = 'Cactus Web';
    };
    const onSaveButtonClick = function (evt) {
        evt.preventDefault();
        window.profiles.push(
            {
                name : inputProfileName.value,
                person : {
                    name : inputName.value,
                    surname : inputSurname.value,
                    otch : inputOtch.value,
                    email : inputEmail.value,  
                },
                address : {
                    first : inputFirst.value,
                    second : inputSecond.value,
                    city : inputCity.value,
                    district : inputDistrict.value,
                    country : inputCountry.value,
                    zip : inputZip.value,
                },
                pay : {
                    number : inputNumber.value,
                    date : inputDate.value,
                    cvc : inputCvc.value,
                }   
            }
        );
                
        let profileItem = window.templateProfile.cloneNode(true);
        let profileName = profileItem.querySelector('.profile__name');
        profileName.textContent = window.profiles[window.profiles.length - 1].name;
        window.onPlayButtonAddListener(profileItem, window.profiles.length - 1);
        window.profilesWrap.appendChild(profileItem);
        window.resetInputs(createProfilePage);
        profilesPage.classList.remove('dn');
        createProfilePage.classList.add('dn');
    }

    saveButton.addEventListener('click', onSaveButtonClick);
    backButton.addEventListener('click', onBackButtonClick);


})();