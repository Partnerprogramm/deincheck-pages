# 🧪 TEST: Provisions-Flow (Partner-Tool → Dashboard)

## 🎯 Was wird getestet?

```
Partner-Tool → Tarif auswählen → Kunde eintragen
    ↓
✅ Provision wird automatisch gespeichert
✅ Partner sieht es im Dashboard
✅ Admin sieht es im Admin-Dashboard
```

---

## 📋 SCHRITT-FÜR-SCHRITT TEST

### **Phase 1: Partner-Tool öffnen**

```
1. Öffne: partner-tool.html
```

---

### **Phase 2: Partner-E-Mail eingeben**

```
1. Oben im Hero-Bereich findest du:
   "Ihre E-Mail:" [Eingabefeld] [Freischalten]

2. E-Mail eingeben: demo@partner.de

3. Klicke "Freischalten"
   → Button wird grün ✅
   → "freigeschaltet" erscheint
```

**⚠️ WICHTIG:** Partner-E-Mail MUSS freigeschaltet sein, sonst geht's nicht weiter!

---

### **Phase 3: Tarif auswählen**

#### **Option A: Mobilfunk-Tarif**

```
1. Kategorie: "SIM Only" ist Standard

2. Anbieter wählen:
   - O2
   - Freenet O2
   - Freenet Telekom
   - etc.

3. Tarif auswählen (Beispiel):
   📱 O2 Mobile M (2024)
   💰 24,99€/Monat
   💵 Provision: 25,00€
   
   [WÄHLEN] ← Klicken
```

#### **Option B: Internet-Tarif**

```
1. Kategorie: "Internet" wählen

2. Anbieter: 1&1

3. Tarif auswählen (Beispiel):
   🌐 1&1 DSL 50
   💰 19,99€/Monat (1.-10. Monat)
   💵 Provision: 50,00€
   
   [WÄHLEN] ← Klicken
```

#### **Option C: Strom-Tarif**

```
1. Kategorie: "Strom" wählen

2. Tarif auswählen (Beispiel):
   ⚡ Gewerbestrom
   💰 Ab 0,25€/kWh
   💵 Provision: 100,00€
   
   [WÄHLEN] ← Klicken
```

---

### **Phase 4: Kundenformular ausfüllen**

Nach Tarif-Auswahl öffnet sich das Kundenformular:

```
✅ Partner E-Mail: demo@partner.de (schon ausgefüllt!)
✅ Gewählter Tarif: O2 Mobile M (2024) (schon ausgefüllt!)
✅ Provision: 25,00€ (schon ausgefüllt!)

KUNDE-DATEN EINGEBEN:
━━━━━━━━━━━━━━━━━━━━━━━
Vorname *: Max
Nachname *: Mustermann
Straße *: Teststraße 1
PLZ *: 12345
Ort *: Berlin
E-Mail *: max@test.de
Telefon *: 0171 1234567

WEITERE FELDER (je nach Tarif):
━━━━━━━━━━━━━━━━━━━━━━━
Geburtsdatum: 01.01.1990
Rufnummer portieren: Ja/Nein
etc.

IBAN (bei Vertrag):
━━━━━━━━━━━━━━━━━━━━━━━
IBAN: DE89370400440532013000

DATENSCHUTZ:
━━━━━━━━━━━━━━━━━━━━━━━
☑ Ich akzeptiere die Datenschutzerklärung
```

---

### **Phase 5: Formular absenden**

```
1. Klicke unten: [Verbindlich bestellen]

2. ✅ Erwartung:
   - Success-Message erscheint
   - Formular wird versendet
   - 🎉 Provision-Benachrichtigung erscheint oben rechts:
   
   ┌─────────────────────────────┐
   │ 🎉 Provision verdient!      │
   │    €25,00                   │
   │    O2 Mobile M (2024)       │
   └─────────────────────────────┘
   
   - Nach 5 Sekunden verschwindet sie
```

---

### **Phase 6: Partner-Dashboard prüfen**

```
1. Öffne neuen Tab: partner-dashboard.html

2. Login: demo@partner.de

3. Dashboard öffnet sich

4. ✅ ERWARTUNG:
   
   Gesamt-Provisionen: €430,50
   (War: €405,50 + Neu: €25,00)
   
   Ausstehend: €110,50
   (Neue Provision ist "ausstehend")
   
   Verträge: 4
   (War: 3 + Neu: 1)
   
   Chart zeigt:
   - Mobilfunk: €230,00 (neu!)
   - Strom: €200,00
   
   Letzte Provisionen (unten):
   ┌───────────────────────────────────────────────────────┐
   │ Partner        │ Betrag  │ Typ       │ Tarif         │
   ├───────────────────────────────────────────────────────┤
   │ demo@...       │ €25,00  │ Mobilfunk │ O2 Mobile M   │ ← NEU!
   │ demo@...       │ €120,00 │ Mobilfunk │ O2 Mobile M   │
   │ demo@...       │ €85,50  │ Mobilfunk │ Vodafone Red  │
   │ demo@...       │ €200,00 │ Strom     │ Strom Gewerbe │
   └───────────────────────────────────────────────────────┘
```

---

### **Phase 7: Admin-Dashboard prüfen**

```
1. Öffne neuen Tab: admin-dashboard.html

2. Tab: "Provisionen eintragen"

3. Scrolle zu "Letzte Provisionen"

4. ✅ ERWARTUNG:
   
   Tabelle zeigt neue Provision:
   ┌────────────────────────────────────────────────────────────────┐
   │ Partner         │ Betrag  │ Typ       │ Tarif      │ Status   │
   ├────────────────────────────────────────────────────────────────┤
   │ demo@partner.de │ €25,00  │ mobilfunk │ O2 Mobile M│ ausstehend│ ← NEU!
   │ demo@partner.de │ €120,00 │ mobilfunk │ O2 Mobile M│ ausgezahlt│
   └────────────────────────────────────────────────────────────────┘
```

---

## 🎯 KOMPLETT-TEST CHECKLISTE

### **Test 1: Mobilfunk-Tarif**
- [ ] Partner-E-Mail eingegeben & freigeschaltet
- [ ] Mobilfunk-Tarif gewählt (z.B. O2 Mobile M)
- [ ] Kundenformular ausgefüllt
- [ ] Formular abgeschickt
- [ ] 🎉 Provision-Benachrichtigung erscheint
- [ ] Partner-Dashboard zeigt neue Provision
- [ ] Admin-Dashboard zeigt neue Provision

### **Test 2: Internet-Tarif**
- [ ] Partner-E-Mail: demo@partner.de
- [ ] Internet-Kategorie gewählt
- [ ] 1&1 DSL Tarif gewählt
- [ ] Kundenformular ausgefüllt
- [ ] Formular abgeschickt
- [ ] Provision erscheint in Dashboards
- [ ] Typ: "dsl" korrekt

### **Test 3: Strom-Tarif**
- [ ] Partner-E-Mail: demo@partner.de
- [ ] Strom-Kategorie gewählt
- [ ] Strom-Tarif gewählt
- [ ] Kundenformular ausgefüllt
- [ ] Formular abgeschickt
- [ ] Provision erscheint
- [ ] Typ: "strom" korrekt

---

## 🔍 ERWARTETE DATEN IN DATENBANK

Nach Test sollte neue Row in `tables/provisionen` sein:

```json
{
  "id": "auto-generated",
  "partner_email": "demo@partner.de",
  "datum": "2024-10-25T14:30:00Z",
  "betrag": 25.00,
  "typ": "mobilfunk",
  "tarif": "O2 Mobile M (2024)",
  "status": "ausstehend",
  "kunde_name": "Max Mustermann"
}
```

---

## 🐛 TROUBLESHOOTING

### **Problem: Provision wird nicht gespeichert**

**Lösung:**
1. Browser-Console öffnen (F12)
2. Schaue nach:
   ```
   ✅ Provision gespeichert: {data...}
   ```
3. Falls Fehler:
   ```
   ❌ Fehler beim Speichern der Provision: 404
   ```
   → Table API nicht erreichbar

---

### **Problem: Partner-E-Mail nicht validiert**

**Lösung:**
1. Oben im Partner-Tool
2. E-Mail eingeben
3. **Button "Freischalten" klicken!**
4. Button wird grün → Jetzt geht's

---

### **Problem: Provision erscheint nicht im Dashboard**

**Lösung:**
1. Dashboard neu laden (F5)
2. Prüfe ob richtige E-Mail eingeloggt:
   ```
   demo@partner.de
   ```
3. Prüfe in Browser-Console ob Daten geladen:
   ```javascript
   fetch('tables/provisionen?search=demo@partner.de')
     .then(r => r.json())
     .then(console.log)
   ```

---

### **Problem: Success-Message erscheint nicht**

**Das ist OK!** 
- Provision wird trotzdem gespeichert
- Prüfe Dashboard - dort muss sie sein

---

## 📊 MEHRFACH-TEST

**Teste mehrere Verträge hintereinander:**

```
1. Tarif 1: O2 Mobile M (25€)
2. Tarif 2: Vodafone Red (35€)
3. Tarif 3: Telekom XL (60€)

Erwartung im Dashboard:
━━━━━━━━━━━━━━━━━━━━━━━
Gesamt: €525,50 (405,50 + 25 + 35 + 60)
Ausstehend: €230,50 (alle neuen sind ausstehend)
Verträge: 6 (3 alt + 3 neu)
```

---

## ✅ ERFOLGS-KRITERIEN

**Test ist erfolgreich wenn:**
1. ✅ Partner kann Tarif wählen
2. ✅ Kundenformular funktioniert
3. ✅ Formular wird versendet
4. ✅ Provision wird in DB gespeichert
5. ✅ Partner sieht Provision im Dashboard
6. ✅ Admin sieht Provision im Admin-Dashboard
7. ✅ Alle Daten sind korrekt (Betrag, Typ, Tarif)

---

## 🚀 READY TO TEST!

```bash
1. Öffne: partner-tool.html
2. E-Mail: demo@partner.de
3. Tarif wählen
4. Formular ausfüllen
5. Absenden
6. Prüfe Dashboards!
```

**Viel Erfolg beim Testen! 🎉**
