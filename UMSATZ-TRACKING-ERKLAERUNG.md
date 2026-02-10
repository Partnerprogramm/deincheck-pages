# 💰 Umsatz-Tracking Erklärung

## ✅ Problem gelöst: Klare Trennung von Partner-Provision und Kundenumsatz

### 📊 **Neue Anzeige im Admin-Dashboard:**

#### **Karten-Übersicht (oben):**
```
┌─────────────────────────────────────────┐
│ 💰 Partner-Provision (Heute)            │
│                                         │
│        420,00 €                         │
│                                         │
│ Kundenumsatz: 64,00 €                   │
└─────────────────────────────────────────┘
```

**Bedeutung:**
- **Große Zahl (420€)** = Was der Partner als **Provision** bekommt
- **Kleine Zahl (64€)** = Was der Kunde **monatlich zahlt**

---

### 📋 **Tabelle "Alle Verkäufe":**

| Datum | Partner | Kategorie | Produkt | Kunde | 💰 Partner-Provision | 💳 Kundenpreis (Monat) | Status |
|-------|---------|-----------|---------|-------|---------------------|----------------------|--------|
| 29.10.2024 | Max Mustermann<br>test@partner.de | 📱 mobilfunk | Telekom - MagentaMobil M | Hans Müller | **💰 420,00 €**<br><small>Partner-Provision</small> | **💳 64,00 €**<br><small>Monatspreis Kunde</small> | Offen |

**Bedeutung:**
- **Spalte 6 (420€)**: Was der Partner verdient ➡️ **WICHTIG FÜR PARTNER**
- **Spalte 7 (64€)**: Was der Kunde monatlich zahlt ➡️ **INFO**

---

### 🏆 **Partner-Ranking:**

```
🥇 Max Mustermann
   test@partner.de
   
   💰 420,00 €
   1 Verkäufe • Kundenumsatz: 64,00 €
```

**Bedeutung:**
- **Große Zahl (420€)** = Partner-Provision (nach der verdient wird)
- **Kleine Zahl (64€)** = Kundenumsatz (nur Info)

---

## 🎯 **Warum diese Aufteilung?**

### **Partner-Sicht:**
- Partner interessiert sich für: **"Wie viel verdiene ich?"** ➡️ **420€ Provision**
- Kundenpreis ist nebensächlich

### **Admin-Sicht:**
- Admin braucht beide Zahlen:
  - **420€** = Kosten für uns (Partner-Provision)
  - **64€** = Einnahmen vom Kunden (monatlich)

### **Berechnung im Hintergrund:**

```javascript
// In Partner-Tool.html beim Speichern:

// 1. Vertrag in vertragsabschluesse
{
  tarif_preis: 64.00,           // Kundenpreis
  provision_betrag: 150,        // Basis-Provision
  cross_sell_provision: 30,     // Cross-Sell Provision
  gesamt_provision: 180         // Total für Partner (aber hier 420€ im Beispiel)
}

// 2. In provisionen
{
  betrag: 420,                  // Partner bekommt 420€
  tarif: "MagentaMobil M"
}

// 3. In umsaetze
{
  betrag: 64.00,                // Kunde zahlt 64€/Monat
  provision_betrag: 420         // Partner bekommt 420€ einmalig
}
```

---

## 📈 **Charts und Diagramme:**

### **Kategorie-Chart (Tortendiagramm):**
- Zeigt **Kundenumsatz** nach Kategorie
- Hilfreich um zu sehen, welche Kategorien am meisten verkauft werden

### **Täglicher Umsatz-Verlauf (Balkendiagramm):**
- Zeigt **Kundenumsatz** pro Tag
- Zeigt Verkaufs-Trends

---

## 🔧 **Technische Details:**

### **Datenstruktur in `umsaetze` Tabelle:**

| Feld | Beispiel | Bedeutung |
|------|----------|-----------|
| `betrag` | 64.00 | Monatlicher Kundenpreis |
| `provision_betrag` | 420.00 | Partner-Provision (einmalig) |
| `provision_prozent` | 0 | Prozentsatz (optional) |
| `kategorie` | mobilfunk | Produktkategorie |
| `partner_email` | test@partner.de | Partner-Zuordnung |
| `status` | offen | Zahlungsstatus |

### **Berechnungen:**

```javascript
// Heute
const heuteProvision = heuteData.reduce((sum, u) => sum + u.provision_betrag, 0);
// ➡️ Summe aller Partner-Provisionen heute

const heuteUmsatz = heuteData.reduce((sum, u) => sum + u.betrag, 0);
// ➡️ Summe aller monatlichen Kundenpreise heute
```

---

## ✅ **Zusammenfassung:**

| Wo | Was wird angezeigt | Größe/Priorität |
|----|-------------------|-----------------|
| **Karten (oben)** | Partner-Provision | **GROSS** (wichtig) |
| | Kundenumsatz | klein (Info) |
| **Tabelle** | Spalte 6: Partner-Provision | **GROSS** 💰 |
| | Spalte 7: Kundenpreis | normal 💳 |
| **Ranking** | Partner-Provision | **GROSS** 💰 |
| | Kundenumsatz | klein (Info) |

---

## 🎯 **Beispiel-Szenario:**

**Partner verkauft 1 Vertrag:**
- **Kunde zahlt:** 64€/Monat (laufend)
- **Partner erhält:** 420€ (einmalig)
- **In Dashboard:**
  - Karte zeigt: **420€** groß, 64€ klein
  - Tabelle zeigt: **💰 420€** in Spalte 6, **💳 64€** in Spalte 7

**Partner verkauft 10 Verträge:**
- **Kunden zahlen:** 10 × 64€ = 640€/Monat (zusammen)
- **Partner erhält:** 10 × 420€ = 4.200€ (einmalig)
- **In Dashboard:**
  - Karte zeigt: **4.200€** groß, 640€ klein

---

## 📞 **Support:**

Falls die Anzeige noch verwirrend ist, können folgende Anpassungen vorgenommen werden:
1. Kundenumsatz komplett ausblenden
2. Nur Provision anzeigen
3. Separate Tabs für "Provision" und "Kundenumsatz"

**Aktuell ist es so optimal, weil:**
- ✅ Partner-Provision ist **prominent** (groß, fett, Emoji)
- ✅ Kundenumsatz ist **optional** (klein, grau, zusätzlich)
- ✅ Beide Werte sind **verfügbar** für Admin-Entscheidungen
