function joinNow() {
    alert("Thanks for joining DevZone! 🚀");
  }
  
  function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name && email && message) {
      document.getElementById("form-status").innerText = "Thanks for reaching out!";
      document.getElementById("form-status").style.color = "green";
  
      // Optionally reset form fields
      document.querySelector("form").reset();
    } else {
      document.getElementById("form-status").innerText = "Please fill all fields.";
      document.getElementById("form-status").style.color = "red";
    }
  
    return false;
  }
  