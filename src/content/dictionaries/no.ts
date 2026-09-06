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
        body: "Fornebu, Norge · Jobber på internsystemer som sørger for vi kan ta mobilnett og bredbåndstjenester for gitt i hele Norge.",
      },
      {
        key: "forte",
        period: "2022 – 2026",
        logo: { src: "/logos/forte.png", alt: "Forte Digital" },
        title: "UX designer i Forte",
        body: "Oslo, Norge · Konsulent med mange prosjekter i sekken, og flere interne verv både sosialt og faglig.",
      },
      {
        key: "politiet",
        period: "2021 – 2022",
        logo: { src: "/logos/politiet.png", alt: "Politiet" },
        title: "Produktdesigner/UX i Politiets IT-enhet",
        body: "Oslo, Norge · Designet komplekse sikkerhetskritiske systemer internt.",
      },
      {
        key: "headit",
        period: "2019",
        logo: { src: "/logos/headit.png", alt: "Headit" },
        title: "UX designer i Headit (praksis)",
        body: "Hamar, Norge · Tiden i Headit (nå Bouvet) lærte meg kunsten å være en selvgående designer med erfaring fra flere reelle prosjekter.",
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
          title: "ASKO Servering",
          meta: "Lead UX · 2 år",
          intro: [
            "ASKO Servering jobber i dag agilt med forvaltning og videreutvikling av askoservering.no og andre relaterte tjenester. Deres overordnede mål er å øke konvertering og kundelojalitet til å forbedre selvbetjening og støtte effektiv bestilling av varer.",
          ],
          blocks: [
            {
              type: "image",
              src: "/images/asko/gallery1-screens.webp",
              alt: "Skjermbilder fra askoservering.no: forside, bli kunde-flyt og sortimentsside",
              width: 1296,
              height: 649,
            },
            {
              type: "sectionIntro",
              id: "redigering-av-bestilling",
              eyebrow: "Eksempelprosjekt",
              title: "Redigering av bestilling",
            },
            {
              type: "field",
              label: "Min rolle",
              text: "Ansvarlig for innsiktsarbeid, idéfase, prototype og testing. Samarbeidet tett med utvikling og forretning for å balansere fleksibilitet og systembegrensninger.",
            },
            {
              type: "photos",
              label: "Bilder fra prosjektarbeidet: innsikt i felt og på lager",
              columns: [83, 181, 181, 181],
              photos: [
                {
                  src: "/images/asko/gallery2-mobile.webp",
                  alt: "Skjermbilde av tilbudsvisning på mobil",
                  tall: true,
                },
                {
                  src: "/images/asko/gallery2-meeting.webp",
                  alt: "Team i møterom rundt en skjerm",
                },
                {
                  src: "/images/asko/gallery2-truck.webp",
                  alt: "ASKO-lastebil utenfor et lager",
                },
                {
                  src: "/images/asko/gallery2-barcode.webp",
                  alt: "Nærbilde av strekkode skannet med mobil",
                  tall: true,
                },
                {
                  src: "/images/asko/gallery2-warehouse.webp",
                  alt: "Varehyller på lageret",
                },
                {
                  src: "/images/asko/gallery2-workers.webp",
                  alt: "Ansatte i vernevester på lageret",
                },
              ],
            },
            {
              type: "field",
              label: "Utfordring",
              text: "Funksjonen for å redigere bestillinger var lite synlig, krevde mye manuell oppfølging og førte ofte til forvirring – særlig blant brukere med lav teknisk kompetanse. Både kundeservice og markedskonsulenter rapporterte om frustrasjon, spesielt ved større ordre der det var lett å miste oversikten.",
            },
            {
              type: "list",
              label: "Overordnet prosess",
              marker: "dot",
              items: [
                "Avholdt dybdeintervjuer og observasjon med kundeservice, salg og 3 større kunder",
                // TODO: legg inn lenke til service design blueprint-dokumentet når det er tilgjengelig.
                "Kartlegge reell brukerflyt og typiske feil ved hjelp av et service design blueprint",
                "Utarbeidet nye konsepter basert på sentral innsikt og painpoints",
                "Fasilitere dialog og workshops med teamet",
                "Bygget klikkbar prototype og brukertestet med kunder",
                "Utvikling og iterasjoner basert på tilbakemeldinger",
                "Pushet MVP ut til en mindre andel brukere (AB-testing) for å validere ide, og bruker et opparbeidet brukerpanel for å ha dialog med superbrukere",
              ],
            },
            {
              type: "field",
              label: "Læring underveis",
              text: "Vi gikk inn i prosjektet med en sterk hypotese om at «less is more» – at mindre informasjon ville gjøre bestillingsopplevelsen enklere og mer brukervennlig. Gjennom brukertesting oppdaget vi det motsatte: For vår B2B-målgruppe – kjøkkensjefer og bestillere i storkjøkken – er konteksten helt annerledes enn i typisk B2C. De gjør hyppige endringer og har behov for å få all nødvendig informasjon – som innhold, emballasje og datoer – presentert tydelig og lett tilgjengelig. Det ble en viktig erkjennelse: B2B-brukere har helt egne behov og arbeidsmåter som vi som team ikke hadde tenkt godt nok på i starten. Dette prosjektet lærte meg viktigheten av å ikke ta B2C-prinsipper for gitt i andre domener.",
            },
            {
              type: "image",
              src: "/images/asko/flow-edit-order.webp",
              alt: "Flyten for å redigere en innsendt bestilling, vist på laptop og mobil",
              width: 1340,
              height: 460,
            },
            {
              type: "field",
              label: "Løsning",
              text: "En ny og synlig «Rediger bestilling»-funksjon for hver innsendte bestilling. Kunden får oversikt over hele bestillingen, vare- og prisendringer, tydelige grenser for hva som kan / ikke kan endres, og mulighet til å gjøre små og større justeringer uten å måtte kontakte kundeservice.",
            },
            {
              type: "list",
              label: "Resultat",
              marker: "dash",
              items: [
                "Salgskonsulenter meldte om færre manuelle oppfølginger",
                "Kunder beskrev løsningen som “enklere og mer profesjonell”",
                "Færre henvendelser om endringer fra kundeservice",
                "Økt tillit og kontroll hos kundene",
              ],
            },
            {
              type: "image",
              src: "/images/asko/hero-laptop-callout.webp",
              alt: "Ny visning i redigeringsflyten som viser oversikt over endringer, med en forklarende callout",
              width: 1280,
              height: 780,
            },
            {
              type: "closing",
              heading: "Eksempler på andre tiltak jeg har jobbet med",
              items: [
                "Nye forsider for ulike brukergrupper: En versjon for påloggede kunder med fokus på oppsalg og relevante tilbud, og en for ikke-påloggede med tydelig budskap og rekrutteringsfokus.",
                "Forbedret brukeropplevelse ved reklamasjon og kundenes dialog med kundeservice.",
                'Forbedret kjøpsknapp og pakningsinformasjon: Utforsket alternativer til "Kjøp"-knappen og visuelle grep for å skille pakningsnivå.',
              ],
            },
            {
              type: "image",
              src: "/images/asko/closing-homepage.webp",
              alt: "Forsiden til askoservering.no",
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
              src: "/images/trumf/gallery1-screens.webp",
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
                  src: "/images/trumf/gallery2-insight.webp",
                  alt: "Innsikt-skjerm i appen med oversikt over næringsinnhold",
                  tall: true,
                },
                {
                  src: "/images/trumf/gallery2-qr-card.webp",
                  alt: "Kort med QR-kode for å registrere bonus",
                },
                {
                  src: "/images/trumf/gallery2-kiosk.webp",
                  alt: "Selvbetjeningskasse med skjerm i butikk",
                },
                {
                  src: "/images/trumf/gallery2-meeting.webp",
                  alt: "Team-kickoff for Trumf Mobil på møterom",
                  tall: true,
                },
                {
                  src: "/images/trumf/gallery2-touchscreen.webp",
                  alt: "Bruker som tester en touchskjerm i butikk",
                  tall: true,
                },
                {
                  src: "/images/trumf/gallery2-presentation.webp",
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
              src: "/images/trumf/onboarding-flow.webp",
              alt: "Onboardingflyt for Trumf Pay: aktivering, QR-kort og bekreftet betaling",
              width: 1296,
              height: 696,
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
              src: "/images/trumf/hero.webp",
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
              src: "/images/aera/gallery-screens.webp",
              alt: "Skjermbilder fra Aeras betalingsmodul: valg av betalingsmetode i Joker og korthåndtering i Meny",
              width: 1296,
              height: 645,
            },
            {
              type: "image",
              src: "/images/aera/evidence-checkout-mobile.webp",
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
              src: "/images/aera/customer-journey-map.webp",
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
              src: "/images/aera/evidence-hpp-configurator.webp",
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
              src: "/images/aera/hero.webp",
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
              src: "/images/levena/gallery-photos.webp",
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
              src: "/images/levena/levena-website.webp",
              alt: "Forsiden til Leve NÅs nettside",
              width: 648,
              height: 308,
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
              type: "image",
              src: "/images/levena/course-materials.webp",
              alt: "Utsnitt av kursmateriell: en selvhjelpsplan, en moduloversikt og mestringsstrategier",
              width: 648,
              height: 273,
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
              src: "/images/levena/course-mockup.webp",
              alt: "Nettkurset vist i nettleser og på mobil, med velkomstside og et sitat fra en fagperson",
              width: 496,
              height: 308,
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
              src: "/images/levena/evaluation-graph.webp",
              alt: "Evalueringsresultater fra nettkurset vist som graf",
              width: 648,
              height: 360,
            },
            {
              type: "image",
              src: "/images/levena/evaluation-answers.webp",
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

  bio: "Nysgjerrig, engasjert og alltid med en penn eller kaffe i hånda. Jeg tror gode brukeropplevelser skapes med innsikt, empati og faglig nysgjerrighet. Det strever jeg etter hver dag. Når arbeidsdagen er over, finner du meg gjerne i løpesko, med et glass vin, på jakt etter Eurobonus-poeng – eller i dyp analyse av Manchester United.",

  projectPage: {
    back: "Tilbake til forsiden",
    comingSoon:
      "Detaljene for dette prosjektet er på vei — kommer snart med hele historien fra start til slutt.",
  },

  photos: [
    { src: "/images/life-01.webp", alt: "Pizza i steinovn", tall: true },
    { src: "/images/life-02.webp", alt: "Tur med venner i sommerskogen" },
    { src: "/images/life-03.webp", alt: "Slalåm i lysløypa" },
    {
      src: "/images/life-04.webp",
      alt: "Fjelltur på snøflekket vidde",
      tall: true,
    },
    { src: "/images/life-05.webp", alt: "Vinflasker på rad" },
    { src: "/images/life-06.webp", alt: "Laptop og notater på pulten" },
    { src: "/images/life-07.webp", alt: "Vinsmaking" },
    { src: "/images/life-08.webp", alt: "Padelbane sett ovenfra" },
  ],
};
