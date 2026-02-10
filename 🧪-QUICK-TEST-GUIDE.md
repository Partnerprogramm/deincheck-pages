# 🧪 QUICK TEST GUIDE - 5 MINUTEN

## ⚡ ALLE 6 FEATURES IN 5 MINUTEN TESTEN

---

## 🎯 RUNDE 1: IMPORT & DESIGN (3 Minuten)

### Test 1: Partner-Import (1 Minute)
```
1. Öffne:    auto-import-partners.html
2. Warte:    CSV lädt (1-2 Sek)
3. Sehe:     "Partner gefunden: 310"
4. Klicke:   [🚀 Jetzt importieren]
5. Warte:    ~30-60 Sekunden (Live-Logs)
6. Fertig:   "✅ Import abgeschlossen"
```

### Test 2: Termine-Tab (30 Sekunden)
```
1. Öffne:    admin-dashboard.html
2. Klicke:   "Termine" (Sidebar)
3. Prüfe:    ✅ KEINE neue Seite
             ✅ Tab wechselt
```

### Test 3: Projekt-Design (1 Minute)
```
1. Tab:      "Aufgaben & Projekte"
2. Prüfe:    ✅ Einfache weiße Karten
             ✅ "+ Add Task" Link (rechts unten)
             ✅ "View completed (X)" Link
             ❌ KEINE Progress Bar
             ❌ KEINE Stats-Icons
```

---

## 🎯 RUNDE 2: PARTNER-VERWALTUNG (2 Minuten)

### Test 4: NEU-Badge (30 Sekunden)
```
1. Tab:      "Partner-Verwaltung"
2. Prüfe:    ✅ Partner < 4 Tage haben "🆕 NEU"
             ✅ Badge neben Name
             ✅ Lila Gradient-Design
```

### Test 5: Beitrittsdatum (30 Sekunden)
```
1. Tab:      "Partner-Verwaltung"
2. Prüfe:    ✅ Jeder Partner hat "📅 DD.MM.YYYY"
             ✅ Datum unter Email
             ✅ Graue Schrift
```

### Test 6: Detail-View (1 Minute)
```
1. Klicke:   "Details"-Button (beliebiger Partner)
2. Prüfe:    ✅ Modal öffnet (groß)
             ✅ Header mit Avatar + NEU-Badge
             ✅ 4 Stats-Karten (Verträge, Provision, etc.)
             ✅ 4 Tabs (Info, Verträge, Onboarding, Bank)
3. Klicke:   Tab "Verträge"
4. Prüfe:    ✅ Verträge-Liste sichtbar
5. Klicke:   Tab "Onboarding"
6. Prüfe:    ✅ 6 Schritte mit ✅/❌
7. Klicke:   Tab "Bank"
8. Prüfe:    ✅ IBAN sichtbar
9. Klicke:   X-Button
10. Prüfe:   ✅ Modal schließt
```

---

## ✅ ERFOLGS-CHECKLIST

Alle 6 Features abhaken:

- [ ] **Partner-Import:** 310 Partner importiert
- [ ] **Termine:** Tab-Wechsel (keine neue Seite)
- [ ] **Projekte:** Cleanes Design (+ Add Task Link)
- [ ] **NEU-Badge:** Partner < 4 Tage markiert
- [ ] **Beitrittsdatum:** Datum unter Email
- [ ] **Detail-View:** 4 Tabs funktionieren

---

## 📸 SCREENSHOTS MACHEN

### Priorität 1 (MUST):
1. ✅ Partner-Import (Success-Screen)
2. ✅ Partner-Tabelle (mit NEU-Badge + Datum)
3. ✅ Detail-Modal (alle 4 Tabs)

### Priorität 2 (NICE):
4. ✅ Projekt-Karten (neues Design)
5. ✅ Console-Logs (F12)

---

## ❓ HÄUFIGE FRAGEN

### Q: Import zeigt "Partner gefunden: 0"?
**A:** CSV-Datei fehlt! Prüfe ob `affiliates-collection-20648.csv` im Ordner ist.

### Q: NEU-Badge erscheint nicht?
**A:** Partner muss < 4 Tage alt sein. Prüfe `created_at` oder `registriert_am` Feld.

### Q: Detail-Modal zeigt keine Verträge?
**A:** Normal! Partner haben noch keine Verträge. Prüfe andere Tabs (Info, Onboarding, Bank).

### Q: Projekt-Design noch alt?
**A:** Hard Refresh: `Strg + Shift + R` oder Inkognito-Modus testen.

---

## 🔧 TROUBLESHOOTING

### Problem: CSV lädt nicht
```
1. Hard Refresh (Strg + Shift + R)
2. F12 → Console → Fehler kopieren
3. Datei-Pfad prüfen
```

### Problem: Modal öffnet nicht
```
1. F12 → Console → Fehler?
2. JavaScript-Error?
3. Hard Refresh
```

### Problem: Tabs wechseln nicht
```
1. F12 → Console → Logs prüfen
2. Auf Button klicken (nicht auf Text)
3. Hard Refresh
```

---

## 🎉 FERTIG!

Wenn alle Checkboxen ✅ sind:

**→ Alles funktioniert!**  
**→ Screenshots schicken**  
**→ Feedback geben**

---

**Dauer:** 5 Minuten  
**Schwierigkeit:** ⭐ Einfach  
**Status:** Ready for Testing! 🚀
