const form = document.getElementById("form");

//grab all input fields
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");
const bio = document.getElementById("bio");

let data =[]
data = JSON.parse(localStorage.getItem("user")) || []

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const account = new Account(firstName.value, lastName.value, user.value, password.value, bio.value )
   

    const checkResult = checkUser(account.email)
    console.log(checkResult)

    if(checkResult){
        alert("User already exist!!!")
        throw new Error("User already exist!!!")
    }else{
        data.push(account);
        localStorage.setItem("user", JSON.stringify(data))
        console.log(data)
    }


    //check if account exists ---->>>> get all account, find if account exist... push or throw an error

})

//check if user exist
const checkUser = (email) => {
    console.log(user)
    if(!data) return
    //find method
    const check = data.find(value => value.email === email)
    console.log(check)
   return check

    
}

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