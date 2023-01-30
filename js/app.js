// var
const form = document.getElementById("form")
const submit = document.getElementById("submit")
const email = document.getElementById("email")
const errorMsg = document.querySelector(".error-text")
// form submit event
form.addEventListener("submit", function (e) {
  e.preventDefault()
  const emailValue = email.value
  if (!emailValue || validateEmail(emailValue)) {
    email.style.borderColor = "red"
    errorMsg.classList.add("error-text-active")
    submit.classList.add("error-btn")
  } else {
    email.style.borderColor = "hsl(223, 100%, 88%)"
    errorMsg.classList.remove("error-text-active")
    submit.classList.remove("error-btn")
  }
})
// valid email checker
function validateEmail(inputText) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (inputText.match(mailformat)) {
    return false
  }
  return true
}
