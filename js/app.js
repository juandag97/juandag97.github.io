const translations = {
    es: {
        firstHeadline: "Desarrollador fullstack Senior en Teleperformance",
        portafolioTitle: "Portafolio de Aplicaciones Móviles",
        secondHeadline: "Ingeniero Cloud | Arquitecto de Soluciones (AWS-Azure)",
        visitors: "Contador de visitantes desde Enero, 2023",
        build: "Diseñado & creado con 💙 por Juan David Acosta. ",
        aboutMe: "Acerca de Mi",
        datingAppTitle: "Aplicación de citas",
        datingAppContent: "Disfruta de la emoción de conocer gente nueva con una aplicación de citas que te empareja en función de tus intereses, preferencias y ubicación. Está diseñada para conectar, con funciones como deslizar el dedo por los perfiles, enviar mensajes personalizados y chatear en tiempo real. Los filtros avanzados y las medidas de seguridad garantizan una experiencia agradable y segura para encontrar relaciones significativas.",
        financeAppTitle: "Aplicación de finanzas y trading",
        financeAppContent: "Asistente personal de finanzas con inteligencia artificial. Obtenga información sobre el mercado en tiempo real, señales de operaciones automatizadas y gestión de carteras en cualquier lugar. Tome decisiones de inversión más inteligentes con herramientas avanzadas de análisis y evaluación de riesgos a su alcance.",
        ecommerceAppTitle: "Aplicación para plataforma ecommerce",
        ecommerceAppContent: "Esta aplicación ofrece una experiencia de compra fluida en la que los usuarios pueden explorar una amplia gama de productos, desde moda hasta productos electrónicos, al alcance de la mano. Ofrece una interfaz intuitiva con recomendaciones personalizadas, navegación sencilla y pagos seguros. Con funciones como listas de deseos, descuentos exclusivos y seguimiento de pedidos en tiempo real, los compradores se mantienen interesados ​​y satisfechos.",
        chatAppTitle: "Aplicación de chat",
        chatAppContent: "Una aplicación de chat fácil de usar diseñada para una comunicación sencilla y fluida. Cuenta con una interfaz minimalista con un diseño limpio, que muestra burbujas de chat, un cuadro de entrada de texto y un botón de envío. La aplicación permite a los usuarios enviar y recibir mensajes rápidamente con animaciones fluidas y controles intuitivos. Es perfecta para cualquiera que busque una experiencia de mensajería sencilla sin complejidades innecesarias.",
        foodDeliveryAppTitle: "Aplicación para pedidos de comida",
        foodDeliveryAppContent: "Una aplicación móvil para entrega de comida permite a los usuarios explorar los menús, realizar pedidos y recibir las comidas. Las características principales incluyen una navegación fácil de usar, seguimiento de pedidos en tiempo real, opciones de comida personalizables y métodos de pago seguros. Está diseñada para una experiencia gastronómica cómoda y sin inconvenientes.",
        realStateAppTitle: "Aplicación para bienes raices",
        realStateAppContent: "Esta aplicación móvil ayuda a los usuarios a encontrar la casa de sus sueños o la propiedad de inversión. Con funciones como filtros de búsqueda avanzados, mapas interactivos, recorridos virtuales y contacto con agentes, simplifica el proceso de compra, venta o alquiler de bienes raíces desde cualquier lugar."
    },
    en: {
        firstHeadline: "Senior Fullstack Developer at Teleperformance",
        portafolioTitle: "Mobile Apps Portfolio",
        secondHeadline: "Cloud Engineer | Solutions Architect (AWS-Azure)",
        visitors: "Visitors counter since January, 2023",
        build: "Design & built with 💙 by Juan David Acosta. ",
        aboutMe: "About me",
        datingAppTitle: "Dating App",
        datingAppContent: "Engage in the excitement of meeting new people with a dating app that matches you based on shared interests, preferences, and location. It’s designed for connection, with features like swiping through profiles, sending personalized messages, and real-time chat. Advanced filters and safety measures ensure an enjoyable, secure experience for finding meaningful relationships.",
        financeAppTitle: "Finance App",
        financeAppContent: "Personal AI trading assistant. Get real-time market insights, automated trading signals, and portfolio management on-the-go. Make smarter investment decisions with advanced analytics and risk assessment tools at your fingertips",
        ecommerceAppTitle: "Ecommerce App",
        ecommerceAppContent: "This app offers a seamless shopping experience where users can explore a wide range of products, from fashion to electronics, right at their fingertips. It provides an intuitive interface with personalized recommendations, easy navigation, and secure payments. With features like wishlists, exclusive discounts, and real-time order tracking, shoppers stay engaged and satisfied.",
        chatAppTitle: "Chat App",
        chatAppContent: "A user-friendly chat app designed for easy and seamless communication. It features a minimalistic interface with a clean layout, showcasing chat bubbles, a text input box, and a send button. The app allows users to quickly send and receive messages with smooth animations and intuitive controls. It's perfect for anyone looking for a straightforward messaging experience without unnecessary complexities.",
        foodDeliveryAppTitle: "Food Delivery App",
        foodDeliveryAppContent: "A mobile app for food delivery allows users to browse menus, place orders, and have meals delivered. Key features include user-friendly navigation, real-time order tracking, customizable meal options, and secure payment methods. It's designed for a seamless and convenient dining experience.",
        realStateAppTitle: "Real State App",
        realStateAppContent: "This mobile app helps users find their dream home or investment property. With features like advanced search filters, interactive maps, virtual tours, and agent contact, it simplifies the process of buying, selling, or renting real estate on the go."
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

function changeLanguagePortafolio(lang) {
    document.getElementById('portafolioTitle').innerText = translations[lang].portafolioTitle;
    document.getElementById('datingAppTitle').innerText = translations[lang].datingAppTitle;
    document.getElementById('datingAppContent').innerText = translations[lang].datingAppContent;
    document.getElementById('financeAppTitle').innerText = translations[lang].financeAppTitle;
    document.getElementById('financeAppContent').innerText = translations[lang].financeAppContent;
    document.getElementById('chatAppTitle').innerText = translations[lang].chatAppTitle;
    document.getElementById('chatAppContent').innerText = translations[lang].chatAppContent;
    
    document.getElementById('foodDeliveryAppTitle').innerText = translations[lang].foodDeliveryAppTitle;
    document.getElementById('foodDeliveryAppContent').innerText = translations[lang].foodDeliveryAppContent;
    document.getElementById('realStateAppTitle').innerText = translations[lang].realStateAppTitle;
    document.getElementById('realStateAppContent').innerText = translations[lang].realStateAppContent;
    document.getElementById('ecommerceAppTitle').innerText = translations[lang].ecommerceAppTitle;
    document.getElementById('ecommerceAppContent').innerText = translations[lang].ecommerceAppContent;
    document.getElementById('build').innerText = translations[lang].build + new Date().getFullYear();
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[onclick="changeLanguagePortafolio('${lang}')"]`).classList.add('active');
}