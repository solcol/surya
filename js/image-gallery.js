const el = document.getElementById('image-gallery');
let currentImage = 0;
let total = totalImages;

function prevImage() {
    if (!total) return;

    if (currentImage - 1 < 0 || currentImage - 1 > total) {
        currentImage = 0;
    } else {
        currentImage--;
    }

    for (let i = 0; i <= total; i++) {
        if (currentImage == 0) {
            document.getElementById(`image-${i}`).style.display = 'block';
        } else {
            document.getElementById(`image-${i}`).style.display = 'none';
        }
    }

    console.log(currentImage);
}


function nextImage() {
    if (!total) return;

    if (currentImage + 1 < 0 || currentImage + 1 > total) {
        currentImage = 0;
    } else {
        currentImage++;
    }

    console.log(currentImage);

    for (let i = 0; i <= total; i++) {
        if (currentImage == i) {
            document.getElementById(`image-${i}`).style.display = 'block';
        } else {
            document.getElementById(`image-${i}`).style.display = 'none';
        }
    }
}

for (let i = 0; i <= total; i++) {
    if (currentImage == 0) {
        document.getElementById(`image-${i}`).style.display = 'block';
    } else {
        document.getElementById(`image-${i}`).style.display = 'none';
    }
}