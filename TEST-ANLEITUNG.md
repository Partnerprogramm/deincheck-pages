# 🧪 TEST-ANLEITUNG & ÜBERSICHT - Partner Management System

**Stand:** 30. Januar 2025  
**Zuletzt implementiert:** Partner-Benachrichtigungssystem

---

## 📊 WAS WURDE BIS JETZT IMPLEMENTIERT?

### ✅ **1. PARTNER-BEREICH**

#### **Partner-Tool (Vertragsabschluss)** 
📁 Datei: `Partner-Tool.html`

**Funktionen:**
- ✅ Vollständige Kundendatenerfassung (14+ Felder)
- ✅ Digitale Unterschrift mit Canvas
- ✅ Automatische Provisionsberechnung
- ✅ Cross-Sell-Bonus (Strom+Gas: +40€)
- ✅ Automatische Vertragsnummer
- ✅ Speichert ALLE Daten in Datenbank
- ✅ Sendet Benachrichtigung an Admin

**Deutsche Felder die gespeichert werden:**
- Anrede, Vorname, Nachname, Geburtsdatum
- E-Mail, Telefon
- Straße, PLZ, Ort
- Ausweisnummer, Gültigkeitsdatum
- IBAN
- Besondere Wünsche, Rufnummer-Mitnahme
- Digitale Unterschrift (Base64)

#### **Partner-Dashboard** ⭐ NEU!
📁 Datei: `partner-dashboard.html`

**Funktionen:**
- ✅ **Benachrichtigungs-Glocke** mit Badge (zeigt Anzahl ungelesener)
- ✅ Dropdown mit allen Benachrichtigungen
- ✅ Auto-Refresh alle 30 Sekunden
- ✅ 4 Benachrichtigungs-Typen:
  - 🔔 **Termin bestätigt** - Termine werden bestätigt
  - 🎉 **Vertrag aktiviert** - Admin hat Vertrag aktiviert
  - 💰 **Provision ausgezahlt** - Geld wurde überwiesen
  - 📢 **System-Nachricht** - Neue Aktionen, Infos
- ✅ Echtzeit-Statistiken (Provisionen, Verträge)
- ✅ "Meine Verträge & Provisionen" Tabelle mit Filtern
- ✅ Provisions-Übersicht nach Status
- ✅ Einstellungen-Modal (Profil, Passwort, Bankdaten)

#### **Partner-Hilfe (FAQ)**
📁 Datei: `partner-hilfe.html`

**Funktionen:**
- ✅ Suchfunktion mit Live-Filter
- ✅ 5 Kategorien (Erste Schritte, Verträge, Provisionen, Plattform, Support)
- ✅ 16+ FAQ-Einträge
- ✅ Expandierbare Antworten
- ✅ Support-Kontakt-Box

---

### ✅ **2. ADMIN-BEREICH**

#### **Admin-Dashboard**
📁 Datei: `admin-dashboard.html`

**Funktionen:**
- ✅ Benachrichtigungs-System (Bell-Icon)
- ✅ CSV-Export (18 Spalten für Buchhaltung)
- ✅ Echtzeit-Statistiken (korrekte Provisionen!)
- ✅ Top-Partner Ranking
- ✅ Neueste Verträge
- ✅ Multi-Tab-Interface

#### **Vertrags-Übersicht** ⭐ ERWEITERT!
📁 Datei: `admin-vertraege-uebersicht.html`

**Funktionen:**
- ✅ Umfassende Detail-Modals (1400px breit)
- ✅ **ALLE Kundendaten** in farbcodierten Sektionen:
  - 👤 Persönliche Daten (blau)
  - 📍 Adresse (grün)
  - 📇 Ausweis (rot)
  - 🏦 Bank (orange)
  - 💬 Besondere Wünsche (lila)
  - 📞 Rufnummer-Mitnahme (gelb)
  - ✍️ Unterschrift (grau)
- ✅ **Erstellt automatisch Partner-Benachrichtigungen:**
  - Wenn Status → "aktiviert"
  - Wenn Provision → "ausgezahlt"
- ✅ Filter nach Status, Kategorie, Partner, Zeitraum
- ✅ Admin-Notizen
- ✅ Status-Management

---

## 🗄️ NEUE DATENBANK-TABELLE

### **partner_benachrichtigungen** (10 Felder)

```javascript
{
  id: "uuid",
  partner_email: "test@partner.de",
  typ: "termin_bestaetigt | vertrag_aktiviert | provision_ausgezahlt | system_nachricht",
  titel: "🎉 Vertrag wurde aktiviert!",
  nachricht: "Ihr Strom-Vertrag wurde vom Admin aktiviert...",
  vertragsnummer: "STR-20250130-0001",
  vertrag_id: "vertrag-uuid",
  betrag: 85.50, // Bei Provisionen
  gelesen: false,
  erstellt_am: 1738267200000 // Timestamp
}
```

**Vorhandene Test-Daten:**
- 4 Benachrichtigungen für `test@partner.de`
- 3 ungelesen, 1 gelesen
- Verschiedene Typen zum Testen

---

## 🧪 WIE TESTEN SIE DAS SYSTEM?

### **TEST 1: Partner-Benachrichtigungen anzeigen** 🔔

**Schritte:**
1. Öffnen Sie `partner-login.html`
2. Login mit:
   - **E-Mail:** `test@partner.de`
   - **Passwort:** `Test1234`
3. Sie werden automatisch zu `partner-dashboard.html` weitergeleitet
4. **Schauen Sie oben rechts** - Sie sehen:
   - 🔔 **Glocken-Icon** mit rotem Badge **(3)**
   
5. **Klicken Sie auf die Glocke**
6. Dropdown öffnet sich mit 4 Benachrichtigungen:
   - ✅ Termin bestätigt
   - 🎉 Vertrag aktiviert
   - 💰 Provision ausgezahlt (mit Betrag 85,50€)
   - 📢 System-Nachricht (bereits gelesen)

7. **Klicken Sie auf eine ungelesene Benachrichtigung**
   - "● Neu" verschwindet
   - Badge-Zahl verringert sich
   - Hintergrund wird heller

8. **Klicken Sie "Alle als gelesen"**
   - Badge verschwindet komplett
   - Alle Benachrichtigungen werden grau

**Erwartetes Ergebnis:**
- ✅ Badge zeigt korrekte Anzahl ungelesener
- ✅ Benachrichtigungen zeigen Icons basierend auf Typ
- ✅ Bei Provisionen: Betrag wird angezeigt
- ✅ Vertragsnummern werden angezeigt
- ✅ Click markiert als gelesen
- ✅ Auto-Refresh nach 30 Sekunden

---

### **TEST 2: Automatische Benachrichtigung bei Vertrag-Aktivierung** 🎉

**Schritte:**
1. Öffnen Sie in einem **neuen Tab**: `admin-login.html`
2. Login mit:
   - **E-Mail:** `admin@system.de`
   - **Passwort:** `Admin1234`
3. Klicken Sie auf "Verträge" in der Navigation
4. Sie sehen die Liste aller Verträge
5. **Klicken Sie auf einen Vertrag** mit Status "ausstehend"
6. Modal öffnet sich mit allen Kundendaten
7. **Scrollen Sie nach unten** zur Sektion "⚙️ Admin-Aktionen"
8. Ändern Sie:
   - **Vertrag Status:** `ausstehend` → **`aktiviert`**
   - **Provisions Status:** bleibt oder → **`freigegeben`**
9. Klicken Sie **"Speichern"**
10. Alert: "✅ Vertrag erfolgreich aktualisiert!"

**Jetzt zum Partner wechseln:**
11. Gehen Sie zurück zum **Partner-Dashboard Tab**
12. **Warten Sie max 30 Sekunden** (Auto-Refresh) ODER **klicken Sie die Glocke**
13. **Sie sehen eine NEUE Benachrichtigung:**
    - 🎉 **Vertrag wurde aktiviert!**
    - "Ihr Strom-Vertrag wurde vom Admin aktiviert..."
    - Vertragsnummer wird angezeigt
    - Badge hat sich erhöht

**Erwartetes Ergebnis:**
- ✅ Partner erhält sofort Benachrichtigung
- ✅ Badge aktualisiert sich
- ✅ Benachrichtigung enthält alle relevanten Infos

---

### **TEST 3: Provision ausgezahlt Benachrichtigung** 💰

**Schritte:**
1. Bleiben Sie im **Admin-Verträge Tab**
2. Öffnen Sie einen Vertrag mit Status "aktiviert"
3. Scrollen Sie zu "⚙️ Admin-Aktionen"
4. Ändern Sie:
   - **Provisions Status:** → **`ausgezahlt`**
5. Klicken Sie **"Speichern"**

**Jetzt zum Partner:**
6. Zurück zum **Partner-Dashboard**
7. Klicken Sie die **Glocke** (oder warten 30 Sek)
8. **Neue Benachrichtigung erscheint:**
   - 💰 **Provision ausgezahlt!**
   - "Die Provision für Vertrag XXX wurde überwiesen"
   - **Betrag wird angezeigt** (z.B. 85,50€)
   - Vertragsnummer

**Erwartetes Ergebnis:**
- ✅ Benachrichtigung wird erstellt
- ✅ Betrag (gesamt_provision) wird korrekt angezeigt
- ✅ Vertrag enthält Feld `ausgezahlt_am` mit Timestamp

---

### **TEST 4: "Meine Verträge" Sektion im Dashboard** 📋

**Schritte:**
1. Im **Partner-Dashboard** scrollen Sie nach unten
2. Sie sehen Sektion: **"📋 Meine Verträge & Provisionen"**
3. **Filter-Buttons oben:**
   - Alle | Aktiviert | Ausstehend | Storniert
4. **Klicken Sie auf "Ausstehend"**
   - Tabelle zeigt nur ausstehende Verträge
5. **Klicken Sie auf "Alle"**
   - Alle Verträge werden angezeigt
6. **Schauen Sie auf die Tabelle:**
   - Datum, Vertragsnummer (Code-Format)
   - Kategorie mit Icon (⚡ Strom, 🔥 Gas)
   - Anbieter & Tarif
   - Kunde Name
   - **Provision** in € (fett)
   - Status-Badge (Farbe je nach Status)
   - Provisions-Status-Badge

**Erwartetes Ergebnis:**
- ✅ Tabelle zeigt alle Verträge des Partners
- ✅ Filter funktioniert
- ✅ Provisionen werden korrekt angezeigt
- ✅ Status-Badges haben richtige Farben

---

### **TEST 5: Einstellungen Modal** ⚙️

**Schritte:**
1. Im **Partner-Dashboard** oben rechts
2. Klicken Sie auf das **⚙️ Zahnrad-Icon** (blau)
3. Modal öffnet sich mit 3 Tabs:
   - 👤 **Profil**
   - 🔑 **Passwort**
   - 🏦 **Bankdaten**

**Tab: Profil**
4. Ändern Sie z.B. den **Vornamen** zu "Maximilian"
5. Klicken Sie **"Speichern"**
6. Alert: "Profil aktualisiert!"
7. **Schließen & neu laden** → Name oben rechts zeigt "Maximilian"

**Tab: Passwort**
8. Wechseln Sie zum Tab **"Passwort"**
9. Geben Sie ein:
   - **Aktuelles Passwort:** `Test1234`
   - **Neues Passwort:** `Test5678`
   - **Wiederholen:** `Test5678`
10. Klicken Sie **"Passwort ändern"**
11. Alert: "Passwort erfolgreich geändert"
12. **Logout** und **Login mit neuem Passwort**

**Tab: Bankdaten**
13. Wechseln Sie zu **"Bankdaten"**
14. Geben Sie ein:
   - **IBAN:** `DE89370400440532013000`
   - **Kontoinhaber:** `Max Mustermann`
15. Klicken Sie **"Speichern"**
16. Alert: "Bankdaten aktualisiert"

**Erwartetes Ergebnis:**
- ✅ Alle 3 Tabs funktionieren
- ✅ Daten werden in `partners` Tabelle gespeichert
- ✅ Passwort-Änderung funktioniert
- ✅ Validierung prüft Felder

---

### **TEST 6: FAQ / Hilfe-Seite** 📚

**Schritte:**
1. Im **Partner-Dashboard** Menü (links)
2. Klicken Sie auf: **"💡 Hilfe & FAQ"**
3. Neue Seite: `partner-hilfe.html` öffnet sich
4. **Oben: Suchfeld**
5. Geben Sie ein: **"Provision"**
6. Nur FAQs mit "Provision" im Text werden angezeigt
7. **Löschen Sie den Suchtext**
8. **Klicken Sie auf Kategorie-Card:** "💰 Provisionen"
9. Seite scrollt zu Provisions-FAQs
10. **Klicken Sie auf eine Frage** (z.B. "Wann erhalte ich meine Provision?")
11. Antwort klappt auf ▼
12. **Klicken Sie erneut** → Antwort klappt zu ▲

**Erwartetes Ergebnis:**
- ✅ Suchfunktion filtert live
- ✅ Kategorien sind klickbar
- ✅ FAQs expandieren/kollabieren
- ✅ 16+ FAQs vorhanden

---

### **TEST 7: CSV-Export im Admin-Dashboard** 📊

**Schritte:**
1. Login als **Admin** (`admin@system.de` / `Admin1234`)
2. Im **Admin-Dashboard** oben im Tab "📈 Umsatz-Tracking"
3. Klicken Sie rechts oben: **"📊 CSV exportieren"** Button
4. Datei wird heruntergeladen: `Umsatzübersicht_2025-01-30.csv`
5. **Öffnen Sie die Datei in Excel**
6. **18 Spalten** sollten korrekt angezeigt werden:
   - Vertragsnummer, Datum, Partner Email, Partner Name
   - Kategorie, Anbieter, Tarif, Kunde Name, Kunde Email
   - Monatspreis, Basis-Provision, Cross-Sell Provision
   - Gesamt-Provision, Vertrag Status, Provisions Status
   - Erstellt am, Aktiviert am, Ausgezahlt am
7. **Umlaute** (ä, ö, ü) werden korrekt angezeigt (UTF-8 BOM)

**Erwartetes Ergebnis:**
- ✅ CSV lädt herunter
- ✅ Excel zeigt Umlaute korrekt
- ✅ Alle 18 Spalten vorhanden
- ✅ Daten sind vollständig

---

### **TEST 8: Vollständige Kundendaten im Admin-Modal** 📄

**Schritte:**
1. Als **Admin** in **Verträge-Übersicht**
2. **Klicken Sie auf einen Vertrag**
3. Modal öffnet sich (1400px breit)
4. **Scrollen Sie durch alle Sektionen:**

   **👤 Persönliche Daten (blau):**
   - Anrede, Vorname, Nachname, Geburtsdatum
   - E-Mail, Telefon
   
   **📍 Adressdaten (grün):**
   - Straße, PLZ, Ort
   
   **📇 Ausweis-Daten (rot):**
   - Ausweisnummer, Gültigkeitsdatum
   
   **🏦 Bankdaten (orange):**
   - IBAN
   
   **💬 Besondere Wünsche (lila):**
   - Text aus Formular
   
   **📞 Rufnummer-Mitnahme (gelb):**
   - Ja/Nein
   
   **✍️ Digitale Unterschrift (grau):**
   - Bild wird angezeigt

5. **Alle 14+ Felder** sollten sichtbar sein

**Erwartetes Ergebnis:**
- ✅ Modal ist breit genug (1400px)
- ✅ Farbcodierte Sektionen
- ✅ ALLE Felder werden angezeigt
- ✅ Unterschrift als Bild sichtbar
- ✅ Keine "N/A" bei ausgefüllten Feldern

---

## 🔄 AUTOMATISCHE WORKFLOWS

### **Workflow: Vertrag → Aktivierung → Benachrichtigung**

```
Partner erstellt Vertrag
        ↓
Daten in vertragsabschluesse gespeichert
        ↓
Admin-Benachrichtigung (benachrichtigungen) erstellt
        ↓
Admin sieht Bell-Badge (rot)
        ↓
Admin öffnet Vertrag in admin-vertraege-uebersicht.html
        ↓
Admin ändert Status → "aktiviert"
        ↓
System speichert: aktiviert_am = Date.now()
        ↓
System erstellt Partner-Benachrichtigung (partner_benachrichtigungen)
        ↓
Partner sieht Bell-Badge (rot) mit +1
        ↓
Partner öffnet Benachrichtigung
        ↓
"🎉 Vertrag wurde aktiviert!"
```

---

## 📁 GEÄNDERTE/NEUE DATEIEN

### **Neue Dateien:**
- ❌ Keine neuen Dateien (nur Änderungen)

### **Geänderte Dateien:**

1. **partner-dashboard.html** ⭐⭐⭐
   - Benachrichtigungs-Glocke hinzugefügt
   - Dropdown mit Auto-Refresh
   - JavaScript-Funktionen: loadPartnerBenachrichtigungen(), togglePartnerBenachrichtigungen(), etc.
   - CSS für Badge und Dropdown
   - **Zeilen geändert:** ~100+

2. **admin-vertraege-uebersicht.html** ⭐⭐
   - Automatische Partner-Benachrichtigungen bei:
     - Vertrag aktiviert
     - Provision ausgezahlt
   - **Zeilen geändert:** ~40

3. **partner_benachrichtigungen** (Tabelle) ⭐⭐⭐
   - Neu erstellt mit 10 Feldern
   - 4 Test-Benachrichtigungen hinzugefügt

4. **TEST-ANLEITUNG.md** ⭐⭐⭐
   - Diese Datei (neu erstellt)

---

## 🎯 NÄCHSTE SCHRITTE (Optional)

### **Weitere Benachrichtigungs-Events:**
- [ ] Termin-Bestätigung automatisch (wenn Admin Termin erstellt)
- [ ] System-Nachrichten vom Admin verschicken (Broadcast)
- [ ] Benachrichtigung bei neuem FAQ-Eintrag
- [ ] Benachrichtigung bei neuer Tarif-Aktion

### **E-Mail-Integration:**
- [ ] E-Mail bei Vertrag-Aktivierung
- [ ] E-Mail bei Provisions-Auszahlung
- [ ] Wöchentlicher Umsatz-Report

### **Push-Benachrichtigungen:**
- [ ] Browser-Push-Notifications (Web Push API)
- [ ] Sound-Effekt bei neuer Benachrichtigung

---

## 🐛 BEKANNTE PROBLEME / LIMITATIONEN

**Aktuell keine bekannten Bugs!** ✅

### **Zu beachten:**
- Auto-Refresh läuft alle 30 Sekunden (kann CPU belasten bei vielen Tabs)
- Badge zeigt max "9+" (auch wenn mehr ungelesen)
- Benachrichtigungen werden nicht automatisch gelöscht (nur als gelesen markiert)

---

## 💡 TIPPS ZUM TESTEN

1. **Mehrere Browser-Tabs:** Partner + Admin gleichzeitig öffnen
2. **Developer Console:** `F12` drücken → Fehler sehen
3. **Network Tab:** API-Calls beobachten
4. **localStorage:** Prüfen Sie gespeicherte Daten:
   ```javascript
   console.log(localStorage.getItem('partnerEmail'));
   console.log(localStorage.getItem('partnerData'));
   ```
5. **Datenbank direkt prüfen:**
   ```javascript
   fetch('tables/partner_benachrichtigungen?limit=10')
     .then(r => r.json())
     .then(d => console.log(d));
   ```

---

## 📞 SUPPORT

Bei Fragen oder Problemen:
- 📧 **E-Mail:** admin@system.de
- 📖 **FAQ:** partner-hilfe.html
- 📄 **README:** README.md

---

**Viel Erfolg beim Testen!** 🚀

_Diese Anleitung wird bei jedem Update aktualisiert._