/**
 * Muestra un banner (solo dentro de la app, al abrirla) cuando la fecha actual
 * está cerca de una fecha límite legal de pago. No es una notificación push real
 * (esta versión web/WebView no puede despertar el dispositivo estando cerrada);
 * solo avisa si el usuario abre la app en esos días.
 */
function jpRevisarFechasClave() {
    const cont = document.getElementById('jpReminderBox');
    if (!cont) return;

    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = hoy.getMonth(); // 0-indexado
    const dia = hoy.getDate();

    // Ventana de aviso: desde 10 días antes hasta la fecha límite misma
    const fechasClave = [
        { mes: 4, dia: 15, texto: 'Depósito de CTS (semestre mayo) vence el 15 de mayo.' },
        { mes: 6, dia: 15, texto: 'Gratificación de Julio se paga hasta el 15 de julio.' },
        { mes: 10, dia: 15, texto: 'Depósito de CTS (semestre noviembre) vence el 15 de noviembre.' },
        { mes: 11, dia: 15, texto: 'Gratificación de Diciembre se paga hasta el 15 de diciembre.' },
    ];

    let mensaje = null;
    for (const fc of fechasClave) {
        if (mes === fc.mes) {
            const diff = fc.dia - dia;
            if (diff >= 0 && diff <= 10) { mensaje = fc.texto; break; }
        }
    }

    if (!mensaje) return;

    const claveDescarte = `jp_reminder_dismiss_${anio}_${mes}_${fc_dia_actual(fechasClave, mes)}`;
    let descartado = false;
    try { descartado = localStorage.getItem(claveDescarte) === 'si'; } catch (e) {}
    if (descartado) return;

    cont.innerHTML = `
        <div class="jp-reminder">
            <span>📅</span>
            <span>${mensaje}</span>
            <button onclick="jpDescartarRecordatorio('${claveDescarte}')">✕</button>
        </div>
    `;
}

function fc_dia_actual(lista, mes) {
    const item = lista.find(f => f.mes === mes);
    return item ? item.dia : 0;
}

function jpDescartarRecordatorio(clave) {
    try { localStorage.setItem(clave, 'si'); } catch (e) {}
    const cont = document.getElementById('jpReminderBox');
    if (cont) cont.innerHTML = '';
}

window.addEventListener('DOMContentLoaded', jpRevisarFechasClave);
