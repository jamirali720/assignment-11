const validator = require('validator');

const validate = user => {
    let error = {};
    if(!user.name){
        error.name = 'Please Provide Your Name';
    }

    if(!user.email){
        error.email = 'Please Provide Your Email';
    }else if (!validator.isEmail(user.email)){
        error.email = 'Please Provide a Valid Email';
    }

     
    if(!user.password){
        error.password = 'Please Provide Your Password'
    }
    else if(user.password.length < 6){
        error.password = 'Your password  is too small , give strong password'
    }


    if (!user.confirmedPassword) {
        error.confirmedPassword = 'Please Provide Your ConfirmedPassword'
    }else if(user.password !== user.confirmedPassword){
        error.confirmedPassword = 'Password dosen\'t match'
    }

    return {
        error , 
        isValid : Object.keys(error).length === 0
    }

}

module.exports = validate;