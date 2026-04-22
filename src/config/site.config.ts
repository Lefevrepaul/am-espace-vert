export const siteConfig = {
  company: {
    name: "Am espace vert",
    tagline: "Votre expert en aménagement paysager dans la Somme",
    description: "Am espace vert, basée à Mareuil-Caubert, vous accompagne depuis 13 ans dans tous vos projets d'aménagement paysager. Création de jardins, entretien d'espaces verts, élagage et terrassement : nous mettons notre savoir-faire au service de vos extérieurs dans la région des Hauts-de-France."
  },
  contact: {
    phoneDisplay: "07 59 66 12 13",
    phoneE164: "+33759661213",
    email: "Nous contacter via notre formulaire"
  },
  location: {
    city: "Mareuil-Caubert",
    region: "Hauts-de-France",
    radiusKm: 30,
    coords: {
      lat: 50.0867053,
      lng: 1.8141328
    },
    villes: [
      "Mareuil-Caubert",
      "Abbeville",
      "Le Crotoy",
      "Saint-Valery-sur-Somme",
      "Rue",
      "Crécy-en-Ponthieu",
      "Forest-Montiers",
      "Nouvion",
      "Ponthoile",
      "Cayeux-sur-Mer",
      "Noyelles-sur-Mer",
      "Fort-Mahon-Plage"
    ],
    realisationsVilles: [
      "Mareuil-Caubert",
      "Abbeville",
      "Saint-Valery-sur-Somme",
      "Le Crotoy",
      "Rue",
      "Crécy-en-Ponthieu"
    ],
    temoignagesVilles: [
      "Mareuil-Caubert",
      "Abbeville",
      "Saint-Valery-sur-Somme"
    ]
  },
  stats: {
    projectsCount: "128+",
    yearsExperience: "13 ans"
  },
  googleReviews: {
    rating: "4.9",
    count: 25,
    searchQuery: "Am+espace+vert+Mareuil+Caubert+avis"
  },
  seo: {
    titleTemplate: "%s | Am espace vert - Paysagiste Mareuil-Caubert",
    defaultTitle: "Am espace vert - Paysagiste à Mareuil-Caubert | Aménagement espaces verts Somme",
    metaDescription: "Am espace vert, paysagiste professionnel à Mareuil-Caubert. 13 ans d'expérience en aménagement paysager, création jardins et entretien espaces verts. Devis gratuit dans la Somme.",
    url: "https://am-espace-vert-mareuil-caubert.fr"
  }
};

export const googleReviewsSearchUrl = () => `https://www.google.com/search?q=${siteConfig.googleReviews.searchQuery}`;

export type SiteConfig = typeof siteConfig;