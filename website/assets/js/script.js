// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Contact form -> Formspree AJAX submit
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const action = form.getAttribute("action");
      const submitBtn = form.querySelector("button[type=submit]");

      if (!action || action.includes("YOUR_FORM_ID")) {
        status.textContent =
          "Form isn't connected yet — replace YOUR_FORM_ID in contact.html with your Formspree endpoint. See setup-instructions.md.";
        status.className = "form-status error";
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      try {
        const response = await fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          form.reset();
          status.textContent = "Message sent — thanks for reaching out. I'll follow up shortly.";
          status.className = "form-status success";
        } else {
          status.textContent = "Something went wrong sending your message. Please try emailing directly instead.";
          status.className = "form-status error";
        }
      } catch (err) {
        status.textContent = "Network error — please try again or use the email link below.";
        status.className = "form-status error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send message";
      }
    });
  }
});
