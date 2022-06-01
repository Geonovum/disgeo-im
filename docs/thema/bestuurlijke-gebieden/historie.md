## Historie van bestuurlijke gebieden


### Identiteit en levenscyclus

Wat bepaalt de identiteit en levenscyclus van een bestuurlijk gebied?

Is dat:
* de geometrie van het gebied?
  * Dus een nieuwe identiteit bij elke verandering in geometrie?
  * Dus een nieuwe identiteit bij het bij herindeling opnemen van een ander bestuurlijk gebied?
* de relatie met het openbaar lichaam die het bestuurt?

Om de impact van de keuze op een registratie aan te tonen werken we dit uit in de vorm van een casus:

De Gemeente Kemeltoet (`GM1234`) ontstaat op `2020-01-01` en bestuurt op dat moment het gebied met geometrie `POLYGON((1 2,3 4))`.

Op
`2020-06-01` verandert de geometrie van het gebied naar `POLYGON((1 2,3 5))` door een reguliere grenswijziging.

`2021-01-01` verandert de geometrie van het gebied naar `POLYGON((1 2,3 6))` door het opnemen van een ander gemeentegebied bij gemeentelijke herindeling

`2022-01-01` verandert de geometrie van het gebied naar `POLYGON((1 2,3 7))` door een reguliere grenswijziging.

`2022-12-31` gaat de gemeente op in een andere gemeente.

Voor deze casus werken we de registratie uit aan de hand van een identiteitsverandering gekoppeld aan de geometrie van het gebied, vs een verandering aan de hand van de bestuursrelatie.

**Identiteit gekoppeld aan geometrie**

Gemeente `GM1234`:

| code   | formele naam | bestuurt | reg.beginGeldigheid | reg.eindGeldigheid |
|--------|--------------|----------|---------------------|--------------------|
| GM1234 | Kemeltoet    | GMBG1    | 2020-01-01          | 2020-05-31         |
| GM1234 | Kemeltoet    | GMBG2    | 2020-06-01          | 2020-12-31         |
| GM1234 | Kemeltoet    | GMBG3    | 2021-01-01          | 2021-12-31         |
| GM1234 | Kemeltoet    | GMBG4    | 2022-01-01          | 2022-12-31         |

Gemeentegebied `GMGB1`:

| identificatie | geometrie           | reg.beginGeldigheid | reg.eindGeldigheid |
|---------------|---------------------|---------------------|--------------------|
| GMGB1         | POLYGON(( 1 2,3 4))  | 2020-01-01          | 2020-05-31         |

Gemeentegebied `GMGB2`:

| identificatie | geometrie           | reg.beginGeldigheid | reg.eindGeldigheid |
|---------------|---------------------|---------------------|--------------------|
| GMGB2         | POLYGON(( 1 2,3 5))  | 2020-06-01          | 2020-12-31         |

Gemeentegebied `GMGB3`:

| identificatie | geometrie           | reg.beginGeldigheid | reg.eindGeldigheid |
|---------------|---------------------|---------------------|--------------------|
| GMGB3         | POLYGON(( 1 2,3 6))  | 2021-01-01          | 2021-12-31         |

Gemeentegebied `GMGB4`:

| identificatie | geometrie           | reg.beginGeldigheid | reg.eindGeldigheid |
|---------------|---------------------|---------------------|--------------------|
| GMGB4         | POLYGON(( 1 2,3 7))  | 2022-01-01          | 2022-12-31         |

**Identiteit gekoppeld aan bestuursrelatie**

Gemeente `GM1234`:

| code   | formele naam | bestuurt | reg.beginGeldigheid | reg.eindGeldigheid |
|--------|--------------|----------|---------------------|--------------------|
| GM1234 | Kemeltoet    | GMBG1    | 2020-01-01          | 2022-12-31         |

Gemeentegebied `GMGB1`:

| identificatie | geometrie           | reg.beginGeldigheid | reg.eindGeldigheid |
|---------------|---------------------|---------------------|--------------------|
| GMGB1         | POLYGON(( 1 2,3 4))  | 2020-01-01          | 2020-05-31         |
| GMGB1         | POLYGON(( 1 2,3 5))  | 2020-06-01          | 2020-12-31         |
| GMGB1         | POLYGON(( 1 2,3 6))  | 2021-01-01          | 2021-12-31         |
| GMGB1         | POLYGON(( 1 2,3 7))  | 2022-01-01          | 2022-12-31         |

Met het uitwerken van de casus wordt duidelijk dat identiteit gekoppeld aan geometrie voor veel meer administratieve last zorgt, omdat bij elke wijziging van geometrie, het gebied van identieit zou veranderen, en daarmee ook de relatie met het openbaar lichaam verandert, waardoor het informatieobject over het openbaarlichaam ook zou veranderen. Daarnaast levert het geen extra functionele voordelen.

Daarmee ligt het voor de hand om de geldigheidslijn te koppelen aan de levencyclus van het openbaar lichaam. 

##  Geldigheid bestuurlijk gebied

Gezien de koppeling van de levenscyclus van het bestuurlijk gebied aan die van het besturende openbaar lichaam, wordt ook de tijdlijn geldigheid overgenomen.
Het moet straks mogelijk zijn om te kunnen tijdreizen naar hoe een bepaald bestuurlijk gebied er in de werkelijkheid uit zag.

Dat wil zeggen dat de eerste beginGeldigheid van het informatieobject van een bestuurlijk gebied start op de ingangsdatum van het besturende openbaar lichaam en dat bij opheffen van het openbaar lichaam de eindgeldigheid van het laatst geldige informatieobject de waarde van de opheffingsdatum van het openbaar lichaam toegewezen krijgt.
