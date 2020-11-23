(function () {
    // Variables
    let profilesPage = document.querySelector('.main__profiles');
    let createProfilePage = document.querySelector('.main__createprofile');
    let changeProfilePage = document.querySelector('.main__changeprofile');
    let settingsPage = document.querySelector('.main__settings');
    let profilesBlocks = window.profilesWrap.querySelectorAll('.profiles__item');
    let settingsButton = profilesPage.querySelector('.settings__button');
    let createProfileButton = profilesPage.querySelector('.create__profile');

    // Functions
    const onSettingsButtonClick = function (evt) {
        profilesPage.classList.add('dn');
        settingsPage.classList.remove('dn');
        document.title = 'Settings - Cactus Web';
    };
    const onCreateProfileButtonClick = function (evt) {
        profilesPage.classList.add('dn');
        createProfilePage.classList.remove('dn');
        document.title = 'Create profile - Cactus Web';
    };
    const onChangeButtonAddListener = function (profile) {
        let profileName = profile.querySelector('.profile__name').textContent;
        let changeButton = profile.querySelector('.button__change');
        const onChangeButtonClick = function (evt) {
            evt.preventDefault();
            let profilesBlocks = window.profilesWrap.querySelectorAll('.profiles__item');
            for (let i = 0; i < window.profiles.length; i++) {
                if (profile == profilesBlocks[i]) {
                    index = i;
                }
            }
            window.createChangePage(changeProfilePage, profile);
            window.profileIndex = index;
            profilesPage.classList.add('dn');
            changeProfilePage.classList.remove('dn');
            document.title = `${profileName} - Cactus Web`;
        };
        changeButton.addEventListener('click', onChangeButtonClick);
    };
    const onPlayButtonAddListener = function (profile) {
        let playButton = profile.querySelector('.button__union');
        const onPlayButtonClick = function (evt) {
            evt.preventDefault();
            let profilesBlocks = window.profilesWrap.querySelectorAll('.profiles__item');
            for (let i = 0; i < window.profiles.length; i++) {
                if (profile == profilesBlocks[i]) {
                    profile.classList.toggle('profiles__item-active');
                }
                else{
                    profilesBlocks[i].classList.remove('profiles__item-active');
                }
            };
        }
        playButton.addEventListener('click', onPlayButtonClick);
    }
    const onDeleteButtonAddListener = function (profile) {
        let deleteButton = profile.querySelector('.button__delete');
        const onDeleteButtonClick = function (evt) {
            evt.preventDefault();
            let profilesBlocks = window.profilesWrap.querySelectorAll('.profiles__item');
            for (let i = 0; i < window.profiles.length; i++) {
                if (profile == profilesBlocks[i]) {
                    index = i;
                }
            }
            window.profiles.splice(index, 1);
            window.profilesWrap.removeChild(profile); 
        }
        deleteButton.addEventListener('click', onDeleteButtonClick);
    };
    window.profileIndex = 0;
    window.onDeleteButtonAddListener = onDeleteButtonAddListener;
    window.onChangeButtonAddListener = onChangeButtonAddListener;
    window.onPlayButtonAddListener = onPlayButtonAddListener;
    

    for (let i = 0; i < profilesBlocks.length; i++) {
        onChangeButtonAddListener(profilesBlocks[i]);
    };
    for (let j = 0; j < profilesBlocks.length; j++) {
        onPlayButtonAddListener(profilesBlocks[j]);
    };
    for (let k = 0; k < profilesBlocks.length; k++) {
        onDeleteButtonAddListener(profilesBlocks[k]);
    };
    settingsButton.addEventListener('click', onSettingsButtonClick);
    createProfileButton.addEventListener('click', onCreateProfileButtonClick);



})();