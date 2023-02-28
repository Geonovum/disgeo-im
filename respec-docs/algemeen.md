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

   De volgende documenten zijn gehanteerd als modelleertechnische uitgangspunten voor het informatiemodel DiSGeo:

    - Metamodel Informatie Modellering 1.1.1 [[MIM]]
    - Raamwerk van geo-standaarden 3.0 [[Raamwerk-Geo]]
    - Basismodel Geo-informatie [[NEN3610-2022]]
    - ISO-19107-2003: Geographic information – Spatial schema [[iso-19107-2003]]
    - Modelleerprincipes samenhangende objectenregistratie [[disgeo-mod]]

   >**Notitie**: onderstaande tekst vanuit doc _Generieke Onderwerpen_)

   Voor `...` van geometrieën gelden een aantal belangrijke principes die volgen uit verschillende standaarden en initiatieven. 

    - Coordinaatreferentiesystemen
    - Technologieën
    - NEN3610
    - Geometrie in het model
    - Uitganspunten EMSO

   Geometrieën worden gebruikt voor de representatie van _locatie_, _oriëntatie_ en _vorm_ van objecten uit de werkelijkheid in een informatiemodel. De dimensie dimensie van de representatie kan variëren van 0D- tot 3D-objecten. Deze objecten worden altijd geplaatst in een 2-dimensionele, of 3-dimensionele ruimte.

   >**Notitie**: onderstaande tekst afkomstig uit doc gen. ondw.

   De volgende (meta)aspecten van geometrie moeten worden gedefinieerd per objecttype in het informatiemodel of de documentatie daarbij:

   <aside class="issue">
      <strong>NOTE</strong> Onderstaande lijst koppelen aan indeling hoofdstuk geometrie. Eventueel links opnemen.

    - Geometrietype
    - Dimensionaliteit
    - Nauwkeurigheidseisen
    - Inwinregels
    - Topologische regels
    - Benodigde kwaliteitsmetadata

   >**Notitie**: onderstaande tekst afkomstig uit doc gen. ondw.

   **Geometrie-object**
   
   Per individuele geometrie vastleggen:
   - Coördinatenstelsel
   - Geometrietype
   - De coördinaten zelf
   - Indien van toepassing, kwaliteitsmetadata zoals beschreven in [](#benodigde-kwaliteitsmetadata).

   Het volstaat om een ISO 19107 geometrietype toe te passen in het informatiemodel (zie [](#geometrie-in-model) voor uitleg). Dit zorgt ervoor dat het coördinatenstelsel kan worden opgenomen, dat het geometrietype duidelijk is en dat de coördinaten zelf kunnen worden opgenomen.

   <aside class="issue">
      Heeft het meerwaarde om in het informatiemodel op te nemen in welk CRS een geometrie ingewonnen moet worden? Dat zou een metadata aspect kunnen zijn net zoals nauwkeurigheidseis.
   </aside>

### Dimensies
   >**Notitie**: onderstaande tekst afkomstig uit doc gen. ondw.

   #### Dimensionaliteit

   <aside class="issue">
      <strong>NOTE</strong>: Tekst <strong>CRS</strong> en <strong>Dimensies</strong> splitsen?
   </aside>

   <aside class="issue">
      <strong>VRAAG</strong>: Dit onderdeel opnemen in dit document?
      <br>
      <strong>Antwoord</strong>: Ja, maar wel samenvoegen met andere onderdelen over <i>geometrie</i>.
   </aside>

   Het aantal dimensies kan impliciet worden aangegeven door geometrietype, aangevuld met een aanduiding dat het om 2.5D gaat in de definitie van het attribuut. 

   `GM_Solid` is per definitie 3D, maar bij `GM_Surface`, `GM_Curve` en `GM_Point` (en composite/multi varianten hiervan) is het mogelijk om 2 of 3 posities per coördinaat op te nemen. De hoogte is dan de derde positie. Of de hoogte wel of niet wordt opgenomen in de coördinaten kunnen we aangeven in de definitie van het attribuut.

   <!-- <aside class="example">
      Definitie van het attribuut `geometrie` van een geluidbron in het Informatiemodel Geluid.
      <figure>
          <img src="media/img-voorbeeld-3d.png" alt="Voorbeeld IMGeluid"/>
          <figcaption>Voorbeeld geometrietype omschrijving IMGeluid</figcaption>
      </figure>
   </aside>

   <aside class="issue">
      Is het wenselijk om een semantisch attribuut `hoogte` te modelleren zodat te zien is wat de hoogte van het object is zonder naar de coördinaten te kijken? Waar zou je dit modelleren, in de geometrie of in het objecttype/gegevensgroeptype? Moet dit überhaupt wel? in EMSO staat het niet dus het lijkt geen inhoudelijke eis te zijn.

      <strong>Aanvulling:</strong> Dit zou je kunnen overwegen indien de hele geometrie dezelfde hoogte heeft. En dat is bij een <code>GM_Point</code> ook weer beter voor te stellen dan bij <code>GM_Linestring</code> (bijv. één hoogteaanduiding voor een weg(deel) of <code>GM_Surface</code> (een plat dat van een gebouw), hoewel het wel zou kunnen. Maar het wordt complex indien het om een set met hoogtewaarden/-coördinaten gaat. Die moet je dan weer matchen met de geometrie. Bovendien vervalt dan het voordeel van 'direct inzicht'.
   </aside> -->

   <!-- #### 3D geometrie

   <aside class="issue">Hoe we omgaan met 3D geometrie in de SOR moet nog verder worden uitgewerkt.

   Een aantal vragen: 
   - Is het mogelijk om van een object naast een 3D geometrie ook de 2D geometrie registreren? En is dat wenselijk? Op de korte termijn is er wellicht behoefte aan een flexibele aanbodkant waar organisaties als ze er aan toe zijn 3D kunnen aanleveren maar voorlopig wel 2D.
   - Ook is er waarschijnlijk wel behoefte aan 2D geometrie bij afnemers. Is dit dan iets dat je in een product afleidt, of is het iets dat we in het informatiemodel ook modelleren?
   - Kun je de 2D geometrie altijd afleiden uit de 3D geometrie?
   </aside> -->

### Typen

   #### Geometrie in model 

   <aside class="issue">
      <strong>NOTE</strong>: Verwijzen naar document dat dit beschrijft. NIet volledige uitleg hier overnemen. In elk geval afbeelding niet opnemen.
   </aside>

   De handreiking Geometrie in model en GML [[gimeg]] legt inhoudelijk uit hoe het geometriemodel uit ISO 19107 [[iso-19107-2019]] kan worden toegepast en wat het geldende Nederlands profiel is (i.e. welke selectie is gemaakt uit de mogelijke geometrietypen). 

   Een eis uit [[EMSO]] is: 
   > aansluiting op Simple Features (ISO 19125)

   Simple Features maakt een selectie uit het ISO 19107 geometriemodel. Het neemt daaruit alleen de meest gebruikelijke geometrietypen over. 

   <aside class="issue">
      <strong>ISO 19125</strong> definieert een model voor <strong>2 dimensionale </strong> geometrietypen. <strong>3D geometrie is uitgesloten van deze standaard</strong>. In EMSO wordt echter wel een behoefte aan 3D geometrie geformuleerd.
   </aside>

   We hanteren dus Simple Features (ISO 19125) _+ een aantal aanvullingen voor zover nodig, waarschijnlijk in ieder geval voor bogen en volumes._

   Simple Features gebruikt zoals gezegd geometrietypen uit de veel uitgebreidere standaard ISO 19107, waarin het volledige geometriemodel gedefinieerd is. De typen uit dit model hanteren we doorgaans als 'black box' typen of interfaces. Als achtergrondinformatie beschrijven we hier kort wat het geometriemodel van ISO 19107 inhoudt. 

   <figure>
       <img src="media/iso19107-geometry.png" alt="ISO 19107 Geometry"/>
       <figcaption>Het Geometry object met al zijn kenmerken zoals gedefinieerd in het ruimtelijk schema van ISO 19107.</figcaption>
   </figure>

   Het Geometry object, waarvan alle specifieke geometrietypen zoals punt, lijn, vlak en volume afgeleid zijn, heeft veel kenmerken en operaties. Belangrijk voor ons zijn: 
   - `SRID`: dit modelleert de verwijzing naar het "Spatial Reference system", in ons geval het coördinaatreferentiesysteem. 
   - `metadata`: optioneel attribuut voor het opnemen van verwijzingen naar documentatie die informatie geeft over de implementatie van het geometrie-object. Dit kunnen we wellicht gebruiken voor bijvoorbeeld de gerealiseerde nauwkeurigheid van de geometrie.

   <aside class="note">
      *Spatial reference system* is een breder begrip dan *coördinaatreferentiesysteem*. Het gaat om een algemene locatieaanduiding, een "ruimtelijk referentiesysteem" dat niet alleen op basis van coördinaten kan werken maar ook op basis van bijvoorbeeld geografische naam of adres. 
   </aside>

   >**Notitie**: onderstaande tekst afkomstig uit doc gen. ondw.

   #### Geometrietype
   Het geometrietype wordt aangegeven door keuze van het juiste type uit het ISO 19107 Geometry Model (`GM_xxx`), passend binnen het profiel zoals gedefinieerd in [[gimeg]]. 

   <figure>
       <img src="media/iso19107-ruimtelijk-schema.png" alt="ISO 19107 ruimtelijk schema"/>
       <figcaption>Het ruimtelijk schema van ISO 19107, geometrische primitieven.</figcaption>
   </figure>

   <aside class="issue">
      Hierbij is het relevant om te definiëren en op schrijven welke varianten toegestaan zijn. Een `GM_Surface` of `GM_Curve` heeft nog allerlei mogelijke verschijningsvormen in het Geometry model. Voor de uitwisseling en het gebruik is het handig om dit in te perken.
   </aside>

### Coordinaatrefrentiesystemen

   >**Notitie**: onderstaande tekst komt uit doc gen. ondw.

   #### Coordinaatreferentiesystemen (CRS)

   Voor DiSGeo/Bestuurlijke Gebieden zijn vier typen coördinatiesystemen relevant:

   - WGS 84 gebaseerd op ITRS, gebruikt voor GPS
   - European Terrestrial Reference System 1989 (ETRS89)
   - Rijksdriehoek systeem (RD)
   - Linear Reference Systems (LRS) (zie ISO 19148:2021, RWS-BPS, NWB, EU INSPIRE)

   <aside class="issue">
      <strong>NOTE</strong>: Url opnemen naar bronnen?
   </aside>

   <aside class="issue">
      <strong>VRAAG</strong>: Wordt dit een <i>algemeen</i> stuk (DiSGeo) of <i>specifiek bestuurlijke gebieden</i>?
      <br>
      <strong>Voorstel</strong>: Algemener neerzetten, voor onderdeel BG, dan verder aanscherpen.
   </aside>

   ##### Ondersteunde CRS-en bij aanlevering

   Het **toepassingsgebied** en de **dimensie** bepalen welke CRS-en bij aanlevering van geometrieën geldig zijn. Aan de ene kant bestaat er onderscheid in het toepassingsgebied. Er zijn objecten die vallen binnen het Europese deel van Nederland en objecten die vallen binnen de Nederlandse Exclusieve Economische Zone (EEZ) van de Noordzee. Aan de andere kant bestaat er onderscheid in de dimensie van geometrieën. Sommige geometrieën zijn 2-dimensionaal; anderen 3-dimensionaal. Voor objecten binnen het Europese deel van Nederland gelden de volgende CRS-en: _**RD**_ en _**ETRS89**_. Voor gebieden op zee is nog geen besluit genomen.

   <aside class="issue">
     <strong>VRAAG</strong>: Hier wordt EEZ genoemd, maar er zijn vier typen op zee. willen we niet dichter bij benaming uit huidige model blijven <i>'~ op land'</i> en <i>'~ op zee'</i>? 
   </aside>

   Er zijn verschillende implementaties van ETRS89 in omloop. Wij nemen het [advies](https://geonovum.github.io/HR-CRS-Gebruik/#realisaties-van-etrs89-en-evrs) van het _Regional Reference Frame Sub-Commission for Europe_ (EUREF) over, om de ETRF2000-realisatie te gebruiken. Verder wordt bij aanlevering rekening gehouden met een lijnlengte van maximaal 200 meter. Dit besluit volgt het [langelijnenadvies](https://forum.pdok.nl/uploads/default/original/2X/c/c0795baa683bf3845c866ae4c576a880455be02a.pdf) van het NSGI. Dit [wordt geadviseerd](https://geonovum.github.io/HR-CRS-Gebruik/#vormvastheid) in [gebruik-crs](https://docs.geostandaarden.nl/crs/def-hr-crs-20220314/), in verband met compatibiliteit met **RDNAPTRANS™**.

   Voor het CRS van **2D-geometrieen** gelden de volgende EPSG-codes:

   | CRS-Naam | Code  | URI                                             |
   |----------|-------|-------------------------------------------------|
   | RD       | 28992 | http://www.opengis.net/def/crs/EPSG/9.9.1/28992 |
   | ETRF2000 | 7931  | http://www.opengis.net/def/crs/EPSG/9.9.1/7931  |

   Voor het CRS van **3D-geometrieen** gelden de volgende EPSG-codes:

   | CRS-Naam | Code  | URI                                             |
   |----------|-------|-------------------------------------------------|
   | RDNAP    | 7415  | http://www.opengis.net/def/crs/EPSG/9.9.1/7415  |
   | ETRF2000 | 9067  | http://www.opengis.net/def/crs/EPSG/9.9.1/9067  |

   ###### Bestuurlijk gebied

   Binnen het thema bestuurlijk gebied bevatten een aantal objecten een geometrie die binnen het Europese deel van Nederland valt. In het informatiemodel zijn deze gebieden geclassificeerd als 'bestuurlijk gebied op land'. Het gaat om de volgende vijf objecten. 

    - Rijksgebied
    - Gemeentegebied
    - Provinciegebied
    - Waterschapsgebied
    - Veiligheidsregiogebied

   <!-- 

   #### Bestuurlijk gebied op zee

    - Territoriale Zee
    - Aansluitende Zone
    - Exclusieve Economische Zone
    - Continentaal Plat

   Voor objecten binnen de EEZ geldt:
   * ETRS89

   <aside class="issue">
   Het is nog niet volledig duidelijk welke CRS-en het beste gebruikt kunnen worden voor aanlevering van geometrieen in de EEZ.
   </aside>

   <aside class="issue">
   Uitzoekpunt: de EEZ zone is mogelijk niet het enige disgeo object waarvoor geldt dat RD geen optie is. Wellicht ook de andere bestuurlijke gebieden op zee en wellicht windturbines op zee.
   </aside> -->

   ##### Ondersteunde CRS-en bij uitlevering:

   <aside class="issue">
      <strong>VRAAG</strong>: Aan- en uitleverprocessen al openemen?
      <br>
      <strong>Antwoord</strong>: Ja aan- en uitlevering al opnemen.
   </aside>

   Bij uitlevering als RD dezelfde realisaties beschikbaar als bij aanlevering.

   Bij uitlevering als ETRS89 kan de geometrie, naast als dezelfde realisaties als bij aanlevering, ook als de geografische ensemble CRSen opgevraagd worden. Te weten:

   >**NOTE**: In onderstaande tabellen extra kolom 'dimensie' (o.i.d.) opnemen? **Nee**: hanteer zelfde aanpak als tabellen 'aanlevering'.

   | CRS-Naam | Code  | URI                                             |
   |----------|-------|-------------------------------------------------|
   | ETRS89   | 4258  | http://www.opengis.net/def/crs/EPSG/9.9.1/4258  |
   | ETRS89   | 4937  | http://www.opengis.net/def/crs/EPSG/9.9.1/4937  |

   Uitlevering via de WGS 84 CRSen is ook mogelijk via nultransformatie [zoals beschreven](https://docs.geostandaarden.nl/crs/crs/#wgs-84-gelijkstellen-aan-etrs89-nultransformatie) in [gebruik-crs](https://docs.geostandaarden.nl/crs/def-hr-crs-20220314/). Het gaat specifiek om:

   | CRS-Naam | Code   | URI                                             |
   |----------|--------|-------------------------------------------------|
   | WGS 84   | 4326   | http://www.opengis.net/def/crs/EPSG/9.9.1/4326  |
   | WGS 84   | 4979   | http://www.opengis.net/def/crs/EPSG/9.9.1/4979  |
   | WGS 84   | CRS84  | http://www.opengis.net/def/crs/OGC/1.3/CRS84    |
   | WGS 84h  | CRS84h | http://www.opengis.net/def/crs/OGC/0/CRS84h     |

   Hierbij zijn CRS84 en CRS84h respectievelijk de long lat varianten van de WGS 84 realisaties 4326 en 4979.

   <aside class="issue">
      <strong>LET OP</strong>: Schrijfwijze 'long lat varianten'
   </aside>

   In [](#crs-overview) is een schematische weergave van de ondersteunde CRS-en bij aanlevering en uitlevering opgenomen.

   <figure id="crs-overview">
       <img src="media/crs-overview.drawio.png" alt="Overview van CRS-en in DiSGeo"/>
       <figcaption>Overzicht van de ondersteunde CRS-en in het kader van DiSGeo bij aanlevering en uitlevering</figcaption>
   </figure>

### Kwaliteit

   >**Notitie**: onderstaande tekst komt uit documentatie disgeo-im.

   #### Gegevenskwaliteit

   Dit document formuleert geen *kwaliteitseisen*, maar hanteert het uitgangspunt dat deze in de bronregistraties gehanteerd worden. Van de gegevens die via het informatiemodel, of daarop gebaseerde productmodellen, worden uitgewisseld, kan daarom een bepaalde kwaliteit verwacht worden. Deze gegevenskwaliteit is een uitgangspunt voor de uiteindelijk uitgewisselde gegevens. 

   Gegevenskwaliteit kent veel verschillende aspecten, zoals wordt beschreven in het NORA Raamwerk Gegevenskwaliteit [[NORA-RK]]. Dit document beschrijft momenteel alleen de *topologische consistentie*. 

   Topologische consistentie wil zeggen dat de geometrieën van verschillende objecten zich op een bepaalde manier tot elkaar verhouden. De vlakgeometrieën van bestuurlijke gebieden van hetzelfde type partitioneren bijvoorbeeld de ruimte. Dat betekent dat:

   - Deze geometrieën naadloos op elkaar aansluiten, zodat er geen gaten voorkomen;
   - Deze geometrieën elkaar niet overlappen.

   De topologische consistentie-regels zijn opgenomen bij de objecttypen waar ze voor gelden, en zijn te vinden in [Hoodfstuk 3 Gegevensdefinitie](https://geonovum.github.io/disgeo-im/#cat).

   #### Nauwkeurigheid

   Voor het aangeven van de nauwkeurigheid van de geometrieen in RD(NAP) en ETRS89 volgen we [het advies](https://docs.geostandaarden.nl/crs/crs/#nauwkeurigheid-van-coordinaten) van [gebruik-crs](https://docs.geostandaarden.nl/crs/def-hr-crs-20220314/).


   #### Nauwkeurigheidseisen

   >**Notitie**: Onderstaande tekst uit doc gen. ondw.

   >**NOTE**: Dit onderwerp is al verder uitgewerkt in doc modelleerprincipes.

   Wat onder nauwkeurigheid van geometrie wordt verstaan is goed gedefinieerd in standaarden. We gaan ervan uit dat wat in EMSO nauwkeurigheid wordt genoemd, hetzelfde is als [positionele juistheid](https://www.noraonline.nl/wiki/Positionele_juistheid) in het NORA raamwerk gegevenskwaliteit en hetzelfde als wat in de BGT positionele nauwkeurigheid wordt genoemd: 

   > Onder positionele nauwkeurigheid verstaat men de mate waarin de opgeslagen coördinaten overeenkomen met de waarden in de werkelijkheid of de geaccepteerde afwijking.

   Per objecttype geven we de toegestane kwaliteit voor de positionele nauwkeurigheid als een getal in centimeters (dat dan de toegestane afwijking weergeeft). MIM heeft hiervoor geen metadata-element. Een optie is om dit in een tabel vóór in de gegevenscatalogus op te nemen, zoals gedaan in de BGT catalogus op p. 23. 

   <aside class="example">
   <figure>
       <img src="media/bgt-nauwkeurigheid.png" alt="Voorbeeld BGT"/>
       <figcaption>Tabel met nauwkeurigheidseisen in de BGT gegevenscatalogus</figcaption>
   </figure>
   </aside>

   Eventueel zou het ook in het MIM aspect `Regels` bij de geometrie eigenschap van het desbetreffende objecttype gezet kunnen worden. 

   <aside class="issue">
   - Zoeken naar een manier om dit machineleesbaar vast te leggen.

   <strong>VOORSTEL</strong>: 

   Leg dit vast in een te definiëren metadata aspect bij de eigenschap in een MIM extensie voor geo. Het heeft mogelijk toegevoegde waarde om dit bij de data te kunnen terugvinden.

   Vastleggen bij eigenschap heeft voorkeur boven vastleggen bij objecttype, omdat er mogelijk meerdere geometrie-eigenschappen komen bij een objecttype (Levels of Detail).
   </aside>

   #### Inwinregels
   >**Notitie**: Onderstaande tekst uit doc gen. ondw.

   >**NOTE**: Dit onderwerp is al verder uitgewerkt in modelleerprincipes.

   Verreweg de meeste objecttypen in de SOR hebben in hun huidige registratie al enige vorm van inwinregels. Eventueel zouden inwinregels in het MIM aspect `Regels` bij het geometrie attribuut van het desbetreffende objecttype gezet kunnen worden. 

   Omdat dit vaak omvangrijke instructies zijn, zijn ze nu meestal in tekst uitgeschreven in een apart handboek of hoofdstuk van de gegevenscatalogus. We zoeken naar een manier om deze teksten wel te relateren aan de bijbehorende modelelementen (annotatie).

   #### Topologische regels

   >**NOTE**: kiezen waarplaatsen: hier of onder NEN3610

   >**NOTE**: Dit onderwerp is al verder uitgewerkt in modelleerprincipes? Kijk ook naar deze [notitie over ruimtelijke en administratieve relaties in NEN3610:2022](https://github.com/Geonovum/disgeo-im/blob/main/docs/thema/bestuurlijke-gebieden/benaming-relaties.md).

   Voor ruimtelijke relaties tussen de objecten kunnen we gebruik maken van de topologische relaties zoals gedefinieerd in de Simple Features standaard [[iso-19125-1-2004]] en aangeraden in [[NEN3610-2021-ontw]] en [[sdw-bp]]. Deze relaties zijn geïmplementeerd in veel geografische softwareomgevingen en ook in GeoSPARQL: 

   - **`Equals`** - gelijk
   - **`Disjoint`** - disjunct (geen enkel punt gemeen)
   - **`Touches`** - raakt
   - **`Crosses`** - kruist
   - **`Within`** - binnen
   - **`Contains`** - bevat
   - **`Intersects`** - doorsnijdt (geometrieën hebben op zijn minst één punt gemeen;
   geometrieën kunnen verschillende dimensie hebben)

   Deze relaties kun je gebruiken voor punt-, lijn- en vlakgeometrieën. Omdat er in de SOR meer met 3D wordt gewerkt, worden topologieregels complexer maar ook secundair aan de representatie van de werkelijke verhouding tussen objecten. Uit EMSO: 

   > Het is belangrijker om ervoor te zorgen dat objecten die zich in de werkelijkheid op een bepaalde wijze tot elkaar verhouden (bijvoorbeeld een verharding ligt bovenop een overbrugging) ook in de registratie op deze wijze tot elkaar verhouden (bijvoorbeeld dat uit de z-coördinaten van de verharding en de overbrugging blijkt dat de verharding bovenop de overbrugging ligt). De exacte uitwerking van deze relaties in topologie-regels zal later in het traject verder worden opgepakt.

   <aside class="issue">
      Welke objecttypen spelen een rol in de landsdekkendheid? Welke objecttypen hebben specifieke topologische relaties met elkaar? We hebben als modelleurs inhoudelijke expertise nodig om dit goed uit te werken.
   </aside>

   #### Benodigde kwaliteitsmetadata

   Wat voor kwaliteitsmetadata bij een objecttype wordt voorgeschreven, kan worden bepaald aan de hand van uitgangspunten in EMSO [§ 3.4.5](https://docs.geostandaarden.nl/disgeo/emso/#meta-gegevens-over-herkomst-en-kwaliteit). Dit kan zijn:
   - plaatsbepalingspunten
   - een brondocument / bronverwijzing anders dan plaatsbepalingspunten
   - gerealiseerde nauwkeurigheid van de geometrie van het object in de vorm van een nauwkeurigheidsklasseaanduiding
   - helemaal geen kwaliteitsmetadata

   We gaan onze eerder uitgewerkte modelleerpatronen toetsen tegen dit onderwerp.

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

   >*Notitie*: onderstaande tekst afkomstig uit ...?

   #### NEN 3610
   NEN 3610 [[NEN3610-2021-ontw]] zegt weinig specifieks over geometrie en geometrische vastlegging van objecten, anders dan dat ISO 19107:2020 normatief wordt aangehaald, waarin de ISO geometrietypen (o.a. `GM_Point`, `GM_Curve`, `GM_Surface`, `GM_Solid`) worden gedefinieerd. 

   Inwinregels worden in sectormodellen bepaald. 

   > "Inwinregels geven aan welke punten van een object ingemeten moeten worden en waar de geometrie van een geregistreerd object aan moet voldoen. Het leidt tot een vastgestelde geometrische weergave gericht op een specifieke toepassing." 

   Paragraaf 8.4.4.3 Geometrie bevat een aantal uitgangspunten:
   - Geometrie is een representatie van een object.
   - Een objecttype kan nul of meer geometrische representaties hebben.
   - De beschrijving van de 3D-werkelijkheid wordt ondersteund.
   - Hoogte-informatie kan absoluut of relatief zijn; hierover staat in NEN 3610 een goede uitleg.

   Paragraaf 9.12 gaat in op topologische relaties en geeft hier gestandaardiseerde namen voor.

   Hoofdstuk 10 bevat regels en handreikingen over coördinaatreferentiesystemen die van belang kunnen zijn voor de SOR. 

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

### EMSO (NOG INDELEN)

   #### Uitgangspunten uit EMSO

   <aside class="issue">
      <strong>VRAAG</strong>: <i>Kwaliteitsmetadata</i> (o.a. precisie) verder aanvullen met of verwijzen naar <i>Modelleerprincipes</i>).
   </aside>

   - De vastlegging van geometrie wordt zodanig vormgegeven dat de driedimensionale (3D) beschrijving van een object kan worden opgenomen.
   - EMSO beschrijft een aantal algemene topologische regels over vlakdekkendheid en topologie, bv "Objecten op verschillende hoogten moeten goed op elkaar aansluiten waar ze elkaar raken en consistent zijn"
   - Waar relevant wordt er kwaliteitsmetadata voor geometrieën opgenomen.
   - De ruimtelijke dekking van de SOR is inclusief de territoriale zee.
   - Het te gebruiken coördinatenstelsel is RD. 
   - De [precisie](https://www.noraonline.nl/wiki/Geometrische_precisie) van coördinaten is op millimeterniveau en in RD betekent dit dat er coördinaten met 3 decimalen worden opgenomen.
   - Gegeneraliseerde data objecttypen [worden niet opgenomen in de SOR](https://docs.geostandaarden.nl/disgeo/emso/#generalisatie). Ze kunnen wel onderdeel zijn van informatieproducten. Generalisatie is "het zinvol weglaten, vereenvoudigen, verplaatsen, vergroten, symboliseren en/of aggregeren van de geometrie van objecten (of op attribuutniveau)", ten behoeve van minder gedetailleerde kaartschalen.

   <aside class ="issue">
      Is RD wel het juiste coördinaatreferentiesysteem?
      <ul>
         <li>
            Het te gebruiken coördinaatreferentiesysteem, RD, is niet toereikend voor objecten die zich niet op land bevinden maar op territoriale zee, zoals windturbines. Echter, de gewenste ruimtelijke dekking van de SOR is inclusief de territoriale zee.
         </li>
         <li>
            Vanuit verschillende (basis)registraties is niet RD maar ETRS89 de eis. O.a. in de Omgevingswet (bron?). In het EMSO is van RD uitgegaan omdat veel bronhouders nog in RD werken. We moeten met experts bekijken of RD danwel ETRS op land de vereiste moet zijn. We kunnen hierbij ook gebruik maken van [hoofdstuk 3](https://docs.geostandaarden.nl/crs/cv-hr-crs-20211125/#aandachtspunten-bij-crs-in-informatiemodel-en-informatieketen) van de Handreiking CRS [gebruik-crs](https://docs.geostandaarden.nl/crs/def-hr-crs-20220314/).
         </li>
         <li>
            Op zee zijn noch RD, noch ETRS89 geschikt; het is gebruikelijk om daar WGS-84 te hanteren.
       </li>
      </ul>
   </aside>

