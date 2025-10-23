const apps = [{
    id: "datingApp",
    name: "Dating App Seven Swipes",
    description: "Engage in the excitement of meeting new people with a dating app that matches you based on shared interests, preferences, and location. It’s designed for connection, with features like swiping through profiles, sending personalized messages, and real-time chat. Advanced filters and safety measures ensure an enjoyable, secure experience for finding meaningful relationships.",
    image: "img/dating.webp",
    link: ""
}, {
    id: "financeApp",
    name: "Lisa - AI Trading Assistant",
    description: "Lisa is your personal AI trading assistant designed to help you invest smarter, faster, and with more confidence. She offers real-time market insights, chat and voice interactions, and automated trading signals tailored to your strategy. Whether you’re tracking stocks, ETFs, or crypto, Lisa simplifies complex data into clear, actionable guidance. You can set custom alerts, automate trades, and receive portfolio reviews with AI-driven risk analysis. Her 24/7 availability means you’re never alone in the markets.",
    image: "img/trade.png",
    link: "https://lisa-chatbot-front.azurewebsites.net/"
}, {
    id: "chatApp",
    name: "Megan companion",
    description: "Megan is your intelligent, always-available coach designed to help you master any skill or subject, from learning new languages like English, to exploring coding, business, art, and more. Built with cutting-edge AI, Megan tailors your learning experience to your goals, pace, and preferences. Whether you’re starting from scratch or looking to refine advanced skills, Megan adapts to your level and keeps you motivated with smart feedback, bite-sized lessons, and real-world practice.",
    image: "img/chat-app.webp",
    link: "https://lisa-chatbot-front.azurewebsites.net/"
}];

const portfolio = document.getElementById('portfolio');

apps.forEach(app => {
    const card = document.createElement('div');
    card.className = 'card';
        // <a href="https://play.google.com/store/apps/details?id=com.juancarlosjuandavid.seven" class="apps-link" target="_blank">
        //     Play Store App
        // </a>
    card.innerHTML = `
        <img src="${app.image}" alt="${app.name}">
        <h2 id="${app.id}Title">${app.name}</h2>
        <p id="${app.id}Content" style="font-size: 20px">${app.description}</p>
        <a tag="demo-button" href="${app.link}" class="demo-button apps-link" target="_blank">
    Try it now
</a>

<style>
    .apps-link {
        background-color: #00aeef;        /* Azul claro */
        color: #ffffff;                   /* Texto blanco */
        padding: 12px 24px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: bold;
        display: inline-block;
        transition: background-color 0.3s ease, transform 0.2s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .apps-link:hover {
        background-color: #0096d1;        /* Azul un poco más oscuro en hover */
        transform: scale(1.05);           /* Efecto zoom suave al pasar el mouse */
    }
</style>
        `;
    portfolio.appendChild(card);
});