# SYSTEM KOMPLETT FERTIG MACHEN - FINALE VERSION

## Was MUSS funktionieren:

### 1. INDEX → PARTNER FLOW
- Interessent füllt Formular aus (index.html)
- → Daten in `affiliates` Tabelle
- → Partner erhält Login-Daten
- → Partner kann sich einloggen

### 2. PARTNER DASHBOARD
- **Onboarding-Widget:** 4 Schritte (Dokumente, Akademie, Erster Vertrag, Call)
- **Projekt-Status:** Countdown (z.B. Ladenlokal 12 Wochen bis Eröffnung)
- **Stats:** Provisionen (Gesamt, Monat, Ausstehend), Verträge
- **Eigene Verträge sehen:** Nur seine eigenen aus `vertragsabschluesse`
- **Provisionen-Übersicht:** Staffeln, Boni, Prognosen
- **Partner-Tool:** Link zu Partner-Tool.html (Verträge erstellen)
- **Entdecken-Widget:** QR-Codes, Empfehlungen, etc.

### 3. PARTNER TOOL → VERTRÄGE
- Partner erstellt Vertrag in Partner-Tool.html
- → Speichert in `vertragsabschluesse`
- → Status: "neu"
- → Partner sieht seinen Vertrag im Dashboard

### 4. ADMIN DASHBOARD
- **Neue Anfragen:** Aus `affiliates` - Admin kann Partner aktivieren
- **Partner-Verwaltung:** Alle Partner aus `partners`
- **Verträge Übersicht:** Alle Verträge aus `vertragsabschluesse`
- **Vertrag Details:** Admin klickt auf Details → Modal mit ALLEN Kundendaten
- **Status ändern:** Admin kann Status ändern (neu → in Bearbeitung → aktiviert → abgelehnt → storniert)
- **Provisions-Status:** Admin kann ändern (ausstehend → angefordert → ausgezahlt)
- **Partner bekommt Benachrichtigung:** Wenn Admin Status ändert

### 5. BENACHRICHTIGUNGEN
- Partner-Dashboard hat Bell-Icon
- → Zeigt Benachrichtigungen aus `partner_benachrichtigungen`
- → Admin-Aktionen triggern Benachrichtigungen

### 6. AUTOMATISCHE FLOWS
- **Partner registriert sich:** → Eintrag in `affiliates`
- **Admin aktiviert Partner:** → Eintrag in `partners`, Partner kann einloggen
- **Partner erstellt Vertrag:** → Eintrag in `vertragsabschluesse`
- **Admin aktiviert Vertrag:** → Benachrichtigung an Partner
- **Admin zahlt Provision aus:** → Benachrichtigung an Partner

---

## Was ich JETZT mache:

1. ✅ Admin Dashboard ist schon zurück (altes funktionierendes)
2. 🔨 Partner Dashboard: Alle Features aus den einzelnen HTML-Dateien zusammenbauen
3. 🔨 Schnittstellen: API-Calls zwischen allen Seiten verbinden
4. 🔨 Benachrichtigungen: System aktivieren
5. 🔨 Flows testen: Gesamter Ablauf muss funktionieren

**Ich fange JETZT an!**
