# 🎪 Festival App

Een Progressive Web App (PWA) voor een festivalprogramma, gebouwd met vanilla HTML, CSS en JavaScript.

## 🚀 Tech Stack

| Laag | Technologie |
|------|-------------|
| **Frontend** | HTML, CSS (custom properties), Vanilla JavaScript |
| **Kaart** | Leaflet.js |
| **Backend** | PHP |
| **Database** | MySQL |
| **PWA** | manifest.json + Service Worker |
| **Ontwikkelomgeving** | XAMPP |

## 📁 Projectstructuur

```
Festival-App-8.1/
├── index.html          # Hoofdpagina
├── manifest.json       # PWA configuratie
├── sw.js               # Service Worker (offline caching)
├── AI_Prompts.md       # Overzicht van gebruikte AI-prompts
├── css/
│   └── style.css       # Design system met dark/light mode
├── js/
│   └── app.js          # App logica (kaart, taalwissel, navigatie)
├── api/
│   └── db.php          # MySQL database connectie
├── assets/
│   └── icons/          # PWA iconen (192px, 512px)
└── docs/
    ├── tech stack (1).pdf
    ├── vragen 8.1.pdf
    └── Wat is een PWA.pdf
```

## ⚙️ Installatie

1. Zorg dat **XAMPP** draait (Apache + MySQL)
2. Plaats dit project in `htdocs/Festival-App-8.1/`
3. Open `http://localhost/Festival-App-8.1/` in de browser

## ✨ Features

- 📅 **Programmering** – Bekijk het schema per dag en podium
- 🎤 **Artiesten** – Ontdek alle artiesten met beschrijving
- 🗺️ **Interactieve kaart** – Leaflet.js met GPS-locatie
- 🌙 **Dark/Light mode** – Toggle met opslag in localStorage
- 🌐 **Tweetalig** – Nederlands / Engels met één klik
- 📱 **Installeerbaar** – PWA via QR-code of browser
- 📶 **Offline** – Service Worker cachet de app

## 📄 Licentie

MIT License – zie [LICENSE](LICENSE)