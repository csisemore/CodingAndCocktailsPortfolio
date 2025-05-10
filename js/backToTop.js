
// This function toggles the visibility of the back-to-top button based on scroll position
const scrollFunction = () => {
const backToTopButton = document.querySelector(".back-to-top-btn");

// Get the current vertical scroll position
const documentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

// If scrolled more than 100px, show the button, otherwise hide it
if (documentScrollTop > 100) {
    backToTopButton.style.display = "block";
} else {
    backToTopButton.style.display = "none";
}
};

// This function smoothly scrolls the window back to the top when called
const scrollToTop = () => {
window.scrollTo({
    top: 0, // takes the window to the top of the page
    behavior: "smooth" // smooth scrolling animation
});
};

// Add a scroll event listener to trigger scrollFunction whenever the user scrolls
window.addEventListener("scroll", scrollFunction);