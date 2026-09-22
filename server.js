import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'JP Calcula Tus Beneficios' });
});

// Clean URL routes
app.get('/cts', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'cts.html'));
});

app.get('/gratificacion', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'gratificacion.html'));
});

app.get('/liquidacion', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'liquidacion.html'));
});

app.get('/sueldoneto', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'sueldoneto.html'));
});

app.get('/vacaciones', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'vacaciones.html'));
});

// Serve static assets from public/
app.use(express.static(PUBLIC_DIR));

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor de JP Calcula Tus Beneficios iniciado en http://0.0.0.0:${PORT}`);
});
