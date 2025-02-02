document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function() {
            alert("Button clicked! Functionality can be added here.");
        });
    });
});

const reasons = [
    {  
        icon: './BrightMind/assets/images/Company-logos/Bank Account connected.png', 
        text: 'Accepts all major bank cards'  
    },  
    {  
        icon: './BrightMind/assets/images/Company-logos/dollar.png',   
        text: 'Affordable monthly payments'  
    },  
    {  
        icon: './BrightMind/assets/images/Company-logos/verified.png',  
        text: '100% data security  256-bit encryption'  
    }  
];

// Function to render reasons  
function renderReasons() {  
    const container = document.getElementById('reasons-container');  

    reasons.forEach(reason => {  
        const reasonCard = document.createElement('div');  
        reasonCard.classList.add('reason', 'flex', 'items-center', 'gap-4');  

        reasonCard.innerHTML = `  
            <img src="${reason.icon}" alt="Reason icon" class="w-24 h-24">  
            <span class="text-left">${reason.text}</span>  
        `;  

        container.appendChild(reasonCard);  
    });  
}  

// Call the function to render reasons when the page loads  
document.addEventListener('DOMContentLoaded', renderReasons);


// script.jsfor review section
const reviews = [  
    {  
        name: "Anmol Singh",  
        stars: "⭐⭐⭐⭐⭐",  
        content: "To pay off my credit card debt I’m using Bright money App. It’s really easy to use and their customer service is excellent. They are helpful."  
    },  
    {  
        name: "Lance Nelson",  
        stars: "⭐⭐⭐⭐⭐",  
        content: "Bright money is willing to invest their time and get you an financial plan. Increase your score and reduce your debt."  
    },  
    {  
        name: "Sergio Lopez",  
        stars: "⭐⭐⭐⭐⭐",  
        content: "If you’re looking to get your score better – this is the App that will help and guide you. You’ll be with better score in few months."  
    },  
    {  
        name: "Todd Curry",  
        stars: "⭐⭐⭐⭐⭐",  
        content: "I recommend the Bright App to everybody. It helped me cut down on my credit card debt, help me save for car, vacation."  
    },  
    {  
        name: "Tom",  
        stars: "⭐⭐⭐⭐⭐",  
        content: "Thank you to Bright for helping me improve my credit and eliminating my debt. The customer service is super helpful."  
    }  
];  

// Function to render testimonials  
function renderTestimonials() {  
    const container = document.getElementById('testimonial-container');  

    reviews.forEach(review => {  
        const card = document.createElement('div');  
        // Tailwind CSS classes for the card
        card.classList.add(
            'card', 
            'w-72', // Fixed width for each card
            'p-6', // Padding
            'bg-white', // Background color
            'rounded-lg', // Rounded corners
            'shadow-md', // Box shadow
            'opacity-60', // Initial opacity
            'hover:opacity-100', // Full opacity on hover
            'transition-opacity', // Smooth transition
            'flex-shrink-0' // Prevent cards from shrinking
        );

        card.innerHTML = `  
            <div class="stars text-yellow-400 text-lg">${review.stars}</div>  
            <p class="text-gray-600 mt-4 text-sm">${review.content}</p>  
            <h3 class="text-gray-800 font-semibold mt-4">${review.name}</h3>  
        `;  

        container.appendChild(card);  
    });  
}

document.addEventListener('DOMContentLoaded', renderTestimonials);

//logo section
const logos = [
    {
        src: "./BrightMind/assets/images/Company-logos/blloomberg 2.png",
        alt: "Bloomberg"
    },
    {
        src: "./BrightMind/assets/images/Company-logos/Group 15922.png",
        alt: "Yahoo!"
    },
    {
        src: "./BrightMind/assets/images/Company-logos/g3025.png",
        alt: "Fortune"
    },
    {
        src: "./BrightMind/assets/images/Company-logos/Group 15923.png",
        alt: "Cheddar"
    },
    {
        src: "./BrightMind/assets/images/Company-logos/Group 15901.png",
        alt: "CNBC"
    }
];

// Function to render logos
function renderLogos() {
    const container = document.getElementById("logos-container");

    logos.forEach(logo => {
        const logoDiv = document.createElement("div");
        logoDiv.classList.add("logo");

        const logoImg = document.createElement("img");
        logoImg.src = logo.src;
        logoImg.alt = logo.alt;
        logoImg.classList.add("h-10", "opacity-60", "hover:opacity-100", "transition-opacity");

        logoDiv.appendChild(logoImg);
        container.appendChild(logoDiv);
    });
}

document.addEventListener("DOMContentLoaded", renderLogos);


//FAQ

document.addEventListener("DOMContentLoaded", function() {
    const faqContainer = document.querySelector(".faq-question");
    
    const faqs = [
        { question: "Can I pay off or close my account anytime?" },
        { question: "Do I need to pay interest fees?" },
        { question: "Is there a hard pull on the credit report?" },
        { question: "Do you report to lenders and creditors?" }
    ];

    // Render the FAQ questions dynamically
    faqContainer.innerHTML = faqs.map(faq => `
        <div class="faq-item border-b border-gray-300">
            <div class="faq-question p-4 cursor-pointer flex justify-between items-center">
                <h4 class="text-lg">${faq.question}</h4>
                <span class="plus-sign text-xl">+</span>
            </div>
            <div class="faq-answer p-4 hidden">
                <p>Answer to the question goes here.</p>
            </div>
        </div>
    `).join('');

    // Add event listener to toggle the answer visibility and change the plus sign
    document.querySelectorAll(".faq-question").forEach((question, index) => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            const plusSign = this.querySelector(".plus-sign");
            answer.classList.toggle("hidden");

            if (answer.classList.contains("hidden")) {
                plusSign.textContent = "+";  // Hide the answer, show the plus sign
            } else {
                plusSign.textContent = "-";  // Show the answer, change to minus sign
            }
        });
    });
});