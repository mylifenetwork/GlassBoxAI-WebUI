export default  function validateUserInput({
  name,
  phoneNumber,
  email,
  password,
  role,
}) {
  if (
    name === "" ||
    phoneNumber === "" ||
    phoneNumber.length < 6 ||
    email === "" ||
    !email.includes("@") ||
    // password === "" ||
    // vehicleLicense.length > 6 ||
    role === ""
  ) {
    return false;
  }else {
    return true;
  }
}
