# ✅ TEST-CHECKLIST - Onboarding-System

## 🎯 ZIEL

Verifizieren, dass das Onboarding-System für neue Partner korrekt funktioniert.

---

## 📋 VOR DEM TEST

### **Schritt 1: Browser vorbereiten**
- [ ] Private/Inkognito-Fenster öffnen (`Strg + Shift + N`)
- [ ] ALLE anderen Browser-Tabs schließen
- [ ] Browser-Console öffnen (`F12`)
- [ ] Console-Tab auswählen

### **Schritt 2: Test-Account bereit**
```
E-Mail: frisch@partner.de
Passwort: Frisch123
```

---

## 🧪 TEST 1: LOGIN & INITIAL VIEW

### **Aktionen:**
1. [ ] Zur Login-Seite gehen: `partner-login.html`
2. [ ] Einloggen mit: `frisch@partner.de` / `Frisch123`
3. [ ] Warten bis Dashboard geladen ist

### **Erwartete Ergebnisse:**

#### **✅ Console-Logs (F12 → Console)**
- [ ] `🔄 Lade aktuelle Partner-Daten aus DB für: frisch@partner.de`
- [ ] `📍 Timestamp: [Uhrzeit]`
- [ ] `✅ Partner-Daten geladen: {email: "frisch@partner.de", ...}`
- [ ] `🔍 onboarding_completed: false`
- [ ] `🔍 vertrag_unterschrieben: false`
- [ ] `🔍 dokumente_hochgeladen: false`
- [ ] `🔍 schulung_absolviert: false`
- [ ] `🔍 bankdaten_hinterlegt: false`
- [ ] `⏳ Onboarding läuft - Widget wird angezeigt`

#### **✅ Visuell im Dashboard**

**Header:**
- [ ] Name: "Thomas Fischer" (oben rechts)
- [ ] E-Mail: "frisch@partner.de"
- [ ] Tarif-Badge: "STANDARD" (orange)
- [ ] Status-Badge: "⏳ ONBOARDING" (orange, pulsierend)

**Onboarding-Widget (ganz oben):**
- [ ] Große Rakete: 🚀
- [ ] Titel: "Jetzt loslegen!"
- [ ] Untertitel: "Schließen Sie diese 4 Schritte ab..."
- [ ] Fortschrittsbalken: 0% (lila)
- [ ] 4 nummerierte Schritte sichtbar:
  - [ ] **1** → 📝 Partnervertrag unterschreiben
  - [ ] **2** → 📄 Dokumente hochladen
  - [ ] **3** → 🎓 Akademie-Schulung absolvieren
  - [ ] **4** → 🏦 Bankdaten hinterlegen
- [ ] Alle Schritte haben weiße Nummer-Kreise (nicht grün)
- [ ] Bei Schritten 1-3: "PFLICHT" Badge (rot)
- [ ] Alle Schritte haben "Jetzt erledigen →" Button
- [ ] Tipp-Box am Ende (💡, gelb)

**Entdecken-Widget (darunter):**
- [ ] Titel: "🌟 Entdecken Sie weitere Möglichkeiten"
- [ ] 4 Feature-Cards sichtbar
- [ ] X-Button oben rechts vorhanden

**Statistiken:**
- [ ] Offen: €0,00
- [ ] Freigegeben: €0,00
- [ ] Ausgezahlt: €0,00

**Meine Verträge & Provisionen:**
- [ ] "Noch keine Verträge vorhanden"

---

## 🧪 TEST 2: DEBUG-PANEL

### **Aktionen:**
1. [ ] Klick auf "🔧 DEBUG" Button (unter Titel)
2. [ ] Debug-Panel öffnet sich (schwarzer Banner oben)

### **Erwartete Ergebnisse:**
- [ ] Status: "⏳ Status: IM ONBOARDING" (orange)
- [ ] Email: `frisch@partner.de`
- [ ] Name: Thomas Fischer
- [ ] Vertrag unterschrieben: "✗ NEIN" (rot)
- [ ] Dokumente hochgeladen: "✗ NEIN" (rot)
- [ ] Schulung absolviert: "✗ NEIN" (rot)
- [ ] Bankdaten hinterlegt: "✗ NEIN" (rot)
- [ ] Timestamp: Aktuelle Uhrzeit

### **Aktionen:**
3. [ ] Klick auf "🔄 DATEN NEU LADEN"
4. [ ] Warten 2 Sekunden

### **Erwartete Ergebnisse:**
- [ ] Button zeigt kurz "⏳ Lädt..."
- [ ] Daten werden neu geladen (neuer Timestamp)
- [ ] Alle Werte bleiben gleich (false)

---

## 🧪 TEST 3: STATUS-CHECK SEITE

### **Aktionen:**
1. [ ] Neuer Tab öffnen: `partner-status-check.html`
2. [ ] E-Mail ist bereits vorausgefüllt: `frisch@partner.de`
3. [ ] Klick auf "Status überprüfen"

### **Erwartete Ergebnisse:**
- [ ] Hauptstatus: "⏳ IM ONBOARDING" (orange)
- [ ] E-Mail: frisch@partner.de
- [ ] Name: Thomas Fischer
- [ ] Vertrag unterschrieben: "✗ NEIN" (rot)
- [ ] Dokumente hochgeladen: "✗ NEIN" (rot)
- [ ] Schulung absolviert: "✗ NEIN" (rot)
- [ ] Bankdaten hinterlegt: "✗ NEIN" (rot)
- [ ] Status: "neu"
- [ ] Tarif: "STANDARD"

### **Aktionen:**
4. [ ] Klick auf "🔧 Raw Database JSON anzeigen"

### **Erwartete Ergebnisse:**
- [ ] JSON wird angezeigt
- [ ] `"onboarding_completed": false`
- [ ] `"vertrag_unterschrieben": false`
- [ ] `"dokumente_hochgeladen": false`
- [ ] `"schulung_absolviert": false`
- [ ] `"bankdaten_hinterlegt": false`

---

## 🧪 TEST 4: EINEN SCHRITT ABSCHLIESSEN

### **Aktionen:**
1. [ ] Zurück zum Dashboard-Tab
2. [ ] Console öffnen (`F12`)
3. [ ] Folgenden Code eingeben und Enter:

```javascript
fetch(`tables/partners/${partnerData.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ vertrag_unterschrieben: true })
}).then(() => location.reload());
```

4. [ ] Warten bis Seite neu lädt

### **Erwartete Ergebnisse:**

**Console:**
- [ ] `🔍 vertrag_unterschrieben: true` (jetzt true!)

**Onboarding-Widget:**
- [ ] Fortschritt: 25% (Balken ist 1/4 voll)
- [ ] Schritt 1: ✅ Grünes Häkchen (nicht mehr weiße 1)
- [ ] Schritt 1: Badge "✓ ERLEDIGT" (grün)
- [ ] Schritt 1: Kein "Jetzt erledigen" Button mehr
- [ ] Schritt 1: Hintergrund ist hellgrün
- [ ] Schritte 2-4: Unverändert (weiße Nummern)

---

## 🧪 TEST 5: ALLE SCHRITTE ABSCHLIESSEN

### **Aktionen:**
1. [ ] Console öffnen (`F12`)
2. [ ] Folgenden Code eingeben und Enter:

```javascript
fetch(`tables/partners/${partnerData.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        vertrag_unterschrieben: true,
        dokumente_hochgeladen: true,
        schulung_absolviert: true,
        bankdaten_hinterlegt: true
    })
}).then(() => location.reload());
```

3. [ ] Warten bis Seite neu lädt

### **Erwartete Ergebnisse:**

**Console:**
- [ ] `🔍 onboarding_completed: false` (noch false)
- [ ] `🔍 vertrag_unterschrieben: true`
- [ ] `🔍 dokumente_hochgeladen: true`
- [ ] `🔍 schulung_absolviert: true`
- [ ] `🔍 bankdaten_hinterlegt: true`
- [ ] `✅ Onboarding abgeschlossen - Widget wird versteckt`

**Dashboard:**
- [ ] Onboarding-Widget ist VERSCHWUNDEN
- [ ] Status-Badge: "✅ VOLLZUGRIFF" (grün, nicht mehr orange)
- [ ] Entdecken-Widget ist jetzt ganz oben

**Benachrichtigungen:**
- [ ] Bell-Icon zeigt Badge "1" (eine neue Benachrichtigung)
- [ ] Klick auf Bell-Icon
- [ ] Benachrichtigung: "🎉 Onboarding abgeschlossen!"
- [ ] Text: "Herzlichen Glückwunsch! Sie haben jetzt Vollzugriff..."

---

## 🧪 TEST 6: ZURÜCKSETZEN FÜR ERNEUTEN TEST

### **Aktionen:**
1. [ ] Console öffnen (`F12`)
2. [ ] Folgenden Code eingeben und Enter:

```javascript
fetch(`tables/partners/${partnerData.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        onboarding_completed: false,
        vertrag_unterschrieben: false,
        dokumente_hochgeladen: false,
        schulung_absolviert: false,
        bankdaten_hinterlegt: false,
        vollzugriff_seit: null
    })
}).then(() => location.reload());
```

3. [ ] Warten bis Seite neu lädt

### **Erwartete Ergebnisse:**
- [ ] Dashboard sieht aus wie in TEST 1
- [ ] Onboarding-Widget ist wieder da
- [ ] Status-Badge: "⏳ ONBOARDING"
- [ ] Fortschritt: 0%
- [ ] Alle Schritte offen (weiße Nummern)

---

## 🧪 TEST 7: ENTDECKEN-WIDGET

### **Aktionen:**
1. [ ] Scroll zum Entdecken-Widget
2. [ ] Klick auf X-Button (oben rechts)

### **Erwartete Ergebnisse:**
- [ ] Widget verschwindet
- [ ] Header-Menü: "Entdecken" Menüpunkt erscheint (zwischen "Meine Verträge" und "Hilfe")

### **Aktionen:**
3. [ ] Klick auf "Entdecken" im Header-Menü

### **Erwartete Ergebnisse:**
- [ ] Widget erscheint wieder
- [ ] Smooth-Scroll zum Widget
- [ ] "Entdecken" Menüpunkt verschwindet aus Header

---

## 🧪 TEST 8: FORCE REFRESH URL

### **Aktionen:**
1. [ ] In der Adressleiste: `?fresh=1` hinzufügen
2. [ ] Enter drücken

### **Erwartete Ergebnisse:**

**Console:**
- [ ] `🔥 FORCE REFRESH aktiviert - alle Caches werden gelöscht!`
- [ ] Seite lädt neu (ohne `?fresh=1`)
- [ ] Alle Daten werden frisch geladen

**Dashboard:**
- [ ] Alles sieht aus wie nach normalem Login
- [ ] Keine Änderungen (weil Daten korrekt waren)

---

## 🧪 TEST 9: ADMIN ERSTELLT BENACHRICHTIGUNG

### **Voraussetzung:**
- Admin muss eingeloggt sein
- Admin muss einen Vertrag haben von `frisch@partner.de`

### **Aktionen:**
1. [ ] Als Admin einloggen
2. [ ] Verträge öffnen
3. [ ] Vertrag von `frisch@partner.de` finden
4. [ ] Status ändern auf "aktiviert"
5. [ ] Zurück zu Partner-Dashboard (als frisch@partner.de)
6. [ ] 30 Sekunden warten (Auto-Refresh)

### **Erwartete Ergebnisse:**
- [ ] Bell-Icon zeigt Badge mit "1"
- [ ] Klick auf Bell-Icon
- [ ] Benachrichtigung: "🎉 Vertrag wurde aktiviert!"
- [ ] Vertragsnummer wird angezeigt
- [ ] Typ-Icon: 🎉 (lila)

---

## ✅ ERFOLGS-KRITERIEN

### **Test gilt als BESTANDEN wenn:**

- [ ] **ALLE** Checkboxen in TEST 1 sind ✅
- [ ] **ALLE** Checkboxen in TEST 2 sind ✅
- [ ] **ALLE** Checkboxen in TEST 3 sind ✅
- [ ] **ALLE** Checkboxen in TEST 4 sind ✅
- [ ] **ALLE** Checkboxen in TEST 5 sind ✅
- [ ] **ALLE** Checkboxen in TEST 6 sind ✅
- [ ] **ALLE** Checkboxen in TEST 7 sind ✅

**WENN ALLE ✅: DAS SYSTEM FUNKTIONIERT PERFEKT!** 🎉

---

## ❌ BEI PROBLEMEN

### **Wenn TEST 1 fehlschlägt:**

**Problem:** Status-Badge zeigt "✅ VOLLZUGRIFF" statt "⏳ ONBOARDING"

**Ursache:** Browser-Cache zeigt alte Daten

**Lösung:**
1. [ ] ALLE Browser-Tabs schließen
2. [ ] Neues Private/Inkognito-Fenster öffnen
3. [ ] TEST 1 wiederholen

**Alternative Lösung:**
1. [ ] URL ändern zu: `partner-dashboard.html?fresh=1`
2. [ ] Enter drücken
3. [ ] TEST 1 wiederholen

### **Wenn Console andere Werte zeigt:**

**Problem:** Console zeigt `onboarding_completed: true`

**Ursache:** Partner wurde versehentlich completed

**Lösung:**
1. [ ] TEST 6 durchführen (Zurücksetzen)
2. [ ] TEST 1 wiederholen

### **Wenn Status-Check andere Werte zeigt:**

**Problem:** Status-Check zeigt "VOLLZUGRIFF"

**Ursache:** Falscher Partner oder Partner wurde completed

**Lösung:**
1. [ ] Prüfen: Richtige E-Mail? (`frisch@partner.de`)
2. [ ] Wenn JA → Console-Command zum Zurücksetzen (TEST 6)
3. [ ] Wenn NEIN → Richtigen Partner einloggen

---

## 📊 TEST-REPORT

**Test durchgeführt am:** _________________

**Test durchgeführt von:** _________________

**Browser:** ☐ Chrome  ☐ Firefox  ☐ Safari  ☐ Edge

**Betriebssystem:** ☐ Windows  ☐ Mac  ☐ Linux

### **Ergebnisse:**

| Test | Status | Anmerkungen |
|------|--------|-------------|
| TEST 1: Login & Initial View | ☐ ✅ ☐ ❌ | |
| TEST 2: Debug-Panel | ☐ ✅ ☐ ❌ | |
| TEST 3: Status-Check Seite | ☐ ✅ ☐ ❌ | |
| TEST 4: Einen Schritt abschließen | ☐ ✅ ☐ ❌ | |
| TEST 5: Alle Schritte abschließen | ☐ ✅ ☐ ❌ | |
| TEST 6: Zurücksetzen | ☐ ✅ ☐ ❌ | |
| TEST 7: Entdecken-Widget | ☐ ✅ ☐ ❌ | |
| TEST 8: Force Refresh URL | ☐ ✅ ☐ ❌ | |
| TEST 9: Admin Benachrichtigung | ☐ ✅ ☐ ❌ | |

### **Gesamt-Bewertung:**

☐ **ALLE TESTS BESTANDEN** - System funktioniert perfekt! 🎉  
☐ **EINIGE TESTS FEHLGESCHLAGEN** - Siehe Anmerkungen oben  
☐ **VIELE TESTS FEHLGESCHLAGEN** - Cache-Problem, Private Window nutzen!

---

**Unterschrift Tester:** _________________

**Datum:** _________________

---

## 🔗 WEITERFÜHRENDE DOKUMENTE

- **SOFORT-LOSLEGEN.md** - Quick-Start Guide
- **CACHE-PROBLEM-LOESUNG.md** - Detailliertes Troubleshooting
- **IMPLEMENTIERTE-FEATURES.md** - Vollständige Feature-Liste
- **ZUSAMMENFASSUNG-FUER-USER.md** - Übersicht für User

---

**Erstellt:** 30. Januar 2025  
**Version:** 1.0  
**Für:** Onboarding-System Testing
