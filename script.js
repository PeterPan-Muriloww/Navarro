let currentIndex = 0;

    function moveSlide(direction) {
        const slides = document.querySelectorAll('.carousel-images img');
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        const offset = -currentIndex * 34;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    }