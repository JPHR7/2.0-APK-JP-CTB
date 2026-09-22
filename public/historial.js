function jpGuardarHistorial(storageKey, entry, maxItems = 10) {
    let lista = [];
    try { lista = JSON.parse(localStorage.getItem(storageKey)) || []; } catch (e) { lista = []; }
    entry.fecha = new Date().toLocaleString('es-PE', { dateStyle: 'short', timeStyle: 'short' });
    lista.unshift(entry);
    if (lista.length > maxItems) lista = lista.slice(0, maxItems);
    try { localStorage.setItem(storageKey, JSON.stringify(lista)); } catch (e) { /* almacenamiento no disponible */ }
    jpRenderHistorial(storageKey);
}

function jpRenderHistorial(storageKey) {
    const cont = document.getElementById('jpHistorialLista');
    if (!cont) return;
    let lista = [];
    try { lista = JSON.parse(localStorage.getItem(storageKey)) || []; } catch (e) { lista = []; }

    if (lista.length === 0) {
        cont.innerHTML = '<p class="jp-hist-vacio">Aún no hay cálculos guardados en este dispositivo.</p>';
        return;
    }

    cont.innerHTML = lista.map(item => `
        <div class="jp-hist-item">
            <div class="jp-hist-top">
                <strong>${item.titulo || ''}</strong>
                <span>${item.fecha}</span>
            </div>
            <div class="jp-hist-detail">${item.detalle || ''}</div>
        </div>
    `).join('');
}

function jpBorrarHistorial(storageKey) {
    if (confirm('¿Borrar todo el historial guardado en este dispositivo? Esta acción no se puede deshacer.')) {
        try { localStorage.removeItem(storageKey); } catch (e) { /* no-op */ }
        jpRenderHistorial(storageKey);
    }
}
