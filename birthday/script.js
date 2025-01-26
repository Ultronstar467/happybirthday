// Function to open the modal with the image and animation
function openModal() {
    document.getElementById("modal").style.display = "block";
    document.querySelector(".animated-message").style.animation = "fadeInText 2s ease-in forwards";
    document.querySelector(".birthday-image").style.animation = "fadeInImage 2s ease-in forwards";
}

// Function to close the modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
