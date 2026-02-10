# 🎓 MEHRSTUFIGE SZENARIEN - UPDATE

## ✅ Was wurde gemacht?

Der Nutzer wollte, dass die **Praxis-Szenarien LÄNGER** werden und **mehrere Schritte** haben, nicht nur 1 Frage und Stopp!

### 🎯 DIE LÖSUNG

Ich habe die Szenarien zu **echten Dialog-Ketten** umgebaut mit **3-5 Schritten**, wo das Gespräch immer weitergeht!

---

## 📚 MEHRSTUFIGE SZENARIEN UMGESETZT

### ✅ MODUL 1: Grundlagen Mobilfunk (Lektion 3) - 5 SCHRITTE!

**Szenario:** Kunde im Shop fragt nach iPhone 15 Pro

**Schritt 1:** Kunde fragt: "Wie viel kostet das iPhone 15 Pro?"  
→ Richtige Antwort: "Das kommt drauf an! Möchten Sie es mit oder ohne Vertrag?"

**Schritt 2:** Kunde: "Mit Vertrag wäre cool. Was zahle ich dann monatlich?"  
→ Richtige Antwort: "Das kommt drauf an! Wie viel GB Datenvolumen nutzen Sie pro Monat?"

**Schritt 3:** Kunde: "Keine Ahnung... vielleicht 30-40 GB?"  
→ Richtige Antwort: "Perfekt! Dann empfehle ich 50 GB - so haben Sie Puffer. 49€/Monat + iPhone für 0€ Zuzahlung."

**Schritt 4:** Kunde: "Klingt gut! Aber 49€ ist viel... bei MediaMarkt habe ich 39€ gesehen."  
→ Richtige Antwort: "Bei MediaMarkt ist das iPhone mit 99€ Zuzahlung - bei uns 0€. Das sind 4 Monate gratis!"

**Schritt 5 (FINALE):** Kunde: "Stimmt, macht Sinn! Gut, überzeugt!"  
→ Abschluss-Optionen: Alternative Close oder Assumptive Close

---

### ✅ MODUL 3: Einwandbehandlung (Lektion 4) - 4 SCHRITTE!

**Szenario:** Telefon-Verkaufsgespräch mit Einwänden

**Schritt 1:** Kunde: "59€/Monat ist zu teuer! Bei Check24 finde ich 29€!"  
→ Richtige Antwort: "Verstehe! Check24 zeigt Lockangebote. Bei uns bekommen Sie Premium-Handy + beste Netzqualität. Darf ich rechnen?"

**Schritt 2:** Kunde: "Na gut, rechnen Sie mal..."  
→ Richtige Antwort: "Bei Check24 nur SIM-Only für 29€. Das iPhone kostet separat 1.299€."

**Schritt 3:** Kunde: "OK... und was spare ich dann bei Ihnen?"  
→ Richtige Antwort: "Bei uns zahlen Sie 1.416€ total. Check24: 1.995€. Sie sparen 579€!"

**Schritt 4 (FINALE):** Kunde: "Wow! Aber... ich muss noch überlegen..."  
→ Richtige Antworten: Aktive Rückfrage ODER Urgency-Technik (Angebot reservieren)

---

## 🚀 TECHNISCHE UMSETZUNG

### Neue Szenario-Struktur:

```javascript
szenario: {
    titel: '🎯 Mehrstufiges Praxis-Szenario',
    mehrstufig: true,  // NEU!
    schritte: [  // NEU! Array von Schritten
        {
            situation: '📍 SCHRITT 1: Kunde fragt...',
            optionen: [
                {
                    text: 'A) Option 1',
                    feedback: '✅ RICHTIG!',
                    richtig: true,
                    naechsterSchritt: 1  // NEU! Geht zu Schritt 2
                },
                {
                    text: 'B) Option 2',
                    feedback: '❌ FALSCH!',
                    richtig: false,
                    naechsterSchritt: -1  // Stoppt hier
                }
            ]
        },
        {
            situation: '📍 SCHRITT 2: ...',
            // usw.
        }
    ]
}
```

### Neue Funktionen:

1. **`checkSzenarioOption(modulId, lektionId, schrittIndex, optionIndex)`**
   - Prüft Antwort
   - Zeigt Feedback
   - Zeigt "Weiter"-Button wenn `naechsterSchritt >= 0`

2. **`loadNextSzenarioSchritt(modulId, lektionId, schrittIndex)`**
   - Lädt den nächsten Schritt
   - Rendert neue Situation + Optionen
   - Ermöglicht Dialog-Ketten

3. **`checkSzenarioOptionOld(modulId, lektionId, optionIndex)`**
   - Für alte einstufige Szenarien (Rückwärtskompatibilität)

---

## 📊 VORHER vs. NACHHER

### ❌ VORHER:
- 1 Frage pro Szenario
- 4 Antwort-Optionen
- Feedback erscheint
- **STOPP - Ende des Szenarios**
- Keine Dialog-Fortsetzung

### ✅ JETZT:
- **3-5 Schritte** pro Szenario
- Jeder Schritt hat 4 Optionen
- Feedback erscheint
- **"Weiter zum nächsten Schritt"-Button** bei richtiger Antwort
- **Echtes Verkaufsgespräch** mit Dialog-Kette
- Falsches Antwort → Szenario stoppt (realistische Konsequenz!)

---

## 🎯 BEISPIEL-ABLAUF

1. **Nutzer öffnet Modul 1, Lektion 3**
2. Scrollt nach unten zum Praxis-Szenario
3. Sieht **SCHRITT 1**: "Kunde fragt: Wie viel kostet das iPhone?"
4. Wählt Antwort B) "Das kommt drauf an! Mit oder ohne Vertrag?"
5. Sieht **Feedback**: ✅ RICHTIG! + Button "Weiter zum nächsten Schritt"
6. Klickt auf Button
7. Sieht **SCHRITT 2**: "Kunde: Mit Vertrag wäre cool..."
8. Wählt wieder richtige Antwort
9. Weiter zu **SCHRITT 3**, dann **4**, dann **5 (FINALE)**
10. Am Ende: **"Super! Szenario abgeschlossen! 🏆"**

---

## ✅ TESTS DURCHGEFÜHRT

- ✅ Seite lädt ohne Fehler
- ✅ Akademie-System wird geladen
- ✅ Mehrstufige Szenarien werden korrekt gerendert
- ✅ "Weiter"-Button funktioniert
- ✅ Schritte werden korrekt nachgeladen
- ✅ Feedback wird angezeigt
- ✅ Bei falscher Antwort stoppt das Szenario (kein Weiter-Button)

---

## 📝 DATEI-ÄNDERUNGEN

### Hauptdatei:
- `akademie-system.js` - **3 Bereiche geändert:**
  1. **Szenario-Struktur** für MODUL 1 & 3 (jetzt mehrstufig)
  2. **Szenario-Rendering** (erkennt `mehrstufig: true`)
  3. **Neue Funktionen** (`checkSzenarioOption`, `loadNextSzenarioSchritt`, `checkSzenarioOptionOld`)

### Keine Änderungen an:
- `partner-dashboard.html` - Unverändert
- Alle anderen Module - Unverändert (können später erweitert werden)

---

## 🎉 ZUSAMMENFASSUNG

### Was wurde erreicht:
- ✅ **2 mehrstufige Szenarien** implementiert (5 + 4 Schritte)
- ✅ **Dialog-Ketten** statt einzelner Fragen
- ✅ **"Weiter"-Button** bei richtigen Antworten
- ✅ **Realistische Verkaufsgespräche** mit mehreren Schritten
- ✅ **Rückwärtskompatibilität** für alte Szenarien

### Umfang:
- **MODUL 1, LEKTION 3:** 5 Schritte (Shop-Gespräch)
- **MODUL 3, LEKTION 4:** 4 Schritte (Telefon-Verkaufsgespräch)
- **Gesamt:** 9 Dialog-Schritte mit je 4 Antwort-Optionen = **36 Antwort-Möglichkeiten**

### Status:
- 🟢 **PRODUCTION READY**
- 🟢 **Getestet und funktionsfähig**
- 🟢 **Keine Breaking Changes**

---

**Erstellt:** 2025-01-23  
**Autor:** AI Assistant  
**Version:** 3.0 - MEHRSTUFIGE SZENARIEN
