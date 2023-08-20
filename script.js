//your code here
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".image");
  let selectedImage = null;

  images.forEach(image => {
    image.addEventListener("dragstart", function(e) {
      selectedImage = this;
    });

    image.addEventListener("dragover", function(e) {
      e.preventDefault();
    });

    image.addEventListener("drop", function(e) {
      e.preventDefault();
      if (selectedImage !== null && selectedImage !== this) {
        // Swap background images
        const tempImage = this.style.backgroundImage;
        this.style.backgroundImage = selectedImage.style.backgroundImage;
        selectedImage.style.backgroundImage = tempImage;
      }
    });
  });
});
