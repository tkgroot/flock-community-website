// Content

/**
 * Flock. Content for the Hero components
 */
export const contentHeroLanding = {
  headline: ["Hallo.", "Wij zijn Flock.", "Een nieuw soort werkgever."],
  label: `Welkom bij de mooiste software engineering community van Nederland`,
  paragraph: `Een werkgever als echte community voor de software engineers die er werken. Waar iedereen de drive heeft om zichzelf te blijven ontwikkelen. Waar we iedere dag een stukje beter worden. Samen met onze klanten.`,
  body: "Ontdekken hoe we dat doen? Lees snel verder.",
}

export const contentHeroFlockCommunity = {
  headline: "De Flock. Community",
  label: `De Wereld samen inspireren`,
  paragraph: `Je wordt omringd met mensen die het maximale uit hun IT-carrière willen halen en we stimuleren kennisdeling. <b>Durven, inspireren en samen beter worden</b>, dat is waar het volgens ons om gaat.`,
}

/**
 * Flock Content for the flock community section
 */
export const contentFlockCommunity = {
  introParagraphs: [
    `Software engineers van Flock. werken aan innovatieve en uitdagende opdrachten, waarbij ze zichzelf verbeteren en elkaar inspireren. Ze maken onderdeel uit van de Flock. community, die fungeert als thuisbasis. Daarnaast is het een groep van gelijkgestemden die net als jij alles uit hun carrière willen halen.`,
    `Ga je werken bij Flock.? Dan zoeken wij de opdracht die het beste bij je past. Eentje waar jij beter van wordt. Want samen beter worden, dat is het belangrijkste doel van onze community. Alle beslissingen die we nemen dragen daaraan bij.`,
    `Bij Flock. verwachten we natuurlijk ook iets van onze engineers. Een community is immers zo sterk als haar leden. Pas jij bij Flock.? Dan ben je zowel technisch als communicatief sterk. Het belangrijkste? Je hebt altijd de drive om jezelf te blijven ontwikkelen. Op die manier maken we onze community samen iedere dag een beetje mooier.`,
  ],
  rows: [
    {
      title: "1. Flock. days",
      img: {
        src: "CalendarFlockDaysIcon",
        alt: "calendar with flock days marked every two weeks",
      },
      paragraph: `We zijn een warm thuis voor onze community van software engineers. Daarom werken we waar mogelijk iedere twee weken een dag samen op kantoor aan innovatieve projecten voor onze eigen ontwikkeling. Natuurlijk is de Flock. Day ook een perfect moment om van elkaar te leren en elkaar te inspireren.`,
    },
    {
      title: "2. Social events",
      img: {src: "CalendarFlockDaysIcon", alt: "drinks with a baloon"},
      paragraph: `Bij een community hoort natuurlijk ook gezelligheid, of samen iets actiefs ondernemen. Een borrel, samen een workout doen of een keer meedoen met de hobby van een collega? Het kan allemaal tijdens de Social Events van Flock.`,
    },
    {
      title: "3. Meetups / Workshops",
      img: {
        src: "CalendarFlockDaysIcon",
        alt: "presentation board with wireframe and text blocks",
      },
      paragraph: `Tijdens sessies, georganiseerd door Flock. in samenwerking met toonaangevende partners als ING, bol.com en Schiphol kun je gave workshops volgen, of andere inspirerende sessies. Zo laten we onze community en onze klanten iedere dag een stukje groeien.`,
    },
  ],
}

/**
 * Flock. Showcases Content for the showcase cards
 */
export const contentShowcaseCards = [
  {
    title: "Hey Google, I would like to buy a book at bol.com",
    img: {alt: "google home on a table"},
    author: {name: "Vincent de Bruijn"},
  },
  {
    title: "Server Side Rendering: Better performance. Faster loading. Great for SEO.",
    img: {alt: "stock photo"},
    author: {name: "Jerre van Veluw"},
  },
]

/**
 *
 */
export const contentShowcases = [
  {
    seoTitle: "Google Assistant",
    title: "Hey Google, I would like to buy a book at Bol.com",
    label: "Bol.com - Google Assistant",
    author: {name: "Vincent de Bruijn"},
    content: [
      `Bij Flock. zijn we dagelijks bezig met mooie software bouwen, elkaar inspireren en samen
        beter worden. In samenwerking met Bol.com kwamen deze waarden perfect bij elkaar en
        integreerden we Google Assistant met de online retailer.`,
      `We bouwden een conversational interface tussen Google Assistant en Bol.com waarmee een
        gebruiker een boek kan zoeken en kopen. Het doel? Een nieuwe manier om via Google Assistant
        met Bol.com te communiceren en met je stem te zoeken of een aankoop plaatsen. Hoe? Met
        inspirerende technologieën als NLP, Natural Language Interface, DialogFlow, chatbots en
        natuurlijk Bol.com's eigen Catalog API.`,
      `Natuurlijk zouden we Flock. niet zijn als we hier ook onze community niet bij zouden
        betrekken. We geloven in transparantie en zijn actief in diverse open source communities.
        Daarom delen we onze kennis en opgedane lessen graag met zoveel mogelijk mensen.`,
      `Benieuwd naar alle ins- en outs over deze case? Check ons artikel op Medium. Zelf werken aan
        gave projecten of met ons sparren over een oplossing voor jouw bedrijf? Neem contact met ons
        op.`,
    ],
  },
  {
    seoTitle: "SSR with React",
    title: "Server Side Rendering: Better performance. Faster loading. Great for SEO.",
    label: "Bol.com - Server Side Rendering with React",
    author: {name: "Jerre van Veluw"},
    content: [
      `We gebruiken graag cutting-edge technologieën. Dit levert waarde op voor onze klanten,
      maar het is ook gewoon tof om mee te werken. In een Proof of Concept voor Bol.com realiseerden
      we Server Side Rendering (SSR) in een React app voor hun checkout pagina.`,
      `Hoewel voor SSR vaak een frontend framework met Node.JS als backend wordt gebruikt, maakten
      wij gebruik van Nashorn, een JavaScript engine die wordt geleverd met Java 8 en integreert met
      de JVM. Een van de uitdagingen tijdens deze PoC was om developers zo min mogelijk in de weg te
      zitten, terwijl wij SSR implementeerden. Frictionless development noemen we dat en dat is een
      van de redenen waarom Docker om de hoek kwam kijken: hiermee houden we alles mooi gescheiden.`,
      `Het resultaat? Kortere laadtijden, betere performance voor de eindgebruiker en een webpagina
      die een stuk vriendelijker is voor de crawlers van Google en andere zoekmachines.`,
      `Meer informatie over deze case? Check het artikel op Medium. De mogelijkheden van Server
      Side Rendering ontdekken voor jouw bedrijf, of ben je zelf een expert op dit gebied? We komen
      graag met je in contact.
`,
    ],
  },
]

/**
 * Footer
 */
export const contentFooter = {
  nav: [
    {
      title: "About",
      items: ["Showcases", "Onze Developers"],
    },
    {
      title: "Contact",
      items: [
        "Flock. Software Engineering B.V.",
        "+31(0)6 10 03 99 82",
        "Oudegracht aan de Werf 62",
        "3511 AC Utrecht",
      ],
    },
  ],
}
