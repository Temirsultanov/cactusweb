(function () {
    // Variables
    let profilesWrap = document.querySelector('.profiles');
    let templateProfile = document.querySelector('#template__profile').content.querySelector('.profiles__item');
    let profiles = [
        {
            name: 'Serpok2',
            person : {
                name: 'Serg',
                surname: 'Pokrovskoy',
                otch: 'Dmitrievich',
                email: 'serpok@gmail.com',  
            },
            address : {
                first : 'Ermoshkina Street 12',
                second: 'Aivazovskogo Street 10',
                city: 'Chicago',
                district: 'Illinois',
                country: 'USA',
                zip: '425235',
            },
            pay : {
                number: '2424463864969483',
                date: '0524',
                cvc: '213',
            }   
        },
        {
            name: 'Clown_Billie',
            person : {
                name: 'Bill',
                surname: 'Alexandrov',
                otch: 'Kikimorovich',
                email: 'fl0wk1k_i4@gmail.com',  
            },
            address : {
                first : 'Zelenskaya Street 4b',
                second: 'Prigorodnaya Street 2',
                city: 'Torzhok',
                district: 'New Jersey',
                country: 'Poland',
                zip: '635924',
            },
            pay : {
                number: '4848968294052950',
                date: '0231',
                cvc: '567',
            }   
        },
    ]
    window.profiles = profiles;
    window.profilesWrap = profilesWrap;
    window.templateProfile = templateProfile;
    for (let i = 0; i < profiles.length; i++) {
        let profileItem = templateProfile.cloneNode(true);
        let profileName = profileItem.querySelector('.profile__name');
        profileName.textContent = profiles[i].name;
        profilesWrap.appendChild(profileItem);
    }
    
    // Functions
    

})();