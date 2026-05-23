// assets/js/main.js

document.addEventListener("DOMContentLoaded", function () {

  // ── Botão Voltar ao Topo ──────────────────────────────────────────────
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ── Destacar capítulo atual no sumário (index.html) ───────────────────
  // Compara o href de cada link do sumário com a URL atual
  const summaryLinks = document.querySelectorAll(".summary-nav a");
  summaryLinks.forEach(function (link) {
    if (link.href === window.location.href) {
      link.style.fontWeight = "bold";
      link.style.color = "#003d99";
    }
  });

  // ── Progresso de leitura (localStorage) ──────────────────────────────
  // Salva a última página visitada para você poder retomar depois
  const currentPage = window.location.pathname;
  if (currentPage.includes("/capitulos/")) {
    localStorage.setItem("ultimaPaginaLida", window.location.href);
  }

  // Para retomar a leitura, você pode adicionar um botão na index.html:
  // const ultima = localStorage.getItem("ultimaPaginaLida");
  // if (ultima) { document.getElementById("btn-continuar").href = ultima; }

  /*
    Funcionalidades futuras que você pode adicionar aqui:
    - Modo escuro: toggle no header que alterna uma classe no <body>
    - Ajuste de tamanho de fonte pelo leitor (botões A- / A+)
    - Barra de progresso de leitura no topo da página
    - Busca no texto (Ctrl+F nativo já funciona, mas pode customizar)
  */

});
