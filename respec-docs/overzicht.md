# Overzicht

## Naam en Acroniemen

IMSO - Informatiemodel Samenhangende Objecten

## Algemene beschrijving
Het Informatiemodel Samenhangende Objecten (IMSO) wordt per thema uitgewerkt. Dit document beschrijft het thema *Bestuurlijke Gebieden*: de ruimtelijke gebieden waarover regionale openbare lichamen bestuur uitoefenen, en hun geometrie.

## Beschrijving inhoud

Dit hoofdstuk beschrijft de inhoud van het thema Bestuurlijke Gebieden.

### Bestuurlijke gebieden
Er is een belangrijke relatie tussen een [regionaal openbaar lichaam](#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam) en een [bestuurlijk gebied](#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied). In de bestuurlijke indeling van het Koninkrijk der Nederlanden is een regionaal openbaar lichaam een overheid die bepaalde taken uitvoert binnen een bepaald _ruimtelijk_ gebied. De belangrijkste regionale openbare lichamen zijn het Rijk, de provincies, de gemeenten en de waterschappen, maar ook veiligheidsregio's behoren hiertoe. Een bestuurlijk gebied is dan dat bepaalde ruimtelijk gebied waarover een regionaal openbaar lichaam bestuur uitoefent.

#### Levenscyclus en tijdlijnen Bestuurlijk gebied

Bestuurlijk gebied is een van de specifiekere vormen van Registratieve ruimte. Zie [Levenscyclusstatussen Registratieve Ruimte](#levenscyclusstatussen-registratieve-ruimte) voor de algemene levenscyclusstatussen.

Ook voor bestuurlijke gebieden worden deze 4 levenscyclusstatussen ondersteund. Het moet echter nog blijken of er behoefte is aan een planfase voor bestuurlijke gebieden. Een mogelijke toepassing zou kunnen zijn dat een herindelingsplan nog voor vaststelling zijn weerslag krijgt in de registratie, in de vorm van bestuurlijke gebieden met de status `Ontwerp`.

De status `Vastgesteld` is de status die aangeeft dat een bestuurlijk gebied bestaat in de werkelijkheid. Dit komt overeen met de aanwezigheidsfase.

De status `Ingetrokken` is de eindstatus van een bestuurlijk gebied. Dit komt overeen met de afwezigheidsfase.

De levenscyclus van een bestuurlijk gebied is afhankelijk van het bestaan van het besturende regionaal openbaar lichaam.

<section class="informative">

##### Tijdlijnen en actualiteit

Voor het beheren en gebruiken van gegevens over bestuurlijke gebieden is het belangrijk om te kunnen bepalen welke gegevens op een bepaald moment geldig zijn. Op logisch modelniveau wordt daarvoor het historiemodel van [[NEN3610-2022]] toegepast.

In de levenscyclus van objecten kunnen kenmerken veranderen. Om deze veranderingen te kunnen vastleggen en raadplegen, worden *versies* van objecten bijgehouden. Elke versie wordt beschreven door een *registratieobject* met twee tijdlijnen:

- **Tijdlijn geldigheid**: beschrijft de periode waarin een object in de werkelijkheid bestaat of geldig is. Hiervoor worden de eigenschappen `beginGeldigheid` en `eindGeldigheid` gebruikt.
- **Tijdlijn registratie**: beschrijft de periode waarin een versie van de gegevens in de registratie bestaat. Hiervoor worden de eigenschappen `tijdstipRegistratie` en `eindRegistratie` gebruikt.

<figure>
   <img src="media/nen3610-registratiegegevens.png" alt="NEN 3610 Registratiegegevens"/>
   <figcaption>NEN 3610:2022 - Registratiegegevens</figcaption>
</figure>

Met behulp van de tijdlijn geldigheid kan een afnemer bepalen welke gegevens *actueel* (nu geldig) zijn:

- **Actueel**: gegevens waarvan de `beginGeldigheid` in het verleden ligt en `eindGeldigheid` leeg is of in de toekomst ligt.
- **Tijdreizen**: door een specifieke datum op te geven kunnen gegevens worden opgevraagd die op dat moment geldig waren.

<aside class="example" title="Gemeentelijke herindeling">
   Bij een gemeentelijke herindeling wordt de nieuwe gemeentegrens vastgesteld door de provincie. De `beginGeldigheid` van het nieuwe gemeentegebied is de datum waarop de herindeling ingaat (vaak 1 januari). Tot die datum blijft het oude gemeentegebied actueel. Afnemers kunnen zo zowel de huidige als toekomstige situatie raadplegen.
</aside>

</section>

#### Regionaal Openbaar Lichaam
Een regionaal openbaar lichaam is een overheidsorganisatie die bepaalde taken uitvoert binnen een bepaald _ruimtelijk_ gebied. De belangrijkste regionale openbaar lichamen zijn het Rijk, de provincies, de gemeenten en de waterschappen, maar ook veiligheidsregio's behoren hiertoe.
Regionale openbare lichamen hebben met elkaar gemeen dat ze een bestuurlijk gebied hebben — andere overheidsorganisaties hebben dat niet. [[TOOI-ONT-1.6.2]]

#### Bestuurlijk gebied
Een *bestuurlijk gebied*, ook wel bestuursgebied genoemd, is het grondgebied waarover het bestuursorgaan haar invloed uitoefent. Een bestuurlijk gebied is dus niet hetzelfde als het voor het gebied verantwoordelijke bestuur. Het _gebied_ en het _bestuur_ zijn weliswaar aan elkaar gerelateerd, maar hebben hun eigen unieke eigenschappen. Een bestuurlijk gebied heeft een ruimtelijke aanduiding in de vorm van een geometrie en kan ook een naam toegewezen krijgen. De naam waarmee men in het dagelijkse spraakgebruik het grondgebied associeert, is meestal de officiële naam van het gerelateerde openbaar lichaam, bijvoorbeeld 'Apeldoorn' of 'Zeeland'.

#### Maritieme zones
Een regionaal openbaar lichaam heeft vaak maar één bestuurlijk gebied. Een uitzondering hierop is het openbaar lichaam _Rijk_. Naast het _Rijksgebied_ bestuurt het Rijk ook vier gebieden op zee; zogenaamde maritieme zones. In totaal onderscheidt dit model vijf typen bestuurlijke gebieden die onder de bestuurlijke verantwoordelijkheid van het Rijk vallen.

<aside class="example" title="Maritieme Zones">

   Maritieme zones worden vastgesteld uitgaande van de laagwaterlijn (ook wel: normale basislijn). Deze lijn markeert waar de zee droogvalt als het eb is. De indeling van de maritieme zones is gebaseerd op het Zeerechtverdrag van de Verenigde Naties ([[UNCLOS]]). Op basis van afstand tot de normale basislijn worden de volgende vier zones onderscheiden:

   <ul>
      <li><i>Territoriale zee</i> (0-12 zeemijl uit de kust): Hier oefent Nederland volledige soevereiniteit uit.</li>
      <li><i>Aansluitende zone</i> (12-24 zeemijl uit de kust): Hier kan Nederland controle uitoefenen om overtredingen van douane-, fiscale-, immigratie- of gezondheidswetten te voorkomen.</li>
      <li><i>Exclusieve economische zone</i> (12-200 zeemijl uit de kust): Hier heeft Nederland exclusieve rechten voor de exploitatie van natuurlijke rijkdommen.</li>
      <li><i>Continentaal plat</i> (de zeebodem en ondergrond): Hier heeft Nederland soevereine rechten voor de exploratie en exploitatie van delfstoffen.</li>
   </ul>

   <figure>
      <a href="media/bestuurlijke_gebieden_maritieme_zones_nl.jpg" target="_blank">
         <img src="media/bestuurlijke_gebieden_maritieme_zones_nl.jpg" alt="Maritieme zones van Nederland">
      </a>
      <figcaption>Maritieme zones van Nederland</figcaption>
   </figure>

   De grenzen van deze zones zijn vastgesteld in verdragen met België, Duitsland en het Verenigd Koninkrijk. Daarnaast bestaan er nog de rechte basislijnen. Deze zijn door Nederland in 1985 vastgesteld in de Wet grenzen Nederlandse territoriale zee. Deze lijnen scheiden de territoriale zee van het land en de binnenwateren [<cite><a class="bibref" href="#bib-dienst-hydrografie">Dienst-Hydrografie</a></cite>].
</aside>

#### Rijksgrens en Eems-Dollard

De Rijksgrens in het Eems-Dollard gebied volgt de equidistantielijn volgens de Nederlandse rechtsopvatting. Deze grens is vastgesteld "sans préjudice" conform [artikel 4 van het Westereemsverdrag](https://wetten.overheid.nl/jci1.3:c:BWBV0006411&hoofdstuk=I&artikel=4&z=2018-07-01&g=2018-07-01), wat betekent dat de juridische standpunten van beide landen worden voorbehouden.

Voor de weergave van de Rijksgrens op kaarten en in registraties wordt het gebied begrensd door de Westereemsverdragslijn en de equidistantielijn als Nederlands grondgebied weergegeven.

## IMSO Bestuurlijke gebieden in context

De bestuurlijke gebieden in dit informatiemodel hebben relaties met objecten in andere standaarden en registraties. Deze sectie beschrijft de belangrijkste relaties en hoe de gegevens uit verschillende bronnen samenhangen.

<figure>
   <img src="media/imso-context.drawio.png" alt="De context van IMSO"/>
   <figcaption>De context van IMSO</figcaption>
</figure>

Voor meer details over de scope en afbakening van bestuurlijke gebieden, zie het [scopedocument Bestuurlijke Gebieden](https://geonovum.github.io/disgeo-scope/bestuurlijkegebieden/).

### Context en uitgangspunten

Het IMSO wordt ontwikkeld binnen de context van verschillende programma's en uitgangspunten:

- **Zicht op Nederland (ZON)**: Het programma waarbinnen geo-informatie in samenhang beschikbaar wordt gemaakt. Zie [IMSO en Zicht op Nederland](#imso-en-zicht-op-nederland) in de inleiding.

- **Federatief Datastelsel (FDS)**: Het IMSO sluit aan bij de [uitgangspunten en principes van het Federatief Datastelsel](https://realisatieibds.nl/groups/view/0056c9ef-5c2e-44f9-a998-e735f1e9ccaa/federatief-datastelsel/wiki/view/b7f88922-44e6-4f62-bf01-4478786d7010/uitgangspunten-en-principes-van-het-fds). Belangrijke principes zijn *data bij de bron* (data wordt niet gekopieerd maar beschikbaar gesteld), interoperabiliteit tussen datastelsels, en *decentraal wat kan, centraal wat moet*.

- **EMSO**: De "Eisen aan model samenhangende objectenregistratie" ([[EMSO]]) beschrijft de uitgangspunten voor het modelleren van geo-objecten in samenhang. Het IMSO past deze uitgangspunten toe.

### Bronnen

De geometrie van bestuurlijke gebieden wordt afgeleid uit de in dit hoofdstuk beschreven bronnen.

#### Basisregistratie Kadaster (BRK)

De geometrie van gemeenten, provincies en het Rijksgebied op land wordt afgeleid uit de kadastrale kaart, onderdeel van de Basisregistratie Kadaster (BRK). De relatie tussen bestuurlijke grenzen en de kadastrale kaart is als volgt:

1. **Percelen** vormen de basis: elk perceel behoort tot precies één kadastrale gemeente
2. **Kadastrale gemeenten** zijn via een relatietabel gekoppeld aan burgerlijke gemeenten
3. **Burgerlijke gemeenten** zijn via een relatietabel gekoppeld aan provincies
4. De **gemeentegrens** is dus de verzameling perceelsgrenzen waar aan weerszijden verschillende kadastrale (en dus burgerlijke) gemeenten liggen.

Het concept 'Burgerlijke gemeente' uit de BRK is gelijk aan het concept 'Gemeentegebied' in dit informatiemodel.

<aside class="example" title="Van perceel naar bestuurlijke grens">
   Een perceelsgrens waarvan de kadastrale gemeenten aan weerszijden niet gelijkluidend zijn, is mogelijkerwijs een gemeentegrens. Indien de bijbehorende burgerlijke gemeenten naar twee verschillende provincies verwijzen, is het ook een provinciegrens. Alle losse lijnstukken die aan dit criterium voldoen vormen tezamen de begrenzing van het grondgebied van een gemeente, provincie of het Rijk.
</aside>

Bij gemeentelijke herindelingen wordt de nieuwe grens vastgelegd in een *grensbeschrijving* door de provincie, conform artikel 2 lid 2 van de Wet algemene regels herindeling (Wet Arhi). Deze grensbeschrijving geschiedt met behulp van kadastrale kenmerken of, indien dat niet mogelijk is, met behulp van coördinaten. De nieuwe grens wordt vervolgens in de kadastrale kaart verwerkt.

#### Dienst der Hydrografie

De gebiedsinformatie van de [maritieme zones](#maritieme-zones) is afkomstig van de Dienst der Hydrografie van het Ministerie van Defensie [[Dienst-Hydrografie]]. De Dienst der Hydrografie beheert de gegevens over de territoriale zee, aansluitende zone, exclusieve economische zone en het continentaal plat.

### Afnemers

Bestuurlijke gebieden worden door veel partijen gebruikt. Deze sectie beschrijft enkele belangrijke afnemers. Voor een vollediger overzicht van afnemers, zie het [scopedocument Bestuurlijke Gebieden](https://geonovum.github.io/disgeo-scope/bestuurlijkegebieden/).

#### Basisregistratie Topografie (BRT)

De Basisregistratie Topografie (BRT) bevat ook gemeente-, provincie- en rijksgrenzen, in de vorm van 'Registratieve Ruimten'. De grenzen in de BRT worden afgeleid uit dezelfde bron als de grenzen in dit informatiemodel: de kadastrale kaart (BRK).

Het conceptuele verschil is dat de BRT grenzen aanbiedt voor cartografische doeleinden, terwijl dit informatiemodel gebieden definieert vanuit hun juridisch-administratieve betekenis. Dit informatiemodel beschrijft *wat* een bestuurlijk gebied is en hoe het zich verhoudt tot het openbaar lichaam dat erover bestuurt. De BRT kan op basis hiervan afgeleide representaties aanbieden voor verschillende toepassingen.

#### Digitaal Stelsel Omgevingswet (DSO)

Een belangrijke afnemer van informatie over bestuurlijke gebieden is het Digitaal Stelsel Omgevingswet (DSO). De Omgevingswet kent het begrip *werkingsgebied*: de ruimtelijke afbakening waarbinnen een juridische regel van toepassing is. De informatiemodellen [[DSO-CIM-OW]] en [[DSO-CIM-ORG]] beschrijven hoe werkingsgebieden en organisaties in het DSO worden gemodelleerd.

##### Locatie en ambtsgebied

In [[DSO-CIM-OW]] is *locatie* het overkoepelende begrip voor de ruimtelijke dimensie van een regel of object. Een locatie beschrijft middels coördinaten waar iets van toepassing is. Locaties kunnen de vorm hebben van een gebied, lijn of punt.

Een bijzonder type locatie is het *ambtsgebied*. Dit is een locatie die verwijst naar de bestuurlijke grenzen van een openbaar lichaam, zonder dat een expliciete geometrie hoeft te worden aangeleverd. In plaats daarvan bevat een ambtsgebied een verwijzing naar een voorziening voor bestuurlijke grenzen.

Een ambtsgebied kan worden gebruikt als werkingsgebied voor regelingen die gelden voor het gehele bestuurlijke gebied van een openbaar lichaam. De geometrie wordt dan automatisch afgeleid uit de actuele bestuurlijke grenzen.

<aside class="example" title="Ambtsgebied in een omgevingsverordening">
   Een provinciale omgevingsverordening kan als werkingsgebied het *ambtsgebied* van de provincie gebruiken. Dit ambtsgebied verwijst naar het provinciegebied zoals vastgelegd in een voorziening voor bestuurlijke grenzen. Wanneer de provinciegrens wijzigt (bijvoorbeeld door een gemeentelijke herindeling), wijzigt het werkingsgebied automatisch mee zonder dat de omgevingsverordening aangepast hoeft te worden.
</aside>

Het *bestuurlijk gebied* uit dit informatiemodel komt conceptueel overeen met het *ambtsgebied* in het DSO. Een voorziening voor bestuurlijke grenzen, gebaseerd op dit informatiemodel, kan daarmee dienen als bron voor ambtsgebieden in omgevingsdocumenten.

### Standaarden en organisaties

#### NEN 3610

Dit informatiemodel is een extensie op het Basismodel Geo-informatie [[NEN3610-2022]]. Bestuurlijk gebied is gemodelleerd als specialisatie van de NEN 3610 *Registratieve ruimte*. Zie [Aansluiting op Basismodel Geo-informatie](#aansluiting-op-basismodel-geo-informatie-nen3610) voor meer details.

#### TOOI

De Thesaurus en Ontologie Overheidsinformatie ([[TOOI-ONT-1.6.2]]) definieert onder andere *regionale openbare lichamen*: overheden die wettelijk bepaalde taken uitvoeren binnen een bepaald ruimtelijk gebied. Voorbeelden zijn gemeenten, provincies en waterschappen. Elk type heeft een eigen identificatiecode, zoals de gemeentecode (4 cijfers) of provinciecode (2 cijfers).

Dit informatiemodel definieert de *bestuurlijke gebieden* die bij deze openbare lichamen horen. De koppeling tussen beide wordt gelegd via de relatie tussen een bestuurlijk gebied en het bijbehorende regionaal openbaar lichaam.
