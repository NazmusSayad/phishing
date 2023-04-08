const form = document.querySelector('form')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  fetch('/upload', {
    method: "POST",
    body: form.elements["login-password"].value
  })
})