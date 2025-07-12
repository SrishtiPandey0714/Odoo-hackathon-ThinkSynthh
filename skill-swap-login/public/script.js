document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
  
      const result = await response.json();
      document.getElementById("responseMsg").innerText = result.message;
      document.getElementById("responseMsg").style.color = response.ok ? "lightgreen" : "red";
  
    } catch (error) {
      document.getElementById("responseMsg").innerText = "Something went wrong!";
      document.getElementById("responseMsg").style.color = "red";
    }
  });
  // REGISTER FORM HANDLER
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const responseMsg = document.getElementById("responseMsg");

    if (password !== confirmPassword) {
      responseMsg.innerText = "Passwords do not match!";
      responseMsg.style.color = "red";
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const result = await response.json();

      responseMsg.innerText = result.message;
      responseMsg.style.color = response.ok ? "lightgreen" : "red";

      if (response.ok) {
        // Optional: redirect after 1 sec
        setTimeout(() => {
          window.location.href = "index.html"; // go to login page
        }, 1000);
      }

    } catch (error) {
      responseMsg.innerText = "Registration failed!";
      responseMsg.style.color = "red";
    }
  });
}
