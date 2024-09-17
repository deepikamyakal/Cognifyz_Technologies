function openModal(imageSrc) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modalImage').src = imageSrc;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
