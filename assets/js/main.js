// assets/js/main.js

document.addEventListener("DOMContentLoaded", function () {

  // ── Botão Voltar ao Topo ─────────────────────────────────────────────────
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ── Destacar link ativo no sumário ───────────────────────────────────────
  document.querySelectorAll(".summary-nav a").forEach(function (link) {
    if (link.href === window.location.href) {
      link.style.fontWeight = "bold";
      link.style.color = "#003d99";
    }
  });

  // ── Salvar progresso de leitura (localStorage) ───────────────────────────
  const currentPage = window.location.pathname;
  if (currentPage.includes("/capitulos/") || currentPage.includes("/paginas/")) {
    localStorage.setItem("ultimaPaginaLida", window.location.href);
  }

  // Para usar o progresso salvo, adicione na index.html um botão com id="btn-continuar"
  // e descomente as linhas abaixo:
  // const ultima = localStorage.getItem("ultimaPaginaLida");
  // const btnContinuar = document.getElementById("btn-continuar");
  // if (ultima && btnContinuar) { btnContinuar.href = ultima; btnContinuar.style.display = "inline-block"; }

  /*
    Funcionalidades futuras:
    - Modo escuro: toggle no header que alterna classe .dark no <body>
    - Ajuste de fonte: botões A- / A+ que alteram font-size no body
    - Barra de progresso de leitura no topo
  */

});
