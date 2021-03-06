const emailValidation = (email:string):boolean => {
    const emailRegExp = /^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        
    if(emailRegExp.test(email)) return true;
    else return false;
}

export default emailValidation;