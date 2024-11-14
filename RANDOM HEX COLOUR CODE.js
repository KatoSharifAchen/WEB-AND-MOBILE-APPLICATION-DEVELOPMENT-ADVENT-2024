function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

console.log(getRandomHexColor()); // Output: Random hex color code like "#a1b2c3"
