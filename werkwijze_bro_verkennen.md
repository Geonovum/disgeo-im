# Verkenning werkwijze BRO

Een uitwerking van het gesprek met Han Welmer over hoe bij de BRO logische modellen geautomatiseerd worden afgeleid uit conceptuele modellen. Het doel van het gesprek is om een beeld te krijgen in hoeverre deze aanpak eventueel geschikt is voor DiSGeo. Hieronder volgt een verslag van het gesprek.

## Aanleiding huidige geautomatiseerde aanpak BRO
Bij de BRO is in eerste instantie volledig handmatig gewerkt. Maar om twee belangrijke reden is ervoor gekozen om (delen van) dit proces te automatiseren:

1. Voor aantal belangrijke `...` aansluiten op standaarden (GML, XSD, Soap, NEN3610, etc.)
2. De BRO heeft te maken 26 registratie-objecten; het is dus geen éénmalige actie. Maar, ook als het een eenmalige actie zou zijn, kan _beheer_ een reden zijn om deze werkwijze wel toe te passen.

## Visie op relatie Conceptueel en Logisch model
Het **Conceptuele Model** bevat de gegevens die geregistreerd moeten worden en in het register aanwezig zijn. Het **Logische Model** richt zich op de uitwisseling van gegevens. Dat geldt zowel voor de inname als voor uitgifte van gegevens. Die inname en uitgifte van gegevens worden in eerste instantie buiten het model tekstueel beschreven in een **transactiemodel**. Het logische model bestaat dus feitelijk uit afgeleide gegevens van het conceptuele model, aangevuld met een technische implementatie van het transactiemodel voor in- en uitgifte van gegevens. Een belangrijk uitgangspunt bij het modelleren van het LM, dat de er zo min mogelijk wordt afgeweken van het conceptuele model.

## Praktische stappen van CM naar LM
...

## Relevantie voor DiSGeo
...

### Toevoegen of wijzigen van informatie in BRO
In de BRO moet zowel voor het indienen als wijzigen van informatie het hele document opnieuw ingediend worden. Daardoor zijn beide processen hetzelfde. Dat is een keuze, maar die heeft invloed op de transactie van gegevens.

### Taal
| Modeltype | Modeloutputtype | Taal |
| -- | -- |
| Conceptueel | ReSpec-documentatie | NL |
| Logisch | XSD's | EN |