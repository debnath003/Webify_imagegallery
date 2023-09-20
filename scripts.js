// JavaScript for image cards, overlay, and form submission
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay-image');

// Function to show the clicked image
function showImage(imageSrc) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageSrc;

    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Function to close the image popup
function closeImage() {
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "none";
    document.body.style.overflow = "auto";
}

// Handle overlay close when clicking outside the image card
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('overlay')) {
        closeImage();
    }
});

// Handle form submission
document.getElementById('recommendation-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    const name = document.getElementById('name').value;
    const recommendation = document.getElementById('recommendation').value;
    // You can send the form data to the server here

    // Show a confirmation message (you can customize this part)
    alert("Form submitted!");
    document.getElementById('recommendation-form').reset(); // Reset the form
});

// Add a click event listener to each image card
const imageCards = document.querySelectorAll('.image-card');
imageCards.forEach((card) => {
    card.addEventListener('click', function () {
        const clickedImage = card.querySelector('img');
        showImage(clickedImage.src);
    });
});

// Close overlay when clicking the close button
document.querySelector('.close-button').addEventListener('click', function () {
    closeImage();
});

