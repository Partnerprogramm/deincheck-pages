# ✅ Umsatz-Tracking UPDATE - Korrekte Provisionen & Kundendaten

## 🎯 Was wurde behoben:

### **Problem 1: Falsche Beträge in Statistiken** ❌
**Vorher:**
- "Gesamt-Umsatz (Heute): 64,00€" ← **FALSCH** (Kundenpreis statt Provision)
- "Diese Woche: 64,00€" ← **FALSCH**
- "Dieser Monat: 64,00€" ← **FALSCH**
- "Provision (Monat): 420,00€" ← **RICHTIG** (aber verwirrend)

**Nachher:** ✅
- "Partner-Provision (Heute): 420,00€" ← **KORREKT!**
  - Zusatz: "Kundenumsatz: 64,00€" (kleingedruckt)
- "Provision (Woche): 420,00€" ← **KORREKT!**
- "Provision (Monat): 420,00€" ← **KORREKT!**
- "Anzahl Verträge: 1"

---

### **Problem 2: Keine Kundendaten sichtbar** ❌
**Vorher:**
- Partner sah: "Aire a, test@partner.de"
- Kunde unsichtbar!

**Nachher:** ✅
Tabelle zeigt jetzt:
- **Partner:** Max Mustermann (test@partner.de)
- **Kunde:** Hans Müller
  - 📧 hans.mueller@example.com
  - 📞 0176 12345678
- **Provision:** 420,00€ (grün, fett)
- **Kundenpreis:** 64,00€/Monat (graue Spalte)

---

## 📊 Neue Funktionen:

### **1. Korrekte Berechnung**
```javascript
// ✅ RICHTIG: Summe der PROVISIONEN
provisionHeute = vertraege.reduce((sum, v) => 
    sum + parseFloat(v.gesamt_provision), 0
);

// ℹ️ ZUSATZ: Summe der Kundenpreise (nur Info)
umsatzHeute = vertraege.reduce((sum, v) => 
    sum + parseFloat(v.tarif_preis), 0
);
```

### **2. Vollständige Kundendaten**
Jede Zeile zeigt:
- ✅ Kundenname (Vorname + Nachname)
- ✅ Kunden-E-Mail
- ✅ Kunden-Telefon
- ✅ Partner-Name + E-Mail
- ✅ Tarif-Details
- ✅ Provision in GROß und GRÜN
- ✅ Kundenpreis in klein

### **3. Intelligentes Kategorie-Mapping**
```javascript
Partner-Tool → Umsatz-Tracking
------------------------
sim-only     → mobilfunk ✅
internet     → dsl ✅
strom        → strom ✅
```

### **4. Status-Mapping**
```javascript
Vertrag Status → Anzeige
---------------------------
neu            → Offen (blau)
in_bearbeitung → Offen (blau)
aktiviert      → Bestätigt (grün)
abgelehnt      → Storniert (rot)
storniert      → Storniert (rot)
```

### **5. Filter-Funktionen**
- ⏰ **Zeitraum:** Heute / Diese Woche / Dieser Monat
- 🏷️ **Kategorie:** Mobilfunk / DSL / Strom / Alle
- 👤 **Partner:** Dropdown mit allen Partnern
- 📊 **Status:** Offen / Bestätigt / Ausgezahlt / Storniert

---

## 🚀 So sieht es jetzt aus:

### **Statistik-Karten (Oben):**
```
┌──────────────────────────────┐  ┌──────────────────────────────┐
│ 💰 Partner-Provision (Heute) │  │ 💰 Provision (Woche)         │
│                              │  │                              │
│      420,00 €                │  │      420,00 €                │
│                              │  │                              │
│ Kundenumsatz: 64,00 €        │  │ Kundenumsatz: 64,00 €        │
└──────────────────────────────┘  └──────────────────────────────┘

┌──────────────────────────────┐  ┌──────────────────────────────┐
│ 💰 Provision (Monat)         │  │ 📊 Anzahl Verträge           │
│                              │  │                              │
│      420,00 €                │  │         1                    │
│                              │  │                              │
│ Kundenumsatz: 64,00 €        │  │ Dieser Monat                 │
└──────────────────────────────┘  └──────────────────────────────┘
```

### **Tabelle (Unten):**
```
┌─────────┬─────────────────┬──────────┬─────────────────┬──────────────────────┬────────────┬──────────────┬──────────┐
│ Datum   │ Partner         │ Kategorie│ Produkt         │ Kunde                │ Provision  │ Kundenpreis  │ Status   │
├─────────┼─────────────────┼──────────┼─────────────────┼──────────────────────┼────────────┼──────────────┼──────────┤
│29.10.24 │ Aire a          │ 📱       │ O2              │ Hans Müller          │  420,00€   │ 64,00€       │ Neu      │
│         │ test@partner.de │ sim-only │ O2 Free M       │ 📧 hans@example.com  │  (GRÜN)    │              │          │
│         │                 │          │                 │ 📞 0176 12345678     │            │              │          │
└─────────┴─────────────────┴──────────┴─────────────────┴──────────────────────┴────────────┴──────────────┴──────────┘
```

---

## 📍 Wo finden Sie die Daten:

### **Admin-Dashboard:**
1. Öffne `admin-dashboard.html`
2. Klicke auf Tab: **"📊 Umsatz-Tracking"**
3. ✅ Sie sehen:
   - Korrekte Provisionen in allen 4 Statistik-Karten
   - Kundenumsatz als Zusatzinfo (klein)
   - Komplette Tabelle mit allen Kundendaten

### **Click auf Vertrag:**
- Klicken Sie auf eine Zeile in der Tabelle
- → Automatische Weiterleitung zu `admin-vertraege-uebersicht.html`
- → Dort sehen Sie ALLE Details inkl. Adresse, IBAN, Unterschrift, etc.

---

## 🔧 Technische Details:

### **Datenquelle:**
```javascript
// Lädt aus vertragsabschluesse Tabelle
fetch('tables/vertragsabschluesse?limit=1000&sort=-erstellt_am')
```

### **Berechnung:**
```javascript
// ✅ Provision = Summe aller gesamt_provision
const provisionMonat = vertraege
    .filter(v => v.erstellt_am >= monatsStart)
    .reduce((sum, v) => sum + parseFloat(v.gesamt_provision), 0);

// ℹ️ Kundenumsatz = Summe aller tarif_preis (nur Info)
const umsatzMonat = vertraege
    .filter(v => v.erstellt_am >= monatsStart)
    .reduce((sum, v) => sum + parseFloat(v.tarif_preis), 0);
```

### **Tabellen-Rendering:**
```javascript
// Zeigt alle Kundendaten an
<td>
    <strong>${vertrag.kunde_vorname} ${vertrag.kunde_nachname}</strong><br>
    <small>
        📧 ${vertrag.kunde_email}<br>
        📞 ${vertrag.kunde_telefon}
    </small>
</td>
```

---

## ✅ Checkliste:

- [x] Provision wird korrekt berechnet (nicht Kundenpreis)
- [x] Kundendaten sind vollständig sichtbar
- [x] Partner-Daten sind sichtbar
- [x] Kategorie-Mapping funktioniert
- [x] Status-Mapping funktioniert
- [x] Filter funktionieren (Zeitraum, Partner, Kategorie, Status)
- [x] Click auf Vertrag öffnet Details
- [x] Statistik-Karten zeigen richtige Werte

---

## 🎓 Beispiel-Szenario:

**Vertrag wurde erstellt:**
- Kunde: Hans Müller
- Tarif: O2 Free M
- Kundenpreis: 64,00€/Monat
- Partner-Provision: 420,00€ (einmalig)

**Was Sie sehen:**
- ✅ Statistik "Provision (Heute)": **420,00€** (KORREKT!)
- ✅ Zusatzinfo "Kundenumsatz": 64,00€ (nur Info)
- ✅ Tabelle zeigt:
  - Kunde: Hans Müller (📧 📞)
  - Partner: Aire a
  - Provision: **420,00€** (grün, fett)
  - Kundenpreis: 64,00€

---

## 🚨 Wichtig:

### **Was ist "Provision"?**
= **Einmaliger Betrag**, den der Partner verdient (z.B. 420€)

### **Was ist "Kundenumsatz"?**
= **Monatlicher Betrag**, den der Kunde zahlt (z.B. 64€)

### **Was wird in Statistiken angezeigt?**
= **NUR PROVISIONEN!** (Kundenumsatz ist nur Zusatzinfo)

---

## 📞 Support:

Bei Fragen:
1. Öffne Browser Console (F12)
2. Prüfe Fehler-Meldungen
3. Logs beginnen mit "📊 Lade Umsatz-Daten..."

**Alles funktioniert jetzt perfekt!** 🎉
