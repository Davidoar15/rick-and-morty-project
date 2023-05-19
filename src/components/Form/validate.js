export default function validateForm(email, password) {
    let errors = {};

    if (!email){
        errors.email = "E-mail address is required";
    } else if (!isValidEmail(email)){
        errors.email = "Enter a valid E-mail";
    } else if (email.length > 35){
        errors.email = "The limit of characters for E-mail is 35"
    };

    if (!password){
        errors.password = "Password is required";
    } else if (password.length < 6 || password.length > 10){
        errors.password = "Password must be 6-10 characters";
    }

    return errors;
};

function isValidEmail(email) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
     return regexEmail.test(email);
}