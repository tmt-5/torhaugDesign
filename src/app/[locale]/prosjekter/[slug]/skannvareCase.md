# Innhold: Skanning av varer på askoservering.no

Dette er fasit for all tekst på casesiden. Teksten skal brukes ordrett.
Ikke skriv om, ikke forkort, ikke legg til.

---

## Meta

- **Tittel:** Skanning av varer på askoservering.no
- **Ingress:** To utdaterte apper skulle bort. Kundene som brukte dem hver dag skulle bli. Slik flyttet vi strekkodeskanning ut av appene og inn i nettbutikken.
- **Kunde/kontekst:** ASKO Servering
- **Min rolle:** UX-designer
- **Team:** Produkttrio med utvikling
- **Periode:** 2024–2025
- **Flate:** askoservering.no på mobil

---

## Seksjon 1 — Utgangspunktet

ASKO Servering hadde tre native apper bygget mellom 2012 og 2014. De var ikke lenger vedlikeholdt, én av dem hadde sluttet å virke, og internt var beskjeden tydelig:

> «Disse appene er en sikkerhetsrisiko»

> «Disse appene er dyre»

Samtidig gikk det over en milliard kroner i omsetning gjennom Mobilhandel-appen hvert år, og andelen mobilbrukere på web hadde falt to år på rad. Å skru av appene uten videre var ikke et alternativ. Oppgaven var å finne ut hva kundene faktisk brukte appene til, og om det kunne løses på web i stedet.

**Bilde:** `side-05.jpg`
**Bildetekst:** Målet: gjøre nettbutikken til stedet kundene faktisk vil være.
**Alt-tekst:** Kundene ser bort fra askoservering.no og mot de to native appene

---

## Seksjon 2 — To hypoteser å teste

Vi ville ikke bygge en app-erstatning på gjetning. Vi formulerte to hypoteser og bestemte hva vi måtte vite for å svare på dem.

### Hypotese 1

Mange brukere foretrekker å handle via mobil, men vi er usikre på hvordan.

_Underspørsmål:_ Hvordan handler kundene på mobil i dag? Hva fungerer, og hva gjør det ikke?

### Hypotese 2

Skanning av varer på askoservering.no gir en bedre brukeropplevelse, særlig for nye kunder innen kiosk og servicehandel.

_Underspørsmål:_ Hvordan ivaretar vi samtidig de eksisterende kundene som sier at dagens løsning fungerer fint?

---

## Seksjon 3 — Slik gikk jeg frem

Sju steg. Hvert steg har en fase-etikett, en overskrift, brødtekst og som regel ett bilde.

### Steg 1

- **Fase:** Innsikt
- **Overskrift:** Ut til kundene
- **Tekst:** Kundebesøk hos kafeer og kiosker, samtaler i kundepanelet, og observasjon av hvordan bestillinger faktisk blir gjort — i trange lokaler, på lager, mellom andre oppgaver.
- **Bilde:** `side-12.jpg`
- **Alt-tekst:** Bilder fra kundebesøk

### Steg 2

- **Fase:** Innsikt
- **Overskrift:** Innsikten ble delt, ikke arkivert
- **Tekst:** Alle funn ble dokumentert i et innsiktsbibliotek som hele avdelingen kunne søke i og bidra til. Det gjorde at beslutningene senere i prosjektet kunne peke tilbake på noe konkret.
- **Bilde:** `side-14.jpg`
- **Alt-tekst:** Innsiktsbibliotek med rapporter fra kundebesøk og brukertester

### Steg 3 (uten bilde)

- **Fase:** Konklusjon
- **Overskrift:** Hypotese 1 falt — og det var en god nyhet
- **Tekst, avsnitt 1:** Mobilhandelen fulgte et fast mønster: logg inn, se på kampanjer, gå gjennom den oppsatte handlelisten, til kassen, send bestilling. Nettbutikken dekket dette allerede. Det trengtes bare mindre justeringer, ikke en ny app.
- **Tekst, avsnitt 2:** Hypotese 2 sto igjen, men med en tydelig risiko: skanning er krevende å få til godt nok i en nettleser. Det var her innsatsen måtte ligge.

### Steg 4

- **Fase:** Versjon 1
- **Overskrift:** Kamera i søkefeltet
- **Tekst:** Første versjon la et kameraikon i søkefeltet og gjenkjente strekkoder automatisk. Vi demonstrerte flyten bredt internt for å samle tilbakemeldinger tidlig.
- **Bilde:** `side-19.jpg`
- **Bildetekst:** Versjon 1: automatisk gjenkjenning, ett treff av gangen.
- **Alt-tekst:** Wireframes av versjon 1: forside, kameravisning og treff på vare

### Steg 5

- **Fase:** Forankring
- **Overskrift:** Demo før test
- **Tekst:** Hele flyten ble lagt ut skjerm for skjerm, med åpen invitasjon til å kommentere. Det fanget opp responsivitet, feilsituasjoner og kanttilfeller før vi brukte kundenes tid.
- **Bilde:** `side-18.jpg`
- **Alt-tekst:** Demo av hele flyten med kommentarer fra teamet

### Steg 6

- **Fase:** Brukertest
- **Overskrift:** Testet på ekte emballasje
- **Tekst:** Vi bygget en testvegg med strekkoder og faktiske produkter, og testet på flere telefoner. Funnene var utvetydige.
- **Funnliste:**
  - Automatisk gjenkjenning var lite effektivt i praksis
  - Kameraet plukket opp nabostrekkoder når de sto tett
  - Stor forskjell mellom enheter og kamerakvalitet
  - Gjenskinn i emballasje gjorde koden vanskelig å lese
  - Svak bekreftelse på at varen var lagt i kurven, så folk skannet på nytt
- **Sitater (fra brukertest, vises sammen):**
  - «Jeg blir litt stressa at den hopper sånn hele tiden»
  - «Nå begynner jeg å bli usikker på om det er jeg som er dårlig på å skanne»
- **Bilde:** `side-20.jpg`
- **Alt-tekst:** Testoppsett med strekkoder og produkter festet på vegg

### Steg 7

- **Fase:** Versjon 2
- **Overskrift:** Fra automatikk til kontroll
- **Tekst:** Vi ga brukeren styringen tilbake, og gjorde skanning til noe man gjør bevisst — ikke noe som skjer.
- **Fire endringer (hver med tittel og forklaring):**
  1. **Hold inne for å skanne** — Brukeren bestemmer når koden leses, og slipper at kameraet hopper mellom varer.
  2. **Liste med teller** — Skannede varer samles i en liste med antall, så det er aldri tvil om at varen ble registrert.
  3. **Manuell strekkode** — Kan koden ikke leses, taster man den inn i stedet for å gi opp.
  4. **Tåler dårlig nett** — Varer som ikke kan slås opp legges i kø til nettet er tilbake — kjellerlager var et reelt scenario.
- **Bilde:** `side-23.jpg`
- **Bildetekst:** Versjon 2: bevisst skanning, samlet liste, og fallback når noe ikke virker.
- **Alt-tekst:** Wireframes av versjon 2: egen skanneinngang, hold inne for å skanne, liste over skannede varer, manuell inntasting og offline-håndtering

### Steg 8

- **Fase:** Versjon 3
- **Overskrift:** Validert ute i feltet
- **Tekst:** Løsningen ble testet hos kunder i deres egne lokaler, med deres egne varer og deres egne telefoner. Vi ble utfordret på ting vi ikke hadde sett på kontoret, og rettet det før bred lansering.
- **Bilde:** `side-25.jpg`
- **Alt-tekst:** Skanning testet i reelle omgivelser hos kunde

---

## Seksjon 4 — Effekten

Skanning ble lansert som en soft launch og vokste jevnt gjennom 2025, uten kampanje.

**Nøkkeltall (tre stykker):**

- `13 → 801` — skanninger i perioden, fra februar til september 2025
- `7 → 656` — besøk som bruker funksjonen
- `139` — skanninger på det høyeste enkeltdøgnet

**Bilde:** `side-26.jpg`
**Bildetekst:** Bruken øker jevnt gjennom hele perioden, med tydelig ukesrytme.
**Alt-tekst:** Analyseverktøy som viser vekst i bruk av skannefunksjonen gjennom 2025

**Kundespørsmål (vises som en gruppe, framhevet):**

> «Når skal dere tilby skanning til reklamasjoner?»
> «Når skal dere tilby skanning til varetelling?»
> «Når skal dere tilby skanning til retur?»

**Avslutning på seksjonen:** Den tydeligste effekten var ikke tallene, men at kundene begynte å spørre etter mer. Funksjonen gikk fra å være en app-erstatning til å bli en byggekloss i flere arbeidsflyter.

---

## Seksjon 5 — Det jeg tar med videre

Tre punkter, hver med overskrift og én setning.

1. **Vekt designprosessen etter problemet** — Hypotese 1 ble avkreftet raskt og billig. Det frigjorde tid til det som faktisk var vanskelig.
2. **Nysgjerrighet gir bedre produkter** — De viktigste funnene kom av å være til stede der varene faktisk mottas, ikke av å lese om det.
3. **Tidlig lansering slår lang polering** — Rask iterasjon og en tidlig soft launch ga tilbakemeldinger vi ikke kunne fått på kontoret.

---

## Bildeliste

| Fil         | Innhold                           | Hvor      |
| ----------- | --------------------------------- | --------- |
| side-05.jpg | Målbilde, kundene og de to appene | Seksjon 1 |
| side-12.jpg | Kundebesøk                        | Steg 1    |
| side-14.jpg | Innsiktsbibliotek                 | Steg 2    |
| side-19.jpg | Wireframes versjon 1              | Steg 4    |
| side-18.jpg | Intern demo med kommentarer       | Steg 5    |
| side-20.jpg | Testvegg med strekkoder           | Steg 6    |
| side-23.jpg | Wireframes versjon 2              | Steg 7    |
| side-25.jpg | Felttest                          | Steg 8    |
| side-26.jpg | Analysetall                       | Seksjon 4 |
