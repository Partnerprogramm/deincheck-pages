# 🗑️ DATEIEN ZUM LÖSCHEN

Diese Dateien sind **Backups** oder **Duplicates** und werden **nicht mehr benötigt**.

---

## ❌ BACKUP-DATEIEN (SOFORT LÖSCHEN):

### 1. **admin-dashboard-FINAL-WORKING.html**
- ✅ **Grund:** Backup von `admin-dashboard.html`
- ✅ **Action:** Löschen (aktuelle Version in `admin-dashboard.html`)

### 2. **admin-dashboard-old-backup.html**
- ✅ **Grund:** Altes Backup
- ✅ **Action:** Löschen

### 3. **WORKING-BACKUP-ADMIN.html**
- ✅ **Grund:** Backup von Admin Dashboard
- ✅ **Action:** Löschen

### 4. **partner-dashboard-OLD-BACKUP.html**
- ✅ **Grund:** Altes Backup des Partner Dashboards
- ✅ **Action:** Löschen

---

## ❌ SEPARATE DATEIEN (BEREITS INTEGRIERT):

### 5. **admin-chat.html**
- ✅ **Grund:** Jetzt integriert in `admin-dashboard.html` (Live Chat Tab)
- ✅ **Action:** Löschen (funktioniert bereits im Dashboard)

### 6. **admin-tickets.html**
- ✅ **Grund:** Jetzt integriert in `admin-dashboard.html` (Tickets Tab)
- ✅ **Action:** Löschen

### 7. **admin-kalender.html**
- ✅ **Grund:** Kalender ist bereits in `admin-dashboard.html` integriert
- ✅ **Action:** Löschen (wenn vollständig integriert)

### 8. **partner-hilfe.html**
- ✅ **Grund:** Jetzt integriert in `partner-dashboard.html` (Hilfe & FAQ Tab)
- ✅ **Action:** Löschen

### 9. **partner-kalender.html**
- ✅ **Grund:** Kalender ist bereits in `partner-dashboard.html` integriert
- ✅ **Action:** Löschen (wenn vollständig integriert)

### 10. **partner-empfehlungen.html**
- ✅ **Grund:** Jetzt integriert in `partner-dashboard.html` (Empfehlungen Tab)
- ✅ **Action:** Löschen

### 11. **partner-qr-codes.html**
- ✅ **Grund:** Jetzt integriert in `partner-dashboard.html` (QR-Codes Tab)
- ✅ **Action:** Löschen

### 12. **partner-provisionen.html**
- ✅ **Grund:** Jetzt integriert in `partner-dashboard.html` (Provisionen Tab)
- ✅ **Action:** Löschen

### 13. **partner-vertraege.html** 
- ✅ **Grund:** Jetzt integriert in `partner-dashboard.html` (Meine Verträge Tab)
- ✅ **Action:** Löschen

---

## ⚠️ OPTIONAL ZU LÖSCHEN (Preview-Dateien):

### 14. **success-modal-compact.html**
- ⚠️ **Grund:** Preview-Datei für Success-Modal
- ⚠️ **Action:** Optional löschen (wenn nicht mehr benötigt)

### 15. **success-modal-preview.html**
- ⚠️ **Grund:** Preview-Datei
- ⚠️ **Action:** Optional löschen

---

## ⚠️ IP-FINDER DATEIEN (OPTIONAL):

### 16. **ip-finder.html**
- ⚠️ **Grund:** Standalone IP-Finder Tool
- ⚠️ **Action:** Behalten falls benötigt, sonst löschen

### 17. **ip-finder-v2.html**
- ⚠️ **Grund:** Neuere Version des IP-Finders
- ⚠️ **Action:** Behalten falls benötigt, sonst löschen

---

## ✅ DATEIEN DIE BLEIBEN:

### **Core Files:**
- ✅ **admin-dashboard.html** (Hauptdatei für Admin Portal)
- ✅ **partner-dashboard.html** (Hauptdatei für Partner Portal)
- ✅ **Partner-Tool.html** (Vertragserstellung)
- ✅ **partner-akademie.html** (Akademie standalone)
- ✅ **admin-partner.html** (Partner-Verwaltung)
- ✅ **admin-vertraege-uebersicht.html** (kann bleiben oder löschen, da bereits in admin-dashboard.html integriert)

### **Landing Page & Auth:**
- ✅ **index.html** (Landing Page)
- ✅ **partner-login.html** (Login)
- ✅ **admin-login.html** (Admin Login)
- ✅ **passwort-vergessen.html** (Password Reset)
- ✅ **partner-onboarding.html** (Onboarding)

### **Legal Pages:**
- ✅ **impressum.html**
- ✅ **datenschutz.html**
- ✅ **agb.html**
- ✅ **kontakt.html**

### **Utility:**
- ✅ **NEUER-PARTNER-ERSTELLEN.html** (Admin-Tool)
- ✅ **partner-registration-success.html** (Success Page)

### **Assets:**
- ✅ **styles.css**
- ✅ **script.js**
- ✅ **images/** (alle Bilder behalten)
- ✅ **js/** (alle JavaScript-Dateien behalten)

---

## 🗑️ EMPFOHLENE LÖSCH-AKTION:

### **Sicher zu löschen (13 Dateien):**
```bash
# Backups
- admin-dashboard-FINAL-WORKING.html
- admin-dashboard-old-backup.html
- WORKING-BACKUP-ADMIN.html
- partner-dashboard-OLD-BACKUP.html

# Integrierte Standalone-Dateien
- admin-chat.html
- admin-tickets.html
- partner-hilfe.html
- partner-empfehlungen.html
- partner-qr-codes.html
- partner-provisionen.html
- partner-vertraege.html

# Optional
- success-modal-compact.html
- success-modal-preview.html
```

### **Optional zu löschen (3 Dateien):**
```bash
- admin-kalender.html (wenn in Dashboard integriert)
- partner-kalender.html (wenn in Dashboard integriert)
- admin-vertraege-uebersicht.html (bereits in admin-dashboard.html)
```

---

## ✅ FAZIT

**Total zu löschen:** 13-16 Dateien  
**Dateien behalten:** ~30 Dateien  
**Resultat:** Saubereres Projekt, keine Verwirrung!

---

## 📝 NACH DEM LÖSCHEN:

1. ✅ Teste alle Dashboard-Funktionen
2. ✅ Prüfe ob alle Tabs funktionieren
3. ✅ Teste Navigation zwischen Seiten
4. ✅ Prüfe ob Links funktionieren

**Alle Features sind jetzt im Dashboard integriert - standalone Dateien werden nicht mehr benötigt!** 🎉
