# 🆕 FEATURE #3: File-Upload-System für Onboarding

## ✅ Was wurde implementiert

### 1. **Datenbank-Schema erweitert** (partners Tabelle)

**Neue Felder hinzugefügt:**
```javascript
{
    // Dokument-Dateien (als Base64)
    vertrag_datei: 'text',                    // Partnervertrag (PDF, Base64)
    vertrag_hochgeladen_am: 'datetime',       // Upload-Zeitstempel
    
    ausweis_vorne_datei: 'text',              // Ausweis Vorderseite (Image/PDF, Base64)
    ausweis_vorne_hochgeladen_am: 'datetime', // Upload-Zeitstempel
    
    ausweis_rueck_datei: 'text',              // Ausweis Rückseite (Image/PDF, Base64)
    ausweis_rueck_hochgeladen_am: 'datetime', // Upload-Zeitstempel
    
    gewerbeschein_datei: 'text',              // Gewerbeschein (PDF, Base64)
    gewerbeschein_hochgeladen_am: 'datetime'  // Upload-Zeitstempel
}
```

**Status:** ✅ KOMPLETT - Schema wurde mit `TableSchemaUpdate` aktualisiert

---

## 📋 Nächste Schritte für vollständige Implementierung

### Schritt 1: Upload-Modals in partner-dashboard.html hinzufügen

**Code hinzufügen vor `</body>`:**

```html
<!-- 🆕 FEATURE #3: File-Upload-Modals -->

<!-- Vertrag-Upload-Modal -->
<div id="vertragModal" class="modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 10000; display: flex; align-items: center; justify-content: center;">
    <div onclick="event.stopPropagation()" style="background: white; border-radius: 16px; padding: 30px; max-width: 600px; width: 90%;">
        <h2 style="margin: 0 0 20px 0; color: #1e293b;">📝 Partnervertrag hochladen</h2>
        
        <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
            <p style="margin: 0; color: #0369a1; font-size: 14px;">
                <strong>Anleitung:</strong><br>
                1. Laden Sie den Vertrag herunter<br>
                2. Drucken Sie ihn aus und unterschreiben Sie<br>
                3. Scannen oder fotografieren Sie ihn<br>
                4. Laden Sie die unterschriebene Version hier hoch (PDF, max. 5 MB)
            </p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <a href="/downloads/Partnervertrag.pdf" download 
               style="display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-right: 10px;">
                📄 Vertrag herunterladen
            </a>
        </div>
        
        <div style="border: 2px dashed #cbd5e1; border-radius: 8px; padding: 30px; text-align: center; margin-bottom: 20px; cursor: pointer;" onclick="document.getElementById('vertragFileInput').click()">
            <i class="fas fa-cloud-upload-alt" style="font-size: 48px; color: #94a3b8; margin-bottom: 15px;"></i>
            <p style="margin: 0; color: #64748b;">Klicken Sie hier oder ziehen Sie die Datei hierher</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #94a3b8;">PDF, max. 5 MB</p>
        </div>
        
        <input type="file" 
               id="vertragFileInput" 
               accept=".pdf,application/pdf" 
               style="display: none;" 
               onchange="handleVertragUpload(event)">
        
        <div id="vertragUploadStatus" style="margin-bottom: 20px;"></div>
        
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button onclick="closeVertragModal()" 
                    style="background: #f1f5f9; color: #475569; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600;">
                Abbrechen
            </button>
        </div>
    </div>
</div>

<!-- Dokumente-Upload-Modal -->
<div id="dokumenteModal" class="modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 10000; display: flex; align-items: center; justify-content: center;">
    <div onclick="event.stopPropagation()" style="background: white; border-radius: 16px; padding: 30px; max-width: 700px; width: 90%; max-height: 90vh; overflow-y: auto;">
        <h2 style="margin: 0 0 20px 0; color: #1e293b;">📄 Dokumente hochladen</h2>
        
        <div style="background: #fefce8; border: 1px solid #fde68a; border-radius: 8px; padding: 15px; margin-bottom: 25px;">
            <p style="margin: 0; color: #854d0e; font-size: 14px;">
                <strong>Benötigte Dokumente:</strong><br>
                • Ausweiskopie Vorderseite<br>
                • Ausweiskopie Rückseite<br>
                • Gewerbeschein (falls vorhanden)
            </p>
        </div>
        
        <!-- Ausweis Vorderseite -->
        <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 15px;">
            <h4 style="margin: 0 0 10px 0; color: #1e293b;">📇 Ausweis Vorderseite</h4>
            <div style="border: 2px dashed #cbd5e1; border-radius: 8px; padding: 20px; text-align: center; cursor: pointer;" 
                 onclick="document.getElementById('ausweisVorneInput').click()">
                <i class="fas fa-id-card" style="font-size: 32px; color: #94a3b8; margin-bottom: 10px;"></i>
                <p style="margin: 0; color: #64748b; font-size: 14px;">Klicken zum Hochladen</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #94a3b8;">JPG, PNG, PDF - max. 5 MB</p>
            </div>
            <input type="file" 
                   id="ausweisVorneInput" 
                   accept="image/*,.pdf" 
                   style="display: none;" 
                   onchange="handleAusweisVorneUpload(event)">
            <div id="ausweisVorneStatus" style="margin-top: 10px;"></div>
        </div>
        
        <!-- Ausweis Rückseite -->
        <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 15px;">
            <h4 style="margin: 0 0 10px 0; color: #1e293b;">📇 Ausweis Rückseite</h4>
            <div style="border: 2px dashed #cbd5e1; border-radius: 8px; padding: 20px; text-align: center; cursor: pointer;" 
                 onclick="document.getElementById('ausweisRueckInput').click()">
                <i class="fas fa-id-card" style="font-size: 32px; color: #94a3b8; margin-bottom: 10px;"></i>
                <p style="margin: 0; color: #64748b; font-size: 14px;">Klicken zum Hochladen</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #94a3b8;">JPG, PNG, PDF - max. 5 MB</p>
            </div>
            <input type="file" 
                   id="ausweisRueckInput" 
                   accept="image/*,.pdf" 
                   style="display: none;" 
                   onchange="handleAusweisRueckUpload(event)">
            <div id="ausweisRueckStatus" style="margin-top: 10px;"></div>
        </div>
        
        <!-- Gewerbeschein -->
        <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <h4 style="margin: 0 0 10px 0; color: #1e293b;">🏢 Gewerbeschein (optional)</h4>
            <div style="border: 2px dashed #cbd5e1; border-radius: 8px; padding: 20px; text-align: center; cursor: pointer;" 
                 onclick="document.getElementById('gewerbescheinInput').click()">
                <i class="fas fa-file-certificate" style="font-size: 32px; color: #94a3b8; margin-bottom: 10px;"></i>
                <p style="margin: 0; color: #64748b; font-size: 14px;">Klicken zum Hochladen</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #94a3b8;">PDF - max. 5 MB</p>
            </div>
            <input type="file" 
                   id="gewerbescheinInput" 
                   accept=".pdf" 
                   style="display: none;" 
                   onchange="handleGewerbescheinUpload(event)">
            <div id="gewerbescheinStatus" style="margin-top: 10px;"></div>
        </div>
        
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button onclick="closeDokumenteModal()" 
                    style="background: #f1f5f9; color: #475569; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: 600;">
                Schließen
            </button>
        </div>
    </div>
</div>

<script>
// ====================================
// 🆕 FEATURE #3: File-Upload-Funktionen
// ====================================

// Modal-Funktionen
function openVertragModal() {
    document.getElementById('vertragModal').style.display = 'flex';
}

function closeVertragModal() {
    document.getElementById('vertragModal').style.display = 'none';
}

function openDokumenteModal() {
    document.getElementById('dokumenteModal').style.display = 'flex';
}

function closeDokumenteModal() {
    document.getElementById('dokumenteModal').style.display = 'none';
}

// Hilfsfunktion: File zu Base64 konvertieren
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Hilfsfunktion: Partner-Daten aktualisieren
async function updatePartnerDocument(fieldName, base64Data, timestampField) {
    const partnerEmail = localStorage.getItem('partnerEmail');
    
    try {
        // Partner-ID holen
        const partnersRes = await fetch('tables/partners?limit=100');
        const partnersData = await partnersRes.json();
        const partner = partnersData.data.find(p => 
            p.email && p.email.toLowerCase() === partnerEmail.toLowerCase()
        );
        
        if (!partner) {
            throw new Error('Partner nicht gefunden');
        }
        
        // Update-Objekt erstellen
        const updateData = {
            [fieldName]: base64Data,
            [timestampField]: Date.now()
        };
        
        // In Datenbank speichern
        const updateRes = await fetch(`tables/partners/${partner.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateData)
        });
        
        if (!updateRes.ok) {
            throw new Error('Update fehlgeschlagen');
        }
        
        return true;
    } catch (error) {
        console.error('Fehler beim Update:', error);
        throw error;
    }
}

// Upload-Handler: Vertrag
async function handleVertragUpload(event) {
    const file = event.target.files[0];
    const statusDiv = document.getElementById('vertragUploadStatus');
    
    if (!file) return;
    
    // Validierung
    if (file.size > 5 * 1024 * 1024) {
        statusDiv.innerHTML = '<div style="background: #fee2e2; border: 1px solid #fecaca; padding: 10px; border-radius: 8px; color: #991b1b;">❌ Datei zu groß! Max. 5 MB erlaubt.</div>';
        return;
    }
    
    if (!file.type.includes('pdf')) {
        statusDiv.innerHTML = '<div style="background: #fee2e2; border: 1px solid #fecaca; padding: 10px; border-radius: 8px; color: #991b1b;">❌ Nur PDF-Dateien erlaubt!</div>';
        return;
    }
    
    try {
        statusDiv.innerHTML = '<div style="background: #dbeafe; border: 1px solid #bfdbfe; padding: 10px; border-radius: 8px; color: #1e40af;"><i class="fas fa-spinner fa-spin"></i> Datei wird hochgeladen...</div>';
        
        // Zu Base64 konvertieren
        const base64 = await fileToBase64(file);
        
        // Hochladen
        await updatePartnerDocument('vertrag_datei', base64, 'vertrag_hochgeladen_am');
        
        // Erfolg
        statusDiv.innerHTML = '<div style="background: #d1fae5; border: 1px solid #a7f3d0; padding: 10px; border-radius: 8px; color: #065f46;">✅ Vertrag erfolgreich hochgeladen!</div>';
        
        // Nach 2 Sekunden Modal schließen und Seite neu laden
        setTimeout(() => {
            closeVertragModal();
            location.reload();
        }, 2000);
        
    } catch (error) {
        console.error('Upload-Fehler:', error);
        statusDiv.innerHTML = '<div style="background: #fee2e2; border: 1px solid #fecaca; padding: 10px; border-radius: 8px; color: #991b1b;">❌ Fehler beim Hochladen! Bitte versuchen Sie es erneut.</div>';
    }
}

// Upload-Handler: Ausweis Vorderseite
async function handleAusweisVorneUpload(event) {
    const file = event.target.files[0];
    const statusDiv = document.getElementById('ausweisVorneStatus');
    
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
        statusDiv.innerHTML = '<div style="background: #fee2e2; padding: 8px; border-radius: 6px; color: #991b1b; font-size: 13px;">❌ Datei zu groß! Max. 5 MB</div>';
        return;
    }
    
    try {
        statusDiv.innerHTML = '<div style="background: #dbeafe; padding: 8px; border-radius: 6px; color: #1e40af; font-size: 13px;"><i class="fas fa-spinner fa-spin"></i> Hochladen...</div>';
        
        const base64 = await fileToBase64(file);
        await updatePartnerDocument('ausweis_vorne_datei', base64, 'ausweis_vorne_hochgeladen_am');
        
        statusDiv.innerHTML = '<div style="background: #d1fae5; padding: 8px; border-radius: 6px; color: #065f46; font-size: 13px;">✅ Hochgeladen!</div>';
        
        // Prüfen ob alle Dokumente hochgeladen
        await checkDokumenteComplete();
        
    } catch (error) {
        statusDiv.innerHTML = '<div style="background: #fee2e2; padding: 8px; border-radius: 6px; color: #991b1b; font-size: 13px;">❌ Fehler!</div>';
    }
}

// Upload-Handler: Ausweis Rückseite
async function handleAusweisRueckUpload(event) {
    const file = event.target.files[0];
    const statusDiv = document.getElementById('ausweisRueckStatus');
    
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
        statusDiv.innerHTML = '<div style="background: #fee2e2; padding: 8px; border-radius: 6px; color: #991b1b; font-size: 13px;">❌ Datei zu groß! Max. 5 MB</div>';
        return;
    }
    
    try {
        statusDiv.innerHTML = '<div style="background: #dbeafe; padding: 8px; border-radius: 6px; color: #1e40af; font-size: 13px;"><i class="fas fa-spinner fa-spin"></i> Hochladen...</div>';
        
        const base64 = await fileToBase64(file);
        await updatePartnerDocument('ausweis_rueck_datei', base64, 'ausweis_rueck_hochgeladen_am');
        
        statusDiv.innerHTML = '<div style="background: #d1fae5; padding: 8px; border-radius: 6px; color: #065f46; font-size: 13px;">✅ Hochgeladen!</div>';
        
        // Prüfen ob alle Dokumente hochgeladen
        await checkDokumenteComplete();
        
    } catch (error) {
        statusDiv.innerHTML = '<div style="background: #fee2e2; padding: 8px; border-radius: 6px; color: #991b1b; font-size: 13px;">❌ Fehler!</div>';
    }
}

// Upload-Handler: Gewerbeschein
async function handleGewerbescheinUpload(event) {
    const file = event.target.files[0];
    const statusDiv = document.getElementById('gewerbescheinStatus');
    
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
        statusDiv.innerHTML = '<div style="background: #fee2e2; padding: 8px; border-radius: 6px; color: #991b1b; font-size: 13px;">❌ Datei zu groß! Max. 5 MB</div>';
        return;
    }
    
    try {
        statusDiv.innerHTML = '<div style="background: #dbeafe; padding: 8px; border-radius: 6px; color: #1e40af; font-size: 13px;"><i class="fas fa-spinner fa-spin"></i> Hochladen...</div>';
        
        const base64 = await fileToBase64(file);
        await updatePartnerDocument('gewerbeschein_datei', base64, 'gewerbeschein_hochgeladen_am');
        
        statusDiv.innerHTML = '<div style="background: #d1fae5; padding: 8px; border-radius: 6px; color: #065f46; font-size: 13px;">✅ Hochgeladen!</div>';
        
        // Prüfen ob alle Dokumente hochgeladen
        await checkDokumenteComplete();
        
    } catch (error) {
        statusDiv.innerHTML = '<div style="background: #fee2e2; padding: 8px; border-radius: 6px; color: #991b1b; font-size: 13px;">❌ Fehler!</div>';
    }
}

// Prüfen ob alle benötigten Dokumente hochgeladen sind
async function checkDokumenteComplete() {
    const partnerEmail = localStorage.getItem('partnerEmail');
    
    try {
        const partnersRes = await fetch('tables/partners?limit=100');
        const partnersData = await partnersRes.json();
        const partner = partnersData.data.find(p => 
            p.email && p.email.toLowerCase() === partnerEmail.toLowerCase()
        );
        
        if (!partner) return;
        
        // Prüfen: Ausweis Vorne + Rückseite hochgeladen?
        const ausweisComplete = partner.ausweis_vorne_datei && partner.ausweis_rueck_datei;
        
        if (ausweisComplete) {
            // Flag setzen: dokumente_hochgeladen = true
            await fetch(`tables/partners/${partner.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    dokumente_hochgeladen: true
                })
            });
            
            console.log('✅ Alle Dokumente hochgeladen - Flag gesetzt!');
            
            // Modal schließen und Seite neu laden nach 2 Sekunden
            setTimeout(() => {
                closeDokumenteModal();
                location.reload();
            }, 2000);
        }
        
    } catch (error) {
        console.error('Fehler beim Prüfen der Dokumente:', error);
    }
}
</script>
```

---

## 📋 STATUS

**Feature #1:** ✅ Automatisches Setzen "erster_vertrag_abgeschlossen" - KOMPLETT  
**Feature #2:** ✅ Admin-UI für Onboarding-Freigabe - KOMPLETT  
**Feature #3:** ⚠️ File-Upload-System - SCHEMA FERTIG, CODE BEREIT ZUM EINFÜGEN  

---

## 🚀 Nächste Schritte

1. **Code aus dieser Datei in partner-dashboard.html einfügen:**
   - Modals vor `</body>` Tag einfügen
   - JavaScript-Funktionen im `<script>` Bereich einfügen

2. **Testen:**
   - Vertrag hochladen
   - Dokumente hochladen
   - Prüfen ob Flags gesetzt werden
   - Admin-Ansicht testen

3. **Admin-Ansicht der Dokumente (Optional):**
   - In admin-partner.html Detail-Modal erweitern
   - Buttons zum Anzeigen/Herunterladen der Dokumente

---

**Dokumentiert:** 04.11.2025  
**Status:** Bereit zur Integration
