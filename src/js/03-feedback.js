const formRef = document.querySelector(".feedback-form");
const inputRef = document.querySelector("input");
const messRef = document.querySelector("textarea");
window.addEventListener("load", () => {
    const startData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (startData) {
        inputRef.value = `${startData.email}`;
        messRef.value = `${startData.message}`;
    }
})

formRef.addEventListener("input", () => {
    const data = {
        email: inputRef.value,
        message: messRef.value,
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(data));
});

formRef.addEventListener("submit", (event) => {
    event.preventDefault();

    formRef.reset();
    console.log(localStorage.getItem("feedback-form-state"));
}
);
