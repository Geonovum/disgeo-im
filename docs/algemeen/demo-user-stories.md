# Demo User Stories

## Doel
Vraag beantwoorden: Welke meerwaarde heeft een informatieproduct dat is ontwikkeld op basis van het informatiemodel Bestuurlijk Gebied (DiSGeo) voor een _gebruiker_, een _geo-expert_ en een _developer_, ten opzichte van reeds beschikbare informatie? Uitwerken in een aantal user stories, beperkt tot de relatie tussen  Provincies en gemeenten: _grondgebied_ (`BestuurlijkGebied`) en _bestuurslaag_ (`OpenbaarLichaam`).

>**Note**
>**Nog een tekst van ongeveer deze strekking toevoegen:**
>Gaat om hoe verschillende typen users (leek, geo-expert en developer) vragen m.b.t. bestuurlijke gebieden kunnen beantwoorden zonder een informatiemodel/-voorziening/-product bestuurlijke gebieden. Er is een algemeen gedeelde, maar toch vage notie van het nut van een informatiemodel bestuurlijk gebied, maar dit is moeilijk aan te tonen. Er is over dit onderwerp bovendien al veel informatie te vinden. Wat voegt een informatiemodel Bestuurlijke Gebieden dan precies toe? Het doel is om op de één of andere manier inzichtelijk te maken waar de toegevoegde waarde zit. In dit document proberen we dat door een aantal vragen te formuleren en te beschrijven hoe verschillende typen gebruikers zouden beantwoorden op basis van de informatie die nu al beschikbaar is.

<!-- ## Format
`html` (tekst met links, afbeeldingen en tabellen)

## Gerelateerde pagina's

### Instantieniveau
 - [Provincie Utrecht](https://nl.wikipedia.org/wiki/Utrecht_(provincie))
 - [Tabel van gemeenten in Utrecht](https://nl.wikipedia.org/wiki/Tabel_van_gemeenten_in_Utrecht)
 - [Lijst van voormalige gemeenten in Utrecht](
https://nl.wikipedia.org/wiki/Lijst_van_voormalige_gemeenten_in_Utrecht)

### Objectniveau
 - [Provincies van Nederland](https://nl.wikipedia.org/wiki/Provincies_van_Nederland)
 - [Provincie](https://nl.wikipedia.org/wiki/Provincie#Staatsrechtelijk)

>**NOTE**: Vraag aan Pano, Linda, Silvy en Gabriella: willen jullie de user stories aanvullen? iK heb DiSGeo al beschreven en leek/onervargen gebruiker/. Willen jullie andere voorbeelden aanvullen. En als dat teruggrijpt op DiSGeo, ook daar inde tekst aanvullen? -->

## Toelichting

Drie typen _user stories_
 - **Gebruiker**: gebruikt de browser/wikipedia als zoekingang 
 - **Geo-expert**: gebruikt een GIS-applicatie ArcGis/QGIS/... als zoekingang
 - **Developer**: gebruikt de bestuurlijke gebieden API voor DSO als zoekingang

>**NOTE**
> Eventueel **vierde user story** aan toevoegen: **politie**. Daar hebben ze een met DiSGeo vergelijkbaar model van bestuurlijke gebieden. Wat willen en kunnen zij daar nu mee?

Elk type user story heeft dezelfde vraag, maar kiezen vanuit hun rol en al dan niet aanwezige expertise verschillende, bij hun rol passende zoekingangen. Hoe kunnen zij de vraag vanuit deze zoekingang beantwoorden? Wat zijn de voor en nadelen. Dit wordt aangevuld met hoe het informatiemodel DiSGeo op deze vraag antwoord kan geven.

## 1 - Administratieve en ruimtelijke relaties tussen objecten
Als leek/geo-expert/ontwikkelaar 
wil ik de contactgegevens van provincie/gemeente, 
zodat ik weet binnen welke gemeente(n) en/of provincie(s), op het gegeven adres, welke mogelijkheden er zijn voor de aanleg van bedrijventerreinen en kantoorparken. 

### 1.1 - Leek
Een vraag stellen aan wikipedia gebeurt op basis van het zoekveld. Het zoekveld doorzoekt alleen paginanamen en niet de content van die pagina. Hier (aan de pagina's) ligt bovendien geen vastomleinde structuur aan ten grondslag. Verder bevat Wikipedia één geografisch gegeven: de puntlocatie van een provincie van een gebied. Hier heb je als gebruiker heel weinig aan. Verder bevatten de pagina's wel veel kaartafbeeldingen, maar die er geografisch "uitzien", maar geen geografische data bevatten.

### 1.2 - Geo-expert
Als een geo-expert gebruik maakt van een gis applicatie, b.v. QGis, dan heeft de expert , naast de kennis van de applicatie, tevens ook kennis van (het vinden van) de data nodig. Van de gemeenten in NL en de provincies in NL is data te vinden. Dit zijn losse datasets. Er zit geen automatische verbinding tussen de datasets. Het kan zijn dat in de dataset van de gemeente tevens opgenomen is in welke provincie deze valt. En als dat niet is zal door de expert door het prikken van een locatie (het bepaalde adres) achterhalen in welke **gemeente, en provincien worden.** Een deel van de vraag, in welke provincie en gemeente het aangegeven adres valt, die kan daarmee beantwoord worden. Om vervolens het tweede deel van de vraag te beantwoorden, welke contactgegevens hierbij horen, dat kan de geo expert op deze manier niet vinden.

### 1.3 - Ontwikkelaar
>**Note**
>Tekst toevoegen

### 1.4 Informatiemodel DiSGeo
Het informatiemodel DiSGeo combineert geografische en administratieve gegevens en biedt hiermee een informatieproduct de beide zoekingangen als mogelijkheid aan.

## 2 - Tijdreizen
Als leek/geo-expert/ontwikkelaar wil ik door de tijd kunnen reizen van een provincie(gebied), zodat ik kan achterhalen hoe de actuele grenzen door wijzingen in voorgaande jaren  veranderd zijn én welke gemeenten (naam en gebied) er op een bepaald moment in de tijd tot een provincie(gebied) behoorden.

### 2.1 - Leek
Wikipedia biedt twee manieren om door de tijd te reizen. Het is mogelijk om te kijken naar **gemeentelijke herindelingen** of **voormalige gemeenten in de provincie**. Dit gaat over veranderingen van een object in de werkelijkheid. Let op: wijzigingen van de provincie moet je zelf afleiden uit de wijzigingen van de gemeente(grenzen). Daarnaast beschikt elke wikipediapagina over een tabblad _Geschiedenis_. Hierin kun je wijzigingshistorie van de pagina in zien. Belangrijk om te vermelden: beide manieren zijn puur administratief van aard.

### 2.2 - Geo-expert
>**Note**
>Tekst toevoegen

### 2.3 - Ontwikkelaar
>**Note**
>Tekst toevoegen

### 2.4 - Informatiemodel DiSGeo
Het informatiemodel DiSGeo baseert zich op het Basismodel Geo-informatie (NEN3610). Daarin biedt het `«Objecttype»` `Registratie` drie typen metagegevens om verschillende temporele aspecten van een object vast te leggen: `TijdlijnGeldigheid`, `TijdlijnRegistratie` en `Levensduur`. In het (logisch) model DiSGeo - Bestuurlijk Gebied, zijn deze registratiegegevens verplicht. Hiermee kun je zowel geografisch als administratief tijdreizen.

## 3 - Authenticiteit van de bron(data)
Als leek/geo-expert/ontwikkelaar wil ik weten wie verantwoordelijk is voor de brondata over een bepaalde provincie (naam en gebied),  zodat ik weet welke kwaliteit ik als gebruiker mag verwachten.

### 3.1 - Leek
Elke wikipediapagina heeft onderaan een kopje "Externe links" met bronnen, noten en/of referenties. Dit zijn in het geval van de het voorbeeld van de provincie Groningen voornamelijk verwijzingen naar (kranten)artikelen over een bepaalde gebeurtenis, of een verwijzing naar de homepagina van de provincie Groningen, maar niets over de kwaliteit van de data of een verwijzing naar de bronhouder. In sommige gevallen (bij andere provincies) is er een verwijzing naar het CBS. Met andere woorden: het is op wikipedia lastig te achterhalen wat de bron is. In veel gevallen blijf je als gebruiker in het ongewisse. Bovendien is het onzeker of je het zelfde type informatie wel of niet bij een instantie van dezelfde soort aantreft en of hier dan naar verwezen is. Er is overigens wel iets van een [geometrie in een viewer](https://wiwosm.toolforge.org/osm-on-ol/kml-on-ol.php?lang=nl&uselang=nl&params=53_15_0_N_6_45_0_E_scale%3A1000000_region%3ANL&pagename=Groningen_(provincie)&zoom=8&lat=53.2089&lon=6.69747&layers=00B0TTT) beschikbaar. Als je hier dan op de (centroïde van de) provincie Groningen klikt, krijg je als bronverwijzing: `source: nl`.

### 3.2 - Geo-expert
>**Note**
>Tekst toevoegen

### 3.3 - Ontwikkelaar
>**Note**
>Tekst toevoegen

### 3.4 - Informatiemodel DiSGeo
Het metamodel voor informatiemodellering (MIM) ligt ten grondslag aan het informatiemodel DiSGeo. In het MIM, hebben eigenschappen van objecten (zoals: `«Attribuutsoort»` of `«Relatiesoort»`) een verplicht metagegeven `Authentiek`. Volgens het MIM is <q>(e)en kenmerk (...) authentiek indien de juistheid (hoogwaardige kwaliteit) van het gegeven gewaarborgd wordt via formele inwinningsprocessen en wettelijk regelingen. Authentieke gegevens moeten door alle overheidsinstellingen verplicht en zonder nader onderzoek, worden gebruikt bij de uitvoering van publiekrechtelijke taken</q>. In het informatiemodel Bestuurlijk Gebied is gegevenskwaliteit (op verschillende manieren) geborgd.


<!-- 
>**Voorbeeld**: «Objecttype» `Provinciegebied`, instantie: `Groningen` 

### 1 - In hoeverre is het mogelijk om door de tijd te reizen?
### 2 - In hoeverre is het mogelijk om zowel een geografische als administratieve vraag te stellen
### 3 - In hoeverre zijn liggen er relaties tussen de objecten
### 4 - Wat is er bekend over de authenticiteit van de bron?
### 5 - Welke voor- en nadelen heeft de gekozen methode? -->

<!-- 
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
|  -->
