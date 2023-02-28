# Algemeen

   <aside class="issue">
      <strong>LET OP</strong>: Biblio in <code>config.js</code> uitbreiden met:
      <code>[NEN3610-2021-ontw]</code>, <code>[gimeg]</code>, <code>[iso19107-2019]</code>, <code>[modelleerprincipes]</code>, <code>[doc-gen-onderwerpen]</code>, <code>[notitie-ruimtelijke-relaties]</code>, <code>[handreiking-gebruik-crs]</code>.
   </aside>

   <aside class="issue">
      <strong>LET OP</strong>: samenvoegen met paragraaf Modelleertechnische uitgangspunten.
   </aside>

   <aside class="issue">
      <strong>LET OP</strong>: Geometrie zien we nu als een <i>datatype</i> en niet als een <i>objecttype</i>
   </aside>

## Geometrie

   ## Modelleertechnische uitgangspunten

   De volgende documenten zijn gehanteerd als uitgangspunt voor het informatiemodel DiSGeo:

    - Metamodel Informatie Modellering 1.1.1 [[MIM]]
    - Raamwerk van geo-standaarden 3.0 [[Raamwerk-Geo]]
    - Basismodel Geo-informatie [[NEN3610-2022]]
    - ISO-19107-2003: Geographic information – Spatial schema [[iso-19107-2003]]
    - Modelleerprincipes samenhangende objectenregistratie [[disgeo-mod]]

### Dimensies

### Typen

### Coordinaatrefrentiesystemen

### Kwaliteit

### NEN3610

   >**Notitie**: onderstaande tekst komt uit aantekening uit overleg ruimtelijke relaties

   #### Ruimtelijke en administratieve relaties en compliance met NEN3610

   Het gaat hierbij om afwegingen bij het kiezen van een naam voor de relatie tussen gemeentegebied en provinciegebied.  Internationaal is de gestandaardiseerde naam `within`. In NEN3610 is dit vertaald naar `binnen`. In ons team bestaat de vraag of `ligtIn` niet een betere naam is. Wat zijn onze opties hierbij?

   De NEN3610 spreekt van administratieve relaties en ruimtelijke relaties. De vertaling `binnen` betreft een ruimtelijke relatie. Wel is het belangrijk om te beseffen dat de `«ruimtelijke relatie»` zoals beschreven in de NEN3610 eigenlijk een visuele representatie is van een constraint. Deze hoort dus eigenlijk niet thuis in het informatiemodel.

   Het is aan ons de vraag of we een constraint willen toepassen:
   - Zo ja, dan moeten we een `NEN3610:ruimtelijke relatie` én een `NEN3610:administratieve` relatie gebruiken. 
   - Zo niet, dan hebben we alleen een `NEN3610:administratieve relatie` nodig.

   Het gaat dan om een administratieve vastlegging van een ruimtelijke relatie die vanuit de OGC wordt gedefinieerd. Hiervoor kunnen we:
   - De NEN3610-benaming `binnen` gebruiken (waarbij we het begrip `nen3610:binnen` opnemen als `mim:begrip`). 
   - Onze eigen benaming (`ligtIn`) gebruiken met een verwijzing naar de OGC term `within`. Dan hebben we echter geen link met de nen3610 – dat moet dan als een afgeleid gegeven worden gemodelleerd, omdat het anders niet mogelijk is vanuit de MIM.

   #### Observaties 

   - De term `binnen` is niet het meest geschikt om te gebruiken voor de relatie in ons model – het is echter wel hoe de NEN3610 de ruimtelijke relatie `within` heeft vertaald. Als wij uitwijken is het lastiger om aan te sluiten op de NEN3610, dus als we deze OGC relatie willen toepassen gebruiken we `binnen`. 
   - We kunnen het nen3610 begrip `binnen` (zoals het nu staat in het begrippenkader) opnemen als `mim:begrip` bij het creëren van de administratieve/ruimtelijke relaties tussen de registratieve gebieden.

   >**Notitie**: onderstaande tekst komt uit documentatie disgeo-im.

   #### Aansluiting op NEN 3610

   Het informatiemodel DiSGeo valt binnen het toepassingsgebied van het Basismodel Geo-informatie [[NEN3610-2022]] (hierna: NEN 3610) omdat het objecttypen beschrijft die direct herleidbaar zijn tot een locatie ten opzichte van de aarde. Het wordt daarom gemodelleerd:
   - conform de regels die in NEN 3610 geformuleerd zijn, en
   - als extensie op het semantische model uit NEN 3610

   De regels uit NEN 3610 zijn voor zover van toepassing gevolgd in het informatiemodel DiSGeo. Binnen DiSGeo maken we zowel een conceptueel model als een logisch model. Hieronder geven we aan welke aspecten van NEN 3610 conformiteit op welk modelniveau terug te vinden zijn. We noemen hier niet alle regels, maar alleen de belangrijkste, die in enige vorm terug te vinden zijn in het informatiemodel zelf:
    - DiSGeo objecten zijn uniek identificeerbaar via de twee NEN 3610 attributen `identificatie` en `domein` die zijn opgenomen in het logisch model
    - Historie en levensduur zijn opgenomen in de klasse `Registratiegegevens` in het logisch model: 
      - Tijdlijn geldigheid is opgenomen via de attributen `beginGeldigheid` en `eindGeldigheid`
      - Tijdlijn registratie is opgenomen via de attributen `tijdstipRegistratie` en `eindRegistratie`
      - Levensduur van objecten in de registratie is opgenomen via de attributen `objectBegintijd` en `objectEindtijd`

   Het semantische model van NEN 3610 bestaat uit een aantal objecttypen die objecten uit de werkelijkheid op hoofdlijn classificeren. In het informatiemodel DiSGeo zijn de klassen, voor zover dit past, gemodelleerd als subklasse van het NEN3610 objecttype Geo-Object of (bij voorkeur) een specifiekere NEN3610-subklasse van Geo-Object. Deze verbinding met deze semantische klassen is opgenomen in het conceptueel model.

   <aside class="example">
      In het model voor Bestuurlijke gebieden is `Bestuurlijk Gebied` gemodelleerd als een specialisatie van het objecttype `Registratieve ruimte`, die op haar beurt gemodellerd is als specialisatie van `NEN3610:Registratieve Ruimte`. Bestuurlijke gebieden zijn, volgens hun beschrijving in het [[EMSO]]: 

      <blockquote>[...] registratieve ruimten die op basis van wet- of regelgeving als eenheid gelden van politiek/bestuurlijke verantwoordelijkheid. Dit betreft bijvoorbeeld de gebieden behorende bij de vier formele bestuurslagen uit de Grondwet (Rijk, provincie, waterschap, gemeente), maar kan ook gebieden van bestuurlijke samenwerkingsverbanden met eigen politiek/bestuurlijke verantwoordelijkheid omvatten. Een voorbeeld daarvan betreft de veiligheidsregio’s.</blockquote> 

      De definitie komt overeen met de NEN3610-definitie van <code>RegistratieveRuimte</code> maar is iets nauwer. In NEN3610 kan het gaan om een eenheid die geldt voor politiek-bestuurlijke verantwoordelijkheid óf bedrijfsvoering. Van dat laatste is bij bestuurlijke gebieden geen sprake. <code>BestuurlijkGebied</code> is daarom een specialisatie van de NEN3610 <code>RegistratieveRuimte</code>. De reden dat het geen directe specialisatie is, maar er nog een objecttype <code>RegistratieveRuimte</code> tussen zit in het DiSGeo-model, is omdat er op dat niveau een status-eigenschap gepositioneerd is. De definitie van de DiSGeo <code>RegistratieveRuimte</code> is exact gelijk aan de definitie van de NEN3610 <code>RegistratieveRuimte</code>.

      <figure>
         <img src="media/nen3610-disgeo.png" alt="Bestuurlijk gebied als subklasse van Registratieve Ruimte"/>
         <figcaption>Bestuurlijk gebied als subklasse van Registratieve Ruimte</figcaption>
      </figure>
   </aside>

### Generalisatie

   Met *generaliseren*  bedoelen we het zinvol weglaten, vereenvoudigen, verplaatsen, vergroten, symboliseren en/of aggregeren van de geometrie van objecten. In DiS Geo: Eisen aan model samenhangende objectenregistratie [[EMSO]] wordt gesteld dat er geen noodzaak is voor (identificeerbare) gegeneraliseerde objecttypen. Gegeneraliseerde geometrieën worden alleen gebruikt voor visualisatie. 

   Een voorbeeld van gegeneraliseerde geometrie zijn de grenzen van bestuurlijke gebieden op hogere kaartschalen (1:10.000, 1:50.000 enz). Deze zijn minder gedetailleerd, bevatten minder punten en zijn geschikt om te bekijken op bepaalde 'zoomniveau's'. Bij het uitwisselen van geodata op het web is generalisatie belangrijk omdat een polygoon, afhankeljik van de mate van detail, erg veel punten kan bevatten, wat performanceproblemen kan veroorzaken. 

   De belangrijkste geometrie om op te nemen is de niet-gegeneraliseerde geometrie. Dit is de meest nauwkeurige geometrie. Bijvoorbeeld gemeente- en provinciegrenzen zijn gebaseerd op de Kadastrale grenzen, die knikken bevatten daar waar andere grenzen snijden of daar waar de grens een fysiek object volgt. De niet-gegeneraliseerde geometrie bevat deze knikken. Bij gegeneraliseerde geometrie worden deze weg gehaald voor een rustiger beeld of om het aantal punten te reduceren.

   Bestuurlijke grenzen van ten minste gemeenten, provincies en het Rijk worden gegeneraliseerd en bewaard in een registratie ten behoeve van het aanbieden van de TOPNL kaart op verschillende schalen.  

   Gegeneraliseerde geometrieën zijn afgeleide gegevens. De bron is een meer nauwkeurige geometrie. Dit roept de vraag op of deze afgeleide gegevens in het informatiemodel moeten worden opgenomen. Sowieso zijn het niet-authentieke gegevens. Enigszins vergelijkbaar is de standaard CityGML [[CityGML3]] waarin één objecttype meerdere geometrie eigenschappen heeft, één voor elk *Level of Detail* (LoD). CityGML is een uitwisselstandaard voor 3D geodata waarbij het gebruikelijk is om meerdere LoD's bij één object niet alleen op te slaan, maar ook gezamenlijk uit te wisselen in een bestand. Een viewer kan dan op basis van bijvoorbeeld de nabijheid van objecten kiezen voor het meest geschikte LoD.  

   In producten op basis van de geobasisregistraties zal de gebruiker echter doorgaans gegevens in één bepaalde schaal willen bekijken of ontvangen. Daarom is het uitgangspunt vooralsnog dat we bij objecttypen één geometrie-attribuut modelleren, ook als er geometrieën op meerdere schalen zullen bestaan. Het is wel nodig om bij de geometrie een aantal gegevens op te nemen:
   - Het schaalniveau; conform [[NLISO19115]] noemen we dit de 'toepassingsschaal'. Dit is nodig zodat de gebruiker de gewenste schaal kan opvragen en kan zien voor welke schaal een geometrie geschikt is.
   - De herkomst i.e. afleidingsgegevens: wat was de brongeometrie en hoe is de geometrie daaruit gegeneraliseerd. Dit is o.a nodig om terugmelding op geometrie te kunnen ondersteunen, ook in het geval van afgeleide geometrieën.

   <aside class="issue">
   <b>Eén geometrieattribuut</b>: dit is waarschijnlijk wel voldoende, maar er zijn wel <i>use cases</i> denkbaar waarbij je meerdere geometrieën wilt uitwisselen van één object. Het CBS doet dit bijvoorbeeld wel in hun WFS-service van wijken en buurten. Gebruikers kunnen dan in hun eigen GIS-pakket van schaal wisselen wanneer ze maar willen. 

   Eén geometrieattribuut volstaat dan nog steeds, maar het moet wel een meervoudige kardinaliteit hebben dwz `[1..*]`. 

   De vraag is of we inderdaad het geometrieattribuut met meervoudige kardinaliteit zullen opnemen in het informatiemodel.
   </aside>

   Conform de Spatial Data on the Web Best Practices [[SDW-BP]], [Best Practide 6](https://www.w3.org/TR/sdw-bp/#multiplegeometries), moet in een geodataproduct dat op het Web wordt gepubliceerd altijd in ieder geval een geometrie worden aangeboden die geschikt is om te gebruiken in webtoepassingen, i.e. bij wat grotere geometrieën moet er altijd een gegeneraliseerde geometrie beschikbaar zijn.

   <aside class="issue">
   Zijn er use cases waarvoor het mogelijk moet zijn dat je een stukje van een geometrie kunt opvragen? I.e. subsetting / clipping? En zo ja heeft dit impact op de modellering? Dat laatste vermoedelijk niet.
   </aside>

   <aside class="issue">
   Onderdeel van generalisatie is in sommige gevallen ook aggregatie. Bij bestuurlijke grenzen komt dit niet voor, maar bij gebouwen en wegen wel. Een groepje gebouwen dat dicht naast elkaar staat wordt dan bijvoorbeeld geaggregeerd tot één gebouwblok, of een aantal wegdelen tot één wegdeel. Als we van objecten verschillende geometrieën beschikbaar willen stellen - hoe werkt dat dan als objecten op lagere schalen geaggregeerd zijn, zoals bijvoorbeeld gebouwen? Het is dan ingewikkeld om de afleidingsgegevens te modelleren.
   </aside>