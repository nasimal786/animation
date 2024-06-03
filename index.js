const logo = document.getElementById('animated-logo');
let clickCount = 0;

document.body.addEventListener('click', () => {
    clickCount++;

    switch (clickCount % 3) {
        case 1:
            logo.style.left = '100%';
            logo.style.transform = 'translate(-100%, -50%)'; 
            break;
        case 2:
            logo.style.transform = 'translate(-50%, -100%)'; 
            logo.style.left = '50%';
            logo.style.top = '100%';
            break;
        default:
            logo.style.left = '0';
            logo.style.top = '30%';
            logo.style.transform = 'translateY(-50%)';
            break;
    }
});
