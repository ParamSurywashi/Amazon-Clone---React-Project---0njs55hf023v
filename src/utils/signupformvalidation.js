const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 

function isEmailAddress(str) {

    return str.match(pattern);    

}

const signUpFormValidation = (formData) => {

    const error = {}
    const fields = ['nameSignUp','emailormobileSignUp','passwordSignUp']
    fields.forEach(field=>{
        if(!formData[`${field}`]){
            if(field==='nameSignUp'){
                error[[field]] = `Name not present`
            }else if(field==='emailormobileSignUp'){
                error[[field]] = `Email Id or mobile number not present`
            }else if(field==='passwordSignUp'){
                error[[field]] = `Password not present`
            }
        }
    })
    if(formData.nameSignUp && (formData.nameSignUp.length < 3 || formData.nameSignUp.length > 20)){
        error['nameSignUp'] = 'Name should be atleast 4 chars and less than 20 chars'
    }
    if(formData.passwordSignUp === formData.conformPasswordSignUp){
    if(formData.password && (formData.password.length < 6  || formData.password.length > 30)){
        error['passwordSignUp'] = 'Password should be atleast 6 chars and less than 30 chars'
    }
     }else{
        error['passwordSignUp'] = 'Password and Conform Password not same'
     }
    if(formData.emailormobileSignUp && isEmailAddress(formData.emailormobileSignUp) === null){
        error['emailormobileSignUp'] = 'Not a valid email'
    }
    if(Object.keys(error).length === 0) return null
    return error
}

export { signUpFormValidation }