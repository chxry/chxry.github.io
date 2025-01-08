const themeToggle = document.getElementById("themeToggle");
const themes = ["system", "light", "dark"];
let theme = themes.indexOf(localStorage.getItem("theme"));
if (theme < 0) {
  theme = 2;
}

const toggleTheme = () => {
  const old = theme;
  theme = (theme + 1) % themes.length;
  document.body.classList.replace(themes[old], themes[theme]);
  themeToggle.innerText = themes[theme];
  localStorage.setItem("theme", themes[theme]);
};

document.body.classList.replace("system", themes[theme]);
themeToggle.innerText = themes[theme];
themeToggle.onclick = toggleTheme;

const catToggle = document.getElementById("catToggle");

const enableCat = () => {
  localStorage.setItem("oneko", true);
  const el = document.createElement("script");
  el.setAttribute("src", "/oneko/oneko.js");
  el.setAttribute("data-cat", "/oneko/oneko.gif");
  el.setAttribute("id", "oneko-script");
  document.body.appendChild(el);
  catToggle.innerText = "disable cat";
  catToggle.onclick = disableCat;
};

const disableCat = () => {
  localStorage.setItem("oneko", false);
  document.getElementById("oneko-script").remove();
  document.getElementById("oneko").remove();
  catToggle.innerText = "enable cat";
  catToggle.onclick = enableCat;
};

if (localStorage.getItem("oneko") != "false") {
  enableCat();
} else {
  catToggle.onclick = enableCat;
}

async function swapContent(url) {
  // todo maybe swap in some loading indication
  const html = await (await fetch(url)).text();
  const doc = new DOMParser().parseFromString(html, "text/html");

  document.getElementById("content").replaceWith(doc.getElementById("content"));
  document.title = doc.querySelector("title").textContent;
}

document.body.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    const url = new URL(event.target.href);
    if (url.origin === window.location.origin) {
      event.preventDefault();
      swapContent(url);
      window.history.pushState({}, "", url);
    }
  }
});

window.addEventListener("popstate", () => {
  swapContent(window.location.href);
});
