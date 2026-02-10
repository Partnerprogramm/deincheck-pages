# 🚀 EatOS Workflow-Automatisierung - Komplett implementiert!

## ✅ IMPLEMENTIERTE FEATURES (Stand: 28.10.2024)

### 1. 👤 **Interessenten-Verwaltung** (Admin-Dashboard)
**Datei:** `admin-dashboard.html` - Tab "Neue Anfragen"

#### Features:
- ✅ Übersicht aller Interessenten mit Echtzeit-Stats
- ✅ **Detail-Modal** beim Klick auf einen Interessenten:
  - Alle Formular-Daten (Persönlich, Business, KI-Tools)
  - Notizen-System (hinzufügen & anzeigen)
  - Status-Änderung (neu → kontaktiert → termin_vereinbart → qualifiziert → abgelehnt)
  - **Call vereinbaren** Button
  - **Partner aktivieren** Button (konvertiert Interessent → Partner)
  - **E-Mail senden** Button
  - **Ablehnen** Button mit Grund-Eingabe
  - Termin-Liste mit allen geplanten Calls
  - Zeitstempel (Registriert, Letzte Aktualisierung)

#### Workflow:
```
1. Facebook-Ad → Landing Page → Registrierungsformular
2. Daten landen in Tabelle: "interessenten"
3. Admin sieht Lead im Dashboard (Tab "Neue Anfragen")
4. Klick auf Lead → **Detail-Modal öffnet sich**
5. Admin kann:
   - Notizen hinzufügen
   - Status ändern
   - Call vereinbaren (Calendly/Zoom Link)
   - Partner aktivieren (auto-generiert Login-Daten)
   - E-Mail direkt senden
   - Lead ablehnen mit Grund
```

---

### 2. 📅 **Termin-Management**
**Tabellen:** `termine`, `notizen`

#### Features:
- ✅ Call-Modal mit Formular:
  - Termin-Typ (Erstgespräch, Follow-up, Onboarding, Training)
  - Datum & Uhrzeit Picker
  - Meeting Link (Zoom/Calendly)
  - Notizen zum Termin
- ✅ Automatische Notiz bei Termin-Erstellung
- ✅ Status-Update zu "termin_vereinbart" bei neuem Call
- ✅ Termin-Liste im Detail-Modal
- ✅ Termin-Status: geplant, bestaetigt, abgeschlossen, abgesagt

#### Calendly/Zoom Integration:
```javascript
// Admin trägt Meeting-Link manuell ein (z.B. aus Calendly)
// Alternativ: Calendly API für automatische Termin-Erstellung
// Meeting-Link wird im Modal angezeigt und ist klickbar
```

---

### 3. 📄 **Dokumente-Upload mit Cloudinary**

#### Partner-Seite: `partner-onboarding.html` (Step 2)
- ✅ Upload-Bereich für Ausweis & Gewerbeschein
- ✅ Cloudinary Integration vorbereitet
- ✅ Dokumente werden in Tabelle `dokumente` gespeichert

**Konfiguration:** `cloudinary-config.js`
```javascript
const CLOUDINARY_CONFIG = {
    cloudName: 'YOUR_CLOUD_NAME',
    uploadPreset: 'YOUR_UPLOAD_PRESET',
    uploadUrl: 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload',
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedFormats: ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx']
};
```

#### Admin-Seite: `admin-dashboard.html` - Tab "Dokumente prüfen"
- ✅ Übersicht aller hochgeladenen Dokumente
- ✅ Stats: Hochgeladen, Geprüft, Abgelehnt, Gesamt
- ✅ Dokument-Status:
  - **hochgeladen** (gelb) - Neue Uploads
  - **geprueft** (grün) - Admin hat genehmigt
  - **abgelehnt** (rot) - Admin hat abgelehnt
- ✅ Aktionen:
  - **Genehmigen** Button (mit optionaler Notiz)
  - **Ablehnen** Button (mit Pflicht-Grund)
  - **Ansehen** Link (öffnet Cloudinary URL)
- ✅ Detail-View mit allen Dokument-Infos
- ✅ Filtern nach Status, Partner, Typ

---

### 4. 📝 **Vertrags-Management System**

#### Admin-Seite: `admin-vertraege.html`
**Features:**
- ✅ Vertrag hochladen & versenden:
  - Partner auswählen (mit E-Mail-Autocomplete)
  - Vertragstyp (Partnervertrag, Provision, NDA, Sonstiges)
  - Vertragsname eingeben
  - Admin-Notiz (optional)
  - PDF/DOC Upload mit Cloudinary
  - Automatischer Versand an Partner
- ✅ Verträge-Übersicht:
  - Status-Anzeige (ausstehend, gesendet, unterschrieben, abgelehnt)
  - Partner-Info
  - Erstell- & Unterschriftsdatum
  - Direkt-Link zum Dokument
- ✅ Detail-View beim Klick

#### Partner-Seite: `partner-vertraege.html`
**Features:**
- ✅ **Digitale Unterschrift** mit Canvas:
  - Unterschrift mit Maus/Finger zeichnen
  - Löschen & Neu zeichnen
  - Base64 Speicherung der Unterschrift
  - Touch-Support für Tablets/Smartphones
- ✅ Übersicht aller Verträge:
  - Stats (Ausstehend, Unterschrieben, Gesamt)
  - Status-Badges
  - Erstell- & Unterschriftsdatum
  - "Ansehen" Button
  - "Jetzt unterschreiben" Button (nur bei Status "gesendet")
- ✅ Auto-Update nach Unterschrift:
  - Status → "unterschrieben"
  - Unterschrift-URL gespeichert
  - Unterschrift-Datum gesetzt

#### Workflow:
```
1. Admin: admin-vertraege.html
   - Vertrag hochladen (Cloudinary)
   - Partner auswählen
   - Status: "gesendet"

2. Partner: partner-vertraege.html  
   - Sieht neuen Vertrag (Badge "Ausstehend")
   - Klickt "Ansehen" → PDF öffnet sich
   - Klickt "Jetzt unterschreiben"
   - Unterschreibt im Canvas
   - Klickt "Unterschrift speichern"
   - Status → "unterschrieben"

3. Admin sieht: Status "unterschrieben" + Unterschriftsdatum
```

---

### 5. 🔄 **Partner-Aktivierung (Interessent → Partner)**

#### Funktion: `convertToPartner()` im Admin-Dashboard

**Was passiert:**
```javascript
1. Partner-Account erstellen in Tabelle "partners":
   - E-Mail vom Interessenten
   - Auto-generiertes Passwort (10 Zeichen)
   - Vorname, Nachname, Firma, Phone
   - Modell (ladenlokal, promotion, onlineshop, shopinshop, affiliate)
   - Status: "aktiv"
   - Tarif: "basic"
   - onboarding_completed: false

2. Interessent-Status updaten:
   - anfrage_status → "qualifiziert"
   - partner_id speichern

3. Automatische Notiz erstellen:
   - "Als Partner aktiviert! Partner-ID: xxx"

4. Alert mit Login-Daten für Admin:
   - E-Mail & Passwort anzeigen
   - Admin sendet manuell per E-Mail an Partner
```

---

## 📊 **Datenbank-Tabellen**

### Neue/Aktualisierte Tabellen:

1. **interessenten** (bereits vorhanden)
   - `anfrage_status`: neu, kontaktiert, termin_vereinbart, qualifiziert, abgelehnt
   - `partner_id`: Verknüpfung wenn konvertiert

2. **partners** (bereits vorhanden)
   - Kein `kategorie` Feld mehr! ✅
   - `modell`: ladenlokal, promotion, onlineshop, shopinshop, affiliate

3. **notizen** (NEU)
   - `interessent_id`, `admin_id`, `admin_name`, `notiz`, `erstellt_am`

4. **termine** (NEU/AKTUALISIERT)
   - `interessent_id`, `partner_id`, `termin_typ`, `termin_datum`
   - `meeting_link`, `status`, `notizen`, `erstellt_am`

5. **dokumente** (NEU)
   - `partner_id`, `dokument_typ`, `dateiname`
   - `cloudinary_url`, `cloudinary_id`
   - `status`, `admin_notiz`, `hochgeladen_am`

6. **vertraege** (NEU)
   - `partner_id`, `partner_email`, `vertrag_typ`, `vertragsname`
   - `vertrag_url`, `vertrag_cloudinary_id`
   - `status`, `unterschrift_url`, `unterschrift_datum`
   - `admin_notiz`, `erstellt_am`, `gesendet_am`

---

## 🎯 **Kompletter Workflow: Von Facebook-Ad bis Aktiver Partner**

### SCHRITT 1-3: Lead Generation
```
Facebook-Ad → Landing Page → Registrierungsformular (4-5 Steps)
→ Daten landen in "interessenten" Tabelle
→ Status: "neu"
```

### SCHRITT 4-6: Admin Dashboard
```
Admin öffnet: admin-dashboard.html → Tab "Neue Anfragen"
→ Sieht Lead mit Badge "🆕 Neu"
→ Klickt auf Lead → Detail-Modal öffnet sich
→ Sieht alle Daten: Name, E-Mail, Phone, Modell, Erfahrung, Ziele, etc.
```

### SCHRITT 7-9: Termin & Kontaktierung
```
Admin klickt: "Call vereinbaren"
→ Gibt ein: Datum, Uhrzeit, Calendly/Zoom-Link
→ Status ändert sich automatisch zu: "termin_vereinbart"
→ Automatische Notiz: "Termin vereinbart: Erstgespräch am..."

Admin führt Call durch (extern via Zoom/Calendly)
→ Admin fügt Notiz hinzu: "Call durchgeführt, sehr interessiert!"
→ Status ändern zu: "kontaktiert" oder "qualifiziert"
```

### SCHRITT 10: Partner-Aktivierung
```
Admin klickt: "Partner aktivieren"
→ System erstellt automatisch:
   - Partner-Account in "partners" Tabelle
   - Auto-generiertes Passwort
   - Status: "aktiv"
   - Tarif: "basic"
→ Admin erhält Alert mit Login-Daten
→ Admin sendet E-Mail an Partner mit Zugangsdaten
```

### SCHRITT 11-12: Partner-Onboarding
```
Partner loggt ein: partner-login.html
→ Wird weitergeleitet zu: partner-onboarding.html
→ Step 1: Willkommen
→ Step 2: Dokumente hochladen (Ausweis, Gewerbeschein)
   → Cloudinary Upload
   → Status: "hochgeladen"
→ Step 3: Profil vervollständigen (Telefon, Adresse)
→ Step 4: Fertig! → Weiter zum Dashboard

Admin prüft Dokumente:
→ admin-dashboard.html → Tab "Dokumente prüfen"
→ Klickt "Genehmigen" oder "Ablehnen"
```

### SCHRITT 13: Verträge
```
Admin: admin-vertraege.html
→ Lädt Partnervertrag hoch (PDF)
→ Wählt Partner aus
→ Status: "gesendet"

Partner: partner-vertraege.html
→ Sieht neuen Vertrag
→ Klickt "Jetzt unterschreiben"
→ Unterschreibt digital im Canvas
→ Status: "unterschrieben"
```

### SCHRITT 14: Aktiver Partner
```
Partner nutzt Dashboard: partner-dashboard.html
→ QR-Codes erstellen
→ Provisionen einsehen
→ Kunden tracken
→ Support kontaktieren
```

---

## 🔧 **Noch zu implementieren (Nice-to-Have)**

### E-Mail-Automatisierung
- ✉️ Automatische E-Mail bei neuer Anfrage (Admin-Benachrichtigung)
- ✉️ Willkommens-E-Mail bei Partner-Aktivierung (mit Login-Daten)
- ✉️ E-Mail bei neuem Vertrag (Benachrichtigung an Partner)
- ✉️ E-Mail bei Dokument-Ablehnung (mit Ablehnungsgrund)
- ✉️ Erinnerungs-E-Mail vor geplanten Terminen

### Calendly API Integration
- 📅 Automatische Termin-Erstellung via Calendly API
- 📅 Webhook bei Termin-Bestätigung → Auto-Update Status
- 📅 Sync mit Kalender-Tab im Admin-Dashboard

### Dokumente OCR/AI-Prüfung
- 🤖 Automatische Ausweis-Prüfung (Text-Extraktion)
- 🤖 Gewerbeschein-Validierung
- 🤖 Warnung bei ungültigen/abgelaufenen Dokumenten

---

## 📁 **Datei-Übersicht**

### Admin-Seiten:
- `admin-dashboard.html` - Hauptseite (Interessenten, Dokumente, Provisionen, etc.)
- `admin-vertraege.html` - Verträge hochladen & verwalten
- `admin-partner.html` - Partner-Übersicht
- `admin-chat.html` - Support-Chat
- `admin-kalender.html` - Termin-Kalender

### Partner-Seiten:
- `partner-dashboard.html` - Haupt-Dashboard
- `partner-onboarding.html` - Onboarding (4 Steps mit Dokument-Upload)
- `partner-vertraege.html` - Verträge einsehen & unterschreiben
- `partner-provisionen.html` - Provisionen-Übersicht
- `partner-empfehlungen.html` - Referral-System

### Config/Helper:
- `cloudinary-config.js` - Cloudinary Upload-Konfiguration

### Dokumentation:
- `README.md` - Projekt-Übersicht
- `PROJEKT-STATUS.md` - Detaillierter Status
- `PARTNER-ABLAUF.md` - 13-Schritt Workflow
- `WORKFLOW-SYSTEM.md` - Diese Datei

---

## 🚀 **Setup-Schritte für Production**

### 1. Cloudinary Account einrichten
```
1. Registrieren auf https://cloudinary.com (kostenlos)
2. Settings → Upload → "Unsigned uploading" aktivieren
3. Upload Preset erstellen: "eatos_documents"
4. In cloudinary-config.js eintragen:
   - cloudName: 'dein-cloud-name'
   - uploadPreset: 'eatos_documents'
```

### 2. E-Mail Service (Optional)
```
Empfehlung: SendGrid, Mailgun, AWS SES
- API-Key holen
- E-Mail-Templates erstellen
- Webhook für Termin-Bestätigungen
```

### 3. Calendly Integration (Optional)
```
1. Calendly Account erstellen
2. API-Key holen
3. Event-Type festlegen
4. In Code integrieren
```

### 4. CSV-Import durchführen
```
1. Datei: import-affiliates.html öffnen
2. CSV-Datei: affiliates.csv auswählen (299 Partner)
3. Import starten → Alle Partner werden angelegt
```

---

## ✅ **FERTIG!**

Alle Basis-Funktionen für den Partner-Workflow sind **vollständig implementiert** und funktionsfähig:

- ✅ Interessenten-Verwaltung mit Detail-Modal
- ✅ Notizen-System
- ✅ Termin-Management
- ✅ Partner-Aktivierung
- ✅ Dokumente-Upload mit Cloudinary
- ✅ Dokumente-Prüfung (Admin)
- ✅ Vertrags-Management
- ✅ Digitale Unterschrift
- ✅ Kompletter Workflow von Lead bis Aktiver Partner

**Nächste Schritte:** E-Mail-Automatisierung & Calendly API für vollständige Automation! 🚀
