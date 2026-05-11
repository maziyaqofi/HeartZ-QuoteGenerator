const generateBtn = document.querySelector('.generate_btn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close_btn');
const modalQuote = document.querySelector('.modal_quote');
const modalAuthor = document.querySelector('.modal_author');
const dropdownBtn = document.querySelector('.dropdown_btn');
const dropdownBtnText = document.querySelector('.dropdown_btn span');
const dropdownMenu = document.querySelector('.dropdown_menu');
const dropdownItems = document.querySelectorAll('.dropdown_menu li');
let selectedCategory = "";

generateBtn.addEventListener('click', () => {

    const quoteList = selectedCategory
        ? quotes.filter((quote) => quote.category === selectedCategory)
        : quotes;
    const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

    modalQuote.textContent = `"${randomQuote.text}"`;
    modalAuthor.textContent = `${randomQuote.author} - ${randomQuote.song}`;
    overlay.classList.remove('hidden');

});

closeBtn.addEventListener('click', () => {

    overlay.classList.add('hidden');

});

dropdownBtn.addEventListener('click', () => {

    dropdownMenu.classList.toggle('show');
    dropdownBtn.classList.toggle('active');

});

dropdownItems.forEach((item) => {

    item.addEventListener('click', () => {

        dropdownBtnText.textContent = item.textContent;
        selectedCategory = item.dataset.category;
        dropdownMenu.classList.remove('show');
        dropdownBtn.classList.remove('active');

    });

});

document.addEventListener('click', (event) => {

    if (!event.target.closest('.dropdown')) {

        dropdownMenu.classList.remove('show');
        dropdownBtn.classList.remove('active');

    }

});
