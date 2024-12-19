// Function when hovering over the "NO" button
function hoverNoButton() {
    const noButton = document.getElementById("no-button");
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Get the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Generate random positions ensuring the button stays within the visible area
    const randomX = Math.random() * (viewportWidth - buttonWidth);
    const randomY = Math.random() * (viewportHeight - buttonHeight);

    // Update the button's position
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Function for "YES" button click
function clickYesButton() {
    alert("Yay! I love you too! ❤️");
}
