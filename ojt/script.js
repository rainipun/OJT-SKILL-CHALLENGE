// script.js

// Define arrays of backgrounds and texts
const backgrounds = [
    'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp8930684.jpg&f=1&nofb=1&ipt=e50c112e7043017ce58dd6fba4ee54e81231acc1a978a8105606a1b9c709b489&ipo=images)',  // Add your actual image paths here
    'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.W4uokfzx8TAkKrhNAWnnRAHaEK%26pid%3DApi&f=1&ipt=021f1f30052c2c3e29b6708713744cd12f812655a1caef8e3291f83cfda4512a&ipo=images)',
    'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZLUO6CZ1SImEzxtrnhCwPgHaEK%26pid%3DApi&f=1&ipt=7ab5b47050f01327cc274e0b7a91745d41a74e8258f53e61c3e37e683e8ec09d&ipo=images)'
];

const texts = [
    {
        title: 'Free online courses certificates',
        description: 'Upskill your knowledge about your role and industry as you gain more experience.'
    },
    {
        title: 'Advanced learning resources',
        description: 'Explore advanced courses and deepen your expertise in various fields.'
    },
    {
        title: 'Certifications for professionals',
        description: 'Get certified and boost your career with our professional courses.'
    }
];

// Get references to the elements
const textContentDiv = document.querySelector('.text-content-div');
const headerContent = document.querySelector('.header-content');
const nextButton = document.querySelector('.secondary-btn:nth-of-type(1)');
const previousButton = document.querySelector('.secondary-btn:nth-of-type(2)');
const primaryBtn1 = document.querySelector('.primary-btn1');
const primaryBtn2 = document.querySelector('.primary-btn2');

let currentIndex = 0;

// Function to update the background and text content
function updateContent(index) {
    if (index >= 0 && index < backgrounds.length) {
        headerContent.style.backgroundImage = backgrounds[index];
        textContentDiv.querySelector('h1').textContent = texts[index].title;
        textContentDiv.querySelector('p').textContent = texts[index].description;
        currentIndex = index;
    }
}

// Event listener for the "next" button
nextButton.addEventListener('click', function() {
    const nextIndex = (currentIndex + 1) % backgrounds.length;
    updateContent(nextIndex);
});

// Event listener for the "previous" button
previousButton.addEventListener('click', function() {
    const prevIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
    updateContent(prevIndex);
});

// Event listener for the "Read More" button
primaryBtn1.addEventListener('click', function() {
    window.location.href = 'nextPage.html'; // Change to your actual next page URL
});

// Event listener for the "Join Now" button
primaryBtn2.addEventListener('click', function() {
    window.history.back(); // Navigate to the previous page in browser history
});

// section 4 
document.addEventListener('DOMContentLoaded', () => {
    // Handle star rating clicks
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.parentElement;
            const stars = rating.querySelectorAll('.star');
            const value = parseInt(star.getAttribute('data-value'));

            stars.forEach(st => {
                if (parseInt(st.getAttribute('data-value')) <= value) {
                    st.classList.add('selected');
                } else {
                    st.classList.remove('selected');
                }
            });
        });
    });

    // Show login prompt when enroll button is clicked
    document.getElementById('enroll-button').addEventListener('click', () => {
        document.getElementById('login-prompt').style.display = 'flex';
    });

    // Close login prompt
    document.getElementById('login-close').addEventListener('click', () => {
        document.getElementById('login-prompt').style.display = 'none';
    });
});
