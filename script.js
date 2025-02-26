document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio website loaded successfully!");
    
    // Example interaction: Change header color on click
    document.querySelector("header").addEventListener("click", function() {
        this.style.backgroundColor = this.style.backgroundColor === "rgb(51, 51, 51)" ? "#555" : "#333";
    });
});
