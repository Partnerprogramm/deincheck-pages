# 🧪 TEST-ANLEITUNG: Filter & Charts (Admin-Dashboard)

## 🎯 Was wurde gefixt:
1. ❌ Demo-Daten ("45 Verträge") → ✅ Nur echte Daten
2. ❌ Filter funktionierten nicht → ✅ Von-Datum, Bis-Datum, Kategorie
3. ❌ Charts zeigten alte Daten → ✅ Live-Update bei Filter-Änderung

---

## 📋 Test-Schritte:

### **1. Admin-Dashboard öffnen**
`https://partnerprogrammdeincheck.com/admin-dashboard.html`

- **Login** als Admin
- **Sidebar:** Klick auf **"All-in-One"** (oder "Umsatz-Tracking")

---

### **2. Standard-Ansicht prüfen (ohne Filter)**
✅ **Erwartung:** Charts zeigen **echte Daten** aus Datenbank

**Prüfe:**
- **📊 Chart 1 - Provision über Zeit:**
  - Zeigt letzte 30 Tage
  - **KEINE zufälligen Demo-Kurven** (50-500€/Tag)
  - Wenn keine Daten → Zeigt "0€" für alle Tage
  
- **📊 Chart 2 - Verträge pro Kategorie:**
  - **KEINE Demo-Zahlen** (45, 28, 15, 12, 8)
  - Zeigt echte Anzahl: Mobilfunk, DSL, Strom, Versicherung, Gas
  - Wenn keine Daten → Zeigt "0" für alle Kategorien
  
- **📊 Chart 3 - Top 5 Partner:**
  - **KEINE Demo-Partner** (Lisa Müller: 12.500€, Max Schmidt: 8.900€, etc.)
  - Zeigt echte Partner mit echter Provision
  - Wenn keine Daten → Zeigt "Keine Daten vorhanden"

**Statistik-Karten (oben):**
- ✅ **Provision Heute:** Echte € (nicht Demo!)
- ✅ **Provision Woche:** Echte € (nicht Demo!)
- ✅ **Provision Monat:** Echte € (nicht Demo!)
- ✅ **Verträge (Monat):** Echte Anzahl

---

### **3. Zeitraum-Filter testen**
**Filter:** Dropdown "Zeitraum" ändern

**Test 1: "Heute"**
- ✅ Von-Datum = Heute
- ✅ Bis-Datum = Heute
- ✅ Charts zeigen **nur heute**
- ✅ Statistik-Karten aktualisieren sich

**Test 2: "Letzte Woche"**
- ✅ Von-Datum = Heute - 7 Tage
- ✅ Bis-Datum = Heute
- ✅ Charts zeigen **nur letzte 7 Tage**
- ✅ Statistik-Karten aktualisieren sich

**Test 3: "Dieser Monat"**
- ✅ Von-Datum = 1. Tag des Monats
- ✅ Bis-Datum = Heute
- ✅ Charts zeigen **nur diesen Monat**
- ✅ Statistik-Karten aktualisieren sich

---

### **4. Kategorie-Filter testen**
**Filter:** Dropdown "Kategorie" ändern

**Test 1: "Alle Kategorien"**
- ✅ Charts zeigen **alle Kategorien**
- ✅ Balken-Chart zeigt: Mobilfunk, DSL, Strom, Versicherung, Gas

**Test 2: "📱 Mobilfunk"**
- ✅ Charts zeigen **nur Mobilfunk-Verträge**
- ✅ Balken-Chart: **Nur Mobilfunk-Balken** hat Wert > 0
- ✅ Andere Kategorien (DSL, Strom, etc.) zeigen **0**

**Test 3: "🌐 DSL/Internet"**
- ✅ Charts zeigen **nur DSL-Verträge**
- ✅ Balken-Chart: **Nur DSL-Balken** hat Wert > 0

**Test 4: "⚡ Strom"**
- ✅ Charts zeigen **nur Strom-Verträge**
- ✅ Balken-Chart: **Nur Strom-Balken** hat Wert > 0

---

### **5. Benutzerdefinierte Datum-Filter testen**
**Filter:** Zeitraum = "Benutzerdefiniert"

**Test 1: Spezifischer Monat (z.B. Januar 2025)**
- ✅ Von-Datum: `2025-01-01`
- ✅ Bis-Datum: `2025-01-31`
- ✅ Charts zeigen **nur Januar 2025**
- ✅ Provision über Zeit: **Nur Tage in Januar** haben Werte

**Test 2: Einzelner Tag (z.B. 03.12.2025)**
- ✅ Von-Datum: `2025-12-03`
- ✅ Bis-Datum: `2025-12-03`
- ✅ Charts zeigen **nur diesen Tag**
- ✅ Provision über Zeit: **Nur 03.12.** hat Wert

---

### **6. Kombination: Datum + Kategorie**
**Filter:** Von-Datum + Bis-Datum + Kategorie

**Test: Mobilfunk im Dezember 2024**
- ✅ Von-Datum: `2024-12-01`
- ✅ Bis-Datum: `2024-12-31`
- ✅ Kategorie: **📱 Mobilfunk**
- ✅ Charts zeigen **nur Mobilfunk-Verträge in Dezember 2024**
- ✅ Balken-Chart: **Nur Mobilfunk** hat Wert
- ✅ Provision über Zeit: **Nur Dezember-Tage** haben Werte

---

## 🔍 Fehler-Überprüfung:

### **FALSCH (Vorher):**
❌ Charts zeigen **"45 Verträge"** (Demo-Daten)
❌ Partner **"Lisa Müller: 12.500€"** (Demo-Daten)
❌ Provision: **50-500€/Tag** (zufällige Demo-Werte)
❌ Filter ändern → **Keine Änderung** in Charts

### **RICHTIG (Jetzt):**
✅ Charts zeigen **echte Zahlen** aus Datenbank
✅ Partner: **Echte Partner** oder "Keine Daten vorhanden"
✅ Provision: **Echte €-Werte** oder "0€"
✅ Filter ändern → **Sofortige Aktualisierung** der Charts

---

## 📊 Browser-Konsole prüfen:

**F12 → Console**

**Erwartete Logs:**
```
🔄 loadAllInOneData() gestartet...
🔎 Filter angewendet: {vonDatum: "2025-12-01", bisDatum: "2025-12-31", kategorie: "mobilfunk"}
✅ Nach Filter: {provisionen: 5, vertraege: 12}
📊 renderCharts() aufgerufen mit: {provisionen: 5, vertraege: 12}
📈 Chart 1 - Provision über Zeit: {element: true, daten: 30, summe: 1234.56}
📊 Chart 2 - Verträge pro Kategorie: {element: true, daten: [12, 0, 0, 0, 0]}
💰 Chart 3 - Provision pro Partner: {element: true, partner: 3, top5: ["partner1@test.de", "partner2@test.de", "partner3@test.de"]}
✅ loadAllInOneData() abgeschlossen!
```

**KEINE Fehler:**
❌ `TypeError: Cannot read property '...' of undefined`
❌ `ReferenceError: ... is not defined`
❌ `Failed to fetch`

---

## ✅ Erfolgskriterien:

| **Kriterium** | **Status** |
|---------------|-----------|
| Keine Demo-Daten ("45 Verträge") | ✅ |
| Charts zeigen echte DB-Daten | ✅ |
| Von-Datum filtert korrekt | ✅ |
| Bis-Datum filtert korrekt | ✅ |
| Kategorie filtert korrekt | ✅ |
| Zeitraum (Heute/Woche/Monat) funktioniert | ✅ |
| Statistik-Karten aktualisieren sich | ✅ |
| Keine Konsolen-Fehler | ✅ |
| Filter-Kombinationen funktionieren | ✅ |

---

## 🐛 Bekannte Einschränkungen:

1. **Keine Daten?**
   - Wenn DB leer → Charts zeigen "0" oder "Keine Daten"
   - **Lösung:** Testdaten in `tables/vertragsabschluesse` & `tables/provisionen` anlegen

2. **Datum-Format:**
   - Datenbank muss ISO-Format verwenden: `YYYY-MM-DD` (z.B. `2025-12-03`)
   - Filter vergleicht: `datum >= vonDatum` und `datum <= bisDatum`

3. **Kategorie-Namen:**
   - **Groß-/Kleinschreibung ignoriert** (`toLowerCase()`)
   - Mögliche Werte: `mobilfunk`, `dsl`, `strom`, `versicherung`, `gas`

---

**Status:** ✅ **READY FOR TESTING**

Bitte teste alle Schritte und bestätige, dass alles korrekt funktioniert!
