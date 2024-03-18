let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let aadhar = document.getElementById("aadhar");
let pan = document.getElementById("pan");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(){
    console.log("Button clicked");
    if(email.value.indexOf("@") === -1) {
        alert("Please include '@' in the email address.");
        return;
    }
});
