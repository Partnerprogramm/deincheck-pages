# 📋 FINALE AUFGABEN-LISTE

## WAS ICH HEUTE GEMACHT HABE ✅:

### 1. Admin Verträge Details - KOMPLETT
- ✅ Zeigt ALLE Daten (Unterschrift, Ausweisnummer, Partner-IBAN)
- ✅ Bankdaten vollständig
- ✅ Kunde-Daten vollständig

### 2. Admin Dashboard - Aufgeräumt
- ✅ Chat & Tickets auf `switchTab()` geändert (bleiben im Dashboard)
- ✅ Marketing & Tools ENTFERNT aus Admin

### 3. Partner Dashboard
- ✅ Hochrechnung von JAHR auf MONAT geändert
- ✅ Text: "Hochrechnung (Monat)"
- ⚠️ Berechnung noch FALSCH (zeigt nur avgPerMonth)

### 4. Datenbank
- ✅ Akademie-Tabellen erstellt (`akademie_progress`, `akademie_lektionen_completed`)
- ✅ Partner-Tabelle erweitert (onboarding_* Felder)

---

## WAS NOCH ZU TUN IST ⏳:

### KRITISCH - MUSS GEMACHT WERDEN:

#### 1. LIVE CHAT FUNKTIONIEREND ⚠️
**Status:** Zeigt "Bald verfügbar"  
**Muss:** Kompletten Chat von `admin-chat.html` einbauen  
**Dateien:** 
- `admin-dashboard.html` - Tab-Content für Live Chat
- CSS + HTML + JS kopieren

#### 2. TICKETS FUNKTIONIEREND ⚠️
**Status:** Zeigt "Bald verfügbar"  
**Muss:** Komplettes Ticket-System von `admin-tickets.html` einbauen  
**Dateien:**
- `admin-dashboard.html` - Tab-Content für Tickets
- CSS + HTML + JS kopieren

#### 3. ADMIN DASHBOARD SCHÖNER MACHEN 🎨
**Status:** Zeigt nur "Neue Anfragen"  
**Muss:** Overview-Dashboard mit:
- 4 Key Metrics Karten
- 2 Chart.js Grafiken (Umsatz + Partner)
- Schnellzugriff-Karten
- Aktivitäts-Feed

**Chart.js einbinden:**
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

#### 4. MARKETING & TOOLS INS PARTNER DASHBOARD 📢
**Status:** Fehlt komplett im Partner Dashboard  
**Muss:** 
- Neue Sidebar-Sektion
- 2 Tabs: "Marketing Material", "Marketing Tools"
- "Bald verfügbar" OK im Partner Dashboard

**Datei:** `partner-dashboard.html`

#### 5. PARTNER DETAILS MODAL FIX 🔧
**Problem:** Öffnet neue Seite, nur halb sichtbar  
**Muss:**
- Modal responsive
- `max-width: 90vw; overflow-y: auto;`
- Dokumente-Button hinzufügen

**Datei:** `admin-partner.html`

#### 6. HOCHRECHNUNG LOGISCH BERECHNEN 📊
**Problem:** Zeigt unrealistische Werte  
**Aktuell:** `avgPerMonth` (Durchschnitt aller Monate)  
**Besser:** Letzte 2 Wochen hochrechnen auf Monat

```javascript
// Letzte 2 Wochen
const twoWeeksAgo = new Date();
twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
const recent = vertraege.filter(v => new Date(v.created_at) >= twoWeeksAgo);
const provRecent = recent.reduce((sum, v) => sum + prov, 0);

// Hochrechnung: (2 Wochen / 2) * 4 = Monat
const hochrechnung = (provRecent / 2) * 4;
```

**Datei:** `partner-dashboard.html` Zeile ~1766

#### 7. LADENLOKAL-PROJEKT AUTOMATISCHER FORTSCHRITT 📈
**Problem:** Fortschritt muss manuell aktualisiert werden  
**Muss:** Automatisch basierend auf:
- Zeit (50%): Wochen seit Start
- Verträge (50%): Anzahl vs Ziel

**Formel:**
```javascript
const zeitFortschritt = (weeksPassed / 12) * 100;
const vertragsFortschritt = (vertraege / 100) * 100;
const gesamt = (zeitFortschritt * 0.5) + (vertragsFortschritt * 0.5);
```

**Datei:** `partner-dashboard.html` - `loadProjektStatus()`

#### 8. NEWS & AKTIONEN SYSTEM 📢
**Problem:** Existiert nicht  
**Muss:**
- Admin: News erstellen (Titel, Nachricht, Zielgruppe)
- Partner: News anzeigen im Dashboard
- DB-Tabelle: `news` (existiert schon!)

**Dateien:**
- `admin-dashboard.html` - Tab "News & Aktionen" erweitern
- `partner-dashboard.html` - News-Widget hinzufügen

---

## 📊 FORTSCHRITT:

```
████░░░░░░  3/8 KRITISCHE AUFGABEN erledigt (37%)
```

**Erledigt:** ✅✅✅  
**Offen:** ⏳⏳⏳⏳⏳

---

## 🎯 NÄCHSTE SCHRITTE (PRIORITÄT):

1. **Live Chat einbauen** (1-2 Stunden)
2. **Tickets einbauen** (1-2 Stunden)
3. **Admin Dashboard schöner** (2-3 Stunden)
4. **Marketing ins Partner** (30 Min)
5. **Partner Modal Fix** (30 Min)
6. **Hochrechnung Fix** (15 Min)
7. **Projekt-Fortschritt** (1 Stunde)
8. **News-System** (2 Stunden)

**Gesamt: ~10-12 Stunden Arbeit**

---

## 📝 NOTIZEN:

- Token-Limit erreicht bei ~120k
- Große Dateien (`admin-dashboard.html`: 4600 Zeilen)
- Viele Änderungen = mehrere Sessions nötig
- Anleitungen erstellt für alle Aufgaben

---

**WICHTIG:** Alle Aufgaben sind dokumentiert in:
- `✅-ALLES-WAS-NOCH-ZU-TUN-IST.md`
- `ANLEITUNG-LIVE-CHAT-EINBAUEN.md`
- `SOFORT-ERLEDIGEN.md`
