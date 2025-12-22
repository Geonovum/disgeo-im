![Gemeentegebied - detail](data/media/gemeentegebied-detail.png "Gemeentegebied - detail")

Het Europese deel van Nederland is [opgedeeld in gemeenten](https://www.rijksoverheid.nl/onderwerpen/gemeenten/gemeentelijke-herindeling) . Het model onderscheidt het objecttype '**Gemeente**' als het regionaal openbaar lichaam dat het bestuur uitoefent over het bijbehorende '**Gemeentegebied**'.

Bij het modelleren zijn de volgende principes gehanteerd.

1. Het openbaar lichaam 'gemeente' voert het bestuur over één gemeentegebied.
1. Een gemeente heeft een gemeentecode.
1. Het gemeentegebied wordt aangeduid met een geometrie die bestaat uit één of meerdere vlakken.
1. De geometrieën van alle gemeentegebieden sluiten naadloos op elkaar aan, zonder gaten en zonder overlap.
1. Een gemeentegebied ligt altijd in één provinciegebied. De geometrie van een gemeentegebied valt dus volledig binnen een provinciegebied.
1. De geometrieën van alle gemeentegebieden die liggen in het dezelfde provinciegebied, bedekken gezamenlijk het gehele oppervlak van dat provinciegebied.
1. Een 'Gemeentegebied' ligt altijd in één 'Veiligheidsregiogebied'.
