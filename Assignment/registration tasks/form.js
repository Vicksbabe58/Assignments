alert("welcome");
function validateForm(event) {
  event.preventDefault();
  let input = document.querySelector("#formUser");
  let firstName = document.querySelector(".firstname");
  let lastName = document.querySelector(".lastname");
  let email = document.querySelector(".email");
  let phone = document.querySelector(".phone");
  let gender = document.querySelector(".gender");
  let birth = document.querySelector(".birth");
  if (firstName.value === "" || firstName.value === null) {
    alert(`Please Fill All Required Field`);
    return false;
  } else if (lastName.value === "" || lastName.value === null) {
    alert(`Please Fill All Required Field`);
    return false;
  } else if (email.value === "" || email.value === null) {
    alert(`Please Fill All Required Field`);
    return false;
  } else if (phone.value === "" || phone.value === null) {
    alert(`Please Fill All Required Field`);
    return false;
  } else if (gender.value === "" || gender.value === null) {
    alert(`Please Fill All Required Field`);
    return false;
  } else if (birth.value === "" || birth.value === null) {
    alert(`Please Fill All Required Field`);
    return false;
  } else {
    alert(`WELCOME ${firstName} ${lastName}`);
    return true;
  }
}
let form = document.querySelector("#btn");
form.addEventListener("click", validateForm);
