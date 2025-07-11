document.addEventListener("DOMContentLoaded", () => {
      const fadeEls = document.querySelectorAll('.fade-in');
      fadeEls.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.15}s`;
      });
    });

    function toggleTheme() {
      const html = document.documentElement;
      const isDark = html.getAttribute('data-theme') === 'dark';
      html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    }

    function setThemeColor(primario, secundario) {
      const root = document.documentElement;
      root.style.setProperty('--color-vinotinto', primario);
      root.style.setProperty('--color-destacado', secundario);
      console.log('🎨 Color actualizado:', primario, secundario);
    }