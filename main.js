// Modální okna
function showModal(type) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    let content = '';
    
    switch(type) {
        case 'home':
            content = `
                <h2>🏠 Domů</h2>
                <p>Vítejte na hlavní stránce Meditz. Jsme moderní zdravotnické zařízení poskytující komplexní péči.</p>
                <p>Naše služby zahrnují preventivní prohlídky, diagnostiku a léčbu různých onemocnění.</p>
            `;
            break;
            
        case 'services':
            content = `
                <h2>🏥 Naše služby</h2>
                <p><strong>Ordinace:</strong></p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                    <li>Všeobecné lékařství</li>
                    <li>Interní medicína</li>
                    <li>Kardiologie</li>
                    <li>Dermatologie</li>
                </ul>
                <p><strong>Diagnostika:</strong></p>
                <ul style="margin-left: 1.5rem;">
                    <li>Laboratorní vyšetření</li>
                    <li>EKG, ECHO</li>
                    <li>Ultrazvuk</li>
                    <li>Rentgen</li>
                </ul>
            `;
            break;
            
        case 'about':
            content = `
                <h2>👥 O nás</h2>
                <p>Meditz je moderní zdravotnické centrum s dlouholetou tradicí. Naším cílem je poskytovat kvalitní zdravotní péči s využitím nejnovějších technologií.</p>
                <p>Náš tým tvoří zkušení lékaři a zdravotní sestry, kteří se neustále vzdělávají v nejnovějších postupech.</p>
                <p><strong>Otevírací doba:</strong><br>
                Po-Pá: 7:00 - 18:00<br>
                So: 8:00 - 12:00</p>
            `;
            break;
            
        case 'contact':
            content = `
                <h2>📞 Kontakt</h2>
                <p><strong>Adresa:</strong><br>
                Zdravotnická 123<br>
                110 00 Praha 1</p>
                
                <p><strong>Telefon:</strong><br>
                <a href="tel:+420123456789" style="color: #2c5aa0;">+420 123 456 789</a></p>
                
                <p><strong>Email:</strong><br>
                <a href="mailto:info@meditz.cz" style="color: #2c5aa0;">info@meditz.cz</a></p>
                
                <p><strong>Pohotovost:</strong><br>
                <a href="tel:+420987654321" style="color: #dc3545;">+420 987 654 321</a></p>
            `;
            break;
            
        case 'appointment':
            content = `
                <h2>📅 Objednání</h2>
                <p>Pro objednání k lékaři můžete využít:</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                    <li><strong>Telefon:</strong> <a href="tel:+420123456789" style="color: #2c5aa0;">+420 123 456 789</a></li>
                    <li><strong>Online:</strong> Přes náš rezervační systém</li>
                    <li><strong>Osobně:</strong> Na recepci</li>
                </ul>
                <p><strong>Ordinační hodiny:</strong><br>
                Po-Pá: 7:00 - 18:00<br>
                So: 8:00 - 12:00</p>
                <button onclick="window.open('tel:+420123456789')" style="background: #2c5aa0; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; cursor: pointer; margin-top: 1rem;">
                    📞 Zavolat nyní
                </button>
            `;
            break;
            
        case 'emergency':
            content = `
                <h2>🚨 Pohotovost</h2>
                <p style="color: #dc3545; font-weight: bold;">V případě akutních stavů volejte:</p>
                <p style="font-size: 1.5rem; text-align: center; margin: 1rem 0;">
                    <a href="tel:+420987654321" style="color: #dc3545; text-decoration: none;">
                        📞 +420 987 654 321
                    </a>
                </p>
                <p><strong>Pohotovostní služba:</strong><br>
                24 hodin denně, 7 dní v týdnu</p>
                <p><strong>Při život ohrožujících stavech volejte:</strong><br>
                <span style="font-size: 1.2rem; color: #dc3545; font-weight: bold;">155 nebo 112</span></p>
                <button onclick="window.open('tel:+420987654321')" style="background: #dc3545; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; cursor: pointer; margin-top: 1rem;">
                    🚨 Pohotovost
                </button>
            `;
            break;
            
        case 'results':
            content = `
                <h2>📋 Výsledky vyšetření</h2>
                <p>Výsledky vašich vyšetření můžete získat:</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                    <li><strong>Online:</strong> Přes pacientský portál</li>
                    <li><strong>Telefon:</strong> Po ověření totožnosti</li>
                    <li><strong>Osobně:</strong> Na recepci s dokladem</li>
                    <li><strong>Email:</strong> Na váš registrovaný email</li>
                </ul>
                <p><strong>Doba zpracování:</strong><br>
                Základní vyšetření: 1-2 dny<br>
                Specializovaná vyšetření: 3-7 dní</p>
                <button onclick="window.open('mailto:vysledky@meditz.cz')" style="background: #2c5aa0; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; cursor: pointer; margin-top: 1rem;">
                    ✉️ Požádat o výsledky
                </button>
            `;
            break;
            
        case 'info':
            content = `
                <h2>ℹ️ Důležité informace</h2>
                <p><strong>Před návštěvou:</strong></p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                    <li>Vezměte si průkaz pojištěnce</li>
                    <li>Dostavte se 10 minut před termínem</li>
                    <li>Při příznacích nachlazení informujte recepci</li>
                </ul>
                <p><strong>Platby:</strong><br>
                Přijímáme hotovost i karty</p>
                <p><strong>Parkování:</strong><br>
                K dispozici parkoviště pro pacienty</p>
                <p><strong>Bezbariérový přístup:</strong><br>
                Budova je plně přístupná</p>
            `;
            break;
            
        case 'location':
            content = `
                <h2>📍 Jak nás najít</h2>
                <p><strong>Adresa:</strong><br>
                Zdravotnická 123<br>
                110 00 Praha 1</p>
                
                <p><strong>Doprava:</strong></p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                    <li><strong>Metro:</strong> Linka A, stanice Můstek (5 min pěšky)</li>
                    <li><strong>Tramvaj:</strong> Linky 3, 9, 14, 24</li>
                    <li><strong>Autobus:</strong> Linky 194, 207</li>
                </ul>
                
                <p><strong>Parkování:</strong><br>
                Vlastní parkoviště pro pacienty<br>
                Placené parkování v okolí</p>
                
                <button onclick="window.open('https://maps.google.com/?q=Zdravotnická+123+Praha')" style="background: #2c5aa0; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; cursor: pointer; margin-top: 1rem;">
                    🗺️ Otevřít v mapách
                </button>
            `;
            break;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    
    // Animace
    setTimeout(() => {
        modal.querySelector('.modal-content').style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Zavření modálu kliknutím mimo obsah
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Zavření modálu klávesou Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Smooth scrolling pro navigaci
document.addEventListener('DOMContentLoaded', function() {
    // Přidání hover efektů
    const buttons = document.querySelectorAll('button, .contact-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Kontrola, zda je obrázek načten
    const img = new Image();
    img.onload = function() {
        console.log('Obrázek pozadí byl úspěšně načten');
    };
    img.onerror = function() {
        console.log('Obrázek pozadí se nepodařilo načíst');
        // Fallback pozadí
        document.querySelector('.background-image').style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    };
    img.src = './meditz_homepage.png.png';
});

// Funkce pro responzivní menu
function toggleMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    navContainer.classList.toggle('mobile-open');
}

// Přidání touch podpory pro mobilní zařízení
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}