// data.js
const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pnodevelopment.com/#business",
    "name": "PnO Development",
    "image": "https://pnodevelopment.com/Images/og-image.jpg",
    "url": "https://pnodevelopment.com",
    "telephone": "+37126868780",
    "description": "PnO Development – Profesionāla mājaslapu izstrāde Latvijā",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "LV"
    },
    "priceRange": "$$",
    "sameAs": [
        "https://www.facebook.com/profile.php?id=61566359771215",
        "https://www.instagram.com/pnodevelopment/"
    ]
};

// Create a <script> tag with type="application/ld+json" and append it to the document
const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);