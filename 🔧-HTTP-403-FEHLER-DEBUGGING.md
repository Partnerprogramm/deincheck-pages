# 🔧 HTTP 403 FEHLER BEIM SPEICHERN - DEBUGGING

## 🚨 PROBLEM

User bekommt **"Fehler beim Speichern HTTP 403"** bei:
- ✍️ Profil-Einstellungen (Name, Telefon)
- 🏦 Bankdaten (IBAN, Kontoinhaber)
- 📝 Passwort ändern

**HTTP 403 bedeutet**: "Forbidden" - Die API blockiert den Request

---

## ✅ WAS WURDE GEFIXT

### 1. Besseres Error-Logging hinzugefügt

**VORHER:**
```javascript
if (!updateRes.ok) {
    throw new Error(`HTTP ${updateRes.status}: ${updateRes.statusText}`);
}
```

**NACHHER:**
```javascript
if (!updateRes.ok) {
    const errorText = await updateRes.text(); // ✅ Hole komplette Error-Message
    console.error('❌ API Error:', updateRes.status, errorText);
    showToast('❌ Fehler beim Speichern', `HTTP ${updateRes.status}: ${errorText}`, 'error');
    return;
}
```

### 2. Detailliertes Console-Logging

**Profil speichern:**
```javascript
const partnerEmail = localStorage.getItem('partnerEmail');
console.log('🔍 Suche Partner:', partnerEmail);

const partner = result.data.find(p => p.email === partnerEmail);
console.log('✅ Partner gefunden:', partner.id, partner.email);

const updateData = { vorname, nachname, email, telefon };
console.log('📤 Sende PATCH Request:', updateData);
```

**Bankdaten speichern:**
```javascript
console.log('🔍 Suche Partner für Bankdaten:', partnerEmail);
console.log('✅ Partner gefunden:', partner.id, partner.email);

const updateData = { iban, kontoinhaber, onboarding_bank: true, bankdaten_hinterlegt: true };
console.log('📤 Sende PATCH für Bankdaten:', `tables/partners/${partner.id}`, updateData);
```

---

## 🧪 DEBUG-TOOL ERSTELLT

### `test-api-update.html`

Interaktives Test-Tool zum Debuggen der PATCH-Requests:

**Features:**
1. **Partner Email setzen** (aus localStorage)
2. **Partner aus DB laden** (mit vollständigen Details)
3. **Profil aktualisieren testen** (Vorname, Nachname, Telefon)
4. **Bankdaten aktualisieren testen** (IBAN, Kontoinhaber)
5. **Live Console Log** mit farbcodierten Messages
6. **Status-Anzeigen** für jeden Schritt

**So verwenden:**
```
1. Öffne test-api-update.html
2. Gib Partner-Email ein → "Email setzen"
3. Klicke "Partner laden" → Sollte Partner aus DB finden
4. Fülle Felder aus → Teste Update
5. Prüfe Console Log für detaillierte Fehler
```

**Log-Farben:**
- 🟢 Grün = Success
- 🔴 Rot = Error
- 🔵 Blau = Info
- 🟠 Orange = Warning

---

## 🔍 MÖGLICHE URSACHEN FÜR HTTP 403

### 1. **Partner-ID nicht gefunden**
```javascript
// Wenn partner.id undefined/null ist:
fetch(`tables/partners/undefined`, ...) // → 403
```

**Fix:**
```javascript
if (!partner || !partner.id) {
    console.error('❌ Partner oder Partner-ID fehlt!');
    showToast('❌ Partner nicht gefunden', 'Bitte melde dich erneut an', 'error');
    return;
}
```

### 2. **API Permissions fehlen**
Die REST API erlaubt möglicherweise keine PATCH-Requests.

**Prüfen:**
- Ist PATCH-Method in API erlaubt?
- Gibt es Rate-Limits?
- Sind Permissions korrekt gesetzt?

### 3. **CORS-Problem**
Browser blockiert Cross-Origin-Request.

**Prüfen im Browser Console:**
```
Access to fetch at 'tables/partners/...' from origin '...' has been blocked by CORS policy
```

### 4. **Falsches Body-Format**
API erwartet anderes JSON-Format.

**Test mit curl:**
```bash
curl -X PATCH 'https://dein-domain.de/tables/partners/{ID}' \
  -H 'Content-Type: application/json' \
  -d '{"vorname":"Test","nachname":"User"}'
```

### 5. **Auth-Token fehlt**
Manche APIs erwarten Authorization-Header.

**Wenn nötig:**
```javascript
headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN' // Falls erforderlich
}
```

---

## 📋 DEBUGGING-SCHRITTE

### Schritt 1: Test-Tool verwenden
```
1. Öffne test-api-update.html
2. Setze Email → Partner laden
3. Versuche Update
4. Prüfe Console Log → Exakte Fehlermeldung?
```

### Schritt 2: Browser Console öffnen (F12)
```
1. Gehe zu partner-dashboard.html → Einstellungen
2. Öffne F12 Console
3. Versuche Speichern
4. Prüfe Logs:
   - 🔍 Suche Partner: [email]
   - ✅ Partner gefunden: [id] [email]
   - 📤 Sende PATCH Request: [data]
   - ❌ API Error: 403 [error-message]
```

### Schritt 3: Network Tab prüfen
```
1. F12 → Network Tab
2. Versuche Speichern
3. Finde PATCH Request zu "tables/partners/..."
4. Klicke drauf → Prüfe:
   - Request URL
   - Request Headers
   - Request Payload
   - Response Status
   - Response Body (Fehler-Message!)
```

### Schritt 4: API direkt testen
```
Öffne Console und teste direkt:

// Partner laden
const res1 = await fetch('tables/partners?limit=10');
const data1 = await res1.json();
console.log('Partners:', data1.data);

// Partner ID holen
const partnerId = data1.data[0].id;
console.log('Partner ID:', partnerId);

// PATCH testen
const res2 = await fetch(`tables/partners/${partnerId}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({vorname: 'Test'})
});
console.log('PATCH Status:', res2.status);
const data2 = await res2.text();
console.log('PATCH Response:', data2);
```

---

## 🛠️ WORKAROUND (Falls API nicht funktioniert)

### Option 1: PUT statt PATCH verwenden
```javascript
// Statt PATCH
const updateRes = await fetch(`tables/partners/${partner.id}`, {
    method: 'PUT', // ← PUT statt PATCH
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        ...partner, // ← Alle existierenden Felder
        vorname: vorname, // ← Nur diese ändern
        nachname: nachname,
        telefon: telefon
    })
});
```

### Option 2: POST-Request verwenden
Wenn API PATCH nicht erlaubt, nutze POST mit special header:
```javascript
const updateRes = await fetch(`tables/partners/${partner.id}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-HTTP-Method-Override': 'PATCH' // ← Trick für manche APIs
    },
    body: JSON.stringify(updateData)
});
```

---

## 📊 NÄCHSTE SCHRITTE

### 1. Test-Tool verwenden
```
Öffne: test-api-update.html
Teste: Profil & Bankdaten Updates
Prüfe: Exakte Fehlermeldung im Log
```

### 2. Screenshots senden
```
📸 test-api-update.html - Nach Update-Versuch
📸 Browser Console (F12) - Mit Logs
📸 Network Tab (F12) - PATCH Request Details
📸 Fehlermeldung im Dashboard
```

### 3. Fragen klären
```
❓ Funktioniert PATCH auf andere Tabellen? (z.B. tasks, news)
❓ Funktioniert POST/DELETE auf partners?
❓ Gibt es API-Dokumentation?
❓ Sind API-Keys/Tokens erforderlich?
```

---

## ✅ ZUSAMMENFASSUNG

### Geänderte Dateien:
- ✅ `partner-dashboard.html` - Besseres Error-Logging
- ✅ `test-api-update.html` - Debug-Tool erstellt

### Nächste Schritte:
1. **Hard Refresh** (Strg + Shift + R)
2. **Test-Tool öffnen** (`test-api-update.html`)
3. **Partner laden** + **Update testen**
4. **Console Log prüfen** → Exakte Fehlermeldung
5. **Screenshots senden** (Test-Tool, Console, Network Tab)

🔍 **Bitte teste jetzt und sende mir die exakte Fehlermeldung aus dem Console Log!**
