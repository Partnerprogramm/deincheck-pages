# 🧪 NEUER PARTNER TEST - SCHRITT FÜR SCHRITT

**Datum:** 30. Januar 2025  
**Test-Account:** frisch@partner.de  
**Problem:** Dashboard zeigte alte Daten / Vollzugriff statt Onboarding

---

## 🎯 WICHTIG: CACHE KOMPLETT LÖSCHEN!

Das ist der **WICHTIGSTE** Schritt! Der Browser speichert alte Daten.

### **Methode 1: Privates Fenster (EMPFOHLEN)** ⭐

1. **Schließen Sie ALLE Browser-Tabs**

2. **Öffnen Sie ein NEUES privates/Inkognito-Fenster:**
   - **Chrome:** `Ctrl + Shift + N` (Windows) oder `Cmd + Shift + N` (Mac)
   - **Firefox:** `Ctrl + Shift + P` (Windows) oder `Cmd + Shift + P` (Mac)
   - **Safari:** `Cmd + Shift + N` (Mac)
   - **Edge:** `Ctrl + Shift + N` (Windows)

3. ✅ **Jetzt sind KEINE alten Daten mehr da!**

---

### **Methode 2: Cache manuell löschen**

**Wenn Sie kein privates Fenster nutzen können:**

1. Öffnen Sie die Partner-Login-Seite

2. Drücken Sie **F12** (öffnet Developer Tools)

3. Gehen Sie zu **Console** (oben im Developer-Tools-Fenster)

4. Kopieren Sie diesen Code und drücken Sie Enter:
```javascript
// Alles löschen
localStorage.clear();
sessionStorage.clear();
console.log('✅ Cache gelöscht!');

// Seite neu laden
location.reload();
```

5. Die Seite lädt neu - **JETZT** sind alte Daten weg!

---

## 🔐 NEUER TEST-ACCOUNT

```
E-Mail:    frisch@partner.de
Passwort:  Frisch123

Name:      Thomas Fischer
Status:    NEU (0% Onboarding)
Tarif:     BASIC
```

**Garantiert frisch aus der Datenbank:**
- ✅ `onboarding_completed: false`
- ✅ `vertrag_unterschrieben: false`
- ✅ `dokumente_hochgeladen: false`
- ✅ `schulung_absolviert: false`
- ✅ `bankdaten_hinterlegt: false`
- ✅ `status: "neu"`

---

## 📝 TEST-ABLAUF

### **Schritt 1: Vorbereitung**

1. ✅ **Privates Fenster öffnen** (siehe oben)
   - ODER Cache löschen (siehe oben)

2. ✅ **Developer Tools öffnen** (F12)
   - Gehen Sie zu **Console**
   - Lassen Sie es offen zum Debuggen

---

### **Schritt 2: Login**

1. Navigieren Sie zu: `partner-login.html`

2. Geben Sie ein:
   ```
   E-Mail:    frisch@partner.de
   Passwort:  Frisch123
   ```

3. Klicken Sie: **"Zum Dashboard"**

4. ⏳ Sie werden weitergeleitet zu: `partner-dashboard.html`

---

### **Schritt 3: Console prüfen**

**In der Console sollten Sie sehen:**

```
🔄 Lade aktuelle Partner-Daten aus DB für: frisch@partner.de
✅ Partner-Daten geladen: {email: "frisch@partner.de", ...}
📊 Lade Onboarding-Status für: frisch@partner.de
🔍 onboarding_completed: false
⏳ Onboarding läuft - Widget wird angezeigt
```

**Falls Sie NICHT diese Logs sehen:**
- ❌ Dashboard lädt alte Daten
- ❌ Cache wurde nicht gelöscht
- ➡️ Gehen Sie zurück zu **Schritt 1** und löschen Sie Cache nochmal!

---

### **Schritt 4: Dashboard prüfen**

#### **Header (oben rechts):**

✅ **Name:** Thomas Fischer  
✅ **E-Mail:** frisch@partner.de  
✅ **Tarif-Badge:** BASIC (grau)  
✅ **Status-Badge:** ⏳ ONBOARDING (orange, **pulsierend**)  

**WICHTIG:** Der Badge muss **"⏳ ONBOARDING"** zeigen!

❌ **Falls Sie "✅ VOLLZUGRIFF" sehen:**
- Cache wurde NICHT gelöscht
- Alte Daten sind noch da
- Zurück zu **Schritt 1**!

---

#### **Dashboard-Inhalt (von oben nach unten):**

**1. 🚀 JETZT LOSLEGEN! Widget** (WEIßER HINTERGRUND)

```
┌─────────────────────────────────────────────────┐
│              🚀 (große Rakete)                  │
│                                                 │
│          Jetzt loslegen!                        │
│                                                 │
│ Schließen Sie diese 4 Schritte ab, um         │
│ Vollzugriff zu erhalten                        │
│                                                 │
│ Ihr Fortschritt ───────── 0%                   │
│ ████░░░░░░░░░░░░░░░░░░░░                       │
│                                                 │
│ ┌─────────────────────────────────────────┐   │
│ │ ① 📝 Partnervertrag unterschreiben      │   │
│ │    PFLICHT                               │   │
│ │    [Jetzt erledigen →]                  │   │
│ └─────────────────────────────────────────┘   │
│                                                 │
│ ┌─────────────────────────────────────────┐   │
│ │ ② 📄 Dokumente hochladen                │   │
│ │    PFLICHT                               │   │
│ │    [Jetzt erledigen →]                  │   │
│ └─────────────────────────────────────────┘   │
│                                                 │
│ ┌─────────────────────────────────────────┐   │
│ │ ③ 🎓 Akademie-Schulung absolvieren      │   │
│ │    PFLICHT                               │   │
│ │    [Jetzt erledigen →]                  │   │
│ └─────────────────────────────────────────┘   │
│                                                 │
│ ┌─────────────────────────────────────────┐   │
│ │ ④ 🏦 Bankdaten hinterlegen              │   │
│ │    [Jetzt erledigen →]                  │   │
│ └─────────────────────────────────────────┘   │
│                                                 │
│ 💡 Tipp: Beginnen Sie mit der Akademie-       │
│    Schulung! Dort lernen Sie alles...         │
└─────────────────────────────────────────────────┘
```

✅ **Muss sichtbar sein!**  
✅ **Fortschritt:** 0%  
✅ **4 Schritte** mit Nummern ① ② ③ ④  
✅ **Jeder Schritt** hat "Jetzt erledigen →" Button  
✅ **Tipp-Box** am Ende (gelb)

---

**2. 🔍 Entdecken Sie mehr Möglichkeiten Widget**

(Weißer Hintergrund, 4 Feature-Cards)

✅ Sichtbar **UNTER** dem "Jetzt loslegen!" Widget  
✅ Hat X-Button zum Schließen

---

**3. 📰 Aktuelle News & Aktionen Widget**

(Lila Hintergrund)

✅ Sichtbar unter Entdecken-Widget

---

**4. 💰 Provisionen-Statistiken**

```
Offene Provisionen:     €0,00  ✅
Ausbezahlte Provisionen: €0,00  ✅
Gesamt-Umsatz:          €0,00  ✅
```

**WICHTIG:** Alle Provisionen müssen **€0,00** sein!

❌ **Falls Sie andere Beträge sehen:**
- Dashboard zeigt Daten von anderem Partner
- Cache wurde nicht gelöscht!
- Zurück zu **Schritt 1**!

---

**5. 📋 Meine Verträge & Provisionen**

```
┌─────────────────────────────────────┐
│                                     │
│     📋 Noch keine Verträge          │
│        vorhanden                    │
│                                     │
└─────────────────────────────────────┘
```

✅ Tabelle ist leer  
✅ Zeigt "Noch keine Verträge vorhanden"

❌ **Falls Sie Verträge sehen:**
- Alte Daten!
- Cache löschen!

---

### **Schritt 5: Interaktion testen**

**Test 1: Schritt anklicken**

1. Klicken Sie: **"① 📝 Partnervertrag unterschreiben"**

2. Alert erscheint:
```
📝 Partnervertrag unterschreiben

✅ SCHRITTE:

1. Vertrag herunterladen (wird bereitgestellt)
2. Vertrag ausdrucken oder digital unterschreiben
3. Unterschriebenen Vertrag hier hochladen

➡️ Diese Funktion wird vom Admin eingerichtet.
Sie erhalten dann eine E-Mail mit dem Download-Link.
```

---

**Test 2: Akademie-Schulung**

1. Klicken Sie: **"③ 🎓 Akademie-Schulung absolvieren"**

2. Sie werden weitergeleitet zu: `partner-academy.html`

---

**Test 3: Bankdaten**

1. Klicken Sie: **"④ 🏦 Bankdaten hinterlegen"**

2. Einstellungen-Modal öffnet sich

3. Tab **"Bankdaten"** ist aktiv

---

**Test 4: Entdecken-Widget schließen**

1. Scrollen Sie zu "Entdecken"-Widget

2. Klicken Sie **X-Button** (rechts oben)

3. Widget verschwindet

4. Im **Header-Menü** erscheint: **"🔍 Entdecken"**

---

## ✅ CHECKLISTE - MUSS ALLES ✅ SEIN!

### **Header:**
- [ ] Name: **Thomas Fischer**
- [ ] E-Mail: **frisch@partner.de**
- [ ] Status-Badge: **"⏳ ONBOARDING"** (orange, pulsierend)

### **Console-Logs:**
- [ ] "🔄 Lade aktuelle Partner-Daten..."
- [ ] "✅ Partner-Daten geladen..."
- [ ] "📊 Lade Onboarding-Status..."
- [ ] "🔍 onboarding_completed: false"
- [ ] "⏳ Onboarding läuft - Widget wird angezeigt"

### **Onboarding-Widget:**
- [ ] "🚀 Jetzt loslegen!" ist sichtbar
- [ ] Fortschritt: **0%**
- [ ] 4 Schritte mit Nummern ① ② ③ ④
- [ ] Jeder Schritt hat Button "Jetzt erledigen →"
- [ ] Tipp-Box (gelb) am Ende

### **Statistiken:**
- [ ] Provisionen: **€0,00**
- [ ] Verträge: **"Noch keine Verträge vorhanden"**

---

## 🐛 TROUBLESHOOTING

### **Problem 1: Badge zeigt "✅ VOLLZUGRIFF"**

**Ursache:** Alte Daten im Cache

**Lösung:**
1. Schließen Sie ALLE Browser-Tabs
2. Öffnen Sie **privates Fenster**
3. Versuchen Sie erneut

---

### **Problem 2: Onboarding-Widget fehlt**

**Ursache:** `onboarding_completed: true` in Cache

**Lösung:**
```javascript
// F12 → Console
localStorage.clear();
sessionStorage.clear();
location.reload();
```

---

### **Problem 3: Provisionen zeigen Beträge**

**Ursache:** Dashboard lädt Daten von anderem Partner

**Lösung:**
1. Cache komplett löschen
2. Privates Fenster nutzen
3. Mit **frisch@partner.de** neu einloggen

---

### **Problem 4: Console zeigt keine Logs**

**Ursache:** JavaScript-Fehler oder alte Code-Version

**Lösung:**
1. Seite **hart neu laden:** `Ctrl + Shift + R`
2. Cache löschen
3. Privates Fenster

---

## 📞 SUPPORT

**Falls es immer noch nicht funktioniert:**

1. **Machen Sie Screenshots von:**
   - Header (mit Badge)
   - Console-Logs
   - Dashboard-Inhalt

2. **Prüfen Sie in Console:**
```javascript
// Partner-Daten prüfen
console.log(localStorage.getItem('partnerEmail'));
console.log(JSON.parse(localStorage.getItem('partnerData')));
```

3. **Senden Sie mir:**
   - Screenshots
   - Console-Output
   - Welche Schritte Sie gemacht haben

---

## ✨ ERWARTETES ENDERGEBNIS

**Header:**
```
👤 Thomas Fischer
   frisch@partner.de
   [BASIC] [⏳ ONBOARDING]
```

**Dashboard:**
```
1. 🚀 Jetzt loslegen! (0% Fortschritt, 4 Schritte)
2. 🔍 Entdecken-Widget (4 Features)
3. 📰 News-Widget
4. 💰 Provisionen: €0,00
5. 📋 Verträge: Keine vorhanden
```

---

**Viel Erfolg beim Testen!** 🚀

_Stand: 30. Januar 2025_