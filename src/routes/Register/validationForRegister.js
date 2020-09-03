export default function validateForRegister(password, repeatPassword, email) {
    let errors = {};

    //Email
    if(!email) {
        errors.email = 'Email required';
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        errors.email = 'Invalid email address';
    }

    //Password
    if(!password){
        errors.password = 'Password required';
    } else if(password.length < 6){
        errors.password = 'Password need to be 6 characters or more';
    }

    //Repeat Password
    if(!repeatPassword){
        errors.repeatPassword = 'Password required';
    } else if(password !== repeatPassword){
        errors.repeatPassword = 'Passwords do not match';
    }

    return errors;
}