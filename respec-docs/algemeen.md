# Algemeen

## Geometrie

<aside class="ednote" title="Onderstaande tekst verwerken in hoofdstuk">
   <p><b>Vastlegging geometrie</b>:<i> Geometrie wordt hierbij in de SOR vastgelegd als een eigenschap van een object en representeert daarmee de locatie van een object. Er is één uitzondering in de SOR: alleen nummeraanduiding heeft via het genummerde object een ligging en heeft daarmee geen eigenschap geometrie.</i></p>
   <p><b>Dimensies</b>:<i> Indirecte beschrijvingen van 3D (middels het vastleggen van beschrijvende eigenschappen als Hoogte of Relatieve hoogteligging in combinatie met een 2D geometrie) vallen niet onder de noemer 3D geometrie. Relatieve hoogteliggingen kunnen zo nodig ten behoeve van informatieproducten worden afgeleid.</i></p>
   <p><b>CRS</b>:<i>Volgen regels uit NEN3610 voor gebruik crs: ieder geom moet voorzien zijn van verwijzing naar crs waarin coords zijn opgenomen.</i></p>
   <p><b>CRS</b>:<i>RDNAP-crs gehanteerd als crs. Het RD-stelsel is gedefinieerd ten opzichte van het ETRS89. Hiervoor geldt dat de gebruikte horizontale datum Bessel 1841 is en het coördinaatsysteem de stereografische projectie. Als verticale datum wordt het NAP-vlak gebruikt. RDNAPTRANS™ is de officiële en nauwkeurige transformatie tussen het coördinatensysteem van de Rijksdriehoeksmeting (RD) en het Normaal Amsterdams Peil (NAP) enerzijds en het European Terrestrial Reference System 1989 (ETRS89) anderzijds.</i></p>
   <p><b>Nauwkeurigheid</b>:<i>Coördinaten opgenomen bij een geometrie worden standaard uitgewisseld met een getalsnauwkeurigheid van 1 mm of het equivalent daarvan in graden. Voor RD en NAP komt dat overeen met de volgende nauwkeurigheden:</i>
      <ul>
         <li>RD in meters 3 decimalen (1 mm)</li>
         <li>NAP-hoogte in meters 3 decimalen (1 mm)</li>
         <li>Alles wat nauwkeuriger is wordt afgerond op deze nauwkeurigheid van 3 decimalen. Afronding is volgens de volgende regel: <code>0.0015 ≈ 0.002</code> en <code>0.0014 ≈ 0.001</code>.</li>
      </ul>
   </i></p>
   <p><b>Topologie</b>:<i>Het begrip maaiveld als een referentielaag (met de relatieve hoogte waarde “nul”) waarin veruit de meeste objectgeometrieën voorkomen, wordt hierbij minder relevant. In de praktijk blijken er vanuit verschillende perspectieven namelijk andere behoeften te zijn voor wat betreft maaiveld. Het is belangrijker om ervoor te zorgen dat objecten die zich in de werkelijkheid op een bepaalde wijze tot elkaar verhouden (bijvoorbeeld een verharding ligt bovenop een overbrugging) ook in de registratie op deze wijze tot elkaar verhouden (bijvoorbeeld dat uit de z-coördinaten van de verharding en de overbrugging blijkt dat de verharding bovenop de overbrugging ligt). De exacte uitwerking van deze relaties in topologie-regels zal later in het traject verder worden uitgewerkt. Daarnaast is het van belang dat er op elke fysieke locatie in de werkelijkheid (elke x,y-coördinaat) altijd tenminste een reëel object aanwezig is (water, begroeiing, gebouw, verharding, kunstwerk, constructies of onbepaald terrein).</i></p>
   <p><b>Topologie - ontwerprincipes</b> (samenvatting):<i> 
      <ul>
         <li>De reële objecten in de SOR bedekken met hun x,y geometrie het volledige grondgebied van Nederland</li>
         <li>Geometrieën van objecten kunnen boven elkaar liggen</li>
         <li>Geometrieën van objecten kunnen elkaar uitsluiten</li>
         <li>Functionele ruimten zijn niet landsdekkend en mogen elkaar overlappen</li>
         <li>De SOR kent voor alle registratieve en geografische ruimten een 2D geometrie</li>
         <li>Geografische ruimten zijn niet landsdekkend en mogen elkaar overlappen</li>
      </ul>
   </i></p>

   <p><b>NEN3610</b>:<i>Paragraaf 8.4.4.3 Geometrie bevat een aantal uitgangspunten:
      <ul>
         <li>Geometrie is een representatie van een object.</li>
         <li>Een objecttype kan nul of meer geometrische representaties hebben.</li>
         <li>De beschrijving van de 3D-werkelijkheid wordt ondersteund.</li>
         <li>Hoogte-informatie kan absoluut of relatief zijn; hierover staat in NEN 3610 een goede uitleg.</li>
         <li>Paragraaf 9.12 gaat in op topologische relaties en geeft hier gestandaardiseerde namen voor.</li>
         <li>Hoofdstuk 10 bevat regels en handreikingen over coördinaatreferentiesystemen die van belang kunnen zijn voor de SOR.</li>
      </ul>
   </i></p>
</aside>

Voor de representatie van de _locatie_, _oriëntatie_ en _vorm_ van een object uit de werkelijkheid, gebruiken informatiemodellen geometrieën. De dimensie van een representatie variëert van nuldimensionaal (0D) tot driedimensionaal (3D). Objecten worden altijd geplaatst in een tweedimensionele (2D), of driedimensionele (3D) ruimte. Het informatiemodel DiSGeo gebruikt gestandaardiseerde geometrietypen uit ISO 19107:2003. Dit voorziet zowel in de opname van de coördinaten van de geometrie, als van het coördinaten<i>stelsel</i>.

Tot slot heeft een geometrische representatie ook kwaliteitskenmerken. Het informatiemodel DiSGeo onderscheid in elk geval informatie over de _nauwkeurigheid_ en de _inwinregels_. Samengevat legt het informatiemodel de volgende informatie over een geometrie vast: [Type](#geometrietypen), [Dimensie](#dimensies), [Coordinaatreferentiesysteem (CRS)](#coordinaatreferentiesystemen) en [Kwaliteitskenmerken](#kwaliteit) (o.a. nauwkeurigheid, inwinregels en topologische regels).

<aside class="ednote" title="Waar topologische relaties onderbrengen?">
   Aan deze kenmerken nog topologische/ruimtelijke relaties toevoegen? Of valt dit onder topologische regels?
</aside>

Voor de vastlegging van (informatie over) geometrieën gelden een aantal belangrijke principes die volgen uit verschillende standaarden en initiatieven. De volgende documenten zijn hierin leidend:

 - Metamodel Informatie Modellering 1.1.1 [[MIM]]
 - Raamwerk van geo-standaarden 3.0 [[Raamwerk-Geo]]
 - Basismodel Geo-informatie [[NEN3610-2022]]
 - ISO-19107-2003: Geographic information — Spatial schema [[ISO-19107-2003]]
 - ISO-19125-2004: Geographic information — Simple feature access [[ISO-19125]]
 - Modelleerprincipes Samenhangende Objectenregistratie [[disgeo-mod]]
 - Eisen aan Model Samenhangende Objectenregistratie [[EMSO]]
 - Geometrie in Model en GML [[GIMEG]]

<!-- Per onderdeel verschilt de plek in het model waar de informatie over geometrie vastlegt. Het informatiemodel kent verschillende niveaus: _dataset_-, _object_- en _attribuutniveau_. In het algemeen geldt: hoe generieker de aard van de informatie, hoe hoger het niveau waarop het model dit vastlegt. -->

De volgende paragrafen beschrijven welke eisen op het informatiemodel DiSGeo van toepassing zijn én hoe die concreet worden vastgelegd. De eisen en uitgangspunten zijn in principe geen onderdeel van dit document. We verwijzen hiervoor vanuit de tekst naar de betreffende documentatie. Indien niet aanwezig en de eis op zichzelf mogelijk onvoldoende helder is, bevat dit hoofdstuk een korte uitleg over de totstandkomming danwel interpretatie van een eis.

### Geometrietypen

Geometrietypen hebben verschillende niveau's van _data-complexiteit_ en _dimensionaliteit_ (zie: [Dimensies](#dimensies). Het volstaat om een ISO 19107-geometrietype toe te passen in het informatiemodel. Raadpleeg voor een uitgebreidere toelichting op dit ondewerp hoofdstuk 2 van de handreiking Geometrie in model en GML [[GIMEG]]. Dit legt inhoudelijk uit hoe het geometriemodel uit ISO 19107 [[ISO-19107-2019]] kan worden toegepast en wat het geldende Nederlands profiel is.

ISO 19107 biedt een aantal basisgeometrieën om een individueel object uit de werkelijkheid te representeren. Dit zijn de [geometrische primitieven](https://geonovum.github.io/gimeg/#geometrische-primitieven). Soms geldt een verzameling van objecten uit de werkelijkheid als één geheel. Daarvoor zijn [geometrische aggregaties](https://geonovum.github.io/gimeg/#geometrische-aggregaties) geschikt. Binnen het informatiemodel DiSGeo onderscheiden we in elk geval de ISO 19107-geometrietypen uit onderstaande tabel.

| Primitieve   | In ISO19107 - Enkelvoudig   | In ISO19107 - Aggregatie    |
| ---          | ---                         | ---                         |
| Punt         | `GM_Point`                  | `GM_MultiPoint`             |
| Lijn         | `GM_Curve`                  | `GM_MultiCurve`             |
| Vlak         | `GM_Surface`                | `GM_MultiSurface`           |
| Volume       | `GM_Solid`                  | `GM_MultiSolid`             |

<aside class="issue" title="Uitwerken geometrietypen">
   Hierbij is het relevant om te definiëren en op te schrijven welke varianten toegestaan zijn. Een <code>GM_Surface</code> of <code>GM_Curve</code> heeft nog allerlei mogelijke verschijningsvormen in het geometriemodel. Voor de uitwisseling en het gebruik is het handig om dit in te perken.
</aside>

De toepassing van de ISO 19107-geometrietypen, zorgt ervoor dat het geometrietype helder is en dat zowel de coördinaten als het coördinatenstelsel kunnen worden opgenomen. In het bijzonder eist het [[EMSO]] [aansluiting op ISO 19125](https://docs.geostandaarden.nl/disgeo/emso/#:~:text=Hierbij%20is%20voor%20geometrie%20aansluiting%20op%20Simple%20Features%20(ISO19125)%20voorgeschreven) Simple Features. Deze standaard maakt een selectie uit het ISO 19107 geometriemodel. Het neemt daaruit alleen de meest gebruikelijke geometrietypen over. 

<blockquote cite="https://docs.geostandaarden.nl/disgeo/emso/#:~:text=De%20SOR%20hanteert,naar%203D%20geometrie.">
   <i>
      "De SOR hanteert altijd expliciete geometrie en geen impliciete geometrie, zoals geparametriseerde geometriebeschrijvingen die in CAD- of BIM-modellen voorkomen. Hiermee kunnen namelijk betere analyses en kwaliteitscontroles worden uitgevoerd, zoals topologische controles.  2D geometrie worden ‘opgetrokken’ naar 3D geometrie."
   </i>
</blockquote>

_Simple Features_ gebruikt geometrietypen uit de veel uitgebreidere standaard ISO 19107. De typen uit dit model hanteren we doorgaans als `«Interface»`. Het Geometrie-object, waarvan alle specifieke geometrietypen zoals _punt_, _lijn_, _vlak_ en _volume_ afgeleid zijn, heeft veel kenmerken en operaties. Belangrijk voor DiSGeo zijn: 
- `SRID`: dit modelleert de verwijzing naar het _Spatial Reference System_, in ons geval het _coördinaatreferentiesysteem_ (CRS, zie: [Coordinaatreferentiesystemen](#coordinaatreferentiesystemen). 
- `metadata`: optioneel attribuut voor het opnemen van verwijzingen naar documentatie die informatie geeft over de implementatie van het geometrie-object. Dit kunnen we wellicht gebruiken voor bijvoorbeeld de gerealiseerde nauwkeurigheid van de geometrie.

<aside class="note" title="Spatial Reference System vs. Coördinaatreferentiesysteem">
   <i>Spatial reference system</i> is een breder begrip dan <i>coördinaatreferentiesysteem</i>. Het gaat om een algemene locatieaanduiding, een <i>ruimtelijk referentiesysteem</i> dat niet alleen op basis van coördinaten kan werken maar ook op basis van bijvoorbeeld geografische naam of adres. 
</aside>

### Dimensies
Bij _dimensie_ wordt onderscheid gemaakt tussen de termen: **primitieve**, **ruimte** en **model**. Er zijn vier gradaties van primitieven oplopend van 0D tot en met 3D. Elke hogere graad voegt een extra dimensie toe. Zo staat 0D alleen het primitieve `punt` toe, maar 1D zowel `punt` als `lijn`. 2D voegt daar `vlak` aan toe en 3D `volume`.

<figure id="crs-overview">
   <a href="media/geometrie_dimensies.png" target="_blank" rel="noopener noreferrer">
      <img src="media/geometrie_dimensies.png" alt="Geometrie primitieven en hun dimensies"/>
   </a>
   <figcaption>Overzicht van geometrische primtieven en de bijbehorende dimensionaliteit</figcaption>
</figure>

Deze primitieven kun je plaatsen in een tweedimensionale of driedimensionale ruimte. Afhankelijk van de hoogste dimensie van de primitieve, in combinatie met gehanteerde dimensie van de ruimte, is sprake van een 2D-, 2.5D- of 3D-model. Samengevat komt het hierop neer:

 - **2D-model**: modelleert **2D-primitieven** in een **2D-ruimte**;
 - **2.5-model**: modelleert **2D-primitieven** in een **3D-ruimte**;
 - **3D-model**: modelleert **3D-primitieven** in een **3D-ruimte**.

Het EMSO schrijft voor dat het informatiemodel DiSGeo moet voorsorteren op de mogelijkheid om de [driedimensionale beschrijving van een object](https://docs.geostandaarden.nl/disgeo/emso/#:~:text=waarbij%20de%20vastlegging%20hiervan%20zodanig%20wordt%20vormgegeven%20dat%20de%20driedimensionale%20(3D)%20beschrijving%20van%20een%20object%20kan%20worden%20opgenomen) op te nemen. Per objecttype kan de [wijze van vastlegging](https://docs.geostandaarden.nl/disgeo/emso/#:~:text=Sommige%20objecttypen%20zullen%20worden%20vastgelegd%20in%20de%20vorm%20van%203D%20volumes.%20Andere%20objecttypen%20als%20vlakken%20met%20een%20bepaalde%20hoogteligging.%20Voor%20bepaalde%20objecten%20met%20een%20minimale%20omvang%20kan%20geometrische%20vastlegging%20in%20de%20vorm%20van%20een%20enkel%20co%C3%B6rdinatendrietal%20(x%2C%20y%20en%20z)%20worden%20vastgelegd%20(puntobject)) verschillen. In sommige gevallen representeert een _volume_ het object het beste. In andere gevallen volstaat een _punt_, _lijn_ of _vlak_ met hoogteligging. Dit betekent dat het model ruimte moet bieden aan 3D-primitieven in een 3D-ruimte. Hieruit volgt dat het informatiemodel DiSGeo in zijn totaliteit beschouwd moet worden als een 3D-model. Het verschilt per onderwerp of een uitwerking in 2D (bijv. Bestuurlijk Gebied), 2.5D (bijv. Verharding) danwel 3D(bijv. Gebouw) nodig is.

<aside class="issue" title="3D vs. ISO-19125">
   <p>Hoe verhoudt dit zich tot het uitgangspunt van aansluiting op <b>ISO-19125</b>, dat het model beperkt tot <b>2D-primitieven</b>? In de oorspronkelijke tekst stond de zin:</p>
   <blockquote><i>
      "We hanteren dus Simple Features (ISO 19125) + een aantal aanvullingen voor zover nodig, waarschijnlijk in ieder geval voor bogen en volumes."
   </i></blockquote>
   <p>Naast volumes zijn ook bogen hierin niet toegestaan.</p>
</aside>

#### Bestuurlijk gebied

Het [[EMSO]] geeft in hoofdstuk 5 tot en met 8 per geo-informatieobject aan welk geometrietype van toepassing is. _Registratieve ruimte_ (waar _bestuurlijk gebied_ onderdeel van is) wordt tweedimensionaal vastgelegd. Hiervoor zijn de geometrietypen `GM_Surface` (_vlak_) of `GM_MultiSurface` (_multi-vlak_) geschikt. Het hoofdstuk [Gegevensdefinitie](#cat) van dit document beschrijft per geo-informatieobjecttype in detail hoe het informatiemodel DiSGeo dit vormgeeft.

### Coordinaatreferentiesystemen

<!-- <aside class="issue">
   Heeft het meerwaarde om in het informatiemodel op te nemen in welk CRS een geometrie ingewonnen moet worden? Dat zou een metadata-aspect kunnen zijn net zoals nauwkeurigheidseis.
</aside>

<aside class="issue">
   Door de toepassing van iso-19107 biedt je meteen ruimte (waar?) voor het opnemen van het coordinatenstelsel (zie: <a href="https://geonovum.github.io/disgeo-im/#geometrie:~:text=Het%20informatiemodel%20DiSGeo%20gebruikt%20gestandaardiseerde%20geometrietypen%20uit%20ISO%2019107%3A2003.%20Dit%20voorziet%20zowel%20in%20de%20opname%20van%20de%20co%C3%B6rdinaten%20van%20de%20geometrie%2C%20als%20van%20het%20co%C3%B6rdinatenstelsel.">hier</a>)
</aside> -->

<!-- #### Coordinaatreferentiesystemen (CRS) -->

Welk coördinaatreferentiesysteem in een situatie van toepassing is, wordt bepaald door verschillende factoren, zoals: dimensionaliteit van de gebruikte primitieven, dimensionaliteit van de ruimte en het toepassingsgebied. De dimensionaliteit van primitieven en ruimte zijn in de vorige twee paragrafen toegelicht.

Het toepassingsgebied beschrijft het deel van het van het aardoppervlak waarop het informatiemodel DiSGeo van toepassing is. Dit betreft het Nederlands grondgebied. In het informatiemodel worden alleen objecten opgenomen die gelegen zijn binnen <q>het Europese grondgebied van het Koninkrijk der Nederlanden, inclusief de daarbij behorende <a href="#land-en-zee">territoriale wateren</a></q> en Baarle-Hertog [[EMSO]]. Op basis van deze criteria zijn de volgende vier typen [coördinatiesystemen](https://definities.geostandaarden.nl/nen3610-2022/nl/page/coordinaatsysteem) zijn relevant:

- World Geodetic System 1984 (**WGS 84**) gebaseerd op ITRS, gebruikt voor GPS
- European Terrestrial Reference System 1989 (**ETRS89**)
- Nederlandse Stelsel van de Rijksdriehoeksmeting (**RD**)
- Linear Reference Systems (**LRS**), zie: [[ISO-19148]], [INSPIRE](https://inspire.ec.europa.eu/id/document/tg/tn), [Richtlijn BPS](https://wetten.overheid.nl/BWBR0015962/2003-12-05), [WKD – NWB](https://www.nationaalwegenbestand.nl/application/files/6516/6391/7355/Gebruikersinformatie_Wegkenmerkendatabase_WKD.pdf)

De onderstaande figuur is een schematische weergave van de ondersteunde CRS-en bij aanlevering en uitlevering. De volgende paragrafen beschrijven in meer detail de ondersteunde CRS-en bij aan- en uitlevering.

<figure id="crs-overview">
    <img src="media/crs-overview.drawio.png" alt="Overview van CRS-en in DiSGeo"/>
    <figcaption>Overzicht van de ondersteunde CRS-en in het kader van DiSGeo bij aanlevering en uitlevering</figcaption>
</figure>

<aside class="ednote" title="snippets">
   <ul>
      <li>Hieronder uitwerking in <code>[coördinaatreferentiesystemen](https://definities.geostandaarden.nl/nen3610-2022/nl/page/coordinaatreferentiesysteem)</code> per zee, land, dimensionaltiet en aan- danwel uitlevering.</li>
      <li>Toch verschilt per onderwerp/thema de <code>...</code> </li>
      <li>Linear Reference Systems zijn specifiek relevant voor transportnetwerken (weg en spoor). Die zijn in dit stadium nog niet uitgewerkt en op Bestuurlijke Gebieden niet van toepassing.</li>
      <li>Onderscheid maken tussen zee en land</li>
      <li><code>Head</code>Bestuurlijke gebieden</li>
   </ul>
</aside>

#### Aanlevering

Het _toepassingsgebied_ en de _dimensie_ bepalen welke CRS-en bij aanlevering van geometrieën geldig zijn. Wat betreft het _toepassingsgebied_ zijn er objecten die vallen binnen het Europese deel van Nederland en objecten die vallen binnen de Nederlandse Exclusieve Economische Zone (EEZ) van de Noordzee. Aan de andere kant bestaat er onderscheid in de _dimensie_ van geometrieën. Sommige geometrieën zijn 2-dimensionaal, anderen 3-dimensionaal. Voor objecten binnen het Europese deel van Nederland gelden de volgende CRS-en: _**RD**_ en _**ETRS89**_. Voor gebieden op zee is nog geen besluit genomen.

Er zijn verschillende implementaties van ETRS89 in omloop. Het informatiemodel DiSGeo neemt het [advies](https://geonovum.github.io/HR-CRS-Gebruik/#realisaties-van-etrs89-en-evrs) het _Regional Reference Frame Sub-Commission for Europe_ (EUREF), om de **ETRF2000-realisatie** te gebruiken. Verder wordt bij aanlevering rekening gehouden met een **lijnlengte van maximaal 200 meter**. Dit besluit volgt het [langelijnenadvies](https://forum.pdok.nl/uploads/default/original/2X/c/c0795baa683bf3845c866ae4c576a880455be02a.pdf) van het NSGI, dat is [overgenomen](https://geonovum.github.io/HR-CRS-Gebruik/#vormvastheid) in [[gebruik-crs]] in verband met compatibiliteit met **RDNAPTRANS™**.

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

<!-- Voor objecten binnen de EEZ geldt:
* ETRS89

<aside class="issue">
Het is nog niet volledig duidelijk welke CRS-en het beste gebruikt kunnen worden voor aanlevering van geometrieen in de EEZ.
</aside>

<aside class="issue">
Uitzoekpunt: de EEZ zone is mogelijk niet het enige disgeo object waarvoor geldt dat RD geen optie is. Wellicht ook de andere bestuurlijke gebieden op zee en wellicht windturbines op zee.
</aside> -->

<!-- <aside class ="issue" title="Juistheid CRS">
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
</aside> -->

#### Uitlevering

Bij uitlevering in RD zijn dezelfde realisaties beschikbaar als bij aanlevering. Bij uitlevering in ETRS89 kan de geometrie, naast als dezelfde realisaties als bij aanlevering, ook als de geografisch ensemble van CRS-en worden opgevraagd.

| CRS-Naam | Code  | URI                                             |
|----------|-------|-------------------------------------------------|
| ETRS89   | 4258  | http://www.opengis.net/def/crs/EPSG/9.9.1/4258  |
| ETRS89   | 4937  | http://www.opengis.net/def/crs/EPSG/9.9.1/4937  |

Uitlevering via de WGS 84 CRSen is ook mogelijk via nultransformatie [zoals beschreven](https://docs.geostandaarden.nl/crs/crs/#wgs-84-gelijkstellen-aan-etrs89-nultransformatie) in [[gebruik-crs]]. Het gaat specifiek om:

| CRS-Naam | Code   | URI                                             |
|----------|--------|-------------------------------------------------|
| WGS 84   | 4326   | http://www.opengis.net/def/crs/EPSG/9.9.1/4326  |
| WGS 84   | 4979   | http://www.opengis.net/def/crs/EPSG/9.9.1/4979  |
| WGS 84   | CRS84  | http://www.opengis.net/def/crs/OGC/1.3/CRS84    |
| WGS 84h  | CRS84h | http://www.opengis.net/def/crs/OGC/0/CRS84h     |

Hierbij zijn CRS84 en CRS84h respectievelijk de long-lat-varianten van de WGS84-realisaties met de EPSG-codes 4326 en 4979.

#### Bestuurlijk gebied

Binnen het thema bestuurlijk gebied bevatten een aantal objecten een geometrie die binnen het Europese deel van Nederland valt. In het informatiemodel zijn deze gebieden geclassificeerd als 'bestuurlijk gebied op land': 

 - Rijksgebied
 - Gemeentegebied
 - Provinciegebied
 - Waterschapsgebied
 - Veiligheidsregiogebied

Het openbaar lichaam Rijk bestuurt ook een aantal gebieden op zee. Deze objecten zijn reeds onderdeel van het informatiemodel, maar het is nog niet duidelijk welke CRS-en daarvoor gelden. De gebieden worden op deze plek genoemd, maar niet verder uitgewerkt in de rest van de paragraaf. De volgende objecten zijn geclassificeerd als 'bestuurlijk gebied op zee':

 - Territoriale Zee
 - Aansluitende Zone
 - Exclusieve Economische Zone
 - Continentaal Plat

### Kwaliteit

Onder kwaliteit vallen verschillende onderdelen, zoals gegevenskwaliteit, nauwkeurigheid, inwinregels en topologische regels. Deze zijn elk in een aparte paragraaf uitgewerkt.

#### Gegevenskwaliteit

Allereerst formuleert dit document geen *kwaliteitseisen*. Het uitgangspunt is dat deze in de bronregistraties zelf gehanteerd worden. Van de gegevens die via het informatiemodel, óf daarop gebaseerde productmodellen, worden uitgewisseld, kan daarom een bepaalde kwaliteit verwacht worden. Deze gegevenskwaliteit is een uitgangspunt voor de uiteindelijk uitgewisselde gegevens. Verder kent gegevenskwaliteit veel verschillende aspecten, zoals beschreven in het NORA Raamwerk Gegevenskwaliteit [[NORA-RK]]. Dit document beschrijft momenteel alleen de *topologische consistentie*. Topologische consistentie wil zeggen dat de geometrieën van verschillende objecten zich op een bepaalde manier tot elkaar verhouden. De vlakgeometrieën van bestuurlijke gebieden van hetzelfde type partitioneren bijvoorbeeld de ruimte. Dat betekent dat:

- Deze geometrieën naadloos op elkaar aansluiten, zodat er geen gaten voorkomen;
- Deze geometrieën elkaar niet overlappen.

De topologische consistentie-regels zijn opgenomen bij de objecttypen waar ze voor gelden, en zijn te vinden in [hoofdstuk 3 Gegevensdefinitie](https://geonovum.github.io/disgeo-im/#cat).

#### Nauwkeurigheid

Voor het aangeven van de nauwkeurigheid van de geometrieen in RD(NAP) en ETRS89 volgen we [het advies](https://docs.geostandaarden.nl/crs/crs/#nauwkeurigheid-van-coordinaten) van [gebruik-crs](https://docs.geostandaarden.nl/crs/def-hr-crs-20220314/).


#### Nauwkeurigheidseisen

Wat onder nauwkeurigheid van geometrie wordt verstaan is goed gedefinieerd in standaarden. We gaan ervan uit dat wat in EMSO `nauwkeurigheid` wordt genoemd, hetzelfde is als `positionele juistheid` in het [NORA Raamwerk Gegevenskwaliteit](https://www.noraonline.nl/wiki/Positionele_juistheid) en hetzelfde als wat in de BGT `positionele nauwkeurigheid` wordt genoemd. Daar staat het omschreven als: 

> "_Onder positionele nauwkeurigheid verstaat men de mate waarin de opgeslagen coördinaten overeenkomen met de waarden in de werkelijkheid of de geaccepteerde afwijking._" - [BGT](https://docs.geostandaarden.nl/imgeo/catalogus/bgt/#:~:text=Onder%20positionele%20nauwkeurigheid%20verstaat%20men%20de%20mate%20waarin%20de%20opgeslagen%20co%C3%B6rdinaten%20overeenkomen%20met%20de%20waarden%20in%20de%20werkelijkheid%20of%20de%20geaccepteerde%20afwijking.)

Per objecttype geven we de toegestane kwaliteit voor de positionele nauwkeurigheid als een getal in centimeters (dat dan de toegestane afwijking weergeeft). MIM heeft hiervoor geen metadata-element. Een optie is om dit in een tabel vóór in de gegevenscatalogus op te nemen, zoals gedaan in de BGT catalogus op p. 23. 

<aside class="example" title="Nauwkeurigheidseisen in de BGT-catalogus">
<figure>
    <img src="media/bgt-nauwkeurigheid.png" alt="Voorbeeld BGT"/>
    <figcaption>Tabel met nauwkeurigheidseisen in de BGT gegevenscatalogus</figcaption>
</figure>
</aside>

Eventueel zou het ook in het MIM aspect `Regels` bij de geometrie eigenschap van het desbetreffende objecttype gezet kunnen worden. 

<aside class="issue" title="Machineleesbaarheid">
   <p>Zoeken naar een manier om dit machineleesbaar vast te leggen.</p>
   <p><b>VOORSTEL</b></p> 
   <p>Leg dit vast in een te definiëren metadata-aspect bij de eigenschap in een MIM-extensie voor geo. Het heeft mogelijk toegevoegde waarde om dit bij de data te kunnen terugvinden. Vastleggen bij eigenschap heeft voorkeur boven vastleggen bij objecttype, omdat er mogelijk meerdere geometrie-eigenschappen komen bij een objecttype (Levels of Detail).</p>
</aside>

#### Inwinregels

Verreweg de meeste objecttypen in het informatiemodel DiSGeo hebben in hun huidige registratie al enige vorm van inwinregels. Eventueel zouden inwinregels in het MIM-aspect `Regels` bij het geometrie-attribuut van het desbetreffende objecttype gezet kunnen worden. Dit zijn vaak omvangrijke tekstuele instructies die in een apart handboek of hoofdstuk van de gegevenscatalogus. We zoeken naar een manier om deze teksten te relateren aan de bijbehorende modelelementen (annotatie).

#### Topologische regels

<aside class="note" title="Onderbrengen tekst">
   Kiezen waar plaatsen: hier of onder NEN3610
</aside>

<aside class="note" title="Plek uitwerken onderwerp">
   Dit onderwerp is al verder uitgewerkt in modelleerprincipes? Kijk ook naar deze <a href="https://github.com/Geonovum/disgeo-im/blob/main/docs/thema/bestuurlijke-gebieden/benaming-relaties.md">notitie over ruimtelijke en administratieve relaties in NEN3610:2022</a>.
</aside>

Voor ruimtelijke relaties tussen de objecten kunnen we gebruik maken van de topologische relaties zoals gedefinieerd in de Simple Features standaard [[ISO-19125]] en aangeraden in [[NEN3610-2021-ontw]] en [[sdw-bp]]. Deze relaties zijn geïmplementeerd in veel geografische softwareomgevingen en ook in GeoSPARQL: 

<aside class="issue" title="Update reference">
   Bronverwijzing naar NEN3610 updaten.
</aside>

- **`Equals`** - gelijk
- **`Disjoint`** - disjunct (geen enkel punt gemeen)
- **`Touches`** - raakt
- **`Crosses`** - kruist
- **`Within`** - binnen
- **`Contains`** - bevat
- **`Intersects`** - doorsnijdt (geometrieën hebben op zijn minst één punt gemeen;
geometrieën kunnen verschillende dimensie hebben)

Deze relaties kun je gebruiken voor punt-, lijn- en vlakgeometrieën. Omdat er in het informatiemodel DiSGeo meer met 3D wordt gewerkt, worden topologieregels complexer maar ook secundair aan de representatie van de werkelijke verhouding tussen objecten. Uit EMSO: 

> "_Het is belangrijker om ervoor te zorgen dat objecten die zich in de werkelijkheid op een bepaalde wijze tot elkaar verhouden (bijvoorbeeld een verharding ligt bovenop een overbrugging) ook in de registratie op deze wijze tot elkaar verhouden (bijvoorbeeld dat uit de z-coördinaten van de verharding en de overbrugging blijkt dat de verharding bovenop de overbrugging ligt). De exacte uitwerking van deze relaties in topologie-regels zal later in het traject verder worden opgepakt_".

<aside class="issue" title="Landsdekkendheid">
   Welke objecttypen spelen een rol in de landsdekkendheid? Welke objecttypen hebben specifieke topologische relaties met elkaar? We hebben als modelleurs inhoudelijke expertise nodig om dit goed uit te werken.
</aside>

#### Benodigde kwaliteitsmetadata

<aside class="issue" title="Relatie met hoofdstuk Metadata">
   In hoeverre hoort deze paragraaf hier thuis? Wordt het al afgedekt in het hoofdstuk over metadata? Of zou het daar niet beter passen?
</aside>

Wat voor kwaliteitsmetadata bij een objecttype wordt voorgeschreven, kan worden bepaald aan de hand van uitgangspunten in EMSO [§ 3.4.5](https://docs.geostandaarden.nl/disgeo/emso/#meta-gegevens-over-herkomst-en-kwaliteit). Dit kan zijn:
- plaatsbepalingspunten
- een brondocument / bronverwijzing anders dan plaatsbepalingspunten
- gerealiseerde nauwkeurigheid van de geometrie van het object in de vorm van een nauwkeurigheidsklasseaanduiding
- helemaal geen kwaliteitsmetadata

We gaan onze eerder uitgewerkte **modelleerpatronen** toetsen tegen dit onderwerp.

### NEN3610


<aside class="issue" title="Ruimtelijke en administratieve relaties en compliance met NEN3610">

   <p>Het gaat hierbij om afwegingen bij het kiezen van een naam voor de relatie tussen gemeentegebied en provinciegebied.  Internationaal is de gestandaardiseerde naam <code>within</code>. In NEN3610 is dit vertaald naar <code>binnen</code>. In ons team bestaat de vraag of <code>ligtIn</code> niet een betere naam is. Wat zijn onze opties hierbij?</p>

   <p>De NEN3610 spreekt van administratieve relaties en ruimtelijke relaties. De vertaling <code>binnen</code> betreft een ruimtelijke relatie. Wel is het belangrijk om te beseffen dat de <code>«ruimtelijke relatie»</code> zoals beschreven in de NEN3610 eigenlijk een visuele representatie is van een constraint. Deze hoort dus eigenlijk niet thuis in het informatiemodel.</p>

   <p>Het is aan ons de vraag of we een constraint willen toepassen:</p>
   <ul>
      <li>Zo ja, dan moeten we een <code>NEN3610:ruimtelijke relatie</code> én een <code>NEN3610:administratieve</code> relatie gebruiken.</li>
      <li>Zo niet, dan hebben we alleen een <code>NEN3610:administratieve relatie</code> nodig.</p></li>
   </ul>

   <p>Het gaat dan om een administratieve vastlegging van een ruimtelijke relatie die vanuit de OGC wordt gedefinieerd. Hiervoor kunnen we:</p>

   <ul>
      <li>De NEN3610-benaming <code>binnen</code> gebruiken (waarbij we het begrip <code>NEN3610:binnen</code> opnemen als <code>mim:begrip</code>). </li>
      <li>Onze eigen benaming (<code>ligtIn</code>) gebruiken met een verwijzing naar de OGC term <code>within</code>. Dan hebben we echter geen link met de NEN3610 – dat moet dan als een afgeleid gegeven worden gemodelleerd, omdat het anders niet mogelijk is vanuit de MIM.</li>
   </ul>

   <p><strong>Observaties</strong></p>

   <ul>
      <li>De term <code>binnen</code> is niet het meest geschikt om te gebruiken voor de relatie in ons model – het is echter wel hoe de NEN3610 de ruimtelijke relatie <code>within</code> heeft vertaald. Als wij uitwijken is het lastiger om aan te sluiten op de NEN3610, dus als we deze OGC relatie willen toepassen gebruiken we <code>binnen</code>.</li> 
      <li>We kunnen het NEN3610 begrip <code>binnen</code> (zoals het nu staat in het begrippenkader) opnemen als <code>mim:begrip</code> bij het creëren van de administratieve/ruimtelijke relaties tussen de registratieve gebieden.</li>
   </ul>

   <p><strong>Conclusie</strong></p>

   <p>Hierover is nog geen definitief besluit genomen.

</aside>

#### Aansluiting op Basismodel Geo-informatie (NEN3610)

Het informatiemodel DiSGeo valt binnen het toepassingsgebied van het Basismodel Geo-informatie [[NEN3610-2022]] (hierna: NEN3610) omdat het objecttypen beschrijft die direct herleidbaar zijn tot een locatie ten opzichte van de aarde. Het wordt daarom gemodelleerd conform de regels die in NEN3610 geformuleerd zijn, en als extensie op het semantische model uit NEN3610.

De regels uit NEN3610 zijn voor zover van toepassing gevolgd in het informatiemodel DiSGeo. Binnen DiSGeo maken we zowel een conceptueel model als een logisch model. Hieronder geven we aan welke aspecten van NEN3610 conformiteit op welk modelniveau terug te vinden zijn. We noemen hier niet alle regels, maar alleen de belangrijkste, die in enige vorm terug te vinden zijn in het informatiemodel zelf:
 - DiSGeo objecten zijn uniek identificeerbaar via de twee NEN3610-attributen `identificatie` en `domein` die zijn opgenomen in het logisch model
 - `Historie` en `Levensduur` zijn opgenomen in de klasse `Registratiegegevens` in het logisch model: 
 - `Tijdlijn Geldigheid` is opgenomen via de attributen `beginGeldigheid` en `eindGeldigheid`
 - `Tijdlijn Registratie` is opgenomen via de attributen `tijdstipRegistratie` en `eindRegistratie`
 - `Levensduur` van objecten in de registratie is opgenomen via de attributen `objectBegintijd` en `objectEindtijd`

Het semantische model van NEN3610 bestaat uit een aantal objecttypen die objecten uit de werkelijkheid op hoofdlijn classificeren. In het informatiemodel DiSGeo zijn de klassen, voor zover dit past, gemodelleerd als subklasse van het NEN3610 objecttype Geo-Object of (bij voorkeur) een specifiekere NEN3610-subklasse van Geo-object. Deze verbinding met deze semantische klassen is opgenomen in het conceptueel model.

<aside class="example" title="Koppeling IM DiSGeo aan semantische klassen NEN3610">
   In het model voor Bestuurlijke gebieden is <code>BestuurlijkGebied</code> gemodelleerd als een specialisatie van het objecttype <code>RegistratieveRuimte</code>, die op haar beurt gemodellerd is als specialisatie van <code>NEN3610:RegistratieveRuimte</code>. Bestuurlijke gebieden zijn, volgens hun beschrijving in het [[EMSO]]: 

   <blockquote>[...] <q><i>registratieve ruimten die op basis van wet- of regelgeving als eenheid gelden van politiek/bestuurlijke verantwoordelijkheid. Dit betreft bijvoorbeeld de gebieden behorende bij de vier formele bestuurslagen uit de Grondwet (Rijk, provincie, waterschap, gemeente), maar kan ook gebieden van bestuurlijke samenwerkingsverbanden met eigen politiek/bestuurlijke verantwoordelijkheid omvatten. Een voorbeeld daarvan betreft de veiligheidsregio’s.</i></q></blockquote>

   De definitie van <code>BestuurlijkGebied</code> komt overeen met de NEN3610-definitie van <code>RegistratieveRuimte</code> maar is iets nauwer. In NEN3610 kan het gaan om een eenheid die geldt voor politiek-bestuurlijke verantwoordelijkheid óf bedrijfsvoering. Van dat laatste is bij bestuurlijke gebieden geen sprake. <code>BestuurlijkGebied</code> is daarom een specialisatie van de NEN3610 <code>RegistratieveRuimte</code>. De reden dat het geen directe specialisatie is, maar er nog een objecttype <code>RegistratieveRuimte</code> tussen zit in het DiSGeo-model, is omdat er op dat niveau een status-eigenschap gepositioneerd is. Het is niet mogelijk om eigenschappen toe te kennen aan een NEN3610-object. De definitie van de DiSGeo <code>RegistratieveRuimte</code> is exact gelijk aan de definitie van de NEN3610 <code>RegistratieveRuimte</code>.

   <figure>
      <img src="media/nen3610-disgeo.png" alt="Bestuurlijk gebied als subklasse van Registratieve Ruimte"/>
      <figcaption>Bestuurlijk gebied als subklasse van Registratieve Ruimte</figcaption>
   </figure>
</aside>

#### NEN 3610
NEN 3610 [[NEN3610-2021-ontw]] zegt weinig specifieks over geometrie en geometrische vastlegging van objecten, anders dan dat ISO 19107:2020 normatief wordt aangehaald, waarin de ISO geometrietypen (o.a. `GM_Point`, `GM_Curve`, `GM_Surface`, `GM_Solid`) worden gedefinieerd. 

Inwinregels worden in sectormodellen bepaald. 

> "_Inwinregels geven aan welke punten van een object ingemeten moeten worden en waar de geometrie van een geregistreerd object aan moet voldoen. Het leidt tot een vastgestelde geometrische weergave gericht op een specifieke toepassing._"

 

### Generalisatie

Met *generaliseren*  bedoelen we het zinvol weglaten, vereenvoudigen, verplaatsen, vergroten, symboliseren en/of aggregeren van de geometrie van objecten. In DiS Geo: Eisen aan model samenhangende objectenregistratie [[EMSO]] wordt gesteld dat er geen noodzaak is voor (identificeerbare) gegeneraliseerde objecttypen. Gegeneraliseerde geometrieën worden alleen gebruikt voor visualisatie. 

Een voorbeeld van gegeneraliseerde geometrie zijn de grenzen van bestuurlijke gebieden op hogere kaartschalen (1:10.000, 1:50.000 enz). Deze zijn minder gedetailleerd, bevatten minder punten en zijn geschikt om te bekijken op bepaalde 'zoomniveau's'. Bij het uitwisselen van geodata op het web is generalisatie belangrijk omdat een polygoon, afhankeljik van de mate van detail, erg veel punten kan bevatten, wat performanceproblemen kan veroorzaken. 

De belangrijkste geometrie om op te nemen is de niet-gegeneraliseerde geometrie. Dit is de meest nauwkeurige geometrie. Bijvoorbeeld gemeente- en provinciegrenzen zijn gebaseerd op de Kadastrale grenzen, die knikken bevatten daar waar andere grenzen snijden of daar waar de grens een fysiek object volgt. De niet-gegeneraliseerde geometrie bevat deze knikken. Bij gegeneraliseerde geometrie worden deze weg gehaald voor een rustiger beeld of om het aantal punten te reduceren.

Bestuurlijke grenzen van ten minste gemeenten, provincies en het Rijk worden gegeneraliseerd en bewaard in een registratie ten behoeve van het aanbieden van de TOPNL kaart op verschillende schalen.  

Gegeneraliseerde geometrieën zijn afgeleide gegevens. De bron is een meer nauwkeurige geometrie. Dit roept de vraag op of deze afgeleide gegevens in het informatiemodel moeten worden opgenomen. Sowieso zijn het niet-authentieke gegevens. Enigszins vergelijkbaar is de standaard CityGML [[CityGML3]] waarin één objecttype meerdere geometrie eigenschappen heeft, één voor elk *Level of Detail* (LoD). CityGML is een uitwisselstandaard voor 3D geodata waarbij het gebruikelijk is om meerdere LoD's bij één object niet alleen op te slaan, maar ook gezamenlijk uit te wisselen in een bestand. Een viewer kan dan op basis van bijvoorbeeld de nabijheid van objecten kiezen voor het meest geschikte LoD.  

In producten op basis van de geobasisregistraties zal de gebruiker echter doorgaans gegevens in één bepaalde schaal willen bekijken of ontvangen. Daarom is het uitgangspunt vooralsnog dat we bij objecttypen één geometrie-attribuut modelleren, ook als er geometrieën op meerdere schalen zullen bestaan. Het is wel nodig om bij de geometrie een aantal gegevens op te nemen:
- Het schaalniveau; conform [[NLISO19115]] noemen we dit de 'toepassingsschaal'. Dit is nodig zodat de gebruiker de gewenste schaal kan opvragen en kan zien voor welke schaal een geometrie geschikt is.
- De herkomst i.e. afleidingsgegevens: wat was de brongeometrie en hoe is de geometrie daaruit gegeneraliseerd. Dit is o.a nodig om terugmelding op geometrie te kunnen ondersteunen, ook in het geval van afgeleide geometrieën.

<aside class="ednote" title="Eén of meerdere geometrieatributen">
   Eén geometrieattribuut is waarschijnlijk wel voldoende, maar er zijn wel <i>use cases</i> denkbaar waarbij je meerdere geometrieën wilt uitwisselen van één object. Het CBS doet dit bijvoorbeeld wel in hun WFS-service van wijken en buurten. Gebruikers kunnen dan in hun eigen GIS-pakket van schaal wisselen wanneer ze maar willen. Eén geometrieattribuut volstaat dan nog steeds, maar het moet wel een meervoudige kardinaliteit hebben d.w.z. `[1..*]`. De vraag is of we inderdaad het geometrieattribuut met meervoudige kardinaliteit zullen opnemen in het informatiemodel.
</aside>

Conform de Spatial Data on the Web Best Practices [[SDW-BP]], [Best Practide 6](https://www.w3.org/TR/sdw-bp/#multiplegeometries), moet in een geodataproduct dat op het Web wordt gepubliceerd altijd in ieder geval een geometrie worden aangeboden die geschikt is om te gebruiken in webtoepassingen, i.e. bij wat grotere geometrieën moet er altijd een gegeneraliseerde geometrie beschikbaar zijn.

<aside class="ednote" title="Opvragen gedeeltelijke geometrie">
   Zijn er use cases waarvoor het mogelijk moet zijn dat je een stukje van een geometrie kunt opvragen? I.e. subsetting / clipping? En zo ja heeft dit impact op de modellering? Dat laatste vermoedelijk niet.
</aside>

<aside class="ednote" title="Generalisatie en Aggregatie">
   Onderdeel van generalisatie is in sommige gevallen ook aggregatie. Bij bestuurlijke grenzen komt dit niet voor, maar bij gebouwen en wegen wel. Een groepje gebouwen dat dicht naast elkaar staat wordt dan bijvoorbeeld geaggregeerd tot één gebouwblok, of een aantal wegdelen tot één wegdeel. Als we van objecten verschillende geometrieën beschikbaar willen stellen - hoe werkt dat dan als objecten op lagere schalen geaggregeerd zijn, zoals bijvoorbeeld gebouwen? Het is dan ingewikkeld om de afleidingsgegevens te modelleren.
</aside>

### EMSO (NOG INDELEN)

#### Uitgangspunten uit EMSO

<aside class="ednote" title="Algemene verwijzing maken">
   Controleer of het mogelijk is om aan het begin van het hoofdstuk Geometrie, of zelfs aan het begin van het hoofdstuk Algemeen, een verwijzing te maken naar uitgangspunten in het EMSO.
</aside>

<aside class="ednote" title="Vraag kwaliteitsmetadata">
   <i>Kwaliteitsmetadata</i> (o.a. precisie) verder aanvullen met of verwijzen naar <i>Modelleerprincipes</i>).
</aside>

- De vastlegging van geometrie wordt zodanig vormgegeven dat de driedimensionale (3D) beschrijving van een object kan worden opgenomen.
- EMSO beschrijft een aantal algemene topologische regels over vlakdekkendheid en topologie, bv "Objecten op verschillende hoogten moeten goed op elkaar aansluiten waar ze elkaar raken en consistent zijn"
- Waar relevant wordt er kwaliteitsmetadata voor geometrieën opgenomen.
- De ruimtelijke dekking van de SOR is inclusief de territoriale zee.
- Het te gebruiken coördinatenstelsel is RD. 
- De [precisie](https://www.noraonline.nl/wiki/Geometrische_precisie) van coördinaten is op millimeterniveau en in RD betekent dit dat er coördinaten met 3 decimalen worden opgenomen.
- Gegeneraliseerde data objecttypen [worden niet opgenomen in de SOR](https://docs.geostandaarden.nl/disgeo/emso/#generalisatie). Ze kunnen wel onderdeel zijn van informatieproducten. Generalisatie is "het zinvol weglaten, vereenvoudigen, verplaatsen, vergroten, symboliseren en/of aggregeren van de geometrie van objecten (of op attribuutniveau)", ten behoeve van minder gedetailleerde kaartschalen.



## Metadata

### Metadata op informatieobjectniveau

#### Brongegevens van informatieobjecten

Onder herkomstmetadata verstaan we gegevens die beschrijven hoe een informatieobject tot stand is gekomen. Dit wordt ook wel data lineage, of audit trail genoemd.

Er zijn een aantal relevante standaarden voor het opnemen van metadata op het niveau van informatieobjecten.

* Metagegevens Duurzaam Toegankelijke Overheidsinformatie (MDTO). Dit is een standaard die opgesteld is voor het archiveren van informatieobjecten. Desalniettemin zijn er interessante eigenschappen voor informatieobjecten opgebouwd uit gegevens.
* PROV - internationale W3C standaard voor het beschrijven van herkomst van informatieobjecten.

Het model van PROV-O heeft conceptueel gezien veel gemeen met het MDTO. Zowel PROV als MDTO onderscheiden activiteiten en actoren. Wat in PROV een entiteit wordt genoemd heet in MDTO een record. Het nadeel van MDTO is dat het terminologie gebruikt die toegespitst op de archiefwereld. Zo heet de relatiesoort tussen Record en Actor bijvoorbeeld archiefvormer. Daarnaast biedt het model van PROV nog meer flexibiliteit in het beschrijven van de totstandkoming van informatieobjecten.

Voor dit modelleerpatroon baseren we ons dan ook op de W3C standaardenset PROV, in het bijzonder [[PROV-DM]] en [[PROV-O]].

[[PROV-DM]] beschrijft een standaard informatiemodel om herkomst (provenance) te definiëren, en definieert provenance als:

> provenance is defined as a record that describes the people, institutions, entities, and activities involved in producing, influencing, or delivering a piece of data or a thing.

In dit kader willen we het met name hebben over de herkomst van "a piece of data", ofwel herkomst van informatieobjecten.

Voor het begrip introduceren wij een Nederlandse vertaling van een subset van het PROV model.

<figure id="metadata-herkomst">
  <img src="media/metadata-herkomst-prov.drawio.png" alt="metadata-herkomst-prov">
  <figcaption>Nederlandse vertaling van het W3C PROV model</figcaption>
</figure>

Voor de herkomst van een informatieobject kunnen we een informatieobject als een instantie van een `prov:EntiteitMetHerkomst` beschouwen. De herkomst van een `prov:EntiteitMetHerkomst` kan, zoals eerder genoemd, middels het model vrij uitgebreid beschreven worden. Hierbij kan de afleiding of generatie van een entiteit, de activiteiten die daarbij een rol speelden, en de actoren die handelden of verantwoordelijk zijn, in een keten uitgedrukt worden.

###### Modelleerpatroon voor brongegevens

Een belangrijk doel van herkomst is gegevens herleidbaar kunnen maken naar de bron waarop ze gebaseerd zijn, en naar de actoren die eindverantwoordelijk zijn voor deze gegevens. 

De [[EMSO]] stelt eisen aan de bronverwijzing als metadata van informatieobjecten. Zie de volgende passage uit [[EMSO]]:

> Bronverwijzing betreft aan de ene kant de formele onderbouwing van gegevens, bijvoorbeeld in de vorm van formele brondocumenten, zoals vergunningen en besluiten, maar aan de andere kant ook de meer technische bron van de gegevens, zoals plaatsbepalingspunten en indirect luchtfoto's, metingen en BIM-modellen.

Gezien deze eisen is het van belang om een modelleerpatroon te formuleren voor het vastleggen van metadata voor brongegevens, opdat dit voor alle informatieobjecten op een standaardmanier kan worden toegepast.

Naast de eisen in [[EMSO]], zijn er ook modelleerprincipes geformuleerd in [[MODPR]] die er voor zorgen dat het object centraal wordt gesteld, zodat samenhang gerealiseerd kan worden.
Eén van de [modelleerrichtlijnen](https://geonovum.github.io/disgeo-imsor/modelleerprincipes/#r1-scheidt-registratie-bron-en-herkomstmetadata-van-directe-eigenschappen) luidt:

> Scheidt registratie-, bron- en herkomstmetadata van directe eigenschappen

Dit houdt in dat we bron- en herkomstmetadata niet op hetzelfde niveau als normale objecteigenschappen zoals `bouwjaar` en `oppervlakte` willen uitdrukken. De reden hiervoor is dat directe eigenschappen over het object gaan, en bron- en herkomstmetadata over **de gegevens over** het object.

We hebben dus een aanknopingspunt voor bron- en herkomstmetagegevens nodig dat wel te relateren is aan het beschreven object, maar niet als directe gegevens over het object wordt uitgedrukt. De nieuwe [[NEN3610-2022]] biedt uitkomst. Daarin is dit aanknopingspunt al geboden.

<figure id="nen3610-registratiegegevens">
  <img src="media/nen3610-registratiegegevens.png" alt="nen3610-registratiegegevens">
  <figcaption>NEN 3610:2022 - Registratiegegevens</figcaption>
</figure>

De [[NEN3610-2022]] schrijft al voor hoe tijdlijnen en versieinformatie van informatieobjecten uitgedrukt kunnen worden, los van de directe gegevens over het object middels het construct `Registratie`.

In dit patroon nemen we `Registratie` als aanknopingspunt voor opname van verdere bron- en herkomstgegevens. Dit doen we door `Registratie` als het object met herkomst te beschouwen. 

<figure id="metadata-model-brongegevens">
  <img src="media/metadata-model-brongegevens.png" alt="metadata-model-brongegevens">
  <figcaption>Toepassing van W3C PROV en NEN 3610:2022 als model voor brongegevens</figcaption>
</figure>

De PROV standaard biedt verschillende niveau's van detail waarmee je de bron van een gegeven kunt uitdrukken. Zo kun je het geheel aan activiteiten, actoren en entiteiten beschrijven waarmee een informatieobject tot stand is gekomen, maar kun je dit ook samenvatten en directer aangeven wat de primaire bron van een entiteit is, of wie de verantwoordelijke partij is.<br>
Afhankelijk van hoe een informatieobject tot stand is gekomen kan voor het een of het andere gekozen worden.
Bij een bronregistratie die direct informatieobjecten ontsluit ligt het voor de hand om voor de directe uitdrukking te gaan. Hierbij introduceren we de mogelijkheid om verschillende soorten `Bronentiteit` te definiëren die als `primaireBron` opgenomen kunnen worden voor een informatieobject. Hierbij maken we gebruik van een standaard [[PROV-DM]] modelleerpatroon ([primary source](https://www.w3.org/TR/prov-dm/#term-primary-source)), waarmee we het bijvoorbeeld mogelijk maken om een brondocument, of andere bronnen zoals luchtfoto's op een standaard manier op te nemen als bron van een informatieobject. Daarnaast kunnen het informatieobject toeschrijven aan een verantwoordelijke partij. In deze context is een verantwoordelijke partij meestal een overheidsorganisatie, maar het model is uitbreidbaar voor meerdere soorten actoren.

<aside class='example' title="Informatieobject in serialisatie conform PROV-standaard">
   Een voorbeeld hoe een informatieobject er in een concrete serialisatie conform dit modelleerpatroon uit zou kunnen zien is:

   ```
   {
       "identificatie": "12345",
       "domein": "NL.Gebouw",
       "oorspronkelijkBouwjaar": "1980",
       "status": "In gebruik",
       "geregistreerdMet": {
           "primaireBron": {
               "documentnummer": "GB1487",
               "documentdatum": "2020-09-28"
           },
           "toegeschrevenAan" : {
               "naam": "Gemeente Kemeltoet",
               "code": "GM1234"
           }
       }
   }
   ```
</aside>

<aside class="note" title="Nieuwe afgeleide informatiebojecten">
   Het is ook mogelijk om, bij het in samenhang brengen van gegevens, nieuwe afgeleide informatieobjecten te ontsluiten. Hierbij is de bron niet zo direct aan te merken als bij informatieobjecten uit een bronregistratie. Het model hiervoor wordt nog uitgewerkt.
</aside>