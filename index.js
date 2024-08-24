function toggleBox(boxId) {
    const box = document.getElementById(boxId);
    const options = box.querySelector('.box-options');

    if (options.style.display === 'block') {
        options.style.display = 'none';
    } else {
        options.style.display = 'block';
    }
}
