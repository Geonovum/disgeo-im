![Gemeentegebied - detail](data/media/gemeentegebied-detail.png "Gemeentegebied - detail")

Het Europese deel van Nederland is [opgedeeld in gemeenten](https://www.rijksoverheid.nl/onderwerpen/gemeenten/gemeentelijke-herindeling) . Het model onderscheidt het objecttype '**Gemeente**' als het regionaal openbaar lichaam dat het bestuur uitoefent over het bijbehorende '**Gemeentegebied**'.

Bij het modelleren zijn de volgende principes gehanteerd.

1. Een 'Gemeente' is een 'Regionaal openbaar lichaam'.
1. Een 'Gemeente' heeft één 'Gemeentegebied'.
1. Een 'Gemeentegebied' wordt aangeduid met een geometrie die bestaat uit één of meerdere vlakken.
1. De geometrieën van alle 'Gemeentegebieden' sluiten naadloos op elkaar aan, zonder gaten en zonder overlap.
1. Een 'Gemeentegebied' ligt altijd in één 'Provinciegebied'. De geometrie van een 'Gemeentegebied' valt dus volledig binnen een 'Provinciegebied'.
1. De geometrieën van alle 'Gemeentegebieden' die liggen in hetzelfde 'Provinciegebied', bedekken gezamenlijk het gehele oppervlak van dat 'Provinciegebied'.
1. Een 'Gemeentegebied' ligt altijd in één 'Veiligheidsregiogebied'.
