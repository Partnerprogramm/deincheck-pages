# 🔐 LOGIN-DATEN - Übersicht

## 📅 Letzte Aktualisierung: 30. Januar 2025

---

## 👨‍💼 ADMIN-ZUGANG

### **Admin-Login**
```
URL: admin-login.html

E-Mail: admin@system.de
Passwort: Admin1234
```

**Zugriff auf:**
- Admin-Dashboard
- Vertrags-Verwaltung
- Partner-Verwaltung
- Termin-Verwaltung
- Live Chat
- Ticket-System
- Provisionen eintragen
- News & Aktionen
- Dokumente prüfen

---

## 🤝 PARTNER-ZUGÄNGE

### **1. Test-Partner (Vollzugriff)**
```
URL: partner-login.html

E-Mail: test@partner.de
Passwort: Test1234

Status: ✅ Vollzugriff
Tarif: Premium
Onboarding: Abgeschlossen
```

**Verwendung:** Normaler Partner mit allen Rechten, zum Testen der Partner-Funktionen

---

### **2. Neuer Partner (Onboarding)** ⭐ **FÜR ONBOARDING-TESTS**
```
URL: partner-login.html

E-Mail: frisch@partner.de
Passwort: Frisch123

Status: ⏳ Im Onboarding
Tarif: Standard
Onboarding: 0% abgeschlossen
```

**Verwendung:** Zum Testen des Onboarding-Systems

**Onboarding-Status:**
- ❌ Vertrag unterschrieben: NEIN
- ❌ Dokumente hochgeladen: NEIN
- ❌ Schulung absolviert: NEIN
- ❌ Bankdaten hinterlegt: NEIN

---

### **3. Backup Onboarding-Partner**
```
URL: partner-login.html

E-Mail: starter@partner.de
Passwort: Start123

Status: ⏳ Im Onboarding
Tarif: Basic
Onboarding: 0% abgeschlossen
```

**Verwendung:** Backup-Account für Onboarding-Tests

---

## 🎯 VERWENDUNG

### **Admin testen:**
1. Öffnen: `admin-login.html`
2. Login: `admin@system.de` / `Admin1234`
3. Dashboard öffnet sich automatisch

### **Partner-Funktionen testen:**
1. Öffnen: `partner-login.html`
2. Login: `test@partner.de` / `Test1234`
3. Dashboard mit allen Funktionen

### **Onboarding-System testen:**
1. **WICHTIG:** Private/Inkognito-Fenster öffnen
2. Öffnen: `partner-login.html`
3. Login: `frisch@partner.de` / `Frisch123`
4. Onboarding-Widget wird angezeigt

---

## 📊 ACCOUNTS ÜBERSICHT

| Account | E-Mail | Passwort | Rolle | Status | Verwendung |
|---------|--------|----------|-------|--------|------------|
| Admin | admin@system.de | Admin1234 | Admin | Aktiv | Admin-Funktionen testen |
| Test Partner | test@partner.de | Test1234 | Partner | ✅ Vollzugriff | Partner-Funktionen testen |
| Frisch | frisch@partner.de | Frisch123 | Partner | ⏳ Onboarding | Onboarding testen |
| Starter | starter@partner.de | Start123 | Partner | ⏳ Onboarding | Backup Onboarding |

---

## 🔄 PASSWORT ZURÜCKSETZEN

**Für Tests:** Passwörter sind fest codiert und müssen im Code geändert werden.

**Admin-Passwort ändern:**
1. Öffnen: `admin-login.html`
2. Im Code suchen nach: `passwort === 'Admin1234'`
3. Neues Passwort eintragen

**Partner-Passwort ändern:**
1. Öffnen: Partner-Dashboard als eingeloggter Partner
2. Einstellungen-Icon (⚙️) klicken
3. Tab "Passwort" auswählen
4. Neues Passwort eingeben
5. Speichern

---

## 🆕 NEUE ACCOUNTS ERSTELLEN

### **Neuen Partner erstellen:**

**Option 1: Via Registrierung**
1. Öffnen: `partner-registration.html`
2. Formular ausfüllen
3. Account wird erstellt

**Option 2: Via Console (für Tests)**
```javascript
// Console öffnen (F12) auf beliebiger Seite

fetch('tables/partners', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        email: "neuerpartner@test.de",
        passwort: "Test1234",
        vorname: "Max",
        nachname: "Mustermann",
        phone: "+49 123 456789",
        firma: "Muster GmbH",
        tarif: "standard",
        status: "neu",
        modell: "provisionspartner",
        
        // Onboarding-Flags
        onboarding_completed: false,
        vertrag_unterschrieben: false,
        dokumente_hochgeladen: false,
        schulung_absolviert: false,
        bankdaten_hinterlegt: false,
        
        registriert_am: Date.now()
    })
}).then(r => r.json()).then(d => console.log('Partner erstellt:', d));
```

---

## 🔒 SICHERHEITSHINWEISE

**⚠️ WICHTIG FÜR PRODUCTION:**

1. **Passwörter ändern:** Alle Test-Passwörter vor Live-Gang ändern!
2. **Passwort-Hashing:** Aktuell Klartext - sollte gehasht werden (bcrypt)
3. **Session-Management:** localStorage kann manipuliert werden
4. **Admin-Zugang:** Sollte 2FA haben
5. **SQL-Injection:** RESTful API prüft bereits, aber vorsichtig sein

**Empfohlene Änderungen vor Production:**
- Passwort-Hashing implementieren
- JWT-Tokens statt localStorage
- Rate-Limiting für Login-Versuche
- HTTPS erzwingen
- Session-Timeout implementieren

---

## 🧪 TEST-SZENARIEN

### **Szenario 1: Admin prüft neuen Vertrag**
1. Login als Partner: `test@partner.de`
2. Vertrag erstellen im Partner-Tool
3. Logout
4. Login als Admin: `admin@system.de`
5. Benachrichtigung sehen
6. Vertrag prüfen und aktivieren

### **Szenario 2: Partner bekommt Benachrichtigung**
1. Login als Admin: `admin@system.de`
2. Vertrag von `test@partner.de` aktivieren
3. Logout
4. Login als Partner: `test@partner.de`
5. Bell-Icon zeigt neue Benachrichtigung
6. "Vertrag aktiviert" wird angezeigt

### **Szenario 3: Onboarding abschließen**
1. **Private Window** öffnen!
2. Login als: `frisch@partner.de`
3. Onboarding-Widget sehen
4. Schritte einzeln abschließen (via Console)
5. Bei 100% → Glückwunsch-Benachrichtigung
6. Badge wechselt zu "✅ VOLLZUGRIFF"

---

## 📱 MOBILE TESTING

**Alle Accounts funktionieren auch mobil:**
- Responsive Design
- Touch-optimiert
- Mobile Navigation

**Test auf Smartphone:**
1. QR-Code für Login-Seite erstellen
2. Scannen und öffnen
3. Mit beliebigem Account einloggen

---

## 🔗 LOGIN-SEITEN

| Seite | URL | Für |
|-------|-----|-----|
| Admin-Login | `admin-login.html` | Administratoren |
| Partner-Login | `partner-login.html` | Partner |
| Partner-Registrierung | `partner-registration.html` | Neue Partner |
| Passwort vergessen | *Nicht implementiert* | - |

---

## ✅ QUICK REFERENCE

**Admin:**
```
admin@system.de / Admin1234
```

**Partner (Vollzugriff):**
```
test@partner.de / Test1234
```

**Partner (Onboarding):**
```
frisch@partner.de / Frisch123
```

---

## 🆘 PROBLEME BEIM LOGIN?

### **Problem: "Falsche Anmeldedaten"**
- Prüfen Sie die Schreibweise (Groß-/Kleinschreibung bei Passwort!)
- E-Mail muss lowercase sein
- Keine Leerzeichen vor/nach E-Mail oder Passwort

### **Problem: "Partner nicht gefunden"**
- Account existiert nicht in Datenbank
- Via Console neuen Account erstellen (siehe oben)

### **Problem: Nach Login weiße Seite**
- Browser-Cache löschen
- Private Window nutzen
- Console-Fehler prüfen (F12)

### **Problem: Onboarding-Widget nicht sichtbar**
- Private/Inkognito-Fenster nutzen!
- Siehe: `CACHE-PROBLEM-LOESUNG.md`
- `?fresh=1` URL-Parameter nutzen

---

## 📞 SUPPORT

**Dokumentation:**
- `README.md` - Vollständige System-Dokumentation
- `SOFORT-LOSLEGEN.md` - Quick-Start Guide
- `CACHE-PROBLEM-LOESUNG.md` - Troubleshooting

**Test-Tools:**
- `partner-status-check.html` - Status-Prüfung
- Debug-Panel im Dashboard (🔧 DEBUG Button)

---

**Erstellt:** 30. Januar 2025  
**Version:** 1.0  
**Status:** ✅ Aktuell

---

## 🎯 ZUSAMMENFASSUNG

**Für schnellen Zugriff:**

**Admin-Login:**
→ `admin-login.html` → `admin@system.de` / `Admin1234`

**Partner-Login (Normal):**
→ `partner-login.html` → `test@partner.de` / `Test1234`

**Partner-Login (Onboarding-Test):**
→ Private Window → `partner-login.html` → `frisch@partner.de` / `Frisch123`

**Viel Erfolg!** 🎉
