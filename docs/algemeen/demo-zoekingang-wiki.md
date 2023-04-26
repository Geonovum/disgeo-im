# Demo voorbeeld 2 - Wikipedia

## Onderzoeksvraag
Welke meerwaarde heeft een informatieproduct dat is ontwikkeld op basis van het informatiemodel Bestuurlijk Gebied (DiSGeo) voor een eindgebruiker, ten opzichte van reeds beschikbare informatie op Wikipedia over dit onderwerp?

## Onderwerp
Uitwerking relatie(s) tussen Provincies en gemeenten: _grondgebied_ (`BestuurlijkGebied`) en _bestuurslaag_ (`OpenbaarLichaam`).

## Format
`html` (tekst met links, afbeeldingen en tabellen)

## Gerelateerde pagina's
 - [Provincie Utrecht](https://nl.wikipedia.org/wiki/Utrecht_(provincie))
 - [Tabel van gemeenten in Utrecht](https://nl.wikipedia.org/wiki/Tabel_van_gemeenten_in_Utrecht)
 - [Provincies van Nederland](https://nl.wikipedia.org/wiki/Provincies_van_Nederland)
 - [Lijst van voormalige gemeenten in Utrecht](
https://nl.wikipedia.org/wiki/Lijst_van_voormalige_gemeenten_in_Utrecht)

## Vragen

>**Voorbeeld**: «Objecttype» `Provinciegebied`, instantie: `Groningen` 

### 1 - In hoeverre is het mogelijk om door de tijd te reizen?

#### DiSGeo
Het informatiemodel DiSGeo baseert zich op het Basismodel Geo-informatie (NEN3610). Daarin biedt het «Objecttype» `Registratie` drie typen metagegevens om verschillende temporele aspecten van een object vast te leggen: `TijdlijnGeldigheid`, `TijdlijnRegistratie` en `Levensduur`. In het (logisch) model DiSGeo - Bestuurlijk Gebied, zijn deze registratiegegevens verplicht. Hiermee kun je zowel geografisch als administratief tijdreizen.

#### Wikipedia
Wikipedia biedt twee manieren om door de tijd te reizen. Het is mogelijk om te kijken naar **gemeentelijke herindelingen** of **voormalige gemeenten in de provincie**. Dit gaat over veranderingen van een object in de werkelijkheid. Let wel: je moet wijzigingen van de provincie zelf afleiden uit de wijzigingen van de gemeente(grenzen). Daarnaast beschikt elke wikipediapagina over een tabblad Geschiedenis. Hierin kun je wijzigingshistorie van de pagina in zien. Belangrijk om te vermelden: beide manieren zijn puur administratief van aard.

### 2 - In hoeverre is het mogelijk om zowel een geografische als administratieve vraag te stellen

#### DiSGeo
Het informatiemodel DiSGeo combineert geografische en administratieve gegevens en biedt hiermee een informatieproduct de beide zoekingangen als mogelijkheid aan.


### Wikipedia
Een vraag stellen aan wikipedia gebeurt op basis van het zoekveld. Het zoekveld doorzoekt alleen paginanamen en niet de content van die pagina. Hier (aan de pagina's) ligt bovendien geen vastomleinde structuur aan ten grondslag. Verder bevat Wikipedia één geografisch gegeven: de puntlocatie van een provincie van een gebied. Hier heb je als gebruiker heel weinig aan. Verder bevatten de pagina's wel veel kaartafbeeldingen, maar die er geografissch uitzien, maar geen geografische data bevatten.

### 3 - In hoeverre zijn liggen er relaties tussen de objecten
### 4 - Wat is er bekend over de authenticiteit van de bron?
### 5 - Welke voor- en nadelen heeft de gekozen methode?


## Ruwe notities
>**Hiervoor moet je met het logisch model vergelijken!**

Bestuurslaag
Rijksoverheid
Nederlandse gemeenten
Europese deel van Nederland
Relatie met NUTS-gebieden


Instantie: provincie Utrecht


Extra informatie
landoppervlakte
aantal inwoners
absolute en relatieve bevolkingsdichtheid

(ontstaans)geschiedenis

historie van de tekst


connectie met begrippen zoals Randstad, bisdom Utrecht, Sticht Utrecht, 

Geografisch
aangrenzende provincies
uitwisselen gemenetne tussen Zuid-Holland, Utrecht en Noord-Holland (gemeentelijke herindeling, tijdreizen)
gemeenten in de provincie


teksten en tabellen waar je als lezer zefl actief in moet zoeken

verwijzing in wikipedia van provincie > gemeente en van gemeente > provincie

Voordeel is dat je bij wikipedia heel veel informatie bij elkaar hebt
demografisch, geografisch, landschappelijk kenmerken, geschiedenis, bestuur, politiek
tabllen met kenmerken.

bronverwijzing

Kaartafbeelding met geometrieën, geen daadwerkelijke geometrieën beschikbaar

Overzicht
Naamgeving in informatiemodel is technisch van aard. Daar moet je in je producten naar eindgebruiker toe een vertaalslag op maken. 

Voordelen
 - Relatief uniforme structuur (het opzetten van pagina's en teksten is handwerk, zonder strakke structuur)
 - Manier van zoeken is voor veel mensen bekend
 - Door bekendheid intuïtief en laagdrempelig
 - Voor breed publiek openbaar toegankelijke
 - Geen speciale software nodig: een browser voldoet

Wikipedia geeft óf info over de provincies (van Nederland) als bestuurslaag en de instanties, óf info over één instantie van een provincie.

Wikipedia: kardinaliteit is een "?", je hebt geen enkele garantie dat informatie aanwezig is, meer een kwestie van geluk/toeval/aanbod.

Nadelen
- Veel informatie
- Geen filtermogelijkheden
- Brede zoekingang (o.b.v. zoekterm), maar speciefieke info is handwerk
- Impliciet onderscheid tussen _gebied_ en _bestuur_

| ... | DiSGeo | Wikipedia |
| --- | --- | --- |
| Objecttype | Provinciegebied | Provincie |
|  - md1 | ... | ... |
|  - md2 | ... | ... |
| 