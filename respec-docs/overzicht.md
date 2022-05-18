# Overzicht

## Naam en Acroniemen

IMDiSGeo - Dataspecificatie voor Doorontwikkeling in Samenhang van de Geobasisregistraties (DiSGeo)

## Definitie
<aside class="note">Hebben we deze kop nodig? Liefst verwijzen naar begrippenkader</aside>

Het informatiemodel Samenhangende Objectenregistratie  zorgt ervoor dat alle gegevens die de voorziening beschikbaar stelt eenduidig interpreteerbaar zijn en op een standaard manier kunnen worden uitgewisseld met andere systemen.

<aside class="issue">Deze omschrijving dekt de lading niet. Graag verder aanvullen. Het doel is om de basisregistraties in samenhang te kunnen bevragen.</aside>

<aside class="note">Suggestie: bovenstaande tekst verplaatsen naar beschrijving</aside>

## Beschrijving
Bij het modelleren van bestuurlijke gebieden, bleek dat er een belangrijke relatie is tussen een [bestuurlijk gebied](https://geonovum.github.io/disgeo-im/#global_class_BestuurlijkeGebieden_BestuurlijkGebied) en een [openbaar lichaam](https://geonovum.github.io/disgeo-im/#global_class_BestuurlijkeGebieden_OpenbaarLichaam). Een bestuurlijk gebied is namelijk niet hetzelfde als het voor het gebied verantwoordelijke bestuursorgaan. Het gebied en het bestuursorgaan zijn weliswaar aan elkaar gerelateerd, maar hebben hun eigen unieke eigenschappen. Het model maakt dit verschil zichtbaar; het onderscheidt bestuurlijke gebieden apart van openbare lichamen.

Dat het model dit onderscheid maakt, wil niet zeggen dat openbare lichamen vanzelfsprekend onderdeel zijn van het uiteindelijke model. Het informatiemodel brengt dit onderscheid in de eerste plaats voor het voetlicht. Of, en zo ja, op welke manier openbare lichamen in het model belanden, is onderdeel van discussie.

<aside class="issue">Bovenstaande alinea aanscherpen. Binnen EMSO worden eisen gesteld aan bestuurlijke gebieden die strikt genomen geen bestuurlijke geibeden zijn, maar openbare lichamen. Om die reden nemen we de openbare lichamen op, maar met alleen die eigenschappen die het EMSO noemt.</aside>

Dit onderscheid werkt door bij alle overheden: Rijk, provincies, gemeenten, waterschappen en veiligheidsregio's.

### Bestuurlijk gebied
Het grondgebied waarover het bestuursorgaan haar invloed uitoefent heet het *bestuurlijk gebied*. Dit gebied heeft zelf geen naam, maar alleen een ruimtelijke aanduiding in de vorm van een geometrie. De naam waarmee men in het dagelijkse spraakgebruik het grondgebied associeert, is de formele naam van het openbare lichaam, bijvoorbeeld 'Apeldoorn' of 'Zeeland'.

<aside class="issue">Relatie tussen <code>Bestuurlijk Gebied</code> en <code>NEN3610</code> toelichten.</aside>

### Openbaar lichaam

In de bestuurlijke indeling van het Koninkrijk der Nederlanden is een openbaar lichaam een overheid die bepaalde taken uitvoert binnen een bepaald _ruimtelijk_ gebied óf op een bepaald _inhoudelijk_ gebied (bron: [Wikipedia](https://nl.wikipedia.org/wiki/Openbaar_lichaam).  De belangrijkste openbare lichamen zijn het Rijk, de provincies, de gemeenten en de waterschappen.

Naast deze bekende openbare lichamen zijn er ook minder bekende, zoals wanneer voor de heffing of de invordering van gemeentelijke belastingen een gemeenschappelijke regeling is getroffen en bij die regeling een openbaar lichaam is ingesteld. Dat betekent dat een aantal gemeenten samenwerken om de gemeentelijke belastingen binnen te halen en daarvoor een gezamenlijke organisatie hebben opgericht. Het informatiemodel laat deze typen openbare lichamen buiten beschouwing.

Openbaar lichaam is een bruikbare term als je bv de gemeente als _volledige bestuurlijke organisatie_ wilt benoemen. Overigens is een gemeente, net als een provincie en een waterschap, ook nog een (publiekrechtelijke) rechtspersoon.

In wetgeving komt de wordt een openbaar lichaam weliswaar niet gedefinieerd, maar het komt er wel in voor. Uit verschillende wetsartikelen valt af te leiden wat ermee bedoeld wordt (zie: voorbeeld).

<aside class="example">
Uit <strong>artikel 6</strong> in combinatie met de artikelen 1 en 2 van de <strong>Bekendmakingswet</strong>, valt af te leiden wat een openbaar lichaam is: "<i>Algemeen verbindende voorschriften</i>, (...) <i>vastgesteld door een bestuursorgaan dat behoort tot een van de in artikel 2, eerste tot en met vierde lid, genoemde openbare lichamen, of de in artikel 2, vijfde lid, genoemde openbare lichamen,</i> (...), <i>worden bekendgemaakt door plaatsing in het door dat openbaar lichaam,</i> (...) <i>uitgegeven publicatieblad</i>."
</aside>

### Bestuursorgaan
Bestuursorgaan is de term voor een deel van een openbaar lichaam, bijvoorbeeld: de gemeenteraad, het college van burgemeester en wethouders en de burgemeester. In het informatiemodel komt deze term niet voor.

### Bestuurslaag

Dit is de term voor de verzameling van alle gemeenten, de verzameling van alle provincies, de verzameling van alle waterschappen of de verzameling van alle ministeries. Een bestuurslaag wordt niet als apart element in het informatiemodel onderscheidden.

### Gemeente en gemeentegebied
Het Europese deel van Nederland bestaat uit per 24 maart 2022 uit [344 gemeenten](https://www.rijksoverheid.nl/onderwerpen/gemeenten/gemeentelijke-herindeling). Het model onderscheidt de gemeente als het openbare lichaam dat het bestuursorgaan vormt van het haar toebehorende territorium: het gemeentegebied.

<aside class="note">Aanscherpen/aanvullen</aside>

### Provincie en provinciegebied
Het Europese deel van Nederland bestaat uit 12 provincies. Zij vormen de bestuurslaag tussen de rijksoverheid en de Nederlandse gemeenten. De bestuurslaag duidt het informatiemodel aan met 'provincie'. Het gebied waarover de provincie het bestuur uitoefent heet het provinciegebied.

<aside class="note">Aanscherpen/aanvullen</aside>

### Rijk en rijksgebied

Het Rijk, ook wel de Rijksoverheid, voert de wettelijke taken uit op nationaal niveau. De bestuurslaag 'Rijk' bestaat uit alle ministeries, de daartoe behorende uitvoerings uitvoeringsorganisaties, inspecties en Hoge colleges van Staat. Het grondgebied waarover de het Rijk regeert is in het model het Rijksgebied.

<aside class="note">Aanscherpen/aanvullen</aside>

### Waterschappen
Net als de Rijksoverheid, de provincies en de gemeenten, is een waterschap een overheidsorganisatie. Het zorgt voor het waterbeheer in een bepaald gebied. Tot haar taken behoren het beschermen tegen overstromingen, het zorgen voor schoon water in sloten, rivieren, meren en beken én het beheren van de hoeveelheid water. De verzameling van bestuursorganen van een waterschap, wordne in dit model aangeduid met het openbare lichaam 'Waterschap'. Het grondgebied waarover het waterschap haar bestuur uitoefent, heet in het model het 'Waterschapsgebied'. (Bron: [Waterschappen](https://www.waterschappen.nl/wat-doen-de-waterschappen/)/[Rijksoverheid](https://www.rijksoverheid.nl/onderwerpen/waterschappen
))

### Veiligheidsregio's

<aside class="note">Tekst schrijven</aside>

## Normatieve referenties

De volgende documenten zijn gehanteerd bij de totstandkoming van dit document:

 - [Metamodel Informatie Modellering 1.1.1](https://docs.geostandaarden.nl/mim/mim/)
 - [Raamwerk van geo-standaarden 3.0](https://www.geonovum.nl/uploads/documents/Raamwerk%20Geo-Standaarden%20v3.0.pdf)
 - ~~[NEN 3610:2011/A1:2016 Basismodel Geo-informatie](https://geonovum.github.io/bmgi/docs/#dataproductspecificatie-nl)~~
 - [ISO-19107-2003: Geographic information – Spatial schema](url)

## Mapping met INSPIRE

<aside class="note">Is er sprake van een INSPIRE mapping? Is hierover al informatie beschikbaar?</aside>

## Algemene Termen en definities

### Bestuurlijke gebieden

<aside class="issue">Verwijzen naar <a href="https://begrippen.geostandaarden.nl/sor/nl/">DiSGeo thesaurus</aside>

<aside class="note">Let op: de term "*bestuurlijk gebied*" ontbreekt op dit moment nog.</aside>

| **Termen**                       | **Definities**                                                           |
|----------------------------------|--------------------------------------------------------------------------|
| **Bestuurlijk gebied**           | ... | 
| **Gemeente**                     | ... | 
| **Gemeentegebied**               | ... | 
| **Openbaar lichaam**             | ... | 
| **Registratieve ruimte**         | ... |
| **Provincie**                    | ... |
| **Provinciegebied**              | ... |
| **Rijk**                         | ... |
| **Rijksgebied**                  | ... |

### Informatiemodeldomein

<aside class="issue">Verwijzen naar <a href="https://begrippen.geostandaarden.nl/nen3610/nl/"> NEN3610 thesaurus</a>.</aside>

| **Termen**                       | **Definities**                                                           |
|----------------------------------|--------------------------------------------------------------------------|
| **Annotatie**                    | Elke toevoeging op een kaartbeeld voor verduidelijking                                                                                                                                                                     |
| **Applicatieschema**             | Informatiemodel dat gegevens beschrijft die worden gebruikt door een of meer applicaties.                                                                                                                                  |
| **Relatie**                      | Semantische relatie tussen twee of meer geo-objecten die samenhang tussen hun instanties weergeeft.                                                                                                                        |
| **Attribuutsoort**               | Kenmerk van een geo-object.                                                                                                                                                                                                |
| **Attribuutwaarde**              | Waarde die een attribuutsoort aanneemt.                                                                                                                                                                                    |
| **Coördinaat**                   | Getal in een sequentie van n getallen om de positie van een punt in een n-dimensionale ruimte te bepalen.                                                                                                                  |
| **Coördinaatreferentiesysteem**  | Coördinaatsysteem dat aan een object is gerelateerd door een datum.                                                                                                                                                        |
| **Coördinaatsysteem**            | Set van wiskundige regels voor het toekennen van coördinaten aan punten.                                                                                                                                                   |
| **Datatype**                     | Een beschrijving van de structuur waaraan een waarde, oftewel de data zelf, aan moet voldoen.                                                                                                                              |
| **Diepte**                       | Afstand van een punt tot een gekozen referentievlak neerwaarts gemeten langs een lijn welke loodrecht op dat referentievlak staat.                                                                                         |
| **Domeinmodel**                  | Formele definitie van een subset van objecten, attributen, relaties en regels in een bepaald domein.                                                                                                                       |
| **Geo-informatie**               | Informatie met een directe of indirecte referentie naar een plaats ten opzichte van de aarde (bijvoorbeeld ten opzichte van het aardoppervlak) OPMERKING: Geo-informatie is synoniem aan geografische informatie.          |
| **Geo-object**                   | Abstractie van een fenomeen in de werkelijkheid dat direct of indirect is geassocieerd met een locatie relatief ten opzichte van de aarde. (bijvoorbeeld ten opzichte van het aardoppervlak)                               |
| **Georeferentie**                | Locatie van een ruimtelijk object vastgelegd in een ruimtelijk referentiesysteem.                                                                                                                                          |
| **Informatiemodel**              | Formele definitie van objecten, attributen, relaties en regels in een bepaald domein. OPMERKING: Domein is in dit verband: een kennisgebied of activiteit gekarakteriseerd door een verzameling van concepten en begrippen |
| **Instantie**                    | Benoemd, identificeerbaar object uit een objecttype.                                                                                                                                                                       |
| **Keuze**                        | Een keuze tussen twee attribuutsoorten zoals bedoeld in het MIM.                                                                                                                                                           |
| **Label**                        | Tekst of getal dat een eigenschap omschrijft of kwantificeert en als annotatie op een kaartbeeld wordt afgebeeld                                                                                                           |
| **Namespace**                    | Collectie van namen die in XML documenten gebruikt worden als objecttype- en attribuutsoortnamen OPMERKING: Een namespace wordt geïdentificeerd door een URI.                                                              |
| **Objecttype**                   | Verzameling van objecten met dezelfde eigenschappen. OPMERKING: Ook wel feature class genoemd.                                                                                                                             |
| **Rasterformaat**                | Representatie van beeld middel een gewoonlijk rechthoekig patroon van parallelle lijnen.                                                                                                                                   |
| **Registratie**                  | Op nationaal niveau geïdentificeerde en erkende gegevensverzameling. OPMERKING: Een basisregistratie is een registratie.                                                                                                   |
| **Representatie**                | Inhoudelijk vastleggen van de werkelijkheid. OPMERKING: Het informatiemodel is een representatie van de werkelijkheid.                                                                                                     |
| **Ruimtelijk referentiesysteem** | Model (systeem) voor identificatie van een positie (locatie) in de werkelijkheid OPMERKING: Identificatie van een positie kan door coördinaten (directe locatie) en door geografische identificatoren (indirecte locatie). |
| **Vectorformaat**                | Representatie van geometrie middels geometrische primitieven.                                                                                                                                                              |
| **Waardelijst**                  | Lijst van waarden.                                                                                                                                                                                                         |
| **Werkelijkheid**                | Beeld van de echte of hypothetische wereld die alles van belang omvat.                                                                                                                                                     |
|                                  |                                                                                                                                          

## Algemene Symbolen en afkortingen


Lijst van afkortingen en acroniemen die worden gehanteerd in deze
dataspecificatie.

| **Afkortingen** | **Betekenissen**                                      |
|-----------------|-------------------------------------------------------|
| **GML**         | Geography Markup Language                             |
| **MIM**         | Metamodel Informatie Modellering                      |
| **UML**         | Unified Modeling Language                             |
| **WFS**         | Web Feature Service                                   |
| **XML**         | Extensible Markup Language                            |
| **BAG**         | Basisregistratie Adressen en Gebouwen                 |
| **INSPIRE**     | Infrastructure For Spatial Information In Europe      |

<aside class="issue">Verwijzen naar algemeen begrippenkader op begrippen.geostandaarden.nl</aside>

## Gegevensuitwisseling met GML
...
