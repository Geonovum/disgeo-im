# Release IMSO v1.0.0

## Scope van de release

In deze release wordt een eerste deel van het model van Bestuurlijke Gebieden opgeleverd.
Het gaat hierbij om de objecttypen:
* Gemeentegebied / Gemeente
* Provinciegebied / Provincie

Zie het [Scope document Bestuurlijke Gebieden](https://geonovum.github.io/disgeo-scope/bestuurlijkegebieden) voor meer informatie over de bredere scope van bestuurlijke gebieden.

In volgende releases zal meer van de beschreven scope ingevuld worden.

> **NOOT:** In het scope document wordt aangegeven dat er naast JSON-schema's ook een API beschrijving in OAS 3 formaat in lijn met de REST API Design Rules wordt opgeleverd. Hier is van afgezien, omdat dit bij de implementatie thuishoort.

## Opgeleverde producten

* [Complete begrippenkader DiS Geo (MIM niveau 1)](https://begrippen.geostandaarden.nl/disgeo/nl/)

  Dit begrippenkader bevat de begrippen m.b.t. bestuurlijke gebieden en breder.
* [Conceptueel informatiemodel IMSO (MIM niveau 2)](./model/conceptueel-model/)

  Het conceptueel informatiemodel IMSO definieert de betekenis van de gegevens in Logische gegevensmodellen. Het huidige conceptueel informatiemodel bevat al een bredere dekking van bestuurlijke gebieden dan de scope van deze oplevering.
* [Logisch gegevensmodel IMSO (MIM niveau 3)](./model/logisch-model/)

  Het logisch gegevensmodel definieert de gegevensstructuren voor het uitdrukken en uitwisselen van gegevens. Dit model volgt [de beschreven release-scope](#scope-van-de-release).
* [JSON-schema (MIM niveau 4)](./json-schema/)

  Het JSON-schema is afgeleid van het logisch gegevensmodel. Het JSON-schema kan gebruikt worden voor validatie van JSON-gebaseerde uitwisselingen en kan als bouwsteen worden gebruikt voor een API beschrijving in OAS 3 formaat in lijn met de REST API Design Rules.
* [Ontologie (MIM niveau 2,3,4)](./ontologie/)

  De ontologie (en SHACL shapes) kunnen worden gebruikt als model voor linked data uitwisselingen. De ontologie is afgeleid uit het Conceptueel model. Deze heeft dan ook al een bredere dekking dan [de beschreven release-scope](#scope-van-de-release).

## Andere relevante producten

* [Modelleerprincipes DiS Geo](https://geonovum.github.io/disgeo-imsor/modelleerprincipes)

  De modelleerprincipes die gehanteerd zijn bij het opstellen van de modellen. Het doel van de principes is om samenhangend gebruik van gegevens te bevorderen.

