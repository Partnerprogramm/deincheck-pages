# 🚀 PRODUCTION-READY CHECKLIST

## 🎯 User-Anforderung

> **"jetzt muss aber das Partner Dashboard auch so gemacht werden. Wenn sich jemand neu anmeldet, dass auch nicht die Provision zu sehen sind die wir jetzt gerade sehen. Das ist ja nur Test was wir gemacht haben."**

**RICHTIG!** Aktuell zeigt das Dashboard **Demo-/Test-Daten** → Muss für echte Partner automatisiert werden!

---

## ❌ AKTUELLE PROBLEME

### 1. Demo-Daten im Dashboard
```javascript
// partner-dashboard.html, Zeile 2076
const demoPartner = {
    onboarding_termin: false,
    onboarding_dokumente: false,
    onboarding_ausweis: false,
    onboarding_bank: false,
    onboarding_akademie: false,
    onboarding_abschluss: false,
    modell: 'ladenlokal',
    created_at: new Date().getTime()
};

// Widget wird IMMER mit Demo-Daten angezeigt
showOnboardingWidget(demoPartner);
loadProjektStatus(demoPartner);
```

**Problem:** Neuer Partner sieht Demo-Daten, nicht seine eigenen!

---

### 2. Test-Provisionen hardcodiert
```
Dashboard zeigt:
- Gesamt-Provisionen: ???€ (aus DB oder hardcodiert?)
- Verträge: ??? (aus DB oder hardcodiert?)
```

**Prüfen:** Kommen die Zahlen aus der DB oder sind sie fest im Code?

---

## ✅ WAS MUSS PASSIEREN?

### Kompletter Partner-Flow (PRAXIS):

```
1. REGISTRIERUNG
   ├─ Partner füllt Formular aus (index.html)
   ├─ Daten werden in DB gespeichert (tables/partners)
   └─ Partner erhält Login-Daten

2. LOGIN
   ├─ Partner loggt sich ein (partner-login.html)
   ├─ Email wird in localStorage gespeichert
   └─ Redirect → partner-dashboard.html

3. DASHBOARD (NEUER PARTNER)
   ├─ Dashboard lädt Partner-Daten aus DB
   ├─ Onboarding: 0% (alle Schritte offen)
   ├─ Provisionen: 0€ (keine Verträge)
   ├─ Verträge: 0 (keine Abschlüsse)
   ├─ Projekt-Status: 0% (gerade gestartet)
   └─ Bonus-Ziele: 0 (keine Produkte verkauft)

4. PARTNER NUTZT SYSTEM
   ├─ Erstellt Verträge über Partner-Tool
   ├─ Verträge werden in DB gespeichert
   ├─ Provisionen werden berechnet
   ├─ Dashboard aktualisiert automatisch
   └─ Projekt-Fortschritt läuft (wochen-basiert)

5. AUSZAHLUNG
   ├─ Admin aktiviert Verträge
   ├─ Status → "Ausgezahlt"
   └─ Partner sieht Änderungen im Dashboard
```

---

## 🔍 DRINGENDE PRÜFUNGEN

### Prüfung #1: Partner-Registrierung

**Fragen:**
- ✅ Existiert `index.html` Registrierungsformular?
- ❓ Werden Daten in `tables/partners` gespeichert?
- ❓ Welche Felder werden gespeichert?
- ❓ Wird `modell` (ladenlokal/promotion/etc.) gespeichert?
- ❓ Wird `created_at` (Registrierungsdatum) gespeichert?

**Test:**
```bash
1. Öffne index.html
2. Fülle Formular aus
3. Submit
4. Prüfe: Erscheint Partner in DB?
```

---

### Prüfung #2: Partner-Login

**Fragen:**
- ✅ Existiert `partner-login.html`?
- ❓ Wird Email korrekt in localStorage gespeichert?
- ❓ Redirect zu dashboard funktioniert?

**Test:**
```bash
1. Öffne partner-login.html
2. Login mit neuer Partner-Email
3. Prüfe: Redirect zum Dashboard?
4. Prüfe: localStorage.getItem('partnerEmail')?
```

---

### Prüfung #3: Dashboard lädt echte Daten

**Fragen:**
- ❓ Lädt Dashboard Partner aus DB (`tables/partners`)?
- ❌ PROBLEM: Dashboard nutzt Demo-Daten als Fallback!
- ❓ Zeigt Dashboard 0€ Provisionen für neuen Partner?
- ❓ Zeigt Dashboard 0 Verträge für neuen Partner?

**Test:**
```bash
1. Login als NEUER Partner (der noch keine Verträge hat)
2. Prüfe Dashboard:
   - Gesamt-Provisionen: 0€?
   - Verträge: 0?
   - Onboarding: Alle Schritte offen?
   - Projekt: Gerade gestartet?
```

---

### Prüfung #4: Partner-Tool funktioniert

**Fragen:**
- ✅ Existiert `Partner-Tool.html`?
- ❓ Speichert Tool Verträge in `tables/vertragsabschluesse`?
- ❓ Wird `partner_email` korrekt gespeichert?
- ❓ Wird `gesamt_provision` berechnet?

**Test:**
```bash
1. Öffne Partner-Tool.html
2. Erstelle Test-Vertrag
3. Prüfe DB: Vertrag gespeichert?
4. Prüfe: partner_email = eingeloggter Partner?
5. Gehe zu Dashboard
6. Prüfe: Vertrag sichtbar? Provision angezeigt?
```

---

### Prüfung #5: Automatische Aktualisierung

**Fragen:**
- ❓ Aktualisiert Dashboard automatisch nach neuem Vertrag?
- ❓ Zeigt Dashboard korrekte Provision?
- ❓ Zählt Projekt-Fortschritt Wochen automatisch?

---

## 🛠️ WAS MUSS GEFIXT WERDEN?

### FIX #1: Demo-Daten entfernen

**Aktuell (❌ FALSCH):**
```javascript
// Zeile 2076-2089
const demoPartner = {
    onboarding_termin: false,
    ...
};

showOnboardingWidget(demoPartner);  // ❌ Demo-Daten!
loadProjektStatus(demoPartner);     // ❌ Demo-Daten!
```

**Sollte sein (✅ RICHTIG):**
```javascript
async function loadOnboardingStatus() {
    const partnerEmail = localStorage.getItem('partnerEmail');
    
    if (!partnerEmail) {
        // Kein Login → Redirect zum Login
        window.location.href = 'partner-login.html';
        return;
    }

    try {
        // Load partner data from DB
        const response = await fetch(`tables/partners?search=${partnerEmail}&limit=1`);
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
            const partner = data.data[0];
            
            // Widgets mit ECHTEN Daten aktualisieren
            showOnboardingWidget(partner);
            loadProjektStatus(partner);
        } else {
            // Partner nicht gefunden → Fehler
            alert('Partner nicht gefunden! Bitte neu registrieren.');
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error('Error loading partner:', error);
        alert('Fehler beim Laden der Daten. Bitte neu laden.');
    }
}
```

---

### FIX #2: Provisions-Daten aus DB laden

**Prüfen:**
```javascript
// Zeile ~1450-1480
// Lädt Dashboard Verträge aus DB?
const res = await fetch('tables/vertragsabschluesse?limit=100');
const data = await res.json();
const meineVertraege = data.data.filter(v => v.partner_email === partnerEmail);

// Berechnet Provisionen korrekt?
const totalProv = meineVertraege.reduce((sum, v) => sum + getProvision(v), 0);
```

**Sollte automatisch funktionieren!** Aber testen ob:
- Filter nach `partner_email` funktioniert
- Neue Partner sehen 0€ (keine Verträge)
- Nach erstem Vertrag wird Provision angezeigt

---

### FIX #3: Empty States für neue Partner

**Wenn Partner 0 Verträge hat:**
```html
<!-- Statt leerer Tabelle: -->
<div class="empty-state">
    <i class="fas fa-file-contract" style="font-size: 3rem;"></i>
    <p>Noch keine Verträge</p>
    <p style="color: var(--text-light);">
        Erstelle deinen ersten Vertrag über das Partner-Tool!
    </p>
    <a href="Partner-Tool.html" class="btn btn-primary">
        <i class="fas fa-plus"></i> Ersten Vertrag erstellen
    </a>
</div>
```

---

### FIX #4: Onboarding-Schritte dynamisch

**Aktuell:** Onboarding wird mit Demo-Daten angezeigt  
**Sollte sein:** Onboarding-Status aus `tables/partners` laden

**Felder in DB prüfen:**
- `onboarding_termin` (boolean)
- `onboarding_dokumente` (boolean)
- `onboarding_ausweis` (boolean)
- `onboarding_bank` (boolean)
- `onboarding_akademie` (boolean)
- `onboarding_abschluss` (boolean)

---

## 📋 CHECKLISTE FÜR PRODUCTION

### Phase 1: Registrierung & Login
- [ ] Index.html: Registrierungsformular funktioniert
- [ ] Partner wird in `tables/partners` gespeichert
- [ ] Alle wichtigen Felder werden gespeichert (email, name, modell, created_at)
- [ ] Login funktioniert
- [ ] Email wird in localStorage gespeichert
- [ ] Redirect zum Dashboard funktioniert

### Phase 2: Dashboard für NEUEN Partner
- [ ] Demo-Daten entfernt (kein demoPartner mehr)
- [ ] Dashboard lädt Partner aus DB
- [ ] Falls kein Partner gefunden → Fehler + Redirect
- [ ] Neuer Partner sieht 0€ Provisionen
- [ ] Neuer Partner sieht 0 Verträge
- [ ] Onboarding: Alle Schritte offen (0%)
- [ ] Projekt-Status: Gestartet am heutigen Datum

### Phase 3: Dashboard für AKTIVEN Partner
- [ ] Dashboard lädt Verträge aus DB
- [ ] Provisionen werden korrekt berechnet
- [ ] Nur eigene Verträge werden angezeigt (Filter nach partner_email)
- [ ] Projekt-Fortschritt läuft automatisch (wochen-basiert)
- [ ] Bonus-Ziele zeigen echte Produkt-Zahlen

### Phase 4: Partner-Tool
- [ ] Partner-Tool lädt Partner-Email aus localStorage
- [ ] Verträge werden mit korrekter partner_email gespeichert
- [ ] Nach Vertrag: Dashboard zeigt neuen Vertrag
- [ ] Provisionen werden automatisch berechnet

### Phase 5: Onboarding-Flow
- [ ] Onboarding-Status wird in DB gespeichert
- [ ] Partner kann Schritte abschließen
- [ ] Dashboard aktualisiert Onboarding-Widget
- [ ] Bei 100%: Onboarding-Widget ausblenden oder "Abgeschlossen"-Badge

### Phase 6: Empty States
- [ ] 0 Verträge → Schöner Empty State mit CTA
- [ ] 0 Provisionen → Empty State
- [ ] Keine Bonus-Fortschritte → Empty State

### Phase 7: Error Handling
- [ ] Kein Partner gefunden → Fehler + Redirect
- [ ] Keine DB-Verbindung → Fehler-Message
- [ ] Login fehlgeschlagen → Fehler-Message
- [ ] Kein localStorage → Redirect zum Login

---

## 🚨 KRITISCHE PUNKTE

### 1. Demo-Daten MÜSSEN WEG!
```javascript
// ❌ ENTFERNEN:
const demoPartner = { ... };
showOnboardingWidget(demoPartner);
```

### 2. Partner MUSS aus DB geladen werden
```javascript
// ✅ IMMER aus DB laden:
const response = await fetch(`tables/partners?search=${partnerEmail}`);
```

### 3. KEIN Fallback auf Demo-Daten
```javascript
// ❌ FALSCH:
if (!partner) {
    partner = demoPartner;  // ❌ NEIN!
}

// ✅ RICHTIG:
if (!partner) {
    alert('Partner nicht gefunden!');
    window.location.href = 'index.html';
}
```

---

## 🧪 TEST-SZENARIO

### Szenario: Neuer Partner meldet sich an

```
SCHRITT 1: REGISTRIERUNG
├─ Öffne index.html
├─ Fülle Formular aus:
│  ├─ Name: Max Mustermann
│  ├─ Email: max@test.de
│  ├─ Modell: Ladenlokal
│  └─ Submit
├─ Erwartung: Partner in DB gespeichert
└─ Redirect: partner-login.html?registered=true

SCHRITT 2: LOGIN
├─ Öffne partner-login.html
├─ Login: max@test.de / passwort
├─ Erwartung: Login erfolgreich
└─ Redirect: partner-dashboard.html

SCHRITT 3: DASHBOARD (NEUER PARTNER)
├─ Dashboard lädt
├─ Erwartung:
│  ├─ Gesamt-Provisionen: 0€ ✅
│  ├─ Verträge: 0 ✅
│  ├─ Onboarding: 0% (alle Schritte offen) ✅
│  ├─ Projekt: Woche 0 / 12 ✅
│  └─ Bonus-Ziele: Noch keine Verkäufe ✅
└─ Keine Demo-Daten! ✅

SCHRITT 4: ERSTER VERTRAG
├─ Klick auf "Partner-Tool"
├─ Erstelle Vertrag (DSL)
├─ Erwartung: Vertrag in DB gespeichert
└─ Zurück zum Dashboard

SCHRITT 5: DASHBOARD (NACH VERTRAG)
├─ Dashboard lädt neu
├─ Erwartung:
│  ├─ Gesamt-Provisionen: 50€ ✅
│  ├─ Verträge: 1 ✅
│  ├─ Verträge-Tabelle: 1 Eintrag ✅
│  ├─ Bonus-Ziele: 1 DSL (9 fehlen) ✅
│  └─ Projekt: Woche 0 / 12 (1 Vertrag) ✅
└─ Alles automatisch aktualisiert! ✅
```

---

## 📊 STATUS

| Check | Status | Muss getestet werden |
|-------|--------|----------------------|
| **Registrierung funktioniert** | ❓ | ✅ JA |
| **Login funktioniert** | ❓ | ✅ JA |
| **Dashboard lädt Partner aus DB** | ❓ | ✅ JA |
| **Demo-Daten entfernt** | ❌ NEIN | ✅ DRINGEND |
| **Neuer Partner sieht 0€** | ❓ | ✅ JA |
| **Partner-Tool speichert in DB** | ❓ | ✅ JA |
| **Dashboard aktualisiert automatisch** | ❓ | ✅ JA |

---

## 🎯 NÄCHSTE SCHRITTE

### 1. Demo-Daten entfernen (DRINGEND!)
- [ ] Entferne `demoPartner` Objekt
- [ ] Lade IMMER Partner aus DB
- [ ] Kein Fallback auf Demo-Daten

### 2. Testen mit neuem Partner
- [ ] Registrierung durchführen
- [ ] Login testen
- [ ] Dashboard prüfen (0€, 0 Verträge)
- [ ] Ersten Vertrag erstellen
- [ ] Dashboard prüfen (aktualisiert?)

### 3. Empty States hinzufügen
- [ ] Schöne Meldung bei 0 Verträgen
- [ ] CTA "Ersten Vertrag erstellen"

### 4. Error Handling
- [ ] Partner nicht gefunden → Fehler
- [ ] Kein Login → Redirect

---

**Erstellt:** 2025-01-17  
**Priorität:** 🔴 **KRITISCH**  
**Status:** ⏳ **MUSS SOFORT GETESTET WERDEN**
