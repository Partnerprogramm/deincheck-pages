# 🧪 KOMPLETTE TEST-ANLEITUNG - Neuer Partner

## 🎯 ZIEL
Testen Sie, dass ein **komplett neuer Partner** garantiert €0,00 Provisionen sieht.

---

## ✅ SCHRITT 1: NEUEN PARTNER ERSTELLEN

### **1.1 Tool öffnen**
```
Öffnen Sie: NEUER-PARTNER-ERSTELLEN.html
```

### **1.2 Formular ausfüllen**

**Empfohlene Test-Daten:**
```
E-Mail: neutest@partner.de
Passwort: Test1234
Vorname: Neu
Nachname: Test
Firma: Test GmbH
Telefon: +49 123 456789
Tarif: Standard
Onboarding: ⏳ Im Onboarding (empfohlen)
```

**Oder drücken Sie:** `Strg + Shift + D` (Auto-Fill mit Zeitstempel-E-Mail)

### **1.3 Partner erstellen**
- Klicken Sie: **"🚀 Partner erstellen"**
- Warten bis: **"✅ Partner erfolgreich erstellt!"** erscheint
- **Notieren Sie die Login-Daten!**

---

## ✅ SCHRITT 2: PARTNER EINLOGGEN (PRIVATE WINDOW!)

### **2.1 Private Window öffnen**
```
Chrome/Edge: Strg + Shift + N
Firefox: Strg + Shift + P
Safari: Cmd + Shift + N
```

### **2.2 Zum Partner-Login**
```
URL: partner-login.html
```

### **2.3 Einloggen**
```
E-Mail: [Die E-Mail aus Schritt 1]
Passwort: Test1234
```

---

## ✅ SCHRITT 3: DASHBOARD PRÜFEN

### **3.1 Was Sie sehen SOLLTEN:**

#### **✅ Onboarding-Widget (wenn "Im Onboarding" gewählt):**
- Widget: "🚀 Jetzt loslegen!"
- Fortschritt: 0%
- 4 Schritte mit weißen Nummern
- Badge: "⏳ ONBOARDING" (orange, pulsierend)

#### **✅ Provisions-Statistiken:**
```
💰 GESAMT-PROVISIONEN: 0,00 €
💸 OFFEN: 0,00 €
🔓 FREIGEGEBEN: 0,00 €
💸 AUSGEZAHLT: 0,00 €
```

#### **✅ Meine Verträge:**
```
"Noch keine Verträge vorhanden" oder leere Tabelle
```

#### **✅ Benachrichtigungen:**
```
Bell-Icon OHNE Badge (keine Benachrichtigungen)
```

---

### **3.2 Was Sie NICHT sehen sollten:**

#### **❌ FALSCH:**
- ❌ Provisions-Statistiken > 0€
- ❌ Alte Verträge in der Tabelle
- ❌ Badge "✅ VOLLZUGRIFF" (wenn Onboarding gewählt)
- ❌ Alte Benachrichtigungen

---

## ✅ SCHRITT 4: VERTRAGSABSCHLUSS TESTEN

### **4.1 Zum Verkaufs-Tool**
```
Im Dashboard: Klick auf "Verkaufs-Tool" (grüner Button im Menü)
Oder direkt: Partner-Tool.html
```

### **4.2 Vertrag erstellen**

**Mindest-Daten:**
```
Kategorie: Strom
Anbieter: TestStrom
Tarif: TestTarif
Preis: 50 €
Laufzeit: 24 Monate
Basis-Provision: 100 €

Kunde:
- Vorname: Test
- Nachname: Kunde
- E-Mail: kunde@test.de
- Unterschrift: [Einfach kritzeln]
```

### **4.3 Speichern**
- Klicken Sie: **"Vertrag speichern"**
- Warten bis: **"✅ Vertrag erfolgreich gespeichert!"**

---

## ✅ SCHRITT 5: ADMIN PRÜFEN

### **5.1 Admin Login (neues Tab/Window)**
```
URL: admin-login.html
E-Mail: admin@deincheck.de
Passwort: Admin2025!
```

### **5.2 Dashboard prüfen**

**Was Sie sehen sollten:**
- Bell-Icon mit Badge **"1"** (neue Benachrichtigung)
- Klick auf Bell → **"📝 Neuer Vertragsabschluss"**
- Benachrichtigung zeigt:
  - Partner-Name
  - Vertragsnummer
  - Kategorie (Strom)
  - Provision (100 €)

### **5.3 Vertrag prüfen**
1. Klicken Sie in der Benachrichtigung: **"Vertrag ansehen"**
2. Oder gehen Sie zu: **admin-vertraege-uebersicht.html**
3. Finden Sie den neuen Vertrag

**Vertrag sollte zeigen:**
- Partner-E-Mail: `[Ihre Test-E-Mail]`
- Status: **"ausstehend"** (orange)
- Provision-Status: **"ausstehend"** (orange)
- Alle Kunden-Daten

---

## ✅ SCHRITT 6: VERTRAG AKTIVIEREN

### **6.1 Im Admin-Vertrags-Detail**
1. Öffnen Sie den Vertrag (Click auf Zeile)
2. Ändern Sie: **Vertrag-Status → "aktiviert"**
3. Klicken Sie: **"💾 Änderungen speichern"**

**Erwartetes Ergebnis:**
- ✅ Status wechselt zu "aktiviert" (grün)
- ✅ Meldung: "Vertrag aktualisiert"
- ✅ **Automatisch**: Partner-Benachrichtigung wird erstellt

---

## ✅ SCHRITT 7: PARTNER BENACHRICHTIGUNG PRÜFEN

### **7.1 Zurück zum Partner-Dashboard**
```
Wechseln Sie zurück zum Partner-Tab
(oder öffnen Sie neu: partner-dashboard.html)
```

### **7.2 Warten**
- **Option A**: 30 Sekunden warten (Auto-Refresh)
- **Option B**: Seite neu laden (`F5`)
- **Option C**: Force Refresh (`Strg + Shift + R`)

### **7.3 Benachrichtigung prüfen**

**Was Sie sehen sollten:**
- Bell-Icon mit Badge **"1"**
- Klick auf Bell → Dropdown öffnet
- Benachrichtigung: **"🎉 Vertrag wurde aktiviert!"**
- Text: "Ihr Strom-Vertrag wurde vom Admin aktiviert..."
- Vertragsnummer wird angezeigt

---

## ✅ SCHRITT 8: PROVISION AUSZAHLEN

### **8.1 Im Admin**
1. Zurück zu: **admin-vertraege-uebersicht.html**
2. Vertrag öffnen
3. Ändern Sie: **Provision-Status → "genehmigt"**
4. Speichern
5. Dann ändern Sie: **Provision-Status → "ausgezahlt"**
6. Speichern

**Erwartetes Ergebnis:**
- ✅ Status wechselt zu "ausgezahlt" (grün)
- ✅ Timestamp "Ausgezahlt am" wird gesetzt
- ✅ **Automatisch**: Partner-Benachrichtigung wird erstellt

### **8.2 Im Partner-Dashboard prüfen**
- Warten 30 Sek. oder Seite neu laden
- Bell-Icon zeigt Badge **"2"**
- Neue Benachrichtigung: **"💰 Provision ausgezahlt!"**
- Text: "Die Provision für Vertrag [Nr] wurde überwiesen."
- **Betrag wird angezeigt: 100,00 €**

---

## ✅ SCHRITT 9: PROVISIONEN IM DASHBOARD

### **9.1 Zurück zum Partner-Dashboard**

**Was Sie jetzt sehen sollten:**

```
💰 GESAMT-PROVISIONEN: 100,00 €
💸 OFFEN: 0,00 €
🔓 FREIGEGEBEN: 0,00 €
💸 AUSGEZAHLT: 100,00 €
```

**Meine Verträge:**
- 1 Vertrag in der Tabelle
- Status: ✅ Aktiviert (grün)
- Provision-Status: ✅ Ausgezahlt (grün)
- Provision: 100,00 €

---

## 🎯 ERFOLGS-KRITERIEN

### **✅ Test BESTANDEN wenn:**

1. ✅ Neuer Partner erstellt (Schritt 1)
2. ✅ Partner sieht €0,00 Provisionen beim ersten Login (Schritt 3)
3. ✅ Onboarding-Widget wird angezeigt (wenn gewählt)
4. ✅ Vertrag wird erstellt (Schritt 4)
5. ✅ Admin sieht Benachrichtigung über neuen Vertrag (Schritt 5)
6. ✅ Vertrag kann aktiviert werden (Schritt 6)
7. ✅ Partner erhält Benachrichtigung "Vertrag aktiviert" (Schritt 7)
8. ✅ Provision kann ausgezahlt werden (Schritt 8)
9. ✅ Partner erhält Benachrichtigung "Provision ausgezahlt" (Schritt 8)
10. ✅ Dashboard zeigt korrekte Provisionen (Schritt 9)

---

## ❓ TROUBLESHOOTING

### **Problem: Partner sieht alte Provisionen**

**Ursache:** Browser-Cache zeigt alte Daten

**Lösung:**
1. Schließen Sie ALLE Browser-Tabs
2. Öffnen Sie neues Private/Inkognito-Fenster
3. Wiederholen Sie Schritt 2-3

**Alternative:**
1. Im Dashboard: Klick auf **"🔧 DEBUG"**
2. Klick auf **"🔄 DATEN NEU LADEN"**
3. Prüfen Sie Debug-Status

---

### **Problem: Admin sieht keine Benachrichtigung**

**Ursache:** Benachrichtigung wurde nicht erstellt

**Lösung:**
1. Prüfen Sie Console (`F12`) auf Fehler
2. Prüfen Sie: `admin-vertraege-uebersicht.html` Code
3. Funktion `updateContract()` sollte `partner_benachrichtigungen` erstellen

**Manuell testen:**
```javascript
// In Admin-Console (F12):
fetch('tables/partner_benachrichtigungen', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        partner_email: 'neutest@partner.de',
        typ: 'system_nachricht',
        titel: '🧪 Test-Benachrichtigung',
        nachricht: 'Das ist ein Test',
        gelesen: false,
        erstellt_am: Date.now()
    })
}).then(r => r.json()).then(d => console.log('Benachrichtigung erstellt:', d));
```

---

### **Problem: Vertrag erscheint nicht in Admin**

**Ursache:** Vertrag wurde nicht gespeichert

**Lösung:**
1. Prüfen Sie Console im Partner-Tool (`F12`)
2. Prüfen Sie ob `vertragsabschluesse` Tabelle existiert
3. Prüfen Sie manuell:

```javascript
// In Console (F12):
fetch('tables/vertragsabschluesse?limit=100')
    .then(r => r.json())
    .then(d => console.log('Verträge:', d.data));
```

---

### **Problem: Dashboard zeigt nicht €0,00**

**Ursache:** Dashboard lädt keine Provisions-Daten

**Lösung:**
- Dashboard `partner-dashboard.html` muss Provisions-Statistiken laden
- Aktuell fehlt diese Funktion
- Siehe: Nächste Schritte unten

---

## 🚀 NÄCHSTE SCHRITTE (für Entwicklung)

### **TODO: Provisions-Loading im Dashboard**

**Aktuell fehlt:**
- Funktion zum Laden der Verträge/Provisionen
- Funktion zum Berechnen der Summen
- Funktion zum Aktualisieren der UI

**Sollte implementiert werden:**
```javascript
async function loadProvisionStatistics() {
    // Alle Verträge des Partners laden
    const response = await fetch(`tables/vertragsabschluesse?search=${partnerEmail}`);
    const result = await response.json();
    
    let summeGesamt = 0;
    let summeOffen = 0;
    let summeFreigegeben = 0;
    let summeAusgezahlt = 0;
    
    if (result.data) {
        result.data.forEach(vertrag => {
            const provision = parseFloat(vertrag.gesamt_provision) || 0;
            summeGesamt += provision;
            
            if (vertrag.provision_status === 'ausstehend') {
                summeOffen += provision;
            } else if (vertrag.provision_status === 'genehmigt') {
                summeFreigegeben += provision;
            } else if (vertrag.provision_status === 'ausgezahlt') {
                summeAusgezahlt += provision;
            }
        });
    }
    
    // UI aktualisieren
    document.getElementById('summeGesamt').textContent = summeGesamt.toFixed(2) + ' €';
    document.getElementById('summeOffen').textContent = summeOffen.toFixed(2) + ' €';
    document.getElementById('summeFreigegeben').textContent = summeFreigegeben.toFixed(2) + ' €';
    document.getElementById('summeAusgezahlt').textContent = summeAusgezahlt.toFixed(2) + ' €';
}
```

---

## 📋 ZUSAMMENFASSUNG

**Diese Anleitung testet:**
1. ✅ Neuen Partner erstellen
2. ✅ Partner sieht €0,00 (wenn keine Daten)
3. ✅ Vertrag wird erstellt
4. ✅ Admin sieht Benachrichtigung
5. ✅ Admin aktiviert Vertrag
6. ✅ Partner erhält Benachrichtigung
7. ✅ Provision wird ausgezahlt
8. ✅ Partner erhält Benachrichtigung
9. ✅ Dashboard zeigt korrekte Daten

**Geschätzte Dauer:** 15-20 Minuten

**Voraussetzungen:**
- `NEUER-PARTNER-ERSTELLEN.html` existiert
- `partner-login.html` funktioniert
- `admin-login.html` funktioniert
- Alle Tabellen existieren in DB

---

**Erstellt:** 30. Januar 2025  
**Für:** Kompletter Workflow-Test  
**Version:** 1.0
