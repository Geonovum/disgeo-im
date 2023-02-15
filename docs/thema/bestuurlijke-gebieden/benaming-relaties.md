
## Ruimtelijke en administratieve relaties en compliance met NEN3610

Het gaat hierbij om afwegingen bij het kiezen van een naam voor de relatie tussen gemeentegebied en provinciegebied.  Internationaal is de gestandaardiseerde naam ‘within’. In NEN3610 is dit vertaald naar ‘binnen’. In ons team bestaat de vraag of ‘ligtIn’ niet een betere naam is. Wat zijn onze opties hierbij?

De NEN3610 spreekt van administratieve relaties en ruimtelijke relaties. De vertaling ‘binnen’ betreft een ruimtelijke relatie. Wel is het belangrijk om te beseffen dat de ‘ruimtelijke relatie’ zoals beschreven in de NEN3610 eigenlijk een visuele representatie is van een constraint. Deze hoort dus eigenlijk niet thuis in het informatiemodel.

Het is aan ons de vraag of we een constraint willen toepassen:

-> Zo ja, dan moeten we een nen3610:ruimtelijke relatie EN een nen3610:administratieve relatie gebruiken. 

-> Zo niet, dan hebben we alleen een nen3610:administratieve relatie nodig. 

Het gaat dan om een administratieve vastlegging van een ruimtelijke relatie die vanuit de OGC wordt gedefinieerd. Hiervoor kunnen we:

-> De nen3610 benaming ‘binnen’ gebruiken (waarbij we het begrip nen3610:binnen opnemen als mim:begrip). 

-> Onze eigen benaming (‘ligtIn’) gebruiken met een verwijzing naar de OGC term ‘within’. Dan hebben we echter geen link met de nen3610 – dat moet dan als een afgeleid gegeven worden gemodelleerd, omdat het anders niet mogelijk is vanuit de MIM.

Observaties: 

- De term ‘binnen’ is niet het meest geschikt om te gebruiken voor de relatie in ons model – het is echter wel hoe de NEN3610 de ruimtelijke relatie ‘within’ heeft vertaald. Als wij uitwijken is het lastiger om aan te sluiten op de NEN3610, dus als we deze OGC relatie willen toepassen gebruiken we ‘binnen’. 

- We kunnen het nen3610 begrip ‘binnen’ (zoals het nu staat in het begrippenkader) opnemen als mim:begrip bij het creëren van de administratieve/ruimtelijke relaties tussen de registratieve gebieden. 
