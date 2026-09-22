// ---- Glosario: abre/cierra el tooltip táctil correspondiente ----
function jpToggleTip(id) {
    document.querySelectorAll('.jp-tip-box.open').forEach(box => {
        if (box.id !== id) box.classList.remove('open');
    });
    const box = document.getElementById(id);
    if (box) box.classList.toggle('open');
}
document.addEventListener('click', (e) => {
    if (!e.target.closest('.jp-tip-wrap')) {
        document.querySelectorAll('.jp-tip-box.open').forEach(b => b.classList.remove('open'));
    }
});

// ---- Errores amigables dentro de la página (reemplaza alert()) ----
function jpMostrarError(idContenedor, mensaje) {
    const cont = document.getElementById(idContenedor);
    if (!cont) { alert(mensaje); return; }
    cont.textContent = mensaje;
    cont.style.display = 'block';
    cont.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function jpOcultarError(idContenedor) {
    const cont = document.getElementById(idContenedor);
    if (cont) cont.style.display = 'none';
}
