// import gtf from '../../assets/100years/gtf-engine.png';
// import v2500_1 from '../../assets/100years/v2500-1.png';
// import v2500_2 from '../../assets/100years/v2500-2.png';
// import v2500_3 from '../../assets/100years/machine-1.png';
// import engineDetails from './engineDetailsData';

import engineDetails from "./engineDetailsData";
import productImages from "./productImages";
import yearImages from "./yearImages";


export const productEngines = [
  null,
    
    {
    engine: "Regional Aviation",
    description: "Inventing Regional Aviation market",
    video:productImages.RegionalVideo,
    engines: [
     
      { id: 'PW100', img: productImages.PW100_150_1, title: 'PW100/150', description: "Powering regional aircraft around the world.", details: engineDetails.regional["PW100/150"] },
       { id: 'PW127XT', img: productImages.PW127XT_9, title: 'PW127XT', description: "Regional aviation's new standard for economics & efficiency", details: engineDetails.regional.PW127XT },

    ],
  },
  {
    engine: "Military Engines",
    description: "7,500 engines, 34 armed forces",
    video:productImages.MilitaryVideo,
    engines: [
      { id: 'TF33', img: productImages.machine1, title: 'TF33', description: "A legendary engine for a legendary bomber", details: engineDetails.military.TF33 },
      { id: 'PW4062', img: productImages.F139_2, title: 'PW4062/F139', description: "Time-tested reliability for the KC-46 Pegasus", details: engineDetails.military["PW4062/F139"] },
      { id: 'F135', img: productImages.F135_0, title: 'F135', description: "The world’s most powerful fighter jet engine", details: engineDetails.military.F135 },
      { id: 'F119', img: productImages.F119_1, title: 'F119', description: "The first operational 5th Gen fighter engine on F-22", details: engineDetails.military.F119 },
       { id: 'F117_1', img: productImages.F117_1, title: 'F117', description: "Exclusive power forthe C-17 Globemaster III", details: engineDetails.military.F117 },
      { id: 'F100', img: productImages.F100_2, title: 'F100', description: "Engine of choice for the F-15 and F-16", details: engineDetails.military.F100 },
     

    ],
   
  },
  {
    engine: "Helicopter Engines",
    description: "The right power, speed and efficiency",
    video:productImages.HelicopterVideo,
    engines: [
      { id: 'PW210', img: productImages.Hel_PW210_1, title: 'PW210', description: "Shaping a new generation of helicopters with 1,100 SHP", details: engineDetails.helicopter.PW210 },
      { id: 'PW200', img: productImages.Hel_PW200_1, title: 'PW200', description: "Powering the majority of the world’s light-twin helicopters", details: engineDetails.helicopter.PW200 },
      { id: 'PT6T', img: productImages.PT6T_1, title: 'PT6T', description: "Workhorse of 1,800 to 2,000 SHP, medium-class helicopters", details: engineDetails.helicopter.PT6T },
      { id: 'PT6C', img: productImages.PT6C_1, title: 'PT6C', description: "High powered performance for new-gen medium helicopters & tiltrotors", details: engineDetails.helicopter.PT6C },
    ],
  },
  {
    engine: "General Aviation",
    description: "Proven, prolific, PT6",
    video:productImages.GeneralVideo,
    engines: [
      { id: 'PT6 ', img: productImages.PT6E_66XP, title: 'PT6 E-Series', description: "First engine family with a dual channel integrated electronic propeller", details: engineDetails.general["PT6 E-Series"] },
      { id: 'PT6A', img: productImages.PT6A_2, title: 'PT6A', description: "PT6A engine family is the world's most popular engine in its class", details: engineDetails.general.PT6A },

    ],
  },
  {
    engine: "Commercial Engines",
    description: "Dependable, efficient power",
    video:productImages.CommercialVideo,
    engines: [
      { id: 'gtf', img: productImages.gtf, title: 'GTF  Family', description: "The most fuel-efficient engine for single-aisle aircraft", details: engineDetails.commercial.GTF_Family },
      { id: 'v2500_1', img: productImages.V25_1, title: 'v2500', description: "Versatile engine that supports ever-evolving needs", details: engineDetails.commercial.v2500 },
      { id: 'v2500_2', img: productImages.PW4_1, title: 'PW4000 ', description: "Extended-range Twin-engine Operations leader for the 777", details: engineDetails.commercial.PW4000 },
      { id: 'v2500_3', img: productImages.PW2_1, title: 'PW2000', description: "Covers mid-thrust range from 37K to 43K pounds", details: engineDetails.commercial.PW2000 },
      { id: 'v2500_4', img: productImages.P7200_4, title: 'GP7200', description: "Derived from 2 most successful wide-body engines in history", details: engineDetails.commercial.GP7200 },
    ],
   
  },


  {
    engine: "Business Aviation Engines",
    description: "Portfolio that spans business aviation",
    video:productImages.BussinessVideo,
    engines: [
      { id: 'PW800', img: productImages.PW800_1, title: 'PW800', description: "Powering the future of business aviation", details: engineDetails.business_aviation.PW800 },
      { id: 'PW600', img: productImages.PW600_1, title: 'PW600', description: "The right choice for light jets", details: engineDetails.business_aviation.PW600 },
      { id: 'PW500', img: productImages.PW500_3, title: 'PW500', description: "The leader in fractional business aviation", details: engineDetails.business_aviation.PW500 },
      { id: 'PW300', img: productImages.PW300_1, title: 'PW300', description: "The heart of mid-size business jets", details: engineDetails.business_aviation.PW300 },
    ],
     
  },
  {
    engine: "APUs",
    description: "Industry leading APUs",
    video:productImages.APUVideo,
    engines: [
        { id: 'PW980', img: productImages.PW980, title: 'PW980', description: "The largest APU in commercial airline service for A380", details: engineDetails.APUs.PW980 },
          { id: 'APS5000', img: productImages.APS5000_logo, title: 'APS5000', description: "Industry's first all-electric APU for 787", details: engineDetails.APUs.APS5000 },
      { id: 'APS3200', img: productImages.APS3200_1, title: 'APS3200', description: "Airbus baseline APU of choice for the A320 family", details: engineDetails.APUs.APS3200 },
      { id: 'APS1000', img: productImages.APS1000_1, title: 'APS1000', description: "Next step up in performance for military aircraft", details: engineDetails.APUs.APS1000 },
      { id: 'APS500', img: productImages.APS500_1, title: 'APS500', description: "Established and proven turbine technology for military aircraft", details: engineDetails.APUs.APS500 },

    ],
  },
   {
    engine: "Legacy Engines",
    description: "A century of innovation",
    video:productImages.LegacyVideo,
    engines: [
        { id: 'Hornet', img: productImages.PW980, title: 'Hornet', description: "9-cylinder, air-cooled radial engine powering many iconic aircraft", details: engineDetails.legacy_engines.Hornet },
          { id: 'JT3D', img: productImages.APS5000_logo, title: 'JT3D', description: "One of the first successful low-bypass turbofan engines, powered the dawn of the Jet Age", details: engineDetails.legacy_engines.JT3D },
      { id: 'JT8D', img: productImages.APS3200_1, title: 'JT8D', description: "Powered some of the most successful commercial jets in history, including 727 and 737", details: engineDetails.legacy_engines.JT8D },
      { id: 'JT9D', img: productImages.APS1000_1, title: 'JT9D', description: "Opened a new era in commercial aviation with the high-bypass-ratio engine", details: engineDetails.legacy_engines.JT9D },
      { id: 'wasp', img: productImages.APS500_1, title: 'wasp', description: "Pratt & Whitney’s first engine – and one of the most influential in history", details: engineDetails.legacy_engines.wasp },

    ],
  },
    
    null,
  ];