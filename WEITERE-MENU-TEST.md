# 🔍 "WEITERE"-MENÜ TEST-GUIDE

**Feature:** Entdecken-Widget kann geschlossen werden und erscheint dann als Menüpunkt  
**Implementiert:** 30. Januar 2025  
**Status:** ✅ Vollständig implementiert

---

## 📋 WAS WURDE IMPLEMENTIERT?

### **Workflow:**

```
Partner sieht Entdecken-Widget im Dashboard
        ↓
Partner klickt X-Button (Schließen)
        ↓
Widget verschwindet
        ↓
Im Header-Menü erscheint: "🔍 Weitere"
        ↓
localStorage: entdeckenWidgetGeschlossen = 'true'
        ↓
Partner klickt "Weitere" im Menü
        ↓
Widget erscheint wieder im Dashboard
        ↓
Menüpunkt "Weitere" verschwindet
        ↓
Smooth-Scroll zum Widget
        ↓
localStorage: entdeckenWidgetGeschlossen entfernt
```

---

## 🧪 TEST-SZENARIO

### **TEST 1: Widget schließen**

**Schritte:**
1. Login als: `test@partner.de` / `Test1234`
2. Dashboard öffnet sich
3. Sie sehen das **"Entdecken"-Widget** mit 4 Features
4. **Klicken Sie** auf das **X-Symbol** rechts oben im Widget

**Erwartetes Ergebnis:**
- ✅ Widget verschwindet sofort
- ✅ Im **Header-Menü** (zwischen "Meine Verträge" und "Hilfe & FAQ") erscheint:
  ```
  🔍 Weitere
  ```
- ✅ Menüpunkt ist klickbar
- ✅ localStorage enthält: `entdeckenWidgetGeschlossen: 'true'`

**Prüfen im Browser:**
```javascript
// F12 → Console
localStorage.getItem('entdeckenWidgetGeschlossen')
// Sollte zeigen: "true"
```

---

### **TEST 2: Widget aus Menü wieder öffnen**

**Schritte:**
1. Nach TEST 1 (Widget ist geschlossen)
2. **Klicken Sie** im Header-Menü auf: **"🔍 Weitere"**

**Erwartetes Ergebnis:**
- ✅ Widget erscheint wieder im Dashboard
- ✅ **Smooth-Scroll** zum Widget (animiert nach unten)
- ✅ Menüpunkt "Weitere" verschwindet aus Header
- ✅ localStorage: `entdeckenWidgetGeschlossen` ist gelöscht

**Prüfen im Browser:**
```javascript
// F12 → Console
localStorage.getItem('entdeckenWidgetGeschlossen')
// Sollte zeigen: null
```

---

### **TEST 3: Status bleibt nach Reload**

**Schritte:**
1. Login als: `test@partner.de`
2. Schließen Sie das Entdecken-Widget (X-Button)
3. Menüpunkt "Weitere" erscheint
4. **Laden Sie die Seite neu** (F5)
5. Dashboard öffnet sich erneut

**Erwartetes Ergebnis:**
- ✅ Widget bleibt **geschlossen** (nicht sichtbar)
- ✅ Menüpunkt "🔍 Weitere" ist **sichtbar**
- ✅ localStorage behält Einstellung bei

---

### **TEST 4: Widget öffnen, Seite neu laden**

**Schritte:**
1. Nach TEST 3 (Widget geschlossen, Menü sichtbar)
2. Klicken Sie "Weitere" → Widget öffnet sich
3. **Laden Sie Seite neu** (F5)

**Erwartetes Ergebnis:**
- ✅ Widget ist **sichtbar**
- ✅ Menüpunkt "Weitere" ist **versteckt**

---

### **TEST 5: Neuer Partner mit Onboarding**

**Schritte:**
1. Logout
2. Login als: `neu@partner.de` / `Neu1234`
3. Dashboard öffnet sich

**Erwartetes Ergebnis:**
- ✅ **Onboarding-Banner** GANZ OBEN (roter Banner)
- ✅ **Entdecken-Widget** darunter (sichtbar)
- ✅ Menüpunkt "Weitere" **versteckt** (noch nicht geschlossen)
- ✅ News-Widget darunter

**Reihenfolge:**
```
1. Onboarding-Banner (rot)
2. Entdecken-Widget (weiß)
3. News-Widget (lila)
4. Dashboard-Cards
```

**Jetzt Widget schließen:**
4. Klicken Sie X-Button am Entdecken-Widget
5. Widget verschwindet
6. Menüpunkt "Weitere" erscheint

**Reihenfolge jetzt:**
```
1. Onboarding-Banner (rot)
2. News-Widget (lila)  ← Widget weg!
3. Dashboard-Cards
```

---

### **TEST 6: Vollzugriff-Partner**

**Schritte:**
1. Login als: `test@partner.de` / `Test1234`
2. Dashboard ohne Widget-Geschlossen-Status
3. Widget sollte sichtbar sein

**Erwartetes Ergebnis:**
- ❌ **Kein** Onboarding-Banner
- ✅ Entdecken-Widget sichtbar
- ✅ News-Widget darunter
- ❌ Menüpunkt "Weitere" versteckt

---

## 🎨 DESIGN-SPECS

### **Menüpunkt "Weitere"**
```css
padding: 10px 18px;
color: #718096;
text-decoration: none;
border-radius: 8px;
font-weight: 600;
transition: all 0.2s;
display: none; /* initial */
align-items: center;
gap: 8px;
font-size: 14px;
```

**Icon:** `<i class="fas fa-compass"></i>`  
**Position:** Zwischen "Meine Verträge" und "Hilfe & FAQ"

### **Hover-Effekt:**
```css
background: #f7fafc !important;
color: #667eea !important;
```

---

## 🔄 FUNKTIONEN

### **JavaScript-Funktionen:**

#### **1. closeEntdeckenWidget()**
```javascript
function closeEntdeckenWidget() {
    // Widget verstecken
    document.getElementById('entdeckenWidget').style.display = 'none';
    
    // Menüpunkt anzeigen
    document.getElementById('weitereMenuLink').style.display = 'inline-flex';
    
    // localStorage speichern
    localStorage.setItem('entdeckenWidgetGeschlossen', 'true');
}
```

#### **2. showEntdeckenWidget()**
```javascript
function showEntdeckenWidget() {
    // Widget anzeigen
    document.getElementById('entdeckenWidget').style.display = 'block';
    
    // Menüpunkt verstecken
    document.getElementById('weitereMenuLink').style.display = 'none';
    
    // localStorage entfernen
    localStorage.removeItem('entdeckenWidgetGeschlossen');
    
    // Smooth-Scroll zum Widget
    document.getElementById('entdeckenWidget').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}
```

#### **3. checkEntdeckenWidgetStatus()**
```javascript
function checkEntdeckenWidgetStatus() {
    const geschlossen = localStorage.getItem('entdeckenWidgetGeschlossen');
    const menuLink = document.getElementById('weitereMenuLink');
    const widget = document.getElementById('entdeckenWidget');
    
    if (geschlossen === 'true') {
        // Widget verstecken, Menülink anzeigen
        if (widget) widget.style.display = 'none';
        if (menuLink) menuLink.style.display = 'inline-flex';
    } else {
        // Widget anzeigen, Menülink verstecken
        if (widget) widget.style.display = 'block';
        if (menuLink) menuLink.style.display = 'none';
    }
}
```

**Wird aufgerufen:** Beim Seiten-Laden (nach allen anderen Load-Funktionen)

---

## 📊 localStorage-KEY

**Key:** `entdeckenWidgetGeschlossen`  
**Werte:**
- `"true"` = Widget ist geschlossen, Menü sichtbar
- `null` = Widget ist sichtbar, Menü versteckt

**Prüfen:**
```javascript
// Browser Console (F12)
localStorage.getItem('entdeckenWidgetGeschlossen')
```

**Setzen (manuell testen):**
```javascript
// Widget schließen
localStorage.setItem('entdeckenWidgetGeschlossen', 'true');
location.reload();

// Widget öffnen
localStorage.removeItem('entdeckenWidgetGeschlossen');
location.reload();
```

---

## 🎯 HEADER-MENÜ STRUKTUR

**Vollständige Reihenfolge:**
```
📊 Dashboard (aktiv, lila)
📦 Provisionen
🎓 Akademie
📅 Termine
🎁 Empfehlungen
🔲 QR-Codes
🛒 Verkaufs-Tool (grün)
📄 Meine Verträge
🔍 Weitere         ← NEU! (nur wenn Widget geschlossen)
❓ Hilfe & FAQ
🚪 Logout (rot)
```

---

## ✅ CHECKLISTE FÜR TESTER

- [ ] Widget hat X-Button rechts oben
- [ ] X-Button schließt Widget
- [ ] Menüpunkt "Weitere" erscheint nach Schließen
- [ ] Menüpunkt ist zwischen "Meine Verträge" und "Hilfe"
- [ ] Click auf "Weitere" öffnet Widget wieder
- [ ] Widget erscheint mit Smooth-Scroll
- [ ] Menüpunkt verschwindet nach Öffnen
- [ ] localStorage wird korrekt gesetzt
- [ ] Status bleibt nach Reload erhalten
- [ ] Hover-Effekt funktioniert
- [ ] Icon "fa-compass" wird angezeigt
- [ ] Funktioniert mit Onboarding-Banner
- [ ] Funktioniert für Vollzugriff-Partner

---

## 🐛 BEKANNTE LIMITATIONEN

Keine bekannten Bugs! ✅

---

## 📞 SUPPORT

**Fragen zum Weitere-Menü?**
- 📧 E-Mail: admin@system.de
- 📖 Dokumentation: README.md
- 🚀 Schnellstart: SCHNELLSTART.html

---

**Entwickelt am:** 30. Januar 2025  
**Feature-Version:** 1.2.1  
**Status:** ✅ Production Ready  

🎉 **Viel Erfolg beim Testen!**