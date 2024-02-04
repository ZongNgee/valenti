var noButtonTexts = ['Are you sure?', 'Really sure?', 'Pookie pls', "If you say no, I'll be very sad", "you're breaking my heart", "I'll be very very very sad"];
var currentNoButtonTextIndex = 0;

function increaseSize() {
    var yesButton = document.querySelector('.a');
    var currentWidth = window.getComputedStyle(yesButton, null).getPropertyValue('width');
    var currentHeight = window.getComputedStyle(yesButton, null).getPropertyValue('height');
    var currentFontSize = window.getComputedStyle(yesButton, null).getPropertyValue('font-size');

    var newWidth = parseFloat(currentWidth) * 1.2;
    var newHeight = parseFloat(currentHeight) * 1.2;
    var newFontSize = parseFloat(currentFontSize) * 1.2;

    yesButton.style.width = newWidth + 'px';
    yesButton.style.height = newHeight + 'px';
    yesButton.style.fontSize = newFontSize + 'px';

    // Change the text on 'No' button click
    var noButton = document.querySelector('.b');

    noButton.style.width = '150px';
    
    // Cycle through the text options
    noButton.innerText = noButtonTexts[currentNoButtonTextIndex];

    // Increment the index or reset to 0 if it reaches the end
    currentNoButtonTextIndex = (currentNoButtonTextIndex + 1) % noButtonTexts.length;
}

