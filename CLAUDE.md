# En svensk kulturklassiker – CLAUDE.md

## Projektet
Statisk webbsida för "En svensk kulturklassiker", publiceras via GitHub Pages.
Ramverk: **Astro** med statisk output. Inga JS-ramverk, vanilla Astro-komponenter.

## Språk
All text på sidan är på **svenska**. Kod och identifierare på engelska.

## Sidor
- `/` – lång scrollande startsida
- `/anmalan` – anmälningsformulär
- `/om` – om projektet

## Design & stil
- **Bakgrund:** vit (`#FFFFFF`)
- **Känsla:** högtidligt, officiellt, positivt, modernt men inte tekniskt
- **Typsnitt:** Cormorant Garamond (rubriker/display), Inter (brödtext/UI)
- **Färgpalett:**
  - Blå: `#004F8C` / mörkblå: `#003A6B` (svenska färger, likt En svensk klassiker)
  - Guld: `#C9A84C` / ljusguld: `#E2C47A`
  - Text: `#1A1A1A` / dämpad: `#6B6868`
- **Logotyp:** SVG-platshållare, cirkulär badge i blå/guld, inspirerad av En svensk klassiker. Ska ersättas med riktig logo senare.

## Kategorisektionen (sticky scroll)
- Fem kort staplas på varandra i en sticky viewport-sektion (600vh total höjd)
- Varje kort täcker hela vyn när det är aktivt
- **Sekvens per kort:** fotot (helskärm) glider in från höger först, sedan glider texten in och lägger sig ovanpå vänster halva
- Foto-transition: `0.65s`, ingen fördröjning
- Text-transition: `0.55s`, `transition-delay: 0.3s`
- Fotots inre lager är bredare än containern (parallax-rum) och skiftar horisontellt via JS baserat på scroll-progress
- Vänsterkolumn med klickbara siffror (01–05), alltid synlig ovanför korten
- Texthalvan har vit bakgrund, guldram (border-top) och lätt skugga mot fotot

## Formuläret (/anmalan)
- Fält: förnamn, efternamn, e-post, gatuadress, postnummer, ort
- Fem textareas, ett per kategori: Scenkonst, Musik, Museum, Film, Fri kultur
- Ej inkopplat mot backend ännu – redo för Formspree (`action`-attribut kommenterat)
- Ska inte kräva backend-ändringar för att koppla på

## De fem kategorierna
| Nr | Namn | Beskrivning |
|----|------|-------------|
| 01 | Scenkonst | Etablerad scen – opera, musikal, balett, institutionsteater, länsteater eller etablerad privatteater |
| 02 | Musik | Konsert med orkester och/eller kör – symfoniorkester, körverk etc. |
| 03 | Museum | Besök på ett större museum |
| 04 | Film | Svenskproducerad film på bio, aktuellt år eller året innan |
| 05 | Fri kultur | Föreställning av fri teatergrupp, danssällskap eller liknande |

## Diplom
- Den som klarar alla fem under ett kalenderår kan ansöka om tryckt diplom
- Skickas till angiven adress mot självkostnadspris
- Formuläret samlar in nödvändig information

## Scroll-animationer (övriga sektioner)
- CSS-klass `.reveal` med `animation-timeline: view()` för fade+slide-in
- Wrappat i `@supports` – sidan fungerar utan animationer i äldre webbläsare

## GitHub Pages
- Workflow: `.github/workflows/deploy.yml` (push till `main` triggar deploy)
- `astro.config.mjs` har kommenterade rader för `site` och `base` – fylls i när repo är känt

## Vad som är platshållare
- Logotypen (SVG-badge) – ska ersättas
- Platshållarbilder i kategorikorten (mörka CSS-bakgrunder med ikon) – ska ersättas med riktiga foton
- E-postadress på om-sidan (`info@kulturklassiker.se`) – ska uppdateras
- Formulärets `action`-attribut – ska kopplas till Formspree eller liknande
