# 🧪 Test-Anleitung: Neuer Partner

## ✅ Was wurde gefixed:

### 1. **Provisionen zeigen jetzt €0,00** für neue Partner
- ✅ `loadDashboardData()` filtert jetzt korrekt nach `partner_email`
- ✅ Keine alten Test-Daten mehr sichtbar

### 2. **Onboarding-Badge zeigt "⏳ ONBOARDING"** statt "✅ VOLLZUGRIFF"
- ✅ Badge prüft ALLE 4 Onboarding-Schritte:
  - `vertrag_unterschrieben`
  - `dokumente_hochgeladen`
  - `schulung_absolviert`
  - `bankdaten_hinterlegt`
- ✅ NUR wenn ALLE Schritte `true` sind → "✅ VOLLZUGRIFF"
- ✅ Sonst → "⏳ ONBOARDING" (mit Puls-Animation)

### 3. **"Entdecken"-Widget sieht jetzt professionell aus**
- ✅ Neues Design mit Gradient-Border
- ✅ Schöne Hover-Effekte
- ✅ Wird ÜBER dem Onboarding-Widget angezeigt
- ✅ Kann geschlossen werden (dann erscheint Menü-Link)

---

## 🧪 Test-Schritte:

### Schritt 1: Neuen Partner erstellen

1. **Öffne:** `NEUER-PARTNER-ERSTELLEN.html`

2. **Fülle aus:**
   ```
   Email:          test-neu@partner.de
   Passwort:       TestNeu123
   Vorname:        Max
   Nachname:       Mustermann
   Firma:          (optional)
   Telefon:        (optional)
   Tarif:          basic
   Onboarding:     ❌ NICHT AKTIVIEREN!
   ```

3. **Klicke:** "Partner erstellen"

4. **Erwartetes Ergebnis:**
   ```
   ✅ Partner erstellt!
   📧 Email: test-neu@partner.de
   🔑 Passwort: TestNeu123
   ```

---

### Schritt 2: Mit neuem Partner einloggen

1. **Öffne PRIVATE/INCOGNITO-Fenster!** (Wichtig für sauberen Test)

2. **Öffne:** `partner-login.html`

3. **Login:**
   ```
   Email:    test-neu@partner.de
   Passwort: TestNeu123
   ```

4. **Erwartetes Ergebnis:** Dashboard öffnet sich

---

### Schritt 3: Dashboard überprüfen

**Was du sehen SOLLTEST:**

#### ✅ 1. Entdecken-Widget (OBEN)
- Schönes Design mit Gradient-Border
- 4 Feature-Karten (Shop, Partner werben, KI-Tools, Analytics)
- Hover-Effekt funktioniert
- Close-Button (X) oben rechts

#### ✅ 2. Onboarding-Widget (DARUNTER)
- Großes Widget mit 🚀 Raketen-Icon
- Header: "Jetzt loslegen!"
- Text: "Schließen Sie diese 4 Schritte ab..."
- Fortschrittsbalken: **0%**
- 4 Schritte mit Nummern 1-4:
  1. 📝 Partnervertrag unterschreiben (PFLICHT)
  2. 📄 Dokumente hochladen (PFLICHT)
  3. 🎓 Akademie-Schulung absolvieren (PFLICHT)
  4. 🏦 Bankdaten hinterlegen

#### ✅ 3. Provisions-Karten
Alle Provisionen zeigen **€0,00**:
- Gesamtprovisionen: €0,00
- Offene Provisionen: €0,00
- Freigegebene Provisionen: €0,00
- Ausgezahlte Provisionen: €0,00

#### ✅ 4. Status-Badge (oben rechts)
- Email: test-neu@partner.de
- Badge: **⏳ ONBOARDING** (ORANGE mit Puls-Animation)
- NICHT: ~~✅ VOLLZUGRIFF~~

#### ✅ 5. Verträge-Tabelle
- Zeigt: "Noch keine Verträge vorhanden"
- Mit Inbox-Icon

---

### Schritt 4: DEBUG Panel prüfen (falls sichtbar)

**Im DEBUG-Bereich sollte stehen:**
```
⏳ Status: IM ONBOARDING
📧 Email: test-neu@partner.de
📝 Vertrag unterschrieben: ✗ NEIN
📄 Dokumente hochgeladen: ✗ NEIN
🎓 Schulung absolviert: ✗ NEIN
🏦 Bankdaten hinterlegt: ✗ NEIN
```

---

### Schritt 5: Browser Console prüfen

**Öffne:** `F12` → Console-Tab

**Erwartete Logs:**
```
📊 Lade Dashboard-Daten für: test-neu@partner.de
✅ Meine Verträge gefunden: 0
💰 Provisionen berechnet:
  Gesamt: 0
  Offen: 0
  Freigegeben: 0
  Ausgezahlt: 0
```

**KEINE Fehler oder Warnings!**

---

## ❌ Was du NICHT sehen solltest:

- ❌ €2.820,50 oder andere alte Provisions-Daten
- ❌ "✅ VOLLZUGRIFF" Badge
- ❌ Verträge von anderen Partnern
- ❌ Fehlermeldungen in der Console
- ❌ "Entdecken"-Widget unter dem Onboarding-Widget

---

## 🐛 Falls etwas nicht funktioniert:

### Problem: Alte Daten werden angezeigt

**Lösung:**
1. **Lösche Browser-Cache:**
   - Chrome: `Strg+Shift+Delete` → "Cached Images and Files" löschen
   - Oder: Private/Incognito-Fenster verwenden

2. **Prüfe localStorage:**
   ```javascript
   // In Browser Console ausführen:
   console.log(localStorage.getItem('partner_email'));
   // Sollte sein: "test-neu@partner.de"
   ```

3. **Force Refresh im Dashboard:**
   - Klicke auf "🔄 SCHLIESSEN" im DEBUG-Panel

### Problem: Badge zeigt "VOLLZUGRIFF"

**Prüfe in Browser Console:**
```javascript
// Prüfe Partner-Daten:
fetch('tables/partners?search=test-neu@partner.de')
  .then(r => r.json())
  .then(data => console.log(data.data[0]));

// Erwartete Werte:
// onboarding_completed: false
// vertrag_unterschrieben: false
// dokumente_hochgeladen: false
// schulung_absolviert: false
// bankdaten_hinterlegt: false
```

### Problem: Entdecken-Widget sieht "eklig" aus

**Das sollte nicht mehr sein!** Neues Design hat:
- Gradient-Border (lila/blau)
- Professionelle Feature-Karten
- Smooth Hover-Effekte
- Info-Banner am Ende

Falls es immer noch "eklig" aussieht → Screenshot senden!

---

## 📸 Screenshot-Checkliste:

Bitte mache Screenshots von:

1. ✅ **Entdecken-Widget** (oben)
2. ✅ **Onboarding-Widget** (mit 4 Schritten)
3. ✅ **Provisions-Karten** (alle €0,00)
4. ✅ **Status-Badge** (⏳ ONBOARDING)
5. ✅ **Browser Console** (Logs)

---

## ✅ Test-Erfolgskriterien:

Der Test ist **ERFOLGREICH**, wenn:

- [ ] Provisions-Karten zeigen €0,00
- [ ] Status-Badge zeigt "⏳ ONBOARDING"
- [ ] Onboarding-Widget ist sichtbar mit 0% Fortschritt
- [ ] Entdecken-Widget sieht professionell aus
- [ ] Entdecken-Widget ist ÜBER dem Onboarding-Widget
- [ ] Keine Verträge von anderen Partnern sichtbar
- [ ] Browser Console zeigt "✅ Meine Verträge gefunden: 0"
- [ ] Keine Fehler in Browser Console

---

## 🎯 Next Steps nach erfolgreichem Test:

1. **Admin-Chat Integration testen**
   - Admin füllt Formular in `admin-chat.html` aus
   - Daten erscheinen im Admin-Dashboard

2. **Partner-Onboarding durchspielen**
   - Dokumente hochladen
   - Schulung absolvieren
   - Bankdaten hinterlegen
   - Badge ändert sich zu "✅ VOLLZUGRIFF"

3. **Produktions-Deploy**
   - Alle Tests erfolgreich
   - Screenshots dokumentiert
   - Bereit für Publish-Tab

---

**Erstellt:** 2025-11-03  
**Status:** Bereit zum Testen 🚀  
**Kritikalität:** Hoch - Hauptproblem sollte behoben sein
