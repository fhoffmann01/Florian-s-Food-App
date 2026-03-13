const inputForm = document.getElementById("input-form")

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputFormData = new FormData(inputForm)
    const formObj = Object.fromEntries(inputFormData)

    console.log(formObj["name"])
    console.log(formObj["amount"])
})

