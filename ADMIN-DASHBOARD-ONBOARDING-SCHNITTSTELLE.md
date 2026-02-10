# 🔗 ADMIN ↔ PARTNER DASHBOARD - ONBOARDING-SCHNITTSTELLE

**Datum:** 15. Januar 2025  
**Status:** 🔄 IN ARBEIT  
**Ziel:** Admin Dashboard sieht automatisch, was Partner im Partner Dashboard tun

---

## 🎯 ANFORDERUNG

> **"Wenn der Partner was beim Partner Dashboard macht, müssen wir das auch sehen beim Admin Dashboard automatisiert – sei's das Onboarding oder egal was."**

Das bedeutet:
- ✅ Partner füllt Onboarding-Schritte aus → Admin sieht den Fortschritt
- ✅ Partner schließt Vertrag ab → Admin sieht den Vertrag sofort
- ✅ Partner ändert Daten → Admin sieht die Änderung
- ✅ **Automatisiert** → Keine manuelle Übertragung nötig

---

## 📊 AKTUELLER STAND

### ✅ **WAS FUNKTIONIERT BEREITS:**

#### 1️⃣ **Verträge-Synchronisation** ✅
- **Partner Dashboard:** Partner erstellt Vertrag → speichert in `tables/vertragsabschluesse`
- **Admin Dashboard:** Admin öffnet "Verträge"-Tab → lädt von `tables/vertragsabschluesse`
- **Ergebnis:** ✅ Admin sieht ALLE Verträge aller Partner automatisch

#### 2️⃣ **Partner-Daten-Synchronisation** ✅
- **Partner Dashboard:** Partner registriert sich → speichert in `tables/partners`
- **Admin Dashboard:** Admin öffnet "Partner"-Tab → lädt von `tables/partners`
- **Ergebnis:** ✅ Admin sieht ALLE Partner automatisch

#### 3️⃣ **Onboarding-Status (vereinfacht)** ✅
- **Admin Dashboard:** Zeigt an, ob Onboarding abgeschlossen ist (`onboarding_completed: true/false`)
- **Ergebnis:** ✅ Admin sieht, WER Onboarding abgeschlossen hat

---

## ❌ WAS FEHLT NOCH

### 🔴 **PROBLEM: Detaillierte Onboarding-Schritte**

**Partner Dashboard hat 6 Onboarding-Schritte:**
1. ⏱️ Termin vereinbaren (`onboarding_termin`)
2. 📄 Dokumente hochladen (`onboarding_dokumente`)
3. 🪪 Ausweis hochladen (`onboarding_ausweis`)
4. 💰 Bankverbindung (`onboarding_bank`)
5. 🎓 Akademie absolvieren (`onboarding_akademie`)
6. 🎯 Erster Abschluss (`onboarding_abschluss`)

**Admin Dashboard zeigt nur:**
- ✅ / ⏳ Onboarding abgeschlossen (ja/nein)

**Was fehlt:**
- ❌ Admin sieht NICHT, **welche Schritte** abgeschlossen sind
- ❌ Admin sieht NICHT, **welcher Schritt** noch offen ist
- ❌ Admin sieht NICHT den **Fortschritt in %**

---

## ✅ LÖSUNG: ERWEITERTE ONBOARDING-ANZEIGE IM ADMIN DASHBOARD

### 🛠️ **Plan:**

#### 1️⃣ **Onboarding-Status Tabelle erweitern**
**Vorher:**
```
| Partner | E-Mail | Registriert | Onboarding | Status |
|---------|--------|-------------|------------|--------|
| Max     | max@   | 01.01.2025  | ✓ Abgeschl.| aktiv  |
```

**Nachher:**
```
| Partner | E-Mail | Registriert | Termin | Dokumente | Ausweis | Bank | Akademie | Abschluss | Fortschritt | Status |
|---------|--------|-------------|--------|-----------|---------|------|----------|-----------|-------------|--------|
| Max     | max@   | 01.01.2025  | ✅     | ✅        | ❌      | ✅   | ⏳       | ❌        | 50%         | aktiv  |
```

#### 2️⃣ **Onboarding-Details-Modal**
**Wenn Admin auf einen Partner klickt:**
- Modal öffnet sich
- Zeigt **alle 6 Schritte** mit Status:
  - ✅ Abgeschlossen (grün)
  - ⏳ In Bearbeitung (orange)
  - ❌ Noch nicht begonnen (rot)
- Zeigt **Fortschrittsbalken** (0% - 100%)
- Zeigt **Timestamp** (Wann wurde Schritt abgeschlossen?)

#### 3️⃣ **Partner-Detail-Seite erweitern**
**Admin Dashboard → Partner-Tab → Partner Details:**
- Sektion "📋 Onboarding-Status" hinzufügen
- Zeigt alle 6 Schritte visuell
- Zeigt Fortschrittsbalken

---

## 🛠️ TECHNISCHE UMSETZUNG

### ✅ **Datenbank-Struktur (bereits vorhanden):**

**`tables/partners` Felder:**
```javascript
{
  "email": "partner@beispiel.de",
  "vorname": "Max",
  "nachname": "Mustermann",
  "status": "aktiv",
  
  // Onboarding-Schritte:
  "onboarding_termin": true,        // Schritt 1
  "onboarding_dokumente": false,    // Schritt 2
  "onboarding_ausweis": false,      // Schritt 3
  "onboarding_bank": true,          // Schritt 4
  "onboarding_akademie": false,     // Schritt 5
  "onboarding_abschluss": false,    // Schritt 6
  
  "onboarding_completed": false,    // Gesamt-Status
  "onboarding_progress": 33,        // Fortschritt in %
  
  "created_at": "2025-01-15T10:00:00Z"
}
```

### ✅ **Admin Dashboard erweitern:**

#### **1. Onboarding-Tabelle erweitern (Zeile ~3114 in admin-dashboard.html):**

**Vorher:**
```html
<th>Onboarding</th>
```

**Nachher:**
```html
<th>Termin</th>
<th>Dokumente</th>
<th>Ausweis</th>
<th>Bank</th>
<th>Akademie</th>
<th>Abschluss</th>
<th>Fortschritt</th>
```

#### **2. JavaScript erweitern (loadAkademie Funktion):**

**Vorher:**
```javascript
const onboardingStatus = partner.onboarding_completed 
    ? '<span class="badge badge-success">✓ Abgeschlossen</span>' 
    : '<span class="badge badge-warning">⏳ Offen</span>';
```

**Nachher:**
```javascript
const checkIcon = (value) => value ? '✅' : '❌';
const progress = Math.round((
    (partner.onboarding_termin ? 1 : 0) +
    (partner.onboarding_dokumente ? 1 : 0) +
    (partner.onboarding_ausweis ? 1 : 0) +
    (partner.onboarding_bank ? 1 : 0) +
    (partner.onboarding_akademie ? 1 : 0) +
    (partner.onboarding_abschluss ? 1 : 0)
) / 6 * 100);

const row = `
    <tr>
        <td>${partner.vorname} ${partner.nachname}</td>
        <td>${partner.email}</td>
        <td>${partner.registriert_am ? new Date(partner.registriert_am).toLocaleDateString('de-DE') : '-'}</td>
        <td style="text-align: center;">${checkIcon(partner.onboarding_termin)}</td>
        <td style="text-align: center;">${checkIcon(partner.onboarding_dokumente)}</td>
        <td style="text-align: center;">${checkIcon(partner.onboarding_ausweis)}</td>
        <td style="text-align: center;">${checkIcon(partner.onboarding_bank)}</td>
        <td style="text-align: center;">${checkIcon(partner.onboarding_akademie)}</td>
        <td style="text-align: center;">${checkIcon(partner.onboarding_abschluss)}</td>
        <td>
            <div style="display: flex; align-items: center; gap: 8px;">
                <div style="flex: 1; background: #e2e8f0; border-radius: 8px; height: 8px; overflow: hidden;">
                    <div style="background: ${progress === 100 ? '#48bb78' : '#667eea'}; height: 100%; width: ${progress}%; transition: width 0.5s;"></div>
                </div>
                <span style="font-weight: 600; font-size: 0.85rem;">${progress}%</span>
            </div>
        </td>
        <td>
            <span class="badge badge-${partner.status === 'aktiv' ? 'success' : 'warning'}">
                ${partner.status}
            </span>
        </td>
    </tr>
`;
```

---

## 📊 BEISPIEL: WIE ES AUSSEHEN WIRD

### **Onboarding-Status Tabelle im Admin Dashboard:**

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  Partner   │ E-Mail          │ Registriert │ Termin │ Dokumente │ Ausweis │ Bank │ ...  │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│  Max M.    │ max@partner.de  │ 01.01.2025  │   ✅   │    ✅     │   ❌    │  ✅  │ ...  │
│  Anna K.   │ anna@partner.de │ 05.01.2025  │   ✅   │    ❌     │   ❌    │  ❌  │ ...  │
│  Tom H.    │ tom@partner.de  │ 10.01.2025  │   ✅   │    ✅     │   ✅    │  ✅  │ ...  │
└──────────────────────────────────────────────────────────────────────────────────────────┘

... │ Akademie │ Abschluss │ Fortschritt       │ Status │
... │    ⏳    │    ❌     │ ▓▓▓▓░░ 67%        │ aktiv  │
... │    ❌    │    ❌     │ ▓░░░░░ 17%        │ aktiv  │
... │    ✅    │    ✅     │ ▓▓▓▓▓▓ 100%       │ aktiv  │
```

**Legende:**
- ✅ = Abgeschlossen
- ⏳ = In Bearbeitung
- ❌ = Noch nicht begonnen
- ▓ = Fortschrittsbalken (grün bei 100%, blau sonst)

---

## 🚀 IMPLEMENTIERUNG

### ✅ **Schritt 1: HTML erweitern**
- Tabellen-Header um 6 Spalten erweitern
- Modal für Onboarding-Details hinzufügen

### ✅ **Schritt 2: JavaScript erweitern**
- `loadAkademie()` Funktion anpassen
- Fortschrittsberechnung hinzufügen
- Check-Icons dynamisch rendern

### ✅ **Schritt 3: Styling anpassen**
- Icons zentrieren
- Fortschrittsbalken stylen
- Hover-Effekte für bessere UX

### ✅ **Schritt 4: Testing**
- Partner-Daten mit verschiedenen Onboarding-Status erstellen
- Admin Dashboard laden → Prüfen, ob alle Schritte sichtbar sind
- Fortschrittsbalken prüfen

---

## 🔄 AUTOMATISIERUNG

### ✅ **Wie funktioniert die Synchronisation?**

1. **Partner füllt Onboarding-Schritt aus** (z.B. "Dokumente hochladen")
   - Partner Dashboard speichert: `PATCH tables/partners/{id}` mit `{ onboarding_dokumente: true }`

2. **Datenbank wird aktualisiert**
   - `tables/partners` Eintrag wird geändert

3. **Admin öffnet "Akademie & Onboarding" Tab**
   - `loadAkademie()` lädt **alle Partner** von `tables/partners`
   - Admin sieht **automatisch** den neuen Status

4. **Kein Reload nötig** (optional: Auto-Refresh)
   - Admin kann auf "🔄 Aktualisieren" klicken
   - Optional: Auto-Refresh alle 30 Sekunden

---

## 📄 ZUSAMMENFASSUNG

### ✅ **WAS IST BEREITS FERTIG:**
- ✅ Verträge-Synchronisation (Partner → Admin)
- ✅ Partner-Daten-Synchronisation (Partner → Admin)
- ✅ Onboarding-Status (vereinfacht) sichtbar

### 🔄 **WAS MUSS NOCH GEMACHT WERDEN:**
- 🔄 Onboarding-Tabelle um 6 Spalten erweitern
- 🔄 Fortschrittsbalken hinzufügen
- 🔄 JavaScript anpassen (loadAkademie Funktion)
- 🔄 Styling anpassen

### ⏳ **OPTIONAL (FUTURE):**
- ⏳ Auto-Refresh alle 30 Sekunden
- ⏳ Push-Benachrichtigungen bei Onboarding-Änderung
- ⏳ Onboarding-Details-Modal (Klick auf Partner → zeigt alle Schritte)
- ⏳ Timeline: Wann wurde welcher Schritt abgeschlossen?

---

## 💡 NEXT STEPS

### **Option 1: Sofort implementieren**
Ich kann die erweiterte Onboarding-Anzeige **jetzt sofort** implementieren:
- Tabelle erweitern
- JavaScript anpassen
- Testen

### **Option 2: Später implementieren**
Du kannst auch sagen:
- "Erst mal Partner Dashboard perfektionieren"
- "Erst mal testen, dann Admin Dashboard erweitern"

**Was ist dir lieber? Soll ich jetzt weitermachen oder möchtest du erst das Partner Dashboard testen?** 😊

---

**📞 Fragen? Feedback?**  
Melde dich einfach! 👍
