# Overzicht

## Naam en Acroniemen

IMSO - Informatiemodel Samenhangende Objecten

## Algemene beschrijving van het DiSGeo informatiemodel
Het informatiemodel Samenhangende Objecten zorgt ervoor dat alle gegevens die de geo-basisregistraties beschikbaar zijn, eenduidig interpreteerbaar zijn en in samenhang met elkaar kunnen worden bevraagd en gebruikt. 

## Beschrijving inhoud

Het conceptueel informatiemodel samenhangende objecten beschrijft hoe objecten uit verschillende geo-basisregistraties met elkaar samenhangen. Het gaat in elk geval om de: Basisregistratie Adressen en Gebouwen (BAG), Basisregistratie Grootschalige Topografie (BGT), Basisregistratie Topografie (BRT) en delen van de basisregistratie Waarde Onroerende Zaken (WOZ) en mogelijk ook delen van enkele andere registraties.

### Bestuurlijke gebieden
Er is een belangrijke relatie tussen een [regionaal openbaar lichaam](#informatiemodel_imsor_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam) en een [bestuurlijk gebied](#informatiemodel_imsor_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied). In de bestuurlijke indeling van het Koninkrijk der Nederlanden is een regionaal openbaar lichaam een overheid die bepaalde taken uitvoert binnen een bepaald _ruimtelijk_ gebied. De belangrijkste regionale openbare lichamen zijn het Rijk, de provincies, de gemeenten en de waterschappen, maar ook veiligheidsregio's behoren hiertoe. Een bestuurlijk gebied is dan dat bepaalde ruimtelijk gebied waarover een regionaal openbaar lichaam bestuur uitoefent.

#### Levenscyclus en tijdlijnen Bestuurlijk gebied

Bestuurlijk gebied is een van de specifiekere vormen van Registratieve ruimte. De levenscyclusstatussen van een Registratieve Ruimte bestaan uit:
* `Ontwerp` - Object waarvan de vaststelling wordt voorbereid
* `Niet gerealiseerd` - Object waarvan de voorbereiding niet heeft geleid tot vaststelling
* `Vastgesteld` - Object dat door het bevoegd gezag is benoemd of afgebakend op grond van wet- of regelgeving
* `Ingetrokken` - Object dat door het bevoegd gezag is ingetrokken op grond van wet- of regelgeving

In het algemeen kun je stellen dat objectlevenscycli in het [[EMSO]] op hoofdlijnen een levenscyclus kent van planfase naar aanwezigheidsfase, naar afwezigheidsfase.

Ook voor bestuurlijke gebieden worden deze 4 levenscyclusstatussen ondersteund. Het moet echter nog blijken of er behoefte is aan een planfase voor bestuurlijke gebieden. Een mogelijke toepassing zou kunnen zijn dat een herindelingsplan nog voor vaststelling zijn weerslag krijgt in de registratie, in de vorm van bestuurlijke gebieden met de status `Ontwerp`.

De status `Vastgesteld` is de status die aangeeft dat een bestuurlijk gebied bestaat in de werkelijkheid. Dit komt overeen met de aanwezigheidsfase.

De status `Ingetrokken` is de eindstatus van een bestuurlijk gebied. Dit komt overeen met de afwezigheidsfase.

De levenscyclus van een bestuurlijk gebied volgt de levencyclus is afhankelijk van het bestaan van het besturende regionaal openbaar lichaam.

#### Regionaal Openbaar Lichaam
Een regionaal openbaar lichaam is een overheidsorganisatie die bepaalde taken uitvoert binnen een bepaald _ruimtelijk_ gebied. De belangrijkste regionale openbare lichamen zijn het Rijk, de provincies, de gemeenten en de waterschappen, maar ook veiligheidsregio's behoren hiertoe.
Regionale openbare lichamen hebben met elkaar gemeen dat ze een bestuursgebied hebben — andere overheidsorganisaties hebben dat niet. [[TOOI-ONT-1.6.2]]

<!-- <aside class="example" title="Definiëren van Openbaar Lichaam">
   <p>In wetgeving wordt een <i>Openbaar lichaam</i> weliswaar niet gedefinieerd, maar het komt er wel in voor. Uit verschillende wetsartikelen valt af te leiden wat ermee bedoeld wordt (zie: voorbeeld). Uit <a href="https://wetten.overheid.nl/jci1.3:c:BWBR0004287&artikel=6&z=2022-05-01&g=2022-05-01">artikel 6 van de bekendmakingswet</a>, valt, in combinatie met de artikelen 1 en 2, af te leiden wat een <i>Openbaar lichaam</i> is:</p>

   <p><q><i>Algemeen verbindende voorschriften</i>, (...) <i>vastgesteld door een bestuursorgaan dat behoort tot een van de in artikel 2, eerste tot en met vierde lid, genoemde openbare lichamen, of de in artikel 2, vijfde lid, genoemde openbare lichamen,</i> (...), <i>worden bekendgemaakt door plaatsing in het door dat openbaar lichaam,</i> (...) <i>uitgegeven publicatieblad</i>."</q></p>

   <p>Verder zijn er naast de bekende openbare lichamen, ook minder bekende, zoals wanneer voor de heffing of de invordering van gemeentelijke belastingen een gemeenschappelijke regeling is getroffen en bij die regeling een openbaar lichaam is ingesteld. Dat betekent dat een aantal gemeenten samenwerken om de gemeentelijke belastingen binnen te halen en daarvoor een gezamenlijke organisatie hebben opgericht. Vooralsnog blijven deze typen openbare lichamen de bijbehorende bestuurlijke gebieden in het model buiten beschouwing. Bovendien is een gemeente, net als een provincie en een waterschap, ook nog een (publiekrechtelijke) rechtspersoon. Ook dit valt buiten beschouwing.</p>
</aside> -->

#### Bestuurlijk gebied
Een *bestuurlijk gebied*, ook wel bestuursgebied genoemd, is het grondgebied waarover het bestuursorgaan haar invloed uitoefent. Een bestuurlijk gebied is dus niet hetzelfde als het voor het gebied verantwoordelijke bestuur. Het _gebied_ en het _bestuur_ zijn weliswaar aan elkaar gerelateerd, maar hebben hun eigen unieke eigenschappen. Een bestuurlijk gebied heeft zelf geen naam, maar alleen een ruimtelijke aanduiding in de vorm van een geometrie. De naam waarmee men in het dagelijkse spraakgebruik het grondgebied associeert, is de formele naam van het gerelateerde openbare lichaam, bijvoorbeeld 'Apeldoorn' of 'Zeeland'.

#### Geometrie
Dit model legt de geometrie vast van een bestuurlijk gebied. Die geometrie komt voort uit een grensbeschrijving, die zelf geen onderdeel van dit model is. Verder heeft een bestuurlijk gebied in dit model <i>altijd</i> een geometrie, terwijl in werkelijkheid de geometrie van een bestuurlijke gebied uiterlijk twee maanden na een wijzigingsvoorstel beschikbaar is. Daardoor komt het voor dat een (nieuw) openbaar lichaam tijdelijk geen (concept) geometrie heeft. Maar, vanuit het geo-domein lijkt het vooralsnog weinig waarde te hebben om deze tijdelijke situatie vast te leggen. Daarom stelt het model dat een openbaar lichaam altijd een geometrie heeft. Dit betekent dat een openbaar lichaam en het gerelateerde bestuurlijke gebied gelijktijdig worden opgenomen.

#### Land en Zee
Elke instantie van een openbaar lichaam heeft in de regel één bestuurlijk gebied. Een uitzondering hierop is het openbare lichaam _Rijk_. Naast een bestuurlijk gebied op land (in dit model het _Rijksgebied_), bestuurt het Rijk ook vier gebieden op zee; zogenaamde maritieme zones. In totaal onderscheid dit model vijf typen bestuurlijke gebieden die onder de bestuurlijke verantwoordelijkheid van het Rijk vallen.

<aside class="example" title="Maritieme Zones">

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
