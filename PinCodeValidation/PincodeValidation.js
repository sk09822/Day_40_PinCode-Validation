const pincodeRegex = RegExp("^[0-9]{6}$");

function validatePincode(pincode){
    if(pincodeRegex.test(pincode))
        console.log(pincode + " : Valid Pin Code !!");
    else
        throw pincode + " : PINCODE is Invalid !";
}

try{
    validatePincode("400088");
    validatePincode("A40000");
}
catch(e){
    console.error(e);
}