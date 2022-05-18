# Overzicht

## Naam en Acroniemen

IMDiSGeo - Dataspecificatie voor Doorontwikkeling in Samenhang van de Geobasisregistraties (DiSGeo)

## Algemene beschrijving van het DiSGeo informatiemodel
Het informatiemodel Samenhangende Objectenregistratie  zorgt ervoor dat alle gegevens die de geo-basisregistraties beschikbaar zijn eenduidig interpreteerbaar zijn en in samenhang met elkaar kunnen worden gebruikt. 

<aside class="issue">Deze omschrijving graag verder aanvullen. Het doel is om de basisregistraties in samenhang te kunnen bevragen.</aside>

## Bestuurlijke gebieden
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

### Waterschappen
Net als de Rijksoverheid, de provincies en de gemeenten, is een waterschap een overheidsorganisatie. Het zorgt voor het waterbeheer in een bepaald gebied. Tot haar taken behoren het beschermen tegen overstromingen, het zorgen voor schoon water in sloten, rivieren, meren en beken én het beheren van de hoeveelheid water. De verzameling van bestuursorganen van een waterschap, wordne in dit model aangeduid met het openbare lichaam 'Waterschap'. Het grondgebied waarover het waterschap haar bestuur uitoefent, heet in het model het 'Waterschapsgebied' ([[Waterschap-1]], [[Waterschap-2]]).

Naast dit bestuurlijke grondgebied, bestaan er nog ...

### Veiligheidsregio's

<aside class="note">'<i>Nederland is verdeeld in 25 veiligheidsregio’s. Iedere veiligheidsregio zet zich in voor de veiligheid van de inwoners en bezoekers van dat gebied. Zo zorgt de veiligheidsregio ervoor dat er een brandweer is. Ook maakt de veiligheidsregio afspraken over de aanpak van rampen en crises.  Een goede samenwerking tussen hulpverleningsdiensten, overheden, bedrijven en burgers is daarbij belangrijk.</i>'</aside>

## Normatieve referenties

De volgende documenten zijn gehanteerd bij de totstandkoming van dit document:

 - [Metamodel Informatie Modellering 1.1.1](https://docs.geostandaarden.nl/mim/mim/)
 - [Raamwerk van geo-standaarden 3.0](https://www.geonovum.nl/uploads/documents/Raamwerk%20Geo-Standaarden%20v3.0.pdf)
 - ~~[NEN 3610:2011/A1:2016 Basismodel Geo-informatie](https://geonovum.github.io/bmgi/docs/#dataproductspecificatie-nl)~~
 - [ISO-19107-2003: Geographic information – Spatial schema](url)

