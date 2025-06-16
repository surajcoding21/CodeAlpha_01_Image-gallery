const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-image").src = images[currentIndex];
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("modal-image").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("modal-image").src = images[currentIndex];
}
