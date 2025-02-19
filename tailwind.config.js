/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
       fontFamily: {
        objektiv: ['ObjektivVF_Trial_Wght', 'sans-serif'],
        objectiveBlk:['ObjektivVF_Blk', 'sans-serif'],
        frutigerBold:['Frutiger-Bold','sans-serif'] ,
        frutigerReg:['Frutiger','sans-serif'],
        frutigerBlack :['Frutige-Black','sans-serif'],
        ObjektivSBd :['ObjektivVF_SBd','sans-serif'],
        ObjektivMd :['ObjektivVF_Md','sans-serif'],
      },
    },
  },
  plugins: [],
}
