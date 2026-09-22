function jpAplicarTemaGuardado() {
    let modo = 'claro';
    try { modo = localStorage.getItem('jp_tema') || 'claro'; } catch (e) {}
    if (modo === 'oscuro') document.body.classList.add('jp-dark');
    const btn = document.getElementById('jpThemeBtn');
    if (btn) btn.textContent = modo === 'oscuro' ? '☀️' : '🌙';
}

function jpToggleTema() {
    const oscuro = document.body.classList.toggle('jp-dark');
    try { localStorage.setItem('jp_tema', oscuro ? 'oscuro' : 'claro'); } catch (e) {}
    const btn = document.getElementById('jpThemeBtn');
    if (btn) btn.textContent = oscuro ? '☀️' : '🌙';
}

window.addEventListener('DOMContentLoaded', jpAplicarTemaGuardado);
