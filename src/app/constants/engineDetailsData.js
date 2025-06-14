import productImages from "./productImages";
import yearImages from "./yearImages";



const engineDetails = {
  regional: {
    PW127XT: {
          title: "PW127XT",
          subTitle: "For PW India Experience Center",
          description:"The PW127XT engine, part of Pratt & Whitney's PW100 family, is a next-generation turboprop engine designed for regional aircraft. It delivers enhanced performance, offering up to more fuel efficiency compared to earlier models, while reducing maintenance costs. The PW127XT features advanced materials and technologies that improve durability, extend time between overhauls, and lower operating costs. It is optimized for sustainability, enabling lower emissions and supporting airlines’ goals for greener operations.",
          variants: [
           

          ],
           logo:productImages.PW127XT_9,
          defaultTabsData: [
            { title: "Platforms", content: [{ 
              image:productImages.PW127XT_P_1, 
                enginetext:"ATR 42/72-600",
                description: 'The ATR 42-600 seats up to 50 passengers and is known for its cost efficiency and ability to operate in challenging environments. The ATR 72-600 seats up to 78 passengers and offers exceptional fuel efficiency and low CO2 emissions. Both models are praised for their reliability, comfort, and versatility, making them ideal for connecting remote communities and smaller airports.'
               },{  
                   image:productImages.PW127XT_P_2, 
                enginetext:"Deutsche Aircraft D328eco",
                description: 'The Deutsche Aircraft D328eco is a modernized, eco-friendly version of the Dornier 328 turboprop, designed for regional air transport. It features advanced avionics, improved fuel efficiency, and lower emissions, making it a sustainable choice for short-haul flights. With seating for up to 43 passengers, the D328eco is optimized for performance on shorter runways and in challenging environments.'
               },
               ] },
            { title: "Specifications", content: [{image:productImages.flyingHours, description:"40% extended time on wing." },
                {image:productImages.PW210_S_1, description:"20% reduction in maintenance costs." },
                {image:productImages.fuelLogo, description:"03% improvement in fuel efficiency. " },

            ] },
            { title: "Highlights", content: [{   image:productImages.PW127XT_H_1,  enginetext: "Advanced Compressor and Turbine Technologies", description: "The engine features an increased-capacity low-pressure compressor and a high-efficiency high-pressure compressor, designed to maximize airflow and performance. A new high-pressure turbine module further enhances efficiency and durability, ensuring optimal engine operation." },
                {image:productImages.PW127XT_H_2, enginetext: "Enhanced Power and Durability", description: "An upgraded power turbine module delivers improved efficiency, while the new gas-generator case incorporates the latest design practices, including an enhanced oil distribution system for better reliability and longevity." },
                {image:productImages.PW127XT_H_3, enginetext: "Fuel Efficiency and Environmental Impact", description: "The engine's design optimizes propulsion efficiency, reducing fuel consumption over shorter sector lengths. It consumes up to 40% less fuel than regional jets, achieving an equivalent reduction in CO2 emissions for the missions it powers." },
               

            ] },
            { title: "Customers",   content: [
    { name: "Air Corsica", image: productImages.CorsicaAir } ,
    { name: "IndiGo", image: productImages.IndiGo } ,
    { name: "Deutsche Aircraft", image: productImages.DeutcheAir } ,
               
              ]  },
              // {
              //   title: "History",
              //   content: [
              //    {

              //        enginetext:"N/A",
              //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
              //      },
              //      {
              //        enginetext:"N/A",
              //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
              //      },
              //   ],
              // },
          ],

          gallery:[
            {img:productImages.PW127XT_9},
            {img:productImages.PW127XT_1},
            {img:productImages.PW127XT_2},
            {img:productImages.PW127XT_3},
            {img:productImages.PW127XT_4},
            {img:productImages.PW127XT_5},
            {img:productImages.PW127XT_6},
            {img:productImages.PW127XT_7},
            {img:productImages.PW127XT_8},
            {video:productImages.PW127XTV_1},
            {video:productImages.PW100_150V_1},
            {video:productImages.PW127XTV_2},
            {video:productImages.PW127XTV_3},
            {pdf:productImages.Reg_pdf_1},
            {pdf:productImages.Reg_pdf_2},
            {pdf:productImages.Reg_pdf_3},
          ]
      },
      "PW100/150":{
        title: "PW100/150",
        subTitle: "For PW India Experience Center",
        description:"The PW100/PW150 engine family sets the standard for low fuel consumption on routes of 350 miles or less, using 25% to 40% less fuel and cutting CO2 emissions by an equal amount compared to similar-sized regional jets. These engines are biofuel compatible. Trusted by airlines and governments, they offer reliability and versatility in challenging environments.",
        variants: [
         

        ],
         logo: productImages.PW100_150_1,
        defaultTabsData: [
          { title: "Platforms", content: [{ 
            image: productImages.PW127XT_P_1,
              enginetext:"ATR 42/72-600",
              description: 'The ATR 42-600 seats up to 50 passengers and is known for its cost efficiency and ability to operate in challenging environments. The ATR 72-600 seats up to 78 passengers and offers exceptional fuel efficiency and low CO2 emissions. Both models are praised for their reliability, comfort, and versatility, making them ideal for connecting remote communities and smaller airports.'
             },
             {  
               image: productImages.PW100_150_P_1,
              enginetext:"DeHavilland DASH 8-400",
              description: 'The DeHavilland DASH 8-400 is a popular regional airliner known for its versatility, efficiency, and reliability. The Dash 8-400 is a popular choice for airlines serving regional and short-haul routes, and it is also used for cargo and special missions.'
             },
             { 
                image: productImages.PW100_150_P_2, 
              enginetext:"Airbus Defence and Space C295",
              description: 'The Airbus Defence and Space C295 is a versatile, twin-engine tactical transport aircraft designed for military and civil applications. It features a robust, all-metal airframe and can operate from short and unpaved runways, making it suitable for various missions, including troop transport, medical evacuation, cargo airlift, and surveillance.'
             },
             {  
                image: productImages.PW100_150_P_3,
              enginetext:"Viking CL-415",
              description: 'The Viking CL-415 is a specialized amphibious aircraft primarily designed for aerial firefighting. Developed from the CL-215, the CL-415 features advanced technology, including modern engines and avionics, enhancing its performance and efficiency.'
             }
             ] },
          { title: "Specifications", content: [{image:productImages.PW210_S_1, description:"3,300+ aircraft powered. " },
              {image:productImages.Operators, description:"615 operators." },
              {image:productImages.flyingHours, description:"210M+ hours of flight." },
              {image:productImages.fuelLogo, description:"40% less fuel consumption." },

          ] },
          { title: "Highlights", content: [{image:productImages.PW100_150_H_1, enginetext: "Power to Perform, Reliably and Sustainably", description: "No other engine family in the regional market offers greater propulsion at takeoff and climb for short-haul regional aircraft. We have established our reputation on the reliability of our engines; for instance, the PW150A engine boasts a dispatch availability of over 99.96%. Our PW100 and PW150 engines collectively achieve four times more flight hours than the nearest competitor." },
              {image:productImages.PW100_150_H_2, enginetext: "Advanced Technology and Efficiency", description: "The PW100 engines leverage advanced technologies to meet and exceed customer expectations. PW100-powered regional turboprops consume 25% to 40% less fuel and produce an equal reduction in CO2 emissions compared to similarly sized jets." },
              {image:productImages.PW100_150_H_3, enginetext: "Product Range and Design", description: "We have produced 38 models of the PW100, with shaft horsepower ranging from 1,800 shp to 5,000 shp. The PW100 features a three-shaft, two-spool design, with low-pressure and high-pressure compressors driven independently by cooled turbine stages. A third shaft connects the power turbine to the propeller via a reduction gearbox, optimizing the efficiency of both the engine and propeller." },

          ] },
          { title: "Customers",   content: [
              { name: "IndiGo", image: productImages.IndiGo },
  { name: "SpiceJet", image: productImages.SpiceJet },
  { name: "Alliance Air", image: productImages.AllianceAir },
  { name: "Fly91", image: productImages.Fly91Air },
  { name: "Air Canada", image: productImages.CanadaAir },
  { name: "WestJet", image: productImages.WestJet },
  { name: "Alaska Airlines", image: productImages.Alaska },
  { name: "Indian Air Force", image: productImages.IndianAir },
  { name: "Spanish Air Force", image: productImages.SpanishAir },
  { name: "Brazilian Air Force", image: productImages.BarazilianAir },
  { name: "Egyptian Air Force", image: productImages.EgyptAir },
            // { category: "Commercial ", customers: [
            //     "IndiGo", "American Airlines", "SpiceJet ", "Alliance Air", "Fly91","Air Canada","WestJet","Alaska Airlines","QantasLink"
            // ]},
            // { category: "Military",  customers: [
            //   "Indian Air Force",
            //   "Spanish Air Force",
              
            // ],},
           
            
          ]  },
            // {
            //   title: "History",
            //   content: [
            //    {

            //        enginetext:"N/A",
            //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
            //      },
            //      {
            //        enginetext:"N/A",
            //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
            //      },
            //   ],
            // },
        ],
        gallery:[
          {img:productImages.PW100_150_1},
          {img:productImages.PW100_150_2},
          {img:productImages.PW100_150_3},
          {img:productImages.PW100_150_5},
          {img:productImages.PW100_150_6},
          {img:productImages.PW100_150_7},
           {video:productImages.PW127XTV_1},
          {video:productImages.PW100_150V_1},
          {video:productImages.PW100_150V_2},
          {pdf:productImages.Reg_pdf_3},
          {pdf:productImages.Reg_pdf_4},
        ]
    },
  },
    military: {
      TF33: {
            title: "TF33",
            subTitle: "For PW India Experience Center",
            description:"The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine. Known for its decades of reliable performance, it has served both military and civilian applications with distinction.",
            variants: [
             

            ],
              logo:productImages.machine1,
             defaultTabsData: [
              { title: "Platforms", content: [{ 
                image:productImages.TF33_P_1, 
                  enginetext:"B-52 Bomber",
                  description: 'The B-52 Stratofortress is a long-range, subsonic strategic bomber developed by Boeing for the United States Air Force. Introduced in the 1950s, it has served as a key component of American air power, capable of carrying both conventional and nuclear weapons. With significant payload capacity and versatility, the B-52 continues to be relevant in modern military operations through various upgrades.'
                 },{  
                   image:productImages.TF33_P_2, 
                  enginetext:"E-3 AWACS",
                  description: 'The E-3 AWACS (Airborne Warning and Control System) is a military aircraft developed by Boeing for the United States Air Force. Equipped with a distinctive rotating radar dome, it provides comprehensive surveillance, command, and control capabilities, enabling it to detect and track airborne threats over vast distances.'
                 },
                 ] },
              { title: "Specifications", content: [{image:productImages.flyingHours, description:"72M+ flight hours on B-52 bombers." },
                  {image:productImages.TF33_S_1, description:"1,000 engines still in service with USAF. " },

              ] },
              { title: "Highlights", content: [{image:productImages.TF33_H_1, enginetext: "Proven & Dependable", description: "First flown 60 years ago, over 1,000 TF33 engines remain in service today, including with the U.S. Air Force and various global customers. Since its initial flight, the TF33 has amassed more than 72 million flight hours, primarily powering the B-52 bomber." },
                  {image:productImages.TF33_H_2, enginetext: "Strategic Deterrence", description: "Eight Pratt & Whitney TF33 engines power the B-52 Stratofortress, a long-range heavy bomber capable of high subsonic speeds and altitudes up to 50,000 feet. The B-52 can carry nuclear or precision-guided conventional munitions and features worldwide precision navigation. It excels in strategic attack, close-air support, air interdiction, offensive counter-air, and maritime operations. With aerial refueling, the B-52's range is limited only by crew endurance, boasting an unrefueled combat range of over 8,800 miles." },
                  {image:productImages.TF33_H_3, enginetext: "Committed to Sustaining the Fleet", description: "Pratt & Whitney has powered the B-52 bomber exclusively since its first flight in 1952, and we remain dedicated to providing propulsion solutions that ensure the B-52's mission capability for decades to come." },

              ] },
              { title: "Customers",   content: [
  { name: "United States Air Force", image:productImages.USAairforce},
  { name: "Royal Australian Air Force", image: productImages.RoyalAustralia},
                 
                ]  },
                // {
                //   title: "History",
                //   content: [
                //    {

                //        enginetext:"N/A",
                //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                //      },
                //      {
                //        enginetext:"N/A",
                //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                //      },
                //   ],
                // },
            ],
            gallery:[
              {img:productImages.machine1},
              {img:productImages.TF33_1},
              {img:productImages.TF33_2},
              {img:productImages.TF33_3},
              {img:productImages.TF33_4},
            ]
        },
        "PW4062/F139":{
          title: "PW4062/F139",
          subTitle: "For PW India Experience Center",
          description:"The PW4062-3, designated as the F139 by the U.S. Air Force, powers Boeing's KC-46A tanker for the Air Force's multi-mission operations. As the exclusive engine for the KC-46A, it delivers superior performance, agility, and flexibility for global combat missions. It is the latest model in the PW4000 94-inch high-thrust turbofan family.",
          variants: [
           

          ],
           logo:productImages.F139_2,
          defaultTabsData: [
            { title: "Platforms", content: [{  
              image:productImages.F139_P_1,
                enginetext:"KC-46 Pegasus",
                description: 'The KC-46 Pegasus is a multi-role aerial refueling tanker developed by Boeing for the U.S. Air Force. It provides in-flight refueling, cargo transport, and medical evacuation capabilities. Designed for global operations, the KC-46 features advanced avionics, defensive systems, and can refuel all U.S., allied, and coalition aircraft.'
               }
               ] },
            { title: "Specifications", content: [{image:productImages.F139_S_1, description:"60 operators worldwide depend on the same family of engines. " },
                {image:productImages.Thrust, description:"152M+ hours of commercial service. " },
                {image:productImages.V25_S_1, description:"62K pounds takeoff thrust for technical capability & value." },

            ] },
            { title: "Highlights", content: [{image:productImages.F139_H_1, enginetext: "Proven Performance", description: "The 94-inch fan versions of the PW4000 engine family have logged over 152 million hours in commercial service, demonstrating exceptional safety, reliability, and durability." },
                {image:productImages.F139_H_2, enginetext: "Enhanced Performance Retention", description: "A full annular low-pressure compressor exit bleed helps remove ingested material from the engine core, improving performance retention. The PW4062-3/F139 engine, rated at 62,000 pounds of thrust, offers the Air Force an ideal combination of value, technical performance, and maturity for the KC-46A." },
                {image:productImages.F139_H_3, enginetext: "Advanced Technology", description: "The PW4062-3/F139 engine features advanced, proven technologies like single-crystal superalloy materials, durable fan blades, and a Full-Authority Digital Electronic Control (FADEC) system. These innovations ensure high reliability, superior operating economics, and low fuel burn, along with enhanced maintenance diagnostics." },

            ] },
            { title: "Customers",   content: [
  { name: "United States Air Force", image: productImages.USAairforce },
  { name: "Japan Air Self-Defense Force ", image: productImages.JapanAir },
  { name: "Israel Defense Forces", image: productImages.IsraelAir },
                
              ]  },
              // {
              //   title: "History",
              //   content: [
              //    {

              //        enginetext:"N/A",
              //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
              //      },
              //      {
              //        enginetext:"N/A",
              //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
              //      },
              //   ],
              // },
          ],
          gallery:[
            {img:productImages.F139_1},
            {img:productImages.F139_2},
            {img:productImages.F139_3},
            {img:productImages.F139_4},
            {img:productImages.F139_5},
            {img:productImages.F139_6},
            {img:productImages.F139_7},
            {pdf:productImages.Mil_pdf_1},
          ]
      },
      F135:{
        title: "F135",
        subTitle: "For PW India Experience Center",
        description:"The F135 engine, with over 40,000 lbs of thrust, unmatched low-observable signature, and advanced thermal management, powers the F-35. It is the most powerful and advanced fighter engine ever produced, offering significant improvements in readiness and reliability over fourth-generation engines. The F135 enables exceptional performance for warfighters in advanced threat environments, expanding operational possibilities for their missions.",
        variants: [
         
        ],
       logo:productImages.F135_0,
        defaultTabsData: [
          { title: "Platforms", content: [{ 
            image:productImages.F135_P_1, 
              enginetext:"F-35 Lightning II A ",
              description: 'The F-35 Lightning II is a family of stealth multirole fighters designed for a range of combat missions. The F-35A is the conventional takeoff and landing variant, primarily intended for the U.S. Air Force, featuring advanced avionics, sensor fusion, and networked warfare capabilities. It is equipped with a single engine and can operate from traditional airbases, emphasizing agility and versatility.'
             },
             {  
                 image:productImages.F135_P_2, 
              enginetext:"F-35 Lightning II B ",
              description: 'The F-35 Lightning II B is a variant of the F-35 designed for the U.S. Marine Corps and other military forces that require short takeoff and vertical landing (STOVL) capabilities. It features a unique lift fan system and a swiveling rear nozzle that allow it to take off from shorter runways and land vertically, making it ideal for operations from amphibious assault ships and other limited-space environments.'
             },
             {  
                 image:productImages.F135_P_3, 
              enginetext:"F-35 Lightning II C",
              description: 'The F-35 Lightning II C is the carrier-based variant of the F-35, specifically designed for the U.S. Navy. It features larger wings and a stronger airframe, allowing for improved fuel capacity and enhanced stability during carrier operations. Its design includes reinforced landing gear for the stresses of landing on aircraft carriers and an improved tailhook for recovery on naval vessels.'
             }
             ] },
          { title: "Specifications", content: [{image:productImages.F135_S_1, description:"40K+ pounds of thrust. " },
              {image:productImages.F135_S_2, description:"5th generation stealth technologies. " },
              {image:productImages.F135_S_3, description:"50% increase in thermal management capacity over 4th generation engines. " },
              {image:productImages.F135_S_2, description:"1,200+ engines delivered in total. " },
              {image:productImages.F135_S_4, description:"14 services flying." },

          ] },
          { title: "Highlights", content: [{   image:productImages.F135_H_1,  enginetext: "Engineering Excellence", description: "Evolving from the combat-proven F119 engine that powers the F-22 Raptor, the F135 represents the pinnacle of modern propulsion engineering. Built on decades of expertise, the F135 integrates adaptive, maintenance-friendly design with exotic materials and advanced manufacturing processes to deliver exceptional combat performance." },
              {image:productImages.F135_H_2,  enginetext: "Commitment to Innovation", description: "The F135 reflects our dedication to continuous improvement. Designed to adapt to evolving operational environments and advancing threats, its modular architecture and digital framework support agile upgrades. The F135 Engine Core Upgrade (ECU) incorporates next-generation adaptive propulsion technologies, providing increased thrust, fuel efficiency, and enhanced thermal management to keep the F-35 weapon system ahead of future challenges." },
              {image:productImages.F135_H_3,  enginetext: "Global Sustainment", description: "The F135 and ECU are supported by a robust global sustainment network that ensures fleet readiness for the F-35. With over 60% commonality between the F135 and ECU, retrofitting the ECU onto F-35A, F-35B, or F-35C aircraft is streamlined for both the U.S. and allied forces. As geopolitical tensions rise, leveraging this mature sustainment network will be crucial to maintaining warfighter readiness, especially in contested environments." },

          ] },
          { title: "Customers",   content: [
  { name: "United States Air Force (USAF)", image: productImages.UnitedAir },
  { name: "United States Navy (USN)", image: productImages.USN },
  { name: "United States Marine Corps (USMC)", image: productImages.USMC },
  { name: "Royal Air Force (RAF)", image: productImages.RoyalAir },
  { name: "Royal Navy (RN)", image: productImages.RoyalNavy },
  { name: "Israeli Air Force (IAF)", image: productImages.IsraelAir },
  { name: "Italian Air Force (Aeronautica Militare)", image: productImages.ItalianAir },
  { name: "Norwegian Air Force", image: productImages.NorwAir },
  { name: "Netherlands Air Force", image: productImages.NetherlandAir },
  { name: "Japanese Air Self-Defense Force (JASDF)", image: productImages.JapanAir },
  { name: "South Korean Air Force", image: productImages.SothKoreanAir },
              // { customers: [
              //     "United States Air Force (USAF)", "United States Navy (USN)","United States Marine Corps (USMC)","Royal Air Force (RAF)","Royal Navy (RN)","Israeli Air Force (IAF)","Italian Air Force (Aeronautica Militare)","Norwegian Air Force","Netherlands Air Force","Japanese Air Self-Defense Force (JASDF)","South Korean Air Force"
              // ]}
            ]  },
            // {
            //   title: "History",
            //   content: [
            //    {

            //        enginetext:"N/A",
            //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
            //      },
            //      {
            //        enginetext:"N/A",
            //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
            //      },
            //   ],
            // },
        ],

        gallery:[
          {img:productImages.F135_0},
          {img:productImages.F135_1},
          {img:productImages.F135_2},
          {img:productImages.F135_3},
          {img:productImages.F135_4},
          {img:productImages.F135_5},
          {img:productImages.F135_6},
          {img:productImages.F135_7},
          {img:productImages.F135_8},
          {img:productImages.F135_9},
        ]
    },
    F119:{
      title: "F119",
      subTitle: "For PW India Experience Center",
      description:"Pratt & Whitney’s F119 turbofan engine is the world’s first fifth-generation fighter engine. It integrates stealth technologies with vectored thrust, delivering exceptional maneuverability and survivability alongside a high thrust-to-weight ratio. The F-22’s capability to supercruise—operate supersonically without afterburner—enhances its combat performance while maintaining mission range.",
      variants: [

      ],
      logo:productImages.F119_1,
      defaultTabsData: [
        { title: "Platforms", content: [{  
          image:productImages.F119_P_1,
            enginetext:"F-22",
            description: 'The F-22 Raptor is a fifth-generation, twin-engine stealth fighter developed by Lockheed Martin for the U.S. Air Force. It excels in air superiority with advanced stealth, supercruise capability, and unmatched agility, making it one of the most technologically advanced fighter aircraft in the world.'
           },
          
           ] },
        { title: "Specifications", content: [{image:productImages.F135_S_1, description:"35K pounds of thrust. " },
            {image:productImages.F135_S_4, description:"2D pitch vectoring." },
            {image:productImages.F135_S_3, description:"40% fewer parts than its F100 predecessor." },
          

        ] },
        { title: "Highlights", content: [{image:productImages.F119_H_1, enginetext: "Advanced Technologies", description: "The F119 engine combines advanced technologies for exceptional performance and reliability. It features a three-stage integrally bladed fan powered by a single-stage low-pressure turbine and a compact high-pressure compressor with advanced aerodynamics and integrally bladed rotor disks for durability. Its counter-rotating core includes a six-stage compressor driven by a high-pressure turbine with single-crystal superalloy blades and advanced cooling technologies. The two-dimensional pitch-vectoring exhaust nozzle enhances aircraft maneuverability." },
            {image:productImages.F119_H_2, enginetext: "Safety Record", description: "Since its introduction, the F119 engine has maintained a best-in-class safety record, consistently outperforming legacy engine benchmarks." },
            {image:productImages.F119_H_3, enginetext: "Team Collaboration", description: "The development of the F119 involved a balanced team approach that included assemblers and flight line mechanics from its inception. This collaborative effort significantly reduced the requirements for support equipment and labor, thereby minimizing the overall logistics footprint of the F119." },

        ] },
        { title: "Customers",   content: [
  { name: "United States Air Force (USAF)", image: productImages.USArmy },
            
          ]  },
          // {
          //   title: "History",
          //   content: [
          //    {

          //        enginetext:"N/A",
          //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
          //      },
          //      {
          //        enginetext:"N/A",
          //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
          //      },
          //   ],
          // },
      ],
      gallery:[
        {img:productImages.F119_1},
        {img:productImages.F119_2},
        {img:productImages.F119_3},
        {img:productImages.F119_4},
        {img:productImages.F119_5},
      ]
  },
  F100:{
    title: "F100",
    subTitle: "For PW India Experience Center",
    description:"The Pratt & Whitney F100 is a high-performance afterburning turbofan engine designed for supersonic fighter jets, primarily the F-15 Eagle and F-16 Fighting Falcon. It provides both high thrust and fuel efficiency, enabling superior acceleration, speed, and maneuverability. The F100 has undergone multiple upgrades to improve reliability, durability, and performance, making it a key component in modern air combat operations.",
    variants: [
   
    ],
     logo:productImages.F100_2,
    defaultTabsData: [
      { title: "Platforms", content: [{ 
        image:productImages.F100_P_1, 
          enginetext:"F-15",
          description: 'The F-15 Eagle is a twin-engine, all-weather tactical fighter jet developed by McDonnell Douglas (now Boeing) for air superiority missions. Known for its exceptional speed, agility, and powerful radar, the F-15 has an unmatched combat record. It is capable of reaching speeds above Mach 2.5 and can carry a wide range of weapons, including missiles and bombs, making it a dominant force in both air-to-air and air-to-ground operations.'
         },
         {  
          image:productImages.F100_P_2,
          enginetext:"F-16",
          description: 'The F-16 Fighting Falcon is a single-engine, multi-role fighter jet. it excels in both air-to-air combat and air-to-ground attacks. Known for its agility, advanced avionics, and high maneuverability, the F-16 is capable of supersonic speeds and can carry a wide range of weapons.'
         },
        
         ] },
      { title: "Specifications", content: [{image:productImages.F139_S_1, description:"23 Air Forces powered." },
          {image:productImages.F100_S_flight, description:"30M+ flight hours." },
          {image:productImages.TF33_S_1, description:"97% maintenance tasks can be done at base level." },
          {image:productImages.F135_S_1, description:"29K pounds of thrust." },
        

      ] },
      { title: "Highlights", content: [{image:productImages.F100_H_1, enginetext: "Reliability and Safety", description: "The F100 delivers industry-leading reliability and safety, instilling confidence in warfighters that the engine will perform consistently. This dependable performance enables mission completion and ensures safe return home every time. With over 30 million flight hours—the highest of any fourth-generation fighter engine—and utilized by 23 air forces worldwide, the F100 stands as the most trusted and experienced propulsion solution in existence." },
          {image:productImages.F100_H_2,  enginetext: "Performance and Capability", description: "The F100 showcases superior overall capability, characterized by predictable performance, making it truly a pilot’s engine. It boasts an impressive combat record of 165 victories and no losses in air-to-air engagements involving F-15s and F-16s powered by the F100." },
          {image:productImages.F100_H_3,  enginetext: "Commitment to Excellence", description: "Pratt & Whitney is dedicated to delivering the best performance and value in a fourth-generation fighter engine. With F100 engines rolling off our production line, we are actively working to fulfill a robust backlog of new engine orders, reinforcing our commitment to excellence in military aviation." },

      ] },
      { title: "Customers",   content: [
  { name: "United States Air Force", image: productImages.USAairforce },
  { name: "Royal Saudi Air Force", image: productImages.RoyalSaudiAir },
  { name: "Republic of Korea Air Force", image: productImages.korean },
  { name: "Polish Air Force", image: productImages.PolishAir },
  { name: "Singapore Air Force", image: productImages.gtf },
  { name: "Israeli Air Force", image: productImages.IsraelAir },
    
        ]  },
        // {
        //   title: "History",
        //   content: [
        //    {

        //        enginetext:"N/A",
        //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
        //      },
        //      {
        //        enginetext:"N/A",
        //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
        //      },
        //   ],
        // },
    ],
    gallery:[
      {img:productImages.F100_1},
      {img:productImages.F100_2},
      {img:productImages.F100_3},
      {img:productImages.F100_4},
      {img:productImages.F100_5},
      {img:productImages.F100_6},
      {img:productImages.F100_7},
      {video:productImages.F100V_1},
      {pdf:productImages.Mil_pdf_4},
   
    ]
},
F117:{
  title: "F117",
  subTitle: "For PW India Experience Center",
  description:"Pratt & Whitney's F117-PW-100 engine is part of the PW2000 family of commercial engines and is certified to deliver 40,440 pounds of thrust. It has been chosen by the U.S. Air Force as the exclusive engine for the C-17 Globemaster III, a state-of-the-art four-engine transport aircraft. The F117 features a directed-flow thrust reverser that can be deployed in flight and enables a fully loaded aircraft to back up a two-degree slope on the ground.",
  variants: [

  ],
  logo:productImages.F117_1,
      defaultTabsData: [
        { title: "Platforms", content: [{  
          image:productImages.F117_P_1,
            enginetext:"C-17 Globemaster III-22",
            description: 'The C-17 Globemaster III is a large military transport aircraft designed for rapid strategic airlift of troops and cargo. With the ability to operate in austere environments, the C-17 can carry oversized cargo and is known for its advanced avionics and capabilities for airdrops and medical evacuations.'
           },
          
           ] },
        { title: "Specifications", content: [{image:productImages.worldRecord, description:"22 world records set during C-17 qualification testing. " },
            {image:productImages.F135_S_1, description:"40.4K pounds of thrust. " },
            {image:productImages.Thrust, description:"18M+ flight hours. " },
            {image:productImages.fuelLogo, description:"~1.3% Fuel Burn Reduction (with Performance Improvement Package)" },
          

        ] },
        { title: "Highlights", content: [{image:productImages.F117_H_1, enginetext: "Reliability", description: "Pratt & Whitney's F117 engines have logged over 18 million flight hours in military and humanitarian missions worldwide. In an ever-changing geopolitical landscape, the F117-powered C-17 is equipped for various operations, including airlift missions, humanitarian aid, and combat airdrops in unsecured locations." },
            {image:productImages.F117_H_2, enginetext: "Dependability", description: "Each C-17 Globemaster III is powered by four F117 engines, known for their reliability in military service. Continuous investments in product improvements have enabled the engine to exceed benchmarks for time on-wing, in-flight shutdowns, and reduced turnaround times." },
            {image:productImages.F117_H_3, enginetext: "System Availability", description: "The Full-Authority Digital Electronic Control (FADEC) system ensures high operational performance, low fuel consumption, and excellent maintenance diagnostics. The F117 engine maintains the PW2000 family’s reputation as a leader in midrange-thrust engines. The latest reduced temperature configuration (RTC) incorporates advancements like second-generation single-crystal turbine materials and improved cooling management to lower operating temperatures, enhancing the F117's reliability and durability." },

        ] },
        { title: "Customers",   content: [
  { name: "Indian Air Force", image: productImages.IndianAir },
  { name: "United States Air Force", image: productImages.USAairforce },
  { name: "Royal Australian Air Force", image: productImages.RoyalAustralia },
  { name: "Royal Canadian Air Force", image: productImages.CanadaAir },
  { name: "Royal Air Force", image: productImages.RoyalAir },
      
          ]  },
        
      ],
       gallery:[
      {img:productImages.F117_1},
      {img:productImages.F117_2},
      {img:productImages.F117_3},
      {img:productImages.F117_4},
      {img:productImages.F117_5},
    {pdf:productImages.Mil_pdf_2},
    {pdf:productImages.Mil_pdf_3},
    ]
},
       
    },
    helicopter: {
      PW210: {
            title: "PW210",
            subTitle: "For PW India Experience Center",
            description:"The PW210 engine is redefining the future of helicopters in the 1,100-shaft horsepower class, delivering exceptional performance. As the core of a new generation of helicopters, it offers significant advancements in fuel efficiency, power-to-weight ratio, environmental emissions, and operating costs. The PW210 upholds Pratt & Whitney's long-standing reputation for durability and reliability, setting a new standard in helicopter propulsion..",
            variants: [
             
  
            ],
            logo:productImages.Hel_PW210_1,
            defaultTabsData: [
              { title: "Platforms", content: [{  
                image:productImages.Hel_PW210_P_1,
                  enginetext:"Sikorsky S-76D",
                  description: 'An upgraded version of the S-76 series, this helicopter is employed for offshore oil transport, executive travel, and search and rescue operations.'
                 },{ 
                  image:productImages.Hel_PW210_P_2, 
                  enginetext:"Leonardo AW169",
                  description: 'A multi-role helicopter that excels in utility, emergency medical services, and law enforcement applications. It offers a modern cockpit with advanced avionics and a spacious cabin for up to 10 passengers.'
                 },
                 ] },
              { title: "Specifications", content: [{image:productImages.PW210_S_1, description:"1,100 shaft horsepower class." },
                  {image:productImages.PW2_fadec, description:"Dual Channel FADEC (Full Authority Digital Engine Control)" },
                  {image:productImages.Hel_PW210_S_1, description:"Two-stage compressor. " },
                  {image:productImages.Hel_PW210_S_2, description:"Low fuel consumption. " },
                  {image:productImages.Hel_PW210_S_3, description:"Low environmental emissions. " },
  
              ] },
              { title: "Highlights", content: [{image:productImages.Hel_PW210_H_1, enginetext: "Engineered Efficiency", description: "The PW210 combines low fuel consumption, lightweight design, compact architecture, reduced emissions, and minimal maintenance. Built to handle any challenge, it leads its class in power-to-weight ratio and fuel efficiency, delivering exceptional payload, range, and overall customer value." },
                  {image:productImages.Hel_PW210_H_2, enginetext: "Streamlined Design", description: "With just five major rotating components, the PW210 features a two-stage compressor, single-stage turbine, and reverse-flow combustor. Its integrated reduction and accessory gearboxes create a compact, efficient system." },
                  {image:productImages.Hel_PW210_H_3, enginetext: "Advanced Controls", description: "The dual-channel Full Authority Digital Engine Control (FADEC) simplifies operation, reduces pilot workload, and improves maintenance diagnostics." },
                  {image:productImages.Hel_PW210_H_4, enginetext: "Maximum Uptime", description: "Designed for minimal maintenance, the PW210 offers a 4,000-hour Time Before Overhaul, no scheduled oil changes, and easy access for compressor washes. Maintenance is supported by Pratt & Whitney’s Spotlight™ diagnostic tool, ensuring reduced downtime and more efficient repairs." },
  
              ] },
              { title: "Customers",   content: [
   { name: "Sikorsky", image: productImages.Sikorsky } ,
   { name: "Leonardo", image: productImages.leonardo } ,
                  
                ]  },
                // {
                //   title: "History",
                //   content: [
                //    {
  
                //        enginetext:"N/A",
                //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                //      },
                //      {
                //        enginetext:"N/A",
                //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                //      },
                //   ],
                // },
            ],
            gallery:[
              {img:productImages.Hel_PW210_1},
              {img:productImages.Hel_PW210_2},
              {img:productImages.Hel_PW210_3},
              {img:productImages.Hel_PW210_4},
              {pdf:productImages.Hel_pdf_1},
              {pdf:productImages.Hel_pdf_2},
            ]
        },
        PW200:{
          title: "PW200",
          subTitle: "For PW India Experience Center",
          description:"The PW200 engine family is the leading choice in the 500 to 700 shaft horsepower class for light-twin helicopters, recognized for its rugged dependability and outstanding operating economics. It powers the majority of the world’s light-twin helicopters and has set the standard in its category. As the engine of choice for the new generation of light-twin helicopters, the PW200 has secured a dominant share of global sales, outperforming competitors with its unmatched reliability and cost efficiency.",
          variants: [
           
  
          ],
          logo:productImages.Hel_PW200_1,
          defaultTabsData: [
            { title: "Platforms", content: [{  
                image:productImages.gtf,
                enginetext:"AgustaWestland AW109	",
                description: 'A versatile light twin-engine helicopter used for medical transport, law enforcement, and corporate travel, known for its speed and agility.'
               },
               {  
                image:productImages.Hel_PW200_P_1,
                enginetext:"Bell 429",
                description: 'A modern twin-engine helicopter designed for various missions, including EMS and law enforcement, featuring advanced avionics and a spacious cabin.'
               },
               {  
                  image:productImages.gtf,
                enginetext:"Eurocopter EC135",
                description: 'A popular light twin-engine helicopter utilized in emergency medical services and law enforcement, recognized for its low noise and excellent performance.'
               },
               {  
                image:productImages.Hel_PW200_P_2,
                enginetext:"MD Helicopters MD Explorer",
                description: 'A flexible helicopter suitable for utility and law enforcement missions, offering a spacious cabin and high-performance capabilities.'
               }
               
               ] },
            { title: "Specifications", content: [
                {image:productImages.PW210_S_1, description:"500 shp to over 700 shp. " },
                {image:productImages.Hel_PW210_S_1, description:"5,600+ engines produced." },
                {image:productImages.Operators, description:"869 operators in 86 countries." },
                {image:productImages.flyingHours, description:"13.6M+ flying hours." },
  
            ] },
            { title: "Highlights", content: [{image:productImages.Hel_PW200_H_1, enginetext: "Design Simplicity and Efficiency", description: "The PW200 features a straightforward design with only three major rotating components and a modular structure for easy maintenance. Its single-stage centrifugal compressor, driven by a single-stage turbine, powers a free single-stage power turbine through a PT6-style reverse flow combustor." },
                {image:productImages.Hel_PW200_H_2, enginetext: "Compact Power Generation", description: "The power turbine drives the output shaft via a front-mounted reduction gearbox. The integration of the reduction and engine accessory gearboxes ensures a compact design, ideal for light-twin helicopters." },
                {image:productImages.Hel_PW200_H_3, enginetext: "Key Market Advantages", description: "With low fuel consumption, light weight, compact architecture, and minimal environmental impact, the PW200 offers reduced maintenance and operational costs, securing its strong market position." },
  
            ] },
            { title: "Customers",   content: [
                 { name: "Airbus Helicopters", image:productImages. Airbus } ,
                 { name: "Bell Helicopter", image:productImages.Hel_PW200_P_1  } ,
                 { name: "MD Helicopters", image:productImages. Hel_PW200_P_2 } ,
                   
            ]  },
              // {
              //   title: "History",
              //   content: [
              //    {
  
              //        enginetext:"N/A",
              //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
              //      },
              //      {
              //        enginetext:"N/A",
              //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
              //      },
              //   ],
              // },
          ],
          gallery:[{img:productImages.Hel_PW200_1},
            {img:productImages.Hel_PW200_2},
            {img:productImages.Hel_PW200_3},
            {img:productImages.Hel_PW200_4},
            {img:productImages.Hel_PW200_5},
          ]
      },
      PT6T:{
        title: "PT6T",
        subTitle: "For PW India Experience Center",
        description:"Known for its reliability, durability, and versatility, the PT6T is used in a range of medium-lift helicopters, particularly in civil and military applications. Its modular design simplifies maintenance and improves operational efficiency, while the turboshaft configuration delivers dependable power.",
        variants: [
         

        ],
          logo:productImages.PT6T_1,
        defaultTabsData: [
          { title: "Platforms", content: [ {
            image:productImages.PT6T_P_1,
            enginetext: "Bell 212",
            description:
              "A twin-engine utility helicopter known for its versatility in various roles, including transport, medevac, and firefighting.",
          },
          {
                image:productImages.PT6T_P_2,
            enginetext: "Bell 412",
            description:
              "An upgraded version of the Bell 212, the Bell 412 features a four-blade rotor system and improved avionics. It is widely used for search and rescue, law enforcement, and offshore transport.",
          },
          {
                image:productImages.PT6T_P_3,
            enginetext: "Bell AH-1 SeaCobra",
            description:
              "A dedicated attack helicopter used by the U.S. military, the AH-1 SeaCobra utilizes the PT6T engine to enhance its agility and speed during combat operations.",
          },
          {
                image:productImages.PT6T_P_4,
            enginetext: "Bell CH-146 Griffon",
            description:
              "A utility helicopter used by the Canadian Forces, this model is equipped with the PT6T engine for various missions including transport and reconnaissance.",
          },
          {
                image:productImages.PT6T_P_5,
            enginetext: "Bell 309",
            description:
              "Known as the Bell 309 King Cobra, this helicopter is designed for attack missions and features advanced avionics along with the PT6T engine to improve flight performance.",
          },
             ] },
          { title: "Specifications", content: [{image:productImages.PW210_S_1, description:"1,800 to 2,000 shaft-horsepower " },
              {image:productImages.Hel_PW210_S_1, description:"11 models for various requirements. " },
              {image:productImages.V25_S_1, description:"Twin power section with a combining gearbox. " },
              {image:productImages.PW2_fadec, description:"Electronic Engine Control (EEC) on some engine models." },


          ] },
          { title: "Highlights", content: [   {
            image:productImages.PT6T_H_1,
            enginetext: "Power and Performance",
            description:
              "The Pratt & Whitney PT6T engine delivers between 1,800 and 2,200 shaft horsepower, benefiting from the latest aerodynamic and material technologies. These advancements allow for increased power without a significant size increase, enhancing the engine's overall efficiency.",
          },
          {
            image:productImages.PT6T_H_2,
            enginetext: "Engine Control",
            description:
              "Some PT6T models feature Electronic Engine Control (EEC), improving ease of operation and optimizing engine performance.",
          },
          {
            image:productImages.PT6T_H_3,
            enginetext: "Design and Configuration",
            description:
              "The PT6T consists of two PT6A power sections connected to a combining gearbox with an innovative clutch system, allowing for both twin and single-engine operation. The power section uses a two-shaft configuration with a multi-stage compressor and a single-stage compressor turbine.",
          },
          {
            image:productImages.PT6T_H_4,
            enginetext: "Proven Reliability",
            description:
              "Originally based on the PT6A-34 turboprop used in airlines, the PT6T carries forward airline-level reliability, making it a dependable choice for helicopter applications.",
          },
          ] },
          { title: "Customers",   content: [
               { name: "AgustaWestland", image: productImages.Augusta } ,
                 { name: "Bell Helicopter", image:productImages.Hel_PW200_P_1  } ,
                 { name: "Sikorsky", image:productImages.Sikorsky  } ,
                 { name: "United States Military", image:productImages.USAairforce  } ,
                 { name: "Canadian Armed Forces", image:productImages.CanadaAir  } ,
                 { name: "Royal Australian Navy", image:productImages.RoyalAustralia  } ,
                 { name: "NATO", image:productImages.NATO  } ,
                  
          ]  },
            // {
            //   title: "History",
            //   content: [
            //    {

            //        enginetext:"N/A",
            //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
            //      },
            //      {
            //        enginetext:"N/A",
            //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
            //      },
            //   ],
            // },
        ],
        gallery:[
          {img:productImages.PT6T_1},
          {img:productImages.PT6T_2},
          {img:productImages.PT6T_3},
          {img:productImages.PT6T_4},
          {img:productImages.PT6T_5},
          {img:productImages.PT6T_6},
          {img:productImages.PT6T_7},
          {video:productImages.PT6TV_1},
        ]
    },
    PT6C:{
      title: "PT6C",
      subTitle: "For PW India Experience Center",
      description:"The Pratt & Whitney PT6C is a powerful turboshaft engine designed for medium- to heavy-lift helicopters. It features a compact, lightweight design, making it well-suited for demanding missions, including offshore transport, emergency medical services, and military operations.",
      variants: [
       

      ],
      logo:productImages.PT6C_1,
      defaultTabsData: [
        { title: "Platforms", content: [ {
          image:productImages.PT6C_P_1,
          enginetext: "AgustaWestland AW139	",
          description:
            "A medium twin-engine helicopter designed for various roles, including search and rescue, offshore transport, and VIP transport.",
        },
        {
           image:productImages.PT6C_P_2,
          enginetext: "AgustaWestland AW609",
          description:
            "A tiltrotor aircraft that combines the vertical lift capabilities of a helicopter with the speed and range of a fixed-wing aircraft.",
        },
        {
           image:productImages.PT6C_P_3,
          enginetext: "Airbus Helicopters H175",
          description:
            "A medium twin-engine helicopter used for offshore oil and gas operations, search and rescue, and passenger transport.",
        },
        {
           image:productImages.PT6C_P_4,
          enginetext: "Sikorsky S-76B",
          description:
            "A versatile twin-engine helicopter primarily used for executive transport, offshore oil support, and search and rescue missions..",
        },
           ] },
        { title: "Specifications", content: [{image:productImages.PW210_S_1, description:"1,600 to 2,000 shaft-horsepower class" },
            {image:productImages.PW2_fadec, description:"FADEC & EEC equipped." },
            {image:productImages.Hel_PW210_S_1, description:"Two-stage forward facing output for fast hot section refurbishment. " },


        ] },
        { title: "Highlights", content: [      {
           image:productImages.PT6C_H_1,
          enginetext: "Engine Configuration",
          description:
            "The PT6C features a two-shaft layout with a multi-stage compressor driven by a single-stage compressor turbine. An independent shaft couples the power turbine to the output shaft, staying true to the PT6's basic design.",
        },
        {
          image:productImages.PT6C_H_2,
          enginetext: "Advanced Technology",
          description:
            "Incorporating the latest in compressor, combustion, and turbine technologies, the PT6C delivers an excellent power-to-weight ratio with low fuel consumption, reduced emissions, and high durability.",
        },
        {
          image:productImages.PT6C_H_3,
          enginetext: "Engine Control",
          description:
            "With modern control systems, including Electronic Engine Control (EEC) and Dual Channel Full Authority Digital Engine Control (FADEC), the PT6C simplifies pilot operation and improves maintenance diagnostics, extending engine service intervals.",
        },
        ] },
        { title: "Customers",   content: [
            { name: "AgustaWestland", image: productImages.Augusta } ,
                 { name: "Airbus  Helicopters", image:productImages.Airbus  } ,
                 { name: "Sikorsky", image:productImages.Sikorsky  } ,
                 { name: "U.S. Army", image:productImages.USArmy  } ,
                 { name: "Canadian Armed Forces", image:productImages.CanadaArmy  } ,
                 { name: "NATO", image:productImages.NATO  } ,
              
        ]  },
          // {
          //   title: "History",
          //   content: [
          //    {

          //        enginetext:"N/A",
          //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
          //      },
          //      {
          //        enginetext:"N/A",
          //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
          //      },
          //   ],
          // },
      ],
       gallery:[
           {img:productImages.PT6C_1},
          {img:productImages.PT6C_2},
          {img:productImages.PT6C_3},
          {img:productImages.PT6C_4},
          {img:productImages.PT6C_5},
          {img:productImages.PT6C_6},
          {img:productImages.PT6C_7},
          {img:productImages.PT6C_8},
          {img:productImages.PT6C_9},
          {img:productImages.PT6C_10},
          {img:productImages.PT6C_11},
            {pdf:productImages.Hel_pdf_2},
        ]
  },
    },
    general: {
      "PT6 E-Series": {
            title: "PW210",
            subTitle: "For PW India Experience Center",
            description:"In service, worldwide, the PT6 E-Series™ engine family continues to raise the bar in engine performance, control systems, data intelligence and service solutions. The E-Series provides better fuel efficiency, improved maintenance intervals, and optimized performance through real-time data monitoring.",
            variants: [
              { img: productImages.PT6E_66XT, title: "PT6E-66XT", 
                tabsData: [
                  { title: "Platforms", content: [{  
                    image:productImages.PW210_P_1,
                      enginetext:"Daher TBM 960",
                      description: 'The TBM 960 is a high-performance single-engine turboprop designed for speed and efficiency. This aircraft is known for its advanced avionics and eco-conscious power management, making it suitable for both business and leisure flights.'
                     }] },
                  { title: "Specifications", content: [{image:productImages.fanDiameter, description:"81” fan diameter. " },
                      {image:productImages.PW210_S_3, description:"43% longer time between overhaul intervals: 5,000 hours." },
                      {image:productImages.PW210_S_1, description:"40% reduction line maintenance." },
                      {image:productImages.PW210_S_2, description:"50% engine minor interval increase: 300 hours Flexible on-condition HSI." },
                      {image:productImages.PT6E_66XT_S1, description:"100+ smart data inputs. " },
              
                  ]},
                  { title: "Highlights", content: [ {
                    image:productImages.PW210_H_4,
                    enginetext: "Precision and Performance",
                    description:
                      "The PT6E-66XT engine combines digital intelligence with optimized power, speed, and fuel efficiency, delivering a seamless flying experience. With auto engine start/stop, single-lever operation, and full digital envelope protection, it ensures precise and predictable control, along with more power and quieter operation at lower propeller RPM.",
                  },
                  {
                       image:productImages.PW210_H_1,
                    enginetext: "Increased Uptime",
                    description:
                      "Enhanced design and digital capabilities extend the engine's time on wing, minimizing maintenance and maximizing flying time. Full-flight data is accessible across multiple platforms, including mobile devices, for streamlined monitoring and diagnostics.",
                  },
                  {
                    image:productImages.PW210_H_2,
                    enginetext: "Optimized Power Delivery",
                    description:
                      "The PT6E-66XT engine continuously adjusts power output throughout the flight, ensuring optimal performance at every phase.",
                  },
                  ] },
                  { title: "Customers",   content: [
              { name: "Daher", image:productImages.Daher } ,
                      
                    ]  },
                    // {
                    //   title: "History",
                    //   content: [
                    //    {
  
                    //        enginetext:"N/A",
                    //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                    //      },
                    //      {
                    //        enginetext:"N/A",
                    //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                    //      },
                    //   ],
                    // },
                ],
              },
              { img: productImages.PT6E_66XP, title: "PT6E-67XP",
                tabsData: [
                  { title: "Platforms", content: [{ 
                      image:productImages.PW210_P_2, 
                      enginetext:"Pilatus PC-12 NGX",
                      description: 'The PC-12 NGX is a versatile single-engine turboprop that combines performance with comfort. The aircraft is designed for various missions, including cargo transport and passenger flights, and features advanced digital engine controls for improved operational efficiency.'
                     }] },
                  { title: "Specifications", content: [{image:productImages.fanDiameter, description:"81” fan diameter. " },
                      {image:productImages.PW210_S_1, description:"2x longer maintenance intervals: 600 hours." },
                      {image:productImages.PW210_S_3, description:"43% longer TBO intervals: 5,000 hours." },
                      {image:productImages.PW210_S_2, description:"40% reduction in scheduled maintenance." },
                      { description:"15% lower operating costs with ESP™ Platinum. " },
              
                  ]},
                  { title: "Highlights", content: [     {
                    image:productImages.PT6E_66XP_H1,
                    enginetext: "Simplified Flying Experience",
                    description:
                      "The PT6E-67XP engine streamlines flight operations, allowing you to focus on your surroundings and enjoy a more intuitive flying experience. Features like auto-start with a push button, single-lever operation, and integrated electronic control for both the engine and propeller make managing the aircraft easier than ever. It is also digital auto-throttle ready with digital propeller speed management.",
                  },
                  {
                     image:productImages.PT6E_66XP_H2,
                    enginetext: "Enhanced Control and Safety",
                    description:
                      "The PT6E-67XP offers precise, predictable power with dual independent control systems. The Electronic Engine Control (EEC) continuously monitors engine and aircraft data, optimizing power delivery throughout the flight for enhanced safety and performance.",
                  },
                  {
                     image:productImages.PT6E_66XP_H3,
                    enginetext: "Data-Driven Insights",
                    description:
                      "Engine data is wirelessly downloaded after landing, providing valuable insights into performance and health. This supports informed decision-making and proactive maintenance.",
                  },
                  {
                     image:productImages.PW210_H_4,
                    enginetext: "Comprehensive Maintenance Support",
                    description:
                      "The Eagle Service™ Plan (ESP™) Platinum for the PT6E-67XP-powered Pilatus PC-12 NGX offers unparalleled support, ensuring maximum engine reliability and performance.",
                  },
                  ] },
                  { title: "Customers",   content: [
           
                      { name: "Pilatus ", image: productImages.Pilatus } ,
                      
                    ]  },
                    // {
                    //   title: "History",
                    //   content: [
                    //    {
  
                    //        enginetext:"N/A",
                    //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                    //      },
                    //      {
                    //        enginetext:"N/A",
                    //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                    //      },
                    //   ],
                    // },
                ],
               },
  
            ],
            logo:productImages.PT6E_66XP,
            defaultTabsData: [
              { title: "Platforms", content: [ {
                image:productImages.PW210_P_1,
                enginetext: "Daher TBM 960",
                description:
                  "The TBM 960 is a high-performance single-engine turboprop designed for speed and efficiency. This aircraft is known for its advanced avionics and eco-conscious power management, making it suitable for both business and leisure flights.",
              },
              {
                image:productImages.PW210_P_2,
                enginetext: "Pilatus PC-12 NGX",
                description:
                  "The PC-12 NGX is a versatile single-engine turboprop that combines performance with comfort. The aircraft is designed for various missions, including cargo transport and passenger flights, and features advanced digital engine controls for improved operational efficiency.",
              },
                 ] },
              { title: "Specifications", content: [{image:productImages.PW210_S_1, description:"1825 - 1844 Thermodynamic ESHP" },
                  {image:productImages.PW210_S_2, description:"40% reduction in scheduled maintenance." },
                  {image:productImages.PW210_S_3, description:"100+ parameters monitored for optimum performance.  " },
                  {image:productImages.gtf, description:"Longer maintenance intervals. " },
  
              ] },
              { title: "Highlights", content: [   {
                image:productImages.PW210_H_1,
                enginetext: "Enhanced Operational Efficiency",
                description:
                  "The PT6 E-Series™ engine enables proactive maintenance planning, helping reduce costs and maximize uptime. Its advanced digital connectivity monitors over 100 parameters, optimizing power, speed, and fuel burn. Full-flight engine data is accessible on multiple platforms, including mobile devices, for rapid troubleshooting and enhanced service response.",
              },
              {
                image:productImages.PW210_H_2,
                enginetext: "Simplified Pilot Experience",
                description:
                  "The PT6E-66XT engine offers intuitive features, including easy start/stop functionality, single-lever operation, precise control, and auto-throttle integration. Full digital envelope protection ensures predictable and safe engine management.",
              },
              {
                image:productImages.PW210_H_3,
                enginetext: "Sustainable and Efficient",
                description:
                  "Certified for Sustainable Aviation Fuels (SAF), the engine includes an ecology system that recovers unburnt fuel during shutdown, improving efficiency and reducing emissions.",
              },
              {
                image:productImages.PW210_H_4,
                enginetext: "Advanced Performance",
                description:
                  "With power optimization throughout all flight phases, the PT6 E-Series™ delivers increased takeoff and climb power. Its Single Crystal Compressor Turbine (CT) blades and optimized turbine cooling enhance durability and performance.",
              },
              ] },
              { title: "Customers",   content: [
   { name: "Daher", image: productImages.Daher } ,
   { name: "Pilatus ", image: productImages.Pilatus } ,
                  
                ]  },
                // {
                //   title: "History",
                //   content: [
                //    {
  
                //        enginetext:"N/A",
                //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                //      },
                //      {
                //        enginetext:"N/A",
                //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                //      },
                //   ],
                // },
            ],
             gallery: [
                    { img: productImages.PW210_1 },
                    { img: productImages.PW210_2},
                     { img: productImages.PW210_3},
                     { img: productImages.PW210_4},                   
                     { video: productImages.PW210V_1},
                     { video: productImages.PW210V_2},
                     { video: productImages.PW210V_3},
                     { pdf: productImages.gen_Pdf_1},

                  ],
        },
        PT6A:{
          title: "PT6A",
          subTitle: "For PW India Experience Center",
          description:"The PT6A engine is the world’s most reliable and innovative in general aviation, consistently exceeding the demands of diverse applications. Its versatility and dependable performance make it the top choice for high-cycle, high-power operations. Whether in single- or twin-engine aircraft, the PT6A excels in corporate aviation, skydiving, agriculture, utility, and amphibious missions.",
          variants: [
           
  
          ],
           logo:productImages.PT6A_2,
          defaultTabsData: [
            { title: "Platforms", content: [ {
              image:productImages.PT6A_P_1,
              enginetext: "Cessna 208/208B Caravan",
              description: "A versatile single-engine turboprop aircraft primarily used for cargo and passenger transport. It is known for its short takeoff and landing capabilities, making it ideal for remote locations."
            },
            {
              image:productImages.PT6A_P_2,
              enginetext: "Beechcraft King Air Series",
              description: "This family of twin-engine turboprop aircraft is widely used for business aviation and air ambulance services. Models like the King Air 200 and 350 are celebrated for their comfort and performance."
            },
            {
              image:productImages.PT6A_P_3,
              enginetext: "DeHavilland Canada DHC-6 Twin Otter",
              description: "A robust STOL (Short Takeoff and Landing) aircraft used in various roles, including passenger transport, cargo delivery, and aerial survey. Its durability makes it suitable for harsh environments."
            },
            {
              image:productImages.PT6A_P_4,
              enginetext: "Pilatus PC-12",
              description: "A single-engine turboprop that combines the capabilities of a business jet with the ruggedness of a utility aircraft. It is popular for its spacious cabin and excellent range."
            },
            {
              image:productImages.PT6A_P_5,
              enginetext: "Embraer EMB-110 Bandeirante",
              description: "A twin-engine turboprop designed for regional transport, it can carry passengers or cargo over short to medium distances efficiently."
            },
            {
              image:productImages.PT6A_P_6,
              enginetext: "Air Tractor AT Series",
              description: "These agricultural aircraft are specifically designed for crop dusting and aerial application of fertilizers and pesticides. Models like the AT-502B are known for their high payload capacity."
            },
            // {
            //   enginetext: "Piper Cheyenne Series",
            //   description: "Twin-engine turboprops that offer high performance and speed, often used in business aviation and cargo transport."
            // },
            // {
            //   enginetext: "Quest Kodiak",
            //   description: "A modern utility aircraft designed for short takeoff and landing operations, ideal for remote access to underserved regions."
            // },
            // {
            //   enginetext: "Socata TBM Series",
            //   description: "High-performance single-engine turboprop aircraft that blend speed with efficiency, popular in business aviation."
            // },
            // {
            //   enginetext: "Basler Turbo BT-67",
            //   description: "The conversion of the Douglas DC-3 into a modern turboprop freighter or passenger aircraft, known for its reliability and large cargo capacity."
            // },
            // {
            //   enginetext: "PZL-Okecie PZL-130 Turbo-Orlik",
            //   description: "A Polish trainer aircraft designed for military training purposes, featuring advanced avionics and performance characteristics suitable for pilot training."
            // },
            // {
            //   enginetext: "Frakes Mallard",
            //   description: "A unique amphibious aircraft that can operate from both land and water, often used in tourism and cargo transport."
            // },
            {
              image:productImages.PT6A_P_7,
              enginetext: "T-6 Texan II",
              description: "A military trainer aircraft used by the U.S. Air Force and Navy, designed to provide advanced pilot training in a high-performance environment."
            }
               ] },
            { title: "Specifications", content: [
                {image:productImages.PW210_S_2, description:"500 shp to over 1,900 shp. " },
                {image:productImages.PW210_S_1, description:"70 models, offering unsurpassed flexibility and capability." },
                {image:productImages.PT6A_S_1, description:"7,500 operators in more than 180 countries." },
                {image:productImages.PW210_S_3, description:"400M+ flying hours." },
  
            ] },
            { title: "Highlights", content: [   {
              enginetext: "Engine of Choice for High-Demand Applications",
              description: "The PT6A engine is known for its versatility and performance, making it ideal for high-cycle, high-power applications in single- and twin-engine aircraft. It’s also the only engine certified for Single Engine IFR passenger operations in North America, Australia, Europe, and New Zealand."
            },
            {
              enginetext: "Flexible Architecture for Easy Integration",
              description: "The PT6A’s modular reverse-flow design allows for seamless installation in a variety of aircraft and propeller configurations, offering flexibility across different platforms."
            },
            {
              enginetext: "Simplified Maintenance",
              "description": "With most tasks performed on-wing, the PT6A reduces downtime and eliminates the need for frequent shop visits, unlike other engines."
            },
            {
              enginetext: "Power and Advanced Materials",
              description: "Delivering over 1,900 thermal shp with gearbox options from 700 to 1,700 shp, the PT6A features an OPR of 12:1, efficient gas paths, and advanced single-crystal materials and coatings for enhanced durability and corrosion protection."
            }
            ] },
            { title: "Customers",   content: [
                { name: "Cessna", image: productImages.Cessna } ,
                { name: "Beechcraft", image: productImages.Beechcraft } ,
                { name: "DeHavilland Canada", image: productImages.Dehavilland } ,
                { name: "Pilatus", image: productImages.Pilatus } ,
                { name: "Embraer", image: productImages.Embraer } ,
          
                  
            ]  },
              // {
              //   title: "History",
              //   content: [
              //    {
  
              //        enginetext:"N/A",
              //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
              //      },
              //      {
              //        enginetext:"N/A",
              //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
              //      },
              //   ],
              // },
          ],
          gallery:[
            {img:productImages.PT6A_1},
            {img:productImages.PT6A_2},
              {img:productImages.PT6A_3},
            {img:productImages.PT6A_4},
            {img:productImages.PT6A_5},
            {video:productImages.PT6A_V1},
            {pdf:productImages.gen_Pdf_2},
            {pdf:productImages.gen_Pdf_3},
            {pdf:productImages.gen_Pdf_4},
            {pdf:productImages.gen_Pdf_5},
          

          ]
      },
   
    },
    commercial: {
        GTF_Family:{
            title: "GTF Engine Family",
            subTitle:"For PW India Experience Center",
            description: "Pratt & Whitney's GTF™ engine is the only geared system delivering top-tier fuel efficiency and sustainability. Its revolutionary design sets a new benchmark for future technologies, including advanced materials, hybrid-electric systems, and sustainable aviation fuels (SAF). This groundbreaking engine also paves the way for innovations in these areas, shaping the future of propulsion.",
           variants: [
              { img: productImages.gtf, title: "PW1100G-JM",
                tabsData: [
                    { title: "Platforms", content: [{  
                      image:productImages.GTF_P_1,
                        enginetext:"Airbus A320neo family",
                        description: 'The A320neo family seats 120 to 220 passengers in a 2-class layout and flies up to 4,700 nautical miles with the A321XLR. GTF engines provide the highest fuel efficiency and lowest CO2 emissions for this aircraft family.'
                       }] },
                    { title: "Specifications", content: [{image:productImages.fanDiameter, description:"81” fan diameter. " },
                        {image:productImages.Thrust, description:"24K-34K pounds of thrust." },
                        {image:productImages.GTF_V1_S_1, description:"17M Metric tons of CO2 emissions avoided." },
                        {image:productImages.GTF_V1_S_1, description:"Up to 20% reduction in CO2 emission and fuel consumption." },
                        {image:productImages.GTF_V1_S_3, description:"Up to 75% reduction in noise footprint. " },
                        {image:productImages.GTF_V1_S_2, description:"Up to 50% reduction in NOx emissions." } , 
                    ]},
                    { title: "Highlights", content: [{image:productImages.GTF_V1_H_1, enginetext: "Industry-Leading Efficiency and Sustainability", description: "The GTF engine family offers unmatched fuel efficiency for single-aisle aircraft, cutting fuel consumption and CO2 emissions by up to 20%, NOx emissions by 50%, and reducing noise by 75%." },
                        {image:productImages.GTF_V1_H_2, enginetext: "Sustainable Aviation Fuel Ready", description: "Certified for 50% sustainable aviation fuel (SAF) and tested with 100%, GTF engines are key to lowering aviation's carbon footprint, supporting the goal of net-zero emissions by 2050." },
                        {image:productImages.gtf, enginetext: "Future-Ready Propulsion", description: "The GTF engine's geared fan architecture paves the way for even greater efficiency with advancements like the Pratt & Whitney GTF Advantage engine." },
                    ] },
                    { title: "Customers",   content: [
             { name: "IndiGo", image: productImages.IndiGo } ,
    { name: "China Airlines", image: productImages.ChinaAir } ,
    { name: "Cebu Pacific", image: productImages.CebuSpecific } ,
    { name: "Spirit Airline", image: productImages.Spirit } ,
    { name: "All Nippon Airways (ANA)", image: productImages.ANA } ,
    { name: "Wizz Air", image: productImages.wizz } ,
                      
                        
                      ]  },
                      // {
                      //   title: "History",
                      //   content: [
                      //    {
    
                      //        enginetext:"N/A",
                      //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                      //      },
                      //      {
                      //        enginetext:"N/A",
                      //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                      //      },
                      //   ],
                      // },
                  ],
               },
              { img: productImages.GTF_V_1, title: "PW1500G",
                tabsData: [
                    { title: "Platforms", content:  [{ 
                      image: productImages.GTF_P_1,
                        enginetext:"Airbus A220",
                        description: 'The A220 family seats 100 to 150 passengers in a typical 2-class layout and flies up to 3,450 nautical miles. Powered exclusively by GTF engines, the aircraft cuts fuel consumption and CO2 emissions by up to 25% per seat compared to previous-generation aircraft.'
                       }]},
                    { title: "Specifications", content: [{image:productImages.fanDiameter, description:"73” fan diameter." },
                        {image:productImages.Thrust, description:"19K-25K pounds of thrust. " },
                        {image:productImages.GTF_S_5, description:"Certified – Feb. 2013, Entered Service – July 2016." },
                        {image:productImages.GTF_V1_S_1, description:"Up to 25% reduction in CO2 emission and fuel consumption." },
                        {image:productImages.GTF_V1_S_3, description:"Up to 75% reduction in noise footprint." },
                        {image:productImages.GTF_V1_S_2, description:"Up to 50% reduction in NOx emissions." } , 
                    ]},
                    { title: "Highlights", content:  [{image:productImages.GTF_V2_H_1, enginetext: "Unmatched Efficiency and Sustainability", description: "The Pratt & Whitney GTF engine leads in fuel efficiency and sustainability for single-aisle aircraft. As the exclusive powerplant for the Airbus A220 family, it cuts fuel consumption and CO₂ emissions per seat by up to 25%, reduces NOx emissions by 50%, and lowers noise by 75%." },
                        {image:productImages.GTF_V2_H_2, enginetext: "Commitment to Sustainable Aviation", description: "Certified for 50% sustainable aviation fuel (SAF) and tested with 100% SAF, GTF engines are driving down carbon footprints, supporting the industry's net-zero emissions goal by 2050." },
                        {image:productImages.GTF_V2_H_3, enginetext: "Pioneering Future Technologies", description: "The GTF engine's geared fan architecture sets the stage for even greater advancements in efficient and sustainable propulsion." },
                    ]},
                    { title: "Customers",   content: [

                            { name: "Swiss International AirlinesndiGo", image: productImages.Swiss } ,
    { name: "airBaltic", image: productImages.AirBaltic } ,
    { name: "Delta Airlines", image: productImages.Delta } ,
    { name: "JetBlue Airways", image: productImages.jetBlue } ,
    { name: "Korean Air", image: productImages.korean } ,
                        
                      ]  },
                      // {
                      //   title: "History",
                      //   content: [
                      //    {
    
                      //        enginetext:"N/A",
                      //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                      //      },
                      //      {
                      //        enginetext:"N/A",
                      //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                      //      },
                      //   ],
                      // },
                  ],
               },
              { img: productImages.GTF_V_2, title: "PW1900G",
                tabsData: [
                    { title: "Platforms", content: [{  
                      image:productImages.GTF_P_3,
                        enginetext:"Embraer E-Jets E2",
                        description: 'The E190-E2 and E195-E2 seat 97 to 120 passengers in a typical three-class configuration, with a range of up to 2,850 nautical miles. Powered by GTF engines, the E-Jets E2 family reduces fuel consumption and CO₂ emissions by up to 25% per seat compared to earlier models. Embraer and Pratt & Whitney have also successfully tested the E195-E2 using 100% sustainable aviation fuel (SAF).'
                       }] },
                    { title: "Specifications", content: [{image:productImages.fanDiameter, description:"73” fan diameter." },
                        {image:productImages.Thrust, description:"19K-23K pounds of thrust. " },
                        {image:productImages.GTF_S_5, description:"Certified – Apr. 2017, Entered Service – Apr. 2018. " },
                        {image:productImages.GTF_V1_S_1, description:"Up to 25% reduction in CO2 emission and fuel consumption." },
                        {image:productImages.GTF_V1_S_3, description:"Up to 75% reduction in noise footprint." },
                        {image:productImages.GTF_V1_S_2, description:"Up to 50% reduction in NOx emissions." } , 
                    ]},
                    { title: "Highlights", content: [{image:productImages.GTF_V3_H_1, enginetext: "Leading Fuel Efficiency and Sustainability", description: "The Pratt & Whitney GTF engine sets the benchmark for fuel efficiency and sustainability in single-aisle aircraft. Powering the Embraer E-Jets E2 family, it reduces fuel consumption and CO₂ emissions per seat by up to 25%, cuts NOx emissions by 50%, and lowers noise by 75%." },
                        {image:productImages.GTF_V2_H_2, enginetext: "Commitment to Sustainable Aviation", description: "Certified for 50% sustainable aviation fuel (SAF) and successfully tested with 100% SAF, GTF engines are positioned to further cut carbon footprints, supporting the aviation industry's goal of net-zero emissions by 2050." },
                        {image:productImages.GTF_V3_H_2, enginetext: "Innovative Propulsion Technology", description: "The GTF engine's revolutionary geared fan architecture paves the way for even more efficient and sustainable propulsion in the future." },
                    ] },
                    { title: "Customers",   content: [
                        { name: "Air Astana", image: productImages.AirAsana },
                        { name: "Azul Brazilian Airlines", image: productImages.Azuel },
                        { name: "Helvetic Airlines", image: productImages.Helvetic },
                        { name: "KLM Cityhopper", image: productImages.KLMcity },
                        { name: "Widerøe", image: productImages.wider },
                        
                        
                      ]  },
                      // {
                      //   title: "History",
                      //   content: [
                      //    {
    
                      //        enginetext:"N/A",
                      //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                      //      },
                      //      {
                      //        enginetext:"N/A",
                      //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                      //      },
                      //   ],
                      // },
                  ],
               },
            ],
            logo:productImages.GTF_1,
            defaultTabsData: [
                { title: "Platforms", content: [{ 
                  image:productImages.GTF_P_1,
                    enginetext:"Airbus A320neo family",
                    description: 'With 3x3 seating typically up to 220 passengers, the A320neo family saves 16% per trip vs. prior-generation aircraft'
                   },{  
                     image:productImages.GTF_P_2,
                    enginetext:"Airbus A220",
                    description: 'With 3x2 seating typically up to 150 passengers, the A220 family saves up to 25% per seat vs. prior-generation aircraft.'
                   },
                   {  
                     image:productImages.GTF_P_3,
                    enginetext:"Embraer E-Jets E2",
                    description: 'With 2x2 seating typically up to 120 passengers, the E2 family saves up to 25% per seat vs. prior-generation aircraft.'
                   }] },
                { title: "Specifications", content: [{image:productImages.GTF_S_1, description:"20% Fuel and CO2 savings possible per trip with GTF-powered aircraft." },
                    {image:productImages.GTF_S_2, description:"1.7B Gallons of fuel saved, equivalent to nearly 6 billion liters" },
                    {image:productImages.GTF_S_3, description:"17M Metric tons of CO2 emissions avoided." },
                    {image:productImages.GTF_S_4, description:"75% Smaller noise footprint, for happier passengers and communities." },
                    {image:productImages.GTF_S_5, description:"100% Certified for operation on 50% SAF. Successfully tested on 100%." },
                    {image:productImages.GTF_S_6, description:"31M Hours of experience, with 1.1 billion passengers carried." } ,
                    {image:productImages.GTF_S_7, description:"2,000+ Aircraft with 80+ operators. 11,000+ engines ordered by 90+ customers." }  
                ] },
                { title: "Highlights", content: [{image:productImages.GTF_H_1, enginetext: "Geared for Sustainability", description: "The GTF engine family is the quietest, most efficient, and eco-friendly in its class, offering the lowest fuel consumption and CO2 emissions for single-aisle aircraft." },
                    {image:productImages.GTF_H_2, enginetext: "Geared for Business", description: "With superior fuel efficiency, payload, and range, GTF engines enable airlines to open new routes, flying farther with less fuel." },
                    {image:productImages.gtf, enginetext: "Geared for the Future", description: "The geared fan is the foundation for future sustainable propulsion. GTF engines, with GTF Advantage for the A320neo family, are already delivering next-generation benefits." },
                    {image:productImages.GTF_H_4, enginetext: "Unmatched After-Sales Support", description: "The GTF MRO network has ten active facilities worldwide, with more coming soon. GTF operators are supported by over 120 field representatives, a 24/7 Global Operations Center, and Customer Training Centers in the U.S., India, and China, with remote training available." },
                ] },
                { title: "Customers",   content: [
  { name: "IndiGo", image: productImages.IndiGo },
    { name: "China Airlines", image: productImages.ChinaAir } ,
    { name: "Cebu Pacific", image: productImages.CebuSpecific } ,
    { name: "Wizz Air", image: productImages.wizz } ,
    { name: "United Airlines", image: productImages.UnitedAir } ,
    { name: "SKY Airlines", image: productImages.SkyAir } 
                  
                  ]  },
                  // {
                  //   title: "History",
                  //   content: [
                  //    {

                  //        enginetext:"N/A",
                  //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                  //      },
                  //      {
                  //        enginetext:"N/A",
                  //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                  //      },
                  //   ],
                  // },
              ],
              gallery: [
                    { img: productImages.GTF_1 },
                    { img: productImages.GTF_2 },
                    { img: productImages.GTF_3 },
                    { img: productImages.GTF_4 },
                    { img: productImages.GTF_5 },
                    { img: productImages.GTF_6 },
                    { img: productImages.GTF_7 },
                    { img: productImages.GTF_8 },
                    { img: productImages.GTF_9 },
                    { img: productImages.GTF_10 },
                    { img: productImages.GTF_11 },
                    { img: productImages.GTF_12 },
                    { img: productImages.GTF_13 },
                    { img: productImages.GTF_14 },
                    { img: productImages.GTF_15 },
                    { img: productImages.GTF_16 },
                    { img: productImages.GTF_17 },
              
                  ],
        },
        v2500: {
            title: "v2500",
            subTitle:"For PW India Experience Center",
            description: "With enhanced service options to meet evolving customer needs, the V2500™ engine is built for maximum time on wing, offering top-tier fuel efficiency, reduced noise, and lower emissions. Renowned for its reliability, the V2500 continues production with a robust supply chain, ensuring long-term operational support. Having powered the Airbus A320ceo family for decades, it now also supports the first A321 passenger-to-cargo conversion and the Embraer C-390 Millennium Military Transport Aircraft.",
             variants: [
              { img: productImages.V25_E5_H_2, title: "V2500-E5" ,
                tabsData: [
                    { title: "Platforms", content: [{  
                      image:productImages.V25_P_1,
                        enginetext:"Embraer C-390 Millennium",
                        description: 'A new-generation military multi-mission transport aircraft offers unmatched mobility and operational flexibility on a single platform. The C-390 excels across a range of roles, including cargo and troop transport, aerial refueling, and disaster relief missions.'
                       }] },
                    { title: "Specifications", content: [{image:productImages.V25_S_1, description:"31,300 pounds of thrust" },
                        {image:productImages.V25_S_3, description:"20,000+ engine flight hours. " },
                        {image:productImages.fanDiameter, description:"63.5” fan diameter. " },

                    ]},
                    { title: "Highlights", content: [{ image:productImages.V25_E5_H_1, enginetext: "Versatile Power for the C-390 Millennium", description: "Powered by the V2500-E5 engine, delivering 31,000 pounds of thrust, the C-390 Millennium excels in cargo transport, troop movement, aerial refueling, and disaster relief. Its adaptable design allows for reliable performance on unpaved runways and at altitudes up to 14,000 feet." },
                        { image:productImages.V25_E5_H_2,enginetext: "Proven Durability and Performance", description: "With over 250 million flight hours, the V2500 series is known for its durability and low maintenance requirements. The V2500-E5, based on the proven V2500-A5 platform, continues this legacy of top-tier performance." },
                        {image:productImages.V25_H_4, enginetext: "Comprehensive Global Support", description: "Backed by a global network of 17 service facilities, the V2500 series offers extensive maintenance, repair, and overhaul services. Tailored support solutions ensure long-term engine efficiency, meeting both financial and operational needs." },
                    ] },
                    { title: "Customers",   content: [
                     {name: "Brazilian Air Force", image:productImages.BarazilianAir },
                     { name: "Portuguese Air Force", image: productImages.PortugeseAir },
                     { name: "Hungarian Air Force", image: productImages.HungaryAir },
                       { name: "Royal Netherlands Air Force", image: productImages.NetherlandAir },
                       
                        
                      ]  },
                  ],
              },
         
            ],
            logo:productImages.V25_1,
            defaultTabsData: [
                { title: "Platforms", content: [{  
                  image:productImages.V25_P_1,  
                    enginetext:"Airbus A320ceo Family",
                    description: 'Launched in 1984 and entering service in 1988, the Airbus A320ceo is a medium-sized, twin-engine airliner renowned for its efficiency on short and medium-haul routes. It remains a popular choice for commercial airlines.'
                   },
                   {  
                    image:productImages.V25_P_2,  
                    enginetext:"Embraer C-390 Millennium",
                    description: 'This next-generation military transport aircraft offers exceptional mobility and operational flexibility. It delivers high availability and productivity, providing a cost-effective solution for air forces.'
                   },
                   {  
                      image:productImages.V25_P_3,  
                    enginetext:"Airbus A320/A321 Cargo Conversion",
                    description: 'The A321 converted freighter carries up to 3.5 tons more cargo than the 737-800 freighter and saves 240 gallons of fuel per trip compared to the 757-200/RB211. The A320 freighter offers similar capacity to the 737-800 with up to 2% lower fuel burn.'
                   }] },
                { title: "Specifications", content: [
                    {image:productImages.V25_S_1, description:"22K-33K pounds of thrust. " },
                    {image:productImages.V25_S_2, description:"3% fuel burn advantage." },
                    {image:productImages.V25_S_3, description:"275M+ flight hours. " },
                    {image:productImages.V25_S_4, description:"7,800 engines produced." },
                    {image:productImages.V25_S_5, description:"3,000 aircraft with 170 operators." },

                ]},
                { title: "Highlights", content: [{image:productImages.V25_H_1, enginetext: "Industry-Leading Efficiency and Performance", description: "The V2500 engine remains the quietest and most fuel-efficient option for the Airbus A320ceo family, delivering over 3% better fuel burn, lower emissions, and a significant payload-range advantage. Its proven reliability makes it a top choice for commercial, cargo, and military applications." },
                    {image:productImages.V25_H_2, enginetext: "Versatility Across Platforms", description: "With up to 33,000 pounds of thrust and more than 275 million flight hours, the V2500 powers nearly 3,000 aircraft worldwide. Trusted by over 170 operators, it consistently delivers reliable performance across diverse global operations." },
                    {image:productImages.V25_H_3, enginetext: "Tailored Service Solutions", description: "As engines progress through their life cycles, we collaborate closely with customers to provide customized service solutions that ensure peak performance and maximize uptime." },
                    {image:productImages.V25_H_4, enginetext: "Global Maintenance Network", description: "Supported by 17 global facilities, the V2500 benefits from a robust maintenance infrastructure offering comprehensive maintenance, repair, and overhaul (MRO) services for long-term operational efficiency." },
                ] },
                { title: "Customers",   content: [
                     { name: "IndiGo", image: productImages.IndiGo },
                     { name: "American Airlines", image: productImages.AmericanAir },
                     { name: "Delta Airlines", image: productImages.DeltaAir },
                    //  { name: "Singapore Airlines (SilkAir)", image: productImages.gtf },
                     { name: "Brazilian Air Force", image: productImages.BarazilianAir },
                     { name: "Portuguese Air Force", image: productImages.PortugeseAir },
                     { name: "Hungarian Air Force", image: productImages.HungaryAir },
                     { name: "Royal Netherlands Air Force", image: productImages.NetherlandAir },
                     { name: "Qantas", image: productImages.Qantas },
                     { name: "Titan Airways", image: productImages.TitanAir },
                    //  { name: "Vaayu Group", image: gtf },
                    //  { name: "SmartLynx Airlines", image: gtf },
                    // { category: "Commercial (A320ceo)", customers: [
                    //     "IndiGo", "American Airlines", "United Airlines", "Delta Airlines", "Singapore Airlines (SilkAir)"
                    // ]},
                    // { category: "Military", customers: [
                    //     "Brazilian Air Force", "Portuguese Air Force", "Hungarian Air Force", "Royal Netherlands Air Force"
                    // ]},
                    // { category: "Cargo Conversion", customers: [
                    //     "Qantas", "Titan Airways", "Vaayu Group", "SmartLynx Airlines"
                    // ]},
                    
                  ]  },
                  // {
                  //   title: "History",
                  //   content: [
                  //    {

                  //        enginetext:"N/A",
                  //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                  //      },
                  //      {
                  //        enginetext:"N/A",
                  //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                  //      },
                  //   ],
                  // },
              ],
              gallery: [
                    { img: productImages.V25_1 },
                    { img: productImages.V25_2},
                    { img: productImages.V25_3},
                    { img: productImages.V25_4},
                    { img: productImages.V25_5},
                    { img: productImages.V25_6},
                    { img: productImages.V25_7},
                    { img: productImages.V25_8},
                    { img: productImages.V25_9},
                    { pdf: productImages.Comm_Pdf_1},
                    { pdf: productImages.Comm_Pdf_3},
                    { pdf: productImages.Comm_Pdf_4},
                
              
                  ],
        },
        PW4000:{
            title: "PW4000",
            subTitle:"For PW India Experience Center",
            description: "The PW4000 delivers 52,000 to 62,000 pounds of thrust across five major aircraft applications. Approved for 180-minute ETOPS, it offers flexibility and reliability. Advanced technologies like single-crystal superalloys and FADEC boost fuel efficiency and performance, with long on-wing times and low maintenance costs.",
            variants: [
              { img: productImages.PW4_100, title: "PW4000 100-inch fan",
                tabsData: [
                    { title: "Platforms", content: [{  
                        enginetext:"Airbus A330",
                        description: 'The Airbus A330 is a versatile twin-engine wide-body airliner designed for medium to long-haul flights. It offers excellent fuel efficiency, advanced technology, and a range of passenger and cargo configurations.'
                       },
                       ] },
                    { title: "Specifications", content: [{ description:"64.5K – 70K pounds of takeoff thrust." },
                        { description:"10M+ hours of revenue service. " },
                        { description:"180-minute ETOPS approval." },
                        { description:"TALON II low emissions combustor." },

                    ]},
                    { title: "Highlights", content: [{ enginetext: "", description: "The PW4000 100-inch fan engine is offered as a complete propulsion system, featuring an advanced, lightweight nacelle and incorporating proven technologies in materials, aerodynamics, and controls to enhance performance, reliability, and durability." },
                        { enginetext: "ETOPS Certification and Compliance", description: "This engine was the first in aviation history to qualify for Extended-range Twin-engine Operations (ETOPS) before entering service, complying with all current and anticipated noise and exhaust emissions regulations." },
                        { enginetext: "Performance and Value", description: "As of May 2010, the PW4000 100-inch fan engines have accumulated over 10 million hours of revenue service on the A330. Its design is built for maximum value, evidenced by its strong service record in the A330 market." },
                        { enginetext: "Support and Services", description: "Pratt & Whitney’s Global Service Partners network provides a comprehensive range of fleet management, line maintenance, and repair services for the PW4000 engine family." },
                    ] },
                    { title: "Customers",   content: [
                        { name: "American Airlines", image: productImages.AmericanAir },
                        { name: "Delta Airlines", image: productImages.DeltaAir },
                        { name: "Etihad Airways", image: productImages.UnitedAir },
                        { name: "Korean Air", image: productImages.UnitedAir },
                        { name: "Vietnam Airlines", image: productImages.UnitedAir },
                        { name: "Sri Lankan Airlines", image: productImages.UnitedAir },
                       
                        
                      ]  },
                      // {
                      //   title: "History",
                      //   content: [
                      //    {
    
                      //        enginetext:"N/A",
                      //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                      //      },
                      //      {
                      //        enginetext:"N/A",
                      //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                      //      },
                      //   ],
                      // },
                  ],
               },
              { img: productImages.PW4_112, title: "PW4000 112-inch fan",
                tabsData: [
                    { title: "Platforms", content: [{  
                        enginetext:"Boeing 777",
                        description: 'The Boeing 777 is a long-range, twin-engine wide-body airliner designed for efficiency and comfort. Known for its advanced technology and spacious cabin, it accommodates various configurations for passengers and cargo. The 777 is widely used in international aviation, offering reliable performance on long-haul routes.'
                       },
                     ] },
                    { title: "Specifications", content: [{ description:"74K - 98K pounds of thrust. " },
                        { description:"207-minute ETOPS approval" },
                        { description:"Diameter as wide as the fuselage of a Boeing 737 " },

 
                    ]},
                    { title: "Highlights", content: [{ enginetext: "", description: "The PW4000 112-inch fan engine, designed for the Boeing 777-200/-200ER/-300, delivers 74,000 to 98,000 pounds of thrust. It was the launch engine for the 777, entering service in 1995" },
                        { enginetext: "ETOPS Certification", description: "The PW4084 variant provides 84,000 pounds of thrust and was the first engine approved for 180-minute ETOPS, later upgraded to 207 minutes. The PW4090 offers 90,000 pounds for increased-gross-weight models, while the PW4098 supports takeoff weights up to 660,000 pounds" },
                        { enginetext: "Design and Efficiency", description: "As Pratt & Whitney's largest commercial engine, the PW4000 features hollow titanium, shroudless fan blades for high efficiency, low noise, and enhanced resistance to foreign object damage." },
                        { enginetext: "Reliability and Leadership", description: "The PW4000-112 has best-in-class reliability, backed by extensive market experience and a robust design validation methodology." },
                    ] },
                    { title: "Customers",   content: [
                      { name: "Air India", image: productImages.AmericanAir },
                        { name: "United Airlines", image: productImages.DeltaAir },
                        { name: "Japan Airlines", image: productImages.UnitedAir },
                        { name: "All Nippon Airways (ANA)", image: productImages.UnitedAir },
                        { name: "Ethiopian Airlines", image: productImages.UnitedAir },
                        { name: "Asiana Airlines", image: productImages.UnitedAir },
                        
                        
                      ]  },
                      // {
                      //   title: "History",
                      //   content: [
                      //    {
    
                      //        enginetext:"N/A",
                      //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                      //      },
                      //      {
                      //        enginetext:"N/A",
                      //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                      //      },
                      //   ],
                      // },
                  ],
               },
              
            ],
            defaultTabsData: [
                { title: "Platforms", content: [{  
                    enginetext:"Boeing 747-400",
                    description: 'The Boeing 747-400 is a large, long-range wide-body airliner developed by Boeing Commercial Airplanes as an advanced variant of the original 747.'
                   },
                   {  
                    enginetext:"Boeing 767",
                    description: 'The Boeing 767 is an American wide-body airliner developed and produced by Boeing Commercial Airplanes.'
                   },
                   {  
                    enginetext:"Boeing MD-11",
                    description: 'The McDonnell Douglas MD-11 is an American tri-jet wide-body airliner originally manufactured by McDonnell Douglas and later by Boeing.'
                   },
                  {  
                    enginetext:"Airbus A300",
                    description: `The Airbus A300, Airbus's first production aircraft, is the world's first twin-engine, double-aisle wide-body airliner, developed and manufactured by Airbus from 1971 to 2007`
                   },
                  {  
                    enginetext:"Airbus A310",
                    description: 'The Airbus A310 is a wide-body aircraft which was developed to meet the demand for a smaller aircraft than the A300, Airbus first twin-jet wide-body.'
                   }] },
                { title: "Specifications", content: [{image:productImages.V25_S_1, description:"52K – 62K pounds of thrust." },
                        {image:productImages.V25_S_5, description:"180-minutes ETOPS approved." },
                        {image:productImages.V25_S_3, description:"2M+ ETOPS flights with 38 airlines." },
                    ]},
                    { title: "Highlights", content: [{ enginetext: "", description: "The PW4000 100-inch fan engine is offered as a complete propulsion system, featuring an advanced, lightweight nacelle and incorporating proven technologies in materials, aerodynamics, and controls to enhance performance, reliability, and durability." },
                        {image:productImages.PW4_H_2, enginetext: "ETOPS Certification", description: "Crucial for airlines operating Extended-range Twin-engine Operations (ETOPS) on Boeing 767s and Airbus A310/A300 aircraft, the PW4000 is certified for 180-minute ETOPS, allowing flights up to three hours from the nearest airport. It has completed over 2 million ETOPS flights with 38 airlines." },
                        {image:productImages.PW4_H_1, enginetext: "Advanced Technologies", description: "Incorporating advanced technologies such as single-crystal superalloys and Full-Authority Digital Electronic Control (FADEC), the PW4000 enhances fuel economy and reliability, while offering excellent performance retention and turbine durability." },
                    ] },
                { title: "Customers",   content: [
                        { name: "American Airlines", image: productImages.AmericanAir },
                        { name: "Delta Airlines", image: productImages.DeltaAir },
                        { name: "United Airlines", image: productImages.UnitedAir },
                        { name: "Korean Air", image: productImages.korean },
                    
                  ]  },
                  // {
                  //   title: "History",
                  //   content: [
                  //    {

                  //        enginetext:"N/A",
                  //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                  //      },
                  //      {
                  //        enginetext:"N/A",
                  //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                  //      },
                  //   ],
                  // },
              ],
              gallery: [
                    { img: productImages.PW4_1 },
                    { img: productImages.PW4_2},
                     { img: productImages.PW4_3},
                    { img: productImages.PW4_4},
                    { img: productImages.PW4_5},
                    { img: productImages.PW4_6},
                    { img: productImages.PW4_7},
                    { img: productImages.PW4_8},
                    { img: productImages.PW4_9},
                    { pdf: productImages.Comm_Pdf_5},
                    { pdf: productImages.Comm_Pdf_6},
                    { pdf: productImages.Comm_Pdf_7},
                    { pdf: productImages.Comm_Pdf_8},
                    { pdf: productImages.Comm_Pdf_9},

                  ],
                  logo:productImages.PW4_1
        },
        PW2000:{
            title: "PW2000",
            subTitle:"For PW India Experience Center",
            description: "The PW2000 engine family delivers 37,000 to 43,000 pounds of thrust, designed to meet the tough demands of airlines for both short-haul and long-distance flights. Known for its technical innovation, the PW2000 offers exceptional performance, environmental benefits, high reliability, and low maintenance costs.",
            variants: [
           
             
            ],
             defaultTabsData: [
                { title: "Platforms", content: [{
                  image:productImages.PW2_P_1,  
                    enginetext:"Boeing 757",
                    description: 'The Boeing 757 is a narrow-body airliner developed by Boeing Commercial Airplanes. Initially known as the 7N7, it was designed as a twinjet successor to the trijet 727 and secured its first orders in August 1978.'
                   },
                 ] },
                { title: "Specifications", content: [
                    {image:productImages.V25_S_1, description:"37K-43K pounds of thrust.  " },
                    {image:productImages.PW2_fadec, description:"1st engine to offer Full-Authority Digital Electronic Control (FADEC)." },
                    {image:productImages.V25_S_5, description:"180-minute ETOPS approval." },
                    {image:productImages.V25_S_3, description:"26M + flight hours." },
               

                ]},
                { title: "Highlights", content: [{image:productImages.PW2_H_1, enginetext: "Versatile Power for Airline Operations", description: "The PW2000 engine family delivers 37,000 to 43,000 pounds of thrust, designed to meet the rigorous demands of both short-haul and long-haul flights. Known for its technical innovation, the PW2000 provides exceptional performance, environmental benefits, high reliability, and low maintenance costs." },
                    {image:productImages.PW2_H_2, enginetext: "A Technological Trailblazer", description: "The PW2000 was the first engine to feature Full-Authority Digital Electronic Control (FADEC), revolutionizing electronic engine control. It is certified for 180-minute ETOPS operations, enabling 757 aircraft to handle transoceanic and intercontinental routes." },
                    {image:productImages.PW2_H_3, enginetext: "Durability and Efficiency", description: "Current PW2000 models, including the PW2043, feature enhanced durability for extended time on wing and reduced maintenance costs. The PW2000 RTC (Reduced Temperature Configuration) model further optimizes performance. Offering high thrust and excellent fuel efficiency, the engine excels in high-altitude and hot climate operations, providing superior payload capacity." },
                   
                ] },
                { title: "Customers",   content: [
                    { name: "American Airlines", image: productImages.AmericanAir },
                    { name: "United Airlines", image:productImages.UnitedAir },
                    { name: "Delta Airlines", image: productImages.DeltaAir },
                    { name: "Icelandair", image: productImages.IcelandAir },
                    { name: "TUI Airways", image: productImages.TUI },
                    { name: "Alaska Airlines", image: productImages.Alaska },
              
                  ]  },
                  // {
                  //   title: "History",
                  //   content: [
                  //    {

                  //        enginetext:"N/A",
                  //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                  //      },
                  //      {
                  //        enginetext:"N/A",
                  //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                  //      },
                  //   ],
                  // },
              ],
               gallery: [
                    { img: productImages.PW2_1 },
                    { img: productImages.PW2_2},
                     { img: productImages.PW2_3},
                 
              
                  ],
                  logo:productImages.PW2_1
        },
        GP7200:{
            title: "GP7200",
            subTitle:"For PW India Experience Center",
            description: "For over 25 years, the GP7200 engine has powered the A380 with reliability and efficiency. As we move forward, we’re adapting to the changing times by focusing on what matters most: our extensive network of suppliers, overhaul partners, and field service teams. Their expertise and dedication remain at the heart of our mission. Our goal remains unchanged—to ensure the continued success of the A380 and keep it flying for years to come.",
            variants: [
          

            ],
           defaultTabsData: [
                { title: "Platforms", content: [{  
                  image:productImages.P7200_P_1,
                    enginetext:"Airbus A380",
                    description: "The Airbus A380 is the world's largest passenger airliner and the only full-length double-deck jet, developed and produced by Airbus."
                   },
                 ] },
                { title: "Specifications", content: [
                    {image:productImages.V25_S_3, description:"250M+ flight hours." },
                    {image:productImages.V25_S_5, description:"99.9% departure reliability." },
                    {image:productImages.P7200_S_1, description:"Quietest and most fuel-efficient engine for Airbus A380." },
                    {image:productImages.P7200_S_2, description:"Meets CAEP/6 emission limits. " },
  

                ]},
                { title: "Highlights", content: [{image:productImages.P7200_H_1, enginetext: "A Great Heritage", description: "The GP7200 is derived from two of aviation’s most successful wide-body engines—the GE90 and PW4000. These engines set the industry standard for ETOPS reliability, logging over 250 million hours of superior performance. Building on the GE90 core and PW4000 low spool, the GP7200 is a refined engine with an infusion of advanced technologies." },
                    {image:productImages.P7200_H_2, enginetext: "Powered by Proven Expertise", description: "The GP7200 is supported by the industry’s leading aftermarket providers. The Engine Alliance unites the resources of GE Engine Services and Pratt & Whitney Aftermarket Services, delivering a total business solution for A380 customers, including Flexible Fleet Management Agreements (FMAs), Material By the Hour (MBTH) with full repair development, Spare engine leasing, On-wing support logistics. " },
                 
                ] },
                { title: "Customers",   content: [
                    { name: "Emirates", image: productImages.Emirates },
                    { name: "Etihad Airways", image: productImages.Etihad },
                    { name: "Korean Air", image: productImages.korean },
                    { name: "Air France", image: productImages.Airfrance },
 
                  ]  },
                  // {
                  //   title: "History",
                  //   content: [
                  //    {

                  //        enginetext:"N/A",
                  //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                  //      },
                  //      {
                  //        enginetext:"N/A",
                  //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                  //      },
                  //   ],
                  // },
              ],
                 gallery: [
                    { img: productImages.P7200_1 },
                    { img: productImages.P7200_2},
                     { img: productImages.P7200_3},
                    
           
                  ],
        }
    },
    business_aviation: {
      PW800: {
            title: "PW800",
            subTitle: "For PW India Experience Center",
            description:"The PW800 turbofan engine raises the bar on performance and economics for next-generation long range business jets.",
            variants: [
             
  
            ],
            logo:productImages.PW800_1,
            defaultTabsData: [
              { title: "Platforms", content: [  {
                image:productImages.PW800_P_1,
                enginetext: "Gulfstream G500",
               description: "The G500 is a long-range business jet accommodating up to 19 passengers. It offers a range of approximately 5,300 nautical miles and features a spacious cabin with advanced avionics, providing a comfortable and efficient travel experience."
              },
              {
                image:productImages.PW800_P_2,
                enginetext: "Gulfstream G600",
               description: "The G600 extends the capabilities of the G500, offering a range of about 6,600 nautical miles. It combines speed and efficiency with a luxurious cabin, catering to intercontinental travel needs."
              },
              {
                image:productImages.PW800_P_3,
                enginetext: "Dassault Falcon 6X",
               description: "Falcon 6X is designed for ultra-long-range missions, boasting a range of approximately 5,500 nautical miles. It features a wide and tall cabin, providing exceptional comfort and advanced technology for passengers."
              },
              {
                image:productImages.PW800_P_4,
                enginetext: "Gulfstream G400",
               description: "The G400 is a new addition to Gulfstream's lineup, offering a range of around 4,200 nautical miles. It is designed to fill the gap between the G280 and G500, providing a balance of performance and cabin comfort for medium to long-range missions."
              }
                 ] },
              { title: "Specifications", content: [{image:productImages.PW800_S_1, description:"10,000 to 20,000 pound thrust. " },
                  {image:productImages.PW800_S_2, description:"GTF like core technology. " },
                  {image:productImages.PW800_S_3, description:"40% less scheduled maintenance.  " },
                  { image:productImages.PW800_S_4,description:"Under 30-minute accessory replacement time.  " },
                  { image:productImages.PW800_S_5,description:"TALON™ X combustor for lower emissions." },
  
              ] },
              { title: "Highlights", content: [    {
                image:productImages.PW300_H_1,
               enginetext: "High Performance",
                description: "The PW800 engine redefines performance and economy for long-range business jets, with proven core technology from Pratt & Whitney's GTF engines. With industry-leading availability, innovation, and a robust service plan, it is certified by Transport Canada, FAA, and EASA."
              },
              {
                  image:productImages.PW800_H_1,
               enginetext: "Efficient, Sustainable Technology",
                description: "The PW800 features a single-piece fan, optimized FADEC, and TALON™ X combustor to deliver quiet, efficient operation with ultra-low emissions, easily surpassing CAEP/8 standards. Lightweight composites and reduced parts enhance integration, lower noise, and improve cabin comfort."
              },
              {
                  image:productImages.PW800_H_2,
               enginetext: "Exceptional Service and Maintenance",
                description: "Backed by Pratt & Whitney's global network, the PW800 ensures fast support, advanced diagnostics, and 40% less scheduled maintenance than its peers. Accessible panels and easy-to-replace components streamline maintenance for quick turnaround."
              }
              ] },
              { title: "Customers",   content: [
    { name: "Dassault Aviation", image: productImages.Dassault },
    { name: "Gulfstream Aerospace", image: productImages.Gulfstream }
                ]  },
           
            ],
            gallery: [
                    { img: productImages.PW800_1 },
                    { img: productImages.PW800_3},
                     { img: productImages.PW800_4},
                     { img: productImages.PW800_5},
                     { img: productImages.PW800_6},
                     { img: productImages.PW800_7},
                     { img: productImages.PW800_8},
                     { video: productImages.PW800V_1},
                     { video: productImages.PW800V_2},
                    
           
                  ],
                  
        },
        PW600:{
          title: "PW600",
          subTitle: "For PW India Experience Center",
          description:"Powering a wide range of very light and light jets, the PW600 engine is offers compactness, fuel efficiency and ease of maintenance, while offering excellent operating economics.",
          variants: [
           
  
          ],
           logo:productImages.PW600_1,
          defaultTabsData: [
            { title: "Platforms", content: [  {
              image:productImages.PW600_P_1,
              enginetext: "Eclipse 500",
              description: "A twin-engine very light jet designed for short-haul flights, accommodating up to six passengers. It was among the first VLJs to enter the market, offering private jet capabilities at a lower operating cost."
            },
            {
              image:productImages.PW600_P_2,
              enginetext: "Cessna Citation Mustang",
              description: "A light business jet seating four to five passengers, known for its ease of operation and efficiency. It provides a balance between performance and affordability, making it popular among owner-operators."
            },
            {
              image:productImages.PW600_P_3,
              enginetext: "Embraer Phenom 100",
              description: "A very light jet offering a spacious cabin for up to seven occupants. It features advanced avionics and a comfortable interior, catering to both corporate and personal travel needs."
            }
               ] },
            { title: "Specifications", content: [{ image:productImages.gtf,description:"3,300+ aircraft powered. " },
                {image:productImages.PW600_S_1, description:"900 to 3,000 pounds thrust. " },
                {image:productImages.PW600_S_2,  description:"FADEC equipped. " },
                {image:productImages.PW600_S_3,  description:"1/2 the parts of a conventional turbofan." },
                {image:productImages.PW600_S_4,  description:"4.6M+ hours of flight time" },
  
            ] },
            { title: "Highlights", content: [  {
              image:productImages.PW600_H_1,
              enginetext: "For Very Light and Light Jets",
              description: "Designed specifically for point-to-point travel in the very light and light jet categories, this advanced engine series combines excellent performance with Pratt & Whitney's renowned reliability."
            },
            {
              image:productImages.PW600_H_2,
              enginetext: "Efficient and Easy Maintenance",
              description: "The PW600 is compact, lightweight, and engineered with half the parts of standard turbofans, making maintenance quick and easy. Delivering 900 to 3,000 pounds of thrust, it features cutting-edge technology for fuel efficiency and reduced emissions. The dual-channel FADEC system minimizes pilot workload and enhances engine monitoring, extending time on wing."
            },
            {
              image:productImages.PW600_H_3,
              enginetext: "Global Support Network",
              description: "PW600 operators benefit from Pratt & Whitney's top-tier global support, with over 30 service centers, 100+ field reps worldwide, a 24/7 Customer First Center for expert assistance, industry-leading diagnostics, and the largest rental and exchange engine pool in the field."
            }
            ] },
            { title: "Customers",   content: [
                { name: "Eclipse Aviation", image:productImages.Eclipse },
    { name: "Cessna Aircraft Company", image: productImages.Cessna },
    { name: "Embraer", image: productImages.Embraer }     
            ]  },
              // {
              //   title: "History",
              //   content: [
              //    {
  
              //        enginetext:"N/A",
              //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
              //      },
              //      {
              //        enginetext:"N/A",
              //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
              //      },
              //   ],
              // },
          ],
          gallery: [
                    { img: productImages.PW600_1 },
                    { img: productImages.PW600_2},
                     { img: productImages.PW600_3},
                    
           
                  ],
                 
      },
      PW500:{
        title: "PW500",
        subTitle: "For PW India Experience Center",
        description:"The PW500 engine family, designed for light to mid-size business jets, offers high performance and outstanding operating economics, from the engine itself to fully integrated power systems, meeting the needs of all types of owners.",
        variants: [
         

        ],
        logo:productImages.PW500_3,
        defaultTabsData: [
          { title: "Platforms", content: [  {
            image:productImages.PW500_P_1,
            enginetext: "Cessna Citation Bravo",
            description: "An upgraded version of the Citation II, the Citation Bravo is powered by PW530A engines. It offers enhanced performance, improved avionics, and increased fuel efficiency, making it a popular choice for short to medium-range missions."
          },
          {
            image:productImages.PW500_P_2,
            enginetext: "Cessna Citation V Encore/Encore+",
            description: "These models are advancements of the Citation V series, featuring PW535A and PW535B engines, respectively. They provide better climb rates."
          }
             ] },
          { title: "Specifications", content: [{ image:productImages.PW500_S_1,description:"1,800 to 2,000 shaft-horsepower " },
              { image:productImages.PW500_S_2,description:"2,900 to over 4,500 pounds of thrust. " },
              { image:productImages.PW500_S_3,description:"5,000 engines produced. " },
              { image:productImages.PW500_S_4,description:"20M+ flight hours." },


          ] },
          { title: "Highlights", content: [  {
            image:productImages.PW500_H_3,
            enginetext: "Proven Durability and Reliability",
            description: "The PW500 family, with three series and eight models ranging from 2,900 to 4,500 pounds of thrust, is trusted in fractional ownership and business jet markets for its durability and reliability, backed by maintenance cost guarantee plans."
          },
          {
            image:productImages.PW500_H_1,
            enginetext: "Advanced Technology",
            description: "Featuring Full-Authority Digital Engine Control (FADEC) in many models, PW500 engines incorporate the latest technology to reduce pilot workload and optimize engine health monitoring, ensuring dependable dispatch availability."
          },
          {
            image:productImages.PW500_H_2,
            enginetext: "Global Support Network",
            description: "Pratt & Whitney offers comprehensive global support with 30+ service centers, 100+ field representatives, a 24/7 Customer First Center, advanced diagnostics, and the industry’s largest pool of rental and exchange engines."
          }
          ] },
          { title: "Customers",   content: [
            { name: "Cessna Aircraft Company", image: productImages.Cessna },
    { name: "Embraer", image: productImages.Embraer }  
                   
          ]  },
            // {
            //   title: "History",
            //   content: [
            //    {

            //        enginetext:"N/A",
            //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
            //      },
            //      {
            //        enginetext:"N/A",
            //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
            //      },
            //   ],
            // },
        ],
        gallery: [
                    { img: productImages.PW500_1 },
                    { img: productImages.PW500_2},
                     { img: productImages.PW500_3},
                    
           
                  ],
                  
    },
    PW300:{
      title: "PW300",
      subTitle: "For PW India Experience Center",
      description:"The PW300 engine, powering most mid-size to heavy jets, delivers reliable and fuel-efficient performance for mid-size to heavy jets. As a top choice for corporate travel, it combines quiet operation, sustainability, and excellent value.",
      variants: [
       

      ],
      logo:productImages.PW300_1,
      defaultTabsData: [
        { title: "Platforms", content: [   {
          enginetext: "Dassault Falcon 7X",
          image:productImages.gtf,
          description: "A long-range, large-cabin trijet capable of non-stop flights between major intercontinental destinations. It accommodates up to 19 passengers and is renowned for its advanced avionics and exceptional performance."
        },
        {
          image:productImages.gtf,
          enginetext: "Dassault Falcon 8X",
          description: "An extended-range version of the Falcon 7X, offering increased range and a more spacious cabin. It provides enhanced comfort and connectivity options, catering to the needs of global travelers."
        },
        {
          image:productImages.gtf,
          enginetext: "Dassault Falcon 2000 Series",
          description: "A family of twin-engine business jets known for their versatility and efficiency. Models like the Falcon 2000EX and 2000LXS offer spacious cabins and impressive range, suitable for both transcontinental and intercontinental flights."
        },
        {
          image:productImages.PW300_P_3,
          enginetext: "Gulfstream G200",
          description: "A super-midsize jet offering a balance between range and cabin comfort. It can accommodate up to 10 passengers and is favored for its reliability and performance on medium to long-haul flights."
        },
        {
          image:productImages.PW300_P_2,
          enginetext: "Bombardier Learjet 60",
          description: "A midsize business jet known for its speed and efficiency. It features a stand-up cabin and is capable of cruising at high altitudes, providing a smooth and swift travel experience."
        },
        {
          image:productImages.PW300_P_1,
          enginetext: "Fairchild Dornier 328JET",
          description: "A regional jet that has been adapted for business aviation, offering a spacious cabin and short-field performance. It's suitable for operations from smaller airports, providing flexibility for various missions."
        }
           ] },
        { title: "Specifications", content: [{ image:productImages.PW500_S_2,description:"4,700 to 8,000 pounds of thrust. " },
            {image:productImages.PW500_S_3, description:"6000+ engines produced." },
            {image:productImages.PW500_S_4, description:"23.5M+ flight hours." },

        ] },
        { title: "Highlights", content: [{
          image:productImages.PW300_H_1,
          enginetext: "Innovative and Efficient Design",
          description: "The PW300 engine features a two-spool structure with a five-stage high-pressure compressor, powered by a two-stage, cooled high-pressure turbine and a three-stage low-pressure turbine driving an advanced fan. Its high-efficiency combustor, incorporating TALON™ combustion technology in the latest models, delivers low emissions and fuel consumption, while an optimized exhaust mixer reduces both fuel burn and noise."
        },
        {
          image:productImages.PW300_H_2,
          enginetext: "Advanced Control and Diagnostics",
          description: "Equipped with full authority digital engine control (FADEC) in many models, the PW300 minimizes pilot workload and provides comprehensive engine health monitoring, ensuring high dispatch reliability."
        },
        {
          image:productImages.PW300_H_3,
          enginetext: "Powering Business Jets Worldwide",
          description: "With its compact, lightweight design, the PW300 powers the majority of mid-size and a wide range of large, long-range business jets across the globe."
        }
        ] },
        { title: "Customers",   content: [
            { name: "Dassault Aviation", image: productImages.Dassault },
    { name: "Gulfstream Aerospace", image: productImages.Gulfstream } ,
    { name: "Bombardier Aerospace", image: productImages.Bombardier } ,
    { name: "Fairchild Dornier", image: productImages.FairChild } ,
    { name: "Cessna Aircraft Company", image: productImages.Cessna } ,
          
              
        ]  },
          // {
          //   title: "History",
          //   content: [
          //    {

          //        enginetext:"N/A",
          //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
          //      },
          //      {
          //        enginetext:"N/A",
          //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
          //      },
          //   ],
          // },
      ],
      gallery: [
                    { img: productImages.PW300_1 },
                    { img: productImages.PW300_2},
                     { img: productImages.PW300_3},
                     { img: productImages.PW300_4},

                  ],
                  
  },
    },
    APUs: {
      PW980: {
            title: "PW980",
            subTitle: "For PW India Experience Center",
            description:"Our PW980 is the largest APU in commercial airline service. This APU is a two-shaft gas turbine engine, specifically designed for the Airbus A380 wide-body jet liner.",
            variants: [
             
  
            ],
            logo:productImages.PW980_1,
            defaultTabsData: [
              { title: "Platforms", content: [ {
                image:productImages.A380,
                enginetext: "Airbus A380",
                description: "The Airbus A380 is the world's largest passenger airliner and the only full-length double-deck jet, developed and produced by Airbus."
              },
              
                 ] },
              { title: "Specifications", content: [{image:productImages.PW210_S_2, description:"Low Spool-Driven load compressor. " },
                  {image:productImages.PW300_H_1, description:"Main Engine start capability.   " },
                  {image:productImages.PW300_H_2, description:"120kVA two gearbox mounted generators" },
                  {image:productImages.PW210_S_3, description:"In-Flight Back-up power" },
              
  
              ] },
              // { title: "Highlights", content: [ 
              // ] },
               { title: "Customers",   content: [
                { name: "Air France	", image: productImages.Airfrance } ,
                { name: "All Nippon Airways", image: productImages.ANA } ,
                { name: "Emirates", image: productImages.Emirates } ,
                { name: "Etihad Airways", image: productImages.Etihad } ,
             
          
                  
            ]  },
             
                // {
                //   title: "History",
                //   content: [
                //    {
  
                //        enginetext:"N/A",
                //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                //      },
                //      {
                //        enginetext:"N/A",
                //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                //      },
                //   ],
                // },
            ],
            gallery: [
                    { img: productImages.PW980_1 },
                    { img: productImages.PW980_2},
                     { img: productImages.PW980_3},

                  ],
        },
          APS5000: {
            title: "APS5000",
            subTitle: "For PW India Experience Center",
            description:"The Pratt & Whitney APS5000 APU is the industry's first all-electric APU for large commercial aircraft. The APS5000 APU was designed exclusively for the Boeing 787 Dreamliner.",
            variants: [
             
  
            ],
            defaultTabsData: [
              { title: "Platforms", content: [ {
                image:productImages.APS5000,
                enginetext: "Boeing 787 Dreamline",
                description: "The bestselling passenger widebody of all time, the 787 Dreamliner fleet has carried more than one billion passengers."
              },
             
                 ] },
              { title: "Specifications", content: [{image:productImages.PW210_S_2, description:"Single-shaft, variable-speed gas turbine APU. " },
                  {image:productImages.PW300_H_2, description:"450kVA of electrical power at sea level. " },
                  {image:productImages.PW300_H_3, description:"43,100 feet start and operate." },
                 
              
  
              ] },
              // { title: "Highlights", content: [ 
              // ] },
            { title: "Customers",   content: [
                { name: "Air India	", image: productImages.AirIndia } ,
                { name: "United Airlines", image: productImages.UnitedAir } ,
                { name: "American Airlines", image: productImages.AmericanAir } ,
          
             
          
                  
            ]  },
                // {
                //   title: "History",
                //   content: [
                //    {
  
                //        enginetext:"N/A",
                //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                //      },
                //      {
                //        enginetext:"N/A",
                //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
                //      },
                //   ],
                // },
            ],
               gallery: [
                    { img: productImages.APS5000_1 },
                    { img: productImages.APS5000_2},
                     { img: productImages.APS5000_3},
                     { img: productImages.APS5000_4},
                     { img: productImages.APS5000_5},

                  ],
        },
      APS3200: {
            title: "APS3200",
            subTitle: "For PW India Experience Center",
            description:"The APS3200 is the Airbus baseline APU for the Airbus A320neo and A320ceo families of aircraft.",
            variants: [
             
  
            ],
            logo:productImages.APS3200_3,
            defaultTabsData: [
              { title: "Platforms", content: [ {
                image:productImages.A320ceo,
                enginetext: "Airbus A320ceo",
                description: "The A320ceo is a single-aisle commercial jet known for its efficiency, reliability, and popularity among airlines worldwide. Its design emphasizes fuel efficiency and operational flexibility for short to medium-haul routes."
              },
              {
                    image:productImages.A320neo,
                enginetext: "Airbus A320neo",
                description: "The A320neo is an upgraded version of the A320ceo, featuring more advanced engines and aerodynamic enhancements. It offers improved fuel efficiency, reduced emissions, and quieter operations, making it a preferred choice for modern airlines aiming to reduce operating costs and environmental impact."
              }
                 ] },
              { title: "Specifications", content: [
                  {image:productImages.PW300_H_3, description:"2,000 FT to 41,000 FT operating altitude. " },
                  {image:productImages.PW300_H_2, description:"536 HP output shaft horsepower.   " },
                  {image:productImages.Operators, description:"179 active operators worldwide. " },
                  {image:productImages.operatin_hours, description:"55M+ accumulated operating hours.    " },
  
              ] },
              // { title: "Highlights", content: [  
              // ] },
            { title: "Customers",   content: [
                { name: "Air India	", image: productImages.AirIndia } ,
                { name: "IndiGo", image: productImages.IndiGo } ,
                { name: "Airfrance", image: productImages.AmericanAir } ,

            ]  },
                
            ],
             gallery:[
            {img:productImages.APS3200_1},
            {img:productImages.APS3200_2},
            {img:productImages.APS3200_3},
            
          ]
        },
        APS1000:{
          title: "APS1000",
          subTitle: "For PW India Experience Center",
          description:"APS1000 series APUs and SPUs are the next step up in performance from our APS500 Series. The APS1000 series is based on established and proven turbine technology and provides class-leading performance in reliability and durability.",
          variants: [
           
  
          ],
          logo:productImages.APS1000_1,
          defaultTabsData: [
            { title: "Platforms", content: [  
            {
              image:productImages.APS1000_P_1,
              enginetext: "V-22 Osprey",
              description: "A tiltrotor aircraft combining helicopter-like vertical takeoff with airplane speed and range, used for transport, special operations, and search-and-rescue."
            },
            {
               image:productImages.APS1000_P_2,
              enginetext: "JAS 39 Gripen",
              description: "A cost-efficient multi-role fighter jet by Saab, known for agility and advanced avionics, used for air defense, ground attack, and reconnaissance."
            },
           
            {
               image:productImages.APS1000_P_3,
              enginetext: "T-7A Red Hawk",
              description: "A next-gen jet trainer by Boeing and Saab, preparing U.S. Air Force pilots with modern avionics for advanced fighter jets."
            }
               ] },
            { title: "Specifications", content: [
                {image:productImages.PW300_H_2, description:"Upto 340 SHP of power. " },
                {image:productImages.Operators, description:"Up to 37,000 feet operation." },
                { image:productImages.certfic,description:"FAA TSO C77a Category 1 Certification.  " },
  
            ] },
            // { title: "Highlights", content: [ ] },
            { title: "Customers",   content: [
                    { name: "United States Air Force", image: productImages.USAairforce } ,
                    { name: "Swedish Air Force", image: productImages.SwdishAir } ,
                    { name: "Italian Air Force", image: productImages.ItalianAir } ,
                   
            ]  },
              // {
              //   title: "History",
              //   content: [
              //    {
  
              //        enginetext:"N/A",
              //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
              //      },
              //      {
              //        enginetext:"N/A",
              //        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
              //      },
              //   ],
              // },
          ],
          gallery:[
            {img:productImages.APS1000_1},
            {img:productImages.APS1000_2},
            {img:productImages.APS1000_3},
            {pdf:productImages.AUP_pdf_1},
            
          ]
      },
      APS500:{
        title: "APS500",
        subTitle: "For PW India Experience Center",
        description:"APS500 series APUs and SPUs are based on established and proven turbine technology and provide class-leading performance in reliability and durability.",
        variants: [
         

        ],
       logo:productImages.APS500_1,
        defaultTabsData: [
          { title: "Platforms", content: [   {
            image:productImages.APS500_P_1,
            enginetext: "Black Hawk (Sikorsky UH-60)",
            description: "A versatile, medium-lift military utility helicopter used for troop transport, medical evacuation, and combat support missions. It is known for its durability, adaptability, and advanced avionics."
          },
          {
            image:productImages.APS500_P_2,
            enginetext: "F-16 Fighting Falcon",
            description: "A highly maneuverable, multi-role fighter aircraft designed for air superiority and ground attack missions. It is widely used by air forces around the world and features advanced radar and weapons systems."
          },
          {
            image:productImages.APS500_P_3,
            enginetext: "CH-47 Chinook",
            description: "A twin-engine, tandem-rotor heavy-lift helicopter capable of transporting troops, equipment, and supplies. It is renowned for its speed, payload capacity, and ability to operate in extreme conditions."
          },
          {
            image:productImages.APS500_3,
            enginetext: "KC-135 Stratotanker",
            description: "A military aerial refueling aircraft based on the Boeing 707 platform. It provides extended range and endurance for combat and support aircraft by refueling them mid-air."
          },
         
             ] },
          { title: "Specifications", content: [{image:productImages.Operators, description:"30,000 to 39,000 feet startup and operation." },
              {image:productImages.certfic, description:"FAA TSO C77a Category 1 Certification. " },
          


          ] },
          // { title: "Highlights", content: [  
          // ] },
          { title: "Customers",   content: [
           { name: "United States Air Force", image: productImages.USAairforce } ,
           { name: "United States Army", image: productImages.USArmy   } ,
           { name: "Royal Air Force", image: productImages.RoyalAir } ,
                   
          ]  },
           
        ],
        gallery:[
            {img:productImages.APS500_1},
            {img:productImages.APS500_2},
            {img:productImages.APS500_3},
            {pdf:productImages.AUP_pdf_2},
            
          ]
    },
 
    },
     legacy_engines: {
        Hornet: {
            title: "Hornet",
            subTitle: "For PW India Experience Center",
            description:"The Pratt & Whitney R-1690 Hornet is a 9-cylinder, air-cooled radial engine first developed in the 1920s. It was one of the early engines designed by Pratt & Whitney and played a significant role in advancing commercial and military aviation. Known for its robust construction and reliable performance, the Hornet powered many iconic aircraft of the interwar period and into World War II.",
            variants: [
             
  
            ],
            logo:productImages.PW980_1,
            defaultTabsData: [
              { title: "Platforms", content: [ {
                image:productImages.Hernet_P_1,
                enginetext: "Boeing 247",
                description: "An early American airliner."
              },
              {
                image:productImages.Hernet_P_2,
                enginetext: "Douglas DC-2",
                description: "A precursor to the famous DC-3."
              },
               {
                image:productImages.Hernet_P_3,
                enginetext: "Curtiss P-6 Hawk (some variants)",
                description: "Fighter biplane"
              },
              
                 ] },
              { title: "Specifications", content: [
                {image:productImages.PW210_S_2, description:"~525 to 750 hp (varied by variant)" },
                  {image:productImages.PW300_H_1, description:"9-cylinder air-cooled radial " },
                  {image:productImages.PW300_H_2, description:"Compression ratio: Around 6:1" },

              ] },
              { title: "Highlights", content: [ 
                 {
              image:productImages.Hernet_H_1,
              enginetext: "Reliability and Safety",
              description: "The R-1690 Hornet was widely regarded for its durability and consistent operation, especially in long-range and high-duty cycle missions. Its air-cooled design reduced the risk of cooling system failure, a common issue in early liquid-cooled engines."
            },
            {
              image:productImages.Hernet_H_2,
              enginetext: "Performance and Capability",
              description: "Though not the most powerful radial engine of its time, the Hornet was efficient, reliable, and adaptable to a wide variety of aircraft. Its performance contributed significantly to early advancements in passenger and military aviation."
            },
            {
              image:productImages.Hernet_H_3,
              enginetext: "Legacy and Impact",
              description: "The Hornet helped establish Pratt & Whitney’s reputation for engineering excellence and laid the groundwork for subsequent engines like the R-1830 Twin Wasp. It was exported and licensed for use around the world, influencing engine design globally.working to fulfill a robust backlog of new engine orders, reinforcing our commitment to excellence in military aviation."
            },
              ] },
               { title: "Customers",   content: [
                { name: "United States Army Air Corps	", image: productImages.Airfrance } ,
                { name: "United States Navy", image: productImages.ANA } ,
                { name: "Pan American Airways", image: productImages.Emirates } ,
               
            ]  },
             
            
            ],
            gallery: [
                    { img: productImages.PW980_1 },
                    { img: productImages.PW980_2},
                     { img: productImages.PW980_3},

                  ],
        },
          JT3D: {
            title: "JT3D",
            subTitle: "For PW India Experience Center",
            description:"The JT3D is a turbofan engine developed as an improvement over the JT3C turbojet, incorporating a fan for better fuel efficiency and lower noise. It was one of the first successful low-bypass turbofan engines and powered early jet airliners during the dawn of the Jet Age in the 1960s.",
            variants: [
             
  
            ],
            defaultTabsData: [
              { title: "Platforms", content: [ {
                image:productImages.Hernet_P_1,
                enginetext: "Boeing 707",
                description: ""
              },
              {
                image:productImages.Hernet_P_2,
                enginetext: "Douglas DC-8",
                description: ""
              },
              {
                image:productImages.APS5000,
                enginetext: "KC-135 Stratotanker (military)",
                description: ""
              },
             
                 ] },
              { title: "Specifications", content: [{image:productImages.PW210_S_2, description:"17,000 to 21,000 lbf thrust" },
                  {image:productImages.PW300_H_2, description:"1.5:1 Bypass ratio" },
      
              ] },
              { title: "Highlights", content: [ 
                  {
              image:productImages.Jt3d_H_1,
              enginetext: "Reliability and Safety",
              description: "A robust design based on the proven JT3C core, it offered improved reliability and range over its turbojet predecessor."
            },
            {
              image:productImages.Jt3d_H_2,
              enginetext: "Performance and Capability",
              description: "The JT3D allowed airlines to improve operating economics with greater fuel efficiency and lower maintenance demands compared to turbojets."
            },
            {
              image:productImages.Jt3d_H_3,
              enginetext: "Legacy and Impact",
              description: "It helped transition commercial aviation from the turbojet to the turbofan era and enabled intercontinental flight capabilities for early jetliners."
            },
              ] },
            { title: "Customers",   content: [
                { name: "Pan American World Airways	", image: productImages.AirIndia } ,
                { name: "American Airlines", image: productImages.AmericanAir } ,
                { name: "U.S. Air Force", image: productImages.UnitedAir } ,
                { name: "Lufthansa", image: productImages.AmericanAir } ,
                { name: "Qantas", image: productImages.Qantas } ,
          
             
          
                  
            ]  },
              
            ],
               gallery: [
                    { img: productImages.Jt3d_1 },
                    { img: productImages.Jt3d_2},
                     { img: productImages.Jt3d_3},
                     { img: productImages.Jt3d_4},
                     { img: productImages.Jt3d_5},
                     { img: productImages.Jt3d_6},

                  ],
        },
      JT8D: {
            title: "JT8D",
            subTitle: "For PW India Experience Center",
            description:"The JT8D is a low-bypass turbofan engine introduced in the early 1960s. Known for its ruggedness and long service life, the JT8D powered some of the most successful commercial jets in history, including the Boeing 727 and 737-100/200 series. It also saw wide use in military and cargo aircraft.",
            variants: [

            ],
               logo:productImages.APS3200_3,
            defaultTabsData: [
              { title: "Platforms", content: [ {
                image:productImages.Jt3d_P_1,
                enginetext: "Boeing 727",
                description: ""
              },
              {
                    image:productImages.Jt3d_P_2,
                enginetext: "Boeing 737-100/-200",
                description: ""
              },
              {
                    image:productImages.Jt3d_P_3,
                enginetext: "McDonnell Douglas DC-9",
                description: ""
              },
              {
                    image:productImages.Jt3d_P_4,
                enginetext: "McDonnell Douglas MD-80 (with -200 series)",
                description: ""
              }
                 ] },
              { title: "Specifications", content: [
                  {image:productImages.PW300_H_3, description:"14,000 to 21,000 lbf thrust " },
                  {image:productImages.PW300_H_2, description:"1.0:1 Bypass ratio   " },
                  {image:productImages.Operators, description:"14,000 units produced" },
          
  
              ] },
              { title: "Highlights", content: [ 
                 {
              image:productImages.Jt8d_H_1,
              enginetext: "Reliability and Safety",
              description: "Famous for its longevity, many JT8D engines have operated for decades with high dispatch reliability."
            },
            {
              image:productImages.Jt8d_H_2,
              enginetext: "Performance and Capability",
              description: "The JT8D’s compact and robust design made it ideal for short- to medium-haul airliners and even operation from smaller airports."
            },
            {
              image:productImages.Jt8d_H_3,
              enginetext: "Legacy and Impact",
              description: "With over 14,000 units produced, the JT8D remains one of the most successful commercial jet engines in aviation history."
            }, 
              ] },
            { title: "Customers",   content: [
                { name: "Delta Air Lines	", image: productImages.DeltaAir } ,
                { name: "American Airlines", image: productImages.AmericanAir } ,
                { name: "U.S. Navy", image: productImages.AmericanAir } ,

            ]  },
                
            ],
             gallery:[
            {img:productImages.APS3200_1},
            {img:productImages.APS3200_2},
            {img:productImages.APS3200_3},
            
          ]
        },
        JT9D:{
          title: "JT9D",
          subTitle: "For PW India Experience Center",
          description:"The JT9D is Pratt & Whitney’s first high-bypass turbofan engine and a pioneering engine for widebody aircraft. It debuted on the Boeing 747, enabling true long-range, high-capacity air travel. Its introduction marked a shift in commercial aviation, supporting larger, quieter, and more efficient airliners.",
          variants: [
           
  
          ],
          logo:productImages.APS1000_1,
          defaultTabsData: [
            { title: "Platforms", content: [  
            {
              image:productImages.APS1000_P_1,
              enginetext: "Boeing 747",
              description: ""
            },
            {
               image:productImages.APS1000_P_2,
              enginetext: "McDonnell Douglas DC-10",
              description: ""
            },
           
            {
               image:productImages.APS1000_P_3,
              enginetext: "Airbus A300",
              description: ""
            }
               ] },
            { title: "Specifications", content: [
                {image:productImages.PW300_H_2, description:"43,500 to 56,000 lbf thrust" },
                {image:productImages.Operators, description:"5:1 Bypass ratio" },
               
  
            ] },
            { title: "Highlights", content: [ 
               {
              image:productImages.Jt9d_H_1,
              enginetext: "Reliability and Safety",
              description: "Designed for long-range reliability, it established operational benchmarks for high-bypass engines."
            },
            {
              image:productImages.Jt9d_H_2,
              enginetext: "Performance and Capability",
              description: "The JT9D allowed aircraft to fly farther with heavier payloads, revolutionizing the economics of long-haul travel."
            },
            {
              image:productImages.Jt9d_H_3,
              enginetext: "Legacy and Impact",
              description: "It laid the foundation for all subsequent widebody engine development and was a direct predecessor to the PW4000 and other large turbofans."
            },
            ] },
            { title: "Customers",   content: [
                    { name: "Pan Am", image: productImages.USAairforce } ,
                    { name: "United Airlines", image: productImages.SwdishAir } ,
                    { name: "Lufthansa", image: productImages.ItalianAir } ,
                    { name: "Japan Airlines", image: productImages.ItalianAir } ,
                    { name: "Federal Express (FedEx)", image: productImages.ItalianAir } ,
                   
            ]  },
             
          ],
          gallery:[
            {img:productImages.APS1000_1},
            {img:productImages.APS1000_2},
            {img:productImages.APS1000_3},
            {pdf:productImages.AUP_pdf_1},
            
          ]
      },
      wasp:{
        title: "wasp",
        subTitle: "For PW India Experience Center",
        description:"The Pratt & Whitney R-1340 Wasp was the first engine produced by Pratt & Whitney in 1925. It is a 9-cylinder, air-cooled radial engine that became one of the most influential engines in aviation history. Renowned for its simplicity, power, and dependability, the Wasp powered a wide range of military and civilian aircraft, including trainers, bombers, and bush planes.",
        variants: [
         

        ],
        logo:productImages.APS500_1,
        defaultTabsData: [
          { title: "Platforms", content: [   {
            image:productImages.APS500_P_1,
            enginetext: "North American T-6 Texan",
            description: ""
          },
          {
            image:productImages.APS500_P_3,
            enginetext: "Douglas O-38",
            description: ""
          },
         
         
             ] },
          { title: "Specifications", content: [{image:productImages.Operators, description:"~450–600 hp power" },
              {image:productImages.certfic, description:"9-cylinder air-cooled radial" },
          


          ] },
          { title: "Highlights", content: [  
            {
              image:productImages.wasp_H_1,
              enginetext: "Reliability and Safety",
              description: "The Wasp was highly reliable and remained in use for decades, powering training and utility aircraft with minimal maintenance."
            },
            {
              image:productImages.wasp_H_2,
              enginetext: "Performance and Capability",
              description: "Its lightweight and powerful design allowed for excellent performance in both civilian and military platforms, especially in rugged or remote environments."
            },
            {
              image:productImages.wasp_H_3,
              enginetext: "Legacy and Impact",
              description: "The Wasp engine earned a reputation as a cornerstone of early 20th-century aviation and set a foundation for Pratt & Whitney’s dominance in radial engine design."
            },
          ] },
          { title: "Customers",   content: [
           { name: "United States Navy", image: productImages.USAairforce } ,
           { name: "United States Army Air Corps", image: productImages.USArmy   } ,
           { name: "Pan American Airways", image: productImages.RoyalAir } ,
           { name: "Royal Canadian Air Force", image: productImages.RoyalAir } ,
                   
          ]  },
           
        ],
        gallery:[
            {img:productImages.APS500_1},
            {img:productImages.APS500_2},
            {img:productImages.APS500_3},
            {pdf:productImages.AUP_pdf_2},
            
          ]
    },
 
    },
  };
  
  export default engineDetails;
  