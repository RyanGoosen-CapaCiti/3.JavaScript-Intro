function ValidateEmail (email) {
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.match(mailformat)){
    alert("This e-mail is valid");
}
else {
    alert("This e-mail is NOT valid");
}
}
