import yearImages from '../constants/yearImages';
import { productEngines } from './productEngineData';

const yearSlidedata = [
    {
      year: "1920",
      title: "Lorem Insum Dolar sit in the black",
      subtitle: " Legendary Engine for a Legendary Bomber",
      description:
        "Experience a history of development engines from the first radial cooled engine in 1925 to the hybrid electric technologies of today.The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine",
      image: yearImages.machine1,
      buttonLink: "/yearEngineDetails",
      timeline: [
        { year: "1920s", text: "Pioneering the Future of Flight" },
        { year: "1930s", text: "Advancing Innovations" },
      ],

      // innerSlidesData: [
      //   {
      //     year: "1921",
      //     description:
      //       "Experience a history of development engines from the first radial cooled engine in 1925 to the hybrid electric technologies of today.The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine",
      //     title: "Lorem Insum Dolar sit in the black",
      //     subtitle: "Legendary Engine for a Legendary Bomber",
      //     image: yearImages.machine1,
      //     slideImages: [
      //       { img: yearImages.layer1 },
      //       { img: yearImages.layer2 },
      //       { img: yearImages.layer1 },
      //       { img: yearImages.layer3 },
      //       { img: yearImages.layer3 },
      //       { img: yearImages.layer3 },
      //       { img: yearImages.layer1 },
      //       { img: yearImages.layer1 },
      //       { img: yearImages.layer1 },
      //       { img: yearImages.layer1 },
      //       { img: yearImages.layer1 },
      //     ],
      //   },
      //   {
      //     year: "1922",
      //     description:
      //       "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
      //     title: "Pratt & Whitney",
      //     subtitle: "A 100 years",
      //     image: yearImages.machine2,
      //     slideImages: [
      //       { img: yearImages.layer1 },
      //       { img: yearImages.layer3 },
      //       { img: yearImages.layer2 },
      //       { img: yearImages.layer1 },
      //     ],
      //   },
      //   {
      //     year: "1923",
      //     description:
      //       "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
      //     title: "Pratt & Whitney",
      //     subtitle: "A 100 years",
      //     image: yearImages.machine1,
      //     slideImages: [
      //       { img: yearImages.layer1 },
      //       { img: yearImages.layer1 },
      //       { img: yearImages.layer1 },
      //       { img: yearImages.layer3 },
      //     ],
      //   },
      // ],
      innerSlidesData: [
        {
          id:1,
          year: "1925",
          description: [
            {text:"Rentshcler envisions a lighter, powerful and reliable air-cooled engine for aircraft",bold: false},
            { text: "\n\n", bold: false },
            { text: "Frederick Brant Rentschler, ", bold: true },
            { text: "American", bold: false },
            { text: " aircraft engine", bold: true, link: "https://en.wikipedia.org/wiki/Aircraft_engine" },
            { text: " designer, aviation engineer, industrialist, and the founder of ", bold: false,},
            { text: "Pratt & Whitney Aircraft", bold: true, link: "https://www.prattwhitney.com" },
            { text: " left the Army believing that future aircraft would need lighter, more powerful, and reliable engines. His vision for an air-cooled engine contradicted prevailing norms.", bold: false,},
            { text: "\n\n", bold: false },
            { text: ", Rentschler partnered with the Pratt & Whitney Machine Tool Company in Hartford, Connecticut, founded by Francis A. Pratt and Amos Whitney, securing funding to develop the engine. This led to the founding of Pratt & Whitney Aircraft Company in 1925, with Rentschler and Mead holding a controlling stake. ", bold: false },
          ],
          title: "Frederick B Rentschler establishes Pratt & Whitney",
          subtitle: "Rentshcler envisions a lighter, powerful and reliable air-cooled engine for aircraft",
          image: yearImages.I_1925_1,
          thumbnail:yearImages.I_1925_2,
            isExplore: false,
          slideImages: [
            { img: yearImages.I_1925_1 },
            { img: yearImages.I_1925_2 },
            { img: yearImages.I_1925_3 },
         
          ],
        },
        {
          id:2,
          year: "1925",
          description: [
            {text:"Wasp’s performance and reliability revolutionized American aviation",bold: false},
            { text: "\n\n", bold: false },
            {text:"Pratt & Whitney Aircraft's first engine, completed on Christmas Eve 1925, was named the Wasp by Faye Rentschler. The 425 horsepower (317 kW) R-1340 Wasp easily passed its official qualification test in March 1926 and the Navy ordered 200 engines. The speed, climb performance, and reliability that the engine offered revolutionized American aviation",bold: false},
            { text: "\n\n", bold: false },
            { text: "A total of 34,966 engines of the single-row, nine-cylinder, air-cooled, radial design engine were produced.  The Wasp has powered numerous fixed-wing aircraft including Boeing 247 and P-29, Air Tractor AT-301, North American T-6 Texan/Harvard, Goodyear K-class blimp, Lockheed Model 8 Sirius, Northrop C-19 Alpha, Vought O2U Corsair and was used to power helicopters, the Agusta-Bell AB.102 and the Sikorsky H-19, and a class of airship, the K-class blimp.", bold: false },

          ],
          title: "The air-cooled Wasp revolutionizes propulsion",
          subtitle: "Wasp’s performance and reliability revolutionized American aviation.",
          image: yearImages.wasp_1925_1,
          thumbnail:yearImages.I_1925_2,
            isExplore: false,
          slideImages: [
            { img: yearImages.wasp_1925_1 },
            { img: yearImages.wasp_1925_2 },
            { img: yearImages.wasp_1925_3 },
      
          ],
        },
        {
          id:3,
          year: "1927",
          description: [
            {text:"The Hornet was a single-row, 9-cylinder air-cooled radial design ",bold: false},
            { text: "\n\n", bold: false },
            {text:"The Pratt & Whitney R-1690 Hornet was a widely used American aircraft engine developed by Pratt & Whitney. Nearly 3,000 engines were produced from 1926 to 1942, following its first flight in 1927. The Hornet was a single-row, 9-cylinder air-cooled radial design and was also built under license in Italy as the Fiat A.59.The R-1860 Hornet B was an enlarged version produced from 1929. The Hornet series of engines was similar to the Wasp but larger. ",bold: false},
            { text: "\n\n", bold: false },
            { text: "The Hornet and Hornet B were used across various aircraft platforms, including the Boeing 80, Fokker F-32, Sikorsky S-40, and Lockheed Lodestar.", bold: false },

          ],   title: "The Hornet makes its first flight",
          subtitle: "The Hornet was a single-row, 9-cylinder air-cooled radial design ",
          image: yearImages.I_1927_1,
          thumbnail:yearImages.I_1925_2,
            isExplore: true,
                 redirectLinkData:productEngines[7]?.engines[0]?.details,
          slideImages: [
            { img: yearImages.I_1927_1 },
            { img: yearImages.I_1927_2 },
            { img: yearImages.I_1927_3 },
            { img: yearImages.I_1927_4 },
          ],
        },
        {
          id:4,
          year: "1928",
          description: [
            {text:"Established as a service center it took over the production of Wasp engines",bold: false},
            { text: "\n\n", bold: false },
            {text:"The Canadian Pratt & Whitney Aircraft Company, Ltd. was originally established and founded as a service center for its parent company's aircraft engines. However, the production of Wasp engines was transferred to Pratt & Whitney Canada when the founding entity shifted focus to develop jet engines.",bold: false},
            { text: "\n\n", bold: false },
            { text: "Today, Pratt & Whitney Canada has 66,000 engines in service with more than 15,000 customers across 200+ countries and territories. In 2023, we achieved 1 billion flight hours across general, regional, and business aviation, helicopters, and APUs.", bold: false },

          ],
          title: "Pratt & Whitney Canada is founded",
          subtitle: "Established as a service center it took over the production of Wasp engines",
          image: yearImages.I_1928_1,
          thumbnail:yearImages.I_1928_1,
                   isExplore: false,
          slideImages: [
            { img: yearImages.I_1928_1 },
            { img: yearImages.I_1928_2 },
            { img: yearImages.I_1928_3 },
            { img: yearImages.I_1928_4 },
          ],
        },
        {
          id:5,
          year: "1929",
          description: [
            {text:"A combination of airframe and aircraft engine and airline business ",bold: false},
            { text: "\n\n", bold: false },
            {text:"In 1929, William Boeing of Boeing Airplane & Transport Corporation and Frederick Rentschler of Pratt & Whitney formed United Aircraft and Transport Corporation, a vertically integrated aviation firm combining airframe and engine manufacturing with airline operations. The holding company controlled major aviation manufacturers, including Boeing, Northrop, Chance Vought, Hamilton Aero, Pratt & Whitney, Sikorsky, and Stearman, along with airlines like Boeing Air Transport and Pacific Air Transport. It also oversaw aviation schools, export businesses, and airport developments, such as Burbank Airport and factories in East Hartford.  ",bold: false},
         

          ],
          title: "United Aircraft and Transport Corporation is born",
          subtitle: "A combination of airframe and aircraft engine and airline business",
          image: yearImages.I_1929_1,
          thumbnail:yearImages.I_1929_1,
                   isExplore: false,
          slideImages: [
            { img: yearImages.I_1929_1 },
            { img: yearImages.I_1929_2 },
            { img: yearImages.I_1929_3 },
         
          ],
        },
      ],
    },
    {
      
      year: "1930",
      title: "Lorem Insum Dolar sit in the black",
      subtitle: " Legendary Engine for a Legendary Bomber",
      description:
        "Experience a history of development engines from the first radial cooled engine in 1925 to the hybrid electric technologies of today.The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine",
      image: yearImages.machine1,
      buttonLink: "/yearEngineDetails",
      timeline: [
        { year: "1930s", text: "Advancing Innovations" },
        { year: "1940s", text: "Powering the War Effort" },
      ],

      innerSlidesData: [
        {
          id:1,
          year: "1930",
          description:[
            {text:"The R-1830 Twin Wasp powers iconic aircraft, including the Douglas DC-3 and B-24 Liberator. With over 173,000 units produced, it becomes the world’s most widely used aircraft engine. "},
                { text: "\n\n"},
                  {text:"Its reliability and efficiency establish Pratt & Whitney as a dominant force in aviation propulsion. "},
                   { text: "\n\n"},
                  {text:"Mostly retired today, the R-1830 is still used on Douglas DC-3 and various museum aircraft and warbirds seen at airshows. "},
          ],
           
          title: "Twin Wasp R-1830 Debuts",
      cloneTitle: "Twin Wasp R-1830 Debuts",
      subtitle: " Becomes the most-produced aircraft engine in history",
          image: yearImages.I_1930_1,
          isExplore: true,
            redirectLinkData:productEngines[7]?.engines[4]?.details,
          slideImages: [
            { img: yearImages.I_1930_1 },
            { img: yearImages.I_1930_2 },
            { img: yearImages.I_1930_3 },
            { img: yearImages.I_1930_4 },
          ],
        },
        
      ],
    },
    {
      year: "1940",
      title: "Lorem Insum Dolar sit in the black",
      subtitle: " Legendary Engine for a Legendary Bomber",
      description:
        "Experience a history of development engines from the first radial cooled engine in 1925 to the hybrid electric technologies of today.The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine",
      image: yearImages.machine1,
      buttonLink: "/yearEngineDetails",
      timeline: [
      { year: "1940s", text: "Powering the War Effort" },
        { year: "1950s", text: "Ushering in the Jet Age" },
      ],

      innerSlidesData: [
        {
          id:1,
          year: "1942",
          description:
            [{text:"The R-2800 radial engine, producing up to 2,400 hp, powers legendary WWII aircraft like the P-47 Thunderbolt, F4U Corsair, and B-26 Marauder. Its power and durability make it one of the most successful engines of the war, supporting the Allied air superiority efforts."}],
          title: "R-2800 Double Wasp Powers WWII Planes",
          cloneTitle: "R-2800 Double Wasp Powers WWII Planes",
          subtitle: "Drives victory in the skies.",
          image: yearImages.I_1942_1,
            isExplore: true,
                redirectLinkData:productEngines[7]?.engines[4]?.details,
          slideImages: [
            { img: yearImages.I_1942_1 },
            { img: yearImages.I_1942_2 },
            { video: yearImages.V_1942_1 },
        
          ],
        },
        {
            id:2,
          year: "1945",
          description:
           [{text:"Aiding the allied war effort over 300,000 Pratt & Whitney engines were produced. Production also included 500,000 Hamilton Standard Propellers, 20000 Chance Vought airplanes and 150 Sikorsky helicopters"}],
          title: "Aiding the allied war effort with 300,000 engines ",
          cloneTitle: "300K engines produced during wartime",
          subtitle: "300,000 engines produced during wartime ",
          image: yearImages.I_1945_1,
            isExplore: false,
          slideImages: [
            { img: yearImages.I_1945_1 },
            { img: yearImages.I_1945_2 },
     
          ],
        },
        
      ],
    },
    {
      year: "1950",
      title: "Lorem Insum Dolar sit in the black",
      subtitle: " Legendary Engine for a Legendary Bomber",
      description:
        "Experience a history of development engines from the first radial cooled engine in 1925 to the hybrid electric technologies of today.The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine",
      image: yearImages.machine1,
      buttonLink: "/yearEngineDetails",
      timeline: [
        { year: "1950s", text: "Ushering in the Jet Age" },
        { year: "1960s", text: "Innovating Fast, and Reliable Propulsion" },
      ],

      innerSlidesData: [
        {
          id:1,
          year: "1952",
          description:
          [
            {text:"The J57 turbojet is the first U.S. jet engine to deliver over 10,000 pounds of thrust. It enables the B-52 (military version TF33 turbofan engine) to achieve intercontinental range and helps the F-100 become the first fighter capable of sustained supersonic flight.",bold: false},
            { text: "\n\n", bold: false },
            {text:"The J57 wins the prestigious Collier Trophy for its groundbreaking design. ",bold: false},
         

          ],
          title: "J57 Becomes First Mass-Produced Jet Engine",
          cloneTitle: "J57 Becomes First Mass-Produced Jet Engine",
          subtitle: "Powers B-52 Stratofortress and F-100 Super Sabre",
          image: yearImages.I_1952_1,
           isExplore: false,
          slideImages: [
            { img: yearImages.I_1952_1 },
            { img: yearImages.I_1952_2 },
            { video: yearImages.V_1952_1 },
          
          ],
        },
        {
          id:2,
          year: "1958",
          description:
            [
            {text:"Derived from the J57, the JT3 turbojet becomes the first engine to power a U.S. commercial jetliner, the Boeing 707. "},
            { text: "\n\n"},
            {text:"It enables faster, long-distance air travel, marking the beginning of the modern airline industry. Variants of this engine later power the Boeing 720 and military KC-135 tanker."},
         
          ],
          title: "JT3 Powers the Boeing 707",
          cloneTitle: "JT3 Powers the Boeing 707",
          subtitle: "Enables the Jet Age.",
          image: yearImages.I_1958_1,
           isExplore: true,
              redirectLinkData:productEngines[7]?.engines[1]?.details,
          slideImages: [
            { img: yearImages.I_1958_1 },
            { img: yearImages.I_1958_2 },
            { img: yearImages.I_1958_3 },
            { img: yearImages.I_1958_4 },
            { img: yearImages.I_1958_5 },
            { img: yearImages.I_1958_6 },
          ],
        },
       
      ],
    },
    {
      year: "1960",
      title: "Lorem Insum Dolar sit in the black",
      subtitle: "A Legendary Engine for a Legendary Bomber",
      description:
        "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
      image: yearImages.machine2,
      buttonLink: "/yearEngineDetails",
      slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer2 },
        { img: yearImages.layer1 },
        { img: yearImages.layer3 },
      ],
      innerSlidesData: [
        {
          id:1,
          year: "1963",
          description:  [
            {text:"The PT6 engine becomes the most successful turboprop of all time, with over 64,000 units produced. Known for its reliability, it powers aircraft like the Beechcraft King Air, Pilatus PC-12, and de Havilland Twin Otter. Its modular design allows for easy maintenance and adaptability across various (129+) applications."},
            { text: "\n\n"},
            {text:"PT6 family of engines currently power aircraft in service with over 7,500 operators in more than 180 countries and having accumulated over 400+ million flying hours"},
         
          ],
           title: "PT6 Turboprop Engine Launch",
          cloneTitle: "PT6 Turboprop Engine Launch",
          subtitle: "Revolutionizes general aviation.",
          image: yearImages.machine1,
           isExplore: true,
            redirectLinkData:productEngines[2]?.engines[3]?.details,
           slideImages: [
        { img: yearImages.I_1963_1 },
        { img: yearImages.I_1963_2 },
        { img: yearImages.I_1963_3 },
        { img: yearImages.I_1963_4 },
        { video: yearImages.V_1960_1 },
        { video: yearImages.V_1960_2 },
      ],
        },
        {
          id:2,
          year: "1964",
          description:  [
            {text:"he J58 enables the SR-71 to cruise at Mach 3+ for extended periods. Using a variable cycle design, the engine transitions from turbojet to ramjet operation, setting new records for speed and altitude. It remains unmatched in its capabilities even decades after retirement."},
            { text: "\n\n"},
            {text:"At the Mach 3-plus cruising speed the engine operated at incredibly high temperatures. Almost no material used in conventional engines would work in the J58. Pratt & Whitney engineers had to come up with new alloys for turbine blades, new ways to forge and heat treat disks, and new manufacturing processes to roll superalloy sheets into engine cases. The engine even needed a new Pratt & Whitney eagle logo made out of stainless steel. The ceramic material used on the standard engine badge cracked and flaked when exposed to J58 temperatures."},
         
          ],
           title: "J58 Powers SR-71 Blackbird",
          cloneTitle: "J58 Powers SR-71 Blackbird",
          subtitle: "World’s fastest air-breathing engine",
          image: yearImages.I_1964_J1,
           isExplore: false,
           slideImages: [
        { img: yearImages.I_1964_J1 },
        { img: yearImages.I_1964_J2 },
        { img: yearImages.I_1964_J3 },
        { img: yearImages.I_1964_J4 },
      ],
        },
        {
          id:3,
          year: "1963-64",
          description: [
            {text:"In the early 1960s, Air India entered the jet age by introducing its first jet-powered aircraft, the Boeing 707-437, marking a major milestone in Indian aviation history.  With the 707s Air India  becoming the first Asian airline to operate a jet aircraft on transcontinental routes"},
            { text: "\n\n"},
            {text:"The Boeing 707-437s used by Air India were powered by Pratt & Whitney JT3D turbofan engines, marking an important milestone for Pratt & Whitney’s History of aerospace partnership with India. "},
         
          ],
          title: "Air India enters jet-age with JT3D Engines",
          cloneTitle: "Air India enters jet-age with JT3D Engines",
          subtitle: "Air India gets Boeing 707s with JT3D Engines",
          image: yearImages.I_1963_64_J1,
           isExplore: true,
            redirectLinkData:productEngines[7]?.engines[1]?.details,
           slideImages: [
        { img: yearImages.I_1963_64_J1 },
        { img: yearImages.I_1963_64_J2 },
        { img: yearImages.I_1963_64_J3 },
        { img: yearImages.I_1963_64_J4 },
        { img: yearImages.I_1963_64_J5 },
      ],
        },
        {
             id:4,
          year: "1964",
          description: [
            {text:"The JT8D turbofan engine powers aircraft like the Boeing 727, 737, and Douglas DC-9. Its high efficiency and durability make it the best-selling commercial jet engine of its era, with over 14,000 units produced."},
            { text: "\n\n"},
            {text:"The JT8D engine has completed more than 673 million dependable flying hours since entering service. Once deemed the workhorse of the industry, more than 14,750 JT8D engines have flown. Today, there are 2,400 engines still in use.<p/><br><p>The eight models that make up the JT8D family cover a thrust range from 14,000 to 17,000 pounds. "},
         
          ],
         title: "JT8D Revolutionizes Commercial Aviation",
          cloneTitle: "JT8D Revolutionizes Commercial Aviation",
          subtitle: "Most widely used turbofan of its time.",
          image: yearImages.machine2,
           isExplore: true,
              redirectLinkData:productEngines[7]?.engines[2]?.details,
           slideImages: [
        { img: yearImages.I_1964_JT1 },
        { img: yearImages.I_1964_JT2 },
        { img: yearImages.I_1964_JT3 },
     
      ],
        },
        {
          id:5,
          year: "1966",
          description: [
            {text:"Pratt & Whitney Canada launched the development of the turbofan engine in 1966 to meet the demand from Cessna Aircraft Company for an aircraft powered by fan jets that would cruise at 400 mph. A pioneer design in the category of small fan jets, the JT15D produced 2,200 lbs of thrust in its initial version. Rugged and simple in design, this engine began a nearly 60-year relationship between Pratt & Whitney Canada and Textron Inc."},
 
          ],
         title: "JT15D – Pratt & Whitney  Canada’s first turbofan engine",
          cloneTitle: "JT15D – Pratt & Whitney  Canada’s first turbofan engine",
          subtitle: "A pioneer design in the category of small fan jets",
          image: yearImages.I_1966_1,
           isExplore: false,
           slideImages: [
        { img: yearImages.I_1966_1 },
        { img: yearImages.I_1966_2 },
        { img: yearImages.I_1966_3 },
        { img: yearImages.I_1966_4 },
      ],
        },
        {
          id:6,
          year: "1969",
          description: [
            {text:"The Apollo 11 mission is supported by Pratt & Whitney fuel cells and Hamilton Standard environmental controls and portable life-support."},
            { text: "\n\n"},
            {text:"Pratt & Whitney’s  fuell cells were only the world’s second practical fuel cell design, the first having been invented for NASA’s Gemini missions, which were preparation for the Apollo Moon shot. "},
         
          ],
         title: "P&W Fuel cells take man to the moon",
          cloneTitle: "P&W Fuel cells take man to the moon",
          subtitle: "Fuel cells that power mankind’s giant leap ",
          image: yearImages.I_1969_1,
           isExplore: false,
           slideImages: [
        { img: yearImages.I_1969_1 },
        { img: yearImages.I_1969_2 },
    
      ],
        },
      ],
      timeline: [
        { year: "1960s", text: "Innovating Fast, and Reliable Propulsion" },
        { year: "1970s", text: "Commercial Aviation Leadership" },
      ],
    },
    {
      year: "1970",
      title: "Lorem Insum Dolar sit in the black",
      subtitle: "A Legendary Engine for a Legendary Bomber",
      description:[
            {text:"The JT9D introduces the high-bypass concept, dramatically improving fuel efficiency and range for long-haul flights. It enables the Boeing 747 to become the backbone of international travel, setting new standards for commercial aviation."},
            { text: "\n\n"},
            {text:"Pratt & Whitney's JT9D  introduced many advanced technologies in structures, aerodynamics and materials to improve fuel efficiency and reliability. Since entering service on the Boeing 747 in 1970, the JT9D has proven itself to be the workhorse for early 747, 767, A300, A310 and DC-10 aircraft models"},
         
          ],
      image: yearImages.machine2,
      buttonLink: "/yearEngineDetails",
      
      slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine2 },
      ],
      innerSlidesData: [
        {
          id:1,
          year: "1970",
          description: [  {text:"The JT9D introduces the high-bypass concept, dramatically improving fuel efficiency and range for long-haul flights. It enables the Boeing 747 to become the backbone of international travel, setting new standards for commercial aviation."},
            { text: "\n\n"},
            {text:"Pratt & Whitney's JT9D  introduced many advanced technologies in structures, aerodynamics and materials to improve fuel efficiency and reliability. Since entering service on the Boeing 747 in 1970, the JT9D has proven itself to be the workhorse for early 747, 767, A300, A310 and DC-10 aircraft models"},
         ],
        title: "JT9D Powers the Boeing 747",
          cloneTitle: "JT9D Powers the Boeing 747",
          subtitle: "First high-bypass turbofan for widebody jets.",
          image: yearImages.JT_1970_1,
           isExplore: true,
                 redirectLinkData:productEngines[7]?.engines[3]?.details,
          slideImages: [
        { img: yearImages.JT_1970_1 },
        { img: yearImages.JT_1970_2 },
        { img: yearImages.JT_1970_3 },
      
      ],
        },
        {
          id:2,
          year: "1971",
          description:  [{text:"Air India's introduction of the Boeing 747 into its fleet in the early 1970s marked a new era of long-haul, high-capacity international travel for the airline. The carrier initially operated the Boeing 747-200B variant, which was powered by the Pratt & Whitney JT9D turbofan engines—one of the first high-bypass turbofan engines developed for wide-body aircraft."},
            { text: "\n\n"},
            {text:"The JT9D's reliability and performance made it a suitable match for Air India's global ambitions, supporting iconic routes between India, Europe, and North America while reinforcing the airline's reputation for modern, jet-powered service."},
         ],
         title: "Powering Air India’s ‘Queen Of The Skies’",
          cloneTitle: "Powering Air India’s ‘Queen Of The Skies’",
          subtitle: "Pratt & Whitney powers Air India’s ‘Queen of the Skies’ the Boeing 747 with JT9D",
          image: yearImages.AI_1971_1,
           isExplore: false,
          slideImages: [
        { img: yearImages.AI_1971_1 },
        { img: yearImages.AI_1971_2 },
        { img: yearImages.AI_1971_3 },
        { img: yearImages.AI_1971_4 },
      ],
        },
        {
          id:3,
          year: "1972",
          description:  [{text:"The F100’s revolutionary design allows fighters to achieve supersonic speeds without afterburner. It becomes the standard engine for the F-15 Eagle and F-16 Fighting Falcon, serving as the backbone of the U.S. Air Force for decades."},
            { text: "\n\n"},
            {text:"The F100 engine featured the first digital electronic engine control, which optimized performance for pilots."},
         ],
          title: "F100 Powers F-15s and F-16",
          cloneTitle: "F100 Powers F-15s and F-16",
          subtitle: "First afterburning turbofan for fighters",
          image: yearImages.F_1972_1,
           isExplore: true,
             redirectLinkData:productEngines[1]?.engines[5]?.details,
          slideImages: [
        { img: yearImages.F_1972_1 },
        { img: yearImages.F_1972_2 },
        { img: yearImages.F_1972_3 },
        { img: yearImages.F_1972_4 },
        { img: yearImages.F_1972_5 },
        { img: yearImages.F_1972_6 },
        { img: yearImages.F_1972_7 },
        { img: yearImages.F_1972_8 },
        { img: yearImages.F_1972_9 },
        { video: yearImages.V_1972_1 },
      ],
        },
      ],
      timeline: [
        { year: "1970s", text: "Commercial Aviation Leadership" },
        { year: "1980s", text: "FADEC, V2500 and PW100" },
      ],
    },
    {
      year: "1980",
      title: "Lorem Insum Dolar sit in the black",
      subtitle: "A Legendary Engine for a Legendary Bomber",
      description:
        "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
      image: yearImages.machine2,
      buttonLink: "/yearEngineDetails",
      slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
      innerSlidesData: [
        {
          id:1,
          year: "1984",
          description:  [{text:"When shipments for the PW100 engine family began, they quickly became the preferred customer choice in the regional turboprop segment – powering nearly 60% of all aircraft delivered in that division."},
            { text: "\n\n"},
            {text:"Pratt & Whitney Canada didn’t just invent the regional aviation market segment; we changed the industry. Our PW100/PW150 engines power over 3,300 regional aircraft globally that connect families, create personal mobility, and drive commerce. The latest variant PW127XT was introduced in 2022."},
         ],
         title: "PW100 Engine Family Deliveries Begin",
          cloneTitle: "PW100 Engine Family Deliveries Begin",
          subtitle: "Dominates regional turboprop segment.",
          image: yearImages.PW100_1984_1,
           isExplore: true,
                          redirectLinkData:productEngines[0]?.engines[0]?.details,
          slideImages: [
        { img: yearImages.PW100_1984_1 },
        { img: yearImages.PW100_1984_2 },
        { img: yearImages.PW100_1984_3 },
        { img: yearImages.PW100_1984_4 },
        { img: yearImages.PW100_1984_5 },
        { img: yearImages.PW100_1984_6 },
        { img: yearImages.PW100_1984_7 },
        { img: yearImages.PW100_1984_8 },
      ],
        },
        {
          id:2,
          year: "1984",
          description: [{text:"Born from a multinational collaboration under International Aero Engines (IAE), the V2500 engine made its mark by powering the Airbus A320 family with exceptional fuel efficiency and lower emissions. Featuring advanced fan and high-pressure compressor technology, the V2500 became one of the most successful high-bypass turbofans in commercial aviation history, with over 7,000 units delivered. Its quiet operation and performance balance made it a preferred choice for airlines across the globe."},
           
         ],
          title: "V2500 Lifts the A320ceo Skyward",
          cloneTitle: "V2500 Lifts the A320ceo Skyward",
          subtitle: "Pratt & Whitney powers Air India’s ‘Queen of the Skies’ the Boeing 747 with JT9D",
          image: yearImages.V2500_1984_1,
           isExplore: true,
                 redirectLinkData:productEngines[4]?.engines[1]?.details,
          slideImages: [
            { img: yearImages.V2500_1984_1 },
            { img: yearImages.V2500_1984_2 },
            { img: yearImages.V2500_1984_3 },
            { img: yearImages.V2500_1984_4 },
            { img: yearImages.V2500_1984_5 },
            { img: yearImages.V2500_1984_6 },
            { img: yearImages.V2500_1984_7 },
     
      ],
        },
        {
          year: "1984",
          id:3,
          description: [{text:"The Pratt & Whitney PW2000 debuted in 1984 as the first commercial engine equipped with Full-Authority Digital Electronic Control (FADEC), offering precise engine management and enhanced fuel efficiency. Certified for 180-minute Extended-range Twin-engine Operations (ETOPS), it enabled the Boeing 757 to undertake transoceanic flights with improved reliability."},
            { text: "\n\n"},
            {text:"The PW2000 family, delivering thrust between 37,000 and 43,000 pounds, also powers the C-17 Globemaster III military transport as the F117-PW-100 variant, underscoring its versatility and enduring legacy in both commercial and military aviation ."},
         ],
          title: "PW2000 – First with FADEC",
          cloneTitle: "PW2000 – First with FADEC",
          subtitle: "Digital control revolutionises commercial jet engines.",
          image: yearImages.PW2000_1984_1,
           isExplore: true,
            redirectLinkData:productEngines[4]?.engines[3]?.details,
          slideImages: [
            { img: yearImages.PW2000_1984_1 },
            { img: yearImages.PW2000_1984_2 },
            { img: yearImages.PW2000_1984_3 },
            { video:yearImages.VPW100_1984_1},

      ],
        },
        {
          id:4,
          year: "1989",
          description: [{text:"The PW300 series offers excellent fuel economy and durability, powering aircraft like the Dassault Falcon 7X and Hawker 4000. Its advanced materials reduce emissions and noise, aligning with stricter environmental regulations."},
           
         ],
          title: "PW300 Engine First Flight",
          cloneTitle: "PW300 Engine First Flight",
          subtitle: "Enhances mid-size business jets.",
          image: yearImages.PW300_1989_1,
           isExplore: true,
            redirectLinkData:productEngines[4]?.engines[3]?.details,
          slideImages: [
            { img: yearImages.PW300_1989_1 },
            { img: yearImages.PW300_1989_2 },
            { img: yearImages.PW300_1989_3 },

      ],
        },
      ],
      timeline: [
       { year: "1980s", text: "FADEC, V2500 and PW100" },
        { year: "1990s", text: "PW4000 and PW500 become clean leaders" },
      ],
    },
    {
      
      year: "1990",
      title: "Lorem ipsum ",
      subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description:
        "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
      image: yearImages.machine1,
      // thumbnail:machine1,
      buttonLink: "/yearEngineDetails",
     slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
      innerSlidesData: [
        {
          id:1,
          year: "1990",
             description:  [{text:"During the 1990s, one of Pratt & Whitney’s notable achievements was the success of the PW4000 engine family. The PW4000 powered wide-body aircraft including the Boeing 777 and Airbus A330. Innovative, fuel-efficient and with lower emissions, the PW4000 helped airlines reduce operational costs while complying with stricter environmental regulations."},
           
         ],
         title: "PW4000  powers B777s and A330s",
          cloneTitle: "PW4000  powers B777s and A330s",
          subtitle: "First fifth-generation fighter engine",
          image: yearImages.P400_1990_1,
           isExplore: true,
             redirectLinkData:productEngines[4]?.engines[2]?.details,
          // thumbnail:machine1,
         slideImages: [
            { img: yearImages.P400_1990_1 },
            { img: yearImages.P400_1990_2 },
            { img: yearImages.P400_1990_3 },
            { img: yearImages.P400_1990_4 },
            { img: yearImages.P400_1990_5 },
            { img: yearImages.P400_1990_6 },
            { img: yearImages.P400_1990_7 },
            { img: yearImages.P400_1990_8 },
            {video:yearImages.V_1990_1 },
            {video:yearImages.V_1990_2 },
     
      ],
        },
        {
          id:2,
          year: "1991-97",
             description:  [{text:"The F119 introduces thrust vectoring for extreme agility and allows the F-22 to sustain supersonic speeds without afterburner. This “supercruise” capability gives the F-22 a significant advantage over adversaries."},
         ],
          title: "F119 Powers F-22 Raptor",
          cloneTitle: "F119 Powers F-22 Raptor",
          subtitle: "First fifth-generation fighter engine",
          image: yearImages.F119_1990_1,
            isExplore: true,
             redirectLinkData:productEngines[1]?.engines[3]?.details,
          // thumbnail:machine1,
         slideImages: [
            { img: yearImages.F119_1990_1 },
            { img: yearImages.F119_1990_2 },
            { img: yearImages.F119_1990_3 },
            { img: yearImages.F119_1990_4 },
            { img: yearImages.F119_1990_5 },
            { img: yearImages.F119_1990_6 },
            { video:yearImages.V_1991_1 },
    
      ],
        },
        {
          id:3,
          year: "1996",
             description: [{text:"The PW500 engine family is launched and has become the clean and clear leader in the highly demanding fractional ownership business jet market, powering light to mid-size business jets in the 2,900 to 4,500 pound thrust class. Its low fuel consumption ensures attractive operating economics  and environmental friendliness."},
         ],
          title: "PW500 is launched",
          title: "PW500 is launched",
          subtitle: "Becomes a leader in the business jet market",
          image: yearImages.PW500_1990_1,
            isExplore: true,
                redirectLinkData:productEngines[5]?.engines[2]?.details,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.PW500_1990_1 },
        { img: yearImages.PW500_1990_2 },
        { img: yearImages.PW500_1990_3 },
        
      ],
        },
      ],
      timeline: [
        { year: "1990s", text: "PW4000 and PW500 become clean leaders" },
        { year: "2000s", text: "Innovation and new frontiers" },
      ],
    },
    {
      
      year: "2000",
      title: "Lorem ipsum ",
      subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description:
        "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
      image: yearImages.machine1,
      // thumbnail:machine1,
      buttonLink: "/yearEngineDetails",
     slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
      innerSlidesData: [
        {
          id:1,
          year: "2000",
            description: [{text:"The formal launch of a full-scale technology demonstrator, the PW625F, is launched. The PW600 engine family is the preferred engine family for a new generation of light jets in the 900 to 3,000 pound thrust class. It is compact, fuel efficient, clean and delivers excellent operating economics."},
         ],
         title: "Launch of the PW600",
          cloneTitle: "Launch of the PW600",
          subtitle: "Introduced for the very light & light jet market",
          image: yearImages.PW600_2000_1,
            isExplore: true,
               redirectLinkData:productEngines[5]?.engines[1]?.details,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.PW600_2000_1 },
        { img: yearImages.PW600_2000_2 },
        { img: yearImages.PW600_2000_3 },
       
      ],
        },
        {
          id:2,
          year: "2005",
          description: [{text:"Young upstart IndiGo’s landmark order of 100 A320ceos changes the faces of private Indian aviation. Nearly two decades later, the V2500 powered A320ceos are still in services with Indian airlines, and IndiGo ."},
         ],
          title: "Indigo orders the V2500",
          cloneTitle: "Indigo orders the V2500",
          subtitle: "Changes the course of Indian aviation",
          image: yearImages.V2500_2005_1,
            isExplore: true,
                 redirectLinkData:productEngines[4]?.engines[1]?.details,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.V2500_2005_1 },
        { img: yearImages.V2500_2005_2 },
        { img: yearImages.V2500_2005_3 },
        { img: yearImages.V2500_2005_5 },
        { img: yearImages.V2500_2005_6 },
      ],
        },
        {
          id:3,
          year: "2006",
           description: [
            {text:"The F135 engine provides the F-35 Lightning II with unparalleled thrust and stealth characteristics. It enables vertical takeoff and landing for the F-35B variant and incorporates digital controls for enhanced performance."},
             { text: "\n\n"},
            {text:"With more than 40,000 lbs. of thrust, unmatched low-observable signature, world-class thermal management, and the most advanced integrated engine control system ever created, the F135 engine is the heartbeat of the F-35."},
             { text: "\n\n"},
            {text:"Not only is the F135 the most powerful and most advanced fighter engine ever produced, it’s also the most dependable. F135 has surpassed one million engine flight hours powering the F-35 Lightning II."},
         ],
         title: "F135 Powers F-35 Fighter Jet",
          cloneTitle: "F135 Powers F-35 Fighter Jet",
          subtitle: "Most advanced fighter engine ever built.",
          image: yearImages.F15_2008_1,
            isExplore: true,
            redirectLinkData:productEngines[1]?.engines[2]?.details,
          // thumbnail:machine1,
         slideImages: [
            { img: yearImages.F15_2008_1 },
            { img: yearImages.F15_2008_2 },
            { img: yearImages.F15_2008_3 },
            { img: yearImages.F15_2008_4 },
            { img: yearImages.F15_2008_5 },
            { img: yearImages.F15_2008_6 },
            { img: yearImages.F15_2008_7 },
            { img: yearImages.F15_2008_8 },
            { video:yearImages.V_2006_1 },
            { video:yearImages.V_2006_2 },
            { video:yearImages.V_2006_3 },
      ],
        },
         {
          id:4,
          year: "2008",
           description: [
            {text:"Pratt & Whitney introduced the revolutionary Geared Turbofan (GTF) engine, which decoupled the fan from the low-pressure turbine, significantly reducing fuel consumption, emissions, and noise, solidifying Pratt & Whitney as a leader in enabling more sustainable aviation. The GTF engine was chosen for the Bombardier C Series (now known as the Airbus A220), the Airbus A320neo family, Mitsubishi SpaceJet and Embraer E-Jets E2, proving Pratt & Whitney’s ability to develop technological advancements that help satisfy the industry’s increasing demand for emissions reduction while meeting the strong global demand for air travel."},
            
         ],
         title: "Revolutionary GTF’s First Flight",
          cloneTitle: "Revolutionary GTF’s First Flight",
          subtitle: "Quietest, Greenest & Cleanest",
          image: yearImages.GTF_2008_1,
            isExplore: true,
                redirectLinkData:productEngines[4]?.engines[0]?.details,
          // thumbnail:machine1,
         slideImages: [
            { img: yearImages.GTF_2008_1 },
            { img: yearImages.GTF_2008_2 },
            { img: yearImages.GTF_2008_3 },
            { img: yearImages.GTF_2008_4 },
            { img: yearImages.GTF_2008_5 },
            { img: yearImages.GTF_2008_6 },
            { img: yearImages.GTF_2008_7 },
            { img: yearImages.GTF_2008_8 },
            { img: yearImages.GTF_2008_9 },
            { img: yearImages.GTF_2008_10 },
            { img: yearImages.GTF_2008_11 },
            { img: yearImages.GTF_2008_12 },
            { img: yearImages.GTF_2008_13},
            { video:yearImages.V_2008_1},
     
      ],
        },
      ],
      timeline: [
        { year: "2000s", text: "Innovation and new frontiers" },
        { year: "2010s", text: "Decade of expansion" },
      ],
    },
    {
      
      year: "2010",
      title: "Lorem ipsum ",
      subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description:
        "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
      image: yearImages.machine1,
      // thumbnail:machine1,
      buttonLink: "/yearEngineDetails",
     slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
      innerSlidesData: [
        {
          id:1,
          year: "2014",
             description: [
            {text:"Four F117s provide exclusive power for the C-17 Globemaster III, the world's premier heavy airlifter. The F117-PW-100 is the sister engine of Pratt & Whitney's PW2040 commercial engine, which powers the Boeing 757."},
             { text: "\n\n"},
            {text:"Generating 40,440 pounds of thrust the F117 engines come with various technological and material advances that enable the IAF’s C-17 Globemaster IIIs to operate from numerous environments without significant compromise on operational capabilities."},
             
         ],
          title: "First C-17s arrive for the Indian Air Force",
          cloneTitle: "First C-17s arrive for the Indian Air Force",
          subtitle: "Backbone of IAF’s cargo missions",
          image: yearImages.C_2014_1,
           isExplore: false,
          // thumbnail:machine1,
         slideImages: [
            { img: yearImages.C_2014_1 },
            { img: yearImages.C_2014_2 },
            { img: yearImages.C_2014_3 },
            { img: yearImages.C_2014_4 },
            { img: yearImages.C_2014_5 },
      
      ],
        },
        {
          id:2,
          year: "2015",
             description: [
            {text:"The first brick and mortar investment by Pratt & Whitney into India, the state-of-the-art Customer Training Center in Hyderabad provides specialized training to airline engineers & technicians on PW’s most advanced commercial engines – the GTF and the V2500. "},
             { text: "\n\n"},
            {text:"The center has imparted training to more than 60 operators representing over 40 nationalities."},
             
         ],
          title: "India Customer Training Center is established",
          cloneTitle: "India Customer Training Center is established",
          subtitle: "Global hub for critical entry-into-service trainings",
          image: yearImages.C_2015_1,
           isExplore: false,
          // thumbnail:machine1,
         slideImages: [
            { img: yearImages.C_2015_1 },
            { img: yearImages.C_2015_2 },
            { img: yearImages.C_2015_3 },
            { img: yearImages.C_2015_4 },
            { img: yearImages.C_2015_5 },
            { img: yearImages.C_2015_6 },
            { img: yearImages.C_2015_7 },
            { img: yearImages.C_2015_8 },
            { img: yearImages.C_2015_9 },
            { video:yearImages.V_2015_1 },
 
      ],
        },
        {
          id:3,
          year: "2016",
             description: [
            {text:"Indian airlines like IndiGo become early adopters of the GTF. India operates more than 140 Airbus A320neo family aircraft powered by Pratt & Whitney GTF™ engines, which deliver industry-leading sustainability benefits and world-class operating costs, thanks to their unique geared fan architecture."},
             { text: "\n\n"},
            {text:"Since induction the GTF has saved Indian airlines, more than 1 billion liters of fuel and 2.5 million metric tons of CO2 in India."},
             
         ],
          title: "IndiGo A320neos Fly With GTF",
          cloneTitle: "IndiGo A320neos Fly With GTF",
          subtitle: "1 billion liters of fuel saved  for Indian airlines ",
          image: yearImages.GTF_2016_1,
            isExplore: true,
              redirectLinkData:productEngines[4]?.engines[0]?.details,
          // thumbnail:machine1,
         slideImages: [
         { img: yearImages.GTF_2016_1 },
            { img: yearImages.GTF_2016_2 },
            { img: yearImages.GTF_2016_3 },
            { img: yearImages.GTF_2016_4 },
            { img: yearImages.GTF_2016_5 },
            { img: yearImages.GTF_2016_6 },
            { img: yearImages.GTF_2016_7 },
            { img: yearImages.GTF_2016_8 },
            { video:yearImages.V_2016_1 },
            { video:yearImages.V_2008_1 },
      ],
        },
        {
          id:4,
          year: "2017",
             description: [
            {text:"Since entering into service, the PW800 has been powering a new generation of business jets. The PW800 engine delivers the best overall performance, with double-digit improvements in fuel burn, environmental emissions, and engine noise, thanks to its optimized bypass ratio and an impressive menu of new technologies. The PW800 engine family currently powers Gulfstream Aerospace Corp.’s G500 and G600 aircraft and was selected for its G400 business jet with a planned entry into service in 2025. Dassault Aviation also selected the PW800 engine to power its Falcon 6X ultra widebody jet scheduled to enter service in 2023."},
   
         ],
          title: "PW800 Engine Enters Into Service",
          cloneTitle: "PW800 Engine Enters Into Service",
          subtitle: "Global hub for critical entry-into-service trainings ",
          image: yearImages.PW_2018_1,
            isExplore: true,
             redirectLinkData:productEngines[5]?.engines[0]?.details,
          // thumbnail:machine1,
         slideImages: [
            { img: yearImages.PW_2018_1 },
            { img: yearImages.PW_2018_3 },
            { img: yearImages.PW_2018_4 },
            { img: yearImages.PW_2018_5},
           
      
      ],
        },
      ],
      timeline: [
        { year: "2010s", text: "Decade of expansion" },
        { year: "2020s", text: "Focus on the future" },
      ],
    },
    {
      
      year: "2020",
      title: "Lorem ipsum ",
      subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description:
        "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
      image: yearImages.PW_2018_1,
      // thumbnail:machine1,
      buttonLink: "/yearEngineDetails",
     slideImages: [
        { img: yearImages.PW_2018_1 },
        { img: yearImages.PW_2018_3 },
        { img: yearImages.PW_2018_4 },
        { img: yearImages.PW_2018_5 },
      ],
      innerSlidesData: [
        {
          id:1,
          year: "2021",
             description: [
            {text:"Pratt & Whitney, in collaboration with Collins Aerospace, develops hybrid-electric propulsion for regional aircraft. This technology aims to reduce fuel consumption and emissions by combining traditional turbofan engines with electric power."},
   
         ],
          title: "Hybrid-Electric Propulsion regional demonstrator",
          cloneTitle: "Hybrid-Electric Propulsion regional demonstrator",
          subtitle: "To power future regional and sustainable aircraft.",
          image: yearImages.H_2021_1,
           isExplore: false,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.H_2021_1 },
        { video: yearImages.V_2021_1 },
       
      ],
        },
        {
          id:2,
          year: "2022-24",
           description: [
            {text:"From 2022 to 2024 Pratt & Whitney significantly expands its India presence – and makes a combined $40 million investment in the India Engineering Center (IEC), India Capability Center (ICC) and India Digital Capability Center in Bengaluru. All three Centers of Excellence are focused on utilizing India’s talent to shape the future of propulsion from India, for the world."},
   
         ],
          title: "Pratt & Whitney invests in India Centers of Excellence",
          cloneTitle: "Pratt & Whitney invests in India Centers of Excellence",
          subtitle: "Supply chain, engineering and digital transformation",
          image: yearImages.PW_2022_1,
           isExplore: false,
          // thumbnail:machine1,
         slideImages: [
            { img: yearImages.PW_2022_1 },
            { img: yearImages.PW_2022_2 },
            { img: yearImages.PW_2022_3 },
            { img: yearImages.PW_2022_4 },
            { img: yearImages.PW_2022_5 },
            { img: yearImages.PW_2022_6 },
            { img: yearImages.PW_2022_7 },
            { img: yearImages.PW_2022_8 },
            { img: yearImages.PW_2022_9 },
            { img: yearImages.PW_2022_10 },
            { img: yearImages.PW_2022_11 },
            { img: yearImages.PW_2022_12 },
            { img: yearImages.PW_2022_13 },
        { video: yearImages.V_2022_1 },
      ],
        },
         {
          id:3,
          year: "2023",
           description: [
            {text:"Powered by twin PW127G engines, Indian Air Force gets its first Airbus C295 military transport aircraft."},
    { text: "\n\n"},
     {text:"The PW100/150 family is also the engine power of India's UDAN regional aviation vision, the PW127, PW127XT and the PW150 power nearly 90 ATR 42/72 and Q400 aircraft for airlines like IndiGo, SpiceJet and Alliance Air."},
         ],
          title: "India’s First C295 Arrives",
          cloneTitle: "India’s First C295 Arrives",
          subtitle: "Pratt & Whitney powers IAF’s transport modernisation",
          image: yearImages.C_2023_1,
           isExplore: false,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.C_2023_1 },
        { img: yearImages.C_2023_2 },
        { img: yearImages.C_2023_3 },
        { video: yearImages.V_2023_1 },
      ],
        },
        {
          id:4,
          year: "2024",
         description: [
            {text:"RTX announces the completion of the preliminary design review for the hybrid-electric propulsion demonstrator engine being developed as part of the SWITCH project, supported by the European Union's Clean Aviation Joint Undertaking (Clean Aviation)."},
    { text: "\n\n"},
     {text:"By combining two Collins Aerospace megawatt-class electric motor generators within a Pratt & Whitney GTF™ engine, the hybrid-electric propulsion system aims to enhance engine efficiency across all phases of flight, offering the potential to reduce fuel burn and emissions for future short- and medium-range aircraft."},
         ],
         title: "Hybrid-electric GTF™ engine demonstrator",
          cloneTitle: "Hybrid-electric GTF™ engine demonstrator",
          subtitle: "Pratt & Whitney powers IAF’s transport modernisation",
          image: yearImages.S_2024_1,
           isExplore: true,
           redirectLinkData:productEngines[5]?.engines[0]?.details,
          // thumbnail:machine1,
         slideImages: [
            { img: yearImages.S_2024_1 },
            { img: yearImages.S_2024_2 },
            { img: yearImages.S_2024_3 },
       
      ],
        },
      ],
      timeline: [
     { year: "2020s", text: "Focus on the future" },
        { year: "2030s", text: "Advancing innovation" },
      ],
    },
  ];

export default yearSlidedata;