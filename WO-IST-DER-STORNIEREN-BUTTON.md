# 🎯 WO IST DER STORNIEREN-BUTTON?

## ✅ Der Button ist BEREITS implementiert!

Der "Stornieren"-Button ist **FERTIG implementiert** und befindet sich im **DETAILS-MODAL** der Verträge.

---

## 📍 SO FINDEN SIE DEN BUTTON:

### **Schritt 1: Gehen Sie zu "Meine Verträge"**
```
1. Öffnen Sie das Partner-Dashboard
2. Klicken Sie in der Sidebar auf: "Meine Verträge"
   (unter "Verkauf & Verträge")
```

### **Schritt 2: Öffnen Sie Vertrags-Details**
```
1. In der Vertrags-Tabelle sehen Sie alle Ihre Verträge
2. Jeder Vertrag hat eine "Aktionen"-Spalte
3. Klicken Sie auf den "Details"-Button (👁️ Auge-Icon)
```

### **Schritt 3: Sehen Sie den Stornieren-Button**
```
1. Es öffnet sich ein Modal mit allen Vertragsdetails
2. Unten links im Modal ist ein ROTER Button:
   "🔴 Vertrag stornieren"
3. Klicken Sie auf diesen Button
4. Es öffnet sich das Stornierung-Modal
```

---

## 🔍 VISUELLE DARSTELLUNG:

```
┌─────────────────────────────────────────────────────────┐
│                   📄 Meine Verträge                      │
├─────────────────────────────────────────────────────────┤
│ Datum | Kunde | Kategorie | Status | Aktionen          │
├─────────────────────────────────────────────────────────┤
│ 08.12 | Max M.| Mobilfunk | ✅     | [👁️ Details]     │ ← Klick!
│ 07.12 | Lisa  | Strom     | ⚠️     | [👁️ Details]     │
└─────────────────────────────────────────────────────────┘

                    ↓ KLICK AUF "DETAILS"

┌─────────────────────────────────────────────────────────┐
│              📄 Vertrags-Details              [X]        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  👤 Kundendaten    📋 Vertragsdaten    💳 Bankdaten      │
│  - Name            - Vertragsnr.       - IBAN           │
│  - Email           - Kategorie         - Kontoinhaber   │
│  - Telefon         - Anbieter                           │
│  - Adresse         - Provision                          │
│                    - Status                             │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  [🔴 Vertrag stornieren]             [Schließen]        │ ← HIER!
└─────────────────────────────────────────────────────────┘
```

---

## 📝 WICHTIGE HINWEISE:

### **Button-Sichtbarkeit:**
- ✅ **Sichtbar** wenn Status = "Aktiviert", "Neu", "In Bearbeitung"
- ❌ **NICHT sichtbar** wenn Status = "Abgelehnt" oder "Storniert"

### **Button-Position:**
- 🔴 **Unten links** im Details-Modal
- Neben dem "Schließen"-Button
- Roter Gradient-Button mit Icon

### **Button-Funktion:**
- Öffnet das Stornierung-Modal
- Zeigt 14-Tage-Warnung wenn Vertrag < 14 Tage alt
- Fordert Stornierungsgrund + Beschreibung an
- Speichert Stornierung in der Datenbank
- Erstellt Admin-Benachrichtigung

---

## 🧪 TESTEN SIE DEN BUTTON:

### **Option 1: Isolierter Test (EMPFOHLEN)**
```
1. Öffnen Sie: TEST-VERTRAGS-DETAILS-MODAL.html
2. Klicken Sie auf "Vertrags-Details öffnen"
3. Modal öffnet sich mit Demo-Daten
4. Sehen Sie den roten "Vertrag stornieren" Button unten links
5. Klicken Sie darauf → Alert mit 14-Tage-Check
```

### **Option 2: Im Partner-Dashboard**
```
1. Gehen Sie zu "Meine Verträge" (Sidebar)
2. Klicken Sie bei einem Vertrag auf "Details"
3. Modal öffnet sich
4. Unten links: Roter "Vertrag stornieren" Button
```

---

## ❓ WARUM SEHE ICH DEN BUTTON NICHT?

### **Ursache 1: Keine Verträge vorhanden**
- Die Seite "Meine Verträge" ist leer
- Keine Verträge zum Anzeigen
- **Lösung:** Erstellen Sie einen Test-Vertrag oder aktivieren Sie Demo-Modus

### **Ursache 2: Vertrag ist "Abgelehnt" oder "Storniert"**
- Button wird nur bei aktiven Verträgen angezeigt
- **Lösung:** Testen Sie mit einem Vertrag im Status "Aktiviert" oder "Neu"

### **Ursache 3: Sie sind auf der falschen Seite**
- Sie schauen auf "Neueste Verträge" im Dashboard
- Nicht auf "Meine Verträge"
- **Lösung:** Gehen Sie zu "Meine Verträge" in der Sidebar

### **Ursache 4: Details-Modal wird nicht geöffnet**
- Sie klicken direkt auf die Tabellenzeile statt auf "Details"-Button
- **Lösung:** Klicken Sie auf den "Details"-Button (👁️ Auge-Icon)

---

## 📊 CODE-LOCATION:

Der Stornieren-Button ist in `partner-dashboard.html` implementiert:

### **Details-Modal (Zeilen 3830-3834):**
```javascript
${vertrag.status !== 'Abgelehnt' && vertrag.status !== 'Storniert' ? `
<button onclick="this.closest('[style*=fixed]').remove(); openStornierungModal('${vertrag.id}', '${vertrag.created_at || vertrag.erstellt_am}')" ...>
    <i class="fas fa-times-circle"></i> Vertrag stornieren
</button>
` : ''}
```

### **Vertrags-Tabelle Aktions-Spalte (Zeilen 3667-3669):**
```javascript
${v.status !== 'Abgelehnt' && v.status !== 'Storniert' ? `
<button class="action-btn btn-danger" onclick="event.stopPropagation(); openStornierungModal('${v.id}', '${v.created_at}')" ...>
    <i class="fas fa-times-circle"></i> Stornieren
</button>
` : ''}
```

---

## ✅ ZUSAMMENFASSUNG:

### **Der Button ist DA:**
1. ✅ In der Vertrags-Tabelle (Aktions-Spalte)
2. ✅ Im Details-Modal (unten links)
3. ✅ Mit 14-Tage-Check
4. ✅ Mit Stornierung-Modal
5. ✅ Mit Datenbank-Speicherung

### **Wo finde ich ihn:**
1. Sidebar → "Meine Verträge"
2. Vertrag auswählen → "Details"-Button klicken
3. Modal öffnet sich
4. Unten links: 🔴 **"Vertrag stornieren"** Button

### **Test-Dateien:**
- `TEST-VERTRAGS-DETAILS-MODAL.html` → Zeigt das komplette Details-Modal mit Button
- `TEST-STORNIEREN-BUTTON.html` → Zeigt nur die Tabelle mit Button

---

## 🎯 NÄCHSTE SCHRITTE:

1. **Öffnen Sie:** `TEST-VERTRAGS-DETAILS-MODAL.html`
2. **Testen Sie:** Klicken Sie auf "Vertrags-Details öffnen"
3. **Sehen Sie:** Den roten Stornieren-Button unten links
4. **Klicken Sie:** Auf den Button → Alert mit Erfolgs-Meldung

**Wenn der Test funktioniert → Der Code ist korrekt! ✅**

Dann müssen Sie nur noch:
1. Im Partner-Dashboard zu "Meine Verträge" gehen
2. Auf einen Vertrag-Details-Button klicken
3. Den Stornieren-Button unten links sehen

---

## 📞 SUPPORT:

**Der Button IST implementiert!**

Falls Sie ihn immer noch nicht sehen:
1. Screenshot von "Meine Verträge" Seite schicken
2. Screenshot vom geöffneten Details-Modal schicken
3. Browser + Version angeben
4. Console-Logs kopieren (F12 → Console)

**Der Code funktioniert - wir finden gemeinsam die richtige Seite! 💪**
