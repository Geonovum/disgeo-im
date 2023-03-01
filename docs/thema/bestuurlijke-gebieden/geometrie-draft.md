# Algemeen

## Geometrie

Voor de representatie van de _locatie_, _oriëntatie_ en _vorm_ van een object uit de werkelijkheid, gebruiken informatiemodellen geometrieën. De dimensie van een representatie variëert van nuldimensionaal (0D) tot driedimensionaal (3D). Objecten worden altijd geplaatst in een tweedimensionele (2D), of driedimensionele (3D) ruimte. Het informatiemodel DiSGeo gebruikt gestandaardiseerde geometrietypen uit ISO 19107:2003. Dit voorziet zowel in de opname van de coördinaten van de geometrie, als van het coördinaten<i>stelsel</i>. Tot slot heeft een geometrische representatie ook kwaliteitskenmerken. Het informatiemodel DiSGeo onderscheid in elk geval informatie over de _nauwkeurigheid_ en de _inwinregels_.

<aside class="note">
   Hier iets invoegen over relevante standaarden?
</aside>

Samengevat legt het informatiemodel de volgende informatie over geometrie vast:

 - Dimensionaliteit
 - Geometrietypen
 - Coordinaatreferentiesystemen
 - Kwaliteitskenmerken (o.a. nauwkeurigheid, inwinregels en topologische regels)

Per onderdeel verschilt de plek waar de informatie over geometrie vast ligt. Het informatiemodel kent verschillende niveaus: _dataset_-, _object_- en _attribuutniveau_. In het algemeen geldt: hoe generieker de aard van de informatie, hoe algemener het niveau waarop het model dit vastlegt. De volgende paragrafen gaan dieper in op de verschillende kenmerken en hoe het model ze vastlegt.

<aside class="issue">
   Onderstaande twee lijsten samenvoegen.
</aside>

De volgende documenten zijn gehanteerd als modelleertechnische uitgangspunten voor het informatiemodel DiSGeo:

 - Metamodel Informatie Modellering 1.1.1 [[MIM]]
 - Raamwerk van geo-standaarden 3.0 [[Raamwerk-Geo]]
 - Basismodel Geo-informatie [[NEN3610-2022]]
 - ISO-19107-2003: Geographic information – Spatial schema [[iso-19107-2003]]
 - Modelleerprincipes samenhangende objectenregistratie [[disgeo-mod]]

Voor `...` van geometrieën gelden een aantal belangrijke principes die volgen uit verschillende standaarden en initiatieven. 

 - Coordinaatreferentiesystemen
 - Technologieën
 - NEN3610
 - Geometrie in het model
 - Uitganspunten EMSO