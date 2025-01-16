const feedbackform = document.getElementById('feedbackForm')
function validateForm() {
    let name = document.getElementById("name").value;
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }
    // Add more validation as needed
    return true;
  }
  
  function submitSurvey() {
    if (validateForm()) {
      // Send data to server using AJAX or other methods
      alert("Survey submitted successfully!");
    }
  }