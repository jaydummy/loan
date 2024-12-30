document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to the Loan Management System!");
    
    // Add event listeners to the "Learn More" buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert("More details about the loan will be available soon!");
        });
    });
});
