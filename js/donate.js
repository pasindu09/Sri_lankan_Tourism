let Payment=document.getElementsByClassName("payment")
let Firstname=document.getElementById("fnam")
let Lastname=document.getElementById("lnam")
let Emailadd=document.getElementById("emailadd")
let form = document.getElementById("dntform")
let donation = document.getElementById("donation")

let fname = Firstname.value
let lname = Lastname.value
let dntamount;


form.addEventListener("submit",function(event){

    event.preventDefault();
    let fname = Firstname.value
    let lname = Lastname.value
    dntamount = donation.options[donation.selectedIndex].value
    alert(`Thank you ${fname} ${lname}, you have donated ${dntamount}`)

})

