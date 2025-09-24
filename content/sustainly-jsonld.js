(function () {
  // Only run on the index page (homepage)
  if (location.pathname !== "/" && location.pathname !== "/index.html") return;

  var json = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Sustainly",
    "alternateName": "Sustainly LCA",
    "url": "https://learn.sustainly.ai/",
    "sameAs": ["https://sustainly.ai/"],
    "inLanguage": "en",
    "applicationCategory": "BusinessApplication",
    "applicationSuite": "Sustainly Platform",
    "operatingSystem": "Web",
    "softwareHelp": "https://learn.sustainly.ai/",
    "isAccessibleForFree": true,
    "provider": { "@type": "Organization", "name": "Sustainly" },
    "audience": [
      { "@type": "EducationalAudience", "educationalRole": "student" },
      { "@type": "BusinessAudience", "audienceType": "enterprise" }
    ],
    "description": "Sustainly is an AI-assisted Life Cycle Assessment (LCA) and sustainability platform that helps organizations measure, compare, and communicate environmental impacts of products and operations. It supports EF 3.1, IPCC 2021, and ReCiPe 2016 methods; includes cut-off, consequential, and EN 15804 (EPD) system models; works with the EU Environmental Footprint database with optional Ecoinvent integration; and provides EPD workflows, API/PLM/ERP integrations, SSO/2FA, and an AI add-on for data collection, model generation, and Q&A.",
    "featureList": [
      "Automated LCA modeling and scaling",
      "Impact assessment methods: EF 3.1, IPCC 2021, ReCiPe 2016",
      "Allocation & frameworks: cut-off, consequential, EN 15804 (EPDs)",
      "Databases: EF database; optional Ecoinvent integration",
      "EPD module: export tables, verifier workflow, data quality",
      "Enterprise: API, PLM/ERP integrations, SSO/2FA",
      "AI add-on: data import/collection, model generation, Q&A"
    ],
    "softwareRequirements": [
      "Web browser",
      "Optional: active Ecoinvent license for Ecoinvent data access"
    ],
    "keywords": [
      "Life Cycle Assessment",
      "LCA software",
      "Environmental Footprint",
      "EF 3.1",
      "IPCC 2021",
      "ReCiPe 2016",
      "EN 15804",
      "EPD",
      "Product Carbon Footprint",
      "Ecoinvent"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sustainly Plans",
      "itemListElement": [
        { "@type": "Offer", "name": "Free" },
        { "@type": "Offer", "name": "Starter" },
        { "@type": "Offer", "name": "Pro" },
        { "@type": "Offer", "name": "Enterprise" }
      ]
    }
  };

  var el = document.createElement('script');
  el.setAttribute('type', 'application/ld+json');
  el.text = JSON.stringify(json);
  document.head.appendChild(el);
})();