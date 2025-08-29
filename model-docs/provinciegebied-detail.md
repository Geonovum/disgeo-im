![Provinciegebied - detail](model-docs/media/provinciegebied-detail.png "Provinciegebied - detail")

Het Europese deel van Nederland bestaat uit 12 provincies. Zij vormen de bestuurslaag tussen de rijksoverheid en de Nederlandse gemeenten. De bestuurslaag duidt het informatiemodel aan met '**Provincie**'. Het gebied waarover de provincie het bestuur uitoefent heet het '**Provinciegebied**'.

Bij het modelleren zijn de volgende principes gehanteerd.

1. Het openbare lichaam 'provincie' voert het bestuur over één provinciegebied.
1. Een provincie heeft een provinciecode.
1. Het provinciegebied wordt aangeduid met een geometrie die bestaat uit één of meerdere vlakken.
1. Een provinciegebied wordt samengesteld uit (één of) meerdere gemeentegebieden.
1. Een provinciegebied ligt altijd in een/het rijksgebied.De geometrie van een provinciegebied valt dus volledig binnen het Rijksgebied.
1. De geometrieën van alle provinciegebieden sluiten naadloos op elkaar aan, zonder gaten en zonder overlap.
1. De geometrieën van alle provinciegebieden bedekken gezamenlijk het gehele oppervlak van het rijksgebied.
1. De relatie(s) tussen de openbare lichamen onderling vallen vooralsnog buiten de scope van dit model.
