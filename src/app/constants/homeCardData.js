import homeImages from "./homeImages";



const homeCardData = [
 null,
    {
      title: {
         startName: "100 Years of Powering",
        endName: "the Future",
      },

      description:
       "Browse through Pratt & Whitney’s 100-year history of pushing the boundaries of aviation to shape the future of flight.",
      videoUrl:
      homeImages.year100Video,
      link: "/hundred-years",
      triggerCloseAnimation: true,
    },
    {
      title: {
       startName: "GTF",
        endName: "Experience",
      },

      description:
       "Get up close and explore in 3D the Pratt & Whitney GTF™ engine — powering aviation’s most efficient single-aisle aircraft.",
      videoUrl:
      homeImages.gtfVideo,
      link: "/experience3d/GTF3d",
    },
    {
      title: {
        startName: "Our Marquee",
        endName: "Products",
      },

      description:
       "Pratt & Whitney is a world leader in the design, manufacture, and service of aircraft engines and auxiliary power units.",
      videoUrl:
      homeImages.productVideo,
      link: "/products",
    },
    {
      title: {
        startName: "Connected",
        endName: "Aerospace",
      },

      description:
        "Experience in 3D how RTX is innovating the future of flight with Pratt & Whitney and Collins Aerospace.",
      videoUrl:
      homeImages.aerospaceVideo,
      link: "conAerospace",
    },
    // {
    //   title: {
    //     startName: "RTX",
    //     endName: "In India",
    //   },

    //   description:
    //     "Experience a history of development engines from the first radial cooled engine in 1925 to the hybrid electric technologies of today.",
    //   videoUrl:
    //   homeImages.new1,
    //   link: "mapPage",
    // },
    {
      title: {
        startName: "Pratt & Whitney",
        endName: "in India",
      },

      description:
        "With 600 aircraft powered across commercial, military, and regional aviation, see how we are shaping the future of aviation in India.",
      videoUrl:
      homeImages.pw100Video,
      link: "mapPage",
    },
    null
    
  ];
  export default homeCardData;