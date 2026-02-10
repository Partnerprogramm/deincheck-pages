# 🔧 ANLEITUNG: Live Chat ins Admin Dashboard einbauen

## SCHRITT 1: CSS kopieren
Aus `admin-chat.html` Zeile 26-313 (gesamtes Style-Block für Chat):
- `.chat-container`
- `.partner-list`
- `.chat-area`
- `.message-container`
- Alle Chat-Styles

**Einfügen:** In `admin-dashboard.html` im `<style>` Block VOR `</style>`

---

## SCHRITT 2: HTML kopieren
Aus `admin-chat.html` Zeile 358-500 (Chat-Container):
```html
<div class="chat-container">
    <div class="partner-list">
        <!-- Partner-Liste -->
    </div>
    <div class="chat-area">
        <!-- Chat-Bereich -->
    </div>
</div>
```

**Einfügen:** In `admin-dashboard.html` als neuer Tab:
```html
<div class="tab-content" id="tab-live-chat">
    <div class="card">
        <!-- HIER Chat-Container einfügen -->
    </div>
</div>
```

---

## SCHRITT 3: JavaScript kopieren
Aus `admin-chat.html` ab Zeile 503 (gesamtes Script):
- `loadPartners()`
- `selectPartner()`
- `sendMessage()`
- `loadMessages()`
- Event Listeners

**Einfügen:** In `admin-dashboard.html` VOR `</body>`

---

## SCHRITT 4: Anpassen
1. Alle `console.log` behalten für Debugging
2. Fetch-URLs prüfen: `tables/partners`, `tables/chat_nachrichten`
3. LocalStorage: `selectedPartnerId`

---

## FERTIG!
- Tab "Live Chat" klickbar
- Zeigt Partner-Liste
- Chat funktioniert
- Messages werden gespeichert

---

**WICHTIG:** KEIN "Bald verfügbar"! Echte Funktion!
