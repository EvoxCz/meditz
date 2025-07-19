// Funkce pro tlačítka

function handleAppointment() {
    alert('Objednání\n\nTelefon: +420 123 456 789\nEmail: objednavky@meditz.cz\n\nOtevírací doba:\nPo-Pá: 7:00-18:00\nSo: 8:00-12:00');
}

function handleEmergency() {
    if (confirm('Pohotovost - Zavolat nyní?\n\nTelefon: +420 987 654 321\n\n24 hodin denně, 7 dní v týdnu')) {
        window.open('tel:+420987654321');
    }
}

function handleContact() {
    alert('Kontakt\n\nAdresa:\nMeditz centrum\n110 00 Praha 1\n\nTelefon: +420 123 456 789\nEmail: info@meditz.cz\n\nOtevírací doba:\nPo-Pá: 7:00-18:00\nSo: 8:00-12:00');
}

function handleAbout() {
    alert('O nás\n\nMeditz je moderní centrum s dlouholetou tradicí.\n\nNaším cílem je poskytovat kvalitní služby s využitím nejnovějších technologií.\n\nNáš tým tvoří zkušení odborníci.');
}

function handleServices() {
    alert('Naše služby\n\n• Konzultace\n• Poradenství\n• Diagnostika\n• Vyšetření\n• Laboratorní služby\n• Preventivní péče\n• Odborné služby');
}