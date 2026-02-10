# 🔧 WIEDERHERSTELLUNGSPLAN - FUNKTIONIERENDE FEATURES

## ❌ Was kaputt gemacht wurde:

### Partner Dashboard:
1. ❌ **Onboarding-Widget** fehlt komplett
2. ❌ **Projekt-Status** fehlt (Ladenlokal 12 Wochen, Prozent-Anzeige)
3. ❌ **"Entdecken"-Widget** fehlt
4. ❌ **Verträge vom Partner Tool** werden nicht angezeigt
5. ❌ **Provisionen** werden nicht berechnet

### Admin Dashboard:
1. ❌ **Alle Kundendaten** fehlen (nur Teildaten)
2. ❌ **Anrede, IBAN, Unterschrift** fehlen
3. ❌ **Status-Optionen** fehlen (nur Accept/Reject statt vielen)
4. ❌ **Schnittstellen** fehlen (Partner sieht keine Updates)

---

## ✅ Was wiederhergestellt werden muss:

### 1. ONBOARDING-WIDGET (Partner Dashboard)
**Position:** Ganz oben, VOR News-Widget

**Features:**
- ⚠️ Roter Banner wenn `onboarding_completed = false`
- 📊 Fortschrittsbalken (0% - 100%)
- 4 Schritte-Cards:
  1. 📝 Partnervertrag unterschreiben (PFLICHT)
  2. 📄 Dokumente hochladen (PFLICHT) → Ausweis vorne/hinten
  3. 🎓 Akademie-Schulung absolvieren (PFLICHT)
  4. 🏦 Bankdaten hinterlegen (EMPFOHLEN)

**Datenbank-Felder (partners):**
```
vertrag_unterschrieben: bool
dokumente_hochgeladen: bool
schulung_absolviert: bool
bankdaten_hinterlegt: bool
onboarding_completed: bool
onboarding_started_at: datetime
vollzugriff_seit: datetime
```

---

### 2. PROJEKT-STATUS WIDGET
**Position:** Unter Onboarding (wenn applicable)

**Logik:**
- **Ladenlokal** → 12 Wochen Projekt
- **Promotion Stand** → 8 Wochen
- **Shop-in-Shop** → 10 Wochen
- **Online Shop** → 6 Wochen
- **Affiliate** → Kein Projekt (sofort verfügbar)

**Anzeige:**
```
🏪 Dein Ladenlokal-Projekt
━━━━━━━━━━━━━━━━━━━━ 65%

Fortschritt: 8 von 12 Wochen
Status: In Planung
Nächster Meilenstein: Standort finalisieren
```

**Auto-Update:** Jeden Tag +0.x% basierend auf Wochen

---

### 3. "ENTDECKEN"-WIDGET
**Position:** Unter Projekt-Status

**4 Feature-Cards:**
1. 🛒 **Online-Shop** (Verfügbar ab Premium)
2. 👥 **Partner werben Partner** (MLM)
3. 🤖 **KI-Tools** (ChatGPT, Bildgenerierung)
4. 📊 **Erweiterte Analytics** (Premium)

**Kann geschlossen werden** → localStorage

---

### 4. VERTRÄGE VOM PARTNER TOOL
**Problem:** Partner Tool sendet Daten an `vertragsabschluesse`, aber Partner Dashboard zeigt sie nicht

**Lösung:**
```javascript
// Partner Dashboard lädt:
const response = await fetch('tables/vertragsabschluesse?limit=1000');
const allContracts = data.data;

// Filtere nur EIGENE Verträge:
const myContracts = allContracts.filter(c => 
    c.partner_email === currentPartner.email
);

// Zeige in Tabelle:
renderContracts(myContracts);

// Berechne Provisionen:
const totalProvision = myContracts
    .filter(c => c.status === 'Aktiviert')
    .reduce((sum, c) => sum + parseFloat(c.provision || 0), 0);
```

---

### 5. ADMIN DASHBOARD - ALLE DATEN
**Problem:** Nur Teildaten sichtbar

**Fehlende Felder:**
- Anrede (Herr/Frau)
- Kunde IBAN
- Kunde Unterschrift (Base64)
- Alle Partner-Daten
- Notizen-Feld
- Mehrere Status-Optionen

**Status-Optionen:**
1. Neu eingegangen
2. In Prüfung
3. Rückfragen offen
4. **Aktiviert** ← Partner bekommt Benachrichtigung
5. Abgelehnt
6. Storniert
7. Widerrufen

---

### 6. SCHNITTSTELLEN (Notifications)
**Tabelle:** `benachrichtigungen`

**Schema:**
```json
{
  "partner_email": "max@example.com",
  "type": "vertrag_aktiviert|provision_ausgezahlt|system",
  "titel": "Vertrag aktiviert!",
  "nachricht": "Dein Vertrag #ABC123 wurde aktiviert.",
  "vertrag_id": "uuid",
  "amount": 50.00,
  "gelesen": false,
  "erstellt_am": "2025-01-15T10:00:00Z"
}
```

**Flow:**
1. Admin aktiviert Vertrag
2. System erstellt Benachrichtigung
3. Partner sieht Bell-Icon mit Badge "1"
4. Partner klickt → Dropdown mit Benachrichtigungen
5. Partner klickt auf Benachrichtigung → Zu Vertrag

---

## 📋 IMPLEMENTIERUNGS-REIHENFOLGE:

### Phase 1: Partner Dashboard (SOFORT)
- [ ] Onboarding-Widget einfügen
- [ ] Projekt-Status Widget
- [ ] Entdecken-Widget
- [ ] Verträge-Anzeige fixen
- [ ] Provisionen-Berechnung fixen

### Phase 2: Admin Dashboard (DANACH)
- [ ] Alle Felder anzeigen
- [ ] Mehr Status-Optionen
- [ ] Notizen-Feld
- [ ] Unterschrift anzeigen

### Phase 3: Schnittstellen (ZULETZT)
- [ ] Benachrichtigungs-System
- [ ] Auto-Updates bei Status-Änderung
- [ ] Email-Benachrichtigungen

---

## 🎯 ZIEL:
**ALLES SO WIE VORHER** + Neues Design + Mobile-Optimierung

**KEINE FEATURES ENTFERNEN!**
**NUR DESIGN VERBESSERN!**
