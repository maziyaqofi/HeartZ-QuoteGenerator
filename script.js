const generateBtn = document.querySelector('.generate_btn');

const overlay = document.querySelector('.overlay');

const closeBtn = document.querySelector('.close_btn');

generateBtn.addEventListener('click', () => {

    overlay.classList.remove('hidden');

});

closeBtn.addEventListener('click', () => {

    overlay.classList.add('hidden');

});