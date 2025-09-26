const toggler = document.querySelector(".custom-toggler");
const collapse = document.querySelector("#navbarNav");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  collapse.classList.toggle("show");
});

let currentIndex = 0;
let projects = [];

const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id")) || 0;

fetch("./JS/work-d.json")
  .then((res) => res.json())
  .then((data) => {
    projects = data;

    // 如果 id 超出範圍就用 0
    if (projectId < 0 || projectId >= projects.length) {
      renderProject(0);
    } else {
      currentIndex = projectId;
      renderProject(currentIndex);
    }
  });

function renderProject(index) {
  const project = projects[index];

  // 圖片與描述
  document.getElementById("img1").src = project.images[0];
  document.getElementById("img2").src = project.images[1];
  document.getElementById("description").textContent = project.description;

  const sectionMap = {
    情況: "situation",
    任務: "task",
    行動: "action",
    結果: "result",
  };

  // 顯示每個分類內容
  project.sections.forEach((section) => {
    const id = sectionMap[section.label];
    if (id) {
      const el = document.getElementById(id);
      if (Array.isArray(section.text)) {
        const ul = document.createElement("ul");
        section.text.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);
        });
        el.innerHTML = "";
        el.appendChild(ul);
      } else {
        el.innerHTML = section.text;
      }
    }
  });

  // 顯示連結按鈕（如果有的話）
  if (project.links) {
    const website = document.getElementById("project-website");
    const slides = document.getElementById("project-slides");
    website.href = project.links.website || "#";
    slides.href = project.links.slides || "#";
  }
}

function nextProject() {
  if (currentIndex < projects.length - 1) {
    currentIndex++;
    updateURL();
    renderProject(currentIndex);
  }
}

function prevProject() {
  if (currentIndex > 0) {
    currentIndex--;
    updateURL();
    renderProject(currentIndex);
  }
}

function updateURL() {
  const newUrl = `${window.location.pathname}?id=${currentIndex}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
}
