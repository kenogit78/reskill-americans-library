
//get all input fields
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const user = document.getElementById("user")
const email = document.getElementById("email")
const password = document.getElementById("password")
const bio = document.getElementById("bio")

//initiate data model
let data = [];
data = JSON.parse(localStorage.getItem("account")) || [];


//add event listener to form
const form = document.getElementById("form")

form.addEventListener("submit", (event)=> {
    event.preventDefault()

    //create an account instance
    const userAccount = new Account(
        firstName.value,
        lastName.value,
        user.value,
        email.value,
        password.value,
        bio.value,
    )

    //check if account exist
    const emailCheck = userAccount.doesAccountExist(userAccount.email) 

    if(emailCheck){
        alert("Account already exist!!!");
        throw new Error("Account already exist!!!")
    }else{
        data.push(userAccount);
        localStorage.setItem("account", JSON.stringify(data))
    }

})

//get all accounts
const account = document.getElementById("account")
function getAllAccount(){
    let value = ""
     data.map((item) => {
     value += `
        <div class="card">
            <p> Name: ${item?.firstName} ${item?.lastName}</p>
            <p>Email: ${item?.email}  </p>
            <p>Username: ${item?.email}</p>
            <p>Bio: ${item?.bio}</p>
        </div>
        `
    })
    account.innerHTML = value
}

getAllAccount()

class Account {
    constructor(firstName, lastName, user, email, password, bio ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.user = user;
        this.email = email;
        this.password = password;
        this.bio = bio;
    }

    doesAccountExist(email){
        if(!data) return
        const check = data.find(value => value.email === email)
        return check
    }

    getAllAccount(){
        return data
    }
}