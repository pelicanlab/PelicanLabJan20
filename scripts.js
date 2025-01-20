document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector('.hero'); // Get the hero section

    // List of images for the background
    const images = [
        'pexels-artempodrez-8533018.jpg',
        'pexels-tima-miroshnichenko-9574569.jpg',
        'pexels-pavel-danilyuk-8442106.jpg'
    ];

    let currentIndex = 0;

    function changeHeroImage() {
        // Start the fade out effect
        hero.classList.add('fade');
        
        // Wait for the opacity to reach 0 (duration of the fade)
        setTimeout(function() {
            // Change the background image after fade-out
            hero.style.backgroundImage = `url('${images[currentIndex]}')`;

            // After the new image is set, remove the fade class and restore opacity
            setTimeout(function() {
                hero.classList.remove('fade');
            }, 3000); // Delay to match the fade-in transition time (2s)

            // Move to the next image
            currentIndex = (currentIndex + 1) % images.length;
        }, 3000); // Match the fade-out time (2s)
    }

    // Change the image every 5 seconds
    setInterval(changeHeroImage, 5000);
});
