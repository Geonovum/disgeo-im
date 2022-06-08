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

<aside class="issue">
TODO: 

Bibliografische referenties naar MIM, Raamwerk van geo-standaarden en NEN3610 moeten nog in `localBiblio` worden opgenomen.

Aanvullen met oa Modelleerprincipes, EMSO. 
</aside>

## Beschrijving

<aside class="issue">Algeme domeinoverstijgende beschrijving van het IMDiSGeo schrijven</aside>

### Bestuurlijke gebieden
Er is een belangrijke relatie tussen een [openbaar lichaam](https://geonovum.github.io/disgeo-im/#global_class_BestuurlijkeGebieden_OpenbaarLichaam) en een [bestuurlijk gebied](https://geonovum.github.io/disgeo-im/#global_class_BestuurlijkeGebieden_BestuurlijkGebied). In de bestuurlijke indeling van het Koninkrijk der Nederlanden is een openbaar lichaam een overheid die bepaalde taken uitvoert binnen een bepaald _ruimtelijk_ gebied óf op een bepaald _inhoudelijk_ gebied ([[Wikipedia]]). De belangrijkste openbare lichamen zijn het Rijk, de provincies, de gemeenten en de waterschappen, maar ook veiligheidsregio's behoren hiertoe.

De verzameling van alle openbare lichamen van hetzelfde type, bijvoorbeeld: gemeenten, provincies, waterschappen of ministeries, heet een 'bestuurslaag'. Wanneer er gesproken wordt over een deel van een openbaar lichaam, bijvoorbeeld: de gemeenteraad, het college van burgemeester en wethouders en de burgemeester, is de term 'bestuursorgaan' van toepassing. Beide termen spelen in het informatiemodel geen directe rol, maar zijn wel belangrijk voor de afbakening van 'openbaar lichaam'. Het openbaar lichaam is een bruikbare term voor het benoemen van de gemeente als _volledige bestuurlijke organisatie_.

Het grondgebied waarover het bestuursorgaan haar invloed uitoefent heet het *bestuurlijk gebied*. Een bestuurlijk gebied is dus niet hetzelfde als het voor het gebied verantwoordelijke bestuur. Het _gebied_ en het _bestuur_ zijn weliswaar aan elkaar gerelateerd, maar hebben hun eigen unieke eigenschappen. Een bestuurlijk gebied heeft zelf geen naam, maar alleen een ruimtelijke aanduiding in de vorm van een geometrie. De naam waarmee men in het dagelijkse spraakgebruik het grondgebied associeert, is de formele naam van het gerelateerde openbare lichaam, bijvoorbeeld 'Apeldoorn' of 'Zeeland'.

Het model maakt dit verschil zichtbaar; het onderscheidt bestuurlijke gebieden apart van openbare lichamen. Dit onderscheid werkt door bij alle overheden: Rijk, provincies, gemeenten, waterschappen en veiligheidsregio's. Dat het model dit onderscheid maakt, wil niet zeggen dat openbare lichamen vanzelfsprekend onderdeel zijn van het uiteindelijke model. Het informatiemodel brengt dit onderscheid in de eerste plaats voor het voetlicht. Of, en zo ja, op welke manier openbare lichamen in het model belanden, is onderdeel van discussie.

<aside class="example">
In wetgeving komt de wordt een openbaar lichaam weliswaar niet gedefinieerd, maar het komt er wel in voor. Uit verschillende wetsartikelen valt af te leiden wat ermee bedoeld wordt (zie: voorbeeld).

Uit <strong>artikel 6</strong> in combinatie met de artikelen 1 en 2 van de <strong>Bekendmakingswet</strong>, valt af te leiden wat een openbaar lichaam is:

"<i>Algemeen verbindende voorschriften</i>, (...) <i>vastgesteld door een bestuursorgaan dat behoort tot een van de in artikel 2, eerste tot en met vierde lid, genoemde openbare lichamen, of de in artikel 2, vijfde lid, genoemde openbare lichamen,</i> (...), <i>worden bekendgemaakt door plaatsing in het door dat openbaar lichaam,</i> (...) <i>uitgegeven publicatieblad</i>."

Verder zijn er naast de bekende openbare lichamen, ook minder bekende, zoals wanneer voor de heffing of de invordering van gemeentelijke belastingen een gemeenschappelijke regeling is getroffen en bij die regeling een openbaar lichaam is ingesteld. Dat betekent dat een aantal gemeenten samenwerken om de gemeentelijke belastingen binnen te halen en daarvoor een gezamenlijke organisatie hebben opgericht. Bovendien is een gemeente, net als een provincie en een waterschap, ook nog een (publiekrechtelijke) rechtspersoon. Het informatie blijven in het model buiten beschouwing.
</aside>

<aside class="issue">Alinea opnemen over <strong><i>Bestuurlijke gebieden op zee</i></strong> (Maritieme Zones). Het <i>Rijk</i> vervuld een bijzondere positie, vergelijken bij de andere <i>openbare lichamen</i>. Waar elk ander <i>openbaar lichaam</i> slechts één <i>bestuurlijke gebied</i> bestuurt, voert het <i>Rijk</i> het bestuur over vijf gebieden: één op land en vier op zee.</aside>