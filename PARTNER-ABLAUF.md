# 🎯 KOMPLETTER PARTNER-ABLAUF - Von Facebook bis Aktiv

## 📱 SCHRITT 1: Facebook-Kampagne
**WO:** Facebook/Instagram/TikTok Ads

**Partner sieht:**
- 🎯 "Werde Partner bei DeinCheck!"
- 💰 "Bis zu 1.000€ pro Auftrag verdienen"
- 🚀 "Ohne Eigenkapital starten"

**Call-to-Action:**
```
👉 [JETZT PARTNER WERDEN] Button
```

---

## 🌐 SCHRITT 2: Landing Page (index.html)
**URL:** `www.deincheck-partner.de`

**Partner landet auf:**
- Hero-Section mit Übersicht
- 5 Partner-Modelle vorgestellt
- Statistiken (300+ Partner, 1.000€ Provision, etc.)
- VoiceMind AI Features

**Partner klickt:**
```
[Partner werden] Button → Scrollt zum Formular
```

---

## 📝 SCHRITT 3: Registrierungs-Formular
**4-Step Formular:**

### **Step 1: Grunddaten**
- Modell wählen (Ladenlokal/Promotion/Online Shop/Shop-in-Shop/Affiliate)
- Name, Email, Telefon, Adresse
- Passwort wählen (!)
- Status (Privatperson/Mobilfunkshop/Website-Betreiber)

### **Step 2: Erfahrung & Interessen**
- Erfahrung im Verkauf?
- Interessen (Mobilfunk/DSL/Strom/Versicherung/KI)
- Geplante Verträge/Monat
- Verkaufskanal

### **Step 3: Standort & Finanzierung**
- Standort vorhanden? (bei Ladenlokal/Promotion)
- Eigenkapital vorhanden?
- Finanzielle Unterstützung benötigt?
- Ziele & Wünsche

### **Step 4: Website-Details** (nur Online Shop)
- Art der Seite (Landingpage/Shop/Vergleichsportal)
- Seitenaufbau (1 Seite/mehrere Seiten)
- Texte/Bilder vorhanden?
- Zielgruppe
- Design-Wünsche

### **Step 5: KI-Tools & Absenden**
- System-Automatisierungen auswählen
- KI-Tools (optional): VoiceMind/Chat-KI/E-Mail-KI
- Datenschutz akzeptieren
- ✅ **ABSENDEN**

---

## 💾 SCHRITT 4: Was passiert im System?

### **4.1 Datenbank-Eintrag**
```javascript
// 1. Interessent wird gespeichert
tables/interessenten → {
  modell, vorname, nachname, email, phone,
  erfahrung, interessen, ziele,
  anfrage_status: "neu",
  eingegangen_am: jetzt
}

// 2. Partner wird automatisch angelegt
tables/partners → {
  email, passwort (gewählt!),
  vorname, nachname, firma, phone,
  modell, status: "neu",
  tarif: (basic/standard/premium),
  onboarding_completed: false,
  registriert_am: jetzt
}
```

### **4.2 Partner sieht**
```
✅ "Registrierung erfolgreich!"

🔐 Deine Login-Daten:
E-Mail: max@beispiel.de
Passwort: Das von dir gewählte Passwort

Du kannst dich jetzt einloggen!
Wir melden uns innerhalb von 24 Stunden für einen persönlichen Call.
```

---

## 🎯 SCHRITT 5: Admin sieht neue Anfrage

### **Admin Dashboard (`admin-dashboard.html`)**

**Neue Anfragen Sektion:**
```
🔴 NEUE ANFRAGEN (1)

┌─────────────────────────────────────────┐
│ 📋 Max Mustermann                       │
│ 📧 max@beispiel.de                      │
│ 📱 0171 1234567                         │
│ 🏪 Modell: Ladenlokal                   │
│ 📅 Registriert: vor 2 Minuten           │
│                                         │
│ [Details ansehen] [Call vereinbaren]   │
└─────────────────────────────────────────┘
```

**Admin klickt: [Details ansehen]**

---

## 👤 SCHRITT 6: Interessenten-Detail-Seite
**NEUE SEITE:** `admin-interessent-details.html?id=xxx`

### **Anzeige aller Daten:**

```
👤 Max Mustermann
📧 max@beispiel.de
📱 0171 1234567
🏪 Modell: Ladenlokal
📍 Musterstraße 123, 12345 Berlin

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 ERFAHRUNG & INTERESSEN
✓ Erfahrung: Ja, im Verkauf
✓ Interessen: Mobilfunk, DSL, Strom
✓ Geplante Verträge: 16-30/Monat
✓ Verkaufskanal: Ladengeschäft

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 FINANZIERUNG
✓ Standort: Ja, vorhanden
✓ Eigenkapital: Nein
✓ Unterstützung: Möbel, Kaution, Ausstattung

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 ZIELE
"Ich möchte meinen eigenen Mobilfunk-Shop 
eröffnen und suche Unterstützung bei..."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤖 KI-TOOLS
✓ Automatische System-Updates
✓ Lead-Management System
✓ Automatische Berichte
+ VoiceMind Anruf-KI (optional)
+ Chat-KI für Website (optional)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 ADMIN-NOTIZEN
[Notizen hinzufügen...]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚙️ AKTIONEN
Status: [Neu ▼] → Kontaktiert/Qualifiziert/Abgelehnt

[📞 Call vereinbaren]  [📧 E-Mail senden]
[✅ In Partner umwandeln]  [🗑️ Ablehnen]
```

---

## 📞 SCHRITT 7: Call vereinbaren (AUTOMATISCH)

### **Option A: Calendly-Integration** (EMPFOHLEN)
```javascript
Admin klickt: [Call vereinbaren]

→ Öffnet Calendly-Link:
   calendly.com/deincheck/partner-call?email=max@beispiel.de

Partner bekommt automatisch:
✉️ E-Mail mit Calendly-Link
📅 Kann selbst Termin wählen
🔗 Zoom-Link wird automatisch erstellt
```

**Partner wählt Termin:**
```
Verfügbare Termine:
○ Morgen, 10:00 Uhr
○ Morgen, 14:00 Uhr  ← wählt diesen
○ Übermorgen, 11:00 Uhr
```

**System speichert automatisch:**
```javascript
tables/termine → {
  partner_email: "max@beispiel.de",
  titel: "Partner-Erstgespräch",
  datum: "2025-01-29 14:00",
  status: "bestätigt",
  zoom_link: "zoom.us/j/xxx",
  calendly_event_id: "xxx"
}
```

**Partner & Admin bekommen:**
- ✉️ Bestätigungs-E-Mail
- 📅 Kalender-Einladung (.ics)
- 🔗 Zoom-Link
- ⏰ Erinnerung 1h vorher

---

### **Option B: Manuell über Admin-Kalender**
```javascript
Admin klickt: [Call vereinbaren]
→ Öffnet: admin-kalender.html
→ Admin trägt Termin manuell ein
→ Partner bekommt E-Mail
```

---

## 🎥 SCHRITT 8: Call findet statt

### **Zoom-Meeting:**
```
Admin & Partner im Call
├─ Admin erklärt Ablauf
├─ Prüft Eignung
├─ Klärt offene Fragen
└─ Nächste Schritte besprechen
```

### **Nach Call - Admin aktualisiert:**
```
Status: Neu → Qualifiziert
Notizen: "Sehr motiviert, Standort OK, 
          startet in 2 Wochen"
```

---

## ✅ SCHRITT 9: Partner wird aktiviert

### **Admin klickt: [✅ In Partner umwandeln]**

**System macht automatisch:**
```javascript
1. Status in partners-Tabelle → "aktiv"
2. E-Mail an Partner:
   ✉️ "Willkommen! Du bist jetzt aktiv"
   🔑 Login-Daten (nochmal)
   📚 Link zum Onboarding
   📄 Verträge zum Download

3. Admin-Dashboard:
   ✅ Interessent verschwindet aus "Neue Anfragen"
   ✅ Partner erscheint in "Partner-Verwaltung"
```

---

## 🎓 SCHRITT 10: Partner-Onboarding

### **Partner loggt sich ein:**
**URL:** `partner-login.html`
```
Email: max@beispiel.de
Passwort: ••••••••
[Anmelden]
```

### **Wird weitergeleitet zu:**
**URL:** `partner-onboarding.html`

**4 Steps:**

#### **Step 1: Willkommen**
```
Willkommen, Max! 🎉

Lass uns gemeinsam dein Konto einrichten.

Was dich erwartet:
✓ Dokumente hochladen
✓ Profil vervollständigen
✓ Dashboard erkunden

[Los geht's!]
```

#### **Step 2: Dokumente hochladen**
```
📄 Dokumente hochladen

Bitte lade folgende Dokumente hoch:

1. Personalausweis / Reisepass *
   [Datei wählen] oder [Drag & Drop]
   
2. Gewerbeschein (falls vorhanden)
   [Datei wählen]

Hochgeladene Dateien:
✅ Personalausweis.pdf (1.2 MB)

[Weiter →]
```

**System speichert:**
```javascript
// Cloudinary Upload
→ Datei wird hochgeladen
→ URL wird gespeichert

tables/dokumente → {
  partner_email: "max@beispiel.de",
  typ: "ausweis",
  datei_url: "cloudinary.com/xxx.pdf",
  status: "hochgeladen",
  upload_datum: jetzt
}

// Admin bekommt Benachrichtigung
🔔 "Neue Dokumente zur Prüfung"
```

#### **Step 3: Profil vervollständigen**
```
📋 Profil vervollständigen

Telefonnummer: [0171 1234567]
Adresse: [Musterstraße 123]
PLZ / Ort: [12345] [Berlin]
Wie hast du von uns erfahren? [Google Suche ▼]

[← Zurück]  [Weiter →]
```

#### **Step 4: Fertig!**
```
🎉 Alles erledigt!

Dein Konto ist jetzt eingerichtet.

Was du jetzt tun kannst:
✓ Provisionen verfolgen
✓ Verträge hochladen
✓ Support nutzen
✓ Partner-Tool nutzen

[Zum Dashboard →]
```

**System aktualisiert:**
```javascript
tables/partners → {
  onboarding_completed: true,
  status: "aktiv"
}
```

---

## 📄 SCHRITT 11: Verträge

### **Admin sendet Vertrag:**
**Admin-Seite:** `admin-vertraege.html`

```
Neuer Vertrag für: Max Mustermann

Vertragstyp: [Partner-Vertrag Ladenlokal ▼]
Vertrag hochladen: [Datei wählen]
Gültig bis: [31.12.2025]

[Vertrag senden]
```

**System macht:**
```javascript
tables/vertraege → {
  partner_email: "max@beispiel.de",
  vertragstyp: "ladenlokal",
  datei_url: "cloudinary.com/vertrag.pdf",
  status: "ausstehend",
  gesendet_am: jetzt
}

// E-Mail an Partner
✉️ "Dein Vertrag ist da!"
📎 Vertrag.pdf
📝 "Bitte unterschreiben und hochladen"
```

### **Partner unterschreibt:**
**Partner-Seite:** `partner-vertraege.html`

```
📄 Meine Verträge

┌─────────────────────────────────────┐
│ Partner-Vertrag Ladenlokal          │
│ Status: ⏳ Ausstehend                │
│ Gesendet: 29.01.2025                │
│                                     │
│ [📥 Herunterladen] [✍️ Unterschreiben]│
└─────────────────────────────────────┘
```

**Partner klickt: [✍️ Unterschreiben]**

**Option A: Digital signieren**
```
→ Öffnet DocuSign/HelloSign
→ Partner unterschreibt digital
→ Wird automatisch gespeichert
```

**Option B: PDF hochladen**
```
→ Partner lädt unterschriebenen Vertrag hoch
→ Admin prüft manuell
```

**System aktualisiert:**
```javascript
tables/vertraege → {
  status: "unterschrieben",
  unterschrieben_am: jetzt,
  unterschrift_url: "cloudinary.com/xxx-signed.pdf"
}

// Admin bekommt Benachrichtigung
🔔 "Vertrag unterschrieben: Max Mustermann"
```

---

## 🚀 SCHRITT 12: Partner ist AKTIV!

### **Admin prüft Vertrag:**
```
Status: unterschrieben → genehmigt
```

### **Partner bekommt Zugriff auf:**

#### **1. Dashboard** (`partner-dashboard.html`)
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 DEIN DASHBOARD

💰 Provisionen diesen Monat: 0€
📋 Offene Verträge: 0
📅 Nächster Termin: Schulung (05.02.)
🎯 Bonus-Fortschritt: 0/10 Verkäufe

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

#### **2. Provisionen** (`partner-provisionen.html`)
```
Provision pro Vertrag: 1.000€ (Ladenlokal)
Aktuelle Staffel: 🥉 Bronze (30%)
Nächste Staffel: 🥈 Silber (bei 2.000€)
```

#### **3. Akademie** (`partner-akademie.html`)
```
📚 Schulungen:
○ Mobilfunk Grundlagen (0%)
○ Verkaufstechniken (0%)
○ VoiceMind KI nutzen (0%)
```

#### **4. Empfehlungen** (`partner-empfehlungen.html`)
```
🎁 Dein Referral-Link:
deincheck.de/ref/MAXMUST123

Empfohlene Partner: 0
Verdiente Provision: 0€
```

#### **5. Support** (Floating Widget)
```
💬 Chat mit Admin
🎫 Tickets erstellen
📞 Termin buchen
```

---

## 📊 SCHRITT 13: Erster Verkauf!

### **Partner macht ersten Vertrag:**

**Partner-Seite:** Verträge hochladen (TODO)
```
Neuer Vertrag hochladen:

Kunde: [Max Kunde]
Produkt: [Mobilfunk-Vertrag ▼]
Anbieter: [Vodafone ▼]
Provision: [300€]
Vertragsdatum: [29.01.2025]

[Vertrag hochladen]
```

**System speichert:**
```javascript
tables/umsaetze → {
  partner_email: "max@beispiel.de",
  kunde_name: "Max Kunde",
  produkt: "Mobilfunk-Vertrag",
  betrag: 300,
  provision_prozent: 30,
  provision_betrag: 90,
  status: "ausstehend"
}
```

**Admin prüft & genehmigt:**
```
Status: ausstehend → genehmigt
```

**Partner sieht:**
```
💰 Provisionen: 90€ (+90€)
📈 Fortschritt: 1/10 Verkäufe bis Bonus
```

---

## 🎯 ZUSAMMENFASSUNG - DER GANZE FLOW:

```
1. Facebook Ad
   ↓
2. Landing Page (index.html)
   ↓
3. Formular ausfüllen (4 Steps)
   ↓
4. System speichert:
   - Interessent in DB
   - Partner-Account erstellt
   ↓
5. Admin sieht: Neue Anfrage
   ↓
6. Admin klickt: Details ansehen
   ↓
7. Admin klickt: Call vereinbaren
   ↓ 
8. Calendly-Link → Partner wählt Termin
   ↓
9. Call findet statt (Zoom)
   ↓
10. Admin aktiviert Partner
    ↓
11. Partner bekommt E-Mail mit Login
    ↓
12. Partner loggt ein → Onboarding
    ↓
13. Step 1: Willkommen
    Step 2: Dokumente hochladen
    Step 3: Profil vervollständigen
    Step 4: Fertig!
    ↓
14. Admin sendet Vertrag
    ↓
15. Partner unterschreibt
    ↓
16. Admin genehmigt
    ↓
17. Partner ist AKTIV! 🚀
    ↓
18. Partner nutzt Dashboard
    ↓
19. Partner macht Verkäufe
    ↓
20. Admin rechnet ab & zahlt aus
```

---

## 🔧 WAS FEHLT NOCH TECHNISCH:

### ⚠️ MUSS GEBAUT WERDEN:

1. ✅ **Interessenten-Detail-Seite**
   - Alle Formular-Daten anzeigen
   - Notizen hinzufügen
   - Status ändern
   - Call vereinbaren Button
   - In Partner umwandeln

2. ✅ **Dokumente-Upload (Cloudinary)**
   - In Onboarding Step 2
   - Partner lädt hoch
   - Admin sieht & prüft

3. ✅ **Vertrags-Management**
   - `admin-vertraege.html` - Admin sendet Vertrag
   - `partner-vertraege.html` - Partner sieht/unterschreibt
   - Status-Tracking

4. ✅ **Calendly-Integration**
   - Button "Call vereinbaren"
   - Öffnet Calendly
   - Termin wird automatisch gespeichert
   - E-Mail-Benachrichtigungen

5. ✅ **Vertrags-Upload für Partner**
   - Partner lädt abgeschlossene Verträge hoch
   - Admin prüft & genehmigt
   - Provisionen werden berechnet

---

## 💡 EMPFEHLUNG:

**HEUTE bauen:**
1. Interessenten-Detail-Seite (2h)
2. Dokumente-Upload mit Cloudinary (1h)
3. Vertrags-Management Basic (2h)

**MORGEN bauen:**
4. Calendly-Integration (1h)
5. Vertrags-Upload für Partner (2h)
6. Testing (2h)

**DANN:** Launch! 🚀

**Sollen wir starten?**
