# Algemeen

## Levenscyclus

Objecttypen kunnen, wanneer relevant, een levenscyclusstatus, ookwel levensfase, worden toebedeeld. Hiermee wordt het mogelijk om aan te geven in welke fase een object verkeert. Door de oogharen heen kijkend kun je stellen dat er sprake kan zijn van een planfase, een aanwezigheidsfase en een afwezigheidsfase. De concrete invulling van de levensfasen kan per objecttype worden ingevuld. 
De levenscyclus begint op het gedefinieerde ontstaansmoment, dat per objecttype kan verschillen. Zo is voor bepaalde objecttypen een planstatus relevant, terwijl dit voor andere objecttypen minder relevant lijkt. Wanneer een object niet meer bestaat in die werkelijkheid, bereikt het een eindfase.

<!-- ## Identificatie

<aside class="issue">Deze paragraaf wordt verplaatst naar de documentatie van het logisch model.</aside>

Voor de identificatie van objecten maken we gebruik van het identificatiepatroon van de [[NEN3610-2022]]. (<a href="#nen3610-identificatie"></a>) 

<figure id="nen3610-identificatie">
  <img src="media/nen3610-identificatie.png" alt="nen3610-identificatie">
  <figcaption>NEN 3610:2022 - Identificatie</figcaption>
</figure>

Een belangrijk uitgangspunt is dat de identificatie van een object gedurende zijn gehele levenscyclus gelijk blijft.

<aside class="note">
Identificatie is een aspect wat in conceptuele informatiemodellen nog geen rol speelt. De identificatie zal pas op het niveau van het logisch gegevensmodel geïntroduceerd worden.
</aside> -->

## Geometrie

Voor de representatie van de _locatie_, _oriëntatie_ en _vorm_ van een object uit de werkelijkheid, gebruiken informatiemodellen geometrieën. De dimensie van een representatie variëert van nuldimensionaal (0D) tot driedimensionaal (3D). Objecten worden altijd geplaatst in een tweedimensionele (2D), of driedimensionele (3D) ruimte. Voor de vastlegging van (informatie over) geometrieën gelden een aantal belangrijke principes die volgen uit verschillende standaarden en initiatieven. Een aantal documenten is hierin leidend:

 - Metamodel Informatie Modellering 1.2 [[MIM12]]
 - Raamwerk van geo-standaarden 3.0 [[Raamwerk-Geo]]
 - Basismodel Geo-informatie [[NEN3610-2022]]
 - ISO-19107-2003: Geographic information — Spatial schema [[ISO-19107-2003]]
 - ISO-19125-2004: Geographic information — Simple feature access [[ISO-19125]]
 - Modelleerprincipes Samenhangende Objectenregistratie [[disgeo-mod]]
 - Eisen aan Model Samenhangende Objectenregistratie [[EMSO]]
 - Geometrie in Model en GML [[GIMEG]]

Het [[EMSO]] gebruikt gestandaardiseerde geometrietypen uit [[ISO-19107-2003]]. Dit voorziet zowel in de opname van de coördinaten van de geometrie, als van het coördinaten<i>stelsel</i>. Van sommige objecten is de onderlinge relatie van belang; ook wel ruimtelijke relaties genoemd. De BGT-gegevenscatalogus beschrijft bijvoorbeeld welke objecten samen een [landsdekkend geheel](https://docs.geostandaarden.nl/imgeo/catalogus/bgt/#meetgegevens) vormen.

Bovendien heeft een geometrische representatie vaak ook kwaliteitskenmerken, bijvoorbeeld ten aanzien van _nauwkeurigheid_ en _inwinregels_. Dit document formuleert geen kwaliteitseisen. Het uitgangspunt is dat deze in de bronregistraties zelf gehanteerd worden. Van de gegevens die via het informatiemodel, óf daarop gebaseerde productmodellen, worden uitgewisseld, kan daarom een bepaalde kwaliteit verwacht worden. Deze gegevenskwaliteit is een uitgangspunt voor de uiteindelijk uitgewisselde gegevens. 

Samengevat legt het informatiemodel de volgende informatie over een geometrie vast: [type](#geometrietypen), [dimensie](#dimensies), [coordinaatreferentiesysteem (CRS)](#coordinaatreferentiesystemen), [ruimtelijke relaties](#ruimtelijke-relaties) en [Kwaliteitskenmerken](#kwaliteit) (o.a. nauwkeurigheid, inwinregels en topologische regels).
De volgende paragrafen beschrijven welke eisen op het [[EMSO]] van toepassing zijn én hoe die concreet worden vastgelegd. De eisen en uitgangspunten zijn op zichzelf geen onderdeel van dit document. We verwijzen hiervoor vanuit de tekst naar de betreffende documentatie. Indien niet aanwezig en de eis op zichzelf mogelijk onvoldoende helder is, bevat dit hoofdstuk een korte uitleg over de totstandkomming, of interpretatie van een eis.

#### Aansluiting op Basismodel Geo-informatie (NEN3610)

Het [[EMSO]] valt binnen het toepassingsgebied van het Basismodel Geo-informatie [[NEN3610-2022]] (hierna: NEN3610) omdat het objecttypen beschrijft die direct herleidbaar zijn tot een locatie ten opzichte van de aarde. Het wordt daarom gemodelleerd als extensie op het semantische model uit NEN3610.

Het semantische model van NEN3610 bestaat uit een aantal objecttypen die objecten uit de werkelijkheid op hoofdlijn classificeren. In het [[EMSO]] zijn de objecttypen, voor zover dit past, gemodelleerd als specialisatie van het NEN3610 objecttype Geo-Object of (bij voorkeur) een specialisatie van Geo-object. De verbinding met deze semantische klassen is opgenomen in het conceptueel model.

<aside class="example" title="Koppeling IM DiSGeo aan semantische klassen NEN3610">
   In het model voor Bestuurlijke gebieden is <code>BestuurlijkGebied</code> gemodelleerd als een specialisatie van het objecttype <code>RegistratieveRuimte</code>, die op haar beurt gemodellerd is als specialisatie van <code>NEN3610:RegistratieveRuimte</code>. Bestuurlijke gebieden zijn, volgens hun beschrijving in het [[EMSO]]: 

   <p>[...] <q><i>registratieve ruimten die op basis van wet- of regelgeving als eenheid gelden van politiek/bestuurlijke verantwoordelijkheid. Dit betreft bijvoorbeeld de gebieden behorende bij de vier formele bestuurslagen uit de Grondwet (Rijk, provincie, waterschap, gemeente), maar kan ook gebieden van bestuurlijke samenwerkingsverbanden met eigen politiek/bestuurlijke verantwoordelijkheid omvatten. Een voorbeeld daarvan betreft de veiligheidsregio’s.</i></q></p>

   De definitie van <code>BestuurlijkGebied</code> komt overeen met de NEN3610-definitie van <code>RegistratieveRuimte</code> maar is iets nauwer. In NEN3610 kan het gaan om een eenheid die geldt voor politiek-bestuurlijke verantwoordelijkheid óf bedrijfsvoering. Van dat laatste is bij bestuurlijke gebieden geen sprake. <code>BestuurlijkGebied</code> is daarom een specialisatie van de NEN3610 <code>RegistratieveRuimte</code>. De reden dat het geen directe specialisatie is, maar er nog een objecttype <code>RegistratieveRuimte</code> tussen zit in het DiSGeo-model, is omdat er op dat niveau een status-eigenschap gepositioneerd is. Het is niet mogelijk om eigenschappen toe te kennen aan een NEN3610-object. De definitie van de DiSGeo <code>RegistratieveRuimte</code> is exact gelijk aan de definitie van de NEN3610 <code>RegistratieveRuimte</code>.

   <figure>
      <img src="media/bestuurlijk-gebied-nen3610-specialisatie.png" alt="Bestuurlijk gebied als specialisatie van Registratieve Ruimte"/>
      <figcaption>Bestuurlijk gebied als specialisatie van Registratieve Ruimte</figcaption>
   </figure>
</aside>



### Geometrietypen

Het [[EMSO]] legt geometrie vast als eigenschap van een object. De geometrie representeert daarmee de _locatie_, _orientatie_ en _vorm_ van een object. Voor dit doeleinde zijn verschillende typen geometrieën beschikbaar. Deze typen verschillende in niveau van _data-complexiteit_ en _dimensionaliteit_ (zi ook: [Dimensies](#dimensies)). ISO 19107 biedt hiervoor een aantal basisgeometrieën om een individueel object uit de werkelijkheid te representeren. Dit zijn de [geometrische primitieven](https://docs.geostandaarden.nl/nen3610/gimeg/#geometrische-primitieven). Soms geldt een verzameling van objecten uit de werkelijkheid als één geheel. Daarvoor zijn [geometrische aggregaties](https://docs.geostandaarden.nl/nen3610/gimeg/#geometrische-aggregaties) geschikt. Het [[EMSO]] onderscheid in elk geval de ISO 19107-geometrietypen uit onderstaande tabel.

| Primitieve   | In ISO 19107 - Enkelvoudig   | In ISO 19107 - Aggregatie    |
| ---          | ---                         | ---                         |
| Punt         | `GM_Point`                  | `GM_MultiPoint`             |
| Lijn         | `GM_Curve`                  | `GM_MultiCurve`             |
| Vlak         | `GM_Surface`                | `GM_MultiSurface`           |
| Volume       | `GM_Solid`                  | `GM_MultiSolid`             |

Het volstaat om een ISO 19107-geometrietype toe te passen in het informatiemodel. Raadpleeg voor een uitgebreidere toelichting op dit onderwerp hoofdstuk 2 van de handreiking _Geometrie in model en GML_ [[GIMEG]]. Dit legt inhoudelijk uit hoe het geometriemodel uit ISO 19107 [[ISO-19107-2019]] kan worden toegepast en wat het geldende Nederlands profiel is. De toepassing van de ISO 19107-geometrietypen, zorgt ervoor dat het geometrietype helder is en dat zowel de coördinaten als het coördinatenstelsel kunnen worden opgenomen. In het bijzonder eist het [[EMSO]] [aansluiting op ISO 19125](https://docs.geostandaarden.nl/disgeo/emso/#:~:text=Hierbij%20is%20voor%20geometrie%20aansluiting%20op%20Simple%20Features%20(ISO19125)%20voorgeschreven) Simple Features. Deze standaard maakt een selectie uit het ISO 19107 geometriemodel. Het neemt daaruit alleen de meest gebruikelijke geometrietypen over. 

Het [[EMSO]] schrijft expliciet aansluiting op de ISO-standaard _Simple Features_ voor ([[ISO-19125]])._Simple Features_ gebruikt geometrietypen uit de veel uitgebreidere standaard ISO 19107. De typen uit dit model hanteren we doorgaans als `«Primitief datatype»`. Het Geometrie-object, waarvan alle specifieke geometrietypen zoals _punt_, _lijn_, _vlak_ en _volume_ afgeleid zijn, heeft veel kenmerken en operaties. Belangrijk hier zijn: 
- `SRID`: dit modelleert de verwijzing naar het _Spatial Reference System_, in ons geval het _coördinaatreferentiesysteem_ (CRS, zie: [Coordinaatreferentiesystemen](#coordinaatreferentiesystemen). 
- `metadata`: optioneel attribuut voor het opnemen van verwijzingen naar documentatie die informatie geeft over de implementatie van het geometrie-object. Dit kunnen we wellicht gebruiken voor bijvoorbeeld de gerealiseerde nauwkeurigheid van de geometrie.

<aside class="note" title="Spatial Reference System vs. Coördinaatreferentiesysteem">
   <i>Spatial reference system</i> is een breder begrip dan <i>coördinaatreferentiesysteem</i>. Het gaat om een algemene locatieaanduiding, een <i>ruimtelijk referentiesysteem</i> dat niet alleen op basis van coördinaten kan werken maar bijvoorbeeld ook op basis van geografische naam of adres. 
</aside>

Het [[EMSO]] hanteert altijd [expliciete geometrie](https://docs.geostandaarden.nl/disgeo/emso/#:~:text=De%20SOR%20hanteert,naar%203D%20geometrie.). Hierdoor zijn betere analyses en kwaliteitscontroles mogelijk. Bovendien maakt dit het optrekken van 2D-geometrie naar 3D-geometrie mogelijk. Dit in tegenstelling tot modellen met geparametriseerde geometriebeschrijvingen in CAD- of BIM-modellen (impliciete geometrie).



### Dimensies

Bij _dimensie_ wordt onderscheid gemaakt tussen de termen: **primitieve**, **ruimte** en **model**. Er zijn vier gradaties van primitieven, oplopend van 0D tot en met 3D. Elke hogere graad voegt een extra dimensie toe. Zo staat 0D alleen het primitieve `punt` toe, maar 1D zowel `punt` als `lijn`. 2D voegt daar `vlak` aan toe en 3D `volume`.

<figure id="dimensie-overview">
   <a href="media/geometrie_dimensies.png" target="_blank" rel="noopener noreferrer">
      <img src="media/geometrie_dimensies.png" alt="Geometrie primitieven en hun dimensies"/>
   </a>
   <figcaption>Overzicht van geometrische primtieven en de bijbehorende dimensionaliteit</figcaption>
</figure>

Deze primitieven kun je plaatsen in een tweedimensionale of driedimensionale ruimte. Afhankelijk van de hoogste dimensie van de primitieve, in combinatie met gehanteerde dimensie van de ruimte, is sprake van een 2D-, 2.5D- of 3D-model. Samengevat komt het hierop neer:

 - **2D-model**: modelleert **2D-primitieven** in een **2D-ruimte**;
 - **2.5-model**: modelleert **2D-primitieven** in een **3D-ruimte**;
 - **3D-model**: modelleert **3D-primitieven** in een **3D-ruimte**.

Het EMSO schrijft voor dat moet worden voorgesorteerd op de mogelijkheid om de [driedimensionale beschrijving van een object](https://docs.geostandaarden.nl/disgeo/emso/#:~:text=waarbij%20de%20vastlegging%20hiervan%20zodanig%20wordt%20vormgegeven%20dat%20de%20driedimensionale%20(3D)%20beschrijving%20van%20een%20object%20kan%20worden%20opgenomen) op te nemen. Per objecttype kan de [wijze van vastlegging](https://docs.geostandaarden.nl/disgeo/emso/#:~:text=Sommige%20objecttypen%20zullen%20worden%20vastgelegd%20in%20de%20vorm%20van%203D%20volumes.%20Andere%20objecttypen%20als%20vlakken%20met%20een%20bepaalde%20hoogteligging.%20Voor%20bepaalde%20objecten%20met%20een%20minimale%20omvang%20kan%20geometrische%20vastlegging%20in%20de%20vorm%20van%20een%20enkel%20co%C3%B6rdinatendrietal%20(x%2C%20y%20en%20z)%20worden%20vastgelegd%20(puntobject)) verschillen. In sommige gevallen representeert een _volume_ (3D-model) het object het beste. In andere gevallen volstaat een _punt_, _lijn_ of _vlak_ (2D-model) met eventueel een [hoogteligging](#ruimtelijke-relaties) (2.5D-model). Het vastleggen van beschrijvende eigenschappen als `hoogte` of `relatieve hoogteligging` in combinatie met een 2D-geometrie (primitieve) vallen _niet_ onder de noemer 3D. Het is mogelijk om een relatieve hoogteligging als afgeleid gegeven op te nemen indien nodig voor informatieproducten.

Dit betekent dat het model ruimte moet bieden aan 3D-primitieven in een 3D-ruimte. Hieruit volgt dat het [[EMSO]] in zijn totaliteit beschouwd moet worden als een 3D-model. Het verschilt per onderwerp of een uitwerking in 2D (bijv. `BestuurlijkGebied`), 2.5D (bijv. `Verharding`), danwel 3D(bijv. `Gebouw`) nodig is.

Het [[EMSO]] hanteert ten aanzien van dimensies tegenstrijdige uitgangspunten. Enerzijds eist het aansluiting op ISO 19125, dat het model beprekt tot 2D-primitieven. Anderzijds eist het EMSO dat het model voorsorteert op driedimensionale objectbeschrijving. Het [[EMSO]] interpreteert deze uitganspunten als volgt: _ISO 19125 is leidend voor 2D-objecten en ISO-19107 voor bogen en 3D-objecten_. 

Hoofdstuk 5 tot en met 8 in het [[EMSO]] geven per geo-informatieobject aan welk geometrietype van toepassing is. `RegistratieveRuimte` (waar `BestuurlijkGebied` onderdeel van is) wordt tweedimensionaal vastgelegd. Hiervoor zijn de geometrietypen `GM_Surface` (_vlak_) of `GM_MultiSurface` (_multi-vlak_) geschikt. Het hoofdstuk [[[#informatiemodel-informatiemodel-samenhangende-objecten-bestuurlijke-gebieden]]] van dit document beschrijft per geo-informatieobjecttype in detail hoe het [[EMSO]] dit vormgeeft.

### Coordinaatreferentiesystemen

Het Basismodel Geo-informatie [[NEN3610-2022]] stelt iedere geometrische dataset/geometrie moet zijn voorzien van een verwijzing naar het coördinaatreferentiesysteem waarin de coördinaten van de gemetrie zijn beschreven. Welk coördinaatreferentiesysteem in een situatie van toepassing is, wordt bepaald door verschillende factoren, zoals: dimensionaliteit van de gebruikte primitieven, dimensionaliteit van de ruimte en het toepassingsgebied. De dimensionaliteit van primitieven en ruimte zijn in de vorige twee paragrafen toegelicht.

Het toepassingsgebied beschrijft het deel van het van het aardoppervlak waarop het [[EMSO]] van toepassing is. Dit betreft het Nederlands grondgebied. In het informatiemodel worden alleen objecten opgenomen die gelegen zijn binnen <q>het Europese grondgebied van het Koninkrijk der Nederlanden, inclusief de daarbij behorende <a href="#land-en-zee">territoriale wateren</a></q> en Baarle-Hertog [[EMSO]]. Op basis van deze criteria zijn de volgende vier typen [coördinaatsystemen](https://definities.geostandaarden.nl/nen3610-2022/nl/page/coordinaatsysteem) relevant:

- World Geodetic System 1984 (**WGS 84**) gebaseerd op ITRS, gebruikt voor GPS
- European Terrestrial Reference System 1989 (**ETRS89**)
- Nederlandse Stelsel van de Rijksdriehoeksmeting (**RD**)
- Linear Reference Systems (**LRS**), zie: [[ISO-19148]], [INSPIRE](https://inspire.ec.europa.eu/id/document/tg/tn), [Richtlijn BPS](https://wetten.overheid.nl/BWBR0015962/2003-12-05)
- Gebruikersinformatie Wegkenmerkendatabase WKD (niet meer online beschikbaar)

De onderstaande figuur is een schematische weergave van de ondersteunde CRS-en bij aanlevering en uitlevering. De volgende paragrafen beschrijven in meer detail de ondersteunde CRS-en bij aan- en uitlevering.

<figure id="crs-overview">
    <img src="media/crs-overview.drawio.png" alt="Overview van CRS-en in DiSGeo"/>
    <figcaption>Overzicht van de ondersteunde CRS-en in het kader van DiSGeo bij aanlevering en uitlevering</figcaption>
</figure>

<aside class="ednote" title="snippets">
  <p>Hieronder uitwerking in <code><a href="https://definities.geostandaarden.nl/nen3610-2022/nl/page/coordinaatreferentiesysteem">coördinaatreferentiesystemen</a></code> per zee, land, dimensionaltiet en aan- danwel uitlevering.</p>
</aside>

#### Aanlevering

Het _toepassingsgebied_ en de _dimensie_ bepalen welke CRS-en bij aanlevering van geometrieën geldig zijn. Wat betreft het _toepassingsgebied_ zijn er objecten die vallen binnen het Europese deel van Nederland en objecten die vallen binnen de Nederlandse Exclusieve Economische Zone (EEZ) van de Noordzee. Aan de andere kant bestaat er onderscheid in de _dimensie_ van geometrieën. Sommige geometrieën zijn 2-dimensionaal, anderen 3-dimensionaal. Voor objecten binnen het Europese deel van Nederland gelden de volgende CRS-en: _**RD**_ en _**ETRS89**_. Voor gebieden op zee is nog geen besluit genomen.

Er zijn verschillende implementaties van ETRS89 in omloop. Het [[EMSO]] neemt het [advies](https://docs.geostandaarden.nl/crs/crs/#realisaties-van-etrs89-en-evrs) het _Regional Reference Frame Sub-Commission for Europe_ (EUREF), om de **ETRF2000-realisatie** te gebruiken. Verder wordt bij aanlevering rekening gehouden met een **lijnlengte van maximaal 200 meter**. Dit besluit volgt het langelijnenadvies van het NSGI, dat is [overgenomen](https://docs.geostandaarden.nl/crs/crs/#vormvastheid) in [[gebruik-crs]] in verband met compatibiliteit met **RDNAPTRANS™**.

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

### Ruimtelijke relaties

Voor ruimtelijke relaties tussen de objecten kunnen we gebruik maken van het _Dimensionally Extended Nine‐Intersection Model_ (DE-9IM). Dit is een topologisch model voor het beschrijven van ruimtelijke relaties in een [2D-model](#dimensies). Dit model is uitgewerkt in de _Simple Features_-standaard [[ISO-19125]] en wordt aangeraden in [[NEN3610-2022]] en [[sdw-bp]]. Deze relaties zijn geïmplementeerd in veel geografische softwareomgevingen en ook in GeoSPARQL. Hieronder een overzicht met de originele Engelse naam en daarachter de vertaalde Nederlandse naam uit [NEN3610-2022](https://definities.geostandaarden.nl/nen3610-2022/nl/page/?uri=http%3A%2F%2Fdefinities.geostandaarden.nl%2Fnen3610-2022%2Fid%2Fcollectie%2Fruimtelijke_relaties).

- `Contains` - [Bevat](https://definities.geostandaarden.nl/nen3610-2022/nl/page/bevat)
- `Within` - [Binnen](https://definities.geostandaarden.nl/nen3610-2022/nl/page/binnen)
- `Disjoint` - [Disjunct](https://definities.geostandaarden.nl/nen3610-2022/nl/page/disjunct)
- `Intersects` - [Doorsnijdt](https://definities.geostandaarden.nl/nen3610-2022/nl/page/doorsnijdt)
- `Equals` - [Gelijk](https://definities.geostandaarden.nl/nen3610-2022/nl/page/gelijk)
- `Crosses` - [Kruist](https://definities.geostandaarden.nl/nen3610-2022/nl/page/kruist)
- `Touches` - [Raakt](https://definities.geostandaarden.nl/nen3610-2022/nl/page/raakt)
- `Overlaps` - [Overlapt](https://definities.geostandaarden.nl/nen3610-2022/nl/page/overlapt)

Deze relaties zijn beperkt tot een 2D-model en daarmee alleen van toepassing op geometrietypen `punt`, `lijn` of `vlak`.

<!-- Omdat er in het [[EMSO]] meer met 3D wordt gewerkt, worden de topologische regels complexer. Ze worden echter ook secundair aan de representatie van de werkelijke verhouding tussen objecten. Uit EMSO: 
Het EMSO stelt dat het <q><i>belangrijker</i> [is] <i>om ervoor te zorgen dat objecten die zich in de werkelijkheid op een bepaalde wijze tot elkaar verhouden (bijvoorbeeld een verharding ligt bovenop een overbrugging) ook in de registratie op deze wijze tot elkaar verhouden (bijvoorbeeld dat uit de z-coördinaten van de verharding en de overbrugging blijkt dat de verharding bovenop de overbrugging ligt). De exacte uitwerking van deze relaties in topologie-regels zal later in het traject verder worden opgepakt</i></q>.

Het [[EMSO]] beschrijft de uitwisseling van gegevens uit verschillende geo-basisregistraties. Voor deze basisregistraties gelden reeds bestaande regels ten aanzien van de topologische kwaliteit. De kwaliteit van de gegevens van de bronregistraties werkt zodoende door in het informatiemodel en de productmodellen van DiSGeo. Het [[EMSO]] formuleert wel een aantal duidelijke regels. Destijds was namelijk de gedachte dat het [[EMSO]] zou resulteren in een Samenhangende Objectenregistratie (SOR). In de huidige situatie is dat niet het geval. DiSGeo stelt daarom geen (andere of aanvullende) eisen of regels aan de topologie.

Omdat ze in het [[EMSO]] geformuleerd staan en van onverminderd belang zijn voor de kwaliteit van DiSGeo, herhalen we voor de volledigheid een aantal basisprincipes op deze plek. Specifiekere principes zijn opgenomen Verder is per objecttype aangegeven welke regels er gelden (bijv. [Gemeentegebied](https://geonovum.github.io/disgeo-im/#global_class_BestuurlijkGebied_Gemeentegebied)).

 - De reële objecten bedekken met hun x,y geometrie het volledige grondgebied van Nederland
 - Geometrieën van objecten kunnen boven elkaar liggen
 - Geometrieën van objecten kunnen elkaar uitsluiten
 - Functionele ruimten zijn niet landsdekkend en mogen elkaar overlappen
 - Het [[EMSO]] kent voor alle registratieve en geografische ruimten een 2D-geometrie
 - Geografische ruimten zijn niet landsdekkend en mogen elkaar overlappen

Het begrip _maaiveld_ als een referentielaag (met de relatieve hoogte waarde “nul”) waarin veruit de meeste objectgeometrieën voorkomen, wordt hierbij minder relevant. In de praktijk blijken er vanuit verschillende perspectieven namelijk andere behoeften te zijn voor wat betreft maaiveld. Het is belangrijker om ervoor te zorgen dat objecten die zich in de werkelijkheid op een bepaalde wijze tot elkaar verhouden (bijvoorbeeld een verharding ligt bovenop een overbrugging) ook in de registratie op deze wijze tot elkaar verhouden (bijvoorbeeld dat uit de z-coördinaten van de verharding en de overbrugging blijkt dat de verharding bovenop de overbrugging ligt). De exacte uitwerking van deze relaties in topologie-regels zal later in het traject verder worden uitgewerkt. Daarnaast is het van belang dat er op elke fysieke locatie in de werkelijkheid (elke x,y-coördinaat) altijd tenminste een reëel object aanwezig is (water, begroeiing, gebouw, verharding, kunstwerk, constructies of onbepaald terrein). -->

<!-- ### Kwaliteit

Onder kwaliteit vallen verschillende onderdelen, zoals *actualiteit*, *compleet*, *nauwkeurigheid* en *inwinregels*. In het geval dat DiSGeo als een soort virtuele laag bovenop de huidige registraties gerealiseerd wordt, zijn het eigenlijk géén _eisen_ die gesteld worden. Dan gaat het meer om DiSGeo als dataproduct. De metadata-aspecten beschrijven dan wat de `actualiteit`, `compleetheid`, `positionele juistheid` en `inwinregels` zijn. Die worden dan niet gesteld, maar **afgeleid uit de onderliggende registraties**. In dat geval is het niet noodzakelijk om deze metadata aspecten bij het IM op te nemen. Desondanks kiezen we er in dit stadium toch voor, zodat de lezer deze extra informatie direct ter beschikking heeft en het voor eventueel nieuw te introduceren objecttypen wél relevant is. Hoe dan ook kan DiS-Geo dan niet echt iets _eisen_. De volgende paragrafen lichten elk kwaliteitsaspect toe. -->

<!-- #### Nauwkeurigheid

Voor het aangeven van de nauwkeurigheid van de geometrieen in RD(NAP) en ETRS89 volgen we [het advies](https://docs.geostandaarden.nl/crs/crs/#nauwkeurigheid-van-coordinaten) van [gebruik-crs](https://docs.geostandaarden.nl/crs/def-hr-crs-20220314/): <q><i>Om te voorkomen dat er te grote databestanden ontstaan, wordt aanbevolen de coördinaten af te ronden op 1 decimaal meer dan de nauwkeurigheid van de dataset vereist. Hierdoor kunnen fouten bij herhaaldelijk heen en weer transformeren worden voorkomen</i></q>. Coördinaten opgenomen bij een geometrie worden standaard uitgewisseld met een getalsnauwkeurigheid van `1 mm` of het equivalent daarvan in graden.

Voor RD en NAP komt dat overeen met de volgende nauwkeurigheden:
 - RD in meters 3 decimalen (`1 mm`)
 - NAP-hoogte in meters 3 decimalen (`1 mm`)
 - Alles wat nauwkeuriger is wordt afgerond op deze nauwkeurigheid van 3 decimalen. Afronding is volgens de volgende regel: `0.0015 ≈ 0.002` en `0.0014 ≈ 0.001` -->

<!-- #### Actualiteit

Actualiteit is de mate waarin gegevens recent genoeg zijn. Het is één van de NORA kwaliteitsdimensies. Dit metadata-aspect geeft aan binnen welke termijn (aantal dagen of maanden) na de realisatie of het ontstaan van een object, dit object beschikbaar is. Het geeft dus de [updatefrequentie](https://www.noraonline.nl/wiki/Updatefrequentie) aan. MIM heeft hiervoor geen metadata-element. Daarom breidt DiSGeo het stereotype `«objecttype»` uit MIM uit met het  metadata-element `actualiteit`. Het domein van deze tagged value is `alfanumeriek`. De actualiteit wordt uitgedrukt in termen van aantal dagen of maanden.

#### Compleetheid

Dit metadata-aspect geeft aan in welke mate gegevens aanwezig zijn over het objecttype. Het is één van de NORA kwaliteitsdimensies. Het gebruik in DiS-Geo van het metadata-aspect compleetheid lijkt erg op het NORA kwaliteitsattribuut `Datasetcompleetheid`, maar we gebruiken het meer specifiek om aan te geven of een objecttype in het kader van een registratie verplicht moet worden ingewonnen. MIM heeft hiervoor geen metadata-element. Daarom breidt DiSGeo het stereotype `«objecttype»` uit MIM uit met het metadata-element `compleetheid`. Het domein van deze tagged value is `Verplicht | Optioneel`.

#### Positionele juistheid

De nauwkeurigheid van geometrie is goed gedefinieerd in standaarden. We hanteren als uitgangspunt dat wat in EMSO `nauwkeurigheid` wordt genoemd, hetzelfde is als `positionele juistheid` in het [NORA Raamwerk Gegevenskwaliteit](https://www.noraonline.nl/wiki/Positionele_juistheid) en `positionele nauwkeurigheid` in de BGT. Het informatiemodel DiSGeo volgt NORA en hanteert de term `positionele juistheid`.

Per `«attribuutsoort»` geven we de toegestane kwaliteit voor de positionele juistheid als een getal in centimeters, dat de toegestane afwijking weergeeft. Dit metagegeven wordt alleen ingevuld bij attribuutsoorten met een geometrie als datatype. Het getal dat de positionele juistheid weergeeft, is geen dwingende eis vanuit het informatiemodel. Het informatiemodel DiSGeo kan geen kwaliteitseisen afdwingen. Dit soort regels worden buiten het model vastgesteld in onderliggende registraties. Voor Bestuurlijke gebieden bestaat nog geen registratie en om die reden bestaan ook deze regels nog niet. -->


<!-- Daar staat het omschreven als: <q><i>de mate waarin de opgeslagen coördinaten overeenkomen met de waarden in de werkelijkheid, of de geaccepteerde afwijking</i></q> ([BGT](https://docs.geostandaarden.nl/imgeo/catalogus/bgt/#:~:text=Onder%20positionele%20nauwkeurigheid%20verstaat%20men%20de%20mate%20waarin%20de%20opgeslagen%20co%C3%B6rdinaten%20overeenkomen%20met%20de%20waarden%20in%20de%20werkelijkheid%20of%20de%20geaccepteerde%20afwijking.)). -->

<!-- Een optie is om dit in een tabel vóór in de gegevenscatalogus op te nemen, zoals gedaan in de BGT catalogus op p. 23. 

<aside class="example" title="Nauwkeurigheidseisen in de BGT-catalogus">
<figure>
    <img src="media/bgt-nauwkeurigheid.png" alt="Voorbeeld BGT"/>
    <figcaption>Tabel met nauwkeurigheidseisen in de BGT gegevenscatalogus</figcaption>
</figure>
</aside> -->

<!-- #### Inwinregels

Het semantisch model van NEN3016 doet geen uitspraak over de vastlegging per objecttype, omdat specifieke geometrische vastlgegging sterk afhankelijk is van gebruikersbehoeften en kunnen verschillen per toepassingsdomein. Uitspraken over de geometrische vastleggin zullen daarom worden opgenomen in de vorm van inwinregels in sectormodellen. Deze regels <q>geven aan welke punten van een object ingemeten moeten worden en waar geometrie van een geregistreerd object aan moet voldoen. Het leidt tot een vastgestelde geometrische weergave gericht op een specifieke toepassing</q>, stelt NEN3610. 

Verreweg de meeste objecttypen in die in DiS-Geo een rol spelen hebben in hun huidige registratie al enige vorm van inwinregels. Omdat dit vaak omvangrijke instructies zijn, zijn ze meestal in tekst uitgeschreven in een apart handboek of hoofdstuk van de gegevenscatalogus. Via de tagged value `inwinregels` relateren we deze teksten aan de bijbehorende modelelementen (annotatie). MIM heeft hiervoor geen metadata-element. Daarom breidt DiSGeo het stereotype `«attribuutsoort»` uit MIM uit met het  metadata-element `inwinregels`. De waarde van de tagged value `inwinregels` is een `URI`. Deze tagged value wordt alleen ingevuld bij attribuutsoorten met een geometrietype als domein. -->



<!-- ### Generalisatie

Met *generaliseren*  bedoelen we het zinvol weglaten, vereenvoudigen, verplaatsen, vergroten, symboliseren en/of aggregeren van de geometrie van objecten. In [[EMSO]] wordt gesteld dat er geen noodzaak is voor (identificeerbare) gegeneraliseerde objecttypen. Gegeneraliseerde geometrieën worden alleen gebruikt voor visualisatie. 

Een voorbeeld van gegeneraliseerde geometrie zijn de grenzen van bestuurlijke gebieden op hogere kaartschalen (1:10.000, 1:50.000 enz). Deze zijn minder gedetailleerd, bevatten minder punten en zijn geschikt om te bekijken op bepaalde 'zoomniveau's'. Bij het uitwisselen van geodata op het web is generalisatie belangrijk omdat een polygoon, afhankeljik van de mate van detail, erg veel punten kan bevatten, wat performanceproblemen kan veroorzaken. 

De belangrijkste geometrie om op te nemen is de niet-gegeneraliseerde geometrie. Dit is de meest nauwkeurige geometrie. Bijvoorbeeld gemeente- en provinciegrenzen zijn gebaseerd op de Kadastrale grenzen, die knikken bevatten daar waar andere grenzen snijden of daar waar de grens een fysiek object volgt. De niet-gegeneraliseerde geometrie bevat deze knikken. Bij gegeneraliseerde geometrie worden deze weg gehaald voor een rustiger beeld of om het aantal punten te reduceren. Bestuurlijke grenzen van ten minste gemeenten, provincies en het Rijk worden gegeneraliseerd en bewaard in een registratie ten behoeve van het aanbieden van de TOPNL kaart op verschillende schalen.  

Gegeneraliseerde geometrieën zijn afgeleide gegevens. De bron is een meer nauwkeurige geometrie. Dit roept de vraag op of deze afgeleide gegevens in het informatiemodel moeten worden opgenomen. Sowieso zijn het niet-authentieke gegevens. Enigszins vergelijkbaar is de standaard CityGML [[CityGML3]] waarin één objecttype meerdere geometrie eigenschappen heeft, één voor elk *Level of Detail* (LoD). CityGML is een uitwisselstandaard voor 3D geodata waarbij het gebruikelijk is om meerdere LoD's bij één object niet alleen op te slaan, maar ook gezamenlijk uit te wisselen in een bestand. Een viewer kan dan op basis van bijvoorbeeld de nabijheid van objecten kiezen voor het meest geschikte LoD.  

In producten op basis van de geobasisregistraties zal de gebruiker echter doorgaans gegevens in één bepaalde schaal willen bekijken of ontvangen. Daarom is het uitgangspunt vooralsnog dat we bij objecttypen één geometrie-attribuut modelleren, ook als er geometrieën op meerdere schalen zullen bestaan. Het is wel nodig om bij de geometrie een aantal gegevens op te nemen:
- Het schaalniveau; conform [[NLISO19115]] noemen we dit de 'toepassingsschaal'. Dit is nodig zodat de gebruiker de gewenste schaal kan opvragen en kan zien voor welke schaal een geometrie geschikt is.
- De herkomst i.e. afleidingsgegevens: wat was de brongeometrie en hoe is de geometrie daaruit gegeneraliseerd. Dit is o.a nodig om terugmelding op geometrie te kunnen ondersteunen, ook in het geval van afgeleide geometrieën.

Conform de _Spatial Data on the Web Best Practices_ [[SDW-BP]], [Best Practide 6](https://www.w3.org/TR/sdw-bp/#multiplegeometries), moet in een geodataproduct dat op het Web wordt gepubliceerd altijd in ieder geval een geometrie worden aangeboden die geschikt is om te gebruiken in webtoepassingen, i.e. bij wat grotere geometrieën moet er altijd een gegeneraliseerde geometrie beschikbaar zijn. -->



<!-- ## Metadata

<aside class="issue">Deze paragraaf (2.4 Metadata) wordt verplaatst naar de documentatie van het logisch model.</aside>

### Metadata op informatieobjectniveau

#### Tijdlijnen van informatieobjecten

Een informatieobject is een set gegevens die een beschrijving geeft van een object in de te beschrijven werkelijkheid (hierna werkelijkheid). [[NEN3610-2022]] biedt eigenschappen om van informatieobjecten uit te drukken wat de tijdlijnen geldigheid en registratie zijn. (<a href="#nen3610-registratiegegevens"></a>) 

<figure id="nen3610-registratiegegevens">
  <img src="media/nen3610-registratiegegevens.png" alt="nen3610-registratiegegevens">
  <figcaption>NEN 3610:2022 - Registratiegegevens</figcaption>
</figure>

`Tijdlijn Geldigheid` is opgenomen via de attributen `beginGeldigheid` en `eindGeldigheid`.<br>
`Tijdlijn Registratie` is opgenomen via de attributen `tijdstipRegistratie` en `eindRegistratie`.

De tijdlijn geldigheid beschrijft wanneer (de gegevens in) een informatieobject als waarheid beschouwd kunnen worden in de werkelijheid. Dit vormt dan ook de basis voor het kunnen tijdreizen langs de geldigheidstijdlijn.

Hoe deze tijdlijn per object wordt ingevuld is een functionele keuze die, op basis van het objecttype en het doel van het registreren van informatieobjecten voor dat objecttype, gemaakt moet worden. Zo kan het voor fysieke objecten voor de hand liggen om het begin van de levensduur (de begindatum geldigheid van het eerste voorkomen in de levensloop van een object) te laten aansluiten op het moment van het ontstaan van dit object in de werkelijkheid.

De tijdlijn registratie beschrijft wanneer (de gegevens in) een informatieobject opvraagbaar was. Dit zijn technisch tijdstippen die bepaald worden door de gegevensverstrekkende systemen.

#### Status van een informatieobject

Op het niveau van het informatieobject kunnen we ook uitdrukken wat hiervan de status is in de registratie. We onderscheiden hier twee statussen:
* `Actief` geeft aan dat een informatieobject daadwerkelijk meedoet in de registratie.
* `Afgevoerd` geeft aan dat een informatieobject niet meer actief is in de registratie. 

Een informatieobject wat actief is in de registratie kun je vinden op het de tijdlijn geldigheid. Een informatieobject wat niet meer actief is kun je alleen vinden langs de tijdlijn registratie.

Een voorbeeld van het afvoeren van een objecttype is wanneer er in de gegevens in een informatieobject een fout is gemaakt en dit technisch wordt hersteld.

#### Brongegevens van informatieobjecten

Onder bron- of herkomstmetadata verstaan we gegevens die beschrijven hoe een informatieobject tot stand is gekomen. Dit wordt ook wel data lineage, of audit trail genoemd.

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

We hebben dus een aanknopingspunt voor bron- en herkomstmetagegevens nodig dat wel te relateren is aan het beschreven object, maar niet als directe gegevens over het object wordt uitgedrukt. De nieuwe [[NEN3610-2022]] biedt uitkomst. Daarin is dit aanknopingspunt al geboden (<a href="#nen3610-registratiegegevens"></a>).

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

<aside class="note" title="Nieuwe afgeleide informatieobjecten">
   Het is ook mogelijk om, bij het in samenhang brengen van gegevens, nieuwe afgeleide informatieobjecten te ontsluiten. Hierbij is de bron niet zo direct aan te merken als bij informatieobjecten uit een bronregistratie. Het model hiervoor wordt nog uitgewerkt.
</aside> -->
