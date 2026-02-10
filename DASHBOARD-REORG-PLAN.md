#

 Admin Dashboard - Vollständige Reorganisation

**Ziel:** Modernes Sidebar-Design + ALLE Funktionen vom alten Dashboard

---

## ✅ Was muss drin sein (aus dem alten Dashboard):

### 1. **Übersicht / Dashboard**
- Stats-Cards (Anfragen, Partner, Verträge, Umsatz)
- Neueste Anfragen Tabelle

### 2. **Neue Anfragen** ✅
- Alle Partner-Anfragen aus `affiliates`
- Filter (Modell, Status, Suche)
- Details-Ansicht
- CSV Export

### 3. **Aufgaben & Projekte** ⚠️ FEHLT
- Kanban Board (Todo / In Progress / Done)
- Projekt-Filter (Partnerprogramm, Support, Calls)
- Neue Aufgabe erstellen
- Status ändern

### 4. **Umsatz-Tracking** ⚠️ FEHLT
- Stats: Provision Heute/Woche/Monat
- Kundenumsatz vs. Partner-Provision
- Filter (Zeitraum, Kategorie, Partner, Status)
- Custom Date Range
- Umsatz-Tabelle mit allen Verträgen

### 5. **Live Chat** ✅
- Link zu `admin-chat.html`

### 6. **Tickets** ✅
- Link zu `admin-tickets.html`

### 7. **E-Mail senden** ⚠️ FEHLT
- An: Partner, Kunde, Alle auswählen
- Betreff & Nachricht
- Versand-Funktion

### 8. **News & Aktionen** ⚠️ FEHLT
- News erstellen (Titel, Text, Typ, Zielgruppe)
- Liste aller News
- Bearbeiten/Löschen

### 9. **Provisionen eintragen** ⚠️ FEHLT (vs. Provisionen anzeigen)
- Formular zum MANUELL eintragen
- Partner auswählen
- Kategorie, Tarif, Betrag
- Provision berechnen

### 10. **Provisionen anzeigen** ✅ (NEU hinzugefügt)
- Heute/Woche/Monat Stats
- Top Partner
- Neueste Provisionen
- CSV Export

### 11. **Partner-Verwaltung** ✅
- Link zu `admin-partner.html`

### 12. **Verträge-Übersicht** ✅  
- Link zu `admin-vertraege-uebersicht.html`

### 13. **Projekte verwalten** ⚠️ FEHLT
- Projekt-Typ (Ladenlokal, Online-Shop, etc.)
- Partner zuordnen
- Start-/Zieldatum
- Status tracking
- Liste aller Projekte

### 14. **Dokumente prüfen** ⚠️ FEHLT
- Partner-Dokumente Übersicht
- Status (ausstehend/geprüft/abgelehnt)
- Download/Ansicht
- Freigabe-Funktion

### 15. **Akademie & Onboarding** ⚠️ FEHLT
- Onboarding-Status pro Partner
- Schulungsmaterialien verwalten
- Fortschritt tracking

### 16. **Partner Status Check** ⚠️ FEHLT
- E-Mail eingeben
- Status abfragen (Onboarding-Fortschritt, Dokumente, Provisionen)

### 17. **Partner Import** ⚠️ FEHLT
- CSV hochladen
- Partner-Daten importieren
- Validierung

### 18. **Termine/Kalender** ✅
- Link zu `admin-kalender.html`

---

## 🎨 Neue Sidebar-Struktur:

```
DASHBOARD
  → Übersicht (Stats + neueste Anfragen)

ANFRAGEN & PARTNER
  → Neue Anfragen
  → Partner-Verwaltung
  → Partner Import
  → Partner Status Check

VERTRÄGE & PROVISIONEN
  → Verträge Übersicht
  → Umsatz-Tracking
  → Provisionen eintragen
  → Provisionen anzeigen

PROJEKTE & AUFGABEN
  → Aufgaben & Projekte (Kanban)
  → Projekte verwalten
  → Dokumente prüfen

KOMMUNIKATION
  → Live Chat
  → Support Tickets
  → E-Mail senden
  → News & Aktionen

VERWALTUNG
  → Partner Akademie
  → Termin-Kalender
  → Onboarding-Verwaltung
```

---

## 🚀 Next Steps:

1. ✅ Alte Dashboard-Version als Basis nehmen
2. ⏳ Sidebar-Navigation einbauen (statt Top-Tabs)
3. ⏳ Alle Tab-Inhalte in Sidebar-Pages umwandeln
4. ⏳ Mobile-Responsiveness (Sidebar slides)
5. ⏳ Modernes Design (Cards, Colors, Shadows)
6. ⏳ ALLE Funktionen behalten!

**Wichtig:** NICHTS löschen, nur besser organisieren!
