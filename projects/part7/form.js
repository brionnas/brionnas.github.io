// form.js
document.getElementById("contactForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseMessage = document.getElementById("responseMessage");

  if (name && email && message) {
    const formData = new FormData();

    // ✅ Web3Forms access key
    formData.append("access_key", "be2b2acf-4b64-4ed1-831f-c78b88df116d");

    // ✅ Append form field values
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const result = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (result.ok) {
        responseMessage.textContent = "Thank you! We'll be in touch soon.";
        responseMessage.style.color = "green";
        this.reset();
      } else {
        responseMessage.textContent = "Something went wrong. Please try again.";
        responseMessage.style.color = "red";
      }
    } catch (err) {
      responseMessage.textContent = "Error submitting the form.";
      responseMessage.style.color = "red";
    }
  }
});
