// Partner Tool JavaScript - All tariff data, prices and provisions preserved exactly

// Tariff Data - Exact copy from original with all prices and provisions preserved
const tariffData = {
    'sim-only': {
        'o2': [
            { name: 'O2 Unlimited Smart (2024)', desc: 'Unlimitiert (bis 15 Mbit/s)', price: '24,99', provision: '35,00' },
            { name: 'O2 Mobile S (2024)', desc: '10 GB', price: '19,99', provision: '15,00' },
            { name: 'O2 Mobile M (2024)', desc: '30 GB', price: '24,99', provision: '25,00' },
            { name: 'O2 Mobile L (2024)', desc: '100 GB', price: '29,99', provision: '35,00' },
            { name: 'O2 Mobile XL (2024)', desc: '300 GB', price: '34,99', provision: '40,00' },
            { name: 'O2 Mobile Unlimited On Demand (2025)', desc: 'Unlimitiert On Demand', price: '34,99', provision: '40,00' },
            { name: 'O2 Mobile Unlimited Max (2025)', desc: 'Unlimitiert Max', price: '39,99', provision: '40,00' },
            { name: 'O2 Unlimited Max 500 MBit/s', desc: 'Unlimitiert 500 MBit/s - nur bis 01.11', price: '26,99', provision: '60,00' }
        ],
        'freenet-o2': [
            // NEU: Freenet O2 Unlimited Max 300 MBit/s
            { name: 'O2 Unlimited Max 300 MBit/s', desc: 'Unlimited 300 MBit/s', price: '34,99', provision: '105,00' },
            { name: 'O2 Mobile Starter Flex mit Handy 10', desc: '2 GB', price: '19,99', provision: '95,00' },
            { name: 'O2 Mobile S mit Handy 5', desc: '10 GB', price: '24,99', provision: '120,00' },
            { name: 'O2 Mobile S', desc: '10 GB', price: '29,99', provision: '160,00' },
            { name: 'O2 Mobile M', desc: '30 GB', price: '34,99', provision: '170,00' },
            { name: 'O2 Mobile L Basic', desc: '100 GB', price: '44,99', provision: '230,00' },
            { name: 'O2 Mobile L Plus', desc: '100 GB', price: '49,99', provision: '270,00' },
            { name: 'O2 Mobile XL', desc: '300 GB', price: '49,99', provision: '255,00' },
            { name: 'O2 Mobile XL mit Handy 5', desc: '300 GB', price: '54,99', provision: '295,00' },
            { name: 'O2 Mobile XL mit Handy 10', desc: '300 GB', price: '59,99', provision: '335,00' },
            { name: 'O2 Mobile Unlimited Smart 2024', desc: 'Flat', price: '42,99', provision: '210,00' },
            { name: 'O2 Mobile Unlimited Smart 2024 mit Handy 5', desc: 'Flat', price: '47,99', provision: '250,00' },
            { name: 'O2 Mobile Unlimited Smart 2024 mit Handy 10', desc: 'Flat', price: '52,99', provision: '290,00' },
            { name: 'O2 Mobile Unlimited on Demand', desc: 'Flat', price: '59,99', provision: '185,00' },
            { name: 'O2 Mobile Unlimited Max 2024', desc: 'Flat', price: '99,99', provision: '510,00' },
            { name: 'Allnet Flat 7 GB Basic', desc: '7 GB', price: '19,99', provision: '125,00' },
            { name: 'Allnet Flat 7 GB Plus', desc: '7 GB', price: '24,99', provision: '165,00' },
            { name: 'Allnet Flat 17 GB', desc: '17 GB', price: '29,99', provision: '175,00' },
            { name: 'Allnet Flat 25 GB Basic', desc: '25 GB', price: '29,99', provision: '160,00' },
            { name: 'Allnet Flat 25 GB Plus', desc: '25 GB', price: '34,99', provision: '200,00' },
            { name: 'Allnet Flat 35 GB Basic', desc: '35 GB', price: '34,99', provision: '180,00' },
            { name: 'Allnet Flat 35 GB Plus', desc: '35 GB', price: '39,99', provision: '220,00' },
            { name: 'Allnet Flat 50 GB Basic', desc: '50 GB', price: '39,99', provision: '185,00' },
            { name: 'Allnet Flat 50 GB Plus', desc: '50 GB', price: '44,99', provision: '225,00' },
            { name: 'Allnet Flat 70 GB', desc: '70 GB', price: '36,99', provision: '165,00' },
            { name: 'Allnet Flat 100 GB', desc: '100 GB', price: '39,99', provision: '190,00' },
            { name: 'Allnet Flat 200 GB', desc: '200 GB', price: '44,99', provision: '225,00' },
            { name: 'Allnet Flat 300 GB', desc: '300 GB', price: '49,99', provision: '265,00' },
            { name: 'Allnet Flat Unlimited Basis', desc: 'Flat', price: '39,99', provision: '190,00' },
            { name: 'Datentarif 200 GB', desc: '200 GB', price: '34,99', provision: '175,00' },
            { name: 'Datentarif 400 GB', desc: '400 GB', price: '39,99', provision: '187,50' }
        ],
        'freenet-telekom': [
            // Top Provision Tarife (425€ - 320€)
            { name: 'Magenta Mobil XL', desc: 'Flat', price: '94,95', provision: '425,00' },
            { name: 'Magenta Mobil XL Young 5G', desc: 'Flat', price: '84,95', provision: '405,00' },
            { name: 'Allnet Flat 80 GB Premium', desc: '80 GB', price: '59,99', provision: '335,00' },
            { name: 'Magenta Mobil L', desc: '100 GB', price: '69,95', provision: '332,50' },
            { name: 'Allnet Flat 60 GB Premium', desc: '60 GB', price: '59,99', provision: '320,00' },
            
            // Mittlere Provision Tarife (302,50€ - 240€)
            { name: 'Allnet Flat 60 GB Plus', desc: '60 GB', price: '54,99', provision: '302,50' },
            { name: 'Allnet Flat 80 GB Plus', desc: '80 GB', price: '54,99', provision: '295,00' },
            { name: 'Magenta Mobil M', desc: '50 GB', price: '59,95', provision: '290,00' },
            { name: 'Allnet Flat 35 GB Premium', desc: '35 GB', price: '49,99', provision: '282,50' },
            { name: 'Magenta Mobil M Young 5G', desc: '100 GB', price: '49,95', provision: '275,00' },
            { name: 'Allnet Flat 25 GB Plus', desc: '25 GB', price: '44,99', provision: '250,00' },
            { name: 'Allnet Flat 35 GB Plus', desc: '35 GB', price: '44,99', provision: '242,50' },
            { name: 'Magenta Mobil S Young 5G', desc: '40 GB', price: '39,95', provision: '240,00' },
            
            // Standard Provision Tarife (237,50€ - 202,50€)
            { name: 'Magenta Mobil S', desc: '30 GB', price: '49,95', provision: '237,50' },
            { name: 'Allnet Flat 60 GB Basic', desc: '60 GB', price: '49,99', provision: '222,50' },
            { name: 'Allnet Flat 20 GB', desc: '20 GB', price: '39,99', provision: '220,00' },
            { name: 'Allnet Flat 25 GB Basic', desc: '25 GB', price: '39,99', provision: '210,00' },
            { name: 'Magenta Mobil XS', desc: '20 GB', price: '39,95', provision: '210,00' },
            { name: 'Allnet Flat 35 GB Basic', desc: '35 GB', price: '39,99', provision: '202,50' },
            
            // Günstige Tarife (170€ - 32,50€)
            { name: 'Allnet Flat 12 GB', desc: '12 GB', price: '34,99', provision: '170,00' },
            { name: 'Smart Connect S Basic', desc: '500 MB', price: '9,95', provision: '72,50' },
            { name: 'Smart Connect S Promo', desc: '500 MB', price: '4,95', provision: '32,50' }
        ],
        'freenet-vodafone': [
            // Top-Tarife mit höchster Provision (420€-340€)
            { name: 'Allnet Flat 100 GB m.H.10', desc: '100 GB', price: '64,99', provision: '420,00' },
            { name: 'Allnet Flat 100 GB m.H.10', desc: '100 GB', price: '59,99', provision: '400,00' },
            { name: 'Allnet Flat 80 GB m.H.10', desc: '80 GB', price: '69,99', provision: '400,00' },
            { name: 'Allnet Flat 100 GB m.H.10', desc: '100 GB', price: '54,99', provision: '380,00' },
            { name: 'Allnet Flat 60 GB (150Mbit) m.H.10', desc: '60 GB', price: '64,99', provision: '360,00' },
            { name: 'Allnet Flat 80 GB m.H.5', desc: '80 GB', price: '64,99', provision: '360,00' },
            { name: 'Allnet Flat 100 GB', desc: '100 GB', price: '49,99', provision: '340,00' },
            { name: 'GigaMobil XL m.H.10 Nov 24', desc: 'Flat', price: '89,99', provision: '330,00' },
            
            // Premium-Tarife (320€-280€)
            { name: 'Allnet Flat 60 GB m.H.10', desc: '60 GB', price: '59,99', provision: '320,00' },
            { name: 'Allnet Flat 60 GB (150Mbit) m.H.5', desc: '60 GB', price: '59,99', provision: '320,00' },
            { name: 'Allnet Flat 80 GB', desc: '80 GB', price: '59,99', provision: '320,00' },
            { name: 'GigaMobil L m.H.10 Nov 24', desc: '280 GB', price: '69,99', provision: '320,00' },
            { name: 'Allnet Flat 40 GB m.H.10', desc: '40 GB', price: '59,99', provision: '305,00' },
            { name: 'Allnet Flat 40 GB m.H.10', desc: '40 GB', price: '54,99', provision: '305,00' },
            { name: 'Allnet Flat 35 GB m.H.10', desc: '35 GB', price: '49,99', provision: '282,50' },
            { name: 'Allnet Flat 60 GB (150Mbit)', desc: '60 GB', price: '54,99', provision: '280,00' },
            { name: 'Allnet Flat 60 GB m.H.5', desc: '60 GB', price: '54,99', provision: '280,00' },
            
            // Standard-Tarife (265€-210€)
            { name: 'Allnet Flat 40 GB (150Mbit) m.H.5', desc: '40 GB', price: '54,99', provision: '265,00' },
            { name: 'Allnet Flat 40 GB m.H.5', desc: '40 GB', price: '49,99', provision: '265,00' },
            { name: 'Allnet Flat 35 GB m.H.5', desc: '35 GB', price: '44,99', provision: '242,50' },
            { name: 'Allnet Flat 60 GB', desc: '60 GB', price: '49,99', provision: '240,00' },
            { name: 'Allnet Flat 30 GB m.H.10', desc: '30 GB', price: '44,99', provision: '230,00' },
            { name: 'Allnet Flat 40 GB', desc: '40 GB', price: '49,99', provision: '225,00' },
            { name: 'Allnet Flat 25 GB m.H.10', desc: '25 GB', price: '39,99', provision: '210,00' },
            
            // Basis-Tarife (ursprünglich vorhanden)
            { name: 'Allnet Flat 70 GB', desc: '70 GB', price: '36,99', provision: '125,00' },
            { name: 'Allnet Flat 150 GB', desc: '150 GB', price: '42,99', provision: '145,00' },
            { name: 'Allnet Flat 200 GB', desc: '200 GB', price: '44,99', provision: '150,00' },
            { name: 'Allnet Flat 250 GB', desc: '250 GB', price: '46,99', provision: '160,00' }
        ],
        'ayildiz': [
            { name: 'AY Allnet', desc: '12 GB + Türkei-Flat', price: '14,99', provision: '100,00' },
            { name: 'AY Allnet Plus', desc: '60 GB + Türkei-Flat', price: '27,99', provision: '200,00' },
            { name: 'AY Allnet Max', desc: '120 GB + Türkei-Flat', price: '37,99', provision: '260,00' }
        ],
        '1und1': [
            { name: 'All-Net-Flat XS', desc: '5 GB (erste 3 Monate günstiger)', price: '4,99 € (3 Mon.) dann 14,99', provision: '50,00' },
            { name: 'All-Net-Flat S', desc: '20 GB (erste 3 Monate günstiger)', price: '9,99 € (3 Mon.) dann 19,99', provision: '75,00' },
            { name: 'All-Net-Flat M', desc: '60 GB (erste 3 Monate günstiger)', price: '9,99 € (3 Mon.) dann 24,99', provision: '112,50' },
            { name: 'All-Net-Flat L', desc: '120 GB (erste 3 Monate günstiger)', price: '9,99 € (3 Mon.) dann 29,99', provision: '100,00' },
            { name: 'Unlimited on demand S', desc: '50 Mbit/s (erste 3 Monate günstiger)', price: '9,99 € (3 Mon.) dann 19,99', provision: '25,00' },
            { name: 'Unlimited on demand M', desc: '100 Mbit/s (erste 3 Monate günstiger)', price: '9,99 € (3 Mon.) dann 29,99', provision: '37,50' },
            { name: 'Unlimited on demand L', desc: 'Zuerst 100 GB/Monat dann 300 Mbit/s (erste 3 Monate günstiger)', price: '9,99 € (3 Mon.) dann 39,99', provision: '75,00' },
            { name: 'Unlimited XL', desc: 'Unbegrenzt 300 Mbit/s (erste 3 Monate günstiger)', price: '9,99 € (3 Mon.) dann 49,99', provision: '75,00' }
        ],
        'yourfone': [
            { name: 'Yourfone 10GB', desc: '10GB + 300 MBit/s', price: '19,98', provision: '125,00' },
            { name: 'Yourfone 20GB', desc: '20GB + 300 MBit/s', price: '24,98', provision: '170,00' },
            { name: 'Yourfone 50GB', desc: '50GB + 300 MBit/s', price: '34,98', provision: '200,00' }
        ],
        'klarmobil-vodafone': [
            // NEU: Klarmobil Geburtstagsaktion (bis 30.09)
            { name: 'Geburtstagsaktion 75 GB', desc: '75 GB (statt 34,99€)', price: '14,99', provision: '80,00' },
            // Top 5 Klarmobil Vodafone-Netz (Provisionen halbiert)
            { name: 'GigaMobil M m.H.10 Nov 24', desc: '50 GB', price: '59,99', provision: '280,00' },
            { name: 'GigaMobil Young XL m.H.10', desc: 'Flat', price: '79,99', provision: '275,00' },
            { name: 'GigaMobil S m.H.10 Nov 24', desc: '25 GB', price: '49,99', provision: '225,00' },
            { name: 'GigaMobil XL m.H.10 Nov 24', desc: 'Flat', price: '89,99', provision: '165,00' },
            { name: 'GigaMobil L m.H.10 Nov 24', desc: '280 GB', price: '69,99', provision: '160,00' }
        ],
        'klarmobil-o2': [
            // Top 5 Klarmobil O2-Netz (Provisionen halbiert)
            { name: 'O2 Mobile Unlimited Max 2024', desc: 'Flat', price: '99,99', provision: '255,00' },
            { name: 'O2 Mobile XL m.H.10', desc: '300 GB', price: '59,99', provision: '167,50' },
            { name: 'O2 Mobile XL m.H.5', desc: '300 GB', price: '54,99', provision: '147,50' },
            { name: 'O2 Mobile Unlimited Smart 2024 m.H.10', desc: 'Flat', price: '52,99', provision: '145,00' },
            { name: 'O2 Mobile Unlimited Smart 2024', desc: 'Flat', price: '42,99', provision: '105,00' }
        ],
        'klarmobil-telekom': [
            // Top 5 Klarmobil Telekom-Netz
            { name: 'Allnet Flat 30 GB LTE m.H.15', desc: '30 GB', price: '39,99', provision: '195,00' },
            { name: 'Allnet Flat 40 GB LTE m.H.15', desc: '40 GB', price: '59,99', provision: '172,50' },
            { name: 'Allnet Flat 20 GB LTE m.H.15', desc: '20 GB', price: '34,99', provision: '170,00' },
            { name: 'Allnet Flat 40 GB LTE m.H.10', desc: '40 GB', price: '54,99', provision: '152,50' },
            { name: 'Allnet Flat 20 GB LTE m.H.10', desc: '20 GB', price: '29,99', provision: '130,00' }
        ]
    },
    'strom': {
        'privatkunde': [
            { name: 'Niedrigverbrauch', desc: '< 2.500 kWh/Jahr', price: 'Individuelles Angebot', provision: '25,00' },
            { name: 'Standardverbrauch', desc: '2.500 - 5.000 kWh/Jahr', price: 'Individuelles Angebot', provision: '75,00' }
        ],
        'gewerbekunde': [
            { name: 'Niedrigverbrauch', desc: '< 2.500 kWh/Jahr', price: 'Individuelles Angebot', provision: '25,00' },
            { name: 'Standardverbrauch', desc: '2.500 - 5.000 kWh/Jahr', price: 'Individuelles Angebot', provision: '75,00' }
        ]
    },
    'internet': {
        '1und1': [
            { name: 'DSL 50', desc: '50 Mbit/s DSL + Router', price: '16,98', normalPrice: '46,98', provision: '50,00', type: 'DSL', setupFee: '29,99' },
            { name: 'DSL 100', desc: '100 Mbit/s DSL + Router', price: '16,98', normalPrice: '46,98', provision: '70,00', type: 'DSL', setupFee: '29,99' },
            { name: 'DSL 250', desc: '250 Mbit/s DSL + Router', price: '16,98', normalPrice: '51,98', provision: '70,00', type: 'DSL', setupFee: '29,99' },
            { name: 'Glasfaser 150', desc: '150 Mbit/s Glasfaser + Router', price: '16,98', normalPrice: '46,98', provision: '60,00', type: 'Glasfaser', setupFee: '29,99' },
            { name: 'Glasfaser 300', desc: '300 Mbit/s Glasfaser + Router', price: '16,98', normalPrice: '51,98', provision: '60,00', type: 'Glasfaser', setupFee: '29,99' },
            { name: 'Glasfaser 600', desc: '600 Mbit/s Glasfaser + Router', price: '26,98', normalPrice: '66,98', provision: '90,00', type: 'Glasfaser', setupFee: '29,99' },
            { name: 'Glasfaser 1.000', desc: '1.000 Mbit/s Glasfaser + Router', price: '36,98', normalPrice: '76,98', provision: '100,00', type: 'Glasfaser', setupFee: '29,99' }
        ]
    }
};

// Handy Data - Complete preservation of all device data and pricing
const handyData = {
    '1und1': {
        'Apple': [
            { name: 'iPhone 16 Pro Max', storage: ['256GB', '512GB', '1TB'], storagePrice: [58, 67, 75], colors: ['Titan Natur', 'Titan Weiß', 'Titan Schwarz', 'Titan Wüsten'] },
            { name: 'iPhone 16 Pro', storage: ['128GB', '256GB', '512GB', '1TB'], storagePrice: [50, 59, 63, 71], colors: ['Titan Natur', 'Titan Weiß', 'Titan Schwarz', 'Titan Wüsten'] },
            { name: 'iPhone 16', storage: ['128GB', '256GB', '512GB'], storagePrice: [38, 47, 51], colors: ['Schwarz', 'Weiß', 'Pink', 'Teal', 'Ultramarin'] },
            { name: 'iPhone 16 Plus', storage: ['128GB', '256GB'], storagePrice: [40, 49], colors: ['Schwarz', 'Weiß', 'Pink', 'Teal', 'Ultramarin'] },
            { name: 'iPhone 16e', storage: ['128GB'], storagePrice: [26], colors: ['Schwarz', 'Weiß', 'Blau', 'Grün'] }
        ],
        'Samsung': [
            { name: 'Galaxy S25 Ultra', storage: ['256GB', '512GB', '1TB'], colors: ['Titan Schwarz', 'Titan Grau', 'Titan Violett', 'Titan Blau'] },
            { name: 'Galaxy S25 Plus', storage: ['256GB', '512GB'], colors: ['Schwarz', 'Weiß', 'Grau', 'Blau'] },
            { name: 'Galaxy S25', storage: ['128GB', '256GB'], colors: ['Schwarz', 'Weiß', 'Grau', 'Blau'] },
            { name: 'Galaxy Z Fold 7', storage: ['256GB', '512GB'], colors: ['Phantom Schwarz', 'Phantom Silber', 'Phantom Grün'] }
        ],
        'Sonstiges': [
            { name: 'AirPods Max', storage: ['Standard'], colors: ['Space Grau', 'Silber', 'Sky Blau', 'Grün', 'Pink'] },
            { name: 'Apple Watch Ultra 2', storage: ['49mm'], colors: ['Titan Natur', 'Titan Schwarz'] },
            { name: 'MacBook Air 13', storage: ['256GB', '512GB'], colors: ['Space Grau', 'Silber', 'Starlight', 'Mitternacht'] },
            { name: 'PS5 Slim Digital Edition', storage: ['Standard'], colors: ['Weiß'] }
        ]
    },
    'yourfone': {
        'Apple': [
            { name: 'iPhone 15', storage: ['128GB', '256GB'], storagePrice: [30, 40], colors: ['Schwarz', 'Blau', 'Grün', 'Gelb', 'Pink'] },
            { name: 'iPhone 16', storage: ['128GB', '256GB'], storagePrice: [34, 44], colors: ['Schwarz', 'Weiß', 'Pink', 'Teal', 'Ultramarin'] },
            { name: 'iPhone 16 Pro', storage: ['128GB', '256GB', '512GB', '1TB'], storagePrice: [49.99, 65.99, 76.99, 87.99], colors: ['Titan Natur', 'Titan Schwarz', 'Titan Weiß', 'Titan Desert'] },
            { name: 'iPhone 16 Pro Max', storage: ['256GB', '512GB', '1TB'], storagePrice: [60.99, 76.99, 87.99], colors: ['Titan Natur', 'Titan Schwarz', 'Titan Weiß', 'Titan Desert'] },
            { name: 'iPhone 16 Plus', storage: ['128GB', '256GB'], storagePrice: [40, 49], colors: ['Schwarz', 'Weiß', 'Pink', 'Teal', 'Ultramarin'] },
            { name: 'iPhone 16e', storage: ['128GB'], storagePrice: [26], colors: ['Schwarz', 'Weiß', 'Blau', 'Grün'] }
        ],
        'Samsung': [
            { name: 'S25', storage: ['128GB', '256GB'], storagePrice: [32, 39], colors: ['Schwarz', 'Weiß', 'Grau', 'Blau'] },
            { name: 'S25+', storage: ['256GB'], storagePrice: [42], colors: ['Schwarz', 'Weiß', 'Grau', 'Blau'] },
            { name: 'S25 Ultra', storage: ['256GB', '512GB'], storagePrice: [46, 55], colors: ['Titan Schwarz', 'Titan Grau', 'Titan Violett', 'Titan Blau'] },
            { name: 'S25 Edge', storage: ['256GB'], storagePrice: [43], colors: ['Schwarz', 'Weiß', 'Grau'] },
            { name: 'Z Fold 7', storage: ['256GB'], storagePrice: [76], colors: ['Phantom Schwarz', 'Phantom Silber', 'Phantom Grün'], badge: 'Sehr beliebt' },
            { name: 'A56', storage: ['128GB'], storagePrice: [15], colors: ['Schwarz', 'Weiß', 'Blau'] },
            { name: 'Z Flip 7', storage: ['256GB'], storagePrice: [42], colors: ['Phantom Schwarz', 'Phantom Silber', 'Phantom Violett'] },
            { name: 'A16', storage: ['128GB'], storagePrice: [6.50], colors: ['Schwarz', 'Weiß'] }
        ]
    },
    'o2': {
        'Apple': [
            // Aktuelle O2-Preise 2025 (monatliche Raten zusätzlich zum SIM-only Tarif)
            { name: 'iPhone 16', storage: ['128GB', '256GB', '512GB'], storagePrice: [35.99, 45.99, 50.99], colors: ['Schwarz', 'Weiß', 'Pink', 'Teal', 'Ultramarin'] },
            { name: 'iPhone 16 Plus', storage: ['128GB', '256GB', '512GB'], storagePrice: [40.99, 50.99, 55.99], colors: ['Schwarz', 'Weiß', 'Pink', 'Teal', 'Ultramarin'] },
            { name: 'iPhone 16 Pro', storage: ['128GB', '256GB', '512GB', '1TB'], storagePrice: [49.99, 65.99, 76.99, 87.99], colors: ['Titan Natur', 'Titan Schwarz', 'Titan Weiß', 'Titan Desert'] },
            { name: 'iPhone 16 Pro Max', storage: ['256GB', '512GB', '1TB'], storagePrice: [60.99, 76.99, 87.99], colors: ['Titan Natur', 'Titan Schwarz', 'Titan Weiß', 'Titan Desert'] },
            { name: 'iPhone 16e (SE 4)', storage: ['128GB', '256GB'], storagePrice: [29.99, 39.99], colors: ['Schwarz', 'Weiß', 'Blau', 'Grün'] },
            { name: 'iPhone 15', storage: ['128GB', '256GB', '512GB'], storagePrice: [32.99, 42.99, 47.99], colors: ['Schwarz', 'Weiß', 'Pink', 'Blau', 'Gelb'] },
            { name: 'iPhone 15 Plus', storage: ['128GB', '256GB', '512GB'], storagePrice: [37.99, 47.99, 52.99], colors: ['Schwarz', 'Weiß', 'Pink', 'Blau', 'Gelb'] },
            { name: 'iPhone 15 Pro', storage: ['128GB', '256GB', '512GB', '1TB'], storagePrice: [44.99, 54.99, 59.99, 64.99], colors: ['Titan Natur', 'Titan Blau', 'Titan Weiß', 'Titan Schwarz'] },
            { name: 'iPhone 15 Pro Max', storage: ['256GB', '512GB', '1TB'], storagePrice: [52.99, 62.99, 67.99], colors: ['Titan Natur', 'Titan Blau', 'Titan Weiß', 'Titan Schwarz'] },
            { name: 'iPhone 14', storage: ['128GB', '256GB', '512GB'], storagePrice: [27.99, 37.99, 42.99], colors: ['Schwarz', 'Weiß', 'Blau', 'Violett', 'Rot'] },
            { name: 'iPhone 14 Plus', storage: ['128GB', '256GB', '512GB'], storagePrice: [32.99, 42.99, 47.99], colors: ['Schwarz', 'Weiß', 'Blau', 'Violett', 'Rot'] },
            { name: 'iPhone 13', storage: ['128GB', '256GB', '512GB'], storagePrice: [24.99, 34.99, 39.99], colors: ['Schwarz', 'Weiß', 'Blau', 'Pink', 'Rot'] }
        ],
        'Samsung': [
            // Aktuelle Samsung Galaxy S25 Serie O2-Preise 2025
            { name: 'Galaxy S25 Ultra', storage: ['256GB', '512GB', '1TB'], storagePrice: [64.99, 74.99, 79.99], colors: ['Titan Schwarz', 'Titan Grau', 'Titan Violett', 'Titan Blau'] },
            { name: 'Galaxy S25+', storage: ['256GB', '512GB'], storagePrice: [54.99, 64.99], colors: ['Schwarz', 'Weiß', 'Grau', 'Blau'] },
            { name: 'Galaxy S25', storage: ['128GB', '256GB'], storagePrice: [44.99, 54.99], colors: ['Schwarz', 'Weiß', 'Grau', 'Blau'] },
            { name: 'Galaxy S25 Edge', storage: ['256GB', '512GB'], storagePrice: [59.99, 69.99], colors: ['Schwarz', 'Weiß', 'Grau'] },
            { name: 'Galaxy S24 Ultra', storage: ['256GB', '512GB', '1TB'], storagePrice: [57.99, 67.99, 72.99], colors: ['Titan Schwarz', 'Titan Grau', 'Titan Violett', 'Titan Gelb'] },
            { name: 'Galaxy S24+', storage: ['256GB', '512GB'], storagePrice: [47.99, 57.99], colors: ['Schwarz', 'Weiß', 'Grau', 'Violett'] },
            { name: 'Galaxy S24', storage: ['128GB', '256GB'], storagePrice: [37.99, 47.99], colors: ['Schwarz', 'Weiß', 'Grau', 'Violett'] },
            { name: 'Galaxy A55', storage: ['128GB', '256GB'], storagePrice: [19.99, 29.99], colors: ['Schwarz', 'Weiß', 'Blau', 'Violett'] },
            { name: 'Galaxy A35', storage: ['128GB'], storagePrice: [15.99], colors: ['Schwarz', 'Weiß', 'Blau'] },
            { name: 'Galaxy Z Fold 6', storage: ['256GB', '512GB'], storagePrice: [79.99, 89.99], colors: ['Phantom Schwarz', 'Phantom Silber', 'Phantom Pink'] },
            { name: 'Galaxy Z Flip 6', storage: ['256GB', '512GB'], storagePrice: [49.99, 59.99], colors: ['Phantom Schwarz', 'Phantom Silber', 'Phantom Gelb', 'Phantom Blau'] }
        ],
        'Sonstiges': [
            // Andere Geräte und Smart Devices
            { name: 'Apple Watch Ultra 2', storage: ['49mm'], storagePrice: [24.99], colors: ['Titan Natur', 'Titan Schwarz'] },
            { name: 'Apple Watch Series 10', storage: ['42mm', '46mm'], storagePrice: [19.99, 27.99], colors: ['Aluminium Mitternacht', 'Aluminium Starlight', 'Aluminium Silber'] },
            { name: 'AirPods Pro 2', storage: ['Standard'], storagePrice: [12.99], colors: ['Weiß'] },
            { name: 'AirPods 4', storage: ['Standard'], storagePrice: [8.99], colors: ['Weiß'] },
            { name: 'iPad 10', storage: ['64GB', '256GB'], storagePrice: [19.99, 29.99], colors: ['Silber', 'Blau', 'Pink', 'Gelb'] },
            { name: 'iPad Air 13', storage: ['128GB', '256GB', '512GB'], storagePrice: [29.99, 39.99, 44.99], colors: ['Space Grau', 'Starlight', 'Pink', 'Blau'] },
            { name: 'MacBook Air 13 M3', storage: ['256GB', '512GB'], storagePrice: [54.99, 64.99], colors: ['Space Grau', 'Silber', 'Starlight', 'Mitternacht'] },
            { name: 'PlayStation 5 Slim', storage: ['1TB'], storagePrice: [24.99], colors: ['Weiß'] },
            { name: 'Nintendo Switch OLED', storage: ['64GB'], storagePrice: [17.99], colors: ['Rot/Blau', 'Weiß'] }
        ]
    }
};

// Cross-sell options data
const crossSellData = {
    'insurance-basic': { name: 'Handyversicherung Basic', price: 5.50, provision: 25.00 },
    'insurance-premium': { name: 'Handyversicherung Premium', price: 8.95, provision: 40.00 },
    'partner-o2': { name: 'O2 Unlimited Smart', price: 19.99, provision: 47.50 },
    'partner-1und1': { name: '1&1 All-Net-Flat XS', price: 14.99, provision: 50.00 },
    'partner-o2-mobile-s': { name: 'O2 MOBILE S (2024)', price: 9.99, provision: 15.00 },
    'partner-1und1-xs': { name: '1&1 ALL-NET-FLAT XS', price: 14.99, provision: 50.00 },
    'partner-yourfone-10gb': { name: 'YOURFONE 10GB', price: 19.98, provision: 125.00 }
};

// State variables
let currentCategory = 'sim-only';
let currentProvider = 'o2';
let currentFreenetProvider = 'o2';
let currentKlarmobilProvider = 'vodafone';
let currentCustomerType = 'privatkunde';
let selectedTariffData = {};
let baseProvision = 0;
let selectedHandyData = {};
let selectedCrossSellOptions = {};
let currentHandyProvider = 'o2';

// Smartphone booking variables
let selectedPhoneData = {};
let currentPhoneProvider = 'o2'; // Always use O2 phone data
let phoneSelectionStep = 'category';

// Filter state
let activeFilters = {
    price: 'all',
    data: 'all',
    provision: 'all',
    consumption: 'all'
};
let allTariffs = [];
let filteredTariffs = [];

// Global filter state
let globalFilters = {
    category: 'all',
    price: 'all',
    data: 'all',
    provision: 'all'
};
let allGlobalTariffs = [];
let filteredGlobalTariffs = [];
let searchQuery = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    checkSavedPartnerEmail();
});

function initializeApp() {
    loadAllGlobalTariffs();
    showCategory('sim-only'); // Start with SIM Only
    initializeFilters();
}

function initializeFilters() {
    // Set all "all" buttons as active by default
    document.querySelectorAll('[data-value="all"]').forEach(btn => {
        btn.classList.add('active');
    });
}

// Load all tariffs for global filtering
function loadAllGlobalTariffs() {
    console.log('loadAllGlobalTariffs called');
    allGlobalTariffs = [];
    
    // Load SIM Only tariffs (no Strom in global view)
    Object.entries(tariffData['sim-only']).forEach(([provider, tariffs]) => {
        console.log(`Loading ${tariffs.length} tariffs for provider: ${provider}`);
        tariffs.forEach(tariff => {
            allGlobalTariffs.push({
                ...tariff,
                category: 'sim-only',
                provider: provider,
                categoryName: 'SIM Only'
            });
        });
    });
    
    // Load Internet tariffs
    Object.entries(tariffData['internet']).forEach(([provider, tariffs]) => {
        console.log(`Loading ${tariffs.length} Internet tariffs for provider: ${provider}`);
        tariffs.forEach(tariff => {
            allGlobalTariffs.push({
                ...tariff,
                category: 'internet',
                provider: provider,
                categoryName: 'Internet'
            });
        });
    });
    
    console.log('Total global tariffs loaded:', allGlobalTariffs.length);
    
    // Update total count
    const totalCountElement = document.getElementById('total-tariffs-count');
    if (totalCountElement) {
        totalCountElement.textContent = allGlobalTariffs.length;
    }
    
    // Initialize filtered tariffs
    filteredGlobalTariffs = [...allGlobalTariffs];
    console.log('Filtered tariffs initialized:', filteredGlobalTariffs.length);
}

function setupEventListeners() {
    // Form submission handlers
    const form = document.getElementById('customer-data-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    const formStrom = document.getElementById('customer-data-form-strom');
    if (formStrom) {
        formStrom.addEventListener('submit', handleStromFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Update hidden fields with current data
    updateHiddenFormFields();
    
    // Show success message
    const successMessage = document.getElementById('success-message');
    const submitBtn = e.target.querySelector('.submit-btn');
    
    if (successMessage && submitBtn) {
        successMessage.classList.add('show');
        submitBtn.style.display = 'none';
    }
    
    // Submit form in background
    setTimeout(() => {
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData
        }).catch(e => console.log('Form submitted'));
    }, 100);
}

function handleStromFormSubmit(e) {
    e.preventDefault();
    
    // Update hidden fields for Strom
    updateHiddenStromFormFields();
    
    // Show success alert
    alert('Herzlichen Dank für die Einreichung! Wir prüfen das Ganze. Nach 48 Stunden können Sie Ihre Provision in Ihrem Dashboard sehen.');
    
    // Submit form in background
    setTimeout(() => {
        const formData = new FormData(formStrom);
        fetch(formStrom.action, {
            method: 'POST',
            body: formData
        }).catch(e => console.log('Form submitted'));
    }, 100);
}

function updateHiddenFormFields() {
    const partnerEmail = document.getElementById('partnerEmail').value || '';
    const crossSellNames = Object.values(selectedCrossSellOptions).map(option => option.name);
    
    document.getElementById('form-partner-email').value = partnerEmail;
    document.getElementById('form-selected-tariff').value = selectedTariffData.tariff || '';
    document.getElementById('form-tariff-price').value = selectedTariffData.price || '';
    document.getElementById('form-provision-amount').value = selectedTariffData.provision || '';
    document.getElementById('form-cross-sell-options').value = crossSellNames.join(', ');
}

function updateHiddenStromFormFields() {
    const partnerEmail = document.getElementById('partnerEmail').value || '';
    
    const partnerEmailFields = document.querySelectorAll('.form-partner-email-strom');
    partnerEmailFields.forEach(field => {
        field.value = partnerEmail;
    });
    
    const tariffFields = document.querySelectorAll('.form-selected-tariff-strom');
    tariffFields.forEach(field => {
        field.value = selectedTariffData.tariff || '';
    });
    
    const provisionFields = document.querySelectorAll('.form-provision-amount-strom');
    provisionFields.forEach(field => {
        field.value = selectedTariffData.provision || '';
    });
}

// Category Management
function showCategory(category) {
    currentCategory = category;
    
    // Hide all category contents
    document.querySelectorAll('.category-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Update tab states
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected category
    const selectedTab = document.querySelector(`[data-category="${category}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    const selectedCategory = document.getElementById('category-' + category);
    if (selectedCategory) {
        selectedCategory.classList.remove('hidden');
    }
    
    // Hide forms
    hideAllForms();
    
    // Reset state
    resetSelectionState();
    
    // Initialize category-specific content
    if (category === 'all') {
        // Simple working version for "Alle Tariffe"
        showAllTariffsContent();
    } else {
        // Reset category-specific filters
        clearAllFilters();
        
        if (category === 'sim-only') {
            showProvider('sim-only', 'o2');
        } else if (category === 'handy-tarif') {
            showProvider('handy-tarif', 'o2');
            showHandyCategories();
        } else if (category === 'internet') {
            console.log('🌐 Internet category selected, showing 1und1 provider');
            showProvider('internet', '1und1');
        } else if (category === 'strom') {
            showCustomerType('privatkunde');
        }
    }
}

function hideAllForms() {
    const customerForm = document.getElementById('customer-form');
    const customerFormStrom = document.getElementById('customer-form-strom');
    
    if (customerForm) customerForm.classList.add('hidden');
    if (customerFormStrom) customerFormStrom.classList.add('hidden');
}

function resetSelectionState() {
    selectedTariffData = {};
    selectedHandyData = {};
    selectedCrossSellOptions = {};
    baseProvision = 0;
}

// Provider Management
function showProvider(category, provider) {
    currentProvider = provider;
    if (category === 'handy-tarif') {
        currentHandyProvider = provider;
    }
    
    // Update provider button states
    const providerButtons = document.querySelectorAll(`#category-${category} .provider-btn`);
    providerButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedBtn = document.querySelector(`#category-${category} [data-provider="${provider}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }

    // Handle Freenet special case
    if (provider === 'freenet' && category === 'sim-only') {
        const freenetSub = document.getElementById('freenet-sub-providers');
        if (freenetSub) {
            freenetSub.classList.remove('hidden');
        }
        const klarmobilSub = document.getElementById('klarmobil-sub-providers');
        if (klarmobilSub) {
            klarmobilSub.classList.add('hidden');
        }
        showFreenetProvider('o2');
    } else if (provider === 'klarmobil' && category === 'sim-only') {
        const klarmobilSub = document.getElementById('klarmobil-sub-providers');
        if (klarmobilSub) {
            klarmobilSub.classList.remove('hidden');
        }
        const freenetSub = document.getElementById('freenet-sub-providers');
        if (freenetSub) {
            freenetSub.classList.add('hidden');
        }
        showKlarmobilProvider('vodafone');
    } else {
        const freenetSub = document.getElementById('freenet-sub-providers');
        if (freenetSub) {
            freenetSub.classList.add('hidden');
        }
        const klarmobilSub = document.getElementById('klarmobil-sub-providers');
        if (klarmobilSub) {
            klarmobilSub.classList.add('hidden');
        }
        loadTariffs(category, provider);
    }
}

function showFreenetProvider(network) {
    currentFreenetProvider = network;
    
    // Update Freenet provider states
    document.querySelectorAll('#freenet-sub-providers .provider-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedBtn = document.querySelector(`#freenet-sub-providers [data-provider="${network}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
    
    loadTariffs('sim-only', 'freenet-' + network);
}

function showKlarmobilProvider(network) {
    currentKlarmobilProvider = network;
    
    // Update Klarmobil provider states
    document.querySelectorAll('#klarmobil-sub-providers .provider-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedBtn = document.querySelector(`#klarmobil-sub-providers [data-provider="${network}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
    
    loadTariffs('sim-only', 'klarmobil-' + network);
}

// Tariff Management
function loadTariffs(category, providerKey) {
    // Use the enhanced function with filter integration
    loadTariffsWithFilters(category, providerKey);
}

function loadTariffsWithFilters(category, providerKey) {
    currentCategory = category;
    currentProvider = providerKey;
    
    // Load tariff data and add provider information
    let tariffs = tariffData[category] && tariffData[category][providerKey] ? tariffData[category][providerKey] : [];
    
    // Internet tariffs are already in correct order in data
    
    // Add provider information to each tariff for filtering
    allTariffs = tariffs.map(tariff => ({
        ...tariff,
        provider: providerKey,
        category: category
    }));
    
    // Display tariffs in the container
    displayTariffs(category, providerKey, tariffs);
    
    // Apply current filters
    applyFilters();
}

function displayTariffs(category, providerKey, tariffs) {
    console.log(`🔍 displayTariffs called: category=${category}, provider=${providerKey}, tariffs=${tariffs.length}`);
    
    const container = document.getElementById(`tariffs-${category}`);
    if (!container) {
        console.error(`❌ Container not found: tariffs-${category}`);
        return;
    }
    
    if (tariffs.length === 0) {
        console.log('⚠️ No tariffs found');
        container.innerHTML = `
            <div class="no-tariffs">
                <i class="fas fa-info-circle"></i>
                <p>Keine Tarife für diesen Anbieter verfügbar.</p>
            </div>
        `;
        return;
    }
    
    // CSS Order handles Internet tariff ordering now - no JavaScript sorting needed
    console.log('🌐 INTERNET TARIFFS: Using CSS order for correct display:', tariffs.map(t => t.name));
    
    // Generate HTML for all tariffs (no provider badge for specific provider views)
    const tariffsHTML = tariffs.map(tariff => createTariffCardHTML(tariff, category, providerKey, false)).join('');
    container.innerHTML = tariffsHTML;
    console.log(`✅ HTML inserted: ${orderedTariffs.length} tariffs`);
    
    // Update count
    updateResultsCount();
}

function updateResultsCount() {
    const countElement = document.getElementById('results-count');
    if (countElement && filteredTariffs) {
        const total = allTariffs ? allTariffs.length : 0;
        const filtered = filteredTariffs.length;
        
        // Special message for smart filter
        if (activeFilters.provision === 'best-smart') {
            countElement.textContent = `${filtered} Top-Tarife ausgewählt`;
        } else {
            countElement.textContent = `${filtered} von ${total} Tarifen`;
        }
    }
}

function getProviderDisplayName(providerKey) {
    const providerNames = {
        'o2': 'O2',
        'freenet-o2': 'Freenet O2',
        'freenet-vodafone': 'Freenet Vodafone',
        'freenet-telekom': 'Freenet Telekom',
        'ayildiz': 'Ay Yildiz',
        '1und1': '1&1',
        'yourfone': 'Yourfone'
    };
    return providerNames[providerKey] || providerKey;
}

// Clean tariff names by removing technical suffixes  
function cleanTariffName(name) {
    return name
        // Remove "mit Handy" patterns
        .replace(/\s+mit\s+handy\s*\d*$/i, '')
        .replace(/\s+mit\s+handy\s+\d+$/i, '')
        
        // Remove m.H. patterns (all variations)
        .replace(/\s+m\.h\.?\s*\d*$/i, '')
        .replace(/\s+m\.h\s+\d+$/i, '')
        
        // Remove handy patterns
        .replace(/\s+m\.handy$/i, '')
        .replace(/\s+handy\s*\d*$/i, '')
        .replace(/\s+handy\s+\d+$/i, '')
        
        // Remove date patterns
        .replace(/\s+nov\s+24$/i, '')
        .replace(/\s+2024$/i, '')
        .replace(/\s+2025$/i, '')
        
        // Remove plus patterns
        .replace(/\s*\+\s*handy\s*\d*$/i, '')
        .replace(/\s*\+\s*handy\s+\d+$/i, '')
        .replace(/\s*\+\s*\d+$/i, '')
        
        // Remove generic "mit" patterns
        .replace(/\s+mit\s*\d+$/i, '')
        
        .trim();
}

function createTariffCardHTML(tariff, category, providerKey, showProviderBadge = false) {
    const tariffId = tariff.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    
    if (category === 'strom') {
        return createStromTariffHTML(tariff);
    }
    
    if (category === 'internet') {
        return createInternetTariffHTML(tariff, tariffId);
    }
    
    // Create provider badge only if showProviderBadge is true
    let providerBadgeHTML = '';
    if (showProviderBadge) {
        const providerClass = getProviderClass(providerKey);
        const providerName = getShortProviderName(providerKey);
        providerBadgeHTML = `<div class="card-provider ${providerClass}">${providerName}</div>`;
    }
    
    // For "Alle Tariffe" view, add provider prefix to tariff name and clean it
    let displayName = cleanTariffName(tariff.name);
    if (category === 'all' || showProviderBadge) {
        const providerPrefix = getProviderDisplayName(providerKey);
        displayName = `${providerPrefix}: ${displayName}`;
    }
    
    return `
        <div class="tariff-card" onclick="selectTariff('${category}', '${tariffId}', '${tariff.price}', '${tariff.provision}', '${providerKey}')">
            ${providerBadgeHTML}
            <h3 class="card-title">${cleanTariffName(displayName)}</h3>
            <p class="card-desc">${tariff.desc}</p>
            <div class="card-pricing">
                <div class="customer-price">
                    <span class="price-label">Kunde zahlt</span>
                    <span class="price-value">${tariff.price}€<span class="price-period">/Monat</span></span>
                </div>
                <div class="provision-badge">
                    <i class="fas fa-euro-sign"></i>
                    <span>${tariff.provision}€</span>
                </div>
            </div>
        </div>`;
}

function createInternetTariffHTML(tariff, tariffId) {
    const typeClass = tariff.type.toLowerCase();
    const typeIcon = tariff.type === 'Glasfaser' ? 'fas fa-bolt' : 'fas fa-ethernet';
    
    // DIRECT ORDERING FIX: CSS order based on tariff name
    let cssOrder = 99; // default fallback
    switch(tariff.name) {
        case 'DSL 50': cssOrder = 1; break;
        case 'DSL 100': cssOrder = 2; break;
        case 'DSL 250': cssOrder = 3; break;
        case 'Glasfaser 150': cssOrder = 4; break;
        case 'Glasfaser 300': cssOrder = 5; break;
        case 'Glasfaser 600': cssOrder = 6; break;
        case 'Glasfaser 1.000': cssOrder = 7; break;
    }
    
    return `
        <div class="tariff-card internet-card" style="order: ${cssOrder};" onclick="selectInternetTariff('${tariffId}', '${tariff.name}', '${tariff.price}', '${tariff.normalPrice}', '${tariff.provision}')">
            <div class="card-badge ${typeClass}">
                <i class="${typeIcon}"></i>
                ${tariff.type}
            </div>
            <div class="card-provider ondeone">1&1</div>
            <h3 class="card-title">${cleanTariffName(tariff.name)}</h3>
            <p class="card-desc">${tariff.desc}</p>
            <div class="card-pricing internet-pricing">
                <div class="customer-price">
                    <span class="price-label">Aktion (1.-10. Monat)</span>
                    <span class="price-value">${tariff.price}€<span class="price-period">/Monat</span></span>
                    <span class="normal-price">danach ${tariff.normalPrice}€/Monat</span>
                </div>
                <div class="provision-badge">
                    <i class="fas fa-euro-sign"></i>
                    <span>${tariff.provision}€</span>
                </div>
            </div>
            <div class="setup-fee">
                <i class="fas fa-tools"></i>
                Einmalig: ${tariff.setupFee}€ (Router inklusive)
            </div>
        </div>`;
}

function createStromTariffHTML(tariff) {
    return `
        <div class="tariff-card" onclick="selectStromTariff('${tariff.name}', '${tariff.desc}', '${tariff.provision}')">
            <div class="card-provider" style="background: var(--warning);">Strom</div>
            <h3 class="card-title">${cleanTariffName(tariff.name)}</h3>
            <p class="card-desc">${tariff.desc}</p>
            <div class="card-pricing">
                <div class="customer-price">
                    <span class="price-label">Angebot</span>
                    <span class="price-value" style="font-size: 1rem;">${tariff.price}</span>
                </div>
                <div class="provision-badge">
                    <i class="fas fa-euro-sign"></i>
                    <span>${tariff.provision}€</span>
                </div>
            </div>
        </div>`;
}

function getProviderClass(providerKey) {
    if (providerKey.startsWith('freenet-o2')) return 'freenet';
    if (providerKey.startsWith('freenet-vodafone')) return 'vodafone';
    if (providerKey.startsWith('freenet-telekom')) return 'telekom';
    if (providerKey === 'ayildiz') return 'ayildiz';
    if (providerKey === '1und1') return 'ondeone';
    if (providerKey === 'yourfone') return 'yourfone';
    return 'o2';
}

function getShortProviderName(providerKey) {
    const names = {
        'o2': 'O2',
        'freenet-o2': 'Freenet',
        'freenet-vodafone': 'Freenet',
        'freenet-telekom': 'Freenet',
        'klarmobil-vodafone': 'Klarmobil (Vodafone)',  // FIX: Vollständiger Name für Klarmobil!
        'ayildiz': 'Ay Yildiz',
        '1und1': '1&1',
        'yourfone': 'Yourfone'
    };
    return names[providerKey] || 'O2';
}

// Tariff Selection
function selectTariff(category, tariff, price, provision, providerKey = null) {
    // If we're in "Alle Tariffe" view, set category to 'all' to ensure smartphone booking works
    if (currentCategory === 'all') {
        category = 'all';
    }
    
    selectedTariffData = { category, tariff, price, provision, provider: providerKey };
    baseProvision = parseFloat(provision.replace(',', '.'));
    
    // Reset phone selection when new tariff is selected
    resetPhoneSelection();

    // Show customer form
    const customerForm = document.getElementById('customer-form');
    if (customerForm) {
        customerForm.classList.remove('hidden');
        updateSelectedTariffInfo();
        
        // Show smartphone booking section only for SIM-only tariffs from Freenet/Klarmobil
        const showSmartphoneBooking = shouldShowSmartphoneBooking();
        const smartphoneSection = document.getElementById('smartphone-booking-section');
        if (smartphoneSection) {
            if (showSmartphoneBooking) {
                smartphoneSection.classList.remove('hidden');
                resetSmartphoneBookingUI();
            } else {
                smartphoneSection.classList.add('hidden');
            }
        }
        
        updateCostOverview();
        customerForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function selectStromTariff(tariff, desc, provision) {
    selectedTariffData = { category: 'strom', tariff, desc, provision };
    baseProvision = parseFloat(provision.replace(',', '.'));

    // Show Strom customer form
    const customerFormStrom = document.getElementById('customer-form-strom');
    if (customerFormStrom) {
        customerFormStrom.classList.remove('hidden');
        updateSelectedTariffInfoStrom();
        updateCostOverviewStrom();
        customerFormStrom.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function selectInternetTariff(tariffId, tariffName, actionPrice, normalPrice, provision) {
    selectedTariffData = { 
        category: 'internet', 
        tariff: tariffId, 
        tariffName: tariffName,
        price: actionPrice,
        normalPrice: normalPrice, 
        provision: provision 
    };
    baseProvision = parseFloat(provision.replace(',', '.'));
    
    // Show internet customer form
    const customerForm = document.getElementById('customer-form');
    if (customerForm) {
        customerForm.classList.remove('hidden');
        updateSelectedTariffInfoInternet();
        updateCostOverviewInternet();
        
        // Hide smartphone booking for internet tariffs
        const smartphoneSection = document.getElementById('smartphone-booking-section');
        if (smartphoneSection) {
            smartphoneSection.classList.add('hidden');
        }
        
        // Show internet-specific form fields
        showInternetFormFields();
        
        customerForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Handy/Device Management
function showHandyCategories() {
    document.getElementById('handy-categories').classList.remove('hidden');
    document.getElementById('handy-devices').classList.add('hidden');
    document.getElementById('handy-storage').classList.add('hidden');
    document.getElementById('handy-colors').classList.add('hidden');
    document.getElementById('handy-tariffs').classList.add('hidden');
}

function showHandyCategory(category) {
    selectedHandyData = { category };
    
    document.getElementById('handy-categories').classList.add('hidden');
    document.getElementById('handy-devices').classList.remove('hidden');
    document.getElementById('handy-device-title').textContent = `${category} Geräte wählen`;
    
    const devices = handyData[currentHandyProvider]?.[category] || [];
    const grid = document.getElementById('handy-devices-grid');
    
    grid.innerHTML = devices.map(device => `
        <div class="selection-item" onclick="selectHandyDevice('${device.name}')">
            <h4>${device.name}</h4>
            ${device.badge ? `<span style="background: var(--success); color: white; padding: 4px 8px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; margin-top: 8px; display: inline-block;">${device.badge}</span>` : ''}
        </div>
    `).join('');
}

function selectHandyDevice(deviceName) {
    selectedHandyData.device = deviceName;
    
    const category = selectedHandyData.category;
    const device = handyData[currentHandyProvider]?.[category]?.find(d => d.name === deviceName);
    
    document.getElementById('handy-devices').classList.add('hidden');
    document.getElementById('handy-storage').classList.remove('hidden');
    document.getElementById('handy-storage-title').textContent = `${deviceName} - Speicher wählen`;
    
    const grid = document.getElementById('handy-storage-grid');
    grid.innerHTML = device.storage.map((storage, index) => `
        <div class="selection-item" onclick="selectHandyStorage('${storage}', ${index})">
            <h4>${storage}</h4>
        </div>
    `).join('');
}

function selectHandyStorage(storage, index) {
    selectedHandyData.storage = storage;
    selectedHandyData.storageIndex = index;
    
    const category = selectedHandyData.category;
    const device = handyData[currentHandyProvider]?.[category]?.find(d => d.name === selectedHandyData.device);
    
    document.getElementById('handy-storage').classList.add('hidden');
    document.getElementById('handy-colors').classList.remove('hidden');
    document.getElementById('handy-color-title').textContent = `${selectedHandyData.device} - Farbe wählen`;
    
    const grid = document.getElementById('handy-colors-grid');
    grid.innerHTML = device.colors.map(color => `
        <div class="selection-item" onclick="selectHandyColor('${color}')">
            <h4>${color}</h4>
        </div>
    `).join('');
}

function selectHandyColor(color) {
    selectedHandyData.color = color;
    
    document.getElementById('handy-colors').classList.add('hidden');
    document.getElementById('handy-tariffs').classList.remove('hidden');
    document.getElementById('handy-tariff-title').textContent = `Tarif für ${selectedHandyData.device} wählen`;
    document.getElementById('selected-handy-display').textContent = `${selectedHandyData.device} (${selectedHandyData.storage}, ${selectedHandyData.color})`;
    
    const tariffs = generateHandyTariffs();
    const grid = document.getElementById('handy-tariffs-grid');
    
    grid.innerHTML = tariffs.map(tariff => `
        <div class="selection-item" onclick="selectHandyTariff('${tariff.name}', '${tariff.price}', '${tariff.provision}')">
            <h4>${tariff.name}</h4>
            <div style="color: var(--primary); font-weight: 700; font-size: 1.125rem; margin: 8px 0;">${tariff.price} €/Monat</div>
            <div style="color: var(--success); font-weight: 600;">Provision: ${tariff.provision} €</div>
        </div>
    `).join('');
}

function generateHandyTariffs() {
    let tariffs = [];
    
    if (currentHandyProvider === 'yourfone') {
        const basePrice = handyData.yourfone[selectedHandyData.category]
            .find(d => d.name === selectedHandyData.device)
            .storagePrice[selectedHandyData.storageIndex];
        
        tariffs = [
            { name: '10GB Tarif', price: (19.98 + basePrice).toFixed(2), provision: '125,00' },
            { name: '20GB Tarif', price: (24.98 + basePrice).toFixed(2), provision: '170,00' },
            { name: '50GB Tarif', price: (34.98 + basePrice).toFixed(2), provision: '200,00' }
        ];
    } else if (currentHandyProvider === 'o2') {
        const device = handyData.o2[selectedHandyData.category].find(d => d.name === selectedHandyData.device);
        if (device && device.storagePrice && selectedHandyData.storageIndex !== undefined) {
            // Get the iPhone price directly (not nested array)
            const iphonePrice = device.storagePrice[selectedHandyData.storageIndex];
            if (iphonePrice && !isNaN(iphonePrice)) {
                tariffs = [
                    { name: 'O2 Mobile M + iPhone', price: (14.99 + parseFloat(iphonePrice)).toFixed(2), provision: '25,00' },
                    { name: 'O2 Unlimited Max 300 + iPhone', price: (34.99 + parseFloat(iphonePrice)).toFixed(2), provision: '100,00' }
                ];
            } else {
                console.error('Invalid iPhone price:', iphonePrice);
                tariffs = [
                    { name: 'O2 Mobile M + iPhone', price: '14,99', provision: '25,00' },
                    { name: 'O2 Unlimited Max 300 + iPhone', price: '34,99', provision: '100,00' }
                ];
            }
        }
    } else {
        // 1&1 default tariffs
        tariffs = [
            { name: 'XS Tarif (20GB)', price: '59,99', provision: '50,00' },
            { name: 'S Tarif (60GB)', price: '74,99', provision: '75,00' },
            { name: 'L Tarif (120GB)', price: '89,99', provision: '125,00' }
        ];
    }
    
    return tariffs;
}

function selectHandyTariff(tariffName, price, provision) {
    const fullName = `${selectedHandyData.device} + ${tariffName}`;
    selectedTariffData = { 
        category: 'handy-tarif',
        tariff: fullName,
        price: price,
        provision: provision
    };
    baseProvision = parseFloat(provision.replace(',', '.'));

    // Hide handy selection and show form
    document.getElementById('handy-tariffs').classList.add('hidden');
    const customerForm = document.getElementById('customer-form');
    if (customerForm) {
        customerForm.classList.remove('hidden');
        updateSelectedTariffInfo();
        updateCostOverview();
        customerForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Navigation functions for handy selection
function backToHandyDevices() {
    document.getElementById('handy-storage').classList.add('hidden');
    document.getElementById('handy-devices').classList.remove('hidden');
}

function backToHandyStorage() {
    document.getElementById('handy-colors').classList.add('hidden');
    document.getElementById('handy-storage').classList.remove('hidden');
}

function backToHandyColors() {
    document.getElementById('handy-tariffs').classList.add('hidden');
    document.getElementById('handy-colors').classList.remove('hidden');
}

// Customer Type Management (Strom)
function showCustomerType(customerType) {
    currentCustomerType = customerType;
    
    // Update customer type button states
    document.querySelectorAll('.customer-type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const selectedBtn = document.querySelector(`[data-type="${customerType}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
    
    // Update title
    const title = document.getElementById('customer-type-title-strom');
    if (title) {
        const typeText = customerType === 'privatkunde' ? 'Privatkunde' : 'Gewerbekunde';
        title.innerHTML = `<i class="fas fa-bolt"></i> Strom-Tarife ${typeText}`;
    }
    
    loadTariffs('strom', customerType);
}

// Cost Overview Management
function updateSelectedTariffInfo() {
    const tariffInfo = document.getElementById('selected-tariff-info');
    if (tariffInfo && selectedTariffData.tariff) {
        // Smart tariff name formatting for ALL tariffs
        let displayName = selectedTariffData.tariff;
        
        // Auto-format based on tariff ID patterns
        if (displayName.includes('freenet-vodafone')) {
            displayName = displayName.replace('freenet-vodafone-', 'Freenet (Vodafone) - ').replace(/-/g, ' ');
        } else if (displayName.includes('freenet-telekom')) {
            displayName = displayName.replace('freenet-telekom-', 'Freenet (Telekom) - ').replace(/-/g, ' ');
        } else if (displayName.includes('freenet-o2')) {
            displayName = displayName.replace('freenet-o2-', 'Freenet (O2) - ').replace(/-/g, ' ');
        } else if (displayName.includes('klarmobil-vodafone')) {
            displayName = displayName.replace('klarmobil-vodafone-', 'Klarmobil (Vodafone) - ').replace(/-/g, ' ');
        } else if (displayName.includes('klarmobil-telekom')) {
            displayName = displayName.replace('klarmobil-telekom-', 'Klarmobil (Telekom) - ').replace(/-/g, ' ');
        } else if (displayName.includes('klarmobil-o2')) {
            displayName = displayName.replace('klarmobil-o2-', 'Klarmobil (O2) - ').replace(/-/g, ' ');
        } else if (displayName.includes('o2-')) {
            displayName = displayName.replace('o2-', 'O2 - ').replace(/-/g, ' ');
        } else if (displayName.includes('ayildiz')) {
            displayName = displayName.replace('ayildiz-', 'Ay Yildiz - ').replace(/-/g, ' ');
        } else {
            // Fallback: just replace dashes with spaces and capitalize
            displayName = displayName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }
        
        // Remove "mit Handy" and similar endings - COMPREHENSIVE PATTERNS
        displayName = displayName
            // Main "mit Handy" patterns
            .replace(/\s+mit\s+handy\s*\d*$/i, '')                // "mit Handy 10", "mit Handy 5", "mit handy"
            .replace(/\s+mit\s+handy\s+\d+$/i, '')                // "mit Handy 10" (with space before number)
            
            // m.H. patterns (all variations)
            .replace(/\s+m\.h\.?\s*\d*$/i, '')                    // "m.H.10", "m.H.5", "m.H.15", "m.h.10"
            .replace(/\s+m\.h\s+\d+$/i, '')                       // "m.H 10" (space before number)
            
            // Direct "handy" patterns
            .replace(/\s+m\.handy$/i, '')                         // "m.handy"
            .replace(/\s+handy\s*\d*$/i, '')                     // "handy", "handy 10", "handy 5"
            .replace(/\s+handy\s+\d+$/i, '')                     // "handy 10" (with space before number)
            
            // Plus patterns
            .replace(/\s*\+\s*handy\s*\d*$/i, '')               // "+ handy", "+handy", "+ handy 10"
            .replace(/\s*\+\s*handy\s+\d+$/i, '')               // "+ handy 10" (with space before number)
            
            // LTE special case (preserve LTE but remove handy suffix)
            .replace(/\s+LTE\s+m\.h\.?\s*\d*$/i, ' LTE')        // "40 GB LTE m.H.15" → "40 GB LTE"
            .replace(/\s+LTE\s+mit\s+handy\s*\d*$/i, ' LTE')    // "40 GB LTE mit Handy 10" → "40 GB LTE"
            
            // Edge cases and cleanup
            .replace(/\s+mit\s*\d+$/i, '')                       // Just "mit 10" or "mit10"
            .replace(/\s*\+\s*\d+$/i, '')                        // Just "+ 10" or "+10" at the end
            .trim();
        
        // Extract provider information
        let providerName = '';
        let dataVolume = '';
        
        // Determine provider from current provider, selectedTariffData.provider, or tariff name
        const providerToUse = currentProvider || selectedTariffData?.provider;
        
        if (providerToUse) {
            if (providerToUse === 'o2') providerName = 'O2';
            else if (providerToUse === 'ayildiz') providerName = 'Ay Yildiz';
            else if (providerToUse === '1und1') providerName = '1&1';
            else if (providerToUse === 'yourfone') providerName = 'Yourfone';
            else if (providerToUse.startsWith('freenet-')) {
                const network = providerToUse.split('-')[1];
                providerName = `Freenet (${network.charAt(0).toUpperCase() + network.slice(1)})`;
            }
            else if (providerToUse.startsWith('klarmobil-')) {
                const network = providerToUse.split('-')[1];
                providerName = `Klarmobil (${network.charAt(0).toUpperCase() + network.slice(1)})`;
            }
        } else {
            // Fallback: extract from tariff name
            // Spezielle Behandlung für bekannte Klarmobil-Tarife
            if (displayName.includes('Geburtstagsaktion')) providerName = 'Klarmobil (Vodafone)';
            else if (displayName.includes('Freenet')) providerName = displayName.split(' - ')[0];
            else if (displayName.includes('Klarmobil')) providerName = displayName.split(' - ')[0];
            else if (displayName.includes('O2')) providerName = 'O2';
            else if (displayName.includes('Ay Yildiz')) providerName = 'Ay Yildiz';
            else if (displayName.includes('1&1')) providerName = '1&1';
            else if (displayName.includes('Yourfone')) providerName = 'Yourfone';
        }
        
        // Extract data volume - EINFACHE LÖSUNG: Nutze direkt die desc vom Provider
        const providerForData = providerToUse;
        if (providerForData && selectedTariffData.category && tariffData[selectedTariffData.category]?.[providerForData]) {
            const tariffs = tariffData[selectedTariffData.category][providerForData];
            
            // Finde den passenden Tarif und nutze seine desc direkt
            for (let tariff of tariffs) {
                const tariffId = tariff.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                if (selectedTariffData.tariff.includes(tariffId) && tariff.desc) {
                    // Nehme die desc direkt als dataVolume (enthält bereits GB/MB/Flat etc.)
                    dataVolume = tariff.desc;
                    break;
                }
            }
        }
        
        // Für "Alle Tarife", "diese-woche" und "neue-tariffe" - durchsuche alle Provider nach dem Tarif
        if (!dataVolume && (selectedTariffData.category === 'all' || selectedTariffData.category === 'diese-woche' || selectedTariffData.category === 'neue-tariffe')) {
            for (let category of ['sim-only']) {
                if (!tariffData[category]) continue;
                for (let provider of Object.keys(tariffData[category])) {
                    const tariffs = tariffData[category][provider];
                    for (let tariff of tariffs) {
                        const tariffId = tariff.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                        if (selectedTariffData.tariff.includes(tariffId) && tariff.desc) {
                            dataVolume = tariff.desc;
                            break;
                        }
                    }
                    if (dataVolume) break;
                }
                if (dataVolume) break;
            }
        }
        
        // Fallback: Versuche es aus displayName zu extrahieren
        if (!dataVolume) {
            const gbMatches = displayName.match(/(\d+)\s*GB/i) || displayName.match(/(\d+)GB/i);
            if (gbMatches) {
                dataVolume = `${gbMatches[1]} GB`;
            } else if (displayName.toLowerCase().includes('unlimited') || displayName.toLowerCase().includes('flat')) {
                dataVolume = 'Unlimited';
            } else {
                dataVolume = 'k.A.';
            }
        }
        
        // Clean tariff name (remove provider prefix if already extracted)
        let cleanTariffName = displayName;
        if (providerName && displayName.includes(providerName)) {
            cleanTariffName = displayName.replace(providerName + ' - ', '').replace(providerName + ' ', '').trim();
        }
        
        tariffInfo.innerHTML = `
            <div class="selected-tariff-card">
                <div class="tariff-badge mobile">
                    <i class="fas fa-sim-card"></i>
                    Mobile
                </div>
                <h3>${cleanTariffName}</h3>
                <div class="tariff-details">
                    <span class="data-volume"><i class="fas fa-database"></i> ${dataVolume}</span>
                    <span class="provider-name"><i class="fas fa-building"></i> ${providerName}</span>
                </div>
                <div class="pricing-info">
                    <span class="price">${selectedTariffData.price}€/Monat</span>
                    <span class="provision">Provision: ${selectedTariffData.provision}€</span>
                </div>
            </div>
        `;
    }
}

function updateSelectedTariffInfoStrom() {
    const tariffInfo = document.getElementById('selected-tariff-info-strom');
    if (tariffInfo && selectedTariffData.tariff) {
        const typeText = currentCustomerType === 'privatkunde' ? 'Privatkunde' : 'Gewerbekunde';
        tariffInfo.innerHTML = `
            <h3>Gewählter Tarif: ${selectedTariffData.tariff}</h3>
            <p style="color: var(--gray-600);">Kundentyp: ${typeText}</p>
        `;
    }
}

function updateCostOverview() {
    const costOverview = document.getElementById('cost-overview');
    if (!costOverview || !selectedTariffData.tariff) {
        if (costOverview) costOverview.classList.add('hidden');
        return;
    }
    
    costOverview.classList.remove('hidden');

    let totalMonthly = 0;
    let totalProvision = baseProvision;

    const tariffPrice = parseFloat(selectedTariffData.price.replace(',', '.'));
    if (!isNaN(tariffPrice)) {
        totalMonthly += tariffPrice;
    }

    // Add phone costs
    let phonePrice = 0;
    let phoneHTML = '';
    if (selectedPhoneData.phoneObject && selectedPhoneData.storageIndex !== undefined) {
        phonePrice = getPhonePrice(selectedPhoneData.phoneObject, selectedPhoneData.storageIndex);
        totalMonthly += phonePrice;
        
        phoneHTML = `
            <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--gray-200);">
                <span>${selectedPhoneData.model} (${selectedPhoneData.storage})</span>
                <span>${phonePrice.toFixed(2).replace('.', ',')} €</span>
            </div>`;
    }

    // Add cross-sell costs
    Object.values(selectedCrossSellOptions).forEach(option => {
        totalMonthly += option.price;
        totalProvision += option.provision;
    });

    // Update monthly costs display
    const monthlyCostsContainer = document.getElementById('monthly-costs');
    if (monthlyCostsContainer) {
        let crossSellHTML = '';
        Object.values(selectedCrossSellOptions).forEach(option => {
            crossSellHTML += `
                <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--gray-200);">
                    <span>${option.name}</span>
                    <span>${option.price.toFixed(2).replace('.', ',')} €</span>
                </div>`;
        });

        monthlyCostsContainer.innerHTML = `
            <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid var(--gray-200);">
                <h4 style="margin-bottom: 16px; color: var(--gray-800); display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-calendar-alt" style="color: var(--primary);"></i>
                    Monatliche Kosten
                </h4>
                <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--gray-200);">
                    <span>Tarif</span>
                    <span>${tariffPrice.toFixed(2).replace('.', ',')} €</span>
                </div>
                ${phoneHTML}
                ${crossSellHTML}
                <div style="display: flex; justify-content: space-between; padding: 16px 0; font-weight: 700; font-size: 1.125rem; color: var(--gray-900); border-top: 2px solid var(--gray-200); margin-top: 12px;">
                    <span>Gesamt</span>
                    <span>${totalMonthly.toFixed(2).replace('.', ',')} €/Monat</span>
                </div>
            </div>
            
            <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid var(--gray-200); margin-top: 16px;">
                <h4 style="margin-bottom: 16px; color: var(--gray-800); display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-receipt" style="color: var(--primary);"></i>
                    Einmalige Kosten
                </h4>
                <div style="display: flex; justify-content: space-between; padding: 12px 0;">
                    <span>Anschlussgebühr</span>
                    <span>39,99 €</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 16px 0; font-weight: 700; font-size: 1.125rem; color: var(--gray-900); border-top: 2px solid var(--gray-200); margin-top: 12px;">
                    <span>Einmalig</span>
                    <span>39,99 €</span>
                </div>
            </div>
        `;
    }
    
    // Update provision display
    const currentProvisionElement = document.getElementById('current-provision');
    if (currentProvisionElement) {
        currentProvisionElement.textContent = `${totalProvision.toFixed(2).replace('.', ',')} €`;
    }

    // Show cross-sell section
    const crossSellSection = document.getElementById('cross-sell-section');
    if (crossSellSection) {
        crossSellSection.classList.remove('hidden');
        setupCrossSellContent();
    }
}

function updateCostOverviewStrom() {
    const costOverview = document.getElementById('cost-overview-strom');
    if (!costOverview) return;
    
    costOverview.classList.remove('hidden');

    const monthlyCostsContainer = document.getElementById('monthly-costs-strom');
    if (monthlyCostsContainer) {
        monthlyCostsContainer.innerHTML = `
            <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid var(--gray-200);">
                <h4 style="margin-bottom: 16px; color: var(--gray-800); display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-info-circle" style="color: var(--primary);"></i>
                    Tarif-Information
                </h4>
                <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--gray-200);">
                    <span>Tarif</span>
                    <span>${selectedTariffData.tariff}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 12px 0;">
                    <span>Verbrauchsklasse</span>
                    <span>${selectedTariffData.desc}</span>
                </div>
                <div style="padding: 16px; background: var(--gray-50); border-radius: 8px; margin-top: 12px;">
                    <p style="margin: 0; text-align: center; color: var(--gray-600);">
                        Individuelles Angebot basierend auf Verbrauchsdaten
                    </p>
                </div>
            </div>
        `;
    }
    
    const currentProvisionElement = document.getElementById('current-provision-strom');
    if (currentProvisionElement) {
        currentProvisionElement.textContent = `${baseProvision.toFixed(2).replace('.', ',')} €`;
    }
}

// Cross-Sell Management
function setupCrossSellContent() {
    const crossSellContent = document.getElementById('cross-sell-content');
    if (!crossSellContent) return;

    crossSellContent.innerHTML = `
        <div style="border-bottom: 1px solid var(--gray-200);">
            <div style="background: var(--gray-100); padding: 16px 20px; display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-shield-alt" style="color: var(--primary);"></i>
                <h4 style="margin: 0; font-size: 0.875rem; font-weight: 700; color: var(--gray-700); letter-spacing: 0.05em;">HANDYVERSICHERUNG</h4>
            </div>
            <div class="cross-sell-option" onclick="toggleCrossSellOption('insurance-basic')">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
                    <div>
                        <h5 style="margin: 0 0 8px 0; font-size: 1rem; font-weight: 600; color: var(--gray-800);">HANDYVERSICHERUNG BASIC</h5>
                        <p style="margin: 0 0 8px 0; font-size: 0.875rem; color: var(--gray-600);">Grundschutz gegen Displaybruch und Wasserschäden</p>
                        <p style="margin: 0; font-weight: 600; color: var(--gray-700);">Kunde zahlt: 5,50 €/Monat</p>
                    </div>
                    <div style="background: var(--success); color: white; padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 0.875rem;">+25,00 € Provision</div>
                </div>
            </div>
            <div class="cross-sell-option" onclick="toggleCrossSellOption('insurance-premium')">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
                    <div>
                        <h5 style="margin: 0 0 8px 0; font-size: 1rem; font-weight: 600; color: var(--gray-800);">HANDYVERSICHERUNG PREMIUM</h5>
                        <p style="margin: 0 0 8px 0; font-size: 0.875rem; color: var(--gray-600);">Komplettschutz inkl. Diebstahl und technische Schäden</p>
                        <p style="margin: 0; font-weight: 600; color: var(--gray-700);">Kunde zahlt: 8,95 €/Monat</p>
                    </div>
                    <div style="background: var(--success); color: white; padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 0.875rem;">+40,00 € Provision</div>
                </div>
            </div>
        </div>

        <div>
            <div style="background: var(--gray-100); padding: 16px 20px; display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-users" style="color: var(--primary);"></i>
                <h4 style="margin: 0; font-size: 0.875rem; font-weight: 700; color: var(--gray-700); letter-spacing: 0.05em;">PARTNERKARTE</h4>
            </div>
            <div class="cross-sell-option" onclick="toggleCrossSellOption('partner-o2-mobile-s')">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
                    <div>
                        <h5 style="margin: 0 0 8px 0; font-size: 1rem; font-weight: 600; color: var(--gray-800);">O2 MOBILE S (2024)</h5>
                        <p style="margin: 0 0 8px 0; font-size: 0.875rem; color: var(--gray-600);">10 GB • Allnet-Flat</p>
                        <p style="margin: 0; font-weight: 600; color: var(--gray-700);">Kunde zahlt: 9,99 €/Monat</p>
                    </div>
                    <div style="background: var(--success); color: white; padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 0.875rem;">+15,00 € Provision</div>
                </div>
            </div>
            <div class="cross-sell-option" onclick="toggleCrossSellOption('partner-1und1-xs')">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
                    <div>
                        <h5 style="margin: 0 0 8px 0; font-size: 1rem; font-weight: 600; color: var(--gray-800);">1&1 ALL-NET-FLAT XS</h5>
                        <p style="margin: 0 0 8px 0; font-size: 0.875rem; color: var(--gray-600);">5 GB (erste 3 Monate günstiger)</p>
                        <p style="margin: 0; font-weight: 600; color: var(--gray-700);">Kunde zahlt: 4,99 €/Monat (3 Mon.) dann 14,99 €</p>
                    </div>
                    <div style="background: var(--success); color: white; padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 0.875rem;">+50,00 € Provision</div>
                </div>
            </div>
            <div class="cross-sell-option" onclick="toggleCrossSellOption('partner-yourfone-10gb')">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
                    <div>
                        <h5 style="margin: 0 0 8px 0; font-size: 1rem; font-weight: 600; color: var(--gray-800);">YOURFONE 10GB</h5>
                        <p style="margin: 0 0 8px 0; font-size: 0.875rem; color: var(--gray-600);">10GB + 300 MBit/s</p>
                        <p style="margin: 0; font-weight: 600; color: var(--gray-700);">Kunde zahlt: 19,98 €/Monat</p>
                    </div>
                    <div style="background: var(--success); color: white; padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 0.875rem;">+125,00 € Provision</div>
                </div>
            </div>
        </div>
    `;
}

function toggleCrossSell() {
    const content = document.getElementById('cross-sell-content');
    const toggle = document.querySelector('.cross-sell-toggle');
    
    if (content && toggle) {
        content.classList.toggle('open');
        const isOpen = content.classList.contains('open');
        toggle.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    }
}

function toggleCrossSellOption(optionId) {
    const option = event.currentTarget;
    const isSelected = selectedCrossSellOptions[optionId];
    
    if (isSelected) {
        delete selectedCrossSellOptions[optionId];
        option.classList.remove('selected');
        option.style.background = '';
        option.style.borderLeft = '';
    } else {
        const optionData = crossSellData[optionId];
        if (optionData) {
            selectedCrossSellOptions[optionId] = optionData;
            option.classList.add('selected');
            option.style.background = 'rgba(0, 122, 255, 0.05)';
            option.style.borderLeft = '4px solid var(--primary)';
        }
    }
    
    updateCostOverview();
}

// Filter System Functions
function toggleFilters() {
    const panel = document.getElementById('filter-panel');
    const toggleBtn = document.querySelector('.filter-toggle-btn');
    const toggleText = toggleBtn.querySelector('.filter-text');
    
    if (panel.classList.contains('show')) {
        panel.classList.remove('show');
        panel.classList.add('hidden');
        toggleBtn.classList.remove('active');
        toggleText.textContent = 'Filter anzeigen';
    } else {
        panel.classList.remove('hidden');
        panel.classList.add('show');
        toggleBtn.classList.add('active');
        toggleText.textContent = 'Filter ausblenden';
    }
}

function setFilter(filterType, value) {
    // Update active filter state
    activeFilters[filterType] = value;
    
    // Update UI - remove active class from all buttons of this type
    document.querySelectorAll(`[data-filter="${filterType}"]`).forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to selected button
    const selectedBtn = document.querySelector(`[data-filter="${filterType}"][data-value="${value}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
    
    // Apply filters
    applyFilters();
    
    // Update active filters display
    updateActiveFiltersDisplay();
}

function applyBestProvisionFilter() {
    // Set smart filter flag
    activeFilters.provision = 'best-smart';
    
    // Update UI
    document.querySelectorAll('[data-filter="provision"]').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mark best-provision button as active if exists
    const bestBtn = document.querySelector('.quick-filter-btn[onclick*="best-provision"]');
    if (bestBtn) {
        bestBtn.classList.add('active');
    }
    
    // Apply the smart filter
    applyFilters();
    
    // Update active filters display
    updateActiveFiltersDisplay();
}

function getBestProvisionTariffs() {
    if (currentCategory !== 'sim-only') {
        return allTariffs; // Only apply smart filtering to SIM-only
    }
    
    // Group tariffs by provider
    const providerGroups = {};
    
    allTariffs.forEach(tariff => {
        const provider = tariff.provider || getCurrentProvider();
        if (!providerGroups[provider]) {
            providerGroups[provider] = [];
        }
        providerGroups[provider].push(tariff);
    });
    
    // Get top 3-5 tariffs per provider, sorted by provision
    const bestTariffs = [];
    
    Object.keys(providerGroups).forEach(provider => {
        const providerTariffs = providerGroups[provider];
        
        // Sort by provision (highest first)
        const sortedTariffs = providerTariffs.sort((a, b) => {
            const provisionA = parseFloat(a.provision.replace(',', '.'));
            const provisionB = parseFloat(b.provision.replace(',', '.'));
            return provisionB - provisionA;
        });
        
        // Take top 3-5 tariffs depending on provider size
        const topCount = getTopTariffCount(provider, sortedTariffs.length);
        const topTariffs = sortedTariffs.slice(0, topCount);
        
        bestTariffs.push(...topTariffs);
    });
    
    // Sort all best tariffs by provision (global ranking)
    return bestTariffs.sort((a, b) => {
        const provisionA = parseFloat(a.provision.replace(',', '.'));
        const provisionB = parseFloat(b.provision.replace(',', '.'));
        return provisionB - provisionA;
    });
}

function getTopTariffCount(provider, totalTariffs) {
    // Define how many top tariffs to show per provider
    const providerLimits = {
        'freenet-o2': 5,      // Largest portfolio - show top 5
        'freenet-telekom': 5, // Large portfolio - show top 5
        'freenet-vodafone': 3, // Medium portfolio - show top 3
        'o2': 3,             // Medium portfolio - show top 3
        '1und1': 3,          // Medium portfolio - show top 3
        'yourfone': 2,       // Small portfolio - show top 2
        'ayildiz': 2         // Small portfolio - show top 2
    };
    
    const maxForProvider = providerLimits[provider] || 3;
    return Math.min(maxForProvider, totalTariffs);
}

function getCurrentProvider() {
    // Helper to get current provider context
    if (currentProvider === 'freenet' && currentFreenetProvider) {
        return 'freenet-' + currentFreenetProvider;
    }
    return currentProvider || 'unknown';
}

function quickFilter(type) {
    switch (type) {
        case 'best-provision':
            // Smart filter: Show only top tariffs per provider, sorted by provision
            applyBestProvisionFilter();
            break;
        case 'best-price':
            setFilter('price', '0-15');
            break;
        case 'unlimited':
            setFilter('data', 'unlimited');
            break;
    }
}

function clearAllFilters() {
    // Reset all filters
    activeFilters = {
        price: 'all',
        data: 'all',
        provision: 'all',
        consumption: 'all'
    };
    
    // Reset UI
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activate "all" buttons
    document.querySelectorAll('[data-value="all"]').forEach(btn => {
        btn.classList.add('active');
    });
    
    // Apply filters
    applyFilters();
    
    // Update display
    updateActiveFiltersDisplay();
}

function applyFilters() {
    if (allTariffs.length === 0) return;
    
    // Check if any filters are active
    const hasActiveFilters = Object.values(activeFilters).some(value => value !== 'all');
    
    if (!hasActiveFilters) {
        // No filters active - show all tariffs
        filteredTariffs = [...allTariffs];
    } else if (activeFilters.provision === 'best-smart') {
        // Best provision filter is active
        filteredTariffs = getBestProvisionTariffs();
    } else {
        // Other filters are active
        filteredTariffs = allTariffs.filter(tariff => {
            return matchesFilters(tariff);
        });
    }
    
    // Update tariff display
    updateTariffDisplay();
    
    // Update results count
    updateResultsCount();
}

function matchesFilters(tariff) {
    // Price filter
    if (activeFilters.price !== 'all') {
        if (!matchesPriceFilter(tariff, activeFilters.price)) return false;
    }
    
    // Data volume filter
    if (activeFilters.data !== 'all') {
        if (!matchesDataFilter(tariff, activeFilters.data)) return false;
    }
    
    // Provision filter
    if (activeFilters.provision !== 'all') {
        if (!matchesProvisionFilter(tariff, activeFilters.provision)) return false;
    }
    
    // Consumption filter (for Strom category)
    if (activeFilters.consumption !== 'all' && tariff.category === 'strom') {
        if (!matchesConsumptionFilter(tariff, activeFilters.consumption)) return false;
    }
    
    return true;
}

// ===== NEUES FILTER-SYSTEM =====

// Filter-Typen definieren
const FILTER_TYPES = {
    BEST_PROVISION: 'best-provision',
    BEST_PRICE: 'best-price', 
    HIGH_DATA: 'high-data',
    UNLIMITED: 'unlimited'
};

// Helper-Funktionen für Daten-Extraktion
function getNumericPrice(tariff) {
    // Handle complex price strings like "9,99 € (3 Mon.) dann 14,99" or "14,99"
    let priceStr = tariff.price;
    
    // Remove currency symbols and extra text, find all numbers with comma decimals
    const prices = priceStr.match(/(\d+,\d+|\d+\.\d+|\d+)/g);
    if (!prices || prices.length === 0) {
        return 999; // Return high value for unparseable prices
    }
    
    // If multiple prices, take the last one (regular price after promotion)
    let finalPrice = prices[prices.length - 1];
    
    // Handle both comma and dot decimals
    if (finalPrice.includes(',')) {
        finalPrice = finalPrice.replace(',', '.');
    }
    
    const result = parseFloat(finalPrice);
    return result || 999; // Return 999 if parsing fails
}

function getNumericProvision(tariff) {
    return parseFloat(tariff.provision.replace(',', '.'));
}

function getDataVolume(tariff) {
    // Extract GB amount from description
    const gbMatch = tariff.desc.match(/(\d+)\s*GB/i);
    if (gbMatch) {
        return parseInt(gbMatch[1]);
    }
    
    // Check for unlimited indicators
    if (tariff.desc.toLowerCase().includes('unlimited') || 
        tariff.desc.toLowerCase().includes('unlimitiert') ||
        tariff.desc.toLowerCase().includes('flat')) {
        return 999; // Special value for unlimited
    }
    
    return 0;
}

// Haupt-Sortier-Funktion (immer nach Provision sortieren)
function sortTariffsByProvision(tariffs, descending = true) {
    return [...tariffs].sort((a, b) => {
        const provisionA = getNumericProvision(a);
        const provisionB = getNumericProvision(b);
        return descending ? provisionB - provisionA : provisionA - provisionB;
    });
}

// Filter-Funktionen für spezielle Buttons
function getTopTariffsByProvision(tariffs, limit = 10) {
    const sorted = sortTariffsByProvision(tariffs, true); // Höchste zuerst
    return sorted.slice(0, limit);
}

function getTopTariffsByPrice(tariffs, limit = 10) {
    // Sortiere nach Preis: Niedrigster Preis zuerst (beste Preise oben)
    const sorted = [...tariffs].sort((a, b) => {
        const priceA = getNumericPrice(a);
        const priceB = getNumericPrice(b);
        return priceA - priceB; // Niedrigste zuerst = beste zuerst
    });
    return sorted.slice(0, limit);
}

function getTopHighDataTariffs(tariffs, limit = 10) {
    // Filter: Mindestens 51GB, dann sortiere nach Datenvolumen (höchstes zuerst)
    const highData = tariffs.filter(tariff => getDataVolume(tariff) >= 51);
    const sorted = [...highData].sort((a, b) => {
        const dataA = getDataVolume(a);
        const dataB = getDataVolume(b);
        return dataB - dataA; // Höchstes Datenvolumen zuerst
    });
    return sorted.slice(0, limit);
}

function getTopUnlimitedTariffs(tariffs, limit = 10) {
    // Filter: Unlimited/Flat Tarife, sortiere nach Preis (niedrigster zuerst)
    const unlimited = tariffs.filter(tariff => getDataVolume(tariff) >= 999);
    const sorted = [...unlimited].sort((a, b) => {
        const priceA = getNumericPrice(a);
        const priceB = getNumericPrice(b);
        return priceA - priceB; // Niedrigster Preis zuerst bei Unlimited
    });
    return sorted.slice(0, limit);
}

// Legacy-Funktionen für Kompatibilität (vereinfacht)
function matchesPriceFilter(tariff, filterValue) {
    return true; // Wird durch neues System ersetzt
}

function matchesDataFilter(tariff, filterValue) {
    return true; // Wird durch neues System ersetzt  
}

function matchesProvisionFilter(tariff, filterValue) {
    return true; // Wird durch neues System ersetzt
}

function extractNumericPrice(priceString) {
    // Handle complex price strings like "9,99 € (3 Mon.) dann 14,99"
    const prices = priceString.match(/(\d+,\d+|\d+)/g);
    if (!prices) return null;
    
    // Take the last price (final price after promotional period)
    const lastPrice = prices[prices.length - 1];
    return parseFloat(lastPrice.replace(',', '.'));
}

function extractDataVolume(description) {
    // Extract GB amount from description
    const gbMatch = description.match(/(\d+)\s*GB/i);
    if (gbMatch) {
        return parseInt(gbMatch[1]);
    }
    
    // Check for unlimited indicators
    if (description.toLowerCase().includes('unlimited') || 
        description.toLowerCase().includes('unlimitiert')) {
        return 999; // Special value for unlimited
    }
    
    return 0; // Default if no data volume found
}

function matchesConsumptionFilter(tariff, filterValue) {
    const name = tariff.name.toLowerCase();
    const desc = tariff.desc.toLowerCase();
    
    switch (filterValue) {
        case 'low': 
            return name.includes('niedrigverbrauch') || desc.includes('< 2.500');
        case 'standard': 
            return name.includes('standardverbrauch') || desc.includes('2.500 - 5.000');
        default: 
            return true;
    }
}

function updateTariffDisplay() {
    const container = document.getElementById('tariffs-' + currentCategory);
    if (!container) return;
    
    const allCards = container.querySelectorAll('.tariff-card');
    
    // Check if any filters are active (not 'all')
    const hasActiveFilters = Object.values(activeFilters).some(value => value !== 'all');
    
    if (!hasActiveFilters) {
        // No filters active - show all tariffs sorted by provision (default)
        const sortedByProvision = sortTariffsByProvision(allTariffs, true);
        
        // Re-create HTML with provision-sorted order
        container.innerHTML = sortedByProvision.map(tariff => createTariffCardHTML(tariff, currentCategory, currentProvider, false)).join('');
        
        const newCards = container.querySelectorAll('.tariff-card');
        newCards.forEach(card => {
            card.classList.remove('filtered-out');
            card.classList.add('filtered-in');
            card.classList.remove('highlight');
        });
        hideNoResults(container);
        return;
    }
    
    // Filters are active - apply filtering
    if (filteredTariffs.length === 0) {
        // Hide all cards if no results
        allCards.forEach(card => {
            card.classList.add('filtered-out');
            card.classList.remove('filtered-in', 'highlight');
        });
        showNoResults(container);
    } else {
        hideNoResults(container);
        
        // Re-create HTML with filtered and correctly sorted tariffs
        container.innerHTML = filteredTariffs.map(tariff => createTariffCardHTML(tariff, currentCategory, currentProvider, false)).join('');
        
        // Apply styles to new cards
        const newCards = container.querySelectorAll('.tariff-card');
        newCards.forEach((card, index) => {
            card.classList.remove('filtered-out');
            card.classList.add('filtered-in');
            
            // Add highlight animation with delay
            setTimeout(() => {
                card.classList.add('highlight');
                setTimeout(() => {
                    card.classList.remove('highlight');
                }, 2000);
            }, index * 100);
        });
    }
}

function showNoResults(container) {
    let noResultsDiv = container.querySelector('.no-results');
    if (!noResultsDiv) {
        noResultsDiv = document.createElement('div');
        noResultsDiv.className = 'no-results';
        noResultsDiv.innerHTML = `
            <div class="no-results-icon">
                <i class="fas fa-search"></i>
            </div>
            <h3>Keine Tarife gefunden</h3>
            <p>Mit den aktuellen Filtern wurden keine passenden Tarife gefunden. Versuchen Sie andere Filtereinstellungen.</p>
            <button onclick="clearAllFilters()">
                <i class="fas fa-refresh"></i>
                Filter zurücksetzen
            </button>
        `;
        container.appendChild(noResultsDiv);
    }
    noResultsDiv.style.display = 'block';
}

function hideNoResults(container) {
    const noResultsDiv = container.querySelector('.no-results');
    if (noResultsDiv) {
        noResultsDiv.style.display = 'none';
    }
}

function updateResultsCount() {
    const countElement = document.getElementById('filter-results-count');
    if (countElement) {
        const count = filteredTariffs.length;
        countElement.textContent = `${count} ${count === 1 ? 'Tarif' : 'Tarife'}`;
    }
}

function updateActiveFiltersDisplay() {
    const activeFiltersContainer = document.getElementById('active-filters');
    if (!activeFiltersContainer) return;
    
    activeFiltersContainer.innerHTML = '';
    
    Object.entries(activeFilters).forEach(([filterType, value]) => {
        if (value !== 'all') {
            const filterTag = createActiveFilterTag(filterType, value);
            activeFiltersContainer.appendChild(filterTag);
        }
    });
}

function createActiveFilterTag(filterType, value) {
    const tag = document.createElement('div');
    tag.className = 'active-filter-tag';
    
    const filterNames = {
        price: 'Preis',
        data: 'Daten',
        provision: 'Provision',
        consumption: 'Verbrauch'
    };
    
    const valueNames = {
        '0-15': '0-15€',
        '15-30': '15-30€',
        '30-50': '30-50€',
        '50+': '50€+',
        '5-20': '5-20 GB',
        '21-50': '21-50 GB',
        '51-150': '51-150 GB',
        'unlimited': 'Unlimited',
        '15-50': '15-50€',
        '51-100': '51-100€',
        '101-200': '101-200€',
        '200+': '200€+',
        'low': 'Niedrig',
        'standard': 'Standard'
    };
    
    tag.innerHTML = `
        ${filterNames[filterType]}: ${valueNames[value] || value}
        <button onclick="removeFilter('${filterType}')">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    return tag;
}

function removeFilter(filterType) {
    setFilter(filterType, 'all');
}

// Enhanced loadTariffs function with filter integration
function loadTariffsWithFilters(category, providerKey) {
    currentCategory = category;
    currentProvider = providerKey;
    
    const container = document.getElementById('tariffs-' + category);
    if (!container) return;

    const data = tariffData[category]?.[providerKey];
    if (data) {
        // Store all tariffs for filtering
        allTariffs = data.map(tariff => ({
            ...tariff,
            provider: providerKey,
            category: category
        }));
        
        // Keine automatische Sortierung - Filter bestimmen die Reihenfolge
        filteredTariffs = [...allTariffs];
        
        // Create HTML for all tariffs
        container.innerHTML = allTariffs.map(tariff => createTariffCardHTML(tariff, category, providerKey, false)).join('');
        
        // Apply filter display (this will show all tariffs if no filters are active)
        updateTariffDisplay();
        updateResultsCount();
        
        // Update provider title - keep it simple and generic
        const titleElement = document.getElementById('provider-title-' + category);
        if (titleElement) {
            if (category === 'sim-only') {
                titleElement.innerHTML = `<i class="fas fa-sim-card"></i> SIM Only Tarife`;
            } else if (category === 'strom') {
                titleElement.innerHTML = `<i class="fas fa-bolt"></i> Strom Tarife`;
            } else if (category === 'handy-tarif') {
                titleElement.innerHTML = `<i class="fas fa-mobile-alt"></i> Handy + Tarif`;
            }
        }
    } else {
        container.innerHTML = '<div class="coming-soon"><h3>Keine Tarife verfügbar</h3><p>Für diesen Anbieter sind aktuell keine Tarife verfügbar.</p></div>';
        allTariffs = [];
        filteredTariffs = [];
        updateResultsCount();
    }
}

// Debugging function to check tariff display
function debugTariffDisplay() {
    console.log('=== Tariff Debug Info ===');
    console.log('Current Category:', currentCategory);
    console.log('Current Provider:', currentProvider);
    console.log('Active Filters:', activeFilters);
    console.log('All Tariffs Count:', allTariffs.length);
    console.log('Filtered Tariffs Count:', filteredTariffs.length);
    
    const container = document.getElementById('tariffs-' + currentCategory);
    if (container) {
        const allCards = container.querySelectorAll('.tariff-card');
        const visibleCards = container.querySelectorAll('.tariff-card.filtered-in');
        const hiddenCards = container.querySelectorAll('.tariff-card.filtered-out');
        
        console.log('Total Cards:', allCards.length);
        console.log('Visible Cards:', visibleCards.length);
        console.log('Hidden Cards:', hiddenCards.length);
    }
    console.log('========================');
}

// Global function exports for onclick handlers
window.showCategory = showCategory;
window.showProvider = showProvider;
window.showFreenetProvider = showFreenetProvider;
window.selectTariff = selectTariff;
window.selectStromTariff = selectStromTariff;
window.showHandyCategories = showHandyCategories;
window.showHandyCategory = showHandyCategory;
window.selectHandyDevice = selectHandyDevice;
window.selectHandyStorage = selectHandyStorage;
window.selectHandyColor = selectHandyColor;
window.selectHandyTariff = selectHandyTariff;
window.backToHandyDevices = backToHandyDevices;
window.backToHandyStorage = backToHandyStorage;
window.backToHandyColors = backToHandyColors;
window.showCustomerType = showCustomerType;
window.toggleCrossSell = toggleCrossSell;
window.toggleCrossSellOption = toggleCrossSellOption;
window.debugTariffDisplay = debugTariffDisplay;
window.localQuickFilter = localQuickFilter;
window.globalQuickFilter = globalQuickFilter;

// Smartphone booking functions
window.selectPhoneCategory = selectPhoneCategory;
window.backToPhoneCategories = backToPhoneCategories;
window.selectPhoneModel = selectPhoneModel;
window.backToPhoneModels = backToPhoneModels;
window.selectPhoneStorage = selectPhoneStorage;
window.backToPhoneStorage = backToPhoneStorage;
window.selectPhoneColor = selectPhoneColor;
window.changeSelectedPhone = changeSelectedPhone;
window.toggleProviderSection = toggleProviderSection;
window.setGlobalFilter = setGlobalFilter;
window.performGlobalSearch = performGlobalSearch;

// === GLOBAL FILTERS AND DISPLAY FUNCTIONS ===

function clearGlobalFilters() {
    // Reset global filters
    globalFilters = {
        category: 'all',
        price: 'all', 
        data: 'all',
        provision: 'all'
    };
    
    // Reset UI
    document.querySelectorAll('#category-all .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activate "all" buttons
    document.querySelectorAll('#category-all [data-value="all"]').forEach(btn => {
        btn.classList.add('active');
    });
}

function applyGlobalFilters() {
    if (allGlobalTariffs.length === 0) return;
    
    // Check if any filters are active
    const hasActiveFilters = Object.values(globalFilters).some(value => value !== 'all');
    
    if (!hasActiveFilters) {
        // No filters active - show all tariffs
        filteredGlobalTariffs = [...allGlobalTariffs];
    } else {
        // Apply filters
        filteredGlobalTariffs = allGlobalTariffs.filter(tariff => {
            return matchesGlobalFilters(tariff);
        });
    }
}

function matchesGlobalFilters(tariff) {
    // Price filter
    if (globalFilters.price !== 'all') {
        if (!matchesPriceFilter(tariff, globalFilters.price)) return false;
    }
    
    // Data volume filter  
    if (globalFilters.data !== 'all') {
        if (!matchesDataFilter(tariff, globalFilters.data)) return false;
    }
    
    // Provision filter
    if (globalFilters.provision !== 'all') {
        if (!matchesProvisionFilter(tariff, globalFilters.provision)) return false;
    }
    
    return true;
}

function displayGlobalResults() {
    console.log('displayGlobalResults called');
    
    const container = document.getElementById('global-results-grid');
    if (!container) {
        console.error('Container global-results-grid not found!');
        return;
    }
    
    // Force load data if empty
    if (allGlobalTariffs.length === 0) {
        console.log('No global tariffs loaded, loading now...');
        loadAllGlobalTariffs();
    }
    
    if (filteredGlobalTariffs.length === 0) {
        console.log('No filtered tariffs available');
        container.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <i class="fas fa-info-circle" style="font-size: 48px; color: #ccc; margin-bottom: 16px;"></i>
                <h3>Keine Tariffe gefunden</h3>
                <p>Versuchen Sie andere Filtereinstellungen.</p>
                <p><small>Debug: ${allGlobalTariffs.length} Tariffe geladen</small></p>
            </div>
        `;
        return;
    }
    
    console.log('Displaying', filteredGlobalTariffs.length, 'tariffs');
    
    // Group tariffs by provider
    const groupedTariffs = {};
    filteredGlobalTariffs.forEach(tariff => {
        if (!groupedTariffs[tariff.provider]) {
            groupedTariffs[tariff.provider] = [];
        }
        groupedTariffs[tariff.provider].push(tariff);
    });
    
    // Generate collapsible sections for each provider
    let html = '';
    Object.entries(groupedTariffs).forEach(([providerKey, tariffs]) => {
        const providerName = getProviderDisplayName(providerKey);
        const tariffCount = tariffs.length;
        const providerClass = getProviderClass(providerKey);
        
        // Create tariff cards with 'all' category to show provider labels
        const tariffsHTML = tariffs.map(tariff => 
            createTariffCardHTML({...tariff, category: 'all'}, 'all', tariff.provider, false)
        ).join('');
        
        html += `
            <div class="provider-section">
                <div class="provider-header ${providerClass}" onclick="toggleProviderSection('${providerKey}')">
                    <div class="provider-info">
                        <i class="fas fa-chevron-down provider-toggle" id="toggle-${providerKey}"></i>
                        <span class="provider-name">${providerName}</span>
                        <span class="provider-count">(${tariffCount} ${tariffCount === 1 ? 'Tarif' : 'Tarife'})</span>
                    </div>
                </div>
                <div class="provider-tariffs" id="tariffs-${providerKey}">
                    <div class="tariffs-grid">
                        ${tariffsHTML}
                    </div>
                </div>
            </div>
        `;
    });
    
    console.log('Generated HTML length:', html.length);
    container.innerHTML = html;
    
    // Update count
    updateGlobalResultsCount();
}

function globalQuickFilter(type) {
    console.log('Global Quick Filter:', type, 'with', allGlobalTariffs.length, 'available tariffs');
    
    if (allGlobalTariffs.length === 0) {
        console.log('No global tariffs available! Loading...');
        loadAllGlobalTariffs();
        return;
    }
    
    let resultTariffs = [];
    
    switch (type) {
        case 'best-provision':
            resultTariffs = getTopTariffsByProvision(allGlobalTariffs, 10);
            break;
        case 'best-price':
            resultTariffs = getTopTariffsByPrice(allGlobalTariffs, 10);
            break;
        case 'high-data':
            resultTariffs = getTopHighDataTariffs(allGlobalTariffs, 10);
            break;
        case 'unlimited':
            resultTariffs = getTopUnlimitedTariffs(allGlobalTariffs, 10);
            break;
        default:
            resultTariffs = [...allGlobalTariffs];
    }
    
    // Set filtered results and display
    filteredGlobalTariffs = resultTariffs;
    displayGlobalResults();
    updateGlobalResultsCount();
}

function updateGlobalFilterUI() {
    // Update filter button states for global view
    Object.entries(globalFilters).forEach(([filterType, value]) => {
        // Reset all buttons for this filter type
        document.querySelectorAll(`#category-all [data-filter="${filterType}"]`).forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Activate the selected button
        const activeBtn = document.querySelector(`#category-all [data-filter="${filterType}"][data-value="${value}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    });
}

function toggleProviderSection(providerKey) {
    const tariffsSection = document.getElementById(`tariffs-${providerKey}`);
    const toggleIcon = document.getElementById(`toggle-${providerKey}`);
    
    if (!tariffsSection || !toggleIcon) return;
    
    if (tariffsSection.style.display === 'none') {
        tariffsSection.style.display = 'block';
        toggleIcon.style.transform = 'rotate(0deg)';
    } else {
        tariffsSection.style.display = 'none';
        toggleIcon.style.transform = 'rotate(-90deg)';
    }
}

function setGlobalFilter(filterType, value) {
    // Update global filter
    globalFilters[filterType] = value;
    
    // Update UI - reset all buttons for this filter type
    document.querySelectorAll(`[data-filter="${filterType}"]`).forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activate selected button
    const activeBtn = document.querySelector(`[data-filter="${filterType}"][data-value="${value}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Apply filters and update display
    applyGlobalFilters();
    displayGlobalResults();
    updateGlobalResultsCount();
}

function performGlobalSearch() {
    const searchInput = document.getElementById('global-search');
    if (!searchInput) return;
    
    searchQuery = searchInput.value.toLowerCase().trim();
    
    // Apply search filter to global tariffs
    if (searchQuery === '') {
        applyGlobalFilters();
    } else {
        const searchFiltered = allGlobalTariffs.filter(tariff => {
            return tariff.name.toLowerCase().includes(searchQuery) ||
                   tariff.desc.toLowerCase().includes(searchQuery) ||
                   getProviderDisplayName(tariff.provider).toLowerCase().includes(searchQuery);
        });
        
        // Then apply other filters to search results
        filteredGlobalTariffs = searchFiltered.filter(tariff => matchesGlobalFilters(tariff));
    }
    
    displayGlobalResults();
    updateGlobalResultsCount();
}

function updateGlobalResultsCount() {
    const countElement = document.getElementById('global-results-count');
    if (countElement) {
        countElement.textContent = `${filteredGlobalTariffs.length} Tarife`;
    }
}

// Helper functions for provider display
function getProviderDisplayName(providerKey) {
    // Handle composite provider keys (e.g. freenet-o2, klarmobil-vodafone)
    const providerNames = {
        'o2': 'O2',
        'freenet-o2': 'Freenet O2',
        'freenet-telekom': 'Freenet Telekom', 
        'freenet-vodafone': 'Freenet Vodafone',
        'vodafone': 'Vodafone',
        'telekom': 'Telekom',
        'ayildiz': 'Ay Yildiz',
        '1und1': '1&1',
        'yourfone': 'Yourfone',
        'klarmobil-vodafone': 'Klarmobil Vodafone',
        'klarmobil-o2': 'Klarmobil O2',
        'klarmobil-telekom': 'Klarmobil Telekom'
    };
    return providerNames[providerKey] || providerKey;
}

function getProviderClass(providerKey) {
    // Return the CSS class name for the provider
    // Map composite keys to their main provider color
    const providerClasses = {
        'o2': 'o2',
        'freenet-o2': 'freenet',
        'freenet-telekom': 'freenet',
        'freenet-vodafone': 'freenet',
        'vodafone': 'vodafone',
        'telekom': 'telekom',
        'ayildiz': 'ayildiz',
        '1und1': 'ondeone',
        'yourfone': 'yourfone',
        'klarmobil-vodafone': 'klarmobil',  // Use Klarmobil's own color
        'klarmobil-o2': 'klarmobil',        // Use Klarmobil's own color
        'klarmobil-telekom': 'klarmobil'    // Use Klarmobil's own color
    };
    return providerClasses[providerKey] || 'o2'; // Default to O2 color
}

// Clean grouped list for "Alle Tariffe" - with provider headers
function showAllTariffsContent() {
    const container = document.getElementById('global-results-grid');
    if (!container) return;
    
    // Remove any existing grid classes and reset
    container.className = 'provider-groups-container';
    
    let html = '';
    let totalTariffs = 0;
    
    // Go through each SIM-only provider and create sections
    Object.entries(tariffData['sim-only']).forEach(([providerKey, tariffs]) => {
        const providerName = getProviderDisplayName(providerKey);
        const providerClass = getProviderClass(providerKey);
        totalTariffs += tariffs.length;
        
        // Create tariff cards for this provider (maintain original order)
        const tariffsHtml = tariffs.map((tariff, index) => {
            const tariffId = tariff.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            
            return `
                <div class="simple-tariff-card" onclick="selectTariff('all', '${tariffId}', '${tariff.price}', '${tariff.provision}')">
                    <h3 class="card-title">${cleanTariffName(tariff.name)}</h3>
                    <p class="card-desc">${tariff.desc}</p>
                    <div class="card-pricing">
                        <div class="customer-price">
                            <span class="price-label">Kunde zahlt</span>
                            <span class="price-value">${tariff.price}€<span class="price-period">/Monat</span></span>
                        </div>
                        <div class="provision-badge">
                            <i class="fas fa-euro-sign"></i>
                            <span>${tariff.provision}€</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Create provider section
        html += `
            <div class="provider-group">
                <h3 class="provider-header-simple ${providerClass}">${providerName}</h3>
                <div class="provider-tariffs-grid">
                    ${tariffsHtml}
                </div>
            </div>
        `;
    });
    
    // Go through Internet providers and create sections
    Object.entries(tariffData['internet']).forEach(([providerKey, tariffs]) => {
        const providerName = getProviderDisplayName(providerKey);
        const providerClass = getProviderClass(providerKey);
        totalTariffs += tariffs.length;
        
        // Create internet tariff cards with special pricing display
        const tariffsHtml = tariffs.map((tariff, index) => {
            const tariffId = tariff.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            const typeClass = tariff.type.toLowerCase();
            const typeIcon = tariff.type === 'Glasfaser' ? 'fas fa-bolt' : 'fas fa-ethernet';
            
            return `
                <div class="simple-tariff-card internet-card" onclick="selectInternetTariff('${tariffId}', '${tariff.name}', '${tariff.price}', '${tariff.normalPrice}', '${tariff.provision}')">
                    <div class="card-badge ${typeClass}">
                        <i class="${typeIcon}"></i>
                        ${tariff.type}
                    </div>
                    <h3 class="card-title">${cleanTariffName(tariff.name)}</h3>
                    <p class="card-desc">${tariff.desc}</p>
                    <div class="card-pricing internet-pricing">
                        <div class="customer-price">
                            <span class="price-label">Aktion (1.-10. Monat)</span>
                            <span class="price-value">${tariff.price}€<span class="price-period">/Monat</span></span>
                            <span class="normal-price">danach ${tariff.normalPrice}€/Monat</span>
                        </div>
                        <div class="provision-badge">
                            <i class="fas fa-euro-sign"></i>
                            <span>${tariff.provision}€</span>
                        </div>
                    </div>
                    <div class="setup-fee">
                        <i class="fas fa-tools"></i>
                        Einmalig: ${tariff.setupFee}€ (Router inklusive)
                    </div>
                </div>
            `;
        }).join('');
        
        // Create provider section
        html += `
            <div class="provider-group">
                <h3 class="provider-header-simple ${providerClass}">${providerName} Internet</h3>
                <div class="provider-tariffs-grid">
                    ${tariffsHtml}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Update count
    const countElement = document.getElementById('global-results-count');
    if (countElement) {
        countElement.textContent = `${totalTariffs} Tarife`;
    }
}

// Smartphone Booking Functions
function shouldShowSmartphoneBooking() {
    // Show smartphone booking ONLY for specific providers: ayildiz, freenet, klarmobil
    if (!selectedTariffData.tariff) return false;
    
    // Check if current provider is one of the supported ones
    if (currentProvider === 'ayildiz') {
        return true;
    }
    
    if (currentProvider && (currentProvider.startsWith('freenet-') || currentProvider.startsWith('klarmobil-'))) {
        return true;
    }
    
    // For sim-only category, check if it's from supported providers
    if (selectedTariffData.category === 'sim-only') {
        return currentProvider === 'ayildiz' || 
               (currentProvider && (currentProvider.startsWith('freenet-') || currentProvider.startsWith('klarmobil-')));
    }
    
    // NEW: Für "diese-woche" (Highlights) und "neue-tariffe" (Neu) - prüfe ob es Freenet/Klarmobil/Ayildiz ist
    if (selectedTariffData.category === 'diese-woche' || selectedTariffData.category === 'neue-tariffe') {
        const tariffId = selectedTariffData.tariff;
        
        // Prüfe ob es ein Freenet, Klarmobil oder Ayildiz Tariff ist
        if (tariffId.includes('freenet-') || 
            tariffId.includes('klarmobil-') || 
            tariffId.includes('ayildiz') ||
            tariffId.includes('geburtstagsaktion') ||
            tariffId.includes('o2-unlimited-max')) {  // Spezialfall für Freenet O2 Unlimited Max
            return true;
        }
    }
    
    return false;
}

// Smartphone Highlight Selection
function selectSmartphoneHighlight(provider, deviceModel, tariffName, tariffDesc, basePrice, provision) {
    // Store smartphone highlight data
    window.smartphoneHighlightData = {
        provider: provider,
        deviceModel: deviceModel,
        tariffName: tariffName,
        tariffDesc: tariffDesc,
        basePrice: parseFloat(basePrice),
        provision: provision
    };
    
    // Show smartphone configuration modal
    showSmartphoneConfigModal();
}

function showSmartphoneConfigModal() {
    const data = window.smartphoneHighlightData;
    
    // Create modal HTML
    const modalHTML = `
        <div id="smartphone-config-modal" class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${data.deviceModel} + ${data.provider.toUpperCase()} ${data.tariffName}</h3>
                    <button onclick="closeSmartphoneConfigModal()" class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="config-section">
                        <h4>Farbe wählen:</h4>
                        <div class="color-options">
                            <label><input type="radio" name="color" value="Schwarz" checked> Schwarz</label>
                            <label><input type="radio" name="color" value="Weiß"> Weiß</label>
                            <label><input type="radio" name="color" value="Blau"> Blau</label>
                            <label><input type="radio" name="color" value="Rosa"> Rosa</label>
                        </div>
                    </div>
                    
                    <div class="config-section">
                        <h4>Speicher wählen:</h4>
                        <div class="storage-options">
                            <label><input type="radio" name="storage" value="128" data-price="0" checked> 128 GB (+0€)</label>
                            <label><input type="radio" name="storage" value="256" data-price="5"> 256 GB (+5€/Monat)</label>
                            <label><input type="radio" name="storage" value="512" data-price="10"> 512 GB (+10€/Monat)</label>
                        </div>
                    </div>
                    
                    <div class="price-summary">
                        <div class="base-price">Grundpreis: ${data.basePrice}€/Monat</div>
                        <div class="total-price">Gesamtpreis: <span id="total-price">${data.basePrice}€/Monat</span></div>
                        <div class="provision-info">Provision: ${data.provision}€</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button onclick="confirmSmartphoneSelection()" class="btn-primary">Zur Kundenübersicht</button>
                    <button onclick="closeSmartphoneConfigModal()" class="btn-secondary">Abbrechen</button>
                </div>
            </div>
        </div>
    `;
    
    // Insert modal into page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listeners for price calculation
    document.querySelectorAll('input[name="storage"]').forEach(input => {
        input.addEventListener('change', updateSmartphonePrice);
    });
}

function updateSmartphonePrice() {
    const data = window.smartphoneHighlightData;
    const storagePrice = parseFloat(document.querySelector('input[name="storage"]:checked').dataset.price);
    const totalPrice = data.basePrice + storagePrice;
    document.getElementById('total-price').textContent = `${totalPrice}€/Monat`;
}

function confirmSmartphoneSelection() {
    const data = window.smartphoneHighlightData;
    const color = document.querySelector('input[name="color"]:checked').value;
    const storage = document.querySelector('input[name="storage"]:checked').value;
    const storagePrice = parseFloat(document.querySelector('input[name="storage"]:checked').dataset.price);
    const totalPrice = data.basePrice + storagePrice;
    
    // Create tariff name with selected options
    const fullTariffName = `${data.deviceModel} ${storage}GB ${color} + ${data.provider.toUpperCase()} ${data.tariffName}`;
    
    // Close modal
    closeSmartphoneConfigModal();
    
    // Select tariff with final configuration
    selectTariff('diese-woche', fullTariffName.toLowerCase().replace(/\s+/g, '-'), totalPrice.toString(), data.provision);
}

function closeSmartphoneConfigModal() {
    const modal = document.getElementById('smartphone-config-modal');
    if (modal) {
        modal.remove();
    }
}

function resetPhoneSelection() {
    selectedPhoneData = {};
    phoneSelectionStep = 'category';
}

function resetSmartphoneBookingUI() {
    // Hide all selection steps
    document.getElementById('phone-model-selection')?.classList.add('hidden');
    document.getElementById('phone-storage-selection')?.classList.add('hidden');
    document.getElementById('phone-color-selection')?.classList.add('hidden');
    document.getElementById('selected-phone-summary')?.classList.add('hidden');
    
    // Show category selection
    document.getElementById('phone-category-selection')?.classList.remove('hidden');
    
    phoneSelectionStep = 'category';
}

function selectPhoneCategory(category) {
    selectedPhoneData.category = category;
    phoneSelectionStep = 'model';
    
    // Hide category selection, show model selection
    document.getElementById('phone-category-selection').classList.add('hidden');
    document.getElementById('phone-model-selection').classList.remove('hidden');
    
    // Update title
    document.getElementById('phone-category-title').textContent = `${category} Modell auswählen`;
    
    // Load phone models
    loadPhoneModels(category);
}

function loadPhoneModels(category) {
    const phones = handyData[currentPhoneProvider]?.[category] || [];
    const grid = document.getElementById('phone-models-grid');
    
    grid.innerHTML = phones.map(phone => `
        <div class="phone-model-card" onclick="selectPhoneModel('${phone.name}')">
            <h5>${phone.name}</h5>
            <p>${phone.storage.join(', ')} verfügbar</p>
            ${phone.badge ? `<span class="phone-badge">${phone.badge}</span>` : ''}
        </div>
    `).join('');
}

function backToPhoneCategories() {
    document.getElementById('phone-model-selection').classList.add('hidden');
    document.getElementById('phone-category-selection').classList.remove('hidden');
    phoneSelectionStep = 'category';
    selectedPhoneData = {};
}

function selectPhoneModel(modelName) {
    selectedPhoneData.model = modelName;
    phoneSelectionStep = 'storage';
    
    const category = selectedPhoneData.category;
    const phone = handyData[currentPhoneProvider]?.[category]?.find(p => p.name === modelName);
    selectedPhoneData.phoneObject = phone;
    
    // Hide model selection, show storage selection
    document.getElementById('phone-model-selection').classList.add('hidden');
    document.getElementById('phone-storage-selection').classList.remove('hidden');
    
    // Update title
    document.getElementById('phone-storage-title').textContent = `${modelName} - Speicher auswählen`;
    
    // Load storage options
    loadStorageOptions(phone);
}

function loadStorageOptions(phone) {
    const grid = document.getElementById('phone-storage-grid');
    
    grid.innerHTML = phone.storage.map((storage, index) => {
        const price = getPhonePrice(phone, index);
        return `
            <div class="storage-option" onclick="selectPhoneStorage('${storage}', ${index})">
                <div class="storage-size">${storage}</div>
                <div class="storage-price">+${price.toFixed(2)}€/Monat</div>
            </div>
        `;
    }).join('');
}

function getPhonePrice(phone, storageIndex) {
    if (!phone.storagePrice || !phone.storagePrice[storageIndex]) {
        return 0;
    }
    
    const priceData = phone.storagePrice[storageIndex];
    
    // Handle different price formats
    if (Array.isArray(priceData)) {
        // Use first price if it's an array (legacy format)
        return parseFloat(priceData[0]) || 0;
    }
    
    // Handle simple number format (current format)
    return parseFloat(priceData) || 0;
}

function backToPhoneModels() {
    document.getElementById('phone-storage-selection').classList.add('hidden');
    document.getElementById('phone-model-selection').classList.remove('hidden');
    phoneSelectionStep = 'model';
    delete selectedPhoneData.storage;
    delete selectedPhoneData.storageIndex;
}

function selectPhoneStorage(storage, storageIndex) {
    selectedPhoneData.storage = storage;
    selectedPhoneData.storageIndex = storageIndex;
    phoneSelectionStep = 'color';
    
    // Hide storage selection, show color selection
    document.getElementById('phone-storage-selection').classList.add('hidden');
    document.getElementById('phone-color-selection').classList.remove('hidden');
    
    // Update title
    document.getElementById('phone-color-title').textContent = `${selectedPhoneData.model} ${storage} - Farbe auswählen`;
    
    // Load color options
    loadColorOptions();
}

function loadColorOptions() {
    const phone = selectedPhoneData.phoneObject;
    const grid = document.getElementById('phone-colors-grid');
    
    grid.innerHTML = phone.colors.map(color => `
        <div class="color-option" onclick="selectPhoneColor('${color}')">
            <div class="color-name">${color}</div>
        </div>
    `).join('');
}

function backToPhoneStorage() {
    document.getElementById('phone-color-selection').classList.add('hidden');
    document.getElementById('phone-storage-selection').classList.remove('hidden');
    phoneSelectionStep = 'storage';
    delete selectedPhoneData.color;
}

function selectPhoneColor(color) {
    selectedPhoneData.color = color;
    phoneSelectionStep = 'complete';
    
    // Hide color selection, show summary
    document.getElementById('phone-color-selection').classList.add('hidden');
    document.getElementById('selected-phone-summary').classList.remove('hidden');
    
    // Update summary
    updatePhoneSummary();
    
    // Update cost overview with phone price
    updateCostOverview();
}

function updatePhoneSummary() {
    const phone = selectedPhoneData.phoneObject;
    const price = getPhonePrice(phone, selectedPhoneData.storageIndex);
    
    document.getElementById('selected-phone-name').textContent = selectedPhoneData.model;
    document.getElementById('selected-phone-details').textContent = 
        `${selectedPhoneData.storage}, ${selectedPhoneData.color}`;
    document.getElementById('selected-phone-price').textContent = 
        `+${price.toFixed(2).replace('.', ',')}€/Monat`;
}

function changeSelectedPhone() {
    // Reset to category selection
    resetSmartphoneBookingUI();
    selectedPhoneData = {};
    
    // Update cost overview without phone
    updateCostOverview();
}

// Initialize the page on load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Partner Tool initialized');
    
    // Load O2 tariffs by default for SIM-Only category
    if (document.getElementById('category-sim-only') && !document.getElementById('category-sim-only').classList.contains('hidden')) {
        showProvider('sim-only', 'o2');
        console.log('Auto-loaded O2 tariffs on page load');
    }
});

// Global Filter Functions
function setGlobalFilter(filterType, value) {
    // Update global filter state
    globalFilters[filterType] = value;
    
    // Update UI - remove active class from all buttons of this type
    document.querySelectorAll(`[data-filter="${filterType}"]`).forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to selected button
    const selectedBtn = document.querySelector(`[data-filter="${filterType}"][data-value="${value}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
    
    // Apply global filters
    applyGlobalFilters();
    
    // Update active filters display
    updateGlobalActiveFiltersDisplay();
    
    // Update quick filter buttons
    updateQuickFilterButtons();
}

function performGlobalSearch() {
    const searchInput = document.getElementById('global-search');
    searchQuery = searchInput ? searchInput.value.toLowerCase() : '';
    
    applyGlobalFilters();
}

// ===== NEUE FILTER-FUNKTIONEN =====

// Globale Quick-Filter (für "Alle Tarife" Ansicht)
function globalQuickFilter(type) {
    console.log('Global Quick Filter:', type);
    
    // Filter zurücksetzen
    clearGlobalFilters();
    
    // Alle verfügbaren Tarife aus allGlobalTariffs nehmen
    let resultTariffs = [];
    
    switch (type) {
        case 'best-provision':
            resultTariffs = getTopTariffsByProvision(allGlobalTariffs, 10);
            console.log('Top 10 by provision:', resultTariffs.length);
            break;
        case 'best-price':
            resultTariffs = getTopTariffsByPrice(allGlobalTariffs, 10);
            console.log('Top 10 by price:', resultTariffs.length);
            break;
        case 'high-data':
            resultTariffs = getTopHighDataTariffs(allGlobalTariffs, 10);
            console.log('Top 10 high data:', resultTariffs.length);
            break;
        case 'unlimited':
            resultTariffs = getTopUnlimitedTariffs(allGlobalTariffs, 10);
            console.log('Top 10 unlimited:', resultTariffs.length);
            break;
    }
    
    // Ergebnisse setzen und anzeigen
    filteredGlobalTariffs = resultTariffs;
    displayGlobalResults();
    updateGlobalResultsCount();
    
    // Update visueller Zustand der Quick-Filter Buttons
    updateQuickFilterButtons(type);
}

// Lokale Quick-Filter (für einzelne Provider wie O2, Freenet etc.)
function localQuickFilter(type) {
    console.log('Local Quick Filter:', type, 'with', allTariffs.length, 'available tariffs');
    console.log('DEBUG: allTariffs sample:', allTariffs.slice(0, 3).map(t => t.name));
    
    if (allTariffs.length === 0) {
        console.log('ERROR: No allTariffs available! Try selecting a provider first.');
        return;
    }
    
    let resultTariffs = [];
    
    switch (type) {
        case 'best-provision':
            resultTariffs = getTopTariffsByProvision(allTariffs, 10);
            activeFilters = { category: 'best-provision' }; // Set active filter state
            break;
        case 'best-price':
            resultTariffs = getTopTariffsByPrice(allTariffs, 10);
            activeFilters = { category: 'best-price' }; // Set active filter state
            break;
        case 'high-data':
            resultTariffs = getTopHighDataTariffs(allTariffs, 10);
            activeFilters = { category: 'high-data' }; // Set active filter state
            break;
        case 'unlimited':
            resultTariffs = getTopUnlimitedTariffs(allTariffs, 10);
            activeFilters = { category: 'unlimited' }; // Set active filter state
            break;
        default:
        case 'all':
            // Keine Filter - alle anzeigen (sortiert nach Provision)
            resultTariffs = sortTariffsByProvision(allTariffs, true);
            activeFilters = { category: 'all' }; // Reset filter state
    }
    
    // Ergebnisse setzen und anzeigen
    filteredTariffs = resultTariffs;
    
    console.log('Filtering result:', {
        type: type,
        resultCount: filteredTariffs.length,
        activeFilters: activeFilters,
        sampleTariffs: filteredTariffs.slice(0, 3).map(t => t.name)
    });
    
    updateTariffDisplay();
    updateResultsCount();
    
    // Update provider quick filter button states
    updateProviderQuickFilterButtons(type);
}

function updateProviderQuickFilterButtons(activeType) {
    // Reset all provider quick filter buttons
    document.querySelectorAll('.provider-quick-btn, .provider-reset-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Set active button based on type
    if (activeType !== 'all') {
        const filterTypeMapping = {
            'best-provision': 'best-provision',
            'best-price': 'best-price', 
            'high-data': 'high-data',
            'unlimited': 'unlimited'
        };
        
        const mappedType = filterTypeMapping[activeType];
        if (mappedType) {
            const activeBtn = document.querySelector(`[onclick="localQuickFilter('${mappedType}')"]`);
            if (activeBtn) {
                activeBtn.classList.add('active');
            }
        }
    } else {
        // 'all' case - activate reset button
        const resetBtn = document.querySelector(`[onclick="localQuickFilter('all')"]`);
        if (resetBtn) {
            resetBtn.classList.add('active');
        }
    }
}

function updateQuickFilterButtons(activeType) {
    // Alle Quick-Filter Buttons zurücksetzen
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Aktiven Button markieren basierend auf aktuellen Filtern
    const quickFilterMappings = {
        'best-provision': () => globalFilters.provision === '200+',
        'best-price': () => globalFilters.price === '0-15',
        'high-data': () => globalFilters.data === '51-150',
        'unlimited': () => globalFilters.data === 'unlimited'
    };
    
    // Überprüfen welcher Quick-Filter aktiv ist
    Object.entries(quickFilterMappings).forEach(([type, checkFn]) => {
        if (checkFn()) {
            const btn = document.querySelector(`[onclick="globalQuickFilter('${type}')"]`);
            if (btn) btn.classList.add('active');
        }
    });
}

function clearGlobalFilters() {
    // Reset all global filters
    globalFilters = {
        category: 'all',
        price: 'all',
        data: 'all',
        provision: 'all'
    };
    
    searchQuery = '';
    
    // Reset search input
    const searchInput = document.getElementById('global-search');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Reset UI - Chips
    document.querySelectorAll('.chip').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activate "all" chips  
    document.querySelectorAll('[data-value="all"]').forEach(btn => {
        btn.classList.add('active');
    });
    
    // Reset Quick-Filter buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Apply filters
    applyGlobalFilters();
    
    // Update display
    updateGlobalActiveFiltersDisplay();
}

function applyGlobalFilters() {
    if (allGlobalTariffs.length === 0) return;
    
    // Erst nach Suchbegriff filtern
    let searchFiltered = allGlobalTariffs.filter(tariff => matchesSearchQuery(tariff));
    
    // Dann nach Chip-Filtern filtern  
    filteredGlobalTariffs = searchFiltered.filter(tariff => {
        return matchesGlobalFilters(tariff);
    });
    
    // WICHTIG: Immer nach Provision sortieren (höchste zuerst)
    filteredGlobalTariffs = sortTariffsByProvision(filteredGlobalTariffs, true);
    
    // Display filtered results
    displayGlobalResults();
    
    // Update results count
    updateGlobalResultsCount();
}

function matchesGlobalFilters(tariff) {
    // Category filter (SIM-Only focus)
    if (globalFilters.category !== 'all') {
        if (tariff.category !== globalFilters.category) return false;
    }
    
    // Price filter - NEUE IMPLEMENTIERUNG
    if (globalFilters.price !== 'all') {
        const price = getNumericPrice(tariff);
        switch (globalFilters.price) {
            case '0-15': 
                if (price > 15) return false;
                break;
            case '15-30': 
                if (price <= 15 || price > 30) return false;
                break;
            case '30+': 
                if (price <= 30) return false;
                break;
        }
    }
    
    // Data filter - NEU HINZUGEFÜGT
    if (globalFilters.data !== 'all') {
        const dataGB = getDataVolume(tariff);
        switch (globalFilters.data) {
            case '5-20': 
                if (dataGB < 5 || dataGB > 20) return false;
                break;
            case '21-50': 
                if (dataGB < 21 || dataGB > 50) return false;
                break;
            case '51+': 
                if (dataGB < 51 && dataGB < 999) return false; // 51GB+ oder Unlimited
                break;
            case 'unlimited': 
                if (dataGB < 999) return false; // Nur Unlimited/Flat
                break;
        }
    }
    
    // Provision filter - NEUE IMPLEMENTIERUNG
    if (globalFilters.provision !== 'all') {
        const provision = getNumericProvision(tariff);
        switch (globalFilters.provision) {
            case '50+': 
                if (provision < 50) return false;
                break;
            case '100+': 
                if (provision < 100) return false;
                break;
            case '200+': 
                if (provision < 200) return false;
                break;
        }
    }
    
    return true;
}

function matchesSearchQuery(tariff) {
    if (!searchQuery) return true;
    
    const searchFields = [
        tariff.name,
        tariff.desc,
        tariff.provider,
        tariff.categoryName
    ].join(' ').toLowerCase();
    
    return searchFields.includes(searchQuery);
}

function displayGlobalResults() {
    const container = document.getElementById('global-results-grid');
    if (!container) return;
    
    if (filteredGlobalTariffs.length === 0) {
        showGlobalEmptyState(container);
    } else {
        hideGlobalEmptyState(container);
        container.innerHTML = filteredGlobalTariffs.map(tariff => createGlobalTariffCard(tariff)).join('');
        
        // Add event listeners to all tariff cards
        const tariffCards = container.querySelectorAll('.global-tariff-card');
        tariffCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.dataset.category;
                const name = this.dataset.name;
                const price = this.dataset.price;
                const provision = this.dataset.provision;
                
                console.log('Tariff clicked:', category, name, price, provision);
                selectGlobalTariff(category, name, price, provision);
            });
        });
    }
}

function createGlobalTariffCard(tariff) {
    const providerClass = getProviderClass(tariff.provider);
    const providerName = getGlobalProviderName(tariff.provider);
    
    return `
        <div class="global-tariff-card" data-category="${tariff.category}" data-name="${tariff.name}" data-price="${tariff.price}" data-provision="${tariff.provision}">
            <div class="provider-info">
                <div class="provider-badge ${providerClass}">${providerName}</div>
            </div>
            
            <h3 class="tariff-name">${cleanTariffName(tariff.name)}</h3>
            <p class="tariff-description">${tariff.desc}</p>
            
            <div class="tariff-footer">
                <div class="price-info">
                    <span class="price-label">${tariff.category === 'strom' ? 'Angebot' : 'Monatlich'}</span>
                    <span class="price-value">${tariff.category === 'strom' ? tariff.price : tariff.price + '€'}</span>
                </div>
                <div class="provision-info">
                    <i class="fas fa-euro-sign"></i>
                    <span>${tariff.provision}€</span>
                </div>
            </div>
        </div>
    `;
}

function getGlobalProviderName(provider) {
    const providerNames = {
        'o2': 'O2',
        'freenet-o2': 'Freenet O2',
        'freenet-vodafone': 'Freenet Vodafone',
        'freenet-telekom': 'Freenet Telekom',
        'ayildiz': 'Ay Yildiz',
        '1und1': '1&1',
        'yourfone': 'Yourfone',
        'privatkunde': 'Privat',
        'gewerbekunde': 'Gewerbe'
    };
    return providerNames[provider] || provider;
}

function selectGlobalTariff(category, tariffName, price, provision) {
    console.log('selectGlobalTariff called:', category, tariffName, price, provision);
    
    // Store tariff data
    selectedTariffData = { 
        category: category, 
        tariff: tariffName, 
        price: price, 
        provision: provision 
    };
    baseProvision = parseFloat(provision.replace(',', '.'));
    
    // Show customer form directly
    const customerForm = document.getElementById('customer-form');
    const customerFormStrom = document.getElementById('customer-form-strom');
    
    // Hide all forms first
    if (customerForm) customerForm.classList.add('hidden');
    if (customerFormStrom) customerFormStrom.classList.add('hidden');
    
    if (category === 'strom') {
        if (customerFormStrom) {
            customerFormStrom.classList.remove('hidden');
            updateSelectedTariffInfoStrom();
            updateCostOverviewStrom();
            customerFormStrom.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        if (customerForm) {
            customerForm.classList.remove('hidden');
            updateSelectedTariffInfo();
            updateCostOverview();
            customerForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

function showGlobalEmptyState(container) {
    let emptyStateDiv = container.querySelector('.global-empty-state');
    if (!emptyStateDiv) {
        emptyStateDiv = document.createElement('div');
        emptyStateDiv.className = 'global-empty-state';
        emptyStateDiv.innerHTML = `
            <div class="global-empty-state-icon">
                <i class="fas fa-search"></i>
            </div>
            <h3>Keine Tarife gefunden</h3>
            <p>Mit den aktuellen Filtern wurden keine passenden Tarife gefunden. Versuchen Sie andere Filtereinstellungen oder löschen Sie die Suche.</p>
            <button class="quick-action-btn" onclick="clearGlobalFilters()">
                <i class="fas fa-refresh"></i>
                Filter zurücksetzen
            </button>
        `;
        container.appendChild(emptyStateDiv);
    }
    emptyStateDiv.style.display = 'block';
}

function hideGlobalEmptyState(container) {
    const emptyStateDiv = container.querySelector('.global-empty-state');
    if (emptyStateDiv) {
        emptyStateDiv.style.display = 'none';
    }
}

function updateGlobalResultsCount() {
    const countElement = document.getElementById('global-results-count');
    if (countElement) {
        const count = filteredGlobalTariffs.length;
        countElement.textContent = `${count} ${count === 1 ? 'Tarif' : 'Tarife'}`;
    }
}

function updateGlobalActiveFiltersDisplay() {
    const activeFiltersContainer = document.getElementById('active-global-filters');
    if (!activeFiltersContainer) return;
    
    activeFiltersContainer.innerHTML = '';
    
    // Add search query as filter tag
    if (searchQuery) {
        const searchTag = createGlobalActiveFilterTag('search', searchQuery);
        activeFiltersContainer.appendChild(searchTag);
    }
    
    // Add other filters
    Object.entries(globalFilters).forEach(([filterType, value]) => {
        if (value !== 'all') {
            const filterTag = createGlobalActiveFilterTag(filterType, value);
            activeFiltersContainer.appendChild(filterTag);
        }
    });
}

function createGlobalActiveFilterTag(filterType, value) {
    const tag = document.createElement('div');
    tag.className = 'filter-tag';
    
    const filterNames = {
        category: 'Kategorie',
        price: 'Preis',
        data: 'Daten',
        provision: 'Provision',
        search: 'Suche'
    };
    
    const valueNames = {
        'sim-only': 'SIM Only',
        'strom': 'Strom',
        '0-15': '0-15€',
        '15-30': '15-30€',
        '30-50': '30-50€',
        '50+': '50€+',
        '5-20': '5-20 GB',
        '21-50': '21-50 GB',
        '51-150': '51-150 GB',
        'unlimited': 'Unlimited',
        '15-50': '15-50€',
        '51-100': '51-100€',
        '101-200': '101-200€',
        '200+': '200€+'
    };
    
    const displayValue = filterType === 'search' ? `"${value}"` : (valueNames[value] || value);
    
    tag.innerHTML = `
        ${filterNames[filterType]}: ${displayValue}
        <span class="remove" onclick="removeGlobalFilter('${filterType}')">
            <i class="fas fa-times"></i>
        </span>
    `;
    
    return tag;
}

function removeGlobalFilter(filterType) {
    if (filterType === 'search') {
        const searchInput = document.getElementById('global-search');
        if (searchInput) {
            searchInput.value = '';
        }
        performGlobalSearch();
    } else {
        setGlobalFilter(filterType, 'all');
    }
}

// Filter function exports
window.toggleFilters = toggleFilters;
window.setFilter = setFilter;
window.quickFilter = quickFilter;
window.clearAllFilters = clearAllFilters;
window.removeFilter = removeFilter;

// Provider utility functions
window.getProviderDisplayName = getProviderDisplayName;

// Global filter function exports
window.setGlobalFilter = setGlobalFilter;
window.performGlobalSearch = performGlobalSearch;
window.globalQuickFilter = globalQuickFilter;
window.clearGlobalFilters = clearGlobalFilters;
window.removeGlobalFilter = removeGlobalFilter;
window.selectGlobalTariff = selectGlobalTariff;
window.updateQuickFilterButtons = updateQuickFilterButtons;

// Email validation functions
window.validatePartnerEmail = validatePartnerEmail;
window.handleEmailKeyup = handleEmailKeyup;

// Email Validation System
function validatePartnerEmail() {
    const emailInput = document.getElementById('partnerEmail');
    const validationBtn = document.getElementById('emailValidationBtn');
    const validationStatus = document.getElementById('emailValidationStatus');
    
    if (!emailInput || !validationBtn || !validationStatus) return;
    
    const email = emailInput.value.trim();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        showValidationError('Bitte geben Sie eine E-Mail-Adresse ein');
        return;
    }
    
    if (!emailRegex.test(email)) {
        showValidationError('Bitte geben Sie eine gültige E-Mail-Adresse ein');
        return;
    }
    
    // Simulate validation process
    validationBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Prüfen...</span>';
    validationBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Always succeed for demo purposes
        showValidationSuccess(email);
        
        // Store email for later use
        localStorage.setItem('partnerEmail', email);
        
        // Update all forms with this email
        updateFormsWithPartnerEmail(email);
    }, 1500);
}

function handleEmailKeyup(event) {
    if (event.key === 'Enter') {
        validatePartnerEmail();
    }
    
    // Reset validation state when user types
    const validationBtn = document.getElementById('emailValidationBtn');
    const validationStatus = document.getElementById('emailValidationStatus');
    
    if (validationBtn && validationStatus) {
        validationBtn.style.display = 'flex';
        validationStatus.classList.add('hidden');
        validationBtn.innerHTML = '<i class="fas fa-check"></i><span>Freischalten</span>';
        validationBtn.disabled = false;
        validationBtn.classList.remove('success');
    }
}

function showValidationSuccess(email) {
    const validationBtn = document.getElementById('emailValidationBtn');
    const validationStatus = document.getElementById('emailValidationStatus');
    
    // Hide button and show success status
    validationBtn.style.display = 'none';
    validationStatus.classList.remove('hidden', 'error');
    validationStatus.innerHTML = '<i class="fas fa-check-circle"></i><span>E-Mail freigeschaltet</span>';
    
    // Show success notification
    showNotification('E-Mail erfolgreich freigeschaltet!', 'success');
}

function showValidationError(message) {
    const validationBtn = document.getElementById('emailValidationBtn');
    const validationStatus = document.getElementById('emailValidationStatus');
    
    // Show error status
    validationBtn.style.display = 'none';
    validationStatus.classList.remove('hidden');
    validationStatus.classList.add('error');
    validationStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i><span>Fehler</span>';
    
    // Show error notification
    showNotification(message, 'error');
    
    // Reset after 3 seconds
    setTimeout(() => {
        validationBtn.style.display = 'flex';
        validationStatus.classList.add('hidden');
        validationBtn.innerHTML = '<i class="fas fa-check"></i><span>Freischalten</span>';
        validationBtn.disabled = false;
    }, 3000);
}

function updateFormsWithPartnerEmail(email) {
    // Update all partner email fields in forms
    const partnerEmailFields = document.querySelectorAll('[name="Partner_E-Mail"], .form-partner-email-strom');
    partnerEmailFields.forEach(field => {
        field.value = email;
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 4000);
}

function checkSavedPartnerEmail() {
    const savedEmail = localStorage.getItem('partnerEmail');
    if (savedEmail) {
        const emailInput = document.getElementById('partnerEmail');
        if (emailInput) {
            emailInput.value = savedEmail;
            // Auto-validate saved email
            setTimeout(() => showValidationSuccess(savedEmail), 500);
        }
    }
}

// Contact Menu Functions
function toggleContactMenu() {
    const menu = document.getElementById('contactMenu');
    menu.classList.toggle('active');
    
    // Close when clicking outside
    setTimeout(() => {
        document.addEventListener('click', closeContactOnOutsideClick);
    }, 100);
}

function closeContactOnOutsideClick(event) {
    const menu = document.getElementById('contactMenu');
    const dropdown = document.querySelector('.contact-dropdown');
    
    if (!dropdown.contains(event.target)) {
        menu.classList.remove('active');
        document.removeEventListener('click', closeContactOnOutsideClick);
    }
}

// Internet Tariff Functions
function updateSelectedTariffInfoInternet() {
    const element = document.getElementById('selected-tariff-info');
    if (element && selectedTariffData) {
        element.innerHTML = `
            <div class="selected-tariff-card">
                <div class="tariff-badge internet">
                    <i class="fas fa-wifi"></i>
                    Internet
                </div>
                <h3>${selectedTariffData.tariffName}</h3>
                <p>Aktion: ${selectedTariffData.price}€/Monat (1.-10. Monat)</p>
                <p>Danach: ${selectedTariffData.normalPrice}€/Monat</p>
            </div>
        `;
    }
}

function updateCostOverviewInternet() {
    const monthlyCosts = document.getElementById('monthly-costs');
    const currentProvision = document.getElementById('current-provision');
    
    if (monthlyCosts && selectedTariffData) {
        monthlyCosts.innerHTML = `
            <div class="cost-item">
                <span class="cost-label">Aktionspreis (1.-10. Monat):</span>
                <span class="cost-value">${selectedTariffData.price}€</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Regulärer Preis (ab 11. Monat):</span>
                <span class="cost-value">${selectedTariffData.normalPrice}€</span>
            </div>
            <div class="cost-item setup">
                <span class="cost-label">Einmalige Kosten (Router inkl.):</span>
                <span class="cost-value">29,99€</span>
            </div>
        `;
    }
    
    if (currentProvision && selectedTariffData) {
        const provision = parseFloat(selectedTariffData.provision.replace(',', '.'));
        currentProvision.textContent = `${provision.toFixed(2).replace('.', ',')} €`;
    }
    
    // Show cost overview
    const costOverview = document.getElementById('cost-overview');
    if (costOverview) {
        costOverview.classList.remove('hidden');
    }
}

function showInternetFormFields() {
    const internetFields = document.getElementById('internet-form-fields');
    if (internetFields) {
        internetFields.classList.remove('hidden');
    }
}

function toggleInternetWechselFields() {
    const anschlussArt = document.querySelector('select[name="Anschluss_Art"]').value;
    const wechselFields = document.getElementById('wechsel-fields');
    
    if (wechselFields) {
        if (anschlussArt === 'wechsel') {
            wechselFields.classList.remove('hidden');
            // Make fields required
            const requiredFields = wechselFields.querySelectorAll('select[name="Bisheriger_Anbieter"], input[name="Vertragsende"]');
            requiredFields.forEach(field => field.required = true);
        } else {
            wechselFields.classList.add('hidden');
            // Remove required attribute
            const fields = wechselFields.querySelectorAll('select, input');
            fields.forEach(field => {
                field.required = false;
                field.value = '';
            });
        }
    }
}

function toggleWunschtermin(showWunschtermin) {
    const wunschterminField = document.getElementById('wunschtermin-field');
    if (wunschterminField) {
        if (showWunschtermin) {
            wunschterminField.classList.remove('hidden');
            wunschterminField.required = true;
        } else {
            wunschterminField.classList.add('hidden');
            wunschterminField.required = false;
            wunschterminField.value = '';
        }
    }
}