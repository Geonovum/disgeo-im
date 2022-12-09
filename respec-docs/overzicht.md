# Overzicht

## Naam en Acroniemen

IMDiSGeo - Dataspecificatie voor Doorontwikkeling in Samenhang van de Geobasisregistraties (DiSGeo)

## Algemene beschrijving van het DiSGeo informatiemodel
Het informatiemodel Samenhangende Objectenregistratie  zorgt ervoor dat alle gegevens die de geo-basisregistraties beschikbaar zijn eenduidig interpreteerbaar zijn en in samenhang met elkaar kunnen worden gebruikt. 

<aside class="issue">Deze omschrijving graag verder aanvullen. Het doel is om de basisregistraties in samenhang te kunnen bevragen.</aside>

## Modelleertechnische uitgangspunten

De volgende documenten zijn gehanteerd als uitgangspunt voor het informatiemodel DiSGeo:

 - Metamodel Informatie Modellering 1.1.1 [[MIM]]
 - Raamwerk van geo-standaarden 3.0 [[Raamwerk-Geo]]
 - Basismodel Geo-informatie [[NEN3610-2022]]
 - ISO-19107-2003: Geographic information – Spatial schema [[iso-19107-2003]]
 - Modelleerprincipes samenhangende objectenregistratie [[disgeo-mod]]

<aside class="issue">
TODO: 

Bibliografische referenties naar MIM, Raamwerk van geo-standaarden en NEN3610 moeten nog in `localBiblio` worden opgenomen.

Aanvullen met oa EMSO. 
</aside>

### Gegeneraliseerde geometrie
Met *generaliseren*  bedoelen we het zinvol weglaten, vereenvoudigen, verplaatsen, vergroten, symboliseren en/of aggregeren van de geometrie van objecten. In DiS Geo: Eisen aan model samenhangende objectenregistratie [[EMSO]] wordt gesteld dat er geen noodzaak is voor (identificeerbare) gegeneraliseerde objecttypen. Gegeneraliseerde geometrieën worden alleen gebruikt voor visualisatie. 

Een voorbeeld van gegeneraliseerde geometrie zijn de grenzen van bestuurlijke gebieden op hogere kaartschalen (1:10.000, 1:50.000 enz). Deze zijn minder gedetailleerd, bevatten minder punten en zijn geschikt om te bekijken op bepaalde 'zoomniveau's'. Bij het uitwisselen van geodata op het web is generalisatie belangrijk omdat een polygoon, afhankeljik van de mate van detail, erg veel punten kan bevatten, wat performanceproblemen kan veroorzaken. 

De belangrijkste geometrie om op te nemen is de niet-gegeneraliseerde geometrie. Dit is de meest nauwkeurige geometrie. Bijvoorbeeld gemeente- en provinciegrenzen zijn gebaseerd op de Kadastrale grenzen, die knikken bevatten daar waar andere grenzen snijden of daar waar de grens een fysiek object volgt. De niet-gegeneraliseerde geometrie bevat deze knikken. Bij gegeneraliseerde geometrie worden deze weg gehaald voor een rustiger beeld of om het aantal punten te reduceren.

Bestuurlijke grenzen van ten minste gemeenten, provincies en het Rijk worden gegeneraliseerd en bewaard in een registratie ten behoeve van het aanbieden van de TOPNL kaart op verschillende schalen.  

Gegeneraliseerde geometrieën zijn afgeleide gegevens. De bron is een meer nauwkeurige geometrie. Dit roept de vraag op of deze afgeleide gegevens in het informatiemodel moeten worden opgenomen. Sowieso zijn het niet-authentieke gegevens. Enigszins vergelijkbaar is de standaard CityGML [[CityGML3]] waarin één objecttype meerdere geometrie eigenschappen heeft, één voor elk *Level of Detail* (LoD). CityGML is een uitwisselstandaard voor 3D geodata waarbij het gebruikelijk is om meerdere LoD's bij één object niet alleen op te slaan, maar ook gezamenlijk uit te wisselen in een bestand. Een viewer kan dan op basis van bijvoorbeeld de nabijheid van objecten kiezen voor het meest geschikte LoD.  

In producten op basis van de geobasisregistraties zal de gebruiker echter doorgaans gegevens in één bepaalde schaal willen bekijken of ontvangen. Daarom is het uitgangspunt vooralsnog dat we bij objecttypen één geometrie-attribuut modelleren, ook als er geometrieën op meerdere schalen zullen bestaan. Het is wel nodig om bij de geometrie een aantal gegevens op te nemen:
- Het schaalniveau; conform [[NLISO19115]] noemen we dit de 'toepassingsschaal'. Dit is nodig zodat de gebruiker de gewenste schaal kan opvragen en kan zien voor welke schaal een geometrie geschikt is.
- De herkomst i.e. afleidingsgegevens: wat was de brongeometrie en hoe is de geometrie daaruit gegeneraliseerd. Dit is o.a nodig om terugmelding op geometrie te kunnen ondersteunen, ook in het geval van afgeleide geometrieën.

<aside class="issue">
**Eén geometrieattribuut: ** dit is waarschijnlijk wel voldoende, maar er zijn toch wel use cases denkbaar waarbij je meerdere geometrieën wilt uitwisselen van één object. Het CBS doet dit bijvoorbeeld wel in hun WFS service van wijken en buurten. Gebruikers kunnen dan in hun eigen GIS pakket van schaal wisselen wanneer ze maar willen. 

Eén geometrieattribuut volstaat dan nog steeds, maar het moet wel een meervoudige kardinaliteit hebben dwz `[1..*]`. 

De vraag is of we inderdaad het geometrieattribuut met meervoudige kardinaliteit zullen opnemen in het informatiemodel.
</aside>

Conform de Spatial Data on the Web Best Practices [[SDW-BP]], [Best Practide 6](https://www.w3.org/TR/sdw-bp/#multiplegeometries), moet in een geodataproduct dat op het Web wordt gepubliceerd altijd in ieder geval een geometrie worden aangeboden die geschikt is om te gebruiken in webtoepassingen, i.e. bij wat grotere geometrieën moet er altijd een gegeneraliseerde geometrie beschikbaar zijn.

<aside class="issue">
Zijn er use cases waarvoor het mogelijk moet zijn dat je een stukje van een geometrie kunt opvragen? I.e. subsetting / clipping? En zo ja heeft dit impact op de modellering? Dat laatste vermoedelijk niet.
</aside>

<aside class="issue">
Onderdeel van generalisatie is in sommige gevallen ook aggregatie. Bij bestuurlijke grenzen komt dit niet voor, maar bij bijvoorbeeld gebouwen en wegen wel. Een groepje gebouwen dat dicht naast elkaar staat wordt dan bijvoorbeeld geaggregeerd toto één gebouwblok of een aantal wegdelen tot één wegdeel. Als we van objecten verschillende geometrieën beschikbaar willen stellen - hoe werkt dat dan als objecten op lagere schalen geaggregeerd zijn, zoals bv gebouwen? Het is dan ingewikkeld om de afleidingsgegevens te modelleren.
</aside>

## Aansluiting op NEN 3610

Het informatiemodel DiSGeo valt binnen het toepassingsgebied van het Basismodel Geo-informatie [[NEN3610-2022]] (hierna: NEN 3610) omdat het informatieobjecten bevat die direct herleidbaar zijn tot een locatie ten opzichte van de aarde. Het wordt daarom gemodelleerd:
- conform de regels die in NEN 3610 geformuleerd zijn, en
- als extensie op het semantische model uit NEN 3610

De regels uit NEN 3610 zijn voor zover van toepassing gevolgd in het informatiemodel DiSGeo. Binnen DiSGeo maken we zowel een conceptueel model als een logisch model. Hieronder geven we aan welke aspecten van NEN 3610 conformiteit op welk modelniveau terug te vinden zijn. We noemen hier niet alle regels, maar alleen de belangrijkste, die in enige vorm terug te vinden zijn in het informatiemodel zelf:
 - DiSGeo objecten zijn uniek identificeerbaar via de twee NEN 3610 attributen `identificatie` en `domein` die zijn opgenomen in het conceptueel model
 - Historie en levensduur zijn opgenomen in de klasse `Registratiegegevens` in het conceptueel model: 
   - Tijdlijn geldigheid is opgenomen via de attributen `beginGeldigheid` en `eindGeldigheid`
   - Tijdlijn registratie is opgenomen via de attributen `tijdstipRegistratie` en `eindRegistratie`
   - Levensduur van objecten is opgenomen via de attributen `objectBegintijd` en `objectEindtijd`

Het semantische model van NEN 3610 bestaat uit een aantal objecttypen die objecten uit de werkelijkheid op hoofdlijn classificeren. In het informatiemodel DiSGeo zijn de klassen, voor zover dit past, gemodelleerd als subklasse van het NEN3610 objecttype Geo-Object of (bij voorkeur) een specifiekere NEN3610-subklasse van Geo-Object. 

<aside class="example">
In het model voor Bestuurlijke gebieden is `Bestuurlijk Gebied` gemodelleerd als een subklasse van (heeft een generalisatierelatie naar) `NEN3610:Registratieve Ruimte`. Bestuurlijke gebieden zijn, volgens hun beschrijving in het [[EMSO]]: 

> registratieve ruimten die op basis van wet- of regelgeving als eenheid gelden van politiek/bestuurlijke verantwoordelijkheid. Dit betreft bijvoorbeeld de gebieden behorende bij de vier formele bestuurslagen uit de Grondwet (Rijk, provincie, waterschap, gemeente), maar kan ook gebieden van bestuurlijke samenwerkingsverbanden met eigen politiek/bestuurlijke verantwoordelijkheid omvatten. Een voorbeeld daarvan betreft de veiligheidsregio’s. 

De definitie komt overeen met de NEN 3610 definitie maar is iets nauwer. In NEN 3610 kan het gaan om een eenheid die geldt voor politiek-bestuurlijke verantwoordelijkheid óf bedrijfsvoering. Van dat laatste is bij bestuurlijke gebieden geen sprake. `Bestuurlijk gebied` is daarom een subklasse van `Registratieve ruimte`:

<figure>
   <img src="media/nen3610-disgeo.png" alt="Bestuurlijk gebied als subklasse van Registratieve Ruimte"/>
   <figcaption>Bestuurlijk gebied als subklasse van Registratieve Ruimte</figcaption>
</figure>
</aside>

## Beschrijving

<aside class="issue">Algemene domeinoverstijgende beschrijving van het IMDiSGeo schrijven</aside>

### Bestuurlijke gebieden
Er is een belangrijke relatie tussen een [openbaar lichaam](https://geonovum.github.io/disgeo-im/#global_class_BestuurlijkeGebieden_OpenbaarLichaam) en een [bestuurlijk gebied](https://geonovum.github.io/disgeo-im/#global_class_BestuurlijkeGebieden_BestuurlijkGebied). In de bestuurlijke indeling van het Koninkrijk der Nederlanden is een openbaar lichaam een overheid die bepaalde taken uitvoert binnen een bepaald _ruimtelijk_ gebied óf op een bepaald _inhoudelijk_ gebied ([[Wikipedia]]). De belangrijkste openbare lichamen zijn het Rijk, de provincies, de gemeenten en de waterschappen, maar ook veiligheidsregio's behoren hiertoe. Een bestuurlijk gebied is dan dat bepaalde ruimtelijk gebied waarover een openbaar lichaam bestuur uitoefent.

#### Openbaar Lichaam
De verzameling van alle openbare lichamen van hetzelfde type, bijvoorbeeld: gemeenten, provincies, waterschappen of ministeries, heet een _bestuurslaag_. Wanneer er gesproken wordt over een deel van een openbaar lichaam, bijvoorbeeld: de gemeenteraad, het college van burgemeester en wethouders en de burgemeester, is de term _bestuursorgaan_ van toepassing. Beide termen spelen in het informatiemodel geen directe rol, maar zijn wel belangrijk voor de afbakening van _openbaar lichaam_. Het openbaar lichaam is een bruikbare term voor het benoemen van de gemeente als _volledige bestuurlijke organisatie_.

<aside class="example">
   <strong>Definiëren Openbaar lichaam</strong>

   In wetgeving wordt een openbaar lichaam weliswaar niet gedefinieerd, maar het komt er wel in voor. Uit verschillende wetsartikelen valt af te leiden wat ermee bedoeld wordt (zie: voorbeeld).

   Uit <strong>artikel 6 van de bekendmakingswet</strong>, valt, in combinatie met de <strong>artikelen 1 en 2</strong>, af te leiden wat een <strong>openbaar lichaam</strong> is:

   "<i>Algemeen verbindende voorschriften</i>, (...) <i>vastgesteld door een bestuursorgaan dat behoort tot een van de in artikel 2, eerste tot en met vierde lid, genoemde openbare lichamen, of de in artikel 2, vijfde lid, genoemde openbare lichamen,</i> (...), <i>worden bekendgemaakt door plaatsing in het door dat openbaar lichaam,</i> (...) <i>uitgegeven publicatieblad</i>."

   Verder zijn er naast de bekende openbare lichamen, ook minder bekende, zoals wanneer voor de heffing of de invordering van gemeentelijke belastingen een gemeenschappelijke regeling is getroffen en bij die regeling een openbaar lichaam is ingesteld. Dat betekent dat een aantal gemeenten samenwerken om de gemeentelijke belastingen binnen te halen en daarvoor een gezamenlijke organisatie hebben opgericht. Vooralsnog blijven deze typen openbare lichamen de bijbehorende bestuurlijke gebieden in het model buiten beschouwing. Bovendien is een gemeente, net als een provincie en een waterschap, ook nog een (publiekrechtelijke) rechtspersoon. Ook dit valt buiten beschouwing.
</aside>

#### Bestuurlijk gebied
Het grondgebied waarover het bestuursorgaan haar invloed uitoefent heet het *bestuurlijk gebied*. Een bestuurlijk gebied is dus niet hetzelfde als het voor het gebied verantwoordelijke bestuur. Het _gebied_ en het _bestuur_ zijn weliswaar aan elkaar gerelateerd, maar hebben hun eigen unieke eigenschappen. Een bestuurlijk gebied heeft zelf geen naam, maar alleen een ruimtelijke aanduiding in de vorm van een geometrie. De naam waarmee men in het dagelijkse spraakgebruik het grondgebied associeert, is de formele naam van het gerelateerde openbare lichaam, bijvoorbeeld 'Apeldoorn' of 'Zeeland'.

#### Onderscheid in het model
Het model maakt dit verschil tussen bestuurlijke gebieden openbare lichamen zichtbaar. Dit werkt door bij alle overheden: Rijk, provincies, gemeenten, waterschappen en veiligheidsregio's. Dat het model dit onderscheid maakt, wil niet zeggen dat alle openbare lichamen vanzelfsprekend onderdeel zijn van het uiteindelijke model. Het informatiemodel brengt dit onderscheid in de eerste plaats voor het voetlicht. Of alle en op welke manier openbare lichamen in het model belanden, is onderdeel van discussie.

#### Geometrie
Dit model legt de geometrie vast van een bestuurlijk gebied. Die geometrie komt voort uit een grensbeschrijving, die zelf geen onderdeel van dit model is. Verder heeft een bestuurlijk gebied in dit model <i>altijd</i> een geometrie, terwijl in werkelijkheid de geometrie van een bestuurlijke gebied uiterlijk twee maanden na een wijzigingsvoorstel beschikbaar is. Daardoor komt het voor dat een (nieuw) openbaar lichaam tijdelijk geen (concept) geometrie heeft. Maar, vanuit het geo-domein lijkt het vooralsnog weinig waarde te hebben om deze tijdelijke situatie vast te leggen. Daarom stelt het model dat een openbaar lichaam altijd een geometrie heeft. Dit betekent dat een openbaar lichaam en het gerelateerde bestuurlijke gebied gelijktijdig worden opgenomen.

#### Land en Zee
Elke instantie van een openbaar lichaam heeft in de regel één bestuurlijk gebied. Een uitzondering hierop is het openbare lichaam _Rijk_. Naast een bestuurlijk gebied op land (in dit model het _Rijksgebied_), bestuurt het Rijk ook vier gebieden op zee; zogenaamde maritieme zones. In totaal onderscheid dit model vijf typen bestuurlijke gebieden die onder de bestuurlijke verantwoordelijkheid van het Rijk vallen.

<aside class="example">
   <strong>Maritieme Zones</strong>

   Maritieme Zones worden vastgesteld uitgaande van de laagwaterlijn (ook wel: normale basislijn). Deze lijn markeert waar de zee droogvalt als het eb is. De indeling van de maritieme zones die hieruit volgt, is gebaseerd op het Zeerechten verdrag van de Verenigde Naties. Op basis van afstand tot de normale basislijn worden de volgende vier zones onderscheden:

   <ul>
      <li><i>Territoriale zee</i> (tot 12 mijl uit de kust)</li>
      <li><i>Aansluitende zone</i> (12 tot 24 mijl uit de kust)</li>
      <li><i>Exclusieve economische zone</i> (tot 200 mijl uit de kust)</li>
      <li><i>Continentaal plat</i> (de zeebodem)</li>
   </ul>

   <figure>
      <a href="media/bestuurlijke_gebieden_maritieme_zones_nl.jpg" target="_blank">
         <img src="media/bestuurlijke_gebieden_maritieme_zones_nl.jpg" alt="Infographic Stresstest">
      </a>
      <figcaption>Bestuurlijke gebieden op zee: Nederlandse maritieme zones</a>)
      </figcaption>
   </figure>

   Daarnaast bestaan er nog de rechte basislijnen. Deze zijn door Nederland in 1985 vastgesteld in de Wet grenzen Nederlandse territoriale zee. Deze lijnen scheiden de territoriale zee van het land en de binnenwateren [<cite><a class="bibref" href="#bib-dienst-hydrografie">Dienst-Hydrografie</a></cite>].
</aside>