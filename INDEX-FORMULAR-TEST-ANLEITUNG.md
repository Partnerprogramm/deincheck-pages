# 🧪 INDEX-FORMULAR TEST-ANLEITUNG

**WICHTIG:** Der "Absenden"-Button ist erst in **STEP 5** sichtbar!

---

## ✅ SO TESTEST DU RICHTIG:

### **Step 1: Persönliche Daten**
1. Vorname: `Max`
2. Nachname: `Mustermann`
3. E-Mail: `max@test.de`
4. Telefon: `01234567890`
5. Passwort: `Test12345`
6. Straße: `Teststr. 1`
7. PLZ: `12345`
8. Ort: `Berlin`
9. Firma: `Test GmbH` (optional)
10. **Wähle Modell:** z.B. "Ladenlokal"
11. **Klick:** "Weiter" ➡️

### **Step 2: Erfahrung & Interessen**
1. **Erfahrung:** Wähle eine Option (z.B. "Mobilfunk")
2. **Interessen:** Mindestens 1 Checkbox aktivieren
3. **Verträge/Monat:** Wähle eine Option
4. **Klick:** "Weiter" ➡️

### **Step 3: Standort & Finanzierung**
1. **Standort:** Wähle eine Option
2. **Eigenkapital:** Wähle "Ja" oder "Nein"
3. **Falls Ja:** Unterstützung auswählen (optional)
4. **Ziele:** Text eingeben (optional)
5. **Klick:** "Weiter" ➡️

### **Step 4: Website-Gestaltung**
1. **Art der Seite:** Wähle eine Option
2. **Seitenaufbau:** Wähle eine Option
3. **Texte & Bilder:** Wähle eine Option
4. **Zielgruppe:** Text eingeben (optional)
5. **Kontaktmöglichkeiten:** Mindestens 1 aktivieren
6. **Design & Farben:** Text (optional)
7. **Logo:** Wähle eine Option
8. **Extras:** Text (optional)
9. **Zahlungsmodell:** Wähle eine Option
10. **Klick:** "Weiter" ➡️

### **Step 5: KI-Tools & Absenden** ⭐
1. **System & Automatisierung:** Checkboxen (optional)
2. **KI-Tools:** Checkboxen (optional)
3. **✅ WICHTIG:** Datenschutz-Checkbox aktivieren! ⬅️
4. **Klick:** "Absenden" 🚀

---

## 🎯 WAS PASSIERT BEIM ABSENDEN:

**In der Console siehst du:**
```
==================================================
🎉 FORM SUBMIT TRIGGERED!
📝 Form Submit gestartet!
Current Step: 5
Selected Model: ladenlokal
==================================================
⏳ Button disabled, showing loading state
✅ Datenschutz akzeptiert
📊 Collected form data: { ... }
```

**Button ändert sich zu:**
```
🔄 Wird gesendet...
```

**Nach API-Call:**
```
✅ Erfolgreich registriert!
➡️ Weiterleitung zu partner-login.html
```

---

## ❌ HÄUFIGE FEHLER:

### 1. "Ich sehe den Absenden-Button nicht"
**Lösung:** Du bist nicht in Step 5! Klicke durch alle Steps mit "Weiter"

### 2. "Nichts passiert beim Klick"
**Prüfe:**
- [ ] Bist du wirklich in Step 5?
- [ ] Datenschutz-Checkbox aktiviert?
- [ ] Browser Console geöffnet (F12)?

### 3. "Datenschutz nicht akzeptiert"
**Lösung:** Aktiviere die Checkbox ganz unten in Step 5!

---

## 🔍 DEBUG:

**Öffne Browser Console (F12) und prüfe:**

1. **Beim Laden:**
   ```
   ✅ DOM loaded, registering form submit handler...
   ✅ Form found, adding event listener...
   ✅ Form submit handler registered successfully!
   ```
   → Event Listener ist registriert ✅

2. **In welchem Step bist du?**
   ```javascript
   // In Console eingeben:
   document.querySelector('.form-step.active').id
   // Sollte zurückgeben: "step5"
   ```

3. **Ist Datenschutz aktiviert?**
   ```javascript
   // In Console eingeben:
   document.getElementById('datenschutz').checked
   // Sollte zurückgeben: true
   ```

---

## 📝 SCHNELLTEST (Copy & Paste):

**Öffne Console und füge ein:**

```javascript
// Prüfe Event Listener
console.log('Form:', document.getElementById('partnerForm'));
console.log('Current Step:', document.querySelector('.form-step.active')?.id);
console.log('Datenschutz:', document.getElementById('datenschutz')?.checked);
console.log('Submit Button:', document.querySelector('button[type="submit"]'));
```

**Erwartete Ausgabe:**
```
Form: <form id="partnerForm">...</form>
Current Step: step1 (oder step2, step3, step4, step5)
Datenschutz: false (oder true in Step 5)
Submit Button: <button type="submit">...</button>
```

---

## ✅ CHECKLISTE:

- [ ] Browser Console geöffnet (F12)
- [ ] Sehe "✅ Form submit handler registered successfully!"
- [ ] Bin in Step 1 (Persönliche Daten)
- [ ] Alle Pflichtfelder ausgefüllt
- [ ] Klick "Weiter" → Step 2
- [ ] Alle Felder in Step 2 ausgefüllt
- [ ] Klick "Weiter" → Step 3
- [ ] Alle Felder in Step 3 ausgefüllt
- [ ] Klick "Weiter" → Step 4
- [ ] Alle Felder in Step 4 ausgefüllt
- [ ] Klick "Weiter" → Step 5
- [ ] ✅ Datenschutz aktiviert
- [ ] Klick "Absenden"
- [ ] Sehe "🎉 FORM SUBMIT TRIGGERED!" in Console

---

**🎯 WENN ALLE SCHRITTE BEFOLGT WERDEN, FUNKTIONIERT ES!** ✅
