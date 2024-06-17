document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const sinf = urlParams.get('sinf');

    if (sinf) {
        document.getElementById('sinf-title').innerText = `${sinf}-sinf`;
        
        const content = document.getElementById('content');
        
        const data = {
            "5": {
                "Mavzulari": ["Materiklar va Okeanlar", "Yerning Tabiiy Resurslari"],
                "Xaritalar": ["Dunyo xaritasi", "Okean oqimlari"],
                "Slaydlar": ["Atmosfera sathlari", "Geologik davrlar"],
                "Videolar": ["Vulqon portlashlari", "Iqlim o'zgarishi"],
                "Testlar": ["Yerning tuzilishi"]
            },
            // Boshqa sinflar uchun ham xuddi shunday bo'limlar yarating
        };

        if (data[sinf]) {
            Object.keys(data[sinf]).forEach(key => {
                const section = document.createElement('div');
                section.innerHTML = `<h3>${key}</h3><ul>${data[sinf][key].map(item => `<li>${item}</li>`).join('')}</ul>`;
                content.appendChild(section);
            });
        } else {
            content.innerHTML = '<p>Bu sinf uchun ma’lumotlar mavjud emas.</p>';
        }
    }
});
