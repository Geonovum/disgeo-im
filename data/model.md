# Informatiemodel Informatiemodel Samenhangende Objecten - Bestuurlijke gebieden
## Domein Bestuurlijk gebied

![Bestuurlijk gebied](data/media/bestuurlijk_gebied.png "Domein Bestuurlijk gebied")

<div data-include-format="markdown" data-include="data/model-overzicht.md"></div>

### Objecttypen

#### RegistratieveRuimte {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_registratieve_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#RegistratieveRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>RegistratieveRuimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Op basis van wet- of regelgeving afgebakende ruimte die als eenheid geldt van politiek-bestuurlijke verantwoordelijkheid of voor bedrijfsvoering.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>NEN 3610:2022 nl</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit objecttype is gelijk aan het objecttype Registratieve ruimte uit NEN 3610, maar is opgenomen als specialisatie daarvan omdat er specifieke kenmerken voor zijn gedefinieerd.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/registratieve_ruimte ">http://begrippen.geostandaarden.nl/disgeo/id/begrip/registratieve_ruimte </a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-23</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_registratieve_ruimte">RegistratieveRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-23</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_registratieve_ruimte_attribuutsoort_status">status</a>
</td>
<td>
Fase van de levenscyclus waarin een bestuurlijk gebied zich bevindt.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_enumeratie_status_registratieve_ruimte">StatusRegistratieveRuimte</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_registratieve_ruimte_attribuutsoort_status">
<h6>status</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#status</td>
</tr>
<tr>
<th>Naam</th>
<td>status</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fase van de levenscyclus waarin een bestuurlijk gebied zich bevindt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-22</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


#### BestuurlijkGebied {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied}

<div data-include-format="markdown" data-include="data/bestuurlijk-gebied-detail.md"></div>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#BestuurlijkGebied</td>
</tr>
<tr>
<th>Naam</th>
<td>BestuurlijkGebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een bestuurlijk gebied is een registratieve ruimte die op basis van wet- of regelgeving als eenheid geldt van bestuurlijke verantwoordelijkheid.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit betreft bijvoorbeeld de gebieden behorende bij de vier formele bestuurslagen uit de Grondwet (Rijk, provincie, waterschap, gemeente), maar kan ook gebieden van bestuurlijke samenwerkingsverbanden met eigen politiek/bestuurlijke verantwoordelijkheid omvatten. Een voorbeeld daarvan betreft de veiligheidsregio’s.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/bestuurlijk_gebied">http://begrippen.geostandaarden.nl/disgeo/id/begrip/bestuurlijk_gebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-23</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_registratieve_ruimte">RegistratieveRuimte</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-23</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_attribuutsoort_naam">naam</a>
</td>
<td>
Naam van een object.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_attribuutsoort_geometrie">geometrie</a>
</td>
<td>
Geometrische representatie van een gebied op land dat door een openbaar lichaam wordt bestuurd.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_keuze_datatype__vlak_of_multivlak">VlakOfMultivlak</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_attribuutsoort_type">type</a>
</td>
<td>
Categorie waartoe het betreffende bestuurlijke gebied behoort.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_enumeratie_type_bestuurlijk_gebied">TypeBestuurlijkGebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_relatiesoort_is_gebied_van">isGebiedVan</a>
</td>
<td>
Relatie die aangeeft dat het gebied bestuurd wordt door de bestuurder.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam">RegionaalOpenbaarLichaam</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_relatiesoort_ligt_in_bestuurlijk_gebied">ligtInBestuurlijkGebied</a>
</td>
<td>
De geometrische afbakening van het bevattendGebied, waarbinnen de geometrie van het bevatteGebied, zich moet bevinden, en/of mee moet samenvallen.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#naam</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Naam van een object.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Breed geaccepteerde benaming van een gebied zoals deze is toegekend of zoals deze in de volksmond bekend staat.</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-10-15</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_attribuutsoort_geometrie">
<h6>geometrie</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#geometrie</td>
</tr>
<tr>
<th>Naam</th>
<td>geometrie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geometrische representatie van een gebied op land dat door een openbaar lichaam wordt bestuurd.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-05-31</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorie waartoe het betreffende bestuurlijke gebied behoort.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-08-17</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_relatiesoort_is_gebied_van">
<h6>isGebiedVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#isGebiedVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isGebiedVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is gebied van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat het gebied bestuurd wordt door de bestuurder.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied_relatiesoort_ligt_in_bestuurlijk_gebied">
<h6>ligtInBestuurlijkGebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#BestuurlijkGebied.ligtInBestuurlijkGebied</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtInBestuurlijkGebied</td>
</tr>
<tr>
<th>Alias</th>
<td>ligtIn bestuurlijk gebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De geometrische afbakening van het bevattendGebied, waarbinnen de geometrie van het bevatteGebied, zich moet bevinden, en/of mee moet samenvallen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit kan worden afgeleid op basis van de relaties:

- ligtInRijksgebied
- ligtInProvinciegebied
- ligtInVeiligheidsregiogebied</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-08-19</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>0..*</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### Gemeentegebied {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied}

<div data-include-format="markdown" data-include="data/gemeentegebied-detail.md"></div>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#Gemeentegebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Gemeentegebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bij wet afgebakend gedeelte van het grondgebied van Nederland, onder zeggenschap van een gemeente met diverse bestuurlijke taken, ingesteld op basis van artikel 123 en 124 van de Grondwet, artikel 2:1 Burgerlijk Wetboek en artikel 3 van de Wet algemene regels herindeling.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Grondwet en Gemeentewet</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het gaat bij dit begrip nadrukkelijk om het grondgebied en niet om de juridische entiteit (bevoegd gezag). Een gemeente valt altijd volledig binnen een provincie. De geometrie van alle gemeenten in een provincie moeten de provincie volledig bedekken. Provincies mogen niet overlappen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/gemeentegebied">http://begrippen.geostandaarden.nl/disgeo/id/begrip/gemeentegebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-23</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied">Gemeentegebied</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-12-29</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied_relatiesoort_ligt_in_provinciegebied">ligtInProvinciegebied</a>
</td>
<td>
De geometrische afbakening van het provinciegebied waarbinnen de geometrie van het gemeentegebied zich moet bevinden, en/of mee moet samenvallen.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied">Provinciegebied</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied_relatiesoort_ligt_in_veiligheidsregiogebied">ligtInVeiligheidsregiogebied</a>
</td>
<td>
De geometrische afbakening van het veiligheidsregiogebied waarbinnen de geometrie van het gemeentegebied zich moet bevinden, en/of mee moet samenvallen.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_veiligheidsregiogebied">Veiligheidsregiogebied</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied_relatiesoort_is_gemeentegebied_van">isGemeentegebiedVan</a>
</td>
<td>
Relatie die aangeeft dat dit object een gemeentegebied van een regionaal openbaar lichaam is.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_gemeente">Gemeente</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied_relatiesoort_ligt_in_provinciegebied">
<h6>ligtInProvinciegebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#ligtInProvinciegebied</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtInProvinciegebied</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in provinciegebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De geometrische afbakening van het provinciegebied waarbinnen de geometrie van het gemeentegebied zich moet bevinden, en/of mee moet samenvallen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-29</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied">Gemeentegebied</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied_relatiesoort_ligt_in_veiligheidsregiogebied">
<h6>ligtInVeiligheidsregiogebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#ligtInVeiligheidsregiogebied</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtInVeiligheidsregiogebied</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in veiligheidsregiogebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De geometrische afbakening van het veiligheidsregiogebied waarbinnen de geometrie van het gemeentegebied zich moet bevinden, en/of mee moet samenvallen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-05-11</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied">Gemeentegebied</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied_relatiesoort_is_gemeentegebied_van">
<h6>isGemeentegebiedVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#isGemeentegebiedVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isGemeentegebiedVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is gemeentegebied van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat dit object een gemeentegebied van een regionaal openbaar lichaam is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-19</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied">Gemeentegebied</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### Provinciegebied {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied}

<div data-include-format="markdown" data-include="data/provinciegebied-detail.md"></div>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#Provinciegebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Provinciegebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bij wet afgebakend gedeelte van het grondgebied van Nederland, onder zeggenschap van een provincie met diverse bestuurlijke taken, ingesteld op basis van artikel 123 en 124 van de Grondwet, artikel 2:1 Burgerlijk Wetboek en artikel 13 van de Wet algemene regels herindeling</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Grondwet en Provinciewet</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het gaat bij dit begrip nadrukkelijk om het grondgebied en niet om de juridische entiteit (bevoegd gezag). Een provincie valt altijd volledig binnen het Europese deel van het Koninkrijk der Nederlanden. De geometrie van alle provincies moeten het Europese deel van het grondgebied van Nederland op land volledig bedekken. Provincies mogen niet overlappen.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/provinciegebied">http://begrippen.geostandaarden.nl/disgeo/id/begrip/provinciegebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-29</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied">Provinciegebied</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-12-29</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied_relatiesoort_ligt_in_rijksgebied">ligtInRijksgebied</a>
</td>
<td>
De geometrische afbakening van het rijksgebied waarbinnen de geometrie van het provinciegebied zich moet bevinden, en/of mee moet samenvallen.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_rijksgebied">Rijksgebied</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied_relatiesoort_is_provinciegebied_van">isProvinciegebiedVan</a>
</td>
<td>
Relatie die aangeeft dat dit object een provinciegebied van een regionaal openbaar lichaam is.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_provincie">Provincie</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied_relatiesoort_ligt_in_rijksgebied">
<h6>ligtInRijksgebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#ligtInRijksgebied</td>
</tr>
<tr>
<th>Naam</th>
<td>ligtInRijksgebied</td>
</tr>
<tr>
<th>Alias</th>
<td>ligt in rijksgebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De geometrische afbakening van het rijksgebied waarbinnen de geometrie van het provinciegebied zich moet bevinden, en/of mee moet samenvallen.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1..*</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied">Provinciegebied</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied_relatiesoort_is_provinciegebied_van">
<h6>isProvinciegebiedVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#isProvinciegebiedVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isProvinciegebiedVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is provinciegebied van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat dit object een provinciegebied van een regionaal openbaar lichaam is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-19</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied">Provinciegebied</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### Rijksgebied {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_rijksgebied}

<div data-include-format="markdown" data-include="data/rijksgebied-detail.md"></div>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#Rijksgebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Rijksgebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Het grondgebied van het Koninkrijk der Nederlanden</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Dit betreft het Europese deel van het Koninkrijk der Nederlanden.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/rijksgebied">http://begrippen.geostandaarden.nl/disgeo/id/begrip/rijksgebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_rijksgebied">Rijksgebied</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-12-29</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_rijksgebied_relatiesoort_is_rijksgebied_van">isRijksgebiedVan</a>
</td>
<td>
Relatie die aangeeft dat dit object een rijksgebied van een regionaal openbaar lichaam is.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk">Rijk</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_rijksgebied_relatiesoort_is_rijksgebied_van">
<h6>isRijksgebiedVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#isRijksgebiedVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isRijksgebiedVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is rijksgebied van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat dit object een rijksgebied van een regionaal openbaar lichaam is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-19</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_rijksgebied">Rijksgebied</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### Waterschapsgebied {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_waterschapsgebied}

<div data-include-format="markdown" data-include="data/waterschapsgebied-detail.md"></div>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#Waterschapsgebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Waterschapsgebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bij wet afgebakend gedeelte van het grondgebied van Nederland, onder zeggenschap van een waterschap welke de waterstaatskundige verzorging van dat gebied ten doel heeft, ingesteld op basis van artikel 133 van de Grondwet en de Waterschapswet.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Grondwet, Waterschapswet en INSPIRE</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het &#39;Waterschapsgebied&#39; betreft het administratief gebied.

Het administratief gebied betreft de geografische representatie van de verkiezingsgrenzen zoals die door de waterschappen zijn vastgelegd. Het gaat bij dit begrip nadrukkelijk om het grondgebied en niet om de juridische entiteit (bevoegd gezag).

Dit gebied is inclusief de grote wateren die niet door de waterschappen beheerd worden, maar door Rijkswaterstaat. Het gaat dus om het gebied waarin het waterschap de verkiezingen uitschrijft.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/waterschapsgebied">http://begrippen.geostandaarden.nl/disgeo/id/begrip/waterschapsgebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-05-11</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_waterschapsgebied">Waterschapsgebied</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-12-29</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_waterschapsgebied_relatiesoort_is_waterschapsgebied_van">isWaterschapsgebiedVan</a>
</td>
<td>
Relatie die aangeeft dat dit object een waterschapsgebied van een regionaal openbaar lichaam is.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_waterschap">Waterschap</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_waterschapsgebied_relatiesoort_is_waterschapsgebied_van">
<h6>isWaterschapsgebiedVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#isWaterschapsgebiedVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isWaterschapsgebiedVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is waterschapsgebied van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat dit object een waterschapsgebied van een regionaal openbaar lichaam is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-19</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_waterschapsgebied">Waterschapsgebied</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### Veiligheidsregiogebied {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_veiligheidsregiogebied}

<div data-include-format="markdown" data-include="data/veiligheidsregiogebied-detail.md"></div>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#Veiligheidsregiogebied</td>
</tr>
<tr>
<th>Naam</th>
<td>Veiligheidsregiogebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Bij wet afgebakend gedeelte van het grondgebied van Nederland, onder zeggenschap van een veiligheidsregio met diverse bestuurlijke taken, ingesteld op basis van artikel 9 van de Wet Veiligheidsregio’s</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Wet Veiligheidsregio’s</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/veiligheidsregiogebied">http://begrippen.geostandaarden.nl/disgeo/id/begrip/veiligheidsregiogebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-05-11</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_veiligheidsregiogebied">Veiligheidsregiogebied</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-12-29</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_veiligheidsregiogebied_relatiesoort_is_veiligheidsregiogebied_van">isVeiligheidsregiogebiedVan</a>
</td>
<td>
Relatie die aangeeft dat dit object een veiligheidsregiogebied van een regionaal openbaar lichaam is.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_veiligheidsregio">Veiligheidsregio</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_veiligheidsregiogebied_relatiesoort_is_veiligheidsregiogebied_van">
<h6>isVeiligheidsregiogebiedVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#isVeiligheidsregiogebiedVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isVeiligheidsregiogebiedVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is veiligheidsregiogebied van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat dit object een veiligheidsregiogebied van een regionaal openbaar lichaam is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-19</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_veiligheidsregiogebied">Veiligheidsregiogebied</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### MaritiemeZone {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_maritieme_zone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#MaritiemeZone</td>
</tr>
<tr>
<th>Naam</th>
<td>MaritiemeZone</td>
</tr>
<tr>
<th>Alias</th>
<td>Maritieme zone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een zeegebied, inclusief de zeebodem en de ondergrond daarvan, waarbinnen een kuststaat soevereiniteit, soevereine rechten of rechtsmacht uitoefent, zoals gedefinieerd in het Verdrag van de Verenigde Naties inzake het recht van de zee.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>UNCLOS</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/maritieme_zone">http://begrippen.geostandaarden.nl/disgeo/id/begrip/maritieme_zone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-12-29</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_maritieme_zone">MaritiemeZone</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-12-29</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







#### TerritorialeZee {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_territoriale_zee}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#TerritorialeZee</td>
</tr>
<tr>
<th>Naam</th>
<td>TerritorialeZee</td>
</tr>
<tr>
<th>Alias</th>
<td>Territoriale zee</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Het gebied vanaf de laagwaterlijn tot 12 zeemijl uit de kust dat behoort bij het Rijk.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Wet grenzen Nederlandse territoriale zee</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het betreft hier de territoriale zee zoals nu reeds wordt vastgelegd door de Dienst der Hydrografie.

Dit gebied is ook wel bekend als “de 12-mijlszone”. In het Eems-Dollard gebied is er tussen Nederland en Duitsland geen formeel grensverdrag en dus geen wederzijds bevestigde begrenzing van de territoriale zee.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/nederlandse_territoriale_zee">http://begrippen.geostandaarden.nl/disgeo/id/begrip/nederlandse_territoriale_zee</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-06-01</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_territoriale_zee">TerritorialeZee</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_maritieme_zone">MaritiemeZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-12-29</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_territoriale_zee_relatiesoort_is_territoriale_zee_van">isTerritorialeZeeVan</a>
</td>
<td>
Relatie die aangeeft dat dit object een territoriale zee van een regionaal openbaar lichaam is.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk">Rijk</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_territoriale_zee_relatiesoort_is_territoriale_zee_van">
<h6>isTerritorialeZeeVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#isTerritorialeZeeVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isTerritorialeZeeVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is territoriale zee van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat dit object een territoriale zee van een regionaal openbaar lichaam is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-19</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_territoriale_zee">TerritorialeZee</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### AansluitendeZone {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_aansluitende_zone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#AansluitendeZone</td>
</tr>
<tr>
<th>Naam</th>
<td>AansluitendeZone</td>
</tr>
<tr>
<th>Alias</th>
<td>Aansluitende zone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Het gebied buiten en grenzend aan de territoriale zee dat zich niet verder uitstrekt dan 24 zeemijlen vanaf de laagwaterlijn</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Rijkswet instelling aansluitende zone</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het betreft hier de aansluitende zone zoals nu reeds wordt vastgelegd door de Dienst der Hydrografie.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/nederlandse_aansluitende_zone">http://begrippen.geostandaarden.nl/disgeo/id/begrip/nederlandse_aansluitende_zone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-06-01</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_aansluitende_zone">AansluitendeZone</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_maritieme_zone">MaritiemeZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-12-29</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_aansluitende_zone_relatiesoort_is_aansluitende_zone_van">isAansluitendeZoneVan</a>
</td>
<td>
Relatie die aangeeft dat dit object een aansluitende zone van een regionaal openbaar lichaam is.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk">Rijk</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_aansluitende_zone_relatiesoort_is_aansluitende_zone_van">
<h6>isAansluitendeZoneVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#isAansluitendeZoneVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isAansluitendeZoneVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is aansluitende zone van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat dit object een aansluitende zone van een regionaal openbaar lichaam is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-19</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_aansluitende_zone">AansluitendeZone</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### ExclusieveEconomischeZone {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_exclusieve_economische_zone}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#ExclusieveEconomischeZone</td>
</tr>
<tr>
<th>Naam</th>
<td>ExclusieveEconomischeZone</td>
</tr>
<tr>
<th>Alias</th>
<td>Exclusieve economische zone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Het gebied buiten en grenzend aan de territoriale zee dat zich niet verder uitstrekt dan tweehonderd zeemijlen vanaf de laagwaterlijn.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Rijkswet instelling exclusieve economische zone</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het betreft hier de Nederlandse exclusieve economische zone zoals nu reeds wordt vastgelegd door de Dienst der Hydrografie.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/nederlandse_exclusieve_economische_zone">http://begrippen.geostandaarden.nl/disgeo/id/begrip/nederlandse_exclusieve_economische_zone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-06-01</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_exclusieve_economische_zone">ExclusieveEconomischeZone</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_maritieme_zone">MaritiemeZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-12-29</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_exclusieve_economische_zone_relatiesoort_is_exclusieve_economische_zone_van">isExclusieveEconomischeZoneVan</a>
</td>
<td>
Relatie die aangeeft dat dit object een exclusieve economische zone van een regionaal openbaar lichaam is.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk">Rijk</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_exclusieve_economische_zone_relatiesoort_is_exclusieve_economische_zone_van">
<h6>isExclusieveEconomischeZoneVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#isExclusieveEconomischeZoneVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isExclusieveEconomischeZoneVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is exclusieve economische zone van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat dit object een exclusieve economische zone van een regionaal openbaar lichaam is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-19</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_exclusieve_economische_zone">ExclusieveEconomischeZone</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### ContinentaalPlat {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_continentaal_plat}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#ContinentaalPlat</td>
</tr>
<tr>
<th>Naam</th>
<td>ContinentaalPlat</td>
</tr>
<tr>
<th>Alias</th>
<td>Continentaal plat</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Het onder de Noordzee gelegen deel van de zeebodem en de ondergrond daarvan, waarop het Koninkrijk soevereine rechten heeft, en gelegen is buiten en grenzend aan de territoriale zee.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>Mijnwet continentaal plat</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Het betreft hier het Nederlandse continentaal plat zoals nu reeds wordt vastgelegd door de Dienst der Hydrografie.

Binnen het Europese deel van het Rijk kent deze dezelfde contour als de Nederlandse Exclusieve Economische Zone.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/nederlandse_continentaal_plat">http://begrippen.geostandaarden.nl/disgeo/id/begrip/nederlandse_continentaal_plat</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-06-01</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_continentaal_plat">ContinentaalPlat</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_maritieme_zone">MaritiemeZone</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-12-29</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_continentaal_plat_relatiesoort_is_continentaal_plat_van">isContinentaalPlatVan</a>
</td>
<td>
Relatie die aangeeft dat dit object een continentaal plat van een regionaal openbaar lichaam is.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk">Rijk</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_continentaal_plat_relatiesoort_is_continentaal_plat_van">
<h6>isContinentaalPlatVan</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#isContinentaalPlatVan</td>
</tr>
<tr>
<th>Naam</th>
<td>isContinentaalPlatVan</td>
</tr>
<tr>
<th>Alias</th>
<td>is continentaal plat van</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat dit object een continentaal plat van een regionaal openbaar lichaam is.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-19</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_continentaal_plat">ContinentaalPlat</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>




### Keuzen tussen datatypen

#### VlakOfMultivlak {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_keuze_datatype__vlak_of_multivlak}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#VlakOfMultivlak</td>
</tr>
<tr>
<th>Naam</th>
<td>VlakOfMultivlak</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Keuze uit een vlak- of multivlakgeometrie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht datatypekeuzen</h5>
<table style="width: 100%">
<colgroup style="width: 50%"></colgroup>
<tbody>
<tr>
  <th>Datatype</th>
</tr>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_Surface"> GM_Surface</a>
</td>
<tr>
<td>
<a class="external-link" href="https://geonovum.github.io/uml-datatypen/#global_class_ISO191072003_GM_MultiSurface"> GM_MultiSurface</a>
</td>
</tbody>
</table>
</section>




### Enumeraties

#### TypeBestuurlijkGebied {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_enumeratie_type_bestuurlijk_gebied}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#TypeBestuurlijkGebied</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeBestuurlijkGebied</td>
</tr>
<tr>
<th>Alias</th>
<td>Type bestuurlijk gebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een bestuurlijk gebied.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-06-01</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Aansluitende zone</td>
<td>
</td>
<tr>
<td>
Continentaal plat</td>
<td>
</td>
<tr>
<td>
Exclusieve economische zone</td>
<td>
</td>
<tr>
<td>
Gemeentegebied</td>
<td>
</td>
<tr>
<td>
Provinciegebied</td>
<td>
</td>
<tr>
<td>
Rijksgebied</td>
<td>
</td>
<tr>
<td>
Territoriale zee</td>
<td>
</td>
<tr>
<td>
Veiligheidsregiogebied</td>
<td>
</td>
<tr>
<td>
Waterschapsgebied</td>
<td>
</td>
</tbody>
</table>


</section>

#### StatusRegistratieveRuimte {#informatiemodel_imso_cm_domein_bestuurlijk_gebied_enumeratie_status_registratieve_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#StatusRegistratieveRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>StatusRegistratieveRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Status registratieve ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Fasen van de levenscycli van een registratieve ruimte.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/levensfase ">http://begrippen.geostandaarden.nl/disgeo/id/begrip/levensfase </a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-29</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Ontwerp</td>
<td>
Object waarvan de vaststelling wordt voorbereid.</td>
<tr>
<td>
Niet gerealiseerd</td>
<td>
Object waarvan de het ontwerp niet is gerealiseerd.</td>
<tr>
<td>
Vastgesteld</td>
<td>
Object dat door het bevoegd gezag is benoemd of afgebakend op grond van wet- of regelgeving.</td>
<tr>
<td>
Ingetrokken</td>
<td>
Object dat door het bevoegd gezag is ingetrokken op grond van wet- of regelgeving.</td>
</tbody>
</table>


</section>



## Domein Openbaar lichaam

![Openbaar lichaam](data/media/openbaar_lichaam.png "Domein Openbaar lichaam")

### Objecttypen

#### Overheidsorganisatie {#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_overheidsorganisatie}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/Overheidsorganisatie</td>
</tr>
<tr>
<th>Naam</th>
<td>Overheidsorganisatie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een organisatie die namens de overheid taken uitvoert en onder het gezag en toezicht van de overheid valt.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/overheidsorganisatie">http://begrippen.geostandaarden.nl/disgeo/id/begrip/overheidsorganisatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-30</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_overheidsorganisatie_attribuutsoort_naam">naam</a>
</td>
<td>
De voorkeursnaam van de organisatie</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_overheidsorganisatie_attribuutsoort_officiele_naam_incl_soort">officieleNaamInclSoort</a>
</td>
<td>
De officiële naam van de organisatie met soortaanduiding, bijvoorbeeld &#39;gemeente &#39;s-Gravenhage&#39;</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
0..1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_overheidsorganisatie_attribuutsoort_organisatiecode">organisatiecode</a>
</td>
<td>
De organisatiecode.</td>
<td>
<a class="external-link" href="https://docs.geostandaarden.nl/mim/mim/#primitief-datatype-1"> CharacterString</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>




<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_overheidsorganisatie_attribuutsoort_naam">
<h6>naam</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://www.w3.org/2000/01/rdf-schema#label</td>
</tr>
<tr>
<th>Naam</th>
<td>naam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Definitie</th>
<td>De voorkeursnaam van de organisatie</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-09-10</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_overheidsorganisatie_attribuutsoort_officiele_naam_incl_soort">
<h6>officieleNaamInclSoort</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/officieleNaamInclSoort</td>
</tr>
<tr>
<th>Naam</th>
<td>officieleNaamInclSoort</td>
</tr>
<tr>
<th>Alias</th>
<td>Officiële naam inclusief soort</td>
</tr>
<tr>
<th>Herkomst</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Definitie</th>
<td>De officiële naam van de organisatie met soortaanduiding, bijvoorbeeld &#39;gemeente &#39;s-Gravenhage&#39;</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_overheidsorganisatie_attribuutsoort_organisatiecode">
<h6>organisatiecode</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/organisatiecode</td>
</tr>
<tr>
<th>Naam</th>
<td>organisatiecode</td>
</tr>
<tr>
<th>Alias</th>
<td>Organisatiecode</td>
</tr>
<tr>
<th>Herkomst</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Definitie</th>
<td>De organisatiecode.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Toelichting</th>
<td>Deze is uniek voor elke organisatie en fungeert bovendien als local name (gegeven de namespace-conventies binnen de registers).</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/organisatiecode">http://begrippen.geostandaarden.nl/disgeo/id/begrip/organisatiecode</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>


#### RegionaalOpenbaarLichaam {#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/RegionaalOpenbaarLichaam</td>
</tr>
<tr>
<th>Naam</th>
<td>RegionaalOpenbaarLichaam</td>
</tr>
<tr>
<th>Alias</th>
<td>Regionaal openbaar lichaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een regionaal openbaar lichaam is, in de bestuurlijke indeling van het Koninkrijk der Nederlanden, een overheid die wettelijk bepaalde taken uitvoert binnen een bepaald ruimtelijk gebied.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Toelichting</th>
<td>De belangrijkste regionale openbare lichamen zijn het Rijk, de provincies, de gemeenten en de waterschappen. De provincies en gemeenten worden in artikel 123 en verder van de Nederlandse Grondwet geregeld. De waterschappen in artikel 133.</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/regionaal_openbaar_lichaam">http://begrippen.geostandaarden.nl/disgeo/id/begrip/regionaal_openbaar_lichaam</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam">RegionaalOpenbaarLichaam</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_overheidsorganisatie">Overheidsorganisatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-30</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>

<section class="notoc">
<h5>Overzicht attribuutsoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam_attribuutsoort_type">type</a>
</td>
<td>
Categorie waartoe het betreffende openbaar lichaam behoort.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_enumeratie_type_regionaal_openbaar_lichaam">TypeRegionaalOpenbaarLichaam</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam_relatiesoort_heeft_bestuurlijk_gebied">heeftBestuurlijkGebied</a>
</td>
<td>
Relatie die aangeeft dat het regionaal openbaar lichaam het bestuurlijk gebied heeft.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_bestuurlijk_gebied">BestuurlijkGebied</a>
</td>
<td>
0..*</td>
</tr>
</tbody>
</table>
</section>


<section class="notoc">
<h5>Details attribuutsoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam_attribuutsoort_type">
<h6>type</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#type</td>
</tr>
<tr>
<th>Naam</th>
<td>type</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorie waartoe het betreffende openbaar lichaam behoort.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-08-17</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Indicatie classificerend</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam_relatiesoort_heeft_bestuurlijk_gebied">
<h6>heeftBestuurlijkGebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#heeftBestuurlijkGebied</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftBestuurlijkGebied</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft bestuurlijk gebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Relatie die aangeeft dat het regionaal openbaar lichaam het bestuurlijk gebied heeft.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>0..*</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam">RegionaalOpenbaarLichaam</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### Samenwerkingsorganisatie {#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_samenwerkingsorganisatie}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/Samenwerkingsorganisatie</td>
</tr>
<tr>
<th>Naam</th>
<td>Samenwerkingsorganisatie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een organisatie die in het leven is geroepen om een gemeenschappelijke regeling uit te voeren in een publiekrechtelijke of privaatrechtelijke constructie.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/samenwerkingsorganisatie">http://begrippen.geostandaarden.nl/disgeo/id/begrip/samenwerkingsorganisatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-10-14</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_samenwerkingsorganisatie">Samenwerkingsorganisatie</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_overheidsorganisatie">Overheidsorganisatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-10-14</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







#### OpenbaarLichaamUitGemeenschappelijkeRegeling {#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_openbaar_lichaam_uit_gemeenschappelijke_regeling}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/OpenbaarLichaamUitGemeenschappelijkeRegeling</td>
</tr>
<tr>
<th>Naam</th>
<td>OpenbaarLichaamUitGemeenschappelijkeRegeling</td>
</tr>
<tr>
<th>Alias</th>
<td>Openbaar lichaam uit gemeenschappelijke regeling</td>
</tr>
<tr>
<th>Herkomst</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een organisatie die in het leven is geroepen om een gemeenschappelijke regeling uit te voeren uit hoofde van de Wet gemeenschappelijke regelingen (Wgr).</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/openbaar_lichaam_uit_gemeenschappelijke_regeling">http://begrippen.geostandaarden.nl/disgeo/id/begrip/openbaar_lichaam_uit_gemeenschappelijke_regeling</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-10-14</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_openbaar_lichaam_uit_gemeenschappelijke_regeling">OpenbaarLichaamUitGemeenschappelijkeRegeling</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_samenwerkingsorganisatie">Samenwerkingsorganisatie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-10-14</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_openbaar_lichaam_uit_gemeenschappelijke_regeling">OpenbaarLichaamUitGemeenschappelijkeRegeling</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam">RegionaalOpenbaarLichaam</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-10-14</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







#### Gemeente {#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_gemeente}

<div data-include-format="markdown" data-include="data/gemeente-detail.md"></div>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/Gemeente</td>
</tr>
<tr>
<th>Naam</th>
<td>Gemeente</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een gemeente is het kleinste territoriaal openbaar lichaam met algemene bevoegdheden.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/gemeente">http://begrippen.geostandaarden.nl/disgeo/id/begrip/gemeente</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-30</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_gemeente">Gemeente</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam">RegionaalOpenbaarLichaam</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-05-11</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_gemeente_relatiesoort_heeft_gemeentegebied">heeftGemeentegebied</a>
</td>
<td>
Gemeentegebied waarin de gemeente op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_gemeentegebied">Gemeentegebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_gemeente_relatiesoort_heeft_gemeentegebied">
<h6>heeftGemeentegebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#heeftGemeentegebied</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftGemeentegebied</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft gemeentegebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Gemeentegebied waarin de gemeente op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-03-30</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_gemeente">Gemeente</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### Provincie {#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_provincie}

<div data-include-format="markdown" data-include="data/provincie-detail.md"></div>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/Provincie</td>
</tr>
<tr>
<th>Naam</th>
<td>Provincie</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een provincie is een territoriaal openbaar lichaam met algemene bevoegdheden tussen gemeente en Rijk.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/provincie">http://begrippen.geostandaarden.nl/disgeo/id/begrip/provincie</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_provincie">Provincie</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam">RegionaalOpenbaarLichaam</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_provincie_relatiesoort_bestuurt_provinciegebied">bestuurtProvinciegebied</a>
</td>
<td>
Provinciegebied waarin de provincie op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_provinciegebied">Provinciegebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_provincie_relatiesoort_bestuurt_provinciegebied">
<h6>bestuurtProvinciegebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#bestuurtProvinciegebied</td>
</tr>
<tr>
<th>Naam</th>
<td>bestuurtProvinciegebied</td>
</tr>
<tr>
<th>Alias</th>
<td>bestuurt provinciegebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Provinciegebied waarin de provincie op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_provincie">Provincie</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### Rijk {#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk}

<div data-include-format="markdown" data-include="data/rijk-detail.md"></div>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/Rijk</td>
</tr>
<tr>
<th>Naam</th>
<td>Rijk</td>
</tr>
<tr>
<th>Alias</th>
<td>De Rijksoverheid</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>De klasse Rijk is de (singleton-) klasse van onderdelen van de Nederlandse overheid die wettelijke taken hebben op landelijk niveau: de ‘centrale overheid’</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/rijk">http://begrippen.geostandaarden.nl/disgeo/id/begrip/rijk</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk">Rijk</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam">RegionaalOpenbaarLichaam</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk_relatiesoort_heeft_aansluitende_zone">heeftAansluitendeZone</a>
</td>
<td>
Aansluitende zone waarin het Rijk op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_aansluitende_zone">AansluitendeZone</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk_relatiesoort_heeft_continentaal_plat">heeftContinentaalPlat</a>
</td>
<td>
Continentaal plat waarin het Rijk op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_continentaal_plat">ContinentaalPlat</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk_relatiesoort_heeft_rijksgebied">heeftRijksgebied</a>
</td>
<td>
Rijksgebied waarin het Rijk op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_rijksgebied">Rijksgebied</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk_relatiesoort_heeft_territoriale_zee">heeftTerritorialeZee</a>
</td>
<td>
Territoriale zee waarin het Rijk op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_territoriale_zee">TerritorialeZee</a>
</td>
<td>
1</td>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk_relatiesoort_heeft_exclusieve_economische_zone">heeftExclusieveEconomischeZone</a>
</td>
<td>
Exclusieve economische zone waarin het Rijk op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_exclusieve_economische_zone">ExclusieveEconomischeZone</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk_relatiesoort_heeft_aansluitende_zone">
<h6>heeftAansluitendeZone</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#heeftAansluitendeZone</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftAansluitendeZone</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft aansluitende zone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Aansluitende zone waarin het Rijk op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk">Rijk</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk_relatiesoort_heeft_continentaal_plat">
<h6>heeftContinentaalPlat</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#heeftContinentaalPlat</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftContinentaalPlat</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft continentaal plat</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Continentaal plat waarin het Rijk op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk">Rijk</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk_relatiesoort_heeft_rijksgebied">
<h6>heeftRijksgebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#heeftRijksgebied</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftRijksgebied</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft rijksgebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Rijksgebied waarin het Rijk op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk">Rijk</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk_relatiesoort_heeft_territoriale_zee">
<h6>heeftTerritorialeZee</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#heeftTerritorialeZee</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftTerritorialeZee</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft territoriale zee</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Territoriale zee waarin het Rijk op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk">Rijk</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk_relatiesoort_heeft_exclusieve_economische_zone">
<h6>heeftExclusieveEconomischeZone</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#heeftExclusieveEconomischeZone</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftExclusieveEconomischeZone</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft exclusieve economische zone</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Exclusieve economische zone waarin het Rijk op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_rijk">Rijk</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### Waterschap {#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_waterschap}

<div data-include-format="markdown" data-include="data/waterschap-detail.md"></div>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>https://identifier.overheid.nl/tooi/def/ont/Waterschap</td>
</tr>
<tr>
<th>Naam</th>
<td>Waterschap</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een waterschap is een territoriaal openbaar lichaam dat uitsluitend bevoegd is met betrekking tot de waterhuishouding.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>TOOI - Ontologie 1.6.2</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/waterschap">http://begrippen.geostandaarden.nl/disgeo/id/begrip/waterschap</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-05-11</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_waterschap">Waterschap</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_regionaal_openbaar_lichaam">RegionaalOpenbaarLichaam</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-05-11</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_waterschap_relatiesoort_heeft_waterschapsgebied">heeftWaterschapsgebied</a>
</td>
<td>
Waterschapsgebied waarin het waterschap op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_waterschapsgebied">Waterschapsgebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_waterschap_relatiesoort_heeft_waterschapsgebied">
<h6>heeftWaterschapsgebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#bestuurtWaterschapsgebied</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftWaterschapsgebied</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft waterschapsgebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Waterschapsgebied waarin het waterschap op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-04-20</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_waterschap">Waterschap</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>

#### Veiligheidsregio {#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_veiligheidsregio}

<div data-include-format="markdown" data-include="data/veiligheidsregio-detail.md"></div>

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#Veiligheidsregio</td>
</tr>
<tr>
<th>Naam</th>
<td>Veiligheidsregio</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een veiligheidsregio is een openbaar lichaam voor de samenwerking door verschillende besturen en diensten ten aanzien van taken op het terrein van brandweerzorg, rampenbeheersing, crisisbeheersing, geneeskundige hulpverlening en handhaving van de openbare orde en veiligheid.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>https://www.vrgooienvechtstreek.nl/onze-organisatie/de-veiligheidsregio</td>
</tr>
<tr>
<th>Begrip</th>
<td>
<a href="http://begrippen.geostandaarden.nl/disgeo/id/begrip/veiligheidsregio">http://begrippen.geostandaarden.nl/disgeo/id/begrip/veiligheidsregio</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-05-11</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_veiligheidsregio">Veiligheidsregio</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_openbaar_lichaam_uit_gemeenschappelijke_regeling">OpenbaarLichaamUitGemeenschappelijkeRegeling</a>
</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2025-10-14</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Overzicht Relatiesoorten</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 50%"></colgroup>
<colgroup style="width: 18%"></colgroup>
<colgroup style="width: 7%"></colgroup>
<tbody>
<tr>
  <th>Naam</th>
  <th>Definitie</th>
  <th>Type</th>
  <th>Kard</th>
</tr>
<tr>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_veiligheidsregio_relatiesoort_heeft_veiligheidsregiogebied">heeftVeiligheidsregiogebied</a>
</td>
<td>
Veiligheidsregiogebied waarin de veiligheidsregio op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_bestuurlijk_gebied_objecttype_veiligheidsregiogebied">Veiligheidsregiogebied</a>
</td>
<td>
1</td>
</tr>
</tbody>
</table>
</section>



<section class="notoc">
<h5>Details Relatiesoorten</h5>
<section class="notoc" id="informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_veiligheidsregio_relatiesoort_heeft_veiligheidsregiogebied">
<h6>heeftVeiligheidsregiogebied</h6>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#heeftVeiligheidsregiogebied</td>
</tr>
<tr>
<th>Naam</th>
<td>heeftVeiligheidsregiogebied</td>
</tr>
<tr>
<th>Alias</th>
<td>heeft veiligheidsregiogebied</td>
</tr>
<tr>
<th>Herkomst</th>
<td>EMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Veiligheidsregiogebied waarin de veiligheidsregio op basis van wet- of regelgeving bepaalde taken uitvoert.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>EMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-05-11</td>
</tr>
<tr>
<th>Identificerend</th>
<td>Nee</td>
</tr>
<tr>
<th>Kardinaliteit</th>
<td>1</td>
</tr>
<tr>
<th>Kardinaliteit relatie bron</th>
<td>1</td>
</tr>
<tr>
<th>Bron</th>
<td>
<a class="link" href="#informatiemodel_imso_cm_domein_openbaar_lichaam_objecttype_veiligheidsregio">Veiligheidsregio</a>
</td>
</tr>
<tbody>
</tbody>
</table>
</section>
</section>







### Enumeraties

#### TypeRegionaalOpenbaarLichaam {#informatiemodel_imso_cm_domein_openbaar_lichaam_enumeratie_type_regionaal_openbaar_lichaam}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/imso#TypeRegionaalOpenbaarLichaam</td>
</tr>
<tr>
<th>Naam</th>
<td>TypeRegionaalOpenbaarLichaam</td>
</tr>
<tr>
<th>Alias</th>
<td>Type regionaal openbaar lichaam</td>
</tr>
<tr>
<th>Herkomst</th>
<td>IMSO</td>
</tr>
<tr>
<th>Definitie</th>
<td>Categorisering van een regionaal openbaar lichaam.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>IMSO</td>
</tr>
<tr>
<th>Datum opname</th>
<td>2022-06-01</td>
</tr>
<tbody>
</tbody>
</table>


<section class="notoc">
<h5>Overzicht waarden</h5>    
<table style="width: 100%">
<colgroup style="width: 25%"></colgroup>
<colgroup style="width: 75%"></colgroup>
<tbody>
<tr>
  <th>Waarde</th>
  <th>Definitie</th>
</tr>
<tr>
<td>
Gemeente</td>
<td>
</td>
<tr>
<td>
Provincie</td>
<td>
</td>
<tr>
<td>
Rijk</td>
<td>
</td>
<tr>
<td>
Veiligheidsregio</td>
<td>
</td>
<tr>
<td>
Waterschap</td>
<td>
</td>
</tbody>
</table>


</section>



## Extern NEN 3610:2022 - Basismodel geo-informatie

![NEN 3610:2022 - Basismodel geo-informatie](data/media/nen_3610_2022_-_basismodel_geo-informatie.png "Extern NEN 3610:2022 - Basismodel geo-informatie")

### Objecttypen

#### GeoObject {#informatiemodel_nen3610_domein_semantisch_model_objecttype_geo_object}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/nen3610#GeoObject</td>
</tr>
<tr>
<th>Naam</th>
<td>GeoObject</td>
</tr>
<tr>
<th>Alias</th>
<td>Geo-object</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Een fenomeen in de werkelijkheid dat direct of indirect is geassocieerd met een locatie relatief ten opzichte van de aarde.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>








#### VirtueleRuimte {#informatiemodel_nen3610_domein_semantisch_model_objecttype_virtuele_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/nen3610#VirtueleRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>VirtueleRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Virtuele ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Geo-object dat zich geheel of gedeeltelijk niet-materieel manifesteert en dus slechts in abstracte en/of geregistreerde vorm bestaat.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_virtuele_ruimte">VirtueleRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_geo_object">GeoObject (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>







#### RegistratieveRuimte {#informatiemodel_nen3610_domein_semantisch_model_objecttype_registratieve_ruimte}

<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Identificatie</th>
<td>http://modellen.geostandaarden.nl/def/nen3610#RegistratieveRuimte</td>
</tr>
<tr>
<th>Naam</th>
<td>RegistratieveRuimte</td>
</tr>
<tr>
<th>Alias</th>
<td>Registratieve ruimte</td>
</tr>
<tr>
<th>Herkomst</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Definitie</th>
<td>Op basis van wet- of regelgeving afgebakende ruimte die als eenheid geldt van politiek-bestuurlijke verantwoordelijkheid of voor bedrijfsvoering.</td>
</tr>
<tr>
<th>Herkomst definitie</th>
<td>nen 3610</td>
</tr>
<tr>
<th>Datum opname</th>
<td>20220601</td>
</tr>
<tbody>
</tbody>
</table>

<section class="notoc">
<h5>Overzicht generalisaties</h5>
<table style="width: 100%">
<colgroup style="width: 30%"></colgroup>
<colgroup style="width: 70%"></colgroup>
<tr>
<th>Subtype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_registratieve_ruimte">RegistratieveRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Supertype</th>
<td>
<a class="link" href="#informatiemodel_nen3610_domein_semantisch_model_objecttype_virtuele_ruimte">VirtueleRuimte (NEN 3610:2022 - Basismodel geo-informatie)</a>
</td>
</tr>
<tr>
<th>Mixin</th>
<td>Nee</td>
</tr>
<tbody>
</tbody>
</table>
</section>
