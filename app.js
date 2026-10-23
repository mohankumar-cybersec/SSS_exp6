const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#form-status").textContent =
      "Demo complete. No information was sent or saved.";
    contactForm.reset();
  });
}
