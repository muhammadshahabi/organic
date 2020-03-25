let welcomeCards = document.querySelectorAll('.welcome-card');

welcomeCards.forEach(welcomeCard => {

    welcomeCard.addEventListener('mouseover', () => {
        
        welcomeCard.querySelector('.organic-icon').style.setProperty('background-image', 'url("assets/img/organic-food-icon-white.svg")')
        
    });

}); 


welcomeCards.forEach(welcomeCard => {

    welcomeCard.addEventListener('mouseleave', () => {

        welcomeCard.querySelector('.organic-icon').style.setProperty('background-image', 'url("assets/img/organic-food-icon.svg")')

    });

}); 