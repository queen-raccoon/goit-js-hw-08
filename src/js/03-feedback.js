import throttle from "lodash.throttle";

const FEEDBACK_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const emailInput = formEl.querySelector('input[name="email"]');
const messageInput = formEl.querySelector('textarea[name="message"]');


const renderStorage = throttle((email, message) => {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify({ email, message }))
}, 500);
formEl.addEventListener("input", () => {
    renderStorage(emailInput.value, messageInput.value);
}
);


const sanedEl = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
if (sanedEl) {
    const { email, message } = sanedEl;
    emailInput.value = email;
    messageInput.value = message;
};


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`email:${emailInput.value}    message:${messageInput.value}`);
    localStorage.removeItem(FEEDBACK_KEY);
    emailInput.value = "";
    messageInput.value = "";
});
 