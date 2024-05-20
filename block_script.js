function showAlert() {
    alert('Content is restricted');
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showAlert();
});

document.addEventListener('mousedown', function(e) {
    if (e.button === 2 || e.button === 3) {
        e.preventDefault();
        showAlert();
    }
});

document.addEventListener('keydown', function(e) {
    // Disable F12 (Developer Tools)
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        showAlert();
    }
    // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.ctrlKey && (e.key === "u" || (e.shiftKey && (e.key === "I" || e.key === "J")))) {
        e.preventDefault();
        showAlert();
    }
});
