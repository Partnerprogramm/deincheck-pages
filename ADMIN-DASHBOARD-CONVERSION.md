# 🔄 ADMIN DASHBOARD CONVERSION PLAN

## STATUS: In Arbeit

### Was ich gerade mache:
Ich konvertiere `admin-dashboard-old-backup.html` zu einem **modernen Sidebar-Design** während ich **ALLE Funktionen behalte**.

### Änderungen:

#### 1. CSS ✅ FERTIG
- ✅ Sidebar CSS hinzugefügt (280px breit)
- ✅ Main-Content mit margin-left
- ✅ Topbar für Seiten-Titel + Logout
- ✅ Mobile-Responsive (@media max-width: 968px)
- ✅ Tabs zu Sidebar-Items konvertiert

#### 2. HTML - IN ARBEIT
- ⏳ Alte Top-Nav ersetzen mit Sidebar
- ⏳ Benachrichtigungs-System behalten (Bell-Icon in Topbar)
- ⏳ Alle Tab-Inhalte behalten
- ⏳ Alle Funktionen behalten

#### 3. JavaScript - TODO
- ⏳ switchTab() anpassen für Sidebar
- ⏳ Mobile-Menü Toggle hinzufügen
- ⏳ Alle Event-Listener behalten

---

## NÄCHSTE SCHRITTE:

1. **HTML Struktur ersetzen:**
```html
<body>
    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" onclick="toggleSidebar()">
        <i class="fas fa-bars"></i>
    </button>

    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <div class="sidebar-logo">
                <div class="sidebar-logo-icon">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <span>Admin Portal</span>
            </div>
        </div>

        <!-- Tabs als Sidebar Items -->
        <div class="tabs">
            <div class="tab active" onclick="switchTab('aufgaben')">
                <i class="fas fa-tasks"></i> Aufgaben
            </div>
            <!-- ... alle anderen Tabs ... -->
        </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <!-- Topbar -->
        <div class="topbar">
            <div class="topbar-left">
                <h1 id="page-title">Dashboard</h1>
            </div>
            <div class="topbar-right">
                <!-- Benachrichtigungs-Bell -->
                <button onclick="toggleBenachrichtigungen()">...</button>
                <!-- Logout -->
                <button class="topbar-btn btn-logout" onclick="logout()">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </button>
            </div>
        </div>

        <!-- Container (alle Tab-Contents) -->
        <div class="container">
            <!-- Tab Contents bleiben UNVERÄNDERT -->
        </div>
    </div>
</body>
```

2. **JavaScript hinzufügen:**
```javascript
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// switchTab() anpassen für Page-Title Update
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    
    // Show selected tab
    event.currentTarget.classList.add('active');
    document.getElementById('tab-' + tabName).classList.add('active');
    
    // Update page title
    const titles = {
        'aufgaben': 'Aufgaben & Projekte',
        'umsatz': 'Umsatz-Tracking',
        // ... etc
    };
    document.getElementById('page-title').textContent = titles[tabName];
    
    // Load data
    if (tabName === 'interessenten') loadInteressenten();
    // ... etc
}
```

---

## BEHALTE ALLE FUNKTIONEN:

### Tabs/Sections:
1. ✅ Aufgaben & Projekte (Kanban)
2. ✅ Umsatz-Tracking
3. ✅ Live Chat (externe Seite → inline)
4. ✅ Tickets (externe Seite → inline)
5. ✅ E-Mail senden
6. ✅ News & Aktionen
7. ✅ Interessenten/Neue Anfragen
8. ✅ Provisionen eintragen
9. ✅ Provisionen anzeigen
10. ✅ Partner (externe Seite → inline)
11. ✅ Projekte verwalten
12. ✅ Dokumente prüfen
13. ✅ Akademie & Onboarding
14. ✅ Partner Status Check
15. ✅ Partner Import
16. ✅ Termine (externe Seite → inline)
17. ✅ Verträge (externe Seite → inline + ALLE DATEN!)

### Funktionen:
- ✅ Benachrichtigungs-System (Bell Icon)
- ✅ CSV Export
- ✅ Filter & Such-Funktionen
- ✅ Kanban Board
- ✅ Interessenten-Details Modal
- ✅ Status-Änderungen
- ✅ Email-Versand
- ✅ Alle API-Calls

---

## VERTRÄGE-DETAILS KOMPLETT:

### ALLE Felder anzeigen:
**Kundendaten:**
- ✅ Anrede (Herr/Frau)
- ✅ Vorname
- ✅ Nachname
- ✅ Email
- ✅ Telefon
- ✅ Straße
- ✅ PLZ
- ✅ Stadt
- ✅ Geburtsdatum
- ✅ IBAN
- ✅ Unterschrift (Base64 Bild)

**Vertragsdaten:**
- ✅ Vertragsnummer
- ✅ Datum
- ✅ Kategorie
- ✅ Produkt
- ✅ Anbieter
- ✅ Provision

**Partnerdaten:**
- ✅ Partner Name
- ✅ Partner Email
- ✅ Partner Telefon
- ✅ Partner Firma

**Status & Aktionen:**
- ✅ Dropdown mit 7 Status-Optionen:
  1. Neu eingegangen
  2. In Prüfung
  3. Rückfragen offen
  4. Aktiviert
  5. Abgelehnt
  6. Storniert
  7. Widerrufen

- ✅ Notizen-Feld
- ✅ Speichern-Button
- ✅ Bei Status = "Aktiviert" → Partner benachrichtigen

---

## ZEITPLAN:
- ⏱️ HTML Conversion: 10 Min
- ⏱️ JavaScript Fix: 5 Min
- ⏱️ Testing: 5 Min
- ⏱️ **TOTAL: 20 Minuten** bis fertig!

**JETZT MACHE ICH WEITER!** 🚀
