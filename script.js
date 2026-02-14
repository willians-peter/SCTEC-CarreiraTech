function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    
    // Saudação
    let saudacao = "";
    if (horas >= 5 && horas < 12) saudacao = "Bom dia";
    else if (horas >= 12 && horas < 18) saudacao = "Boa tarde";
    else saudacao = "Boa noite";

    const displayRelogio = `${saudacao}! Agora são ${horas}:${minutos}:${segundos}`;
    document.getElementById('relogio-saudacao').innerText = displayRelogio;
}

// Dark Mode Toggle
const btn = document.getElementById("theme-toggle");
btn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const targetTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", targetTheme);
    btn.innerText = targetTheme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});

setInterval(atualizarRelogio, 1000);
atualizarRelogio();