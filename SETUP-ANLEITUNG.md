# 🚀 Setup & Testing Anleitung

## 📋 Inhaltsverzeichnis
1. [Schnellstart - Sofort testen](#schnellstart)
2. [Schnittstellen einrichten](#schnittstellen)
3. [Inhalte anpassen](#inhalte-anpassen)
4. [Komplett-Test durchführen](#komplett-test)

---

## ⚡ Schnellstart - Sofort testen

### **Was JETZT schon funktioniert (ohne Setup):**

```
✅ Partner-Login (demo@partner.de)
✅ Partner-Dashboard
✅ Partner-Akademie (4 Module mit Demo-Content)
✅ Admin-Dashboard
✅ Onboarding-Wizard
```

### **1. Demo-Login testen**

```
Datei öffnen: partner-login.html

Login-Daten:
E-Mail: demo@partner.de
Passwort: Nicht benötigt (E-Mail reicht)

Schnell-Login:
Drücke: Strg + Shift + D
```

**Was du siehst:**
- Dashboard mit Projekt-Countdown
- Provisionen (€405,50 Demo-Daten)
- Provisions-Chart
- Dokumente
- Akademie-Widget

---

### **2. Akademie testen**

```
Option A: Direkt öffnen
Datei: partner-akademie.html

Option B: Vom Dashboard
partner-login.html → "Zur Akademie" Button
```

**Was du testen kannst:**
1. Klicke auf "Mobilfunk-Experte"
2. Gehe durch die 5 Lektionen
3. Mache das Quiz (mind. 80% richtig)
4. **Bekomme Zertifikat!** 🏆

---

### **3. Admin-Dashboard testen**

```
Datei öffnen: admin-dashboard.html
```

**Was du machen kannst:**
1. **Tab 1: Provisionen eintragen**
   - Partner: demo@partner.de
   - Betrag: 200
   - Typ: Mobilfunk
   - Tarif: O2 Mobile L
   - Status: Ausgezahlt
   - **Speichern → Sofort im Partner-Dashboard sichtbar!**

2. **Tab 2: Partner-Übersicht**
   - Sieh alle Partner
   - Statistiken

3. **Tab 3: Projekte verwalten**
   - Partner: demo@partner.de
   - Fortschritt: 50%
   - Speichern → Partner sieht Update!

4. **Tab 4: Dokumente prüfen**
   - Dokumente genehmigen

---

### **4. Registrierung testen**

```
Datei öffnen: index.html
Scrolle zu: #kontakt Sektion
```

**Formular ausfüllen:**
1. Modell wählen (z.B. Online-Shop)
2. Alle 5 Schritte durchlaufen
3. Absenden

**Was passiert:**
✅ Partner wird automatisch in Datenbank angelegt
✅ Projekt wird erstellt (6 Wochen für Online-Shop)
✅ Partner kann sich einloggen

**Dann testen:**
1. Öffne: partner-login.html
2. Logge dich mit der eingegebenen E-Mail ein
3. **Onboarding startet automatisch!**

---

## 🔌 Schnittstellen einrichten

### **1. Datei-Upload (Cloudinary) - OPTIONAL**

#### **Warum Cloudinary?**
- ✅ Kostenlos bis 25GB
- ✅ Funktioniert sofort
- ✅ Kein eigener Server nötig

#### **Setup (5 Minuten):**

**Schritt 1: Account erstellen**
```
1. Gehe zu: cloudinary.com
2. Klicke "Sign up for free"
3. Bestätige E-Mail
```

**Schritt 2: Credentials holen**
```
Dashboard → Settings → Product Environment
Kopiere: Cloud Name (z.B. "dein-cloud-name")
```

**Schritt 3: Upload Preset erstellen**
```
Settings → Upload → Upload Presets
1. Klicke "Add upload preset"
2. Name: partner_uploads
3. Signing Mode: Unsigned
4. Folder: partner_dokumente
5. Speichern
```

**Schritt 4: In Code einfügen**

**Datei: partner-dashboard.html**
```javascript
Zeile ~550 (in function uploadDokument):

const cloudName = 'DEIN_CLOUD_NAME'; 
// ↑ Ersetze mit deinem Cloud Name

const uploadPreset = 'partner_uploads';
// ↑ Dein Upload Preset Name
```

**Datei: partner-onboarding.html**
```javascript
Zeile ~672 (in function handleFileUpload):

const cloudName = 'DEIN_CLOUD_NAME';
const uploadPreset = 'partner_uploads';
```

**FERTIG!** 🎉
Jetzt funktioniert der Datei-Upload!

---

### **2. E-Mail-Benachrichtigungen (EmailJS) - OPTIONAL**

#### **Warum EmailJS?**
- ✅ Kostenlos bis 200 E-Mails/Monat
- ✅ Keine Backend-Programmierung
- ✅ Funktioniert direkt aus HTML

#### **Setup (5 Minuten):**

**Schritt 1: Account erstellen**
```
1. Gehe zu: emailjs.com
2. Sign up (kostenlos)
3. Bestätige E-Mail
```

**Schritt 2: E-Mail Service verbinden**
```
Dashboard → Email Services → Add New Service
Wähle: Gmail / Outlook / Custom SMTP
Verbinde dein E-Mail-Konto
```

**Schritt 3: E-Mail Template erstellen**

**Template 1: Willkommens-E-Mail**
```
Dashboard → Email Templates → Create New Template

Name: partner_welcome
Subject: Willkommen im Partner-Programm!

Content:
Hallo {{vorname}},

herzlich willkommen im Partner-Programm!

Deine Login-Daten:
E-Mail: {{email}}

Nächste Schritte:
1. Logge dich ein: [DEINE-WEBSITE-URL]/partner-login.html
2. Durchlaufe das Onboarding
3. Starte mit der Akademie

Bei Fragen sind wir für dich da!

Beste Grüße
Dein Team
```

**Schritt 4: In Code einfügen**

**Datei: index.html**
```javascript
Zeile ~3270 (nach Partner-Anlage):

// EmailJS initialisieren
emailjs.init('DEINE_PUBLIC_KEY'); // Von EmailJS Dashboard

// E-Mail senden
emailjs.send('DEIN_SERVICE_ID', 'partner_welcome', {
    vorname: data.vorname,
    email: data.email,
    to_email: data.email
});
```

**EmailJS Script einbinden (in `<head>`):**
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

---

## 📝 Inhalte anpassen

### **1. Akademie-Videos ersetzen**

**Datei: partner-akademie.html**

**Suche nach:** `DEMO_VIDEO`

**Ersetze mit YouTube:**
```javascript
video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/DEINE_VIDEO_ID" frameborder="0" allowfullscreen></iframe>'
```

**Beispiel:**
```javascript
// Vorher:
video: 'DEMO_VIDEO',

// Nachher:
video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>',
```

---

### **2. Akademie-Texte ändern**

**Datei: partner-akademie.html**

**Zeile ~370** (im moduleData Objekt):

```javascript
content: {
    title: 'DEIN TITEL',
    sections: [
        {
            title: 'Überschrift',
            content: 'Dein Text hier...',
            list: [
                'Punkt 1',
                'Punkt 2',
                'Punkt 3'
            ]
        }
    ]
}
```

---

### **3. Quiz-Fragen hinzufügen**

**Datei: partner-akademie.html**

```javascript
quiz: [
    {
        frage: 'Deine Frage?',
        optionen: [
            'Antwort A',
            'Antwort B',
            'Antwort C (richtig)',
            'Antwort D'
        ],
        richtig: 2  // Index der richtigen Antwort (0-3)
    },
    {
        frage: 'Zweite Frage?',
        optionen: ['A', 'B', 'C', 'D'],
        richtig: 1
    }
]
```

---

### **4. Neue Module hinzufügen**

**Datei: partner-akademie.html**

**Zeile ~370** - Kopiere ein bestehendes Modul und passe an:

```javascript
versicherung: {
    id: 'versicherung',
    name: 'Versicherungs-Experte',
    icon: 'fa-shield-alt',
    iconClass: 'icon-versicherung', // CSS-Klasse für Farbe
    description: 'Lerne alles über Versicherungen...',
    lektionen: 4,
    dauer: '1.5 Std',
    lektionenList: [
        {
            id: 'vers_1',
            titel: 'Versicherungs-Grundlagen',
            dauer: '15 Min',
            typ: 'Video + Text',
            content: {
                title: 'Grundlagen',
                sections: [...]
            }
        }
    ]
}
```

**Dann CSS-Klasse hinzufügen:**
```css
.icon-versicherung {
    background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
}
```

---

## ✅ Komplett-Test durchführen

### **Test-Szenario: Neuer Partner "Max Mustermann"**

#### **Phase 1: Registrierung**

```
1. Öffne: index.html
2. Scrolle zu Kontaktformular
3. Fülle aus:
   - Modell: Online-Shop
   - Vorname: Max
   - Nachname: Mustermann
   - E-Mail: max@test.de
   - Telefon: 0171 1234567
   - Adresse: Teststraße 1, 12345 Berlin
   - Status: Privatperson
4. Schritt 2-5 ausfüllen
5. Absenden

✅ Erwartung: 
   - Success-Message
   - Partner in Datenbank angelegt
```

---

#### **Phase 2: Admin prüft Partner**

```
1. Öffne: admin-dashboard.html
2. Tab "Partner-Übersicht"

✅ Erwartung:
   - Max Mustermann ist in der Liste
   - Status: "neu"
   - Modell: Online-Shop
```

---

#### **Phase 3: Erster Login (Onboarding)**

```
1. Öffne: partner-login.html
2. E-Mail: max@test.de
3. Login

✅ Erwartung:
   - Weiterleitung zu partner-onboarding.html
   - 4-Schritte Wizard startet
```

---

#### **Phase 4: Onboarding durchlaufen**

```
Schritt 1: Willkommen
✅ Checkliste sichtbar

Schritt 2: Dokumente hochladen
✅ Upload-Bereich funktioniert
   (Demo oder echt wenn Cloudinary eingerichtet)

Schritt 3: Profil vervollständigen
✅ Formular ausfüllen

Schritt 4: Fertig
✅ Button "Zum Dashboard"
```

---

#### **Phase 5: Dashboard erkunden**

```
✅ Erwartung:
   - Projekt-Status: "Online-Shop: ⏳ 6 Wochen"
   - Provisionen: €0,00 (noch keine)
   - Verträge: 0
   - Akademie-Widget sichtbar
```

---

#### **Phase 6: Akademie starten**

```
1. Klicke "Zur Akademie"
2. Wähle "Mobilfunk-Experte"
3. Durchlaufe Lektionen
4. Mache Quiz

✅ Erwartung:
   - Videos anschaubar (Platzhalter oder echt)
   - Quiz funktioniert
   - Bei 80%+: Zertifikat erscheint!
```

---

#### **Phase 7: Admin trägt Provision ein**

```
1. Öffne: admin-dashboard.html
2. Tab "Provisionen eintragen"
3. Ausfüllen:
   - Partner: max@test.de
   - Betrag: 150.00
   - Typ: Mobilfunk
   - Tarif: O2 Mobile M
   - Status: Ausgezahlt
4. Speichern

✅ Erwartung:
   - Success-Message
   - Provision gespeichert
```

---

#### **Phase 8: Partner sieht Provision**

```
1. Zurück zu: partner-dashboard.html
2. Seite neu laden (F5)

✅ Erwartung:
   - Gesamt-Provisionen: €150,00
   - Chart zeigt Mobilfunk: €150
   - Verträge: 1
```

---

## 🎯 Checkliste: Alles funktioniert?

### **Frontend**
- [ ] Landing Page (index.html) lädt
- [ ] Kontaktformular funktioniert
- [ ] Partner-Login funktioniert
- [ ] Onboarding läuft durch
- [ ] Dashboard zeigt Daten
- [ ] Akademie ist navigierbar
- [ ] Quiz funktioniert
- [ ] Zertifikate werden ausgestellt

### **Backend (Table API)**
- [ ] Partner werden angelegt
- [ ] Projekte werden erstellt
- [ ] Provisionen werden gespeichert
- [ ] Dokumente werden getrackt
- [ ] Fortschritt wird gespeichert
- [ ] Zertifikate werden gespeichert

### **Admin**
- [ ] Partner-Übersicht funktioniert
- [ ] Provisionen eintragen funktioniert
- [ ] Projekt-Updates funktionieren
- [ ] Dokumente prüfbar

### **Optional (wenn eingerichtet)**
- [ ] Cloudinary Upload funktioniert
- [ ] E-Mails werden versendet

---

## 🆘 Troubleshooting

### **Problem: Partner wird nicht angelegt**

**Lösung:**
1. Browser-Console öffnen (F12)
2. Schaue nach Fehlern
3. Prüfe Table API Zugriff:
   ```
   fetch('tables/partners').then(r => r.json()).then(console.log)
   ```

---

### **Problem: Onboarding startet nicht**

**Lösung:**
1. Prüfe Partner-Status in Datenbank
2. Status muss "neu" sein oder `onboarding_completed: false`
3. Ändere manuell:
   ```javascript
   fetch('tables/partners/PARTNER_ID', {
       method: 'PATCH',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({status: 'neu'})
   })
   ```

---

### **Problem: Datei-Upload funktioniert nicht**

**Lösung:**
1. Prüfe Cloudinary Credentials
2. Teste Upload-Preset:
   - Muss "unsigned" sein
   - Folder muss existieren
3. Fallback: Funktioniert als Demo ohne Cloudinary

---

### **Problem: Quiz-Auswertung falsch**

**Lösung:**
1. Prüfe `richtig` Index (0-basiert!)
   ```javascript
   optionen: ['A', 'B', 'C', 'D'],
   richtig: 2  // = "C" (Index 2)
   ```

---

## 🚀 Go Live Checkliste

### **Vor dem Launch:**
- [ ] Alle Demo-Inhalte durch echte ersetzt
- [ ] Cloudinary eingerichtet (falls genutzt)
- [ ] EmailJS eingerichtet (falls genutzt)
- [ ] Alle Links geprüft
- [ ] Mobile-Version getestet
- [ ] Admin-Login sichern (separater Zugang)
- [ ] Impressum/Datenschutz angepasst

### **Nach dem Launch:**
- [ ] Ersten Test-Partner anlegen
- [ ] Komplett-Durchlauf testen
- [ ] Backups einrichten
- [ ] Monitoring aktivieren

---

## 📞 Support

Bei Fragen oder Problemen:
1. Prüfe diese Anleitung
2. Schaue in Browser-Console (F12)
3. Teste mit Demo-Daten (demo@partner.de)

**System läuft komplett ohne Backend - alles Frontend!** 🎉
