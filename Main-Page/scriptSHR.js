
    // JavaScript to handle carousel looping
    var carousel = document.getElementById('carouselExampleIndicators');
    carousel.addEventListener('slide.bs.carousel', function (event) {
        var activeIndex = event.relatedTarget.getAttribute('data-bs-slide-to');
        var numSlides = carousel.querySelectorAll('.carousel-item').length;
        

        if (parseInt(activeIndex) === numSlides - 1) {
            // Last slide, move to the first slide after a delay (500ms)
            setTimeout(function () {
                carousel.querySelector('.carousel-control-next').click();
            }, 250);
        }
        function scrollToSection(sectionId) {
            var section = document.getElementById(sectionId);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }
    });



