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

  document.querySelector(".title").textContent = project.title;

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
      el.innerHTML = "";

      if (Array.isArray(section.text)) {
        // 檢查每個 item 是否是物件，若不是就當純文字生成 li
        if (typeof section.text[0] === "string") {
          const ul = document.createElement("ul");
          section.text.forEach(t => {
            const li = document.createElement("li");
            li.textContent = t;
            ul.appendChild(li);
          });
          el.appendChild(ul);
        } else {
          section.text.forEach((item) => {
            if (item.type === "paragraph") {
              el.innerHTML += `<p>${item.content}</p>`;
            } else if (item.type === "list") {
              const ul = document.createElement("ul");
              item.content.forEach(li => {
                const liEl = document.createElement("li");
                liEl.textContent = li;
                ul.appendChild(liEl);
              });
              el.appendChild(ul);
            }
          });
        }
      } else {
        el.innerHTML = section.text;
      }
    }
  });

  // 顯示連結按鈕（如果有的話）
  const website = document.getElementById("project-website");
  const slides = document.getElementById("project-slides");

  if (project.links && project.links.website) {
    website.href = project.links.website;
    website.style.display = "inline-block"; // 顯示
  } else {
    website.style.display = "none"; // 沒有連結就隱藏
  }

  if (project.links && project.links.slides) {
    slides.href = project.links.slides;
    slides.style.display = "inline-block"; // 顯示
  } else {
    slides.style.display = "none"; // 沒有連結就隱藏
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
