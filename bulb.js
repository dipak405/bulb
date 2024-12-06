let isBulbOn = true;

const bulbImage = document.getElementById('bulb');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    if (isBulbOn) {
        bulbImage.src = 'bulb-off.jpg';
        toggleButton.textContent = 'Turn On';
    } else {
        bulbImage.src = 'bulb-on.webp';
        toggleButton.textContent = 'Turn Off';
    }
    isBulbOn = !isBulbOn;
});
