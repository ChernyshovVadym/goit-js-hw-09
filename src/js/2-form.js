const form = document.querySelector(`.feedback-form`)
form.addEventListener("input", (e) => {
    const newForm = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(newForm));
    // console.log(newForm);
});
function formInit() {
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));
    // console.log(data);
    if (data === null) {
        return
    }
    form.email.value = data.email
    form.message.value = data.message
}
formInit()

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const newForm = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    }
    if (newForm.email && newForm.message) {
        console.log(newForm);
        localStorage.removeItem("feedback-form-state");
        form.reset();
        // emailInnit.value = "";
        // messageInnit.value = "";
    } else {
        alert("All form fields must be filled in");
    }
}




