# 🎯 PARTNER DASHBOARD - Features Plan

## 📋 AUFGABEN-LISTE

### 1. Akademie funktionsfähig ✅
**Status:** HTML bereits vorhanden  
**Zu tun:**
- [x] Module anzeigen (bereits da)
- [ ] `openModul()` Funktion implementieren
- [ ] Fortschritt aus DB laden/speichern
- [ ] Lektionen-Modal erstellen

### 2. QR-Codes & Empfehlungen → "Bald verfügbar" 
**Zu tun:**
- [ ] Empty State mit "Bald verfügbar" Badge
- [ ] Schöne Coming-Soon Message

### 3. Termine funktionsfähig 
**Zu tun:**
- [ ] "Neuer Termin" Button → Calendly öffnen
- [ ] Calendly embedded oder Popup

### 4. Einstellungen speichern 
**Zu tun:**
- [ ] Formular-Submit Handler
- [ ] Daten in DB speichern (UPDATE partners)
- [ ] Success-Message

### 5. Onboarding → Calendly 
**Zu tun:**
- [ ] "Termin vereinbaren" Button → Calendly
- [ ] Nach Termin: onboarding_termin = true

### 6. Bankverbindung speichern 
**Zu tun:**
- [ ] Bankdaten-Modal
- [ ] In DB speichern (partner.iban, partner.kontoinhaber)
- [ ] onboarding_bank = true setzen
- [ ] Admin Dashboard: Bankdaten anzeigen

---

## 🔧 IMPLEMENTIERUNGS-REIHENFOLGE

### Priorität 1 (KRITISCH):
1. **Bankverbindung** - Wichtig für Auszahlungen!
2. **Einstellungen** - User muss Daten ändern können
3. **Onboarding Calendly** - Erster Schritt für neue Partner

### Priorität 2 (WICHTIG):
4. **Termine** - Calendly Integration
5. **Akademie** - Schulungen wichtig

### Priorität 3 (NICE TO HAVE):
6. **QR-Codes/Empfehlungen** - Coming Soon reicht

---

## 📝 DETAILLIERTE IMPLEMENTIERUNG

### 1. Bankverbindung hinzufügen

#### HTML (Modal):
```html
<div id="bank-modal" style="display:none; ...">
    <h2>Bankverbindung hinzufügen</h2>
    <form id="bank-form">
        <input type="text" id="bank-iban" placeholder="DE89 3704 0044 0532 0130 00">
        <input type="text" id="bank-kontoinhaber" placeholder="Max Mustermann">
        <button type="submit">Speichern</button>
    </form>
</div>
```

#### JavaScript:
```javascript
async function saveBankdaten() {
    const iban = document.getElementById('bank-iban').value;
    const kontoinhaber = document.getElementById('bank-kontoinhaber').value;
    
    // Partner aus DB holen
    const partner = await getPartner();
    
    // Update in DB
    await fetch(`tables/partners/${partner.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            iban: iban,
            kontoinhaber: kontoinhaber,
            onboarding_bank: true
        })
    });
    
    alert('Bankdaten gespeichert!');
    closeModal();
    loadOnboardingStatus(); // Refresh Onboarding-Widget
}
```

---

### 2. Einstellungen speichern

#### JavaScript:
```javascript
async function saveEinstellungen() {
    const vorname = document.getElementById('settings-vorname').value;
    const nachname = document.getElementById('settings-nachname').value;
    const email = document.getElementById('settings-email').value;
    const phone = document.getElementById('settings-phone').value;
    
    const partner = await getPartner();
    
    await fetch(`tables/partners/${partner.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            vorname: vorname,
            nachname: nachname,
            email: email,
            phone: phone
        })
    });
    
    // Update localStorage wenn Email geändert wurde
    if (email !== partner.email) {
        localStorage.setItem('partnerEmail', email);
    }
    
    alert('Einstellungen gespeichert!');
}
```

---

### 3. Onboarding Calendly

#### JavaScript:
```javascript
function openTerminModal() {
    // Calendly öffnen
    window.open('https://calendly.com/deincheck-info/15min', '_blank');
    
    // Optional: Nach Termin automatisch als erledigt markieren
    setTimeout(async () => {
        if (confirm('Hast du einen Termin gebucht?')) {
            const partner = await getPartner();
            await fetch(`tables/partners/${partner.id}`, {
                method: 'PATCH',
                body: JSON.stringify({ onboarding_termin: true })
            });
            loadOnboardingStatus();
        }
    }, 3000);
}
```

---

### 4. Termine (Kalender)

#### JavaScript:
```javascript
function openNeuerTermin() {
    window.open('https://calendly.com/deincheck-info/15min', '_blank');
}
```

---

### 5. Akademie

#### JavaScript:
```javascript
function openModul(moduleName) {
    const modules = {
        'grundlagen': {
            title: 'Grundlagen Mobilfunk',
            lessons: [
                'Einführung in Mobilfunk',
                'Tarife & Preise',
                'Netzabdeckung verstehen',
                'Vertragsarten',
                'Quiz'
            ]
        },
        'verkauf': {
            title: 'Verkaufstechniken',
            lessons: [
                'Kundengespräch führen',
                'Bedarfsanalyse',
                'Einwandbehandlung',
                'Abschlusstechniken',
                'Nachbetreuung',
                'Quiz'
            ]
        }
    };
    
    const modul = modules[moduleName];
    if (!modul) return;
    
    // Modal mit Lektionen anzeigen
    const html = `
        <div class="modal">
            <h2>${modul.title}</h2>
            <ul>
                ${modul.lessons.map(l => `<li>${l}</li>`).join('')}
            </ul>
            <button onclick="closeModal()">Schließen</button>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', html);
}
```

---

### 6. QR-Codes & Empfehlungen

#### HTML:
```html
<div class="empty-state">
    <div class="badge badge-warning">Bald verfügbar</div>
    <i class="fas fa-qrcode"></i>
    <p>QR-Codes</p>
    <small>Generiere personalisierte QR-Codes für deine Kunden</small>
    <small style="color: var(--warning); margin-top: 1rem;">
        ⏳ Dieses Feature wird in Kürze freigeschaltet!
    </small>
</div>
```

---

## 🗄️ DATENBANK-FELDER

### partners Table:
```
vorname: string
nachname: string
email: string
phone: string
iban: string ✅ NEU/WICHTIG
kontoinhaber: string ✅ NEU/WICHTIG
onboarding_termin: boolean
onboarding_dokumente: boolean
onboarding_ausweis: boolean
onboarding_bank: boolean ✅ WICHTIG
onboarding_akademie: boolean
onboarding_abschluss: boolean
```

---

## 🔄 WORKFLOW

### Neuer Partner:
```
1. Registrierung
2. Dashboard-Login
3. Onboarding-Widget sieht: 0%
   
4. Partner klickt "Termin vereinbaren"
   → Calendly öffnet
   → onboarding_termin = true ✅
   
5. Partner klickt "Bankverbindung"
   → Modal öffnet
   → IBAN + Kontoinhaber eingeben
   → Speichern → onboarding_bank = true ✅
   → Admin kann jetzt IBAN sehen!
   
6. Partner geht zu "Einstellungen"
   → Ändert Telefonnummer
   → Speichern → DB updated ✅
   
7. Partner geht zu "Termine"
   → Klickt "Neuer Termin"
   → Calendly öffnet ✅
   
8. Partner geht zu "Akademie"
   → Klickt auf Modul
   → Lektionen werden angezeigt ✅
```

---

## ✅ CHECKLISTE

### Bankverbindung:
- [ ] Modal erstellen
- [ ] IBAN + Kontoinhaber Felder
- [ ] Save-Funktion
- [ ] DB Update
- [ ] onboarding_bank = true
- [ ] Admin Dashboard Anzeige

### Einstellungen:
- [ ] Form Submit Handler
- [ ] DB Update (PATCH)
- [ ] Success Message
- [ ] localStorage Update (bei Email-Änderung)

### Onboarding Calendly:
- [ ] Button-Handler
- [ ] Calendly öffnen
- [ ] Optional: onboarding_termin = true

### Termine:
- [ ] Button-Handler
- [ ] Calendly öffnen

### Akademie:
- [ ] openModul() Funktion
- [ ] Modal mit Lektionen
- [ ] Fortschritt speichern (optional)

### QR-Codes/Empfehlungen:
- [ ] "Bald verfügbar" Badge
- [ ] Coming Soon Message

---

## 🚀 IMPLEMENTIERUNGS-PLAN

### Phase 1: KRITISCH (Heute)
1. Bankverbindung-Modal
2. Einstellungen-Speichern
3. Onboarding-Calendly

### Phase 2: WICHTIG (Diese Woche)
4. Termine-Calendly
5. Akademie-Modals

### Phase 3: NICE TO HAVE
6. QR-Codes/Empfehlungen Coming Soon

---

**Priorität:** 🔴 HOCH  
**Status:** ⏳ IN PROGRESS  
**Deadline:** Heute (Phase 1)
