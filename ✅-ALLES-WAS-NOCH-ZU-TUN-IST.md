# ✅ ALLE AUFGABEN DIE NOCH ZU ERLEDIGEN SIND

## 🔴 KRITISCH - SOFORT:

### 1. LIVE CHAT FUNKTIONIEREND
**Problem:** Zeigt nur "Bald verfügbar"  
**Lösung:** Content von `admin-chat.html` komplett in Admin Dashboard einbauen  
**Status:** ⏳ MUSS GEMACHT WERDEN

**Was zu tun:**
- Chat-Container mit Partner-Liste links
- Chat-Bereich rechts
- Funktionierendes Messaging-System
- DB-Tabelle: `chat_nachrichten`

---

### 2. TICKETS FUNKTIONIEREND
**Problem:** Zeigt nur "Bald verfügbar"  
**Lösung:** Content von `admin-tickets.html` komplett in Admin Dashboard einbauen  
**Status:** ⏳ MUSS GEMACHT WERDEN

**Was zu tun:**
- Ticket-Liste mit Filter
- Ticket-Details rechts
- Antworten-System
- Status-Updates (offen/in Bearbeitung/gelöst)
- DB-Tabellen: `tickets`, `ticket_antworten`

---

### 3. ADMIN DASHBOARD SCHÖNER MACHEN
**Problem:** Zeigt nur "Neue Anfragen" als Hauptseite  
**Lösung:** Innovatives Overview-Dashboard erstellen  

**Was zu tun:**
```
┌────────────────────────────────────────┐
│  📊 KEY METRICS (4 Karten)             │
│  [10 Anfragen] [14 Partner] [3.450€]  │
│                                        │
│  📈 CHARTS (2 Spalten)                 │
│  [Umsatz Graph] [Partner Wachstum]    │
│                                        │
│  🎯 SCHNELLZUGRIFF (Karten)           │
│  [Neue Anfragen] [Partner] [Verträge] │
│                                        │
│  🆕 NEUESTE AKTIVITÄTEN               │
│  [Feed mit letzten Aktionen]          │
└────────────────────────────────────────┘
```

**Features:**
- Chart.js Grafiken
- Live-Updates
- Klickbare Karten
- Moderne Apple-ähnliche UI

---

### 4. MARKETING & TOOLS INS PARTNER DASHBOARD
**Problem:** Im Admin statt Partner  
**Lösung:** Komplett verschieben ins Partner Dashboard

**Was zu tun:**
- Neue Sidebar-Sektion im Partner Dashboard
- "Marketing Material" Tab
- "Marketing Tools" Tab
- DORT kann "Bald verfügbar" stehen

---

### 5. PARTNER DETAILS MODAL FIX
**Problem:** Modal öffnet neue Seite, Details nur halb sichtbar  
**Lösung:** Modal responsive machen, alles sichtbar

**Was zu tun:**
```css
.modal-content {
    max-width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
}
```

**Zusätzlich:**
- Dokumente-Button unter Partner-Details
- Zeigt hochgeladene Dokumente
- Download-Option

---

### 6. HOCHRECHNUNG LOGISCH BERECHNEN
**Problem:** Zeigt unrealistische Werte  
**Lösung:** Intelligente Berechnung basierend auf aktueller Performance

**Aktuelle Logik (FALSCH):**
```javascript
const avgPerMonth = totalProv / monthsActive;
const hochrechnung = avgPerMonth; // NUR dieser Monat
```

**Neue Logik (RICHTIG):**
```javascript
// Wenn Partner gut läuft: Letzte 2 Wochen als Basis
const last2Weeks = vertraege.filter(v => {
    const vDate = new Date(v.created_at);
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    return vDate >= twoWeeksAgo;
});

const provLast2Weeks = last2Weeks.reduce((sum, v) => sum + prov, 0);
const hochrechnung = (provLast2Weeks / 2) * 4; // Auf Monat hochrechnen
```

---

### 7. LADENLOKAL-PROJEKT AUTOMATISCHER FORTSCHRITT
**Problem:** Fortschritt muss manuell aktualisiert werden  
**Lösung:** Automatisch basierend auf Zeit + Verträgen

**Logik:**
```javascript
// Basis: Zeit seit Start
const startDate = new Date(partner.projekt_start || partner.registriert_am);
const today = new Date();
const daysPassed = (today - startDate) / (1000 * 60 * 60 * 24);
const weeksPassed = Math.floor(daysPassed / 7);
const totalWeeks = 12; // Ladenlokal = 12 Wochen

// Zeit-Fortschritt (50% Gewichtung)
const zeitFortschritt = Math.min(100, (weeksPassed / totalWeeks) * 100);

// Vertrags-Fortschritt (50% Gewichtung)
const zielVertraege = 100; // Ladenlokal-Ziel
const aktuelleVertraege = meineVertraege.length;
const vertragsFortschritt = Math.min(100, (aktuelleVertraege / zielVertraege) * 100);

// Gesamt-Fortschritt
const gesamtFortschritt = (zeitFortschritt * 0.5) + (vertragsFortschritt * 0.5);
```

---

### 8. NEWS & AKTIONEN SYSTEM
**Problem:** Existiert nicht  
**Lösung:** Admin kann News für Partner erstellen

**Admin-Seite:**
```
┌─────────────────────────────────────┐
│  📢 Neue News erstellen             │
│                                     │
│  Titel: [________________]          │
│  Typ: [Info|Warnung|Aktion]        │
│  Zielgruppe:                        │
│    ○ Alle Partner                   │
│    ○ Nur Ladenlokal                 │
│    ○ Nur Online-Shop                │
│    ○ Bestimmte Partner: [Select]    │
│                                     │
│  Nachricht: [Textfeld]              │
│                                     │
│  [✅ Veröffentlichen]                │
└─────────────────────────────────────┘
```

**Partner-Dashboard:**
```
┌─────────────────────────────────────┐
│  🆕 NEUIGKEITEN                     │
│                                     │
│  📢 Neue Tarife verfügbar!          │
│  Heute 14:30                        │
│  [Details ansehen]                  │
│                                     │
│  ⚠️ System-Wartung am Sonntag       │
│  Gestern 10:00                      │
│  [Details ansehen]                  │
└─────────────────────────────────────┘
```

**DB-Tabelle:** `news` (existiert schon!)

---

## 📋 ZUSAMMENFASSUNG - REIHENFOLGE:

1. ✅ Live Chat einbauen (WICHTIG!)
2. ✅ Tickets einbauen (WICHTIG!)
3. ✅ Admin Dashboard schöner machen
4. ✅ Marketing ins Partner Dashboard
5. ✅ Partner Modal Fix
6. ✅ Hochrechnung logisch
7. ✅ Projekt-Fortschritt automatisch
8. ✅ News-System

---

## 🎯 ZIEL:
- Admin Dashboard: Komplett funktionierend + schön
- Partner Dashboard: Alle Features + Marketing
- Alles responsive + keine halben Sachen!

---

**STATUS:** 0/8 erledigt  
**NÄCHSTER SCHRITT:** Live Chat einbauen!
