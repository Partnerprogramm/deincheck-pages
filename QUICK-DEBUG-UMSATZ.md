# 🔍 QUICK DEBUG - Umsatz-Tracking

## SOFORT TESTEN - BROWSER CONSOLE

Öffne die **Browser Console** (F12) und führe das aus:

```javascript
// 1. Verträge laden und prüfen
fetch('tables/vertragsabschluesse?limit=10')
  .then(r => r.json())
  .then(data => {
    console.log('📦 Anzahl Verträge:', data.data.length);
    console.log('📋 Erste 3 Verträge:', data.data.slice(0, 3));
    
    // Detaillierte Analyse
    data.data.slice(0, 3).forEach((v, i) => {
      console.log(`\n🔍 Vertrag ${i+1}:`, {
        vertragsnummer: v.vertragsnummer,
        partner_email: v.partner_email,
        erstellt_am: v.erstellt_am,
        erstellt_am_type: typeof v.erstellt_am,
        erstellt_am_parsed: v.erstellt_am ? new Date(v.erstellt_am) : null,
        gesamt_provision: v.gesamt_provision,
        provision_type: typeof v.gesamt_provision,
        vertrag_status: v.vertrag_status
      });
    });
    
    // Provision-Summe berechnen
    const totalProvision = data.data.reduce((sum, v) => {
      const prov = parseFloat(v.gesamt_provision) || 0;
      return sum + prov;
    }, 0);
    
    console.log('\n💰 TOTAL PROVISION:', totalProvision.toFixed(2) + '€');
    
    // Heute
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    console.log('\n📅 HEUTE:', today);
    
    const heuteVertraege = data.data.filter(v => {
      if (!v.erstellt_am) return false;
      const d = new Date(v.erstellt_am);
      console.log('  Vergleich:', d, '>=', today, '?', d >= today);
      return d >= today;
    });
    
    console.log('📊 Verträge HEUTE:', heuteVertraege.length);
    
    const heuteProvision = heuteVertraege.reduce((sum, v) => {
      return sum + (parseFloat(v.gesamt_provision) || 0);
    }, 0);
    
    console.log('💰 Provision HEUTE:', heuteProvision.toFixed(2) + '€');
  })
  .catch(err => console.error('❌ Fehler:', err));
```

---

## WAS DU SEHEN SOLLTEST:

✅ **Anzahl Verträge: 2** (oder mehr)  
✅ **Total Provision: 560.00€** (oder ähnlich)  
✅ **erstellt_am_type: "number"** (Timestamp)  
✅ **erstellt_am_parsed: Sun Dec 01 2024** (gültiges Datum)  

---

## WENN DU SIEHST:

❌ **Anzahl Verträge: 0** → Keine Daten in DB  
❌ **erstellt_am: null** → Feld fehlt  
❌ **erstellt_am_parsed: Invalid Date** → Falsches Format  
❌ **gesamt_provision: 0** → Keine Provision gesetzt  

---

## MACH DAS JETZT:

1. Öffne: https://partnerprogrammdeincheck.com/admin-dashboard
2. Drücke **F12** (Console öffnen)
3. **Kopiere den Code oben**
4. **Füge ihn ein und drücke ENTER**
5. **Mach Screenshot der Console-Ausgabe**
6. **Zeig mir das Ergebnis**

Dann weiß ich SOFORT wo das Problem ist! 🎯
