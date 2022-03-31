// Request 1: Click to Change Text.
// Change the text to 'Have a Good Time!' when the user click on the 'Welcome Message' block
const banner = document.querySelector('.banner');
// // const bannerMessage = document.getElementsByTagName('banner h1');

banner.addEventListener('click', () => {
    // banner.innerHTML = '<h1>Have a Good Time!</h1>'
    let bannerMessage = banner.textContent;
    if (bannerMessage === 'Welcome Message') {
        banner.innerHTML = '<h1>Have a Good Time!</h1>';
    } else {
        banner.innerHTML = '<h1>Welcome Message</h1>';
    }
});


// Request 2: Click to Show/Close Menu.
// When the user clicks the menu at the top-right corner, show the hidden mobile menu. After that, the user can click the close button to hide it.
const openIcon = document.querySelector('.nav-icon img');
const closeIcon = document.querySelector('.nav-hidden .X');
const mobileMenu = document.querySelector('.nav-hidden');

openIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
});

closeIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

// Request 3: Click to Show More Content Boxes.
// There are some more content boxes waiting to show. When the user clicks the Call-to-Action button, show those hidden content boxes.
const actionButton = document.querySelector('.button');
const moreBoxes = document.querySelector('#hidden-box');

actionButton.addEventListener('click', () => {
    if (moreBoxes.style.display === 'none') {
        moreBoxes.style.display = 'flex';
    } else {
        moreBoxes.style.display = 'none';
    }
});