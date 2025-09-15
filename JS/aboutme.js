//======================================================漢堡 
const toggler = document.querySelector('.custom-toggler');
const collapse = document.querySelector('#navbarNav');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    collapse.classList.toggle('show'); // 控制展開
});
//======================================================標語
// document.addEventListener('DOMContentLoaded', function () {
//     const photo = document.querySelector('#about .photo');
//     const slogan = document.querySelector('#about .slogan');

//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     slogan.style.color = 'white';
//                 } else {
//                     slogan.style.color = 'black';
//                     slogan.style.textShadow = 'none';
//                 }
//             });
//         },
//         {
//             root: null,
//             threshold: 0.5, // 交集比例超過 50% 才變色
//             rootMargin: "0px"
//         }
//     );

//     observer.observe(slogan);
// });

