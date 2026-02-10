# Partner-Shop Platform & VertragsHero

## 🎯 Projekt-Übersicht

Dieses Projekt ist eine umfassende Partner-Plattform für Mobilfunk-, DSL- und Energievermittlung mit einem vollständig funktionalen Partner-Shop "VertragsHero".

---

## ✅ Aktuell implementierte Features

### 1. VertragsHero Partner-Shop (`partner-shops/vertragshero/index.html`)

**Design (NEU ÜBERARBEITET - Februar 2026):**
- ✅ Apple-inspiriertes, minimalistisches Design
- ✅ **Modernere, rundere Kästchen** (border-radius: 32-42px)
- ✅ **Weichere Schatten** mit sanften Übergängen
- ✅ Gold-Farbschema mit Premium-Look
- ✅ Glasmorphism-Header mit Blur-Effekt
- ✅ Mobile-optimiert (Responsive Design)
- ✅ Announcement-Bar mit aktuellen Angeboten
- ✅ Trust-Bar mit Vertrauensindikatoren
- ✅ **Featured Products Section** mit 3 Top-Empfehlungen
- ✅ **Highlight-Banner** für hohe Provisionen

**Kategorien & Produkte:**

#### 🔹 Handy + Tarif (1&1 Bundles) - 17 Geräte
- **Apple:** iPhone 17 Pro Max, iPhone 17 Pro, iPhone 17, iPhone Air, iPhone 16e, iPhone 16, iPhone 15
- **Samsung:** Galaxy Z Fold7, Galaxy S25 Ultra, Galaxy Z Flip7, Galaxy S25 FE, Galaxy A56
- **Google:** Pixel 10 Pro Fold, Pixel 10 Pro, Pixel 9a
- **Xiaomi:** REDMI Note 15 Pro+, REDMI Note 15 Pro, REDMI Note 15
- Alle mit 1&1 All-Net-Flat (30-120 GB, 5G)

#### 🔹 SIM-Only Tarife (ALLE ANBIETER) - 30 Tarife
Mit **"Handy dazu buchen"** Option für Freenet, O2, Ay Yildiz!

| Anbieter | Netz | Tarife | Provision |
|----------|------|--------|-----------|
| O2 Direkt | O2 | 6 Tarife | 15-40€ |
| Freenet O2 | O2 | 5 Tarife | 95-335€ |
| Freenet Telekom | Telekom | 7 Tarife | 175-425€ |
| Freenet Vodafone | Vodafone | 5 Tarife | 260-420€ |
| 1&1 | 1&1 | 4 Tarife | 50-125€ |
| Ay Yildiz | O2 | 3 Tarife | 45-65€ |

#### 🔹 DSL & Internet - 6 Tarife
- DSL 50/100/250 Mbit/s (ab 16,98€)
- Glasfaser 300/600/1.000 Mbit/s (bis 1 Gbit/s!)

#### 🔹 Strom & Gas - 3 Tarife
- Strom Privat, Strom Gewerbe, Gas Privat

**Innovative Filter (NEU):**
- ✅ **Quick-Filter-Bar** mit einem Klick:
  - Alle Tarife
  - Günstig bis 20€
  - Unlimited
  - Hohe Provision
  - Telekom Netz
- ✅ **Netz-Filter** mit visuellen Icons (Telekom/Vodafone/O2/1&1)
- ✅ **Datenvolumen-Filter** mit Emojis
- ✅ **Preis-Filter** mit Farbcodes
- ✅ **Ergebnis-Counter** ("30 Tarife gefunden")
- ✅ **Filter zurücksetzen** Button

**Handy dazu buchen (für SIM-Only):**
- ✅ Modernes Modal mit Hover-Effekten
- ✅ Auswahl aus 8 Smartphones:
  - iPhone 17 Pro (+59€)
  - iPhone 17 (+44,50€)
  - iPhone 16e (+27,50€)
  - Galaxy S25 Ultra (+55,50€)
  - Galaxy Z Flip7 (+42,50€)
  - Pixel 10 Pro (+39,50€)
  - REDMI Note 15 Pro+ (+19,50€)
  - Kein Handy (0€)
- ✅ Live-Preisberechnung

**Checkout-System:**
- ✅ 3-Schritt-Checkout (Warenkorb → Daten → Bestätigung)
- ✅ Cross-Sell-Optionen:
  - Handyversicherung (+5,99€/Monat)
  - Partnerkarte (+9,99€/Monat)
  - Auslandsoption (+4,99€/Monat)
  - Cloud-Speicher (+2,99€/Monat)
- ✅ Live-Preisberechnung
- ✅ Formular-Validierung
- ✅ Bestellnummer-Generierung

**Rechtliches:**
- ✅ Impressum (§5 TMG)
- ✅ Datenschutzerklärung (DSGVO)
- ✅ AGB
- ✅ Widerrufsbelehrung

**Chat-Widget:**
- ✅ WhatsApp-Style Chat-Button
- ✅ Kontaktformular ohne Telefonnummer
- ✅ Nachricht wird in Datenbank gespeichert

---

## 📍 Zugriffspfade

| Seite | Pfad |
|-------|------|
| VertragsHero Hauptseite | `partner-shops/vertragshero/index.html` |
| Handy + Tarif | `#page-handy` (1&1 Bundles) |
| SIM-Only | `#page-tarife` (alle Anbieter + Handy dazu) |
| DSL & Internet | `#page-dsl` |
| Strom & Gas | `#page-strom` |
| Impressum | `#page-impressum` |
| Datenschutz | `#page-datenschutz` |
| AGB | `#page-agb` |
| Widerruf | `#page-widerruf` |

---

## 🗄️ Datenfluss & Speicherung

### Bestellungen
```
Kunde → VertragsHero → Tabelle: partner_bestellungen
                           ↓
              Admin-Dashboard (alle Bestellungen)
                           ↓
              Partner-Dashboard (nur eigene)
```

### Bestellungs-Datenstruktur
```javascript
{
  partner_id: 'andiaziri',
  partner_email: 'andiaziri@hotmail.com',
  partner_name: 'Andi Aziri',
  shop_name: 'VertragsHero',
  bestellnummer: 'VH-XXXXXXXXX',
  tarif_id: 'ip16e',
  tarif_name: 'iPhone 16e',
  tarif_kategorie: 'handy',
  tarif_preis: 19.50,
  extras: '["versicherung"]',
  // Kundendaten...
}
```

---

## 🎨 Design-System

### CSS Variables
```css
:root {
  --gold: #B8860B;
  --gold-light: #D4A528;
  --gold-dark: #8B6914;
  --radius-sm: 16px;
  --radius-md: 24px;
  --radius-lg: 32px;
  --radius-xl: 42px;
  --radius-pill: 100px;
  --shadow-sm: 0 4px 16px rgba(0,0,0,0.04);
  --shadow-md: 0 8px 32px rgba(0,0,0,0.08);
  --shadow-lg: 0 16px 48px rgba(0,0,0,0.12);
  --shadow-gold: 0 12px 32px rgba(184,134,11,0.25);
}
```

### Netz-Farben
- **Telekom:** #e20074
- **Vodafone:** #e60000
- **O2:** #0066cc
- **1&1:** #1e3264
- **Freenet:** #00a651
- **Ay Yildiz:** #e30613

---

## 🔧 Noch zu erledigen

1. **Echte Produktbilder** statt Icons für Smartphones
2. **Speicher-/Farbauswahl** direkt in Produktkarten
3. **Firmenadresse** im Impressum ergänzen
4. **Logo-Datei** unter `images/logo.png` hochladen
5. **Test-Bestellung** durchführen und im Dashboard prüfen

---

## 📱 Partner-Konfiguration

```javascript
const PARTNER = {
  id: 'andiaziri',
  email: 'andiaziri@hotmail.com',
  name: 'Andi Aziri',
  shop: 'VertragsHero'
};
```

---

## 📅 Letzte Aktualisierung

**Februar 2026**
- ✅ Modernisiertes Design (rundere Ecken, weichere Schatten)
- ✅ Featured Products Section auf Hauptseite
- ✅ Innovative SIM-Only Filter (Netz, Quick-Filter, Counter)
- ✅ Verbessertes Handy-dazu-buchen Modal
- ✅ Highlight-Banner für hohe Provisionen
- ✅ Alle Tarife aus Partner-Tool integriert
