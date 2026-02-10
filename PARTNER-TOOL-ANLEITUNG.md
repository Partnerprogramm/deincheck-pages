# 📋 Partner-Tool Anleitung

## ✅ Vollständige Integration - Alle Daten werden gespeichert!

### 🎯 Was wurde implementiert:

#### **1. Datenbank-Tabellen**
- ✅ **`vertragsabschluesse`** - Alle Vertragsdetails (Kunde, Tarif, Provision)
- ✅ **`provisionen`** - Provisions-Tracking für Partner-Dashboard
- ✅ **`umsaetze`** - Umsatz-Tracking für Admin-Dashboard

#### **2. Partner-Tool.html Funktionen**
- ✅ **E-Mail Validierung** - Prüft Partner in Datenbank
- ✅ **Automatische Speicherung** in 3 Tabellen bei jedem Vertragsabschluss
- ✅ **Partner-Name wird automatisch geladen** aus Datenbank
- ✅ **Vertragsnummer** wird automatisch generiert (VTR-XXX / STR-XXX)

#### **3. Übersichtsseiten**
- ✅ **partner-meine-vertraege.html** - Partner sieht eigene Verträge
- ✅ **admin-vertraege-uebersicht.html** - Admin sieht alle Verträge
- ✅ **Beide Seiten zeigen Provisionen und Status**

---

## 🚀 So funktioniert es:

### **Schritt 1: Partner-E-Mail validieren**
1. Öffne `Partner-Tool.html`
2. Gib deine Partner-E-Mail ein (muss in `partners` Tabelle existieren)
3. Klicke auf "Freischalten"
4. ✅ System lädt automatisch deinen Namen aus der Datenbank

### **Schritt 2: Tarif auswählen**
1. Wähle Kategorie (SIM Only, Internet, Strom)
2. Wähle Anbieter (Telekom, Vodafone, O2, etc.)
3. Klicke auf gewünschten Tarif
4. ✅ Provision wird angezeigt

### **Schritt 3: Kundendaten erfassen**
1. Fülle Formular aus (Kunde, Adresse, IBAN)
2. Wähle optional Handy (bei Handy+Tarif)
3. Wähle optional Cross-Sell Produkte
4. Unterschrift des Kunden erfassen
5. Klicke "Auftrag absenden"

### **Schritt 4: Automatische Speicherung**
Nach dem Absenden werden **automatisch** folgende Datensätze erstellt:

#### ✅ In `vertragsabschluesse`:
```javascript
{
  vertragsnummer: "VTR-1730208345678-ABC123XYZ",
  partner_email: "deine@email.de",
  partner_name: "Max Mustermann",
  kategorie: "sim-only",
  anbieter: "Telekom",
  tarif_name: "MagentaMobil M",
  tarif_preis: 39.95,
  provision_betrag: 150,
  gesamt_provision: 180, // inkl. Cross-Sells
  vertrag_status: "neu",
  provision_status: "ausstehend",
  kunde_vorname: "Hans",
  kunde_nachname: "Müller",
  kunde_email: "hans@mueller.de",
  // ... alle weiteren Kundendaten
}
```

#### ✅ In `provisionen`:
```javascript
{
  partner_email: "deine@email.de",
  datum: 1730208345678,
  betrag: 180,
  typ: "sim-only",
  tarif: "MagentaMobil M",
  status: "ausstehend",
  kunde_name: "Hans Müller"
}
```

#### ✅ In `umsaetze`:
```javascript
{
  partner_email: "deine@email.de",
  partner_name: "Max Mustermann",
  datum: 1730208345678,
  betrag: 39.95, // Monatspreis
  kategorie: "mobilfunk",
  produkt: "Telekom - MagentaMobil M",
  kunde_name: "Hans Müller",
  provision_betrag: 180,
  status: "offen",
  notizen: "Vertragsnummer: VTR-1730208345678-ABC123XYZ"
}
```

---

## 📊 Wo sehe ich meine Daten?

### **Als Partner:**

1. **Partner Dashboard** (`partner-dashboard.html`)
   - Übersicht Provisionen
   - Statistiken

2. **Meine Verträge** (`partner-meine-vertraege.html`)
   - ✅ Alle deine Verträge
   - ✅ Status (Neu, In Bearbeitung, Aktiviert)
   - ✅ Provisionen (Ausstehend, Freigegeben, Ausgezahlt)
   - ✅ Filter nach Status, Kategorie
   - ✅ Suche nach Kunde/Tarif

3. **Provisionen** (`partner-provisionen.html`)
   - ✅ Detaillierte Provisions-Übersicht
   - ✅ Gesamt-Provisionen
   - ✅ Ausstehende/Ausgezahlte

### **Als Admin:**

1. **Admin Dashboard** (`admin-dashboard.html`)
   - Tab: **Umsatz-Tracking**
   - ✅ Hier siehst du alle Umsätze/Verträge
   - ✅ Nach Partner filterbar

2. **Verträge Übersicht** (`admin-vertraege-uebersicht.html`)
   - ✅ Alle Verträge aller Partner
   - ✅ Status ändern (Neu → In Bearbeitung → Aktiviert)
   - ✅ Admin-Notizen hinzufügen
   - ✅ Filter nach Partner, Status, Kategorie
   - ✅ Detail-Ansicht mit allen Kundendaten

---

## ⚙️ Provisions-Workflow:

### **Status-Änderungen:**

1. **Neu** → Partner erstellt Vertrag im Tool
   - Provision Status: `ausstehend`
   - Vertrag Status: `neu`

2. **In Bearbeitung** → Admin prüft Vertrag
   - Admin ändert Status auf "In Bearbeitung"

3. **Aktiviert** → Vertrag ist aktiv
   - Admin ändert Status auf "Aktiviert"
   - ✅ **Automatisch:** `provision_status` → `freigegeben`
   - ✅ **Automatisch:** `aktiviert_am` → aktuelles Datum
   - Partner kann Provision jetzt sehen

4. **Ausgezahlt** → Provision wurde überwiesen
   - Admin ändert `provision_status` → `ausgezahlt`
   - `ausgezahlt_am` → Auszahlungsdatum

---

## 🔧 Troubleshooting:

### **Problem: Vertrag wird nicht gespeichert**
**Lösung:** 
- Öffne Browser Console (F12)
- Prüfe Fehler-Meldungen
- Stelle sicher, dass Partner-E-Mail validiert wurde

### **Problem: Partner-Name ist leer**
**Lösung:**
- Stelle sicher, dass Partner in `tables/partners` existiert
- Prüfe, dass `vorname` und `nachname` Felder ausgefüllt sind

### **Problem: Provision erscheint nicht im Dashboard**
**Lösung:**
- Prüfe, dass `partner_email` in allen 3 Tabellen identisch ist
- Stelle sicher, dass Partner im Partner-Dashboard eingeloggt ist
- Aktualisiere die Seite (F5)

### **Problem: Umsatz-Tracking zeigt nichts**
**Lösung:**
- Gehe zu Admin Dashboard → Tab "Umsatz-Tracking"
- Prüfe Filter-Einstellungen
- Stelle sicher, dass Datum-Filter richtig gesetzt ist

---

## 📝 Kategorien-Mapping:

| Partner-Tool Kategorie | Umsatz-Kategorie |
|------------------------|------------------|
| sim-only               | mobilfunk        |
| internet               | dsl              |
| strom                  | strom            |

---

## 🎓 Best Practices:

1. **Immer Partner-E-Mail validieren** bevor du Tarif auswählst
2. **Alle Pflichtfelder ausfüllen** für erfolgreiche Speicherung
3. **IBAN validieren** - Grünes Häkchen muss erscheinen
4. **Unterschrift erfassen** - Canvas muss ausgefüllt sein
5. **Cross-Sells nutzen** für höhere Provisionen

---

## 🚨 Wichtige Hinweise:

### **Datenbank-Zugriff:**
- Alle Daten werden über RESTful Table API gespeichert
- Endpunkte: `tables/vertragsabschluesse`, `tables/provisionen`, `tables/umsaetze`
- Keine manuelle Datenbank-Änderung nötig

### **E-Mail-Benachrichtigungen:**
- Zusätzlich zur Datenbank-Speicherung wird E-Mail via FormSubmit versendet
- E-Mail ist unabhängig von Datenbank-Speicherung

### **Partner-Authentifizierung:**
- Partner-E-Mail wird in `localStorage` gespeichert
- Bleibt auch nach Seiten-Reload erhalten
- Kann jederzeit neu validiert werden

---

## 📞 Support:

Bei Fragen oder Problemen:
1. Browser Console (F12) prüfen
2. Netzwerk-Tab prüfen (API-Aufrufe)
3. In README.md nach weiteren Infos suchen

**Alle Systeme sind LIVE und funktionsbereit!** 🎉
