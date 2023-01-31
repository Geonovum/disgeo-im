# Verkenning werkwijze BRO

Een uitwerking van het gesprek met Han Welmer over hoe bij de BRO logische modellen geautomatiseerd worden afgeleid uit conceptuele modellen. Het doel van het gesprek is om een beeld te krijgen in hoeverre deze aanpak eventueel geschikt is voor DiSGeo. Hieronder volgt een verslag van het gesprek.

## Aanleiding huidige geautomatiseerde aanpak BRO
Bij de BRO is in eerste instantie volledig handmatig gewerkt. Maar om twee belangrijke reden is ervoor gekozen om (delen van) dit proces te automatiseren:

1. Voor aantal belangrijke `...` aansluiten op standaarden (GML, XSD, Soap, NEN3610, etc.)
2. De BRO heeft te maken 26 registratie-objecten; het is dus geen éénmalige actie. Maar, ook als het een eenmalige actie zou zijn, kan _beheer_ een reden zijn om deze werkwijze wel toe te passen.

## Visie op relatie Conceptueel en Logisch model
Het **Conceptuele Model** bevat de gegevens die geregistreerd moeten worden en in het register aanwezig zijn. Het **Logische Model** richt zich op de uitwisseling van gegevens. Dat geldt zowel voor de inname als voor uitgifte van gegevens. Die inname en uitgifte van gegevens worden in eerste instantie buiten het model tekstueel beschreven in een **transactiemodel** (input voor LM). Het logische model bestaat dus feitelijk uit afgeleide gegevens van het conceptuele model, aangevuld met een technische implementatie van het transactiemodel voor in- en uitgifte van gegevens. Een belangrijk uitgangspunt bij het modelleren van het LM, dat de er zo min mogelijk wordt afgeweken van het conceptuele model.

## Van Conceptueel Model naar Logisch Model
Om van een conceptueel model naar een logisch model te komen, zijn de volgende stappen nodig: 

1. Een **kopie** maken van het conceptuele model
2. **Trace** aanpassen; van welke conceptuele modelelementen zijn de logische modelelementen zijn afgeleid?
3. **Vertaalslag** van Nederlandstalige elementen (zoals: _stereotypen_ en _tagged values_) naar Engelstalige elementen.
4. Hiervoor is meer nodig dan enkel een vertaling, omdat de set van elementen van een conceptueel model niet exact gelijk is aan die van een logisch model. Er zullen dus ook elementen verwijderd of toegevoegd. Er zijn **aparte profielen** voor ****CM**** ([MIM-BRO Grouping NL](http://www.armatiek.nl/Imvertor/wiki/Imvertor-EA-profiles/MIM-BRO%20Grouping%20(NL)%200.9.3.ea-profile.xml)) en **LM** [(NEN3610-BRO Grouping EN)](http://www.armatiek.nl/imvertor/wiki/Imvertor-EA-profiles/NEN3610-BRO%20Grouping%20(EN)%200.9.1.ea-profile.xml).

Dit is een tijdrovend en arbeidsintensief proces met veel herhalende stappen. Daarom is voor de BRO een script geschreven dat deze stappen geautomatiseerd uitvoert: `Set Tracebility for Set Transformations`.

### Van CM naar LM in Enterprise Architect
De BRO onderscheid de volgende package structuur in Enter:

| Niveau | Naam in CM | Naam in LM |
| -- | -- | -- |
| 0 | `«Project»` | `«Project»` |
| 1 | `«Basismodel»` | `«Basemodel»` |
| 2 | `«Domein»` | `«Domain»` |

Het `«Domein»` bevat het conceptuele model. Het logische model bevindt zich in het engelstalige equivalent `«Domain»` in een apart project.

Voor de kopie wordt een XMI-export van het conceptuele model gemaakt.
De traces worden automatisch gelegd op basis van naamgeving en prifielen
MIM heeft de velden Naam en Alternatieve naam. 
De Bro heeft ervoor gekozen om in het Conceptuele model bij Naam de Nederlandse naam op te nemen en bij Alternatieve naam, de engelse naam.

De vertaling van de stereotypes en tagged values gebeurd op basis van de eerder genoemde profielen. Zo wordt bijvoorbeeld een `«Objecttype»` vertaald naar een `«FeatureType»`. Die links zijn in de profielen gelegd. Hiervoor is een mapping van beide profielen noodzakelijk. Elk stereotype in hetprofiel van het conceptuele model, moet dus een mapping hebben naar een stereotype in het profiel van het logische model. Verder heb je voor het logische model nog specifieke XSD-stereotypes, bijvoorbeeld `XML schema location` op `«Package»`. 

### Script aanroepen
Je kiest een locatie in de project browser waar je het logische model wilt opnemen. Dan kies je Specialize > Set Tracebility for Set Transformations > Please select original package. Er komt een nieuw venster. Dan start het script. Dat maakt nu eerst een full duplication van het conceptuele model. Daarna worden de traces gelegd. Als dat klaar is moet het transactiemodel nog handmatig gemodelleerd worden. Op basis daarvan worden vervolgens XSD's gegenereerd. Die voor de BRO-doeleinden dan op een aantal punten nog handmatig aangepast moeten worden.


## Relevantie voor DiSGeo

De profielen zouden we _as is_ kunnen gebruiken, maar waarschijnlijk is het wenselijk om hiervoor een DiSGeo-variant te maken. 
Equivalente MIM-packagestructuur.
Taalkeuze
Vertaalde MIM-packagestructuur


### Toevoegen of wijzigen van informatie in BRO
In de BRO moet zowel voor het indienen als wijzigen van informatie het hele document opnieuw ingediend worden. Daardoor zijn beide processen hetzelfde. Dat is een keuze, maar die heeft invloed op de transactie van gegevens.

### Taal
| Modeltype | Product | Genereren met | Taal |
| -- | -- | -- | -- |
| Conceptueel | Gegevenscatalogus (ReSpec) |Imvertor |  NL |
| Logisch | XSD's | Imvertor | EN |