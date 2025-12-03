
document.addEventListener("DOMContentLoaded", () => {
  console.log("Barre et footer chargés.");
});


document.addEventListener("scroll", () => {
  const topbar = document.querySelector(".topbar");
  if (window.scrollY > 50) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  // Copier l'e-mail
  const copyBtn = document.querySelector(".copy-mail");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email;
      try {
        await navigator.clipboard.writeText(email);
        const original = copyBtn.textContent;
        copyBtn.textContent = "Copié !";
        setTimeout(() => (copyBtn.textContent = original), 1500);
      } catch {
        alert("Impossible de copier l’e-mail");
      }
    });
  }

  // Liens externes
  document.querySelectorAll(".btn-link").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.url;
      if (url) window.open(url, "_blank", "noopener,noreferrer");
    });
  });
});
