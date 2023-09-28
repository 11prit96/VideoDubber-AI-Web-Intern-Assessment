document.addEventListener("DOMContentLoaded", function () {
    const videoSlider = document.getElementById("videoSlider");
    const scrollContainer = document.getElementById("scrollContainer");

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    scrollContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    scrollContainer.addEventListener("mouseup", () => {
        isDragging = false;
    });

    scrollContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
});
