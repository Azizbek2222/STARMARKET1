const input = document.getElementById("text");
const frame = document.querySelector("iframe");
const btn = document.querySelector(".search-btn");

function openPage() {
    let value = input.value.trim();
    if (value === "") return;

    // Agar URL bo'lmasa — Google qidiruv
    if (!value.startsWith("http://") && !value.startsWith("https://")) {
        value = "https://www.bing.com/search?q=" + encodeURIComponent(value);
    }

    frame.src = value;
}

btn.onclick = openPage;

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        openPage();
    }
});
