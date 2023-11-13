//Footer
// Get references to the "More" link and the additional content
var toggleMore = document.getElementById("toggleMore");
var additionalContent = document.getElementById("additionalContent");
var isOpen = false; // Track the state of the content

// Function to toggle the visibility of the additional content
toggleMore.addEventListener("click", function () {
    isOpen = !isOpen; // Toggle the state
    additionalContent.style.display = isOpen ? "block" : "none"; // Show or hide based on state
    toggleMore.textContent = isOpen ? "Thu gọn" : "Xem Thêm"; // Change link text
});