# Notitie verkenning demo-omgeving
Overleg 29 maart 2023

Het informatiemodel DiSGeo gaat niet alleen over Bestuurlijke Gebieden, maar voor EMSO; samenhangende objecten. Dit overstijgt allerlei geo-basisregistraties. Met DiSGeo werken we toe naar een model dat verwarring bij (eind)gebruikers reduceert. Dick toont als voorbeeld www.waarnemingen.nl.

## 1 Gebruikers(groep) definiëren
 - Heel duidelijk de gebruiker definiëren:
    1. Eindgebruiker (prioriteit)
    1. Software-ontwikkelaar
    1. Inwinner
    1. Bronhouder
 - Wellicht een paar groepen defineeren.
 - Dat vereist misschien meerdere type demo-omgevingen.
 - Bedienen we de technische experts niet al gewoon met huidige documentatie? 

## 2 Voor- en nadelen thema bestuurlijke gebieden
 - Bestuurlijke gebieden is niche-use case.
 - Er is op dit moment geen authentieke bron (bijv. basisregistratie) voor bestuurlijke gebieden.
 - Mensen werken al met deze data dus _what's new_?
 - Het is nu nog een klein onderwerp en bovendien nog niet thema-overstijgend, waardoor samenhang nog meer heel beperkt aantoonbaar is.
 - Het is wel een _enabler_ voor overheidskant en allerlei andere diensten.

## 3 Meerwaarde van informatiemodel DiSGeo
 - Objectgeorienteerd i.p.v. kaart(laag)georiënteerd.
 - Je wilt niet afhankelijk zijn van GIS-expert of de geometrie voor een antwoord; geometrie is een _stukje van_, maar niet noodzakelijk de _sleutel tot_ informatie.
 - Niet alleen topologische, maar juist ook administratieve relaties.
 - Objecten die aan elkaar gerelateerd zijn.
 - Verschillende zoekingangen.
 - En geo is 'slechts' één van de kenmerken van een object.
 - Er zijn administratieve relaties.
 - Je kunt tijdreizen.
 - Er is een link naar openbaar lichaam, waarmee een link naar relevante wetten.
 - Variabele scope van de context (`BestuurlijkGebied`, of `BestuurlijkGebiedOpLand`, of `Gemeentegebied`); een kaartlaag is beperkt de scope tot één objecttype (bijv. `Gemeentegebied`).
 - In een kaartlaag zijn eigenschappen van objecten vaak platgeslagen (bijv. het _openbaar lichaam_ `Gemeente` en het _bestuurlijk gebied_ `Gemeentegebied` zijn vaak één en hetzelfde object, waarmee hun eigenschappen op één hoop belanden). 

## 4 Aantonen beperkingen huidige mogelijkheden
Het idee ontstaat dat we misschien eerst de beperkingen van kaartlaagdenken moeten laten zien en daar dan tegenover zetten wat je met IMDisGeo kunt. In analogie van het voorbeeld www.waarnemeingen.nl waarbij mogelijk een API is voor Waarnemingen, voor foto's, voor geluiden-, etc. kun je dat bij allerlei onderdelen van DiSGeo ook voorstellen. Je moet nu als eindgebruiker nog allerlei (per vraag uitéenlopende) handelingen uitvoeren om informatie boven tafel te krijgen. Deze afstand willen we verkleinen, vereenvoudigen en uniformeren met IMDiSGeo.

## 5 Voorbeelden bestaande informatiebronnen
Voorbeelden van bestaande informatiebronnen uitwerken. Hierbij aangeven welke vragen je hiermee wel en niet kunt beantwoorden. Tevens is het waardevol om daarbij ook iets te zeggen over de stappen die nodig zijn om een vraag te beantwoorden.
 1. QGIS: geometrische aanpak.
 1. Wikipedia: 'administratieve' aanpak. 
 1. Bestuurlijke gebieden-api: combi geometrisch en administratief.
Het is nog niet volledig scherp hoe een demo-omgeving voor DiSGeo er dan uit moet zien en wat het precies moet kunnen. Het idee is om via deze 'tegenvoorbeelden' in eerste instantie de meerwaarde van het informatiemodel scherp in het vizier te krijgen. Van daaruit kunnen we verder nadenken over de eisen die dat stelt aan de demo-omgeving.

## 6 Acties
 - Uitwerken voorbeelden bestaande informatiebronnen (issue opnemen op backlog).
 - Scope beperken tot bestuurlijke gebieden.
 - Wat is het meest geschikte presentatiemiddel voor ons doeleinde?