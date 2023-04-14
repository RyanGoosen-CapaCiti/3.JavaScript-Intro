function ValidationEvent() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var emailReg = /^([w-.]+@([w-]+.){2,4})?$/;

    if (name != '' &&  email != '' && contact != ''){
        if (email.match(emailReg)) {
            if (document.getElementById("male").checked || document.getElementById("female").checked){
                if (contact.length == 10) {
                    alert("All type of validation has done on OnSubmit event.")
                    return true;}
                else {alert("The contact No. must be aleast 10 digits long!");
                    return false;}         
                }
            else {alert("You must select a sex ....!");
                return false;}
            }
        else {
            alert("Invalid Email Address ....!");
            return false;
        } 
        }
        else {
            alert("All fields are required.....!");
            return false;
        }
    }
