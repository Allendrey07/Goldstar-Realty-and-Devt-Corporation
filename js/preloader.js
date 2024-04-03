var loader = document.getElementById("preloader");

// Disable scrolling when the preloader is displayed
document.body.style.overflow = "hidden";

window.addEventListener("load", function(){
    // Hide the preloader
    loader.style.display = "none";
    
    // Re-enable scrolling after the preloader is hidden
    document.body.style.overflow = "auto";
});
