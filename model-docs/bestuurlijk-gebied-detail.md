![Bestuurlijk gebied - detail](model-docs/media/bestuurlijk_gebied-detail.png "Bestuurlijk gebied - detail")

Bestuurlijke gebieden, ook wel bestuursgebieden genoemd, zijn registratieve ruimten die op basis van wet- of regelgeving als eenheid gelden van bestuurlijke verantwoordelijkheid.

Bij het modelleren van bestuurlijke gebieden zijn de volgende principes gehanteerd:

1. Een 'Bestuurlijk gebied' is een specialisatie van het NEN3610:2022-objecttype 'Registratieve Ruimte'.
1. Een 'Registratieve ruimte' heeft een eigenschap 'status' waarme de levenscyclus van het object en alle onderliggende objecten beschreven wordt.
1. Een 'Registratieve ruimte' is een subklasse van een NEN3610:2022-objecttype 'Geo-object'.
1. Een 'Geo-object' beschikt over de attributen 'identificatie' en 'domein', aan de hand waarvan alle subklassen geïdentificeerd kunnen worden.
1. Het objecttype 'Openbare lichaam' heeft in dit model geen superklasse.
1. Een 'Bestuurlijk gebied' bestaat uit de subklassen 'Bestuurlijk gebied op land' of 'Bestuurlijk gebied op zee'. Hiermee maakt het model onderscheid tussen bestuurlijke gebieden op land en op zee.
1. Een 'Bestuurlijk gebied' wordt altijd bestuurt door openbaar lichaam van hetzelfde type (bijv. 'Gemeente' bestuurt een 'Gemeentegebied').
