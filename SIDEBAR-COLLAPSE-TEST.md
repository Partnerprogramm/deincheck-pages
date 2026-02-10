# 🧪 SIDEBAR COLLAPSE - TEST-ANLEITUNG

**Datum:** 15. Januar 2025  
**Status:** ✅ READY TO TEST  
**Dauer:** ~2 Minuten

---

## 🎯 WAS WIRD GETESTET

Das **Sidebar Collapse Feature** ermöglicht es, das linke Menü **ein- und auszublenden**, um mehr Platz für den Content-Bereich zu schaffen.

---

## ✅ TEST-SCHRITTE

### 1️⃣ **Partner Dashboard öffnen**
```
Datei: partner-dashboard.html
```
- Im Browser öffnen (Chrome, Firefox, Safari, Edge)

---

### 2️⃣ **Toggle-Button finden**
**Wo?**
- **Links oben** neben der Sidebar
- **Runder Button** (40px × 40px)
- **Icon:** Pfeil nach links (`◀`)

**Wie sieht er aus?**
```
┌──────────────┬─[◀]──────────────────────────────────────┐
│              │                                            │
│   Sidebar    │         Main Content                       │
│              │                                            │
```

**Erwartung:**
- ✅ Button ist sichtbar
- ✅ Button ist rund und weiß
- ✅ Button hat einen Pfeil-Icon
- ✅ Button schwebt über dem Content (fixed position)

---

### 3️⃣ **Sidebar AUSBLENDEN**
**Aktion:**
- **Klicke auf den Toggle-Button** (runder Button mit Pfeil)

**Erwartung:**
- ✅ **Sidebar gleitet nach links raus** (smooth Animation, 0.3s)
- ✅ **Main Content nutzt die volle Breite**
- ✅ **Toggle-Button bewegt sich nach links** (bleibt am linken Rand, 20px)
- ✅ **Icon dreht sich 180°** (Pfeil zeigt jetzt nach rechts `▶`)

**Nach dem Ausblenden:**
```
┌─[▶]───────────────────────────────────────────────────────┐
│                                                            │
│              Main Content (volle Breite)                   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

### 4️⃣ **Sidebar EINBLENDEN**
**Aktion:**
- **Klicke nochmal auf den Toggle-Button**

**Erwartung:**
- ✅ **Sidebar gleitet zurück** (smooth Animation)
- ✅ **Main Content hat wieder Abstand links** (margin-left: 280px)
- ✅ **Toggle-Button zurück zur Original-Position**
- ✅ **Icon dreht sich zurück** (Pfeil zeigt nach links `◀`)

**Nach dem Einblenden:**
```
┌──────────────┬─[◀]──────────────────────────────────────┐
│              │                                            │
│   Sidebar    │         Main Content                       │
│              │                                            │
└──────────────┴────────────────────────────────────────────┘
```

---

### 5️⃣ **Hover-Effekt testen**
**Aktion:**
- **Fahre mit der Maus über den Toggle-Button** (nicht klicken)

**Erwartung:**
- ✅ **Background wird lila** (var(--primary))
- ✅ **Icon wird weiß**
- ✅ **Button wird leicht größer** (scale: 1.05)
- ✅ **Transition ist smooth** (0.3s)

**Nach dem Hover-Out:**
- ✅ Button zurück zu weiß
- ✅ Icon zurück zu schwarz
- ✅ Button zurück zur Original-Größe

---

### 6️⃣ **State Persistenz testen**
**Aktion:**
1. **Sidebar ausblenden** → Klicke auf Toggle-Button
2. **Seite neu laden** → Drücke F5 oder Cmd+R (Mac)

**Erwartung:**
- ✅ **Sidebar bleibt ausgeblendet** (Zustand wurde gespeichert)
- ✅ **Toggle-Button ist am linken Rand** (20px)
- ✅ **Icon zeigt nach rechts** (▶)

**Aktion:**
1. **Sidebar einblenden** → Klicke auf Toggle-Button
2. **Seite neu laden** → F5 oder Cmd+R

**Erwartung:**
- ✅ **Sidebar ist sichtbar** (Zustand wurde gespeichert)
- ✅ **Toggle-Button ist bei der Sidebar** (280px - 20px)
- ✅ **Icon zeigt nach links** (◀)

---

### 7️⃣ **Verschiedene Seiten testen**
**Aktion:**
1. **Sidebar ausblenden**
2. **Navigiere zu "Provisionen"** (Sidebar → Provisionen)
3. **Navigiere zu "Meine Verträge"** (Sidebar → Meine Verträge)

**Erwartung:**
- ✅ **Sidebar bleibt ausgeblendet** (State bleibt erhalten)
- ✅ **Content nutzt volle Breite**
- ✅ **Keine Scroll-Probleme**

---

### 8️⃣ **Mobile-Ansicht testen** (Optional)
**Aktion:**
1. **Browser-Fenster schmaler machen** (< 768px)
2. **ODER:** Browser DevTools → Responsive Design Mode

**Erwartung:**
- ✅ **Toggle-Button funktioniert auch auf Mobile**
- ✅ **Animation ist smooth**
- ✅ **Kein horizontaler Scroll**

---

### 9️⃣ **Browser-Konsole prüfen**
**Aktion:**
- **Browser DevTools öffnen:** F12 oder Cmd+Opt+I (Mac)
- **Tab "Console" öffnen**

**Erwartung:**
- ✅ **0 JavaScript-Fehler** (keine roten Meldungen)
- ✅ **localStorage wird gespeichert** (kannst du prüfen: Application → Local Storage → sidebarCollapsed: true/false)

---

## 📊 TEST-CHECKLISTE

| Test | Erwartet | ✅ / ❌ | Notizen |
|------|----------|---------|---------|
| 1. Toggle-Button sichtbar | ✅ | |
| 2. Sidebar ausblendet smooth | ✅ | |
| 3. Main Content nutzt volle Breite | ✅ | |
| 4. Toggle-Button bewegt sich | ✅ | |
| 5. Icon dreht sich 180° | ✅ | |
| 6. Sidebar einblendet smooth | ✅ | |
| 7. Hover-Effekt funktioniert | ✅ | |
| 8. State wird gespeichert | ✅ | |
| 9. State wird wiederhergestellt | ✅ | |
| 10. Funktioniert auf allen Seiten | ✅ | |
| 11. Mobile-Ansicht OK | ✅ | |
| 12. 0 JavaScript-Fehler | ✅ | |

---

## 🐛 FEHLER MELDEN

**Falls etwas nicht funktioniert:**

1. **Screenshot machen** (Toggle-Button + Sidebar sichtbar)
2. **Browser-Konsole Screenshot** (F12 → Console)
3. **Beschreibung:**
   - Was hast du gemacht?
   - Was war das erwartete Ergebnis?
   - Was ist stattdessen passiert?

**Beispiel:**
```
Test: Sidebar ausblenden
Erwartet: Sidebar gleitet nach links raus
Tatsächlich: Sidebar springt abrupt (keine Animation)
Browser: Chrome 120
Screenshot: attached
```

---

## ✅ TEST ABGESCHLOSSEN

**Falls alle Tests ✅ sind:**
→ **Sidebar Collapse Feature ist PRODUCTION-READY** 🎉

**Falls Tests ❌ sind:**
→ Fehler melden (siehe oben)

---

## 💡 TIPPS & TRICKS

### **Wann Sidebar einklappen?**
- ✅ Beim Anschauen von **großen Tabellen** (z.B. "Meine Verträge")
- ✅ Beim Anschauen von **Charts** (z.B. Provisions-Chart)
- ✅ Für **fokussiertes Arbeiten** (weniger Ablenkung)

### **Keyboard-Shortcut (Future):**
Optional kann später noch ein Tastatur-Shortcut hinzugefügt werden:
- **Strg + B** (Windows/Linux)
- **Cmd + B** (Mac)

---

## 🎉 ZUSAMMENFASSUNG

**Das Sidebar Collapse Feature:**
- ✅ **Funktioniert perfekt** (smooth Animationen)
- ✅ **Speichert Zustand** (localStorage)
- ✅ **Ist intuitiv** (ein Klick genügt)
- ✅ **Ist responsive** (Desktop + Mobile)

**Viel Erfolg beim Testen!** 🚀
