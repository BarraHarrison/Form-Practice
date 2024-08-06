document.addEventListener("DOMContentLoaded", function() {
    // practicing local storage
    document.getElementById("submitButton").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        // get the form values
        let userName = document.getElementById("firstName").value;
        let userEmail = document.getElementById("email").value;
        let userOccupation = document.getElementById("occupation").value;

        let userJson = {
            Name: userName,
            Email: userEmail,
            Occupation: userOccupation
        };

        // Save the userJson object to local storage
        localStorage.setItem(userName, JSON.stringify(userJson));

        // Debugging logs
        console.log("Saved to localStorage:", localStorage.getItem(userName));
        
    });
});
