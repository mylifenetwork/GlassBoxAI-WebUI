export default  function validateUserInput({
  name,
  phoneNumber,
  email,
  vehicleLicense,
  role,
}) {
  if (
    name === "" ||
    phoneNumber === "" ||
    phoneNumber.length < 6 ||
    email === "" ||
    !email.includes("@") ||
    vehicleLicense === "" ||
    vehicleLicense > 6 ||
    role === ""
  ) {
    return false; 
  }else {
    return true;
  }
}
