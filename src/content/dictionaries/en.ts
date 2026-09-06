import type { Dictionary } from "@/content/dictionaries/types";

export const dictionary: Dictionary = {
  meta: {
    title: "Trym Torhaug — UX designer",
    description:
      "UX designer based in Oslo. Design lead at Telenor, previously Forte, the Norwegian Police IT unit and Headit. Experience, projects and contact details.",
    ogLocale: "en_GB",
  },
  a11y: {
    skipToContent: "Skip to content",
    languageLabel: "Choose language",
    avatarAlt: "Portrait of Trym Torhaug",
    photosLabel: "Photos from life outside work",
    copyEmail: "Copy email address",
    emailCopied: "Copied!",
  },
  header: {
    name: "Trym Torhaug",
    tagline: "UX designer @ Oslo",
  },

  experience: {
    id: "erfaring",
    label: "Experience",
    entries: [
      {
        key: "telenor",
        period: "2026 – Now",
        logo: { src: "/logos/telenor.png", alt: "Telenor" },
        title: "Design lead at Telenor",
        body: "Fornebu, Norway · Working on the internal systems that let all of Norway take mobile and broadband services for granted. My most exciting chapter so far!",
      },
      {
        key: "forte",
        period: "2022 – 2026",
        logo: { src: "/logos/forte.png", alt: "Forte Digital" },
        title: "UX designer at Forte",
        body: "Oslo, Norway · Consultant with a long list of projects behind me, and several internal roles both social and professional.",
      },
      {
        key: "politiet",
        period: "2021 – 2022",
        logo: { src: "/logos/politiet.png", alt: "The Norwegian Police" },
        title: "Product designer/UX at the Norwegian Police IT unit",
        body: "Oslo, Norway · Designed complex, security-critical systems in-house. The Police taught me best practice in autonomous product teams, and how to navigate the public sector and its internal politics.",
      },
      {
        key: "headit",
        period: "2019",
        logo: { src: "/logos/headit.png", alt: "Headit" },
        title: "UX designer at Headit (internship)",
        body: "Hamar, Norway · My time at Headit (now Bouvet) taught me the craft of being a self-directed designer, with experience from several real projects.",
      },
    ],
  },

  education: {
    id: "utdanning",
    label: "Education",
    entries: [
      {
        key: "ntnu",
        period: "2018 – 2021",
        title: "BSc in Interaction Design",
        meta: "Gjøvik · Norwegian University of Science and Technology (NTNU)",
        card: {
          // TODO: add a link to the thesis (e.g. NTNU Open) once it is ready.
          thumb: "/images/nevro-thumb.webp",
          thumbAlt: "Nevro — logo for the bachelor thesis",
          title: "Nevro - A neuropsychological testing tool",
          subtitle: "Bachelor thesis",
        },
      },
    ],
  },

  projects: {
    id: "prosjekter",
    label: "Selected projects",
    entries: [
      {
        key: "asko",
        period: "2023 – Now",
        logo: { src: "/logos/asko.png", alt: "ASKO Servering" },
        title: "ASKO Servering",
        body: "UX lead across product teams. Involved in several initiatives spanning ASKO and NorgesGruppen Data.",
        caseStudy: {
          title: "ASKO Servering",
          meta: "Lead UX · 2 years",
          intro: [
            "ASKO Servering works in an agile way on the upkeep and continued development of askoservering.no and other related services. Their overarching goal is to increase conversion and customer loyalty by improving self-service and supporting efficient ordering of goods.",
          ],
          blocks: [
            {
              type: "image",
              src: "/images/asko/gallery1-screens.webp",
              alt: "Screens from askoservering.no: the homepage, the become-a-customer flow, and the range page",
              width: 1296,
              height: 649,
            },
            {
              type: "sectionIntro",
              id: "redigering-av-bestilling",
              eyebrow: "Example project",
              title: "Editing an order",
            },
            {
              type: "field",
              label: "My role",
              text: "Responsible for research, ideation, prototyping and testing. Worked closely with engineering and the business side to balance flexibility against system constraints.",
            },
            {
              type: "photos",
              label:
                "Photos from the project: research in the field and in the warehouse",
              columns: [83, 181, 181, 181],
              photos: [
                {
                  src: "/images/asko/gallery2-mobile.webp",
                  alt: "Screenshot of a promotions view on mobile",
                  tall: true,
                },
                {
                  src: "/images/asko/gallery2-meeting.webp",
                  alt: "Team in a meeting room around a screen",
                },
                {
                  src: "/images/asko/gallery2-truck.webp",
                  alt: "An ASKO truck outside a warehouse",
                },
                {
                  src: "/images/asko/gallery2-barcode.webp",
                  alt: "Close-up of a barcode being scanned with a phone",
                  tall: true,
                },
                {
                  src: "/images/asko/gallery2-warehouse.webp",
                  alt: "Shelving in the warehouse",
                },
                {
                  src: "/images/asko/gallery2-workers.webp",
                  alt: "Staff in hi-vis vests in the warehouse",
                },
              ],
            },
            {
              type: "field",
              label: "Challenge",
              text: "The feature for editing an order had low visibility, required a lot of manual follow-up, and often caused confusion — especially among users with lower technical confidence. Both customer service and sales consultants reported frustration, particularly on larger orders where it was easy to lose track.",
            },
            {
              type: "list",
              label: "Overall process",
              marker: "dot",
              items: [
                "Held in-depth interviews and observation sessions with customer service, sales and 3 major customers",
                // TODO: link to the service design blueprint document once it's available.
                "Mapped the real user flow and common failure points using a service design blueprint",
                "Developed new concepts based on core insights and pain points",
                "Facilitated dialogue and workshops with the team",
                "Built a clickable prototype and user-tested it with customers",
                "Development and iteration based on feedback",
                "Rolled the MVP out to a small share of users (A/B testing) to validate the idea, and used an established user panel to stay in dialogue with power users",
              ],
            },
            {
              type: "field",
              label: "Learning along the way",
              text: "We went into the project with a strong hypothesis that 'less is more' — that less information would make the ordering experience simpler and more user-friendly. Through user testing we discovered the opposite: for our B2B audience — chefs and buyers in commercial kitchens — the context is completely different from typical B2C. They make frequent changes and need all the necessary information — like contents, packaging and dates — presented clearly and within easy reach. It became an important realisation: B2B users have entirely their own needs and ways of working that we as a team hadn't thought through well enough at the start. This project taught me the importance of not taking B2C principles for granted in other domains.",
            },
            {
              type: "image",
              src: "/images/asko/flow-edit-order.webp",
              alt: "The flow for editing a submitted order, shown on laptop and mobile",
              width: 1340,
              height: 460,
            },
            {
              type: "field",
              label: "Solution",
              text: 'A new, visible "Edit order" feature for every submitted order. Customers get an overview of the whole order, item and price changes, clear limits on what can and can\'t be changed, and the ability to make small and larger adjustments without having to contact customer service.',
            },
            {
              type: "list",
              label: "Result",
              marker: "dash",
              items: [
                "Sales consultants reported fewer manual follow-ups",
                "Customers described the solution as “simpler and more professional”",
                "Fewer enquiries about changes from customer service",
                "Increased trust and sense of control among customers",
              ],
            },
            {
              type: "image",
              src: "/images/asko/hero-laptop-callout.webp",
              alt: "A new view in the editing flow showing an overview of changes, with an explanatory callout",
              width: 1280,
              height: 780,
            },
            {
              type: "closing",
              heading: "Examples of other initiatives I've worked on",
              items: [
                "New homepages for different user groups: a version for signed-in customers focused on upsell and relevant offers, and one for signed-out visitors with a clear message and a recruitment focus.",
                "Improved the user experience around complaints and customers' dialogue with customer service.",
                'Improved purchase button and packaging information: explored alternatives to the "Buy" button and visual cues to distinguish packaging levels.',
              ],
            },
            {
              type: "image",
              src: "/images/asko/closing-homepage.webp",
              alt: "The askoservering.no homepage",
              width: 1296,
              height: 830,
            },
          ],
        },
      },
      {
        key: "trumf",
        period: "2022",
        logo: { src: "/logos/trumf.png", alt: "Trumf" },
        title: "Trumf",
        body: "Involved in both the implementation of the Trumf Pay mobile payment solution and the TrumfID sign-in service.",
        caseStudy: {
          title: "The Trumf app",
          meta: "UX designer · 2022",
          intro: [
            "Trumf offers its members a broad range of digital utility services, designed to help them make better choices in everyday life.",
            "The battle for consumers now happens in real time — on mobile, in-app, across every channel. Today's customers expect tailored experiences, relevant benefits and seamless technology, all in one place. For Trumf, it's no longer just about bonus points — it's about being a relevant part of members' everyday lives.",
          ],
          blocks: [
            {
              type: "image",
              src: "/images/trumf/gallery1-screens.webp",
              alt: "Screens from various Trumf features: online shopping, Trumf Pay, payment confirmation and parking",
              width: 1296,
              height: 643,
            },
            {
              type: "role",
              label: "My role",
              intro: "I've been part of two teams at Trumf:",
              teams: [
                {
                  title: "Trumf ID",
                  body: "Core functionality for secure ID and sign-in — the foundation of the entire Trumf experience across NorgesGruppen's brands.",
                },
                {
                  id: "trumf-pay",
                  title: "Trumf Pay",
                  body: "One of the newest initiatives is Trumf Pay, a mobile payment solution built into the app. Today Trumf Pay accounts for over 20% of all mobile payments in the loyalty programme — and the share is growing fast.",
                },
              ],
            },
            {
              type: "photos",
              label:
                "Photos from the project: research, workshops and in-store testing",
              columns: [83, 83, 179, 83, 179],
              photos: [
                {
                  src: "/images/trumf/gallery2-insight.webp",
                  alt: "In-app insight screen with a nutritional breakdown",
                  tall: true,
                },
                {
                  src: "/images/trumf/gallery2-qr-card.webp",
                  alt: "Card with a QR code for registering bonus points",
                },
                {
                  src: "/images/trumf/gallery2-kiosk.webp",
                  alt: "Self-checkout screen in a store",
                },
                {
                  src: "/images/trumf/gallery2-meeting.webp",
                  alt: "Team kick-off for Trumf Mobile in a meeting room",
                  tall: true,
                },
                {
                  src: "/images/trumf/gallery2-touchscreen.webp",
                  alt: "A user testing a touchscreen in-store",
                  tall: true,
                },
                {
                  src: "/images/trumf/gallery2-presentation.webp",
                  alt: "Presenting decision-making insights from a workshop",
                  tall: true,
                },
              ],
            },
            {
              type: "sectionIntro",
              id: "onboardingsflyt",
              eyebrow: "Example project",
              title: "Onboarding flow – Trumf Pay",
            },
            {
              type: "field",
              label: "Challenge",
              link: {
                before:
                  "Trumf wanted a clear, well-structured onboarding for the new ",
                linkText: "Trumf Pay",
                linkHref: "#trumf-pay",
                after:
                  " concept. We had to tell users they needed the right bank, to accept terms, that payment happened account-to-account, and so on. This led to drop-off and confusion during onboarding.",
              },
            },
            {
              type: "field",
              label: "My role",
              text: "Interaction design and UI. Responsible for structure, UI, microcopy and design guidelines. Designed in Figma, working closely with product, engineering and legal to balance clarity with requirements.",
            },
            {
              type: "image",
              src: "/images/trumf/onboarding-flow.webp",
              alt: "Onboarding flow for Trumf Pay: activation, QR card and confirmed payment",
              width: 1296,
              height: 696,
            },
            {
              type: "list",
              label: "Process",
              marker: "dot",
              items: [
                "Mapped critical information needs together with product, tech and legal",
                "Built a prototype as a starting point",
                "Interviewed users to understand expectations and thresholds",
                "Walked through it with the team — design reviews and workshops",
                "Iterated the design based on feedback and legal changes",
              ],
            },
            {
              type: "field",
              label: "Learning along the way",
              text: "In improving onboarding in the Trumf app, we started from the classic principle that 'fewer clicks means a better experience.' But we quickly learned — through both customer feedback and testing — that this approach weakened users' understanding of what they were actually agreeing to. Fewer steps meant less context and lower trust. So we had to find a balance: how do you ensure clarity and a good experience while still respecting business needs and legal requirements? This project became an exercise in balancing design intuition with real insight from end users — and in accepting that simplicity doesn't always mean fewer steps.",
            },
            {
              type: "list",
              label: "Solution",
              intro: "A new, cohesive onboarding consisting of:",
              marker: "dash",
              items: [
                "Simple explanations of account-to-account transfers and security",
                "A clear check for bank support and connection",
                "Information about the terms and what the user is agreeing to",
                "UI animations and small micro-interactions that build flow and trust",
              ],
            },
            {
              type: "image",
              src: "/images/trumf/hero.webp",
              alt: "The Trumf app's home screen with balance, history and shortcuts",
              width: 1295,
              height: 971,
            },
            {
              type: "closing",
              heading: "Examples of other initiatives I've worked on",
              items: [
                "A new Trumf ID sign-in flow with biometrics",
                "The transition from a physical to a digital Trumf card, and how it should live in the new app.",
                'Improved purchase button and packaging information: explored alternatives to the "Buy" button and visual cues to distinguish packaging levels.',
              ],
            },
          ],
        },
      },
      {
        key: "aera",
        period: "2023",
        logo: { src: "/logos/aera.png", alt: "Aera" },
        title: "Aera Payment & Identification",
        body: "An exciting project set on realising Aera's vision of becoming a leading player in web checkout solutions.",
        caseStudy: {
          title: "Aera Payment & Identification",
          meta: "UX designer · 2023",
          intro: [
            "Brought in to help realise Aera's vision of becoming a leading player in web checkout solutions.",
          ],
          blocks: [
            {
              type: "image",
              src: "/images/aera/gallery-screens.webp",
              alt: "Screens from Aera's payment module: choosing a payment method in Joker and card details in Meny",
              width: 1296,
              height: 645,
            },
            {
              type: "image",
              src: "/images/aera/evidence-checkout-mobile.webp",
              alt: "A user paying by card in Aera's payment module on a tablet",
              width: 1036,
              height: 894,
            },
            {
              type: "sectionIntro",
              id: "ny-checkout-modul",
              eyebrow: "Example project",
              title: "New checkout module",
            },
            {
              type: "field",
              label: "Background",
              text: "Aera is building a new payment service to better meet customers' need for a unified payment experience. As part of the project, Aera has to modernise many front-end components to stay competitive. The project's main focus is modernising the hosted payment page, an important payment gateway for online retail. It lets webshops accept more payment methods without having to worry about security and compliance.",
            },
            {
              type: "field",
              label: "Goal",
              text: "The goal is to improve the functionality and user experience of the HPP, making it simpler and more intuitive to use. This should help increase conversion rates for the webshops and strengthen their brand. They want the solution to be a seamless user experience in line with the best market standard.",
            },
            {
              type: "field",
              label: "My role",
              text: "UX designer and facilitator / team lead for a team of 3 – frontend, graphic design and UX. Responsible for user experience and flow. Facilitated workshops with stakeholders, ran user testing, and shaped wireframes and prototypes.",
            },
            {
              type: "image",
              src: "/images/aera/evidence-slack.webp",
              alt: "Slack messages and a photo from a workshop with the development team",
              width: 1296,
              height: 636,
            },
            {
              type: "list",
              label: "Process",
              marker: "dot",
              items: [
                "Client brief and kick-off – a kick-off meeting and workshop with the client to clarify expectations for the project, roles and deliverables. The client had clear constraints and high expectations, so the main focus was creating value quickly and enabling tight iteration.",
                "Team canvas with the development team – we got to know each other, clarified roles and responsibilities, and established good communication routines for effective collaboration.",
                "Service design blueprint – we mapped out a technical user journey to chart the flow, dependencies and potential bottlenecks in the solution.",
                "Design and testing – developed and user-tested early sketches to validate direction and identify friction points early.",
                "Parallel development – the frontend team started setup and development in parallel with the design process, to keep up momentum.",
                "Constraints and adjustments – findings from research, along with technical and legal requirements, shaped further design choices and the user experience.",
                "Ongoing quality assurance – frequent check-ins with the client and project manager to make sure we stayed on track throughout.",
                "Universal design – systematically tested the solution for accessibility, and adjusted where needed to keep it inclusive.",
                "Heuristic evaluation – carried out an evaluation based on established heuristics and improved the solution's usability.",
                "Closing workshop and handover – a final workshop reviewing remaining work, handover to development, and a complete design system for future scaling.",
              ],
            },
            {
              type: "image",
              src: "/images/aera/customer-journey-map.webp",
              alt: "Customer journey map for the HPP customisation/configuration portal",
              width: 1296,
              height: 634,
            },
            {
              type: "field",
              label: "Learning along the way",
              text: "The project gave me a deeper understanding of complex form design. Building something for everyone takes time and requires iteration and testing. I experienced how demanding it is to reconcile visual simplicity with accessibility and business logic, while the solution still has to work across languages and devices. That complexity is what made the project rewarding. I learned a lot about WCAG requirements, keyboard navigation, and how details in field names and error messages affect the user experience.",
            },
            {
              type: "image",
              src: "/images/aera/evidence-hpp-configurator.webp",
              alt: "Screenshots of the payment module with gift card and a saved card",
              width: 1296,
              height: 859,
            },
            {
              type: "field",
              label: "Solution",
              text: "The solution delivered consisted of two template types: a standard template with neutral branding, and a customisable template where merchants could adjust things like logo, colours and background themselves via a dedicated configuration tool. Both templates delivered a consistent, simple and modern user experience, optimised for both web and mobile. The design supported different payment methods and was scalable for future needs. The solution also enabled a seamless, tailored UX across channels and merchants.",
            },
            {
              type: "image",
              src: "/images/aera/hero.webp",
              alt: "The configuration tool for Aera's payment module, open on a laptop",
              width: 1296,
              height: 820,
            },
          ],
        },
      },
    ],
  },

  sideProjects: {
    id: "side-prosjekter",
    label: "Side projects",
    entries: [
      {
        key: "levena",
        period: "2024/25",
        logo: { src: "/logos/levena.png", alt: "Leve NÅ" },
        title:
          "Online course on paediatric palliative care for Leve NÅ (Frambu)",
        body: "Designed an online course together with Leve NÅ, aimed at raising professional competence in paediatric palliative care for municipalities and private actors in the health sector.",
        caseStudy: {
          title:
            "Online course on paediatric palliative care for Leve NÅ (Frambu)",
          meta: "2024/25",
          intro: [
            "Designed an online course together with Leve NÅ, aimed at raising professional competence in paediatric palliative care for municipalities and private actors in the health sector.",
          ],
          blocks: [
            {
              type: "image",
              src: "/images/levena/gallery-photos.webp",
              alt: "Four photos from the project: physiotherapy with a child, a child in a wheelchair with a blanket, hands at a laptop, and a smiling toddler",
              width: 648,
              height: 323,
            },
            {
              type: "sectionIntro",
              id: "opplaeringspakke-barnepalliasjon",
              eyebrow: "",
              title: "Training package in paediatric palliative care",
            },
            {
              type: "field",
              label: "Background",
              text: "Leve NÅ receives many enquiries from municipalities and private providers about support with skills development in paediatric palliative care. There's a need for information and guidance at the systemic level locally, both on paediatric palliative care and on how services can best look after the child and their family. Leve NÅ offers systemic-level support, but local services need both foundational knowledge and guidance. Initiatives like courses and conferences are often costly and don't offer tailored reflection. To meet the need for skills development, Leve NÅ set out to develop a training package in paediatric palliative care in 2024.",
            },
            {
              type: "image",
              src: "/images/levena/levena-website.webp",
              alt: "The Leve NÅ website homepage",
              width: 648,
              height: 308,
            },
            {
              type: "field",
              label: "Goal",
              text: "To raise competence in the field of paediatric palliative care among staff at municipalities and at private companies providing health and care services.",
            },
            {
              type: "field",
              label: "My role",
              text: "Responsible for developing the online course. Structured and visualised the subject matter across the different modules. Collaborated with the rest of the project group and other relevant contributors, such as other relevant specialists/professional communities and user organisations.",
            },
            {
              type: "image",
              src: "/images/levena/course-materials.webp",
              alt: "Excerpts from the course materials: a self-help plan, a module overview and coping strategies",
              width: 648,
              height: 273,
            },
            {
              type: "list",
              label: "My design process",
              marker: "dot",
              items: [
                "Made sure expectations were aligned between all parties – workshops and digital meetings in the early phase",
                "Planned clear communication routines for feedback along the way",
                "Individual lightning demo – finding ideas and key hooks for visual expression, information hierarchy and content presentation",
                "Regular check-ins with specialists to maintain professional accuracy",
                "User-tested the course with acquaintances and specialists – adjusted the design based on key insights from this",
                "A final half-day walkthrough with stakeholders to make sure both the design and the subject matter were good enough for Leve NÅ",
                "Handover and preparation of the modules for launch",
              ],
            },
            {
              type: "field",
              label: "Learning along the way",
              text: "Working on the Leve NÅ project taught me a lot about balancing the aesthetic with the emotional. The subject of paediatric palliative care is both heavy and sensitive, and required a particular eye for tone, content and delivery. I worked largely independently, which was both demanding and rewarding. It wasn't just about creating a visually good solution, but about communicating something important with warmth, clarity and respect. I learned how crucial it is to use design as a tool for conveying gravity — without coming across as clinical or distant.",
            },
            {
              type: "image",
              src: "/images/levena/course-mockup.webp",
              alt: "The online course shown in a browser and on mobile, with the welcome page and a quote from a specialist",
              width: 496,
              height: 308,
            },
            {
              type: "field",
              label: "Solution",
              text: "We developed a web-based introductory course in paediatric palliative care, designed for healthcare staff in the public and private sectors. The course was built in Rise Articulate 360, structured module by module with short text sections, illustrations, reflection questions and audio clips. The content alternates between professional explanations, real cases and personal perspectives from parents and specialists. The course was optimised for both desktop and mobile, and tested continuously for clarity, flow and usability.",
            },
            {
              type: "field",
              label: "Effect",
              text: "The course received very positive feedback from participants. Several described the content as relevant, systematic and useful in their day-to-day work, especially the modules on the parent perspective and reflection. It worked well technically — 85% found it easy to sign up, and over 75% were very satisfied with the navigation and the length of the course. The feedback confirms that both the professional content and the user-friendly setup worked as intended.",
            },
            {
              type: "image",
              src: "/images/levena/evaluation-graph.webp",
              alt: "Evaluation results from the online course shown as a graph",
              width: 648,
              height: 360,
            },
            {
              type: "image",
              src: "/images/levena/evaluation-answers.webp",
              alt: "Open-ended answers from the course evaluation",
              width: 648,
              height: 318,
            },
          ],
        },
      },
    ],
  },

  contact: {
    id: "kontakt",
    label: "Coffee? ☕",
    rows: [
      {
        key: "email",
        label: "Email",
        value: "torhaugtrym@gmail.com",
        href: "",
        copyOnly: true,
      },
      {
        key: "phone",
        label: "Phone",
        value: "+47 98 33 81 74",
        href: "tel:+4798338174",
      },
      {
        key: "linkedin",
        label: "LinkedIn",
        value: "trymt",
        href: "https://www.linkedin.com/in/trymt",
        external: true,
      },
    ],
  },

  bio: "Curious, engaged, and always with a pen or a coffee in hand. I believe good user experiences are built on insight, empathy and professional curiosity — that is what I aim for every day. When the working day is over you will usually find me in running shoes, with a glass of wine, chasing Eurobonus points — or deep in analysis of Manchester United.",

  projectPage: {
    back: "Back to the front page",
    comingSoon:
      "The details for this project are on their way — the full story from start to finish is coming soon.",
  },

  photos: [
    { src: "/images/life-01.webp", alt: "Pizza in a stone oven", tall: true },
    { src: "/images/life-02.webp", alt: "Hiking with friends in summer woods" },
    { src: "/images/life-03.webp", alt: "Skiing under floodlights" },
    {
      src: "/images/life-04.webp",
      alt: "Mountain hike across patchy snow",
      tall: true,
    },
    { src: "/images/life-05.webp", alt: "A row of wine bottles" },
    { src: "/images/life-06.webp", alt: "Laptop and notes on the desk" },
    { src: "/images/life-07.webp", alt: "Wine tasting" },
    { src: "/images/life-08.webp", alt: "A padel court seen from above" },
  ],
};
