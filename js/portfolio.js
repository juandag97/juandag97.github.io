const apps = [{
    id: "datingApp",
    name: "Dating App",
    description: "Engage in the excitement of meeting new people with a dating app that matches you based on shared interests, preferences, and location. It’s designed for connection, with features like swiping through profiles, sending personalized messages, and real-time chat. Advanced filters and safety measures ensure an enjoyable, secure experience for finding meaningful relationships.",
    image: "img/dating.webp",
    android: ""
}, {
    id: "financeApp",
    name: "Trading App",
    description: "Personal AI trading assistant. Get real-time market insights, automated trading signals, and portfolio management on-the-go. Make smarter investment decisions with advanced analytics and risk assessment tools at your fingertips",
    image: "img/trade.png",
}, {
    id: "ecommerceApp",
    name: "Ecommerce App",
    description: "This app offers a seamless shopping experience where users can explore a wide range of products, from fashion to electronics, right at their fingertips. It provides an intuitive interface with personalized recommendations, easy navigation, and secure payments. With features like wishlists, exclusive discounts, and real-time order tracking, shoppers stay engaged and satisfied.",
    image: "img/ecommerce.webp"
}, {
    id: "chatApp",
    name: "Chat App",
    description: "A user-friendly chat app designed for easy and seamless communication. It features a minimalistic interface with a clean layout, showcasing chat bubbles, a text input box, and a send button. The app allows users to quickly send and receive messages with smooth animations and intuitive controls. It's perfect for anyone looking for a straightforward messaging experience without unnecessary complexities.",
    image: "img/chat-app.webp",
    android: ""
}, {
    id: "foodDeliveryApp",
    name: "Food Delivery App",
    description: "A mobile app for food delivery allows users to browse menus, place orders, and have meals delivered. Key features include user-friendly navigation, real-time order tracking, customizable meal options, and secure payment methods. It's designed for a seamless and convenient dining experience.",
    image: "img/food-delivery.webp",
}, {
    id: "realStateApp",
    name: "Real Estate App",
    description: "This mobile app helps users find their dream home or investment property. With features like advanced search filters, interactive maps, virtual tours, and agent contact, it simplifies the process of buying, selling, or renting real estate on the go.",
    image: "img/real-state.webp"
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
        <p id="${app.id}Content">${app.description}</p>
        `;
    portfolio.appendChild(card);
});