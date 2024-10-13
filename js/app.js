const translations = {
    es: {
        firstHeadline: "Desarrollador Fullstack Senior en Teleperformance",
        secondHeadline: "Ingeniero Cloud | Arquitecto de Soluciones (AWS-Azure)",
        visitors: "Contador de visitantes desde Enero, 2023",
        build: "Diseñado & creado con 💙 por Juan David Acosta",
        aboutMe: "Acerca de Mi"
    },
    en: {
        firstHeadline: "Senior Fullstack Developer at Teleperformance ",
        secondHeadline: "Cloud Engineer | Solutions Architect (AWS-Azure)",
        visitors: "Visitors counter since January, 2023",
        build: "Design & built with 💙 by Juan David Acosta.",
        aboutMe: "About me"
    }
};

function changeLanguage(lang) {
    document.getElementById('firstHeadline').innerText = translations[lang].firstHeadline;
    document.getElementById('secondHeadline').innerText = translations[lang].secondHeadline;
    document.getElementById('visitors').innerText = translations[lang].visitors;
    document.getElementById('build').innerText = translations[lang].visitors;
    document.getElementById('aboutMe').innerText = translations[lang].aboutMe;
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`).classList.add('active');
}