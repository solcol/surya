function setImage(column) {
    document.querySelectorAll('#image-gallery-picker a').forEach(e=>e.classList.remove('card'));
    column.classList.add('card');

    let image = column.firstChild;

    document.getElementById('big-image').src = image.src;
    document.getElementById('big-image').alt = image.alt;
}