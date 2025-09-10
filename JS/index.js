//======================================================漢堡 
const toggler = document.querySelector('.custom-toggler');
const collapse = document.querySelector('#navbarNav');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
    collapse.classList.toggle('show'); // 控制展開
});

// ====================================================banner
const paths = [...document.querySelectorAll("path")];
const svg = document.querySelector("svg");

const tl = gsap.timeline({
    defaults: { duration: 2, ease: "power1.inOut" },
    onComplete: () => {
        svg.classList.add("hide");
    }
});

paths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    // 把動畫加進 timeline，會自動一個接一個播
    tl.to(path, { strokeDashoffset: 0 });
});

