const btn = document.getElementById("theme-toggle");
const themeSystem = document.documentElement;

function aplicarTema(tema) {
  themeSystem.setAttribute("data-theme", tema);
  localStorage.setItem("tema-preferido", tema);

  if (btn) {
    btn.innerText = tema === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro";
  }
}

const temaSalvo = localStorage.getItem("tema-preferido");

if (temaSalvo) {
  aplicarTema(temaSalvo);
}

if (btn) {
  btn.addEventListener("click", () => {
    const temaAtual = themeSystem.getAttribute("data-theme");
    const novoTema = temaAtual === "dark" ? "light" : "dark";
    aplicarTema(novoTema);
  });
}

function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours();
  const minutos = agora.getMinutes().toString().padStart(2, "0");

  let saudacao = "";
  if (horas >= 5 && horas < 12) saudacao = "Bom dia";
  else if (horas >= 12 && horas < 18) saudacao = "Boa tarde";
  else saudacao = "Boa noite";

  const displayRelogio = `${saudacao}! Agora são ${horas}:${minutos}`;
  const relogioElement = document.getElementById("relogio-saudacao");
  if (relogioElement) relogioElement.innerText = displayRelogio;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
