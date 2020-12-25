
const user = [];
const form = document.querySelector(".fill");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("input_name");
    let email = document.getElementById("input_mail");
    let country = document.getElementById("country");

    let user = {
        name: name.value,
        email: email.value,
        country: country.value,
    };

    persons.push(user);
    console.log(user);
});
