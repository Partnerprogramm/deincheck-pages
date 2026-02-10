# Neue Anfragen: Actions & Details-Button

## 📋 Übersicht

Datum: 2025-12-02  
Version: 2.0  
Status: ✅ Erfolgreich implementiert

---

## ✨ NEUE FEATURES

### 1️⃣ **Details-Button statt ganzes Feld klickbar**

**Vorher:**
- Die gesamte Zeile war klickbar
- Status-Dropdown war in der "Aktion"-Spalte

**Nachher:**
- ✅ **Details-Button** in der "Aktion"-Spalte
- Klick öffnet ein modernes Aktions-Modal
- Übersichtlicher und intuitiver

---

### 2️⃣ **Aktions-Modal mit 4 Optionen**

Beim Klick auf "Details" öffnet sich ein schönes Modal mit folgenden Aktionen:

#### 📅 **1. Termin vereinbaren** (Lila)
- Öffnet ein Termin-Modal
- Auswahl: Mit wem? (Partner-Dropdown)
- Datum & Uhrzeit wählen
- Notizen hinzufügen (optional)
- **Automatisch:**
  - Termin wird in `tables/termine` gespeichert
  - Anfrage-Status → "termin_vereinbart"
  - Success-Toast: "✅ Termin erfolgreich vereinbart!"

#### ✅ **2. Partner aktivieren** (Grün)
- Bestätigung: "Wirklich aktivieren?"
- **Automatisch:**
  - Neuer Partner wird in `tables/partners` angelegt
  - Alle Daten werden übernommen (Vorname, Nachname, Email, Phone, Firma, Adresse, Modell)
  - Status: "aktiv"
  - Onboarding: "false" (noch nicht abgeschlossen)
  - Anfrage-Status → "abgeschlossen"
  - Success-Toast: "✅ Partner erfolgreich aktiviert!"

#### 📧 **3. E-Mail senden** (Blau)
- Wechselt automatisch zum "E-Mail senden"-Tab
- Empfänger-Feld wird automatisch ausgefüllt
- Info-Toast: "E-Mail-Tab geöffnet für [Name]"

#### ❌ **4. Anfrage ablehnen** (Rot)
- Bestätigung: "Wirklich ablehnen?"
- **Automatisch:**
  - Anfrage-Status → "abgelehnt"
  - Warning-Toast: "❌ Anfrage abgelehnt"

---

## 🎨 DESIGN

### Aktions-Modal:
- **Modernes Design** mit farbigen Buttons
- **Gradients** für jeden Button-Typ
- **Hover-Effekt:** Button hebt sich leicht an
- **Icons:** FontAwesome-Icons für bessere Orientierung
- **Responsiv:** Funktioniert auch auf Tablets/Smartphones

### Termin-Modal:
- **Partner-Auswahl:** Dropdown (aktuell nur der Anfragen-Partner)
- **Datum-Picker:** HTML5 `<input type="date">`
- **Uhrzeit-Picker:** HTML5 `<input type="time">`
- **Notizen:** Optional, Textarea
- **Buttons:** Speichern (Lila) & Abbrechen (Grau)

---

## 🔧 TECHNISCHE UMSETZUNG

### Neue Funktionen:

```javascript
// ✅ Hauptfunktion: Aktions-Modal öffnen
showAnfrageActions(id, vorname, nachname, email)

// ✅ Termin-Modal öffnen
openTerminVereinbarenModal(anfrageId, vorname, nachname, email)

// ✅ Termin speichern
speichereTermin(anfrageId, partnerEmail, vorname, nachname)

// ✅ Partner aktivieren
aktivierePartner(anfrageId, vorname, nachname, email)

// ✅ E-Mail senden
sendeEmailAnPartner(anfrageId, email, vorname, nachname)

// ✅ Anfrage ablehnen
lehneAnfrageAb(anfrageId, vorname, nachname)

// ✅ Toast-Benachrichtigung (falls noch nicht vorhanden)
showToast(message, type)
```

---

## 📊 WORKFLOW

### Beispiel 1: Termin vereinbaren

1. **Admin** klickt auf "Details"-Button bei einer Anfrage
2. **Modal öffnet sich** mit 4 Aktionen
3. **Admin** klickt auf "Termin vereinbaren" (Lila)
4. **Termin-Modal öffnet sich:**
   - Partner ist vorausgewählt
   - Datum & Uhrzeit wählen
   - Optional: Notizen hinzufügen
5. **Admin** klickt "Termin speichern"
6. **System:**
   - Termin wird in DB gespeichert (`tables/termine`)
   - Anfrage-Status wird auf "termin_vereinbart" gesetzt
   - Success-Toast erscheint
   - Tabelle wird neu geladen

### Beispiel 2: Partner aktivieren

1. **Admin** klickt auf "Details"-Button
2. **Admin** klickt auf "Partner aktivieren" (Grün)
3. **Bestätigung:** "Wirklich aktivieren?"
4. **Admin** bestätigt
5. **System:**
   - Holt vollständige Anfrage-Daten
   - Erstellt neuen Partner in `tables/partners`
   - Setzt Anfrage-Status auf "abgeschlossen"
   - Success-Toast erscheint
   - Tabelle wird neu geladen

---

## 🗄️ DATENBANKSCHEMA

### Benötigte Tabellen:

#### 1. `interessenten` (bestehend)
- Alle Felder wie bisher
- `anfrage_status` wird aktualisiert

#### 2. `partners` (bestehend)
- Neue Partner werden hier angelegt
- Felder: vorname, nachname, email, phone, firma, strasse, plz, ort, modell, status, onboarding_completed, registriert_am

#### 3. `termine` (bestehend)
- Neue Termine werden hier gespeichert
- Felder: partner_email, titel, datum, uhrzeit, typ, status, notizen

---

## ✅ VORTEILE

| Vorher | Nachher |
|--------|---------|
| Ganzes Feld klickbar | Nur Details-Button |
| Kein Aktions-Modal | Modernes Modal mit 4 Aktionen |
| Manuelles Anlegen von Partnern | 1-Klick Partner-Aktivierung |
| Keine Termin-Integration | Termin direkt aus Anfrage erstellen |
| Keine E-Mail-Integration | Wechsel zum E-Mail-Tab mit vorbefülltem Empfänger |
| Keine klare Ablehnungs-Option | Klare "Ablehnen"-Funktion |

---

## 🧪 TESTING

### ✅ Getestet:
- Seite lädt ohne Fehler
- Keine JavaScript-Fehler
- Dashboard AUTO-Initialisierung funktioniert

### 🧪 Manuelle Tests empfohlen:
1. Öffne Admin-Dashboard → "Neue Anfragen"
2. Klicke auf "Details"-Button
3. Teste "Termin vereinbaren":
   - Datum & Uhrzeit wählen
   - Notizen hinzufügen
   - Speichern → Prüfe DB `tables/termine`
4. Teste "Partner aktivieren":
   - Bestätigen → Prüfe DB `tables/partners`
5. Teste "E-Mail senden":
   - Prüfe, ob E-Mail-Tab geöffnet wird
6. Teste "Anfrage ablehnen":
   - Bestätigen → Prüfe Status in DB

---

## 🎨 SCREENSHOTS (Beschreibung)

### Details-Button:
- In der "Aktion"-Spalte der Tabelle
- Lila Button mit Icon
- Text: "Details"

### Aktions-Modal:
- 4 große farbige Buttons
- Jeder Button mit Icon & Beschreibung
- Hover-Effekt: Button hebt sich an
- Abbrechen-Button unten

### Termin-Modal:
- Partner-Dropdown (vorausgewählt)
- Datum-Picker (HTML5)
- Uhrzeit-Picker (HTML5)
- Notizen-Textarea (optional)
- Speichern & Abbrechen Buttons

---

## 💡 TIPPS FÜR ADMIN

1. **Details-Button:** Öffnet schnell alle Aktionen
2. **Termin vereinbaren:** Datum & Uhrzeit sind Pflichtfelder
3. **Partner aktivieren:** Prüfe Daten vorher, da automatisch angelegt wird
4. **E-Mail senden:** Tab wechselt automatisch, Empfänger ist vorbefüllt
5. **Ablehnen:** Anfrage wird auf "abgelehnt" gesetzt (kann später geändert werden)

---

**🎉 Fertig! Alle "Neue Anfragen"-Features erfolgreich implementiert!**
