const formRef = document.querySelector(".feedback-form");
const inputRef = document.querySelector("input");
const messRef = document.querySelector("textarea");



formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email } = event.target.elements;
    const { message } = event.target.elements;
    const data = {
        email: email.value,
        message: message.value
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(data));
    formRef.reset();
    console.log(localStorage.getItem("feedback-form-state"));
    window.addEventListener("load", () => {
        const startData = JSON.parse(localStorage.getItem("feedback-form-state"));
        inputRef.value = `${startData.email}`;
        messRef.value = `${startData.message}`;
    })
}
);
