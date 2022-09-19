const registerForm = document.querySelector("form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const addressInput = document.getElementById("address-input");
const submitMsg = document.getElementById("submit-message");
const submitBtn = document.getElementById("submit-button");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const services = ["windows", "fascia", "patio", "gutters", "conservatory"];
  const frequencies = ["2-weeks", "4-weeks", "6-weeks"];
  let checkedServices = [];
  let checkedFrequency;
  for (const service of services) {
    if (document.getElementById(service).checked) {
      checkedServices.push(service);
    }
  }
  for (const frequency of frequencies) {
    if (document.getElementById(frequency).checked) {
      checkedFrequency = frequency;
    }
  }

  const data = {
    name: nameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
    address: addressInput.value,
    services: checkedServices.toString(),
    frequency: checkedFrequency,
  };

  try {
    let regResponse = await fetch("/details", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(data),
    });
    if (regResponse.status == 200) {
      submitMsg.textContent = "Registration successful";
    } else {
      submitMsg.textContent = "Registration failed due to email API error";
    }
  } catch (err) {
    submitMsg.textContent =
      "Registration failed; error communicating with server";
    console.log("Something went wrong when connecting to the server.");
  }
});
