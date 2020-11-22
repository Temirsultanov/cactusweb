(function(){
    let resetInputs = function (container) {
        inputs = container.querySelectorAll('.form__input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    };
    let createChangePage = function (page, index) {
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
        page.querySelector('#number').value = window.profiles[index].pay.number;
        page.querySelector('#date').value = window.profiles[index].pay.date;
        page.querySelector('#cvc').value = window.profiles[index].pay.cvc;
        page.querySelector('#profilename').value = window.profiles[index].name;
    }
    window.resetInputs = resetInputs;
    window.createChangePage = createChangePage;
})();