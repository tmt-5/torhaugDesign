import type { Dictionary } from "@/content/dictionaries/types";

export const dictionary: Dictionary = {
  meta: {
    title: "Torhaug Design",
    description:
      "UX designer i Oslo. Design lead i Telenor, tidligere Forte, Politiets IT-enhet og Headit. Erfaring, prosjekter og kontaktinfo.",
    ogLocale: "nb_NO",
  },
  a11y: {
    skipToContent: "Hopp til innhold",
    languageLabel: "Velg språk",
    avatarAlt: "Portrett av Trym Torhaug",
    photosLabel: "Bilder fra livet utenfor jobb",
    copyEmail: "Kopier e-postadresse",
    emailCopied: "Kopiert!",
  },
  header: {
    name: "Trym Torhaug",
    tagline: "UX designer @ Oslo",
  },

  experience: {
    id: "erfaring",
    label: "Erfaring",
    entries: [
      {
        key: "telenor",
        period: "2026 – Nå",
        logo: { src: "/logos/telenor.png", alt: "Telenor" },
        title: "Design lead i Telenor",
        body: "Fornebu · Jobber på internsystemer som sørger for vi kan ta mobilnett og bredbåndstjenester for gitt i hele Norge.",
      },
      {
        key: "forte",
        period: "2022 – 2026",
        logo: { src: "/logos/forte.png", alt: "Forte Digital" },
        title: "UX designer i Forte",
        body: "Oslo · Konsulent med mange prosjekter i sekken, og flere interne verv både sosialt og faglig.",
      },
      {
        key: "politiet",
        period: "2021 – 2022",
        logo: { src: "/logos/politiet.png", alt: "Politiet" },
        title: "Digital produktdesigner i Politiets IT-enhet",
        body: "Oslo · Designet komplekse sikkerhetskritiske systemer internt.",
      },
      {
        key: "headit",
        period: "2019",
        logo: { src: "/logos/headit.png", alt: "Headit" },
        title: "UX designer i Headit (praksis)",
        body: "Hamar · Tiden i Headit (nå Bouvet) lærte meg kunsten å være en selvgående designer med erfaring fra flere reelle prosjekter.",
      },
    ],
  },

  education: {
    id: "utdanning",
    label: "Utdanning",
    entries: [
      {
        key: "ntnu",
        period: "2018 – 2021",
        title: "Bachelor i Interaksjonsdesign",
        meta: "Gjøvik · Norges teknisk-naturvitenskapelige universitet (NTNU)",
        card: {
          // TODO: legg inn lenke til oppgaven (f.eks. NTNU Open) når den er klar.
          thumb: "/images/nevro-thumb.webp",
          thumbAlt: "Nevro — logo for bacheloroppgaven",
          title: "Nevro - Et nevropsykologisk testverktøy",
          subtitle: "Bacheloroppgave",
        },
      },
    ],
  },

  projects: {
    id: "prosjekter",
    label: "Utvalgte prosjekter",
    entries: [
      {
        key: "asko",
        period: "2023 – 2026",
        logo: { src: "/logos/asko.png", alt: "ASKO Servering" },
        color: "#870237",
        title: "ASKO Servering",
        body: "UX-lead på tvers av produktteam. Involvert i flere initiativer på tvers av ASKO og NorgesGruppen Data.",
        caseStudy: {
          title: "Skanning av varer på askoservering.no",
          meta: "UX-designer · 2024–2025",
          intro: [
            "To utdaterte apper skulle bort. Kundene som brukte dem hver dag skulle bli. Slik flyttet vi strekkodeskanning ut av appene og inn i nettbutikken.",
          ],
          blocks: [
            {
              type: "sectionIntro",
              id: "skanning-av-varer",
              title: "Skanning av varer på askoservering.no",
            },
            {
              type: "facts",
              items: [
                { label: "Kunde/kontekst", value: "ASKO Servering" },
                { label: "Min rolle", value: "UX-designer" },
                { label: "Team", value: "Produkttrio med utvikling" },
                { label: "Periode", value: "2024–2025" },
                { label: "Flate", value: "askoservering.no på mobil" },
              ],
            },
            {
              type: "prose",
              heading: "Utgangspunktet",
              paragraphs: [
                "ASKO Servering hadde tre native apper bygget mellom 2012 og 2014. De var ikke lenger vedlikeholdt, én av dem hadde sluttet å virke, og internt var beskjeden tydelig:",
              ],
            },
            {
              type: "quotes",
              items: [
                "«Disse appene er en sikkerhetsrisiko»",
                "«Disse appene er dyre»",
              ],
            },
            {
              type: "prose",
              paragraphs: [
                "Samtidig gikk det over en milliard kroner i omsetning gjennom Mobilhandel-appen hvert år, og andelen mobilbrukere på web hadde falt to år på rad. Å skru av appene uten videre var ikke et alternativ. Oppgaven var å finne ut hva kundene faktisk brukte appene til, og om det kunne løses på web i stedet.",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/side-05.jpg",
              alt: "Kundene ser bort fra askoservering.no og mot de to native appene",
              width: 1296,
              height: 729,
              caption:
                "Målet: gjøre nettbutikken til stedet kundene faktisk vil være.",
            },
            {
              type: "prose",
              heading: "To hypoteser å teste",
              paragraphs: [
                "Vi ville ikke bygge en app-erstatning på gjetning. Vi formulerte to hypoteser og bestemte hva vi måtte vite for å svare på dem.",
              ],
            },
            {
              type: "step",
              phase: "Hypotese 1",
              heading:
                "Mange brukere foretrekker å handle via mobil, men vi er usikre på hvordan.",
              paragraphs: [
                "Underspørsmål: Hvordan handler kundene på mobil i dag? Hva fungerer, og hva gjør det ikke?",
              ],
            },
            {
              type: "step",
              phase: "Hypotese 2",
              heading:
                "Skanning av varer på askoservering.no gir en bedre brukeropplevelse, særlig for nye kunder innen kiosk og servicehandel.",
              paragraphs: [
                "Underspørsmål: Hvordan ivaretar vi samtidig de eksisterende kundene som sier at dagens løsning fungerer fint?",
              ],
            },
            {
              type: "prose",
              heading: "Slik gikk jeg frem",
            },
            {
              type: "step",
              phase: "Innsikt",
              heading: "Ut til kundene",
              paragraphs: [
                "Kundebesøk hos kafeer og kiosker, samtaler i kundepanelet, og observasjon av hvordan bestillinger faktisk blir gjort — i trange lokaler, på lager, mellom andre oppgaver.",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/side-12.jpg",
              alt: "Bilder fra kundebesøk",
              width: 1296,
              height: 729,
            },
            {
              type: "step",
              phase: "Innsikt",
              heading: "Innsikten ble delt, ikke arkivert",
              paragraphs: [
                "Alle funn ble dokumentert i et innsiktsbibliotek som hele avdelingen kunne søke i og bidra til. Det gjorde at beslutningene senere i prosjektet kunne peke tilbake på noe konkret.",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/side-14.jpg",
              alt: "Innsiktsbibliotek med rapporter fra kundebesøk og brukertester",
              width: 1296,
              height: 729,
            },
            {
              type: "step",
              phase: "Konklusjon",
              heading: "Hypotese 1 falt — og det var en god nyhet",
              paragraphs: [
                "Mobilhandelen fulgte et fast mønster: logg inn, se på kampanjer, gå gjennom den oppsatte handlelisten, til kassen, send bestilling. Nettbutikken dekket dette allerede. Det trengtes bare mindre justeringer, ikke en ny app.",
                "Hypotese 2 sto igjen, men med en tydelig risiko: skanning er krevende å få til godt nok i en nettleser. Det var her innsatsen måtte ligge.",
              ],
            },
            {
              type: "step",
              phase: "Versjon 1",
              heading: "Kamera i søkefeltet",
              paragraphs: [
                "Første versjon la et kameraikon i søkefeltet og gjenkjente strekkoder automatisk. Vi demonstrerte flyten bredt internt for å samle tilbakemeldinger tidlig.",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/side-19.jpg",
              alt: "Wireframes av versjon 1: forside, kameravisning og treff på vare",
              width: 1296,
              height: 729,
              caption:
                "Versjon 1: automatisk gjenkjenning, ett treff av gangen.",
            },
            {
              type: "step",
              phase: "Forankring",
              heading: "Demo før test",
              paragraphs: [
                "Hele flyten ble lagt ut skjerm for skjerm, med åpen invitasjon til å kommentere. Det fanget opp responsivitet, feilsituasjoner og kanttilfeller før vi brukte kundenes tid.",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/side-18.jpg",
              alt: "Demo av hele flyten med kommentarer fra teamet",
              width: 1296,
              height: 729,
            },
            {
              type: "step",
              phase: "Brukertest",
              heading: "Testet på ekte emballasje",
              paragraphs: [
                "Vi bygget en testvegg med strekkoder og faktiske produkter, og testet på flere telefoner. Funnene var utvetydige.",
              ],
              items: [
                "Automatisk gjenkjenning var lite effektivt i praksis",
                "Kameraet plukket opp nabostrekkoder når de sto tett",
                "Stor forskjell mellom enheter og kamerakvalitet",
                "Gjenskinn i emballasje gjorde koden vanskelig å lese",
                "Svak bekreftelse på at varen var lagt i kurven, så folk skannet på nytt",
              ],
            },
            {
              type: "quotes",
              items: [
                "«Jeg blir litt stressa at den hopper sånn hele tiden»",
                "«Nå begynner jeg å bli usikker på om det er jeg som er dårlig på å skanne»",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/side-20.jpg",
              alt: "Testoppsett med strekkoder og produkter festet på vegg",
              width: 1296,
              height: 729,
            },
            {
              type: "step",
              phase: "Versjon 2",
              heading: "Fra automatikk til kontroll",
              paragraphs: [
                "Vi ga brukeren styringen tilbake, og gjorde skanning til noe man gjør bevisst — ikke noe som skjer.",
              ],
            },
            {
              type: "points",
              items: [
                {
                  title: "Hold inne for å skanne",
                  body: "Brukeren bestemmer når koden leses, og slipper at kameraet hopper mellom varer.",
                },
                {
                  title: "Liste med teller",
                  body: "Skannede varer samles i en liste med antall, så det er aldri tvil om at varen ble registrert.",
                },
                {
                  title: "Manuell strekkode",
                  body: "Kan koden ikke leses, taster man den inn i stedet for å gi opp.",
                },
                {
                  title: "Tåler dårlig nett",
                  body: "Varer som ikke kan slås opp legges i kø til nettet er tilbake — kjellerlager var et reelt scenario.",
                },
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/side-23.jpg",
              alt: "Wireframes av versjon 2: egen skanneinngang, hold inne for å skanne, liste over skannede varer, manuell inntasting og offline-håndtering",
              width: 1296,
              height: 729,
              caption:
                "Versjon 2: bevisst skanning, samlet liste, og fallback når noe ikke virker.",
            },
            {
              type: "step",
              phase: "Versjon 3",
              heading: "Validert ute i feltet",
              paragraphs: [
                "Løsningen ble testet hos kunder i deres egne lokaler, med deres egne varer og deres egne telefoner. Vi ble utfordret på ting vi ikke hadde sett på kontoret, og rettet det før bred lansering.",
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/side-25.jpg",
              alt: "Skanning testet i reelle omgivelser hos kunde",
              width: 1296,
              height: 729,
            },
            {
              type: "prose",
              heading: "Effekten",
              paragraphs: [
                "Skanning ble lansert som en soft launch og vokste jevnt gjennom 2025, uten kampanje.",
              ],
            },
            {
              type: "stats",
              items: [
                {
                  value: "13 → 801",
                  label:
                    "skanninger i perioden, fra februar til september 2025",
                },
                { value: "7 → 656", label: "besøk som bruker funksjonen" },
                {
                  value: "139",
                  label: "skanninger på det høyeste enkeltdøgnet",
                },
              ],
            },
            {
              type: "image",
              src: "/cases/asko-skanning/side-26.jpg",
              alt: "Analyseverktøy som viser vekst i bruk av skannefunksjonen gjennom 2025",
              width: 1296,
              height: 729,
              caption:
                "Bruken øker jevnt gjennom hele perioden, med tydelig ukesrytme.",
            },
            {
              type: "quotes",
              items: [
                "«Når skal dere tilby skanning til reklamasjoner?»",
                "«Når skal dere tilby skanning til varetelling?»",
                "«Når skal dere tilby skanning til retur?»",
              ],
            },
            {
              type: "prose",
              paragraphs: [
                "Den tydeligste effekten var ikke tallene, men at kundene begynte å spørre etter mer. Funksjonen gikk fra å være en app-erstatning til å bli en byggekloss i flere arbeidsflyter.",
              ],
            },
            {
              type: "prose",
              heading: "Det jeg tar med videre",
            },
            {
              type: "points",
              items: [
                {
                  title: "Vekt designprosessen etter problemet",
                  body: "Hypotese 1 ble avkreftet raskt og billig. Det frigjorde tid til det som faktisk var vanskelig.",
                },
                {
                  title: "Nysgjerrighet gir bedre produkter",
                  body: "De viktigste funnene kom av å være til stede der varene faktisk mottas, ikke av å lese om det.",
                },
                {
                  title: "Tidlig lansering slår lang polering",
                  body: "Rask iterasjon og en tidlig soft launch ga tilbakemeldinger vi ikke kunne fått på kontoret.",
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
        body: "Involvert i både implementeringen av mobilbetalingsløsningen Trumf Pay og innloggingstjenesten TrumfID.",
        caseStudy: {
          title: "Trumf-appen",
          meta: "UX designer · 2022",
          intro: [
            "Trumf har et bredt spekter av digitale nyttetjenester de tilbyr sine medlemmer, for å hjelpe de ta bedre valg i hverdagen.",
            "Kampen om forbrukerne skjer nå i sanntid, på mobil, i app og i alle kanaler. Dagens kunder forventer skreddersydde opplevelser, relevante fordeler og sømløs teknologi. Alt på ett sted. For Trumf handler det ikke lenger bare om bonus, men om å være en relevant del av medlemmenes hverdag.",
          ],
          blocks: [
            {
              type: "image",
              src: "/images/trumf/gallery1-screens.jpg",
              alt: "Skjermbilder fra ulike Trumf-funksjoner: netthandel, Trumf Pay, betalingsbekreftelse og parkering",
              width: 1296,
              height: 643,
            },
            {
              type: "role",
              label: "Min rolle",
              intro: "Jeg har vært endel av to team i Trumf:",
              teams: [
                {
                  title: "Trumf ID",
                  body: "Kjernefunksjoner som sikker ID og innlogging – fundamentet for hele Trumf-opplevelsen på tvers av merkevarene i NorgesGruppen.",
                },
                {
                  id: "trumf-pay",
                  title: "Trumf Pay",
                  body: "En av de nyeste satsingene er Trumf Pay, en mobil betalingsløsning integrert i appen. I dag står Trumf Pay for over 20 % av alle mobilbetalinger i lojalitetsprogrammet – og andelen vokser raskt.",
                },
              ],
            },
            {
              type: "photos",
              label:
                "Bilder fra prosjektarbeidet: innsikt, workshops og butikktesting",
              columns: [83, 83, 179, 83, 179],
              photos: [
                {
                  src: "/images/trumf/gallery2-insight.jpg",
                  alt: "Innsikt-skjerm i appen med oversikt over næringsinnhold",
                  tall: true,
                },
                {
                  src: "/images/trumf/gallery2-qr-card.jpg",
                  alt: "Kort med QR-kode for å registrere bonus",
                },
                {
                  src: "/images/trumf/gallery2-kiosk.jpg",
                  alt: "Selvbetjeningskasse med skjerm i butikk",
                },
                {
                  src: "/images/trumf/gallery2-meeting.jpg",
                  alt: "Team-kickoff for Trumf Mobil på møterom",
                  tall: true,
                },
                {
                  src: "/images/trumf/gallery2-touchscreen.jpg",
                  alt: "Bruker som tester en touchskjerm i butikk",
                  tall: true,
                },
                {
                  src: "/images/trumf/gallery2-presentation.jpg",
                  alt: "Presentasjon av beslutningsinformasjon fra workshop",
                  tall: true,
                },
              ],
            },
            {
              type: "sectionIntro",
              id: "onboardingsflyt",
              eyebrow: "Eksempelprosjekt",
              title: "Onboardingsflyt – Trumf Pay",
            },
            {
              type: "field",
              label: "Utfordring",
              link: {
                before:
                  "Trumf ønsket en forståelig og oversiktelig onboarding av det nye konseptet ",
                linkText: "Trumf Pay",
                linkHref: "#trumf-pay",
                after:
                  ". Vi måtte informere brukere at de måtte ha riktig bank, godkjenne vilkår, at betalingen foregikk konto-til-konto, osv. Dette førte til frafall og misforståelser i onboarding.",
              },
            },
            {
              type: "field",
              label: "Min rolle",
              text: "Interaksjonsdesign og UI. Ansvarlig for struktur, UI, microcopy og design guidelines. Designet i Figma, samarbeidet tett med produkt, utvikling og juridisk for å balansere tydelighet og krav.",
            },
            {
              type: "image",
              src: "/images/trumf/onboarding-flow.jpg",
              alt: "Onboardingflyt for Trumf Pay: aktivering, QR-kort og bekreftet betaling",
              width: 1296,
              height: 685,
            },
            {
              type: "list",
              label: "Prosess",
              marker: "dot",
              items: [
                "Kartla kritiske informasjonsbehov sammen med produkt, tech og juridisk",
                "Utarbeidet prototype som utgangspunkt",
                "Intervjuet brukere for å forstå forventninger og terskler",
                "Gjennomgang med teamet – design review og workshops",
                "Iterasjon av designet basert på tilbakemeldinger og juridiske endringer",
              ],
            },
            {
              type: "field",
              label: "Læring underveis",
              text: "I arbeidet med å forbedre onboardingen i Trumf-appen tok vi utgangspunkt i klassiske prinsipper om at «jo færre klikk, jo bedre opplevelse». Men vi erfarte raskt – både gjennom kundefeedback og testing – at denne tilnærmingen svekket brukerens forståelse av hva de faktisk samtykket til. Færre steg førte til mindre kontekst og lavere tillit. Vi måtte derfor finne en balanse: Hvordan sikre tydelighet og brukeropplevelse samtidig som vi respekterte forretningsbehov og juridiske krav? Dette prosjektet ble en øvelse i å balansere indre designintuisjon med reell innsikt fra sluttbrukerne – og i å akseptere at enkelhet ikke alltid betyr færre steg.",
            },
            {
              type: "list",
              label: "Løsning",
              intro: "En ny, helhetlig onboarding bestående av:",
              marker: "dash",
              items: [
                "Enkle forklaringer av konto-til-konto og sikkerhet",
                "Tydelig sjekk for bankstøtte og tilkobling",
                "Informasjon om vilkår og hva brukeren godkjenner",
                "UI-animasjoner og små mikrointeraksjoner som skaper flyt og tillit",
              ],
            },
            {
              type: "image",
              src: "/images/trumf/hero.jpg",
              alt: "Trumf-appens hjemskjerm med saldo, historikk og hurtigvalg",
              width: 1295,
              height: 971,
            },
            {
              type: "closing",
              heading: "Eksempler på andre tiltak jeg har jobbet med",
              items: [
                "Ny innloggingsflyt Trumf ID med biometri",
                "Overgangen fra fysisk til digitalt Trumf-kort, og hvordan det skal leve i ny app.",
                'Forbedret kjøpsknapp og pakningsinformasjon: Utforsket alternativer til "Kjøp"-knappen og visuelle grep for å skille pakningsnivå.',
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
        title: "Aera Betaling & Identifikasjon",
        body: "Spennende prosjekt som gikk ut på å realisere Aera sin visjon om å bli en ledende aktør innenfor checkout-løsninger på web.",
        caseStudy: {
          title: "Aera Betaling & Identifikasjon",
          meta: "UX designer · 2023",
          intro: [
            "Ble involvert for å realisere Aera sin visjon om å bli en ledende aktør innenfor checkout-løsninger på web.",
          ],
          blocks: [
            {
              type: "image",
              src: "/images/aera/gallery-screens.png",
              alt: "Skjermbilder fra Aeras betalingsmodul: valg av betalingsmetode i Joker og korthåndtering i Meny",
              width: 1296,
              height: 645,
            },
            {
              type: "image",
              src: "/images/aera/evidence-checkout-mobile.png",
              alt: "Bruker som betaler med kort i Aeras betalingsmodul på et nettbrett",
              width: 1036,
              height: 894,
            },
            {
              type: "sectionIntro",
              id: "ny-checkout-modul",
              eyebrow: "Eksempelprosjekt",
              title: "Ny checkout modul",
            },
            {
              type: "field",
              label: "Bakgrunn",
              text: "Aera bygger en ny betalingstjeneste for å bedre imøtekomme kundenes behov for en samlet betalingsopplevelse. Som en del av prosjektet må Aera modernisere mange front-end-komponenter for å holde seg konkurransedyktig. Prosjektets hovedfokus er å modernisere den hostede betalingsmodulen, som er et viktig betalingsvindu for netthandel. Det gjør det mulig for nettbutikker å akseptere flere betalingsmetoder uten å måtte bekymre seg for sikkerhet og etterlevelse.",
            },
            {
              type: "field",
              label: "Mål",
              text: "Målet er å forbedre funksjonaliteten og brukeropplevelsen i HPP'en, slik at det blir enklere og mer intuitivt å bruke. Dette skal bidra til å øke konverteringsraten hos nettbutikkene og styrke deres merkevare. De ønsker at løsningen skal være en sømløs brukeropplevelse i tråd med beste markedsstandard.",
            },
            {
              type: "field",
              label: "Min rolle",
              text: "UX designer og fasilitator / team lead for et team på 3 stk – frontend, grafisk design og UX. Ansvarlig for brukeropplevelse og flyt. Fasilitering av workshops med stakeholdere, gjennomføring av brukertester samt utforming av wireframes og prototype.",
            },
            {
              type: "image",
              src: "/images/aera/evidence-slack.webp",
              alt: "Slack-meldinger og bilde fra en workshop med utviklingsteamet",
              width: 1296,
              height: 636,
            },
            {
              type: "list",
              label: "Prosess",
              marker: "dot",
              items: [
                "Client brief og oppstart – oppstartsmøte og workshop med kunden for å avklare forventninger til prosjektet, roller og leveranser. Kunden hadde tydelige rammer og høye forventninger, så hovedfokuset var å skape verdi raskt og legge til rette for tett iterasjon.",
                "Team canvas med utviklingsteamet – vi ble kjent, avklarte roller og ansvar, og etablerte gode kommunikasjonsrutiner for et effektivt samarbeid.",
                "Service design blueprint – vi utarbeidet en teknisk brukerreise for å kartlegge flyt, avhengigheter og potensielle flaskehalser i løsningen.",
                "Design og testing – utviklet og brukertestet tidlige skisser for å validere retning og identifisere friksjonspunkter tidlig.",
                "Parallell utvikling – Frontend-teamet startet med oppsett og utvikling parallelt med designprosessen, for å sikre fremdrift.",
                "Begrensninger og justeringer – funn fra innsikt, samt tekniske og juridiske føringer, påvirket videre designvalg og brukeropplevelse.",
                "Løpende kvalitetssikring – hyppige innsjekker med kunden og prosjektleder for å sikre at vi var på riktig spor gjennom hele løpet.",
                "Universell utforming – testet løsningen systematisk for UU, og justerte der det var nødvendig for å sikre tilgjengelighet.",
                "Heuristisk evaluering – gjennomførte en evaluering basert på etablerte heuristikker og forbedret løsningens brukervennlighet.",
                "Avsluttende workshop og overlevering – sluttworkshop med gjennomgang av gjenværende arbeid, overlevering til utvikling og komplett designsystem for videre skalering.",
              ],
            },
            {
              type: "image",
              src: "/images/aera/customer-journey-map.png",
              alt: "Customer journey map for HPP-konfigurasjonsportalen",
              width: 1296,
              height: 634,
            },
            {
              type: "field",
              label: "Læring underveis",
              text: "Prosjektet ga meg en dypere forståelse av komplekst skjemadesign. Å lage noe for alle tar tid og krever iterasjon og testing. Jeg erfarte hvor krevende det er å forene visuell enkelhet med tilgjengelighet og forretningslogikk, samtidig som løsningen må fungere på tvers av språk og enheter. Denne kompleksiteten gjorde prosjektet givende. Jeg lærte mye om WCAG-krav, tastaturnavigasjon, og hvordan detaljer i feltnavn og feilmeldinger påvirker brukeropplevelsen.",
            },
            {
              type: "image",
              src: "/images/aera/evidence-hpp-configurator.png",
              alt: "Skjermbilder av betalingsmodulen med gavekort og lagret kort",
              width: 1296,
              height: 859,
            },
            {
              type: "field",
              label: "Løsning",
              text: "Løsningen som ble levert besto av to maltyper: en standardmal med nøytral profilering, og en tilpasningsbar mal hvor forhandlerne selv kunne justere blant annet logo, farger og bakgrunn via et eget konfigurasjonsverktøy. Begge malene leverte en enhetlig, enkel og moderne brukeropplevelse, optimalisert for både web og mobil. Designet støttet ulike betalingsmetoder og var skalerbart for fremtidige behov. Løsningen la også til rette for sømløs og tilpasset UX på tvers av kanaler og forhandlere.",
            },
            {
              type: "image",
              src: "/images/aera/hero.png",
              alt: "Konfigurasjonsverktøyet for Aeras betalingsmodul åpent på en bærbar PC",
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
    label: "Side-prosjekter",
    entries: [
      {
        key: "levena",
        period: "2024/25",
        logo: { src: "/logos/levena.png", alt: "Leve NÅ" },
        color: "#D47A1A",
        title: "Nettkurs om barnepalliasjon for Leve NÅ (Frambu)",
        body: "Utformet nettkurs i samarbeid med Leve NÅ hvor formålet har vært å øke faglig kompetanse om barnepalliasjon for kommuner og private aktører i helsesektoren.",
        caseStudy: {
          title: "Nettkurs om barnepalliasjon for Leve NÅ (Frambu)",
          meta: "2024/25",
          intro: [
            "Utformet nettkurs i samarbeid med Leve NÅ hvor formålet har vært å øke faglig kompetanse om barnepalliasjon for kommuner og private aktører i helsesektoren.",
          ],
          blocks: [
            {
              type: "image",
              src: "/images/levena/gallery-photos.png",
              alt: "Fire bilder fra prosjektarbeidet: fysioterapi med et barn, et barn i rullestol med et teppe, hender ved en laptop, og et smilende småbarn",
              width: 648,
              height: 323,
            },
            {
              type: "sectionIntro",
              id: "opplaeringspakke-barnepalliasjon",
              eyebrow: "",
              title: "Opplæringspakke barnepalliasjon (OP)",
            },
            {
              type: "field",
              label: "Bakgrunn",
              text: "Leve NÅ får mange henvendelser fra kommuner og private aktører om bistand til kompetanseheving i barnepalliasjon. Det er behov for informasjon og veiledning på systemnivå lokalt, både om barnepalliasjon og hvordan instansene best ivaretar barnet og pårørende. Leve NÅ tilbyr systemnivåstøtte, men lokale instanser trenger både grunnleggende kunnskap og veiledning. Tiltak som kurs og konferanser er ofte kostbare og gir ikke tilpasset refleksjon. For å møte behovet for kompetanseheving vil Leve NÅ utvikle en Opplæringspakke i barnepalliasjon i 2024.",
            },
            {
              type: "image",
              src: "/images/levena/levena-website.png",
              alt: "Forsiden til Leve NÅs nettside",
              width: 648,
              height: 468,
            },
            {
              type: "field",
              label: "Målsetning",
              text: "Å heve kompetansen innen fagfeltet barnepalliasjon hos ansatte i kommuner og ansatte i private firmaer som tilbyr helse- og omsorgstjenester.",
            },
            {
              type: "field",
              label: "Min rolle",
              text: "Ansvarlig for utarbeidelsen av nettkurset. Strukturere og visualisere faglig innhold i de ulike modulene. Samarbeid med resten av prosjektgruppen og andre relevante bidragsytere, som f.eks. andre aktuelle fagpersoner/fagmiljøer og brukerorganisasjoner.",
            },
            {
              type: "photos",
              label:
                "Utsnitt fra kursmateriellet: en selvhjelpsplan, moduloversikt, mestringsstrategier og CSNAT-I-rammeverket",
              columns: [83, 83, 179, 83],
              photos: [
                {
                  src: "/images/levena/course-materials-1.png",
                  alt: "Eksempel på en selvhjelpsplan med kolonner for observasjoner og tiltak",
                  tall: true,
                },
                {
                  src: "/images/levena/course-materials-3.png",
                  alt: "Oversikt over kursets fem moduler med fremdriftsindikatorer",
                },
                {
                  src: "/images/levena/course-materials-4.png",
                  alt: "Lysbilde om mestringsstrategier for pårørende",
                },
                {
                  src: "/images/levena/course-materials-2.png",
                  alt: "Horisontal tidslinje over kursets fem moduler",
                  tall: true,
                },
                {
                  src: "/images/levena/course-materials-5.png",
                  alt: "Sekskant-diagram som viser trinnene i CSNAT-I-rammeverket",
                  tall: true,
                },
              ],
            },
            {
              type: "list",
              label: "Min designprosess",
              marker: "dot",
              items: [
                "Sørge for at forventninger mellom alle parter er forent – workshops og digitale møter i startfasen",
                "Planlegge tydelige kommunikasjonsrutiner for feedback og tilbakemeldinger på det som gjøres underveis",
                "Individuell lightning demo – finne ideer og sentrale knagger til visuelt uttrykk, informasjonshierarki og innholdspresentasjon",
                "Jevnlige innsjekk med fagpersoner for å opprettholde faglig nøyaktighet",
                "Brukertest av kurset på bekjente og fagpersoner – justere utforming basert på sentral innsikt herfra",
                "Siste halvdagsgjennomgang med interessenter for å sikre både utforming og faglig innhold er godt nok for Leve NÅ",
                "Handover og klargjøring av modulene for lansering",
              ],
            },
            {
              type: "field",
              label: "Læring underveis",
              text: "Å jobbe med Leve NÅ-prosjektet lærte meg mye om å balansere det estetiske med det emosjonelle. Temaet barnepalliasjon er både tungt og følsomt, og krevde et spesielt blikk på tone, innhold og formidling. Jeg jobbet i stor grad selvgående, noe som både var krevende og utviklende. Det handlet ikke bare om å skape en visuelt god løsning, men om å kommunisere noe viktig med varme, tydelighet og respekt. Jeg lærte hvor avgjørende det er å bruke design som et verktøy for å formidle alvor – uten å virke klinisk eller distansert.",
            },
            {
              type: "image",
              src: "/images/levena/course-mockup.png",
              alt: "Nettkurset vist i nettleser og på mobil, med velkomstside og et sitat fra en fagperson",
              width: 496,
              height: 260,
            },
            {
              type: "field",
              label: "Løsning",
              text: "Vi utviklet et nettbasert introduksjonskurs i barnepalliasjon, designet for helsepersonell i offentlig og privat sektor. Kurset ble laget i verktøyet Rise Articulate 360, og bygget opp modulbasert med korte tekstseksjoner, illustrasjoner, refleksjonsspørsmål og lydklipp. Innholdet veksler mellom faglige forklaringer, virkelige caser og personlige perspektiver fra foreldre og fagpersoner. Kurset ble optimalisert for både desktop og mobil, og testet løpende for tydelighet, flyt og brukervennlighet.",
            },
            {
              type: "field",
              label: "Effekt",
              text: "Kurset fikk svært gode tilbakemeldinger fra deltakerne. Flere beskrev innholdet som relevant, systematisk og nyttig i arbeidshverdagen, særlig modulene om foreldreperspektiv og refleksjon. Teknisk fungerte kurset godt – 85 % mente det var enkelt å melde seg på, og over 75 % var svært fornøyde med navigasjonen og lengden på kurset. Tilbakemeldingene bekrefter at både det faglige og det brukervennlige oppsettet fungerte etter intensjonen.",
            },
            {
              type: "image",
              src: "/images/levena/evaluation-graph.png",
              alt: "Evalueringsresultater fra nettkurset vist som graf",
              width: 648,
              height: 360,
            },
            {
              type: "image",
              src: "/images/levena/evaluation-answers.png",
              alt: "Åpne svar fra evalueringen av nettkurset",
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
    label: "Kaffe? ☕",
    rows: [
      {
        key: "email",
        label: "E-post",
        value: "torhaugtrym@gmail.com",
        href: "",
        copyOnly: true,
      },
      {
        key: "phone",
        label: "Tlf",
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

  bio: "Nysgjerrig, engasjert og alltid med en penn eller kaffe i hånda. Jeg tror gode brukeropplevelser skapes med innsikt, empati og faglig nysgjerrighet. Det strever jeg etter hver dag. Når arbeidsdagen er over, finner du meg gjerne i løpesko, med et glass vin, på jakt etter Eurobonus-poeng eller i dyp analyse av Manchester United.",

  projectPage: {
    back: "Tilbake til forsiden",
    comingSoon:
      "Detaljene for dette prosjektet er på vei — kommer snart med hele historien fra start til slutt.",
  },

  photos: [
    { src: "/images/life-01.png", alt: "Pizza i steinovn", tall: true },
    { src: "/images/life-02.png", alt: "Tur med venner i sommerskogen" },
    { src: "/images/life-03.png", alt: "Slalåm i lysløypa" },
    {
      src: "/images/life-04.png",
      alt: "Fjelltur på snøflekket vidde",
      tall: true,
    },
    { src: "/images/life-05.png", alt: "Vinflasker på rad" },
    { src: "/images/life-06.png", alt: "Laptop og notater på pulten" },
    { src: "/images/life-07.png", alt: "Vinsmaking" },
    { src: "/images/life-08.png", alt: "Padelbane sett ovenfra" },
  ],
};
