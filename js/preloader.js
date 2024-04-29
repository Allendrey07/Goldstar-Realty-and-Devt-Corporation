// Get the preloader element
var loader = document.getElementById("preloader");

// Disable scrolling when the preloader is displayed
document.body.style.overflow = "hidden";

// Show the preloader when the page starts loading
document.addEventListener("DOMContentLoaded", function() {
    loader.style.display = "block";
});

// Re-enable scrolling and hide the preloader when everything has loaded
window.addEventListener("load", function(){
    // Hide the preloader
    loader.style.display = "none";
    
    // Re-enable scrolling after the preloader is hidden
    document.body.style.overflow = "auto";
});
