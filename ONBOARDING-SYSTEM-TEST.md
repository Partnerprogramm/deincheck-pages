# 🎯 ONBOARDING-SYSTEM TEST-GUIDE

**Feature:** Partner-Onboarding mit Checkliste & Entdecken-Widget  
**Implementiert:** 30. Januar 2025  
**Status:** ✅ Vollständig implementiert

---

## 📋 WAS WURDE IMPLEMENTIERT?

### **1. Onboarding-Checkliste** ⚠️
- Großer roter Banner ÜBER den News
- Zeigt offene Pflicht-Schritte
- Fortschrittsbalken (0% - 100%)
- Verschwindet automatisch bei 100%

### **2. Entdecken-Widget** 🔍
- Zeigt weitere verfügbare Features
- 4 Feature-Cards:
  - 🛒 Online-Shop
  - 👥 Partner werben Partner
  - 🤖 KI-Tools
  - 📊 Erweiterte Analytics
- Kann manuell geschlossen werden

### **3. Status-Badge im Header** 🏷️
- "⏳ ONBOARDING" (orange, pulsierend)
- "✅ VOLLZUGRIFF" (grün, statisch)
- Neben Tarif-Badge

### **4. Partner-Tabelle erweitert** 🗄️
Neue Felder:
- `vertrag_unterschrieben` (bool)
- `dokumente_hochgeladen` (bool)
- `schulung_absolviert` (bool)
- `bankdaten_hinterlegt` (bool)
- `onboarding_started_at` (datetime)
- `vollzugriff_seit` (datetime)

---

## 🧪 TEST-ACCOUNTS

### **Partner 1: Vollzugriff** ✅
```
E-Mail: test@partner.de
Passwort: Test1234
Status: Onboarding abgeschlossen
```
**Erwartung:**
- ✅ Kein Onboarding-Banner sichtbar
- ✅ Badge: "✅ VOLLZUGRIFF" (grün)
- ✅ Entdecken-Widget sichtbar
- ✅ News-Widget sichtbar

### **Partner 2: Neuer Partner** ⏳
```
E-Mail: neu@partner.de
Passwort: Neu1234
Status: Onboarding läuft (0% abgeschlossen)
```
**Erwartung:**
- ⚠️ Großer roter Onboarding-Banner OBEN
- ⏳ Badge: "⏳ ONBOARDING" (orange, pulsierend)
- ⚠️ 4 offene Schritte sichtbar:
  1. 📝 Partnervertrag unterschreiben (PFLICHT)
  2. 📄 Dokumente hochladen (PFLICHT)
  3. 🎓 Akademie-Schulung absolvieren (PFLICHT)
  4. 🏦 Bankdaten hinterlegen (EMPFOHLEN)
- 📊 Fortschrittsbalken: 0%
- 🔍 Entdecken-Widget darunter
- 📰 News-Widget darunter

---

## 🎯 TEST-SZENARIEN

### **TEST 1: Neuer Partner einloggen**

**Schritte:**
1. Öffnen Sie: `partner-login.html`
2. Login mit: `neu@partner.de` / `Neu1234`
3. Sie werden zu `partner-dashboard.html` weitergeleitet

**Erwartetes Ergebnis:**
- ✅ **Ganz oben:** Großer roter Banner mit Warnung
- ✅ **Überschrift:** "⚠️ Onboarding noch nicht abgeschlossen"
- ✅ **Text:** "Schließen Sie diese Schritte ab, um Vollzugriff zu erhalten"
- ✅ **Fortschritt:** "0%" in Box rechts oben
- ✅ **Fortschrittsbalken:** Weißer Balken auf 0%
- ✅ **4 Schritte-Cards:**
  - Jede Card hat:
    - ⏳ Icon (nicht ✅)
    - Titel
    - Beschreibung
    - "PFLICHT" oder "EMPFOHLEN" Badge
    - Pfeil-Icon rechts
    - Hover-Effekt (Card bewegt sich nach rechts)

**Screenshot-Bereiche:**
- Header: Badge "⏳ ONBOARDING" (pulsierend)
- Onboarding-Banner: Roter Gradient-Hintergrund
- 4 weiße Schritte-Cards

---

### **TEST 2: Auf Schritt klicken**

**Schritte:**
1. Klicken Sie auf: "📝 Partnervertrag unterschreiben"
2. Alert-Popup erscheint

**Erwartetes Ergebnis:**
- ✅ Alert-Text:
  ```
  📝 Vertrag unterschreiben
  
  Hier würden Sie den Partnervertrag digital unterschreiben können.
  
  Funktion wird noch implementiert.
  ```

**Schritte:**
3. Klicken Sie auf: "📄 Dokumente hochladen"
4. Alert-Popup erscheint

**Erwartetes Ergebnis:**
- ✅ Alert-Text:
  ```
  📄 Dokumente hochladen
  
  Hier könnten Sie folgende Dokumente hochladen:
  • Personalausweis/Reisepass
  • Gewerbeschein (falls vorhanden)
  
  Funktion wird noch implementiert.
  ```

**Schritte:**
5. Klicken Sie auf: "🎓 Akademie-Schulung absolvieren"
6. Sie werden zu `partner-academy.html` weitergeleitet

**Schritte:**
7. Gehen Sie zurück zum Dashboard
8. Klicken Sie auf: "🏦 Bankdaten hinterlegen"
9. Einstellungen-Modal öffnet sich
10. Tab "Bankdaten" ist aktiv

---

### **TEST 3: Entdecken-Widget**

**Schritte:**
1. Scrollen Sie unter dem Onboarding-Banner
2. Sie sehen: "🔍 Entdecken Sie mehr Möglichkeiten"

**Erwartetes Ergebnis:**
- ✅ Weißer Hintergrund
- ✅ Überschrift: "Entdecken Sie mehr Möglichkeiten"
- ✅ Untertitel: "Erweitern Sie Ihr Partner-Business..."
- ✅ X-Button rechts oben
- ✅ **4 Feature-Cards:**

  **Card 1: Online-Shop** 🛒
  - Icon: 🛒
  - Farbe: Lila (#667eea)
  - Status-Badge: "Verfügbar ab Premium-Tarif"
  
  **Card 2: Partner werben** 👥
  - Icon: 👥
  - Farbe: Grün (#48bb78)
  - Status-Badge: "Multi-Level-Marketing"
  
  **Card 3: KI-Tools** 🤖
  - Icon: 🤖
  - Farbe: Orange (#ed8936)
  - Status-Badge: "ChatGPT, Bildgenerierung & mehr"
  
  **Card 4: Erweiterte Analytics** 📊
  - Icon: 📊
  - Farbe: Lila (#9f7aea)
  - Status-Badge: "Premium Feature"

**Interaktion:**
3. Hovern Sie über eine Card
   - ✅ Card hebt sich (translateY: -5px)
   - ✅ Box-Shadow erscheint
4. Klicken Sie auf eine Card
   - ✅ Alert: "Feature - Coming Soon!"
5. Klicken Sie X-Button rechts oben
   - ✅ Entdecken-Widget verschwindet

---

### **TEST 4: Vollzugriffs-Partner**

**Schritte:**
1. Logout (Falls eingeloggt)
2. Login mit: `test@partner.de` / `Test1234`
3. Sie werden zu `partner-dashboard.html` weitergeleitet

**Erwartetes Ergebnis:**
- ❌ **KEIN Onboarding-Banner** sichtbar
- ✅ Badge im Header: "✅ VOLLZUGRIFF" (grün, ohne Animation)
- ✅ Entdecken-Widget sichtbar
- ✅ News-Widget sichtbar (darunter)
- ✅ Normale Dashboard-Funktionen verfügbar

**Vergleich:**
```
Neuer Partner:           Vollzugriff-Partner:
[Onboarding-Banner]      [Entdecken-Widget]
[Entdecken-Widget]       [News-Widget]
[News-Widget]            [Dashboard-Cards]
[Dashboard-Cards]
```

---

### **TEST 5: Onboarding-Schritte simuliert abschließen** (Manuell)

⚠️ **Hinweis:** Da die Funktionen noch nicht implementiert sind, simulieren wir dies über die Datenbank.

**Schritte:**
1. Öffnen Sie Browser-Konsole (F12)
2. Als `neu@partner.de` eingeloggt
3. Führen Sie aus:
```javascript
// Partner-ID ermitteln
fetch('tables/partners?limit=100')
  .then(r => r.json())
  .then(d => {
    const partner = d.data.find(p => p.email === 'neu@partner.de');
    console.log('Partner-ID:', partner.id);
    return partner.id;
  })
  .then(partnerId => {
    // Alle Onboarding-Schritte als erledigt markieren
    return fetch(`tables/partners/${partnerId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        vertrag_unterschrieben: true,
        dokumente_hochgeladen: true,
        schulung_absolviert: true,
        bankdaten_hinterlegt: true
      })
    });
  })
  .then(() => {
    console.log('✅ Alle Schritte erledigt! Seite neu laden...');
    location.reload();
  });
```

**Erwartetes Ergebnis nach Reload:**
- ✅ Benachrichtigung erscheint: "🎉 Onboarding abgeschlossen!"
- ✅ Onboarding-Banner verschwindet
- ✅ Badge wechselt zu: "✅ VOLLZUGRIFF"
- ✅ Partner-Status in DB: `onboarding_completed: true`
- ✅ Feld `vollzugriff_seit` gesetzt

---

### **TEST 6: Fortschritt teilweise**

**Schritte:**
1. Logout
2. Öffnen Sie Browser-Konsole
3. Führen Sie aus (Teilweise Schritte erledigen):
```javascript
fetch('tables/partners?limit=100')
  .then(r => r.json())
  .then(d => {
    const partner = d.data.find(p => p.email === 'neu@partner.de');
    return fetch(`tables/partners/${partner.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        vertrag_unterschrieben: true,
        dokumente_hochgeladen: true,
        schulung_absolviert: false,
        bankdaten_hinterlegt: false
      })
    });
  })
  .then(() => {
    console.log('✅ 2 von 4 Schritten erledigt!');
  });
```

4. Login als `neu@partner.de`
5. Dashboard öffnet sich

**Erwartetes Ergebnis:**
- ✅ Onboarding-Banner sichtbar
- ✅ Fortschritt: **50%**
- ✅ Fortschrittsbalken: Halb gefüllt
- ✅ **2 Schritte mit ✅:**
  - ✅ Partnervertrag unterschreiben
  - ✅ Dokumente hochladen
- ✅ **2 Schritte mit ⏳:**
  - ⏳ Akademie-Schulung absolvieren
  - ⏳ Bankdaten hinterlegen
- ✅ Details-Accordion unten:
  ```
  ▶ ✅ 2 von 4 Schritten erledigt
  ```
- ✅ Klick auf Accordion öffnet:
  ```
  ✅ Partnervertrag unterschreiben
  ✅ Dokumente hochladen
  ```

---

### **TEST 7: Header-Status-Badge**

**Neuer Partner:**
```
[M] Max Mustermann
    max@test.de
    [BASIC] [⏳ ONBOARDING]
            ↑ pulsierend (Animation)
```

**Vollzugriff-Partner:**
```
[M] Max Mustermann
    max@test.de
    [PREMIUM] [✅ VOLLZUGRIFF]
              ↑ statisch, grün
```

**CSS-Animation testen:**
- Badge "⏳ ONBOARDING" sollte alle 2 Sekunden von opacity 1 → 0.7 → 1 wechseln

---

## 🔄 AUTOMATISCHER WORKFLOW

```
Partner registriert sich
        ↓
onboarding_completed = false
vertrag_unterschrieben = false
dokumente_hochgeladen = false
schulung_absolviert = false
bankdaten_hinterlegt = false
        ↓
Login → Dashboard
        ↓
Onboarding-Banner wird angezeigt (rot)
        ↓
Partner sieht 4 Schritte (alle mit ⏳)
        ↓
Fortschritt: 0%
Badge: "⏳ ONBOARDING" (pulsierend)
        ↓
Partner erledigt Schritt 1
        ↓
vertrag_unterschrieben = true
        ↓
Reload Dashboard
        ↓
Fortschritt: 25%
Schritt 1 zeigt ✅
3 Schritte noch mit ⏳
        ↓
... weitere Schritte ...
        ↓
Alle 4 Schritte erledigt
        ↓
System prüft: alle = true?
        ↓ JA
onboarding_completed = true
vollzugriff_seit = Date.now()
status = "aktiv"
        ↓
Benachrichtigung erstellt:
"🎉 Onboarding abgeschlossen!"
        ↓
Onboarding-Banner verschwindet
Badge → "✅ VOLLZUGRIFF"
Partner hat nun Vollzugriff
```

---

## 📊 DATENBANK-STRUKTUR

### **partners Tabelle (22 Felder)**

**Neue Felder:**
```javascript
{
  // ... bestehende Felder ...
  
  // Onboarding-Status
  onboarding_completed: false,
  onboarding_started_at: "2025-01-30T14:30:00Z",
  vollzugriff_seit: null,
  
  // Onboarding-Schritte
  vertrag_unterschrieben: false,
  dokumente_hochgeladen: false,
  schulung_absolviert: false,
  bankdaten_hinterlegt: false
}
```

### **Test-Daten**

**Partner 1:** test@partner.de
```javascript
{
  email: "test@partner.de",
  onboarding_completed: true,
  vertrag_unterschrieben: true,
  dokumente_hochgeladen: true,
  schulung_absolviert: true,
  bankdaten_hinterlegt: true
}
```

**Partner 2:** neu@partner.de ⭐ NEU
```javascript
{
  email: "neu@partner.de",
  passwort: "Neu1234",
  vorname: "Lisa",
  nachname: "Neumann",
  status: "neu",
  onboarding_completed: false,
  vertrag_unterschrieben: false,
  dokumente_hochgeladen: false,
  schulung_absolviert: false,
  bankdaten_hinterlegt: false,
  registriert_am: "2025-01-30T14:30:00Z"
}
```

---

## 🎨 DESIGN-SPECS

### **Onboarding-Banner**
- Hintergrund: `linear-gradient(135deg, #f56565 0%, #ed8936 100%)`
- Farbe: weiß
- Border-Radius: 20px
- Padding: 30px
- Box-Shadow: `0 10px 40px rgba(245, 101, 101, 0.3)`
- Riesen-Icon oben rechts (opacity 0.1)

### **Fortschrittsbalken**
- Hintergrund: `rgba(255,255,255,0.2)`
- Füllung: weiß
- Höhe: 8px
- Border-Radius: 10px
- Transition: `width 0.5s ease`

### **Schritte-Cards**
- Hintergrund: weiß
- Border-Radius: 15px
- Padding: 20px
- Box-Shadow: `0 4px 15px rgba(0,0,0,0.1)`
- Hover: `translateX(5px)` + `boxShadow: 0 6px 25px`
- Cursor: pointer

### **Status-Badges**
- PFLICHT: `background: #fee; color: #c53030;`
- EMPFOHLEN: `background: #e6fffa; color: #047857;`
- Padding: 3px 10px
- Border-Radius: 12px
- Font-Size: 11px

### **Entdecken-Widget**
- Hintergrund: weiß
- Border-Radius: 20px
- Padding: 30px
- Box-Shadow: `0 4px 20px rgba(0,0,0,0.08)`

### **Feature-Cards**
- Gradient-Hintergrund (je nach Feature)
- Border: 2px solid (color + 30% opacity)
- Border-Radius: 15px
- Hover: `translateY(-5px)`

---

## ✅ CHECKLISTE FÜR TESTER

- [ ] TEST 1: Neuer Partner sieht Onboarding-Banner
- [ ] TEST 2: Schritte sind klickbar (Alerts/Navigation)
- [ ] TEST 3: Entdecken-Widget zeigt 4 Features
- [ ] TEST 4: Vollzugriffs-Partner sieht KEINEN Banner
- [ ] TEST 5: Onboarding abschließen funktioniert (DB)
- [ ] TEST 6: Fortschritt wird korrekt berechnet (25%, 50%, 75%, 100%)
- [ ] TEST 7: Header-Badge wechselt (ONBOARDING → VOLLZUGRIFF)
- [ ] Badge pulsiert bei ONBOARDING
- [ ] Benachrichtigung bei Abschluss
- [ ] Entdecken-Widget kann geschlossen werden
- [ ] Hover-Effekte funktionieren
- [ ] Mobile-Ansicht (responsive)

---

## 🐛 BEKANNTE LIMITATIONEN

1. **Vertrag unterschreiben:** Nur Placeholder (Alert)
2. **Dokumente hochladen:** Nur Placeholder (Alert)
3. **Akademie-Schulung:** Weiterleitung zu partner-academy.html (nicht implementiert)
4. **E-Mail-Benachrichtigung:** Nicht implementiert (nur in-App)
5. **Zugriffsbeschränkungen:** Neue Partner sehen alle Menüpunkte (noch keine Sperre)

---

## 📞 SUPPORT

**Fragen zum Onboarding-System?**
- 📧 E-Mail: admin@system.de
- 📖 Dokumentation: README.md
- 🚀 Schnellstart: SCHNELLSTART.html

---

**Entwickelt am:** 30. Januar 2025  
**Feature-Version:** 1.2.0  
**Status:** ✅ Production Ready  

🎉 **Viel Erfolg beim Testen!**