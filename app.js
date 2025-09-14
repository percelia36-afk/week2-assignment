const thumbnails = document.getElementById("thumbnails");
const displayContainer = document.getElementById("displaycontainer");

const images = [
  {
    src: "https://images.unsplash.com/photo-1757398313132-6a1a061adb2c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "leaves on the ground",
  },
  {
    src: "https://images.unsplash.com/photo-1751917175580-ea4435af020e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "elephant head",
  },
  {
    src: "https://images.unsplash.com/photo-1756134904044-1cf7868cb9de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "tree with sun shine",
  },
  {
    src: "https://images.unsplash.com/photo-1757573913927-0f6a58fb0f49?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "silhouette of buck",
  },
];

let currentIndex = 0;

function createThumbnails() {
  images.forEach(function (image, index) {
    const imageElement = document.createElement("img");
    imageElement.src = image.src;
    imageElement.alt = image.alt;

    imageElement.addEventListener("click", function () {
      updateImage(index);
        createBigImage(image)
    });

    thumbnails.appendChild(imageElement);
  });
}

function createBigImage(imgDetails) {
  displayContainer.innerHTML = "";
  const bigImage = document.createElement("img");
  bigImage.src = imgDetails.src;
  bigImage.alt = imgDetails.alt;
  displayContainer.appendChild(bigImage);
}

function updateImage(index) {
  if (index >= 0 && index < images.length) {
    currentIndex = index;
    createBigImage(images[currentIndex]);
  }
}

/
createThumbnails();
updateImage(currentIndex);


document.getElementById("left").addEventListener("click", () => {
  updateImage((currentIndex - 1 + images.length) % images.length);
});

document.getElementById("right").addEventListener("click", () => {
  updateImage((currentIndex + 1) % images.length);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    updateImage((currentIndex - 1 + images.length) % images.length);
  } else if (event.key === "ArrowRight") {
    updateImage((currentIndex + 1) % images.length);
  }
});
