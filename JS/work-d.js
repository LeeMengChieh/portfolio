const urlParams = new URLSearchParams(window.location.search);
const currentId = parseInt(urlParams.get('id'));

fetch('./works.json')
    .then(res => res.json())
    .then(data => {
        const work = data.find(item => item.id === currentId);
        if (!work) return;

        document.getElementById('title').textContent = work.title;
        document.getElementById('main-image').src = work.image;
        document.getElementById('desc').textContent = work.description;
        document.getElementById('date').textContent = work.date;

        document.getElementById('prev').onclick = () => {
            if (currentId > 1) {
                window.location.href = `work.html?id=${currentId - 1}`;
            }
        };
        document.getElementById('next').onclick = () => {
            if (currentId < data.length) {
                window.location.href = `work.html?id=${currentId + 1}`;
            }
        };
    });