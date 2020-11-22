(function () {
    // Variables
    let profilesPage = document.querySelector('.main__profiles');
    let settingsPage = document.querySelector('.main__settings');
    let backButton = settingsPage.querySelector('.back__button');

    
    // Functions
    const onBackButtonClick = function (evt) {
        profilesPage.classList.remove('dn');
        settingsPage.classList.add('dn');
        document.title = 'Cactus Web';
    };

    backButton.addEventListener('click', onBackButtonClick);




})();