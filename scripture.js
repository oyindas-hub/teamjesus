const scriptures = [
  "Be still and know that I am God. — Psalm 46:10",
  "I can do all things through Christ. — Philippians 4:13",
  "The Lord is my Shepherd, I shall not want. — Psalm 23:1",
  "The sufferings of this present time are not worth comparing. — Romans 8:18"
];

let index = 0;
const el = document.getElementById("scripture");

function showScripture() {
  el.classList.remove("fadeIn");
  setTimeout(() => {
    el.textContent = scriptures[index];
    el.classList.add("fadeIn");
    index = (index + 1) % scriptures.length;
  }, 100);
}

setInterval(showScripture, 4000);
window.onload = showScripture;
