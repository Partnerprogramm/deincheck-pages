# 🌐 Domain-Übersicht: DeinCheck Partnerprogramm

**Domain:** `https://partnerprogrammdeincheck.com`

---

## 📋 Alle verfügbaren Seiten

### **1️⃣ Startseite / Interessenten-Formular**
**URL:** `https://partnerprogrammdeincheck.com/` oder `https://partnerprogrammdeincheck.com/index.html`

**Funktion:**
- Multi-Step-Formular (5 Schritte) für neue Interessenten
- Partner-Modell-Auswahl:
  - 🏪 **Ladenlokal** (Stationärer Shop)
  - 📣 **Promotion Stand** (Mobile Verkaufsstände)
  - 🛍️ **Shop-in-Shop** (Shop im bestehenden Geschäft)
  - 🌐 **Online Shop** (E-Commerce)
  - 🤝 **Affiliate Partner** (Empfehlungsmarketing)
- Erfassung von:
  - Persönliche Daten (Name, Email, Telefon, Adresse)
  - Business-Informationen (Erfahrung, Interessen, Verträge/Monat)
  - Standort & Finanzierung (für Ladenlokal/Promotion)
  - Website-Details (für Online Shop)
- Speicherung in DB-Tabelle: `interessenten`

**Zielgruppe:** Neue Partner-Interessenten

---

### **2️⃣ Partner-Login**
**URL:** `https://partnerprogrammdeincheck.com/partner-login.html`

**Funktion:**
- Login-Formular für registrierte Partner
- Authentifizierung via Email (Passwort-Check in `partners`-Tabelle)
- Nach erfolgreichem Login → Weiterleitung zu Partner-Dashboard

**Zielgruppe:** Bestehende Partner

---

### **3️⃣ Partner-Dashboard**
**URL:** `https://partnerprogrammdeincheck.com/partner-dashboard.html`

**Funktionen:**

#### **📊 Übersicht / Startseite**
- **Echtzeit-Statistiken:**
  - Heute: Verträge, Provision
  - Gestern: Verträge, Provision
  - Aktueller Monat: Verträge, Provision
  - Ausstehende Provisionen
  - Gesamt-Verträge
- **Onboarding-Widget** (visueller Fortschritt-Balken)
  - 6 Schritte: Termin → Dokumente → Ausweis → Bank → Akademie → 1. Vertrag
  - Prozentuale Anzeige (z.B. "33% abgeschlossen")
  - Automatisches Markieren bei Abschluss
- **Projekt-Status-Widget** (für Ladenlokal/Promotion/Shop-in-Shop)
  - Wochen-Fortschritt in %
  - Vertrags-Ziel (z.B. "0 / 30 Verträge")
  - Provisions-Ziel (z.B. "0€ / 6.000€")
  - Bonus-Tier (Staffel 1, 2, 3)

#### **🎓 Akademie (8 Module, 115 Lektionen)**
- **Module:**
  1. 📚 Grundlagen Mobilfunk (12 Lektionen, 90 Min)
  2. 🧠 Verkaufspsychologie & Gesprächsführung (15 Lektionen, 120 Min)
  3. 🛡️ Einwandbehandlung Masterclass (18 Lektionen, 105 Min)
  4. 🎯 Abschlusstechniken & Closing (14 Lektionen, 95 Min)
  5. 📦 Produktwissen Komplett (22 Lektionen, 180 Min)
  6. 📞 Kaltakquise & Lead-Generierung (16 Lektionen, 110 Min)
  7. 💪 Mindset & Motivation (10 Lektionen, 75 Min)
  8. ⚖️ Rechtliche Grundlagen & Compliance (8 Lektionen, 60 Min)
- **Funktionen:**
  - Fortschritts-Tracking in % (z.B. "25% = 2/8 Module abgeschlossen")
  - Lektion-Abschluss-Button
  - Automatische Zertifikat-Erstellung nach Modul-Abschluss
  - Badge-Anzeige: "LEVEL 1" → "✅ ABGESCHLOSSEN"
  - Quiz-System (in Entwicklung)

#### **📄 Verträge**
- Übersicht aller eigenen Verträge
- Filter nach Status (Neu, Aktiviert, Abgelehnt, Storniert)
- Provisions-Anzeige (Tarif + Cross-Sells)
- Export als PDF (Apple-Style)

#### **👤 Profil-Einstellungen**
- Name, Email, Telefon, Firma bearbeiten
- Bankdaten (IBAN, Kontoinhaber)
- Profilbild-Upload
- Speicherung in DB-Tabelle: `partners`

#### **📰 News & Infos**
- Admin-erstellte News-Artikel
- Timeline-Ansicht
- Filter nach Priorität & Datum

#### **🛠️ Tools**
- Partner-Toolkit (Verkaufsskripte, Checklisten)
- Marketing-Materialien (Flyer, Plakate, QR-Codes)
- Tracking-Links (für Affiliate-Partner)

#### **🚀 Onboarding (6-Schritte-System)**
1. **Termin vereinbaren** (Calendly inline im Modal)
2. **Dokumente hochladen** (Gewerbeschein, Steuernr., Handelsregister)
3. **Ausweis hochladen**
4. **Bankdaten eintragen**
5. **Akademie-Modul abschließen**
6. **Erster Vertrag abschließen** (automatisch markiert)

**Zielgruppe:** Aktive Partner

---

### **4️⃣ Admin-Login**
**URL:** `https://partnerprogrammdeincheck.com/admin-login.html`

**Funktion:**
- Login-Formular für Admin-Benutzer
- Nach Login → Weiterleitung zu Admin-Dashboard

**Zielgruppe:** Administratoren

---

### **5️⃣ Admin-Dashboard**
**URL:** `https://partnerprogrammdeincheck.com/admin-dashboard.html`

**Funktionen:**

#### **🏠 Dashboard-Übersicht**
- **Statistik-Karten:**
  - Heute: Umsatz & Verträge
  - Gestern: Umsatz & Verträge
  - Aktueller Monat: Umsatz & Verträge
  - Aktive Partner
  - Neue Anfragen

#### **🆕 Neue Anfragen**
- **Statistik-Karten:**
  - Neue Anfragen (Status: "neu")
  - Kontaktiert (Status: "kontaktiert")
  - Termin vereinbart (Status: "termin_vereinbart")
  - Gesamt
- **Interessenten-Tabelle:**
  - Status, Datum, Name, Modell, Kontakt, Erfahrung
  - **Details-Button:** Öffnet Modal mit ALLEN Daten
    - Persönliche Daten, Business-Infos, Standort, Website, Notizen
    - 4 Quick-Actions:
      1. ⏰ **Termin vereinbaren** → Modal mit Datum/Zeit/Partner-Auswahl
      2. ✅ **Partner aktivieren** → Erstellt neuen Partner in `partners`-Tabelle
      3. ✉️ **E-Mail senden** → Öffnet E-Mail-Client
      4. ❌ **Anfrage ablehnen** → Setzt Status auf "abgelehnt"
  - Status-Änderung per Dropdown

#### **👥 Partner-Verwaltung**
- **Statistik-Karten:**
  - Gesamt-Partner
  - Aktive Partner
  - Neue Partner (letzte 30 Tage)
  - Onboarding läuft
- **Filter:**
  - Modell (Ladenlokal, Provisionspartner, Affiliate)
  - Onboarding-Status (Abgeschlossen, Offen)
- **Partner-Tabelle:**
  - Name, Email, Status, IBAN, **Dokumente** (✅/❌), **Verträge** (✅/❌), **Onboarding** (✅/❌)
  - **Details-Button:** Öffnet Modal mit Partner-Details
    - Kontaktdaten, Bankdaten
    - **Dokumente-Sektion:**
      - Liste aller Dokumente (Gewerbeschein, Steuernr., Handelsregister, Ausweis, Vertrag)
      - Status: **Hochgeladen** ✅ / **Ausstehend** ⏳ / **Nicht vorhanden** ❌
    - **Verträge-Sektion:**
      - Anzahl, Gesamt-Provision, Ausstehend, Ausgezahlt
    - **Onboarding-Status:**
      - 6 Checkpoints mit ✅/❌
      - Fortschritts-Balken in %

#### **💰 Finanzen**
##### **Provisionen**
- Partner-Provisions-Übersicht
- Filter nach Partner-Email
- Summen: Ausstehend, Ausgezahlt, Gesamt
- **Auszahlung markieren**-Button (setzt Status auf "ausgezahlt")

##### **Verträge**
- **Statistik-Karten:**
  - Neue Verträge
  - Aktivierte Verträge
  - Abgelehnte Verträge
  - Stornierte Verträge
- **Vertrags-Tabelle:**
  - Vertragsnr., Partner, Kunde, Produkt, Anbieter, Provision, Status
  - **Details-Button:** Öffnet Modal mit ALLEN Vertrags-Daten
    - Kundendaten (Anrede, Name, Email, Telefon, Adresse, Geburtsdatum, Ausweis-Nr., IBAN)
    - Vertragsdaten (Vertragsnr., Datum, Kategorie, Anbieter, Tarif, Tarif-Preis, Handy, Portierung, Cross-Sells)
    - Provisions-Daten (Tarif-Provision, Cross-Sell-Provision, **GESAMT-PROVISION**)
    - Partnerdaten (Name, Email)
    - Unterschrift (Bild)

##### **Auszahlungen**
- Provisions-Übersicht pro Partner
- **"Auszahlung markieren"**-Button
- Status wechselt von "Ausstehend" zu "Ausgezahlt"

##### **Statistik & Ziel-Erreichung**
- Partner-Fortschritt (Staffel 1, 2, 3)
- Durchschnitts-Fortschritt
- Bonus ausgezahlt

#### **🎓 Akademie**
- **Statistik-Karten:**
  - Onboarding abgeschlossen
  - Partner in Schulung
  - Zertifikate ausgestellt
  - Ø Fortschritt
- **Partner-Akkordeon:**
  - Sortiert nach Fortschritt % (höchste zuerst)
  - Farb-Kodierung:
    - 🟢 Grün: 100% abgeschlossen
    - 🔵 Blau: > 50%
    - 🟠 Orange: > 0%
    - ⚫ Grau: 0%
  - **Details pro Partner:**
    - Name, Email, Gesamt-Fortschritt, Zertifikate
    - **8 Module mit Fortschritts-Balken:**
      - Modul-Name, Icon, Fortschritt %, Zertifikat-Status (🏆/❌)
  - Filter: Alle, 100%, In Bearbeitung, 0%
  - Pagination (10 Partner/Seite)

#### **💬 Kommunikation**
- **Live Chat** (3 aktive Chats)
- **Support Tickets** (8 offen, 5 in Bearbeitung, 2 dringend)
- **Termine & Kalender**
  - Kommende Termine (Tabelle)
  - Alle Termine (Tabelle)
  - **Partner Status Check** (Email eingeben → Onboarding-Status abrufen)

#### **📰 Marketing & Partner**
##### **Partner-Programm**
- Partner-Werbe-Materialien
- Tracking-Links
- QR-Codes

##### **E-Mail senden**
- Bulk-E-Mail an Partner
- Vorlagen-System

##### **News & Aktionen**
- **News erstellen:**
  - Titel, Inhalt, Priorität (Hoch, Mittel, Niedrig)
  - Zielgruppe:
    - Alle Partner
    - Nach Modell filtern (Ladenlokal, Promotion, Shop-in-Shop, Online-Shop, Affiliate)
    - Bestimmte Partner (Email-Liste)
  - Icon, Gültigkeit (Datum)
- **Alle News & Aktionen:**
  - Tabelle mit Titel, Typ, Zielgruppe, Datum, Status, Aktionen

**Zielgruppe:** Administratoren

---

## 🗄️ Datenbank-Tabellen

Das System verwendet folgende Tabellen (via RESTful Table API):

1. **`partners`** (39 Felder)
   - Profil, Onboarding, Bank, Tarif, Dokumente

2. **`vertragsabschluesse`** (26 Felder)
   - Partner-Zuordnung, Kunden-Daten, Vertrags-Details, Provisions-Info

3. **`interessenten`** (24 Felder)
   - Modell, Personal-Daten, Business-Info, Verkaufskanäle, Status

4. **`akademie_fortschritt`** (12 Felder)
   - Partner-Zuordnung, Modul-ID, Lektion-ID, Status, Fortschritt %, Quiz

5. **`provisionen`** (16 Felder)
   - Partner-Zuordnung, Betrag, Status (ausstehend/ausgezahlt)

6. **`zertifikate`** (11 Felder)
   - Partner-Zuordnung, Modul-Info, Ausstellungs-Datum

7. **`termine`** (noch nicht vollständig implementiert)
   - Termin-Details, Partner-Zuordnung

---

## 📱 Zugangsdaten (Test)

### **Partner-Login:**
- URL: `https://partnerprogrammdeincheck.com/partner-login.html`
- Email: `info@deincheck.de` (oder andere registrierte Partner)
- Passwort: *(vom Admin vergeben)*

### **Admin-Login:**
- URL: `https://partnerprogrammdeincheck.com/admin-login.html`
- Zugangsdaten: *(Admin-spezifisch)*

---

## 🎯 Besonderheiten des Partner-Tools

### **1. Onboarding-Progress-Balken (Partner-Dashboard)**
- **Wo:** Partner-Dashboard → Startseite (oben)
- **Funktion:**
  - Zeigt Fortschritt in % (z.B. "33% abgeschlossen")
  - 6 Schritte: Termin, Dokumente, Ausweis, Bank, Akademie, 1. Vertrag
  - Automatische Aktualisierung bei Abschluss

### **2. Projekt-Status-Widget (Partner-Dashboard)**
- **Wo:** Partner-Dashboard → Startseite (unten)
- **Funktion:**
  - Zeigt Projekt-Fortschritt in % (z.B. "Woche 2/12 = 16%")
  - Partner-Typ-spezifisch:
    - **Ladenlokal:** 12 Wochen, Ziel: 30 Verträge, 6.000€ Provision
    - **Promotion Stand:** 8 Wochen, Ziel: 20 Verträge, 4.000€ Provision
    - **Shop-in-Shop:** 10 Wochen, Ziel: 25 Verträge, 5.000€ Provision
  - Bonus-Tier (Staffel 1, 2, 3)

### **3. Dokumente (Admin-Dashboard)**
- **Wo:** Admin-Dashboard → Partner-Verwaltung → Details-Button → Dokumente-Sektion
- **Funktion:**
  - Liste aller Dokumente pro Partner:
    - Gewerbeschein
    - Steuernummer
    - Handelsregisterauszug
    - Ausweis
    - Vertrag
  - Status:
    - ✅ **Hochgeladen** (grün)
    - ⏳ **Ausstehend** (orange)
    - ❌ **Nicht vorhanden** (rot)

### **4. Akademie-Fortschritt (Admin & Partner)**
- **Admin-Dashboard:**
  - Akademie-Sektion → Partner-Akkordeon
  - Zeigt Fortschritt aller Partner
  - Sortierung & Filter (100%, In Bearbeitung, 0%)
- **Partner-Dashboard:**
  - Akademie-Seite
  - 8 Module mit Fortschritts-Balken
  - "Dein Fortschritt" oben (z.B. "37.5% = 3/8 Module")

---

## 🚀 Nächste Schritte (Optional)

1. **Termin-System ausbauen:**
   - Kalender-Ansicht (Admin)
   - Termin-Erinnerungen (E-Mail)
   
2. **Dokumente-Upload (Partner):**
   - Partner lädt Dokumente selbst hoch
   - Admin-Freigabe-Workflow

3. **Live-Chat:**
   - Echtzeit-Kommunikation Partner ↔ Admin

4. **Provisions-Prognose:**
   - Basierend auf Pipeline & historischen Daten

5. **Quiz-System (Akademie):**
   - Fragen & Antworten pro Modul
   - Zertifikat nur nach bestandenem Quiz

---

## ✅ Status: VOLLSTÄNDIG FUNKTIONSFÄHIG

**Letzte Aktualisierung:** 2025-12-03

🎉 **Das Partner-Tool ist live und bereit für den Einsatz!**
