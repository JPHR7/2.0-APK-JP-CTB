# JP Calcula Tu Beneficio

App web (HTML/CSS/JS puro, sin frameworks ni build) de calculadoras laborales para
trabajadores y estudiantes en Perú. Pensada para funcionar tanto como sitio web
normal (GitHub Pages) como empaquetada a APK mediante plataformas "website to APK"
(requiere que `index.html` esté en la raíz del proyecto — ya lo está).

Creado por **Jeferson Piero Gonzales Vera**.

## Estructura

```
├── index.html              Menú principal (Home)
├── cts.html                Calculadora de CTS
├── gratificacion.html      Calculadora de Gratificación
├── liquidacion.html        Calculadora de Liquidación (con reporte PDF)
├── sueldoneto.html         Calculadora de Sueldo Neto (ONP/AFP + Renta 5ta)
├── vacaciones.html         Calculadora de Vacaciones (gozadas/truncas)
│
├── nav.css                 Estilos compartidos: navegación, modo oscuro, tooltips,
│                           historial, switch de régimen MYPE, mensajes de error
├── nav.js                  Abrir/cerrar menú lateral
├── historial.js            Historial de cálculos por calculadora (localStorage)
├── theme-toggle.js         Modo oscuro persistente (localStorage)
├── reminder.js             Banner de recordatorio de fechas clave (solo al abrir la app)
├── glosario.js             Tooltips de glosario + mensajes de error amigables
│
├── Gemini_Generated_Image_i91xsci91xsci91x.png   Logo / mascota (usado en todas las páginas)
└── bg-pattern.jpg           Fondo de marca translúcido (usado en las calculadoras)
```

## Funcionalidades por calculadora

- **CTS**: mes comercial de 30 días, sexto de gratificación calculado automáticamente
  (sin el Bono Extraordinario, por norma), descuento por faltas, régimen MYPE
  (Pequeña Empresa, 50%), reporte PDF con nombre/DNI opcionales.
- **Gratificación**: semestres julio/diciembre, Bono Extraordinario (9% EsSalud /
  6.75% EPS), gratificación trunca, régimen MYPE, reporte PDF opcional.
- **Liquidación**: CTS Trunca + Gratificación Trunca + Vacaciones Truncas, descuentos
  AFP/ONP, régimen MYPE, reporte PDF con nombre/DNI.
- **Sueldo Neto**: descuento ONP (13%) o AFP (10% + prima + comisión), retención de
  Impuesto a la Renta de 5ta categoría (UIT 2026 = S/5,500, proyección ×14 sueldos).
- **Vacaciones**: distingue vacaciones gozadas (periodos completos) de truncas
  (periodo en curso), días ya gozados, alerta por periodos vencidos acumulados.

Todas las calculadoras incluyen: modo oscuro, historial local de cálculos,
explicación "¿Cómo se calculó?" paso a paso, glosario con tooltips en los campos
más técnicos, y mensajes de error dentro de la misma página (sin `alert()`).

## Notas importantes

- El **recordatorio de fechas clave** (`reminder.js`) es un aviso que aparece
  *solo si el usuario abre la app* cerca del 15 de mayo/julio/noviembre/diciembre.
  No es una notificación push real (esta app es 100% web/WebView, sin backend ni
  servidor push). Para notificaciones push reales hace falta una app nativa
  (ver el proyecto Expo aparte).
- El reporte PDF usa la librería `jsPDF` vía CDN (`cdnjs.cloudflare.com`), por lo
  que la generación de PDF requiere que el dispositivo tenga conexión a internet
  la primera vez.
- Todos los cálculos son aproximados y están basados en la normativa laboral
  peruana vigente (2026). No reemplazan una asesoría profesional.

## Cómo publicar

1. **GitHub Pages**: sube todos los archivos a un repositorio y activa Pages
   apuntando a la raíz (`/`) de la rama principal.
2. **Website to APK**: comprime todo el contenido de esta carpeta en un `.zip`
   (con `index.html` en la raíz del zip, no dentro de una subcarpeta) y súbelo
   a la plataforma de tu preferencia.
