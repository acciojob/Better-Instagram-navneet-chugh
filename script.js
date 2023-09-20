//your code here
// Get all draggable elements
const images = document.querySelectorAll('.image');

let draggedImage = null;

// Add dragstart event listener to all images
images.forEach((image) => {
    image.addEventListener('dragstart', (event) => {
        draggedImage = event.target;
        event.dataTransfer.setData('text/plain', ''); // Necessary for Firefox
        setTimeout(() => {
            event.target.style.display = 'none'; // Hide the image during the drag operation
        }, 0);
    });

    image.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedImage.style.display = 'block'; // Show the image after the drag operation
            draggedImage = null;
        }, 0);
    });
});

// Add dragover and drop event listeners to the parent container
const parent = document.getElementById('parent');
parent.addEventListener('dragover', (event) => {
    event.preventDefault();
});

parent.addEventListener('drop', (event) => {
    event.preventDefault();
    if (draggedImage) {
        // Swap the innerHTML (text) of the dragged and dropped elements
        const temp = draggedImage.innerHTML;
        draggedImage.innerHTML = event.target.innerHTML;
        event.target.innerHTML = temp;

        // Reset the border style (if any) from previously selected elements
        images.forEach((image) => {
            image.classList.remove('selected');
        });

        // Add a border to the currently selected element
        event.target.classList.add('selected');
    }
});
