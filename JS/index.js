//======================================================漢堡 
const toggler = document.querySelector('.custom-toggler');
const collapse = document.querySelector('#navbarNav');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    collapse.classList.toggle('show'); // 控制展開
});

// ====================================================banner

