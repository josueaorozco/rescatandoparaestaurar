# 🌿 Fundación Rescatando para Restaurar

Sitio web oficial de la Fundación Rescatando para Restaurar
*"Una nueva vida puede ser posible"*

---

## 🚀 Cómo correr el proyecto

```bash
npm install
npm run dev
```

Se abre en http://localhost:3000

Para compilar para producción:
```bash
npm run build
```
Genera la carpeta `dist/` lista para subir.

---

## 📝 Cómo cambiar tus datos (sin saber programar)

### ✏️ WhatsApp, redes sociales, email, dirección
Abre **`src/config.js`** — ahí está TODO lo que necesitas cambiar. Es el único archivo de configuración:

```js
whatsapp: "573001234567",  // ⚠️ tu número sin espacios
email: "contacto@...",
// etc...
```

### 🖼️ Imágenes

**Logo:** ya está en `public/images/logo.png` (es el que me enviaste). Si quieres otro, reemplaza el archivo manteniendo el nombre.

**QR de donación:** coloca tu QR como `public/images/qr-donacion.png`. Luego en `src/components/DonationSection.jsx` busca el bloque `<div className="qr-placeholder">` y reemplázalo por:
```jsx
<img src={SITE_CONFIG.donacion.qrImage} alt="QR de donación" style={{width:'100%',height:'auto'}} />
```

**Fotos de actividades:** dos opciones:
- Sube tus fotos a `public/images/` y cambia las URLs en los archivos `Hero.jsx`, `AboutSection.jsx`, `ActivitiesPreview.jsx`, `Activities.jsx`. Por ejemplo: `/images/mi-foto.jpg`
- O usa servicios como Imgur, Cloudinary y pega las URLs.

Las URLs de Unsplash que están ahora son de muestra — funcionan pero querrás reemplazarlas con tus fotos reales.

### 🎬 Videos
Busca en `ActivitiesPreview.jsx` y `Activities.jsx` los `<iframe src="https://www.youtube.com/embed/...">` y reemplaza por las URLs embed de tus videos reales de YouTube.

Para obtener el URL embed: en YouTube → Compartir → Insertar → copia el `src` del iframe.

### 📜 Textos
- **Hero:** `src/components/Hero.jsx`
- **Quiénes somos (home):** `src/components/AboutSection.jsx`
- **Página Nosotros:** `src/pages/About.jsx`
- **Testimonios:** `src/components/Testimonials.jsx` (array `testimonios`)
- **Pop-up de apertura:** `src/components/OpeningModal.jsx`

### 🎨 Colores
En `src/styles/global.css` están las variables al inicio. Cambia los valores hex.

---

## 🌐 Cómo publicar la web gratis

### Vercel (recomendado, lo más fácil)
1. Crea cuenta en https://vercel.com
2. Click "Add New Project"
3. Conecta con GitHub (subiendo el proyecto) o sube el ZIP directamente
4. Vercel detecta Vite y configura todo
5. En 2 minutos: URL pública lista

### Netlify
1. `npm run build` en tu terminal
2. Ve a https://app.netlify.com/drop
3. Arrastra la carpeta `dist/`

---

## 📁 Estructura

```
rescatando-para-restaurar/
├── public/
│   └── images/          ← Logo, QR, tus fotos
├── src/
│   ├── components/      ← Navbar, Hero, Modal, etc.
│   ├── pages/           ← Home, About, Activities, Contact
│   ├── styles/global.css ← Colores y estilos globales
│   ├── config.js        ← 📝 Configuración del sitio
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

---

## ❓ FAQ

**¿El pop-up sale cada vez?**
No, solo una vez por sesión (hasta que cierres el navegador).

**¿Cómo desactivo el pop-up?**
En `src/App.jsx` borra la línea `{showModal && <OpeningModal ... />}`.

**Datos ya integrados:** logo oficial, fotos reales, QR de Bancolombia/Bre-B, WhatsApp, email, dirección (Aguachica), cuenta bancaria, Facebook, y pop-up de apertura (12-13 junio).

**Pendientes por agregar:** links de videos de YouTube, testimonios reales, estadísticas reales, y los estatutos.

**¿El formulario envía emails?**
No. Hoy abre WhatsApp con el mensaje precargado (es lo más simple y funciona ya). Si quieres email real, integra Formspree, EmailJS o tu backend en `Contact.jsx`.

---

💚 *"Una nueva vida puede ser posible"*
