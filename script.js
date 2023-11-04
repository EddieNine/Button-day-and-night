function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
    const ball = document.querySelector(".ball");
    ball.classList.toggle("move-right");
}