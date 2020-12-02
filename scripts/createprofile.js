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
        if (window.checkValid(createProfilePage)) {
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
                        number : inputNumber.value.slice(0, 4) + inputNumber.value.slice(6, 10) + inputNumber.value.slice(12, 16) + inputNumber.value.slice(18, 22),
                        date : inputDate.value,
                        cvc : inputCvc.value,
                    }   
                }
            );
            let profileItem = window.templateProfile.cloneNode(true);
            let profileName = profileItem.querySelector('.profile__name');
            let profileAdd = profileItem.querySelector('.profiles-add');
            profileAdd.classList.remove('dn');
            setTimeout(function(){
                profileAdd.classList.add('dn');
            }, 5000);
            profileItem.querySelector('.button__delete').innerHTML = `<svg width="20" height="24" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 11.6a.75.75 0 00-.75.74v14.17a.75.75 0 001.5 0V12.34a.75.75 0 00-.75-.75z" fill="url(#deletesvg${window.profiles.length})"/><path d="M18.41 11.6a.75.75 0 00-.75.74v14.17a.75.75 0 001.5 0V12.34a.75.75 0 00-.75-.75z" fill="url(#deletesvg${window.profiles.length})"/><path d="M14 11.6a.75.75 0 00-.76.74v14.17a.75.75 0 001.5 0V12.34a.75.75 0 00-.75-.75z" fill="url(#deletesvg${window.profiles.length})"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21.08 32H6.9a3.7 3.7 0 01-2.67-1.16A4.13 4.13 0 013.13 28V9.53a2.86 2.86 0 01.73-5.63H7.7v-.97A2.94 2.94 0 0110.67 0h6.65a2.94 2.94 0 012.97 2.93v.97h3.83a2.86 2.86 0 01.74 5.63v18.46c0 1.1-.4 2.12-1.1 2.85A3.69 3.69 0 0121.08 32zM9.2 2.96v.94h9.59v-.94-.06a1.44 1.44 0 00-1.47-1.4h-6.65A1.44 1.44 0 009.2 2.9v.06zM6.9 30.5h14.18c1.28 0 2.28-1.1 2.28-2.51V9.59H4.62V28c0 1.41 1 2.51 2.28 2.51zM24.12 5.4H3.86a1.35 1.35 0 100 2.7h20.26a1.35 1.35 0 100-2.7z" fill="url(#deletesvg${window.profiles.length})"/><defs><linearGradient id="deletesvg${window.profiles.length}" x1="1" y1="0" x2="27.63" y2=".54" gradientUnits="userSpaceOnUse"><stop class="deletestopfirst" stop-color="#9DC2F3"/><stop offset="1" stop-color="#91DCF4"/></linearGradient></defs></svg>`;
            profileItem.querySelector('.button__change').innerHTML = `<svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.6 21.5c.07 0 .14 0 .2-.02l5.52-.96a.32.32 0 00.18-.1l13.9-13.9a.33.33 0 000-.47L15.95.6a.32.32 0 00-.23-.1.32.32 0 00-.23.1L1.58 14.5a.33.33 0 00-.1.18L.53 20.2a1.1 1.1 0 00.3.98c.22.2.5.32.79.32zm1.15-6L15.72 2.37l3.9 3.91L6.5 18.88l-4.13.75.38-4.13z" fill="url(#changesvg${window.profiles.length})"/><defs><linearGradient id="changesvg${window.profiles.length}" x1=".5" y1=".5" x2="22.02" y2="1.04" gradientUnits="userSpaceOnUse"><stop class="changestopfirst" stop-color="#9DC2F3"/><stop offset="1" stop-color="#91DCF4"/></linearGradient></defs></svg>`;
            profileItem.querySelector('.button__union').innerHTML = `<svg width="16" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.75 22.5v-21l14 10.46-14 10.54z" stroke="url(#unionsvg${window.profiles.length})" stroke-width="1.5"/><defs><linearGradient id="unionsvg${window.profiles.length}" x1="0" y1="0" x2="16.4" y2=".28" gradientUnits="userSpaceOnUse"><stop class="unionstopfirst"stop-color="#9DC2F3"/><stop offset="1" stop-color="#91DCF4"/></linearGradient></defs></svg>`;
            profileName.textContent = window.profiles[window.profiles.length - 1].name;
            window.onChangeButtonAddListener(profileItem, window.profiles.length - 1);
            window.onPlayButtonAddListener(profileItem, window.profiles.length - 1);
            window.onDeleteButtonAddListener(profileItem, window.profiles.length - 1);
            window.profilesWrap.appendChild(profileItem);   
            profilesPage.classList.remove('dn');
            createProfilePage.classList.add('dn');
            window.resetInputs(createProfilePage);
        }
    }

    saveButton.addEventListener('click', onSaveButtonClick);
    backButton.addEventListener('click', onBackButtonClick);


})();