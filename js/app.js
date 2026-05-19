/* ============================================================
   Festival App – Main JavaScript
   ============================================================
   - Service Worker registratie
   - Taalwissel (NL/EN)
   - Accordeon logica (Info pagina)
   - Tabs logica (Programma pagina)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ========== Service Worker Registratie ==========
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/Festival-App-8.1/sw.js')
      .then((reg) => console.log('[App] Service Worker registered:', reg.scope))
      .catch((err) => console.error('[App] SW registration failed:', err));
  }

  // ========== DOM References ==========
  const html = document.documentElement;
  const btnLang = document.getElementById('btn-lang');

  // ========== Taalwissel ==========
  const savedLang = localStorage.getItem('lang') || 'nl';
  html.setAttribute('data-lang', savedLang);
  html.setAttribute('lang', savedLang);

  if (btnLang) {
    btnLang.addEventListener('click', () => {
      const current = html.getAttribute('data-lang');
      const next = current === 'nl' ? 'en' : 'nl';
      html.setAttribute('data-lang', next);
      html.setAttribute('lang', next);
      localStorage.setItem('lang', next);
    });
  }

  // ========== Accordeon Logica (Info Pagina) ==========
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(acc => {
    const header = acc.querySelector('.accordion__header');
    if (header) {
      header.addEventListener('click', () => {
        // Optioneel: sluit andere accordeons
        accordions.forEach(other => {
          if (other !== acc) other.classList.remove('active');
        });
        
        acc.classList.toggle('active');
      });
    }
  });

  // ========== Tabs Logica (Programma Pagina) ==========
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // Hier komt later logica om de juiste content te tonen
    });
  });

});
