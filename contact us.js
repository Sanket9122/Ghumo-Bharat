document.getElementById("Submit").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    alert("We will shortly contact you");
    window.location.href = "homepage.html"; // Redirect to homepage.html
});