// import gtf from '../../assets/100years/gtf-engine.png';
// import v2500_1 from '../../assets/100years/v2500-1.png';
// import v2500_2 from '../../assets/100years/v2500-2.png';
// import v2500_3 from '../../assets/100years/machine-1.png';
// import engineDetails from './engineDetailsData';

import engineDetails from "./engineDetailsData";
import yearImages from "./yearImages";


export const productEngines = [
  null,
    
    {
      engine: "Regional Aviation",
      description: "This is the sub heading",
      engines: [
       { id: 'PW127XT', img: yearImages.v2500_1, title: 'PW127XT', description: "For PW India Experience Center",details:engineDetails.regional.PW127XT },
       { id: 'PW100', img: yearImages.v2500_2, title: 'PW100/150', description: "For PW India Experience Center",details:engineDetails.regional["PW100/150"] },
      ],
    },
    {
      engine: "Military Engines",
      description: "This is the sub heading",
      engines: [
         { id: 'TF33', img:  yearImages.v2500_1, title: 'TF33', description: "For PW India Experience Center",details:engineDetails.military.TF33 },
         { id: 'PW4062', img:  yearImages.v2500_2, title: 'PW4062/F139', description: "For PW India Experience Center",details:engineDetails.military["PW4062/F139"] },
         { id: 'F135', img:  yearImages.v2500_3, title: 'F135', description: "For PW India Experience Center",details:engineDetails.military.F135 },
         { id: 'F119', img:  yearImages.v2500_1, title: 'F119', description: "For PW India Experience Center",details:engineDetails.military.F119 },
         { id: 'F100', img:  yearImages.v2500_3, title: 'F100', description: "For PW India Experience Center",details:engineDetails.military.F100 },
         { id: 'F117', img:  yearImages.v2500_1, title: 'F117', description: "For PW India Experience Center",details:engineDetails.military.F117 },

      ],
    },
    {
      engine: "Helicopter Engines",
      description: "This is the sub heading",
      engines: [
         { id: 'PW210', img: yearImages.v2500_1, title: 'PW210', description: "For PW India Experience Center",details:engineDetails.helicopter.PW210 },
         { id: 'PW200', img:yearImages.v2500_2, title: 'PW200', description: "For PW India Experience Center",details:engineDetails.helicopter.PW200 },
         { id: 'PT6T', img: yearImages.v2500_3, title: 'PT6T', description: "For PW India Experience Center",details:engineDetails.helicopter.PT6T },
         { id: 'PT6C', img: yearImages.v2500_1, title: 'PT6C', description: "For PW India Experience Center",details:engineDetails.helicopter.PT6C },
      ],
    },
    {
      engine: "General Aviation",
      description: "This is the sub heading",
      engines: [
         { id: 'PT6 ', img: yearImages.v2500_1, title: 'PT6 E-Series', description: "For PW India Experience Center",details:engineDetails.general["PT6 E-Series"]  },
         { id: 'PT6A', img: yearImages.v2500_3, title: 'PT6A', description: "For PW India Experience Center",details:engineDetails.general.PT6A},

      ],
    },
    {
      engine: "Commercial Engines",
      description: "This is the sub heading.",
      engines: [
     { id: 'gtf', img: yearImages.v2500_1, title: 'GTF  Family', description: "For PW India Experience Center",details:engineDetails.commercial.GTF_Family },
     { id: 'v2500_1', img: yearImages.v2500_3, title: 'v2500', description: "For PW India Experience Center",details:engineDetails.commercial.v2500 },
     { id: 'v2500_2', img: yearImages.v2500_2, title: 'PW4000 ', description: "For PW India Experience Center",details:engineDetails.commercial.PW4000 },
     { id: 'v2500_3', img: yearImages.v2500_1, title: 'PW2000', description: "For PW India Experience Center",details:engineDetails.commercial.PW2000 },
     { id: 'v2500_4', img: yearImages.v2500_3, title: 'GP7200', description: "For PW India Experience Center",details:engineDetails.commercial.GP7200 },
      ],
    },
    
    
    {
      engine: "Business Aviation Engines",
      description: "This is the sub heading",
      engines: [
         { id: 'PW800', img: yearImages.v2500_1, title: 'PW800', description: "For PW India Experience Center", details:engineDetails.business_aviation.PW800 },
         { id: 'PW600', img: yearImages.v2500_2, title: 'PW600', description: "For PW India Experience Center",details:engineDetails.business_aviation.PW600  },
         { id: 'PW500', img: yearImages.v2500_3, title: 'PW500', description: "For PW India Experience Center",details:engineDetails.business_aviation.PW500  },
         { id: 'PW300', img: yearImages.v2500_1, title: 'PW300', description: "For PW India Experience Center",details:engineDetails.business_aviation.PW300  },
      ],
    },
    {
      engine: "APUs",
      description: "This is the sub heading",
      engines: [
         { id: 'APS3200', img: yearImages.v2500_1, title: 'APS3200', description: "For PW India Experience Center",details:engineDetails.APUs.APS3200 },
         { id: 'APS1000', img: yearImages.v2500_2, title: 'APS1000', description: "For PW India Experience Center",details:engineDetails.APUs.APS1000 },
         { id: 'APS500', img: yearImages.v2500_3, title: 'APS500', description: "For PW India Experience Center",details:engineDetails.APUs.APS500 },

      ],
    },
    
    null,
  ];