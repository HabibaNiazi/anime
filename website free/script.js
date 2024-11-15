document.addEventListener('DOMContentLoaded', function() {
    const maxLength = 18; // Adjust the maximum length of characters as needed
    const topSearchNames = document.querySelectorAll('.top-search span');

    topSearchNames.forEach(name => {
        let text = name.textContent;
        if (text.length > maxLength) {
            name.textContent = text.substring(0, maxLength) + '...';
        }
    });
});
