import yearImages from '../constants/yearImages';

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
        { year: "1920s", text: "Power of the future" },
        { year: "1930s", text: "The new era" },
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
          image: yearImages.machine1,
          thumbnail:yearImages.I_1925_2,
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
          image: yearImages.machine1,
          thumbnail:yearImages.I_1925_2,
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
          image: yearImages.machine1,
          thumbnail:yearImages.I_1925_2,
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
          image: yearImages.machine1,
          thumbnail:yearImages.I_1925_2,
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
          image: yearImages.machine1,
          thumbnail:yearImages.I_1925_2,
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
        { year: "1930s", text: "Power of the future" },
        { year: "1940s", text: "The new era" },
      ],

      innerSlidesData: [
        {
          id:1,
          year: "1931",
          description:
            "Experience a history of development engines from the first radial cooled engine in 1925 to the hybrid electric technologies of today.The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine",
          title: "Lorem Insum Dolar sit in the black",
          subtitle: "Legendary Engine for a Legendary Bomber",
          image: yearImages.machine1,
          slideImages: [
            { img: yearImages.layer1 },
            { img: yearImages.layer2 },
            { img: yearImages.layer1 },
            { img: yearImages.layer3 },
            { img: yearImages.layer3 },
            { img: yearImages.layer3 },
            { img: yearImages.layer1 },
          ],
        },
        {
          id:2,
          year: "1932",
          description:
            "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine1,
          slideImages: [
            { img: yearImages.layer1 },
            { img: yearImages.layer3 },
            { img: yearImages.layer2 },
            { img: yearImages.layer1 },
          ],
        },
        {
          id:3,
          year: "1933",
          description:
            "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine1,
          slideImages: [
            { img: yearImages.layer1 },
            { img: yearImages.layer1 },
            { img: yearImages.layer1 },
            { img: yearImages.layer3 },
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
        { year: "1940s", text: "Power of the future" },
        { year: "1950s", text: "The new era" },
      ],

      innerSlidesData: [
        {
          year: "1941",
          description:
            "Experience a history of development engines from the first radial cooled engine in 1925 to the hybrid electric technologies of today.The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine",
          title: "Lorem Insum Dolar sit in the black",
          subtitle: "Legendary Engine for a Legendary Bomber",
          image: yearImages.machine1,
          slideImages: [
            { img: yearImages.layer1 },
            { img: yearImages.layer2 },
            { img: yearImages.layer1 },
            { img: yearImages.layer3 },
            { img: yearImages.layer3 },
            { img: yearImages.layer3 },
            { img: yearImages.layer1 },
          ],
        },
        {
          year: "1942",
          description:
            "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine2,
          slideImages: [
            { img: yearImages.layer1 },
            { img: yearImages.layer3 },
            { img: yearImages.layer2 },
            { img: yearImages.layer1 },
          ],
        },
        {
          year: "1943",
          description:
            "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine1,
          slideImages: [
            { img: yearImages.layer1 },
            { img: yearImages.layer1 },
            { img: yearImages.layer1 },
            { img: yearImages.layer3 },
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
        { year: "1950s", text: "Power of the future" },
        { year: "1960s", text: "The new era" },
      ],

      innerSlidesData: [
        {
          year: "1951",
          description:
            "Experience a history of development engines from the first radial cooled engine in 1925 to the hybrid electric technologies of today.The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine",
          title: "Lorem Insum Dolar sit in the black",
          subtitle: "Legendary Engine for a Legendary Bomber",
          image: yearImages.machine1,
          slideImages: [
            { img: yearImages.layer1 },
            { img: yearImages.layer2 },
            { img: yearImages.layer1 },
            { img: yearImages.layer3 },
            { img: yearImages.layer3 },
            { img: yearImages.layer3 },
            { img: yearImages.layer1 },
          ],
        },
        {
          year: "1952",
          description:
            "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine2,
          slideImages: [
            { img: yearImages.layer1 },
            { img: yearImages.layer3 },
            { img: yearImages.layer2 },
            { img: yearImages.layer1 },
          ],
        },
        {
          year: "1953",
          description:
            "The TF33 is the United States Air Force designation for the Pratt & Whitney JT3 commercial engine,First flown 60 years ago, and with more than 1,000 engines still in..",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine1,
          slideImages: [
            { img: yearImages.layer1 },
            { img: yearImages.layer1 },
            { img: yearImages.layer1 },
            { img: yearImages.layer3 },
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
          year: "1961",
          description: "Boring Seven",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine1,
        },
        {
          year: "1962",
          description: "Next Leap",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine1,
        },
        {
          year: "1963",
          description: "Next Leap",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine2,
        },
      ],
      timeline: [
        { year: "1960s", text: "The new era" },
        { year: "1970s", text: "Advancing innovation" },
      ],
    },
    {
      year: "1970",
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
        { img: yearImages.machine2 },
      ],
      innerSlidesData: [
        {
          year: "1971",
          description: "Boring Seven",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine1,
        },
        {
          year: "1972",
          description: "Next Leap",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine2,
        },
        {
          year: "1973",
          description: "Next Leap",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine2,
        },
      ],
      timeline: [
        { year: "1970s", text: "The new era" },
        { year: "1980s", text: "Advancing innovation" },
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
          year: "1981",
          description: "Boring Seven",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine1,
        },
        {
          year: "1982",
          description: "Next Leap",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine2,
        },
        {
          year: "1983",
          description: "Next Leap",
          title: "Pratt & Whitney",
          subtitle: "A 100 years",
          image: yearImages.machine2,
        },
      ],
      timeline: [
        { year: "1980s", text: "The new era" },
        { year: "1990s", text: "Advancing innovation" },
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
          year: "1991",
             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.",
          title: "Lorem ipsum ",
          subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          // image: machine1,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
        },
        {
          id:2,
          year: "1992",
             description: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.",
          title: "Lorem ipsum ",
          subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: yearImages.machine1,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
        },
        {
          id:3,
          year: "1993",
             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.",
          title: "Lorem ipsum ",
          subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: yearImages.machine1,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
        },
      ],
      timeline: [
        { year: "1990s", text: "The new era" },
        { year: "2000s", text: "Advancing innovation" },
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
          year: "2001",
             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.",
          title: "Lorem ipsum ",
          subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          // image: machine1,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
        },
        {
          id:2,
          year: "2002",
             description: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.",
          title: "Lorem ipsum ",
          subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: yearImages.machine1,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
        },
        {
          id:3,
          year: "2003",
             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.",
          title: "Lorem ipsum ",
          subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: yearImages.machine1,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
        },
      ],
      timeline: [
        { year: "2000s", text: "The new era" },
        { year: "2010s", text: "Advancing innovation" },
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
          year: "2011",
             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.",
          title: "Lorem ipsum ",
          subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          // image: machine1,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
        },
        {
          id:2,
          year: "2012",
             description: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.",
          title: "Lorem ipsum ",
          subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: yearImages.machine1,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
        },
        {
          id:3,
          year: "2013",
             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.",
          title: "Lorem ipsum ",
          subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: yearImages.machine1,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
        },
      ],
      timeline: [
        { year: "2010s", text: "The new era" },
        { year: "2020s", text: "Advancing innovation" },
      ],
    },
    {
      
      year: "2020",
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
          year: "2021",
             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.",
          title: "Lorem ipsum ",
          subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          // image: machine1,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
        },
        {
          id:2,
          year: "2022",
             description: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.",
          title: "Lorem ipsum ",
          subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: yearImages.machine1,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
        },
        {
          id:3,
          year: "2023",
             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.  Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante.",
          title: "Lorem ipsum ",
          subtitle: "Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          image: yearImages.machine1,
          // thumbnail:machine1,
         slideImages: [
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.layer1 },
        { img: yearImages.machine1 },
      ],
        },
      ],
      timeline: [
        { year: "2020s", text: "The new era" },
        { year: "2030s", text: "Advancing innovation" },
      ],
    },
  ];

export default yearSlidedata;