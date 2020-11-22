(function () {
    // Variables
    let profilesPage = document.querySelector('.main__profiles');
    let createProfilePage = document.querySelector('.main__createprofile');
    let changeProfilePage = document.querySelector('.main__changeprofile');
    let settingsPage = document.querySelector('.main__settings');
    let profilesBlocks = window.profilesWrap.querySelectorAll('.profiles__item');
    let settingsButton = profilesPage.querySelector('.settings__button');
    let createProfileButton = profilesPage.querySelector('.create__profile');
    window.profileIndex = 0;

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
    const onPlayButtonAddListener = function (profile, index) {
        let profileName = profile.querySelector('.profile__name').textContent;
        let playButton = profile.querySelector('.button__change');
        const onPlayButtonClick = function (evt) {
            evt.preventDefault();
            profilesPage.classList.add('dn');
            window.createChangePage(changeProfilePage, index);
            window.profileIndex = index;
            changeProfilePage.classList.remove('dn');
            document.title = `${profileName} - Cactus Web`;
        };
        playButton.addEventListener('click', onPlayButtonClick);
    };
    window.onPlayButtonAddListener = onPlayButtonAddListener;

    
    for (let i = 0; i < profilesBlocks.length; i++) {
        onPlayButtonAddListener(profilesBlocks[i], i);
    };
    settingsButton.addEventListener('click', onSettingsButtonClick);
    createProfileButton.addEventListener('click', onCreateProfileButtonClick);



})();