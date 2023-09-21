import throttle from "lodash.throttle";

const FEEDBACK_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.querySelector('input[name="email"]');
const messageInput = formEl.querySelector('textarea[name="message"]');

const renderStorage = throttle((email, message) => {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify({ email, message }))
}, 500);

const sanedEl = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
if (sanedEl) {
    emailInput.value = sanedEl.email;
    messageInput.value = sanedEl.message;
};

formEl.addEventListener("input", () => {
    renderStorage(emailInput.value, messageInput.value);
});

formEl.addEventListener("submit", (event) => {
    if (emailInput.value !== "" && messageInput.value !== "") {
        event.preventDefault();
        console.log(sanedEl);
        localStorage.removeItem(FEEDBACK_KEY);
        emailInput.value = "";
        messageInput.value = "";
    }
});






