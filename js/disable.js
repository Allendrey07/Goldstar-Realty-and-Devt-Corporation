 // Disable right-click
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Disable Ctrl+Shift+I and Ctrl+U
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
        }
 });
