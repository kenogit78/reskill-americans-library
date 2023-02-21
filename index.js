const form = document.querySelector("[data-form]");

//grab all input fields
const firstName = document.getElementById("first-name").value;
const lastName = document.getElementById("last-name").value;
const user = document.getElementById("user").value;
const password = document.getElementById("password").value;
const bio = document.getElementById("bio").value;

console.log(firstName)

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const account = new Account(firstName, lastName, user, password, bio )

    console.log(account)
})

//OOP
class Account {
    constructor(firstName, lastName, user, password, bio ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.user = user;
        this.password = password;
        this.bio = bio;
    }
}