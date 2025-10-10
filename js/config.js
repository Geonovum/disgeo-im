let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Informatiemodel Samenhangende Objecten",
  // subtitle is NIET verplicht
  subtitle: "Bestuurlijke gebieden",
 
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  // specType: "HR",                     // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "disgeo",
  
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  // licence: "cc-by",                 // Attribution, met bronvermelding
  
  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "imsor",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
  edDraftURI: "https://geonovum.github.io/disgeo-im",

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2025-09-23",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  publishVersion: "[]",
  //previousVersion: "0.0.1",
  
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2025-05-16",
  previousMaturity: "basis",
  
  //-- de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors: 
  [
    {
      name:       "Linda van den Brink",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
  ],

  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors: 
  [
    {
      name:       "Linda van den Brink",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Pano Maria",
      company:    "Skemu",
      companyURL: "https://skemu.com/"
    },    
  ],

  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/disgeo-im",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/Geonovum/disgeo-im/issues/",

  // Aantal niveaus van de ToC
  maxTocLevel: 7,

  // Create PDF and link to file in header (optional):
  // alternateFormats: [
  //     {
  //         label: "pdf",
  //         uri: "template.pdf",
  //     },
  // ],

  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eerst naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    "Dienst-Hydrografie":
      {
        title:      "Maritieme Zones en Zeegrenzen",
        href:       "https://www.defensie.nl/onderwerpen/hydrografie/maritieme-zones-en-zeegrenzen",
        status:     "Versie ter vaststelling",
        date:       "2022-04-04",
        publisher:  "Ministerie van Defensie",
      },
    "EMSO":
      {
        title:      "DiS Geo : Eisen aan model samenhangende objectenregistratie",
        href:       "https://docs.geostandaarden.nl/disgeo/emso/",
        status:     "Versie ter vaststelling",
        date:       "2021-06-16",
        publisher:  "Geonovum",
      },
    MIM12: {
      id: "MIM12",
      title: "MIM - Metamodel Informatie Modellering (Versie 1.2)",
      href: "https://docs.geostandaarden.nl/mim/def-st-mim-20240613/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2024-06-13"
    },
    "Raamwerk-Geo":
      {
        title:      "Raamwerk Geostandaarden (v3.0)",
        href:       "https://www.geonovum.nl/uploads/documents/Raamwerk%20Geo-Standaarden%20v3.0.pdf",
        status:     "Vastgesteld",
        date:       "2015-03-31",
        publisher:  "Geonovum",
      },
    "Veiligheidsregio":
      {
        title:      "Openbaar Lichaam: waterschap",
        href:       "https://www.rijksoverheid.nl/onderwerpen/veiligheidsregios-en-crisisbeheersing/veiligheidsregios",
        publisher:  "Rijksoverheid",
        company:    "Rijksoverheid",
        date:       "2022-05-18", 
      },
    "Waterschap-1":
      {
        title:      "Wat doen waterschappen?",
        href:       "https://www.waterschappen.nl/wat-doen-de-waterschappen/",
        publisher:  "De Unie van Waterschappen",
        company:    "De Unie van Waterschappen",
        date:       "2022-05-18", 
      },
    "Waterschap-2":
      {
        title:      "Openbaar Lichaam: waterschap",
        href:       "https://www.rijksoverheid.nl/onderwerpen/waterschappen",
        publisher:  "Rijksoverheid",
        company:    "Rijksoverheid",
        date:       "2022-05-18", 
      },
    "Wikipedia":
      {
        title:      "Definitie: openbaar lichaam",
        href:       "https://nl.wikipedia.org/wiki/Openbaar_lichaam",
        publisher:  "Wikipedia",
        company:    "Wikipedia",
        date:       "2022-05-18", 
      },
    "NEN3610-2022": 
      {
        title:      "NEN-3610 Basismodel geo-informatie",
        href:       "https://www.nen.nl/nen-3610-2022-nl-296137",
        status:     "Definitief",
        date:       "Juni 2022",
        publisher:  "NEN",
      },
    "disgeo-mod": 
      {
        title:      "Modelleerprincipes samenhangende objectenregistratie",
        href:       "https://geonovum.github.io/disgeo-imsor/modelleerprincipes/",
        status:     "Werkversie",
        date:       "22 Augustus 2022",
        publisher:  "Geonovum",
      },
    "NLISO19115":
      {
        title:      "Nederlands metadata profiel op ISO 19115 voor geografie versie 2.1.0",
        href:       "https://docs.geostandaarden.nl/md/mdprofiel-iso19115/",
        status:     "Vastgestelde versie",
        publisher:  "Geonovum",
        date:       "30 juni 2020",
      },
    "CityGML3": 
      {
        title:      "OGC City Geography Markup Language (CityGML) Part 1: Conceptual Model Standard v3.0",
        href:       "https://docs.ogc.org/is/20-010/20-010.html",
        status:     "Published",
        publisher:  "Open Geospatial Consortium",
        editors:    ["Thomas H. Kolbe", "Tatjana Kutzner", "Carl Stephen Smyth", "Claus Nagel", "Carsten Roensdorf", "Charles Heazel"],
        date:       "2021-09-13",
      },
    "NORA-RK":
      {
        title:      "NORA Raamwerk Gegevenskwaliteit",
        href:       "https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit",
      },
    "Kadaster-VO":
      {
        title:      "Rapportage Vooronderzoek Bestuurlijke Gebieden",
        publisher:  "Kadaster",
        date:       "2022-06-13", 
        editors:    "Ronald Bokhove", 
      },
    "TOOI-ONT-1.6.2": 
      {
        title:      "TOOI - Ontologie 1.6.2",
        href:       "https://standaarden.overheid.nl/tooi/doc/tooi-ontologie-1.6.2/",
        status:     "Vastgestelde versie",
        publisher:  "Kennis- en Exploitatiecentrum voor Officiële Overheidspublicaties (KOOP)",
        date:       "04 juli 2025",
      },

// onderstaande lijst is een kopie van localBiblio document generieke onderwerpen
      
    "GML3.3":
      {
        title:      "OGC® Geography Markup Language (GML) - Extended schemas and encoding rules ",
        href:       "https://portal.ogc.org/files/?artifact_id=46568",
        status:     "International standard",
        date:       "2012 –02-07",
        publisher:  "ISO/IEC",
      },
    "MODPR":
      {
        title:      "Modelleerprincipes samenhangende objectenregistratie",
        href:       "https://geonovum.github.io/disgeo-imsor/modelleerprincipes/",
        status:     "levend document",
        publisher:  "Geonovum",
      },
    "NEN-2660-2":
      {
        title:      "Regels voor informatiemodellering van de gebouwde omgeving - Deel 2: Praktische configuratie, extensie en implementatie van deel 1",
        href:       "https://www.nen.nl/nen-2660-2-2021-ontw-nl-279908",
        status:     "Definitieve versie",
        publisher:  "NEN",
        date:       "1 april 2021",
      },
    "ISO-19131":
      {
        title:      "Geographic information — Data product specifications",
        href:       "https://www.iso.org/standard/36760.html",
        status:     "Published",
        publisher:  "ISO",
        date:       "2007-04",
      },
    "ISO-19110":
      {
        title:      "Geographic information — Methodology for feature cataloguing",
        href:       "https://www.iso.org/standard/57303.html",
        status:     "Published",
        publisher:  "ISO",
        date:       "2016-12",
      },
    "ISO-25012":
      {
        title:      "Software engineering — Software product Quality Requirements and Evaluation (SQuaRE) — Data quality model",
        href:       "https://www.iso.org/standard/35736.html",
        status:     "Published",
        date:       "2008-12",
        publisher:  "ISO/IEC",
      },
    "ISO-19156-2021": 
      {
        title: "Geographic information — Observations, measurements and samples",
        href: "https://www.iso.org/standard/82463.html", 
        status: "DIS", 
        publisher: "ISO",
        date: "2021-11-15",
      },
    "NL-profiel-ISO-19115":
      {
        title:      "Nederlands metadata profiel op ISO 19115 voor geografie",
        href:       "https://docs.geostandaarden.nl/md/mdprofiel-iso19115/",
        status:     "Definitief",
        publisher:  "Geonovum",
        date:       "30 juni 2020",
        version:    "2.1.0",
      },
    "ISO-19107-2019":
      {
        title: "Geographic information — Spatial schema",
        href: "https://www.iso.org/standard/66175.html", 
        status: "Definitief", 
        publisher: "ISO",
        date: "2019-12",
      },
    "ISO-19125":
      {
        title: "Geographic information — Simple feature access — Part 1: Common architecture",
        href: "https://www.iso.org/standard/40114.html",
        status: "Published",
        publisher: "ISO/TC 211",
        date: "2004-11",
      },
    "ISO-19148": 
      {
        title:"ISO 19148:2021 Geographic information — Linear referencing",
        href: "https://www.iso.org/standard/75150.html",
        status: "Published",
        publisher: "ISO/TC 211 Geographic information/Geomatics",
        date: "2021-04",
      },
    "DiSGeo-Arch":
      {
        title:      "DiS Geo: Architectuurbeschrijving Voorzieningen Samenhangende Objectenregistratie",
        href:       "https://docs.geostandaarden.nl/disgeo/arch/",
        status:     "Consultatieversie",
        date:       "2020-10-05",
        publisher:  "Geonovum",
      },
    // "NEN3610-2021-ontw":
    //   {
    //     title: "Basismodel geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
    //     href: "https://www.nen.nl/nen-3610-2021-ontw-nl-287554",
    //     status: "Ontwerp",
    //     publisher: "NEN",
    //     date: "2021-10-01"
    //   },
    "UOI-ontw":
      {
        title: "UOI Ontwerp",
        href: "https://www.nen.nl/nen-3610-2021-ontw-nl-287554",
        status: "Consultatieversie",
        publisher: "Geonovum",
        date: "2021-04-20"
      },
    "GIMEG":
      {
        href: "https://docs.geostandaarden.nl/nen3610/gimeg",
        publisher: "Geonovum", 
        authors: ["Linda van den Brink", "Paul Janssen", "Wilko Quak",],
        title: "Geometrie in model en GML",
      },
    "gebruik-crs": 
      {
        title: "Handreiking Gebruik coördinaatreferentiesystemen bij uitwisseling en visualisatie van geo-informatie",
        href: "https://docs.geostandaarden.nl/crs/def-hr-crs-20220314/",
        status: "Vastgestelde versie",
        publisher: "Geonovum",
        date: "2022-03-14",
      },
  },


};
