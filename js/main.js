function loadImage(id, targetId) {
    const el = document.getElementById(id);
    const targetEl = targetId ? document.getElementById(targetId) : el;
    const imageToLoad = el.dataset.image || el.currentSrc || el.src;

    if (imageToLoad) {
        const img = new Image();
        img.src = imageToLoad;
        img.onload = () => {
            targetEl.classList.add('is-loaded');
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ['wallpaper', 'pictureImage'].forEach(id => loadImage(id, id === "pictureImage" ? "picture" : undefined))
});