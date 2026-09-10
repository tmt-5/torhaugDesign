import type { Dictionary } from "@/content/dictionaries/types";

export const dictionary: Dictionary = {
  meta: {
    title: "Torhaug Design",
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
        body: "Fornebu · Working on the internal systems that let all of Norway take mobile and broadband services for granted.",
      },
      {
        key: "forte",
        period: "2022 – 2026",
        logo: { src: "/logos/forte.png", alt: "Forte Digital" },
        title: "UX designer at Forte",
        body: "Oslo · Consultant with a long list of projects behind me, and several internal roles both social and professional.",
      },
      {
        key: "politiet",
        period: "2021 – 2022",
        logo: { src: "/logos/politiet.png", alt: "The Norwegian Police" },
        title: "Digital product designer at the Norwegian Police IT unit",
        body: "Oslo · Designed complex, security-critical systems in-house.",
      },
      {
        key: "headit",
        period: "2019",
        logo: { src: "/logos/headit.png", alt: "Headit" },
        title: "UX designer at Headit (internship)",
        body: "Hamar · My time at Headit (now Bouvet) taught me the craft of being a self-directed designer, with experience from several real projects.",
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
        color: "#870237",
        title: "ASKO Servering",
        body: "UX lead across product teams. Involved in several initiatives spanning ASKO and NorgesGruppen Data.",
        externalHref: "https://www.askoservering.no",
        caseStudy: {
          title: "Scanning goods on askoservering.no",
          meta: "UX designer · 2024–2025",
          intro: [
            "Two outdated apps had to go. The customers who used them every day had to stay. This is how we moved barcode scanning out of the apps and into the webshop.",
          ],
          blocks: [
            {
              type: "video",
              src: "/cases/asko-skanning/customer-scan.mp4",
              poster: "/cases/asko-skanning/customer-scan-poster.jpg",
              alt: "Video showing barcode scanning in practice: a customer scans an item with their phone",
              width: 810,
              height: 1440,
              maxHeight: 600,
            },
            {
              type: "sectionIntro",
              id: "skanning-av-varer",
              title: "Scanning goods on askoservering.no",
            },
            {
              type: "prose",
              heading: "The starting point",
              paragraphs: [
                "ASKO Servering had three native apps built between 2012 and 2014. They were no longer maintained, one of them had stopped working, and internally the message was clear:",
              ],
            },
            {
              type: "quotes",
              items: [
                "“These apps are a security risk”",
                "“These apps are expensive”",
              ],
            },
            {
              type: "prose",
              paragraphs: [
                "At the same time, over a billion kroner in revenue went through the Mobilhandel app every year, and the share of mobile users on the web had fallen two years running. Switching the apps off just like that wasn't an option. The task was to find out what customers actually used the apps for, and whether it could be solved on the web instead.",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/asko-meme.jpg",
              alt: "Customers looking away from askoservering.no and towards the two native apps",
              width: 1296,
              height: 729,
              caption:
                "The goal: make the webshop the place customers actually want to be.",
            },
            {
              type: "prose",
              heading: "Two hypotheses to test",
              paragraphs: [
                "We didn't want to build an app replacement on guesswork. We formulated two hypotheses and decided what we needed to know to answer them.",
              ],
            },
            {
              type: "step",
              phase: "Hypothesis 1",
              heading:
                "Many users prefer to shop via mobile, but we're unsure how.",
              paragraphs: [
                "Sub-question: How do customers shop on mobile today? What works, and what doesn't?",
              ],
            },
            {
              type: "step",
              phase: "Hypothesis 2",
              heading:
                "Scanning goods on askoservering.no gives a better user experience, especially for new customers in kiosks and convenience retail.",
              paragraphs: [
                "Sub-question: How do we at the same time look after the existing customers who say today's solution works fine?",
              ],
            },
            {
              type: "prose",
              heading: "How I went about it",
            },
            {
              type: "step",
              phase: "Research",
              heading: "Out to the customers",
              paragraphs: [
                "Customer visits to cafés and kiosks, conversations in the customer panel, and observation of how orders actually get made — in cramped premises, in the stockroom, between other tasks.",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/visitCustomer.jpg",
              alt: "Photos from customer visits",
              width: 1296,
              height: 729,
            },
            {
              type: "step",
              phase: "Research",
              heading: "The research was shared, not filed away",
              paragraphs: [
                "Every finding was documented in a research library the whole department could search and contribute to. It meant decisions later in the project could point back to something concrete.",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/insightDocs.jpg",
              alt: "Research library with reports from customer visits and user tests",
              width: 1296,
              height: 729,
            },
            {
              type: "step",
              phase: "Conclusion",
              heading: "Hypothesis 1 fell — and that was good news",
              paragraphs: [
                "Mobile ordering followed a fixed pattern: log in, look at the campaigns, work through the set shopping list, go to checkout, send the order. The webshop already covered this. It only needed minor adjustments, not a new app.",
                "Hypothesis 2 remained, but with a clear risk: scanning is demanding to get good enough in a browser. This was where the effort had to go.",
              ],
            },
            {
              type: "step",
              phase: "Version 1",
              heading: "Camera in the search field",
              paragraphs: [
                "The first version put a camera icon in the search field and recognised barcodes automatically. We demoed the flow widely internally to gather feedback early.",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/v1.jpg",
              alt: "Wireframes of version 1: the homepage, the camera view and a product match",
              width: 1296,
              height: 729,
              caption: "Version 1: automatic recognition, one match at a time.",
            },
            {
              type: "step",
              phase: "Buy-in",
              heading: "Demo before test",
              paragraphs: [
                "The whole flow was laid out screen by screen, with an open invitation to comment. It caught responsiveness, error states and edge cases before we spent customers' time.",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/testQR.jpg",
              alt: "Demo of the whole flow with comments from the team",
              width: 1296,
              height: 729,
            },
            {
              type: "step",
              phase: "User test",
              heading: "Tested on real packaging",
              paragraphs: [
                "We built a test wall with barcodes and actual products, and tested on several phones. The findings were unambiguous.",
              ],
              items: [
                "Automatic recognition wasn't very effective in practice",
                "The camera picked up neighbouring barcodes when they sat close together",
                "Big differences between devices and camera quality",
                "Glare on the packaging made the code hard to read",
                "Weak confirmation that the item had been added to the basket, so people scanned again",
              ],
            },
            {
              type: "quotes",
              items: [
                "“I get a bit stressed that it jumps around like that all the time”",
                "“Now I'm starting to wonder whether I'm the one who's bad at scanning”",
              ],
            },
            {
              type: "video",
              src: "/cases/asko-skanning/user-test.mp4",
              poster: "/cases/asko-skanning/user-test-poster.jpg",
              alt: "Video of a user test: a person scans barcodes on a test wall, with a screen recording of the phone alongside",
              width: 1296,
              height: 729,
            },
            {
              type: "step",
              phase: "Version 2",
              heading: "From automatic to in control",
              paragraphs: [
                "We gave the user control back, and made scanning something you do deliberately — not something that happens.",
              ],
            },
            {
              type: "points",
              items: [
                {
                  title: "Press and hold to scan",
                  body: "The user decides when the code is read, and avoids the camera jumping between items.",
                },
                {
                  title: "List with a counter",
                  body: "Scanned items are collected in a list with quantities, so there's never any doubt that an item was registered.",
                },
                {
                  title: "Manual barcode",
                  body: "If the code can't be read, you type it in instead of giving up.",
                },
                {
                  title: "Handles a poor connection",
                  body: "Items that can't be looked up are queued until the network is back — a basement stockroom was a real scenario.",
                },
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/v2.jpg",
              alt: "Wireframes of version 2: a dedicated scanning entry point, press and hold to scan, a list of scanned items, manual entry and offline handling",
              width: 1296,
              height: 729,
              caption:
                "Version 2: deliberate scanning, a collected list, and a fallback when something doesn't work.",
            },
            {
              type: "step",
              phase: "Version 3",
              heading: "Validated out in the field",
              paragraphs: [
                "The solution was tested with customers in their own premises, with their own goods and their own phones. We were challenged on things we hadn't seen in the office, and fixed them before the broad launch.",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/internalTest.jpg",
              alt: "Scanning tested in real surroundings at a customer's premises",
              width: 1296,
              height: 729,
            },
            {
              type: "prose",
              heading: "The effect",
              paragraphs: [
                "Scanning was released as a soft launch and grew steadily through 2025, without a campaign.",
              ],
            },
            {
              type: "stats",
              items: [
                {
                  value: "13 → 801",
                  label: "scans in the period, from February to September 2025",
                },
                { value: "7 → 656", label: "visits using the feature" },
                { value: "139", label: "scans on the single busiest day" },
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/effectGraphs.jpg",
              alt: "Analytics showing growth in use of the scanning feature through 2025",
              width: 1296,
              height: 729,
              caption:
                "Usage grows steadily through the whole period, with a clear weekly rhythm.",
            },
            {
              type: "quotes",
              items: [
                "“When will you offer scanning for complaints?”",
                "“When will you offer scanning for stocktaking?”",
                "“When will you offer scanning for returns?”",
              ],
            },
            {
              type: "prose",
              paragraphs: [
                "The clearest effect wasn't the numbers, but that customers started asking for more. The feature went from being an app replacement to becoming a building block in several workflows.",
              ],
            },
            {
              type: "prose",
              heading: "What I'm taking with me",
            },
            {
              type: "points",
              items: [
                {
                  title: "Weight the design process to the problem",
                  body: "Hypothesis 1 was disproved quickly and cheaply. That freed up time for what was actually hard.",
                },
                {
                  title: "Curiosity makes better products",
                  body: "The most important findings came from being present where the goods are actually received, not from reading about it.",
                },
                {
                  title: "Launching early beats polishing long",
                  body: "Fast iteration and an early soft launch gave us feedback we couldn't have got in the office.",
                },
              ],
            },
          ],
        },
      },
      {
        key: "trumf",
        period: "2022",
        logo: { src: "/logos/trumf.png", alt: "Trumf" },
        color: "#0A0066",
        title: "Trumf",
        body: "Involved in both the implementation of the Trumf Pay mobile payment solution and the TrumfID sign-in service.",
        externalHref: "https://www.trumf.no",
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
              src: "/images/trumf/gallery1-screens.jpg",
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
                  src: "/images/trumf/gallery2-insight.jpg",
                  alt: "In-app insight screen with a nutritional breakdown",
                  tall: true,
                },
                {
                  src: "/images/trumf/gallery2-qr-card.jpg",
                  alt: "Card with a QR code for registering bonus points",
                },
                {
                  src: "/images/trumf/gallery2-kiosk.jpg",
                  alt: "Self-checkout screen in a store",
                },
                {
                  src: "/images/trumf/gallery2-meeting.jpg",
                  alt: "Team kick-off for Trumf Mobile in a meeting room",
                  tall: true,
                },
                {
                  src: "/images/trumf/gallery2-touchscreen.jpg",
                  alt: "A user testing a touchscreen in-store",
                  tall: true,
                },
                {
                  src: "/images/trumf/gallery2-presentation.jpg",
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
              src: "/images/trumf/onboarding-flow.jpg",
              alt: "Onboarding flow for Trumf Pay: activation, QR card and confirmed payment",
              width: 1296,
              height: 685,
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
              src: "/images/trumf/hero.jpg",
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
        color: "#5A1565",
        title: "Aera Payment & Identification",
        body: "An exciting project set on realising Aera's vision of becoming a leading player in web checkout solutions.",
        externalHref: "https://www.aera.id",
        caseStudy: {
          title: "Aera Payment & Identification",
          meta: "UX designer · 2023",
          intro: [
            "Brought in to help realise Aera's vision of becoming a leading player in web checkout solutions.",
          ],
          blocks: [
            {
              type: "image",
              src: "/images/aera/gallery-screens.png",
              alt: "Screens from Aera's payment module: choosing a payment method in Joker and card details in Meny",
              width: 1296,
              height: 645,
            },
            {
              type: "image",
              src: "/images/aera/evidence-checkout-mobile.png",
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
              src: "/images/aera/customer-journey-map.png",
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
              src: "/images/aera/evidence-hpp-configurator.png",
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
              src: "/images/aera/hero.png",
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
        color: "#D47A1A",
        title:
          "Online course on paediatric palliative care for Leve NÅ (Frambu)",
        body: "Designed an online course together with Leve NÅ, aimed at raising professional competence in paediatric palliative care for municipalities and private actors in the health sector.",
        externalHref: "https://www.levenaa.no",
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
              src: "/images/levena/gallery-photos.png",
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
              src: "/images/levena/levena-website.png",
              alt: "The Leve NÅ website homepage",
              width: 648,
              height: 468,
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
              type: "photos",
              label:
                "Excerpts from the course materials: a self-help plan, module overview, coping strategies and the CSNAT-I framework",
              columns: [83, 83, 179, 83],
              photos: [
                {
                  src: "/images/levena/course-materials-1.png",
                  alt: "Example self-help plan template with two columns for observations and actions",
                  tall: true,
                },
                {
                  src: "/images/levena/course-materials-3.png",
                  alt: "Overview of the five course modules with progress indicators",
                },
                {
                  src: "/images/levena/course-materials-4.png",
                  alt: "Slide on coping strategies for parents",
                },
                {
                  src: "/images/levena/course-materials-2.png",
                  alt: "Horizontal timeline of the five course modules",
                  tall: true,
                },
                {
                  src: "/images/levena/course-materials-5.png",
                  alt: "Hexagon diagram outlining the steps of the CSNAT-I framework",
                  tall: true,
                },
              ],
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
              src: "/images/levena/course-mockup.png",
              alt: "The online course shown in a browser and on mobile, with the welcome page and a quote from a specialist",
              width: 496,
              height: 260,
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
              src: "/images/levena/evaluation-graph.png",
              alt: "Evaluation results from the online course shown as a graph",
              width: 648,
              height: 360,
            },
            {
              type: "image",
              src: "/images/levena/evaluation-answers.png",
              alt: "Open-ended answers from the course evaluation",
              width: 648,
              height: 318,
            },
          ],
        },
      },
      {
        key: "emelie-hollow",
        period: "2026 – Now",
        logo: { src: "/logos/emelie-hollow.png", alt: "Emelie Hollow" },
        color: "#111111",
        title: "Emelie Hollow",
        body: "The website for artist and songwriter Emelie Hollow – a digital home that promotes new songs, sells concert tickets and builds a loyal listener base through a newsletter.",
        externalHref: "https://www.emeliehollow.no",
        caseStudy: {
          title: "Emelie Hollow",
          meta: "2026 – Now",
          intro: [
            "The website for artist and songwriter Emelie Hollow – a digital home that promotes new songs, sells concert tickets and builds a loyal listener base through a newsletter.",
          ],
          blocks: [
            {
              type: "video",
              src: "/images/emelieHollow/site-tour.mp4",
              poster: "/images/emelieHollow/site-tour-poster.jpg",
              alt: "Screen recording showing the Emelie Hollow website in use",
              width: 2340,
              height: 1288,
            },
            {
              type: "sectionIntro",
              id: "et-hjem-for-artisten",
              title: "A home for the artist",
            },
            {
              type: "field",
              label: "Background",
              text: "Emelie Hollow is an artist and songwriter with millions of streams on Spotify. She has taken part in the Norwegian TV series “Hver gang vi møtes”, and has recently performed at the Oslo Opera House. With a growing listener base, she needed a place of her own – outside the algorithms and feeds of social media. A place where new and existing listeners can get to know the music, find the next concert and stay up to date, and where the artist and her team stay in control of where the traffic goes next.",
            },
            {
              type: "field",
              label: "Goal",
              text: "To give the artist a digital home that expresses her graphic and artistic side, while also working as a tool: promoting new releases like “Neste Stasjon” and “To Stopp Unna Karl Johan”, selling tickets to upcoming concerts, and building loyalty, trust and interest through the newsletter.",
            },
            {
              type: "field",
              label: "My role",
              text: "Responsible for the design, development and running of the website. I work closely with Emelie herself, her team and the third party responsible for the newsletters to make sure the result delivers visually, functionally and financially. I follow traffic and behaviour continuously through Vercel's analytics tools, and update the site in step with new releases and concerts.",
            },
            {
              type: "image",
              src: "/images/emelieHollow/home-opera.jpg",
              alt: "The Emelie Hollow homepage with a call to action for the Opera House concert on Sunday 30 August",
              width: 1296,
              height: 772,
            },
            {
              type: "list",
              label: "Contents",
              marker: "dash",
              items: [
                "A homepage with one clear call to action that leads visitors into the intended buying or listening flow – currently tickets for the Opera House on 30 August",
                "A concert overview with upcoming dates and direct links to buy tickets",
                "A discography where every release links straight to Spotify",
                "Newsletter sign-up, designed together with the third party responsible for the mailings",
                "A contact form for enquiries",
                "Merch – already in the navigation, launching later",
              ],
            },
            {
              type: "image",
              src: "/images/emelieHollow/discography.jpg",
              alt: "The discography with the single “To Stopp Unna Karl Johan” in focus and “Neste Stasjon” beside it",
              width: 1296,
              height: 773,
            },
            {
              type: "list",
              label: "Process",
              marker: "dot",
              items: [
                "Kick-off with Emelie and her team – clarifying goals, audiences and the actions the site should drive: listening, buying tickets and signing up for the newsletter",
                "A visual direction built on the artist's own photography and graphic material, so the site feels like an extension of the music",
                "An information architecture with few, clear entry points – Concerts, Discography, Merch and Newsletter",
                "Design and development in short rounds, with regular reviews together with the artist and her team",
                "Coordination with the third party responsible for the newsletters, so the sign-up fits into the existing mailing flow",
                "Launch, followed by ongoing updates to the homepage and calls to action in step with new releases and concerts",
                "Follow-up in Vercel Analytics – comparing visits, page views, bounce rate and referrers with when content goes out on social media",
              ],
            },
            {
              type: "image",
              src: "/images/emelieHollow/newsletter.jpg",
              alt: "The newsletter sign-up form with fields for email and first name",
              width: 1296,
              height: 774,
            },
            {
              type: "field",
              label: "Solution",
              text: "The site is built around the artist's own visual language: large, atmospheric photographs, a classic serif and calm, minimal navigation that lets the music and the images take centre stage. The homepage shifts focus to whatever matters most right now – a new song, a concert or the newsletter – and every section has one clear action, whether that's listening, buying a ticket or signing up.",
            },
            {
              type: "field",
              label: "Learning along the way",
              text: "Working with an artist taught me how closely design and identity are tied together. The site had to feel as personal as the music, while also selling tickets and building a listener base. I learned a lot about balancing aesthetics with clear actions, and about the value of following the data over time: when we can see which channels actually drive traffic, we can make better choices about where and when to communicate. Coordinating several parties – artist, team and third party – towards a shared goal has also taught me a lot.",
            },
            {
              type: "field",
              label: "Effect",
              text: "The website has become a fixed hub in Emelie's communication. In Vercel Analytics we can clearly see visitors, page views, bounce rate and referrers rise and fall in step with releases and social media posts, and we compare this with the rest of the information flow out to her listeners. Traffic peaked around the Opera House concert on 30 August, and the concerts page was the most visited subpage in the period. That gives us control over how we want to drive traffic, and buying and listening habits, from here.",
            },
            {
              type: "stats",
              items: [
                {
                  value: "551",
                  label:
                    "visitors in the last 30 days – up 117% on the previous period",
                },
                { value: "1,145", label: "page views – up 194%" },
                { value: "60%", label: "bounce rate – down 8%" },
                {
                  value: "227",
                  label:
                    "visitors from Google, alongside traffic from Instagram, TikTok and Facebook",
                },
              ],
            },
            {
              type: "image",
              src: "/images/emelieHollow/analytics.jpg",
              alt: "Vercel Analytics for the last 30 days: visitors, page views, bounce rate, most visited pages and referrers",
              width: 1296,
              height: 756,
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
        href: "https://www.linkedin.com/in/trym-torhaug",
        external: true,
      },
    ],
  },

  bio: "Curious, engaged, and always with a pen or a coffee in hand. I believe good user experiences are built on insight, empathy and professional curiosity — that is what I aim for every day. When the working day is over you will usually find me in running shoes, with a glass of wine, chasing Eurobonus points - or deep in analysis of Manchester United.",

  projectPage: {
    back: "Back to the front page",
    comingSoon:
      "The details for this project are on their way — the full story from start to finish is coming soon.",
    visitSite: "Visit the site (opens in a new tab)",
  },

  photos: [
    { src: "/images/life-01.png", alt: "Pizza in a stone oven", tall: true },
    { src: "/images/life-02.png", alt: "Hiking with friends in summer woods" },
    { src: "/images/life-03.png", alt: "Skiing under floodlights" },
    {
      src: "/images/life-04.png",
      alt: "Mountain hike across patchy snow",
      tall: true,
    },
    { src: "/images/life-05.png", alt: "A row of wine bottles" },
    { src: "/images/life-06.png", alt: "Laptop and notes on the desk" },
    { src: "/images/life-07.png", alt: "Wine tasting" },
    { src: "/images/life-08.png", alt: "A padel court seen from above" },
  ],
};
