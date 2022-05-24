# Verwijzing vanuit het informatiemodel bij elk modelelement naar het corresponderende begrip

Modelleerprincipe [P4](https://geonovum.github.io/disgeo-imsor/modelleerprincipes/#p4-ieder-objecttype-eigenschap-en-waarde-uit-een-waardelijst-heeft-een-bijbehorend-begrip) stelt: 
> Ieder objecttype, eigenschap, en waarde uit een waardelijst moet verbonden zijn met tenminste één bijbehorend begrip in een begrippenkader over dat domein, tenzij aangetoond wordt dat dit niet relevant is.

## Wat
Concreet betekent dit: vanuit het DiSGeo informatiemodel, dat wordt vastgelegd in UML, nemen we bij elk van de in P4 genoemde modelelementen een verwijzing (URL) op naar het corresponderende begrip in het DiSGeo begrippenkader. 

Een uitgangspunt hierbij is wel dat een gebruiker de definitie van het modelelement meteen kan lezen en niet hoeft door te klikken naar het begrippenkader. 

Verder moet het begrippenkader in lijn worden gebracht en gehouden met het informatiemodel. Zie hiervoor [DSG-140](https://geonovum.atlassian.net/browse/DSG-140). 

## Waarom
- Het oorspronkelijke begrippenkader is in de UML herleidbaar door het linken van modelelementen aan begrippen.
- Gebruikers kunnen zien hoe het informatiemodel zich verhoudt tot het begrippenkader.

Dit betekent dat begrippenkader en informatiemodel met elkaar in lijn moeten zijn. Het begrippenkader is momenteel in lijn met het EMSO. Er zijn modelelementen die ontbreken in het begrippenkader of daar niet op een juiste wijze zijn gedefinieerd, omdat het EMSO een eisendocument is en wat losser met semantiek omgaat. Het begrippenkader moet nu worden aangepast zodat het mogelijk is elk modelelement met het juiste begrip in verband te brengen, waarbij bovendien het begrippenkader een semantisch consistent geheel vormt.

## Hoe
Om de lezer extra klikken te besparen, nemen we zowel de tekstuele definitie van het modelelement als de link naar het begrip in de UML op: 
- De tekstuele definitie nemen we conform MIM op in het metagegeven [`definitie`](https://docs.geostandaarden.nl/mim/mim/#metagegeven-definitie)
- De link naar het begrip nemen we op conform MIM in het metagegeven [`begrip`](https://docs.geostandaarden.nl/mim/mim/#metagegeven-begrip), conform [MIM afspraken en regels](https://docs.geostandaarden.nl/mim/mim/#afspraken-regels) hierover. 

We verwijzen voorlopig naar het begrippenkader in ontwikkeling op de testomgeving, `https://test-begrippen.geostandaarden.nl/sor/nl/`. Op de productieomgeving, `https://begrippen.geostandaarden.nl/sor/nl/` staat nu nog de op EMSO gebaseerde, bevroren versie van het begrippenkader. In de toekomst zou hier het nieuwe, met het IMDiSGeo in lijn gebrachte begrippenkader gepubliceerd moeten worden. In het informatiemodel kunnen de URLs naar begrippen dan worden aangepast met een global replace actie. 

Het opnemen van zowel de tekstuele definitie als de link naar het begrip levert wel redundantie op. De definitie in het informatiemodel zal naar verwachting hetzelfde zijn als die in het begrippenkader. Dit betekent extra beheerslast (dubbel bijhouden van definitie). 

We hebben overwogen om de definitie leeg te laten, en met behulp van een script op te halen uit het begrippenkader om te presenteren aan de lezer. In ReSpec is dit wel mogelijk met client-side javascript, maar ook in andere uit het informatiemodel afgeleide producten zou deze functionaliteit gescript moeten worden (bijvoorbeeld voor de ontologie, uitwisselschema's, MIM XML formaat). De enige reden voor deze scripts zou zijn een beheerslast te vermijden, maar het betekent wel dat er meerdere scripts moeten worden ontwikkeld en beheerd. Eenmaal stabiel, is een definitie in een informatiemodel niet iets dat vaak verandert, waardoor de beheerslast klein zal zijn. 

We moeten wel borgen dat we definities altijd op twee plekken aanpassen en ze niet uit de pas gaan lopen. De gebruiker moet erop kunnen vertrouwen dat het klopt. Dit doen we door bij elke story die namen of definities raakt van modelelementen in het informatiemodel, in de DoD niet alleen op te nemen "UML aangepast" maar ook: "begrippenkader aangepast". 