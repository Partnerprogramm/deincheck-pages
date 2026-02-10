# 🧪 BONUS-WIDGET TEST-ANLEITUNG

**Datum:** 15. Januar 2025  
**Tester:** _____________________  
**Status:** ✅ READY TO TEST

---

## 🎯 TEST-ZIEL

Das **Bonus-Widget** wurde neu gestaltet und an die richtige Position verschoben. Diese Anleitung hilft dir, alle Features zu testen.

---

## ✅ TEST-SCHRITTE

### 1️⃣ **Partner Dashboard öffnen**
```
Datei: partner-dashboard.html
```
- Im Browser öffnen (Firefox, Chrome, Safari, Edge)

---

### 2️⃣ **Login**
**Test-Account:**
- **E-Mail:** `test@partner.de`
- **Passwort:** beliebig (z.B. `test123`)

**Erwartung:**
- ✅ Dashboard lädt
- ✅ Sidebar ist sichtbar (links)
- ✅ "Dashboard" Seite ist aktiv

---

### 3️⃣ **Navigation: Provisionen-Seite**
**Aktion:**
- In der Sidebar auf **"Provisionen"** klicken

**Erwartung:**
- ✅ Seite wechselt zu "Provisionen"
- ✅ 4 Statistik-Cards oben sichtbar:
  - Gesamt (lila)
  - Ausgezahlt (grün)
  - Ausstehend (orange)
  - Dieser Monat (blau)
- ✅ Provisions-Chart sichtbar
- ✅ Provisions-Tabelle sichtbar

---

### 4️⃣ **Bonus-Widget finden**
**Aktion:**
- **Nach unten scrollen** (unter der Provisions-Tabelle)

**Erwartung:**
- ✅ **Bonus-Widget ist sichtbar**
- ✅ Farbiger Top-Border (Orange-Rot Gradient)
- ✅ Trophy-Icon 🏆 mit Schatten
- ✅ Headline: "Bonus-Ziele"
- ✅ Description: "Erreiche Meilensteine und sichere dir attraktive Prämien"

---

### 5️⃣ **Bonus-Stufen prüfen**
**Erwartung:**
Für das **Ladenlokal-Modell** sollten **3 Bonus-Stufen** angezeigt werden:

#### **Stufe 1: 50 Verträge → 500€**
- **Falls erreicht:**
  - ✅ Grüner Gradient-Hintergrund
  - ✅ Grünes Check-Icon ✓
  - ✅ "Erreicht" Badge
- **Falls nicht erreicht:**
  - ⚪ Weißer Hintergrund
  - 🏆 Orange Trophy-Icon
  - 🔢 Counter: "X noch" (z.B. "25 noch")
  - 📊 Progress Bar unten (orange)
  - 📈 Prozent-Anzeige (z.B. "48% erreicht")

#### **Stufe 2: 100 Verträge → 1.000€**
- Gleiches Design wie Stufe 1

#### **Stufe 3: 150 Verträge → 2.000€**
- Gleiches Design wie Stufe 1

---

### 6️⃣ **"Nächstes Ziel" Section prüfen**
**Aktion:**
- Ganz unten im Bonus-Widget schauen

**Erwartung:**
- ✅ Grauer Gradient-Hintergrund
- ✅ Target-Icon 🎯 mit Orange Gradient
- ✅ Text: "NÄCHSTES ZIEL" (Uppercase, klein)
- ✅ Betrag fett: z.B. **"1.000€ bei 100 Verträge"**
- ✅ "Details →" Link (blau, rechts)

---

### 7️⃣ **Hover-Effekte testen**
**Aktion:**
- Mit der Maus über eine **Bonus-Stufen-Card** fahren

**Erwartung:**
- ✅ Card hebt sich leicht an (`translateY(-3px)`)
- ✅ Schatten wird stärker
- ✅ Animation ist smooth (0.3s)

**Aktion:**
- Mit der Maus über "Details →" Link fahren

**Erwartung:**
- ✅ Farbe ändert sich von `#007aff` zu `#0051d5`

---

### 8️⃣ **Mobile-Ansicht testen**
**Aktion:**
- Browser-Fenster schmaler machen (< 768px)
- ODER: Browser DevTools öffnen → "Responsive Design Mode"

**Erwartung:**
- ✅ Bonus-Stufen-Cards stacken vertikal
- ✅ Text ist lesbar
- ✅ Icons bleiben gleich groß
- ✅ Hover-Effekte funktionieren (oder Tap auf Mobile)

---

### 9️⃣ **Browser-Konsole prüfen**
**Aktion:**
- Browser DevTools öffnen: `F12` oder `Cmd+Opt+I` (Mac)
- Tab "Console" öffnen

**Erwartung:**
- ✅ **0 JavaScript-Fehler** (keine roten Meldungen)
- ✅ Nur 1 Warnung erlaubt: `autocomplete attributes` (kann ignoriert werden)

---

### 🔟 **"Details →" Link testen**
**Aktion:**
- Auf "Details →" im "Nächstes Ziel" Section klicken

**Erwartung:**
- ✅ Navigation zu **"Meine Verträge"** Seite
- ✅ Verträge-Tabelle wird angezeigt

---

## 📊 TEST-CHECKLISTE

| Test | Erwartet | ✅ / ❌ | Notizen |
|------|----------|---------|---------|
| 1. Dashboard lädt | ✅ | |
| 2. Login funktioniert | ✅ | |
| 3. Navigation zu Provisionen | ✅ | |
| 4. Bonus-Widget sichtbar | ✅ | |
| 5. Trophy-Icon sichtbar | ✅ | |
| 6. 3 Bonus-Stufen angezeigt | ✅ | |
| 7. "Nächstes Ziel" Section sichtbar | ✅ | |
| 8. Hover-Effekte funktionieren | ✅ | |
| 9. Mobile-Ansicht OK | ✅ | |
| 10. 0 JavaScript-Fehler | ✅ | |
| 11. "Details →" Link funktioniert | ✅ | |

---

## 🐛 FEHLER MELDEN

**Falls etwas nicht funktioniert:**

1. **Screenshot machen** (Bonus-Widget sichtbar)
2. **Browser-Konsole Screenshot** (F12 → Console)
3. **Beschreibung:**
   - Was hast du gemacht?
   - Was war das erwartete Ergebnis?
   - Was ist stattdessen passiert?

**Beispiel:**
```
Test: Hover-Effekt auf Bonus-Stufe
Erwartet: Card hebt sich an
Tatsächlich: Keine Bewegung
Browser: Firefox 122
Screenshot: attached
```

---

## ✅ TEST ABGESCHLOSSEN

**Falls alle Tests ✅ sind:**
→ **Bonus-Widget ist PRODUCTION-READY** 🎉

**Falls Tests ❌ sind:**
→ Fehler melden (siehe oben)

---

**Viel Erfolg beim Testen!** 🚀
