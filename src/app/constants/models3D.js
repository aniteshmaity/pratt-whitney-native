import { Asset } from "expo-asset";

const gtfCutway = Asset.fromModule(require("../../assets/3dModels/GTF_Cutaway.glb")).uri;
const gtftest = Asset.fromModule(require("../../assets/3dModels/turbine__turbofan_engine__jet_engine.glb")).uri;
const gtfGlb = Asset.fromModule(require("../../assets/3dModels/GTF_Engine_static-v1.glb")).uri;

export default {gtfCutway,gtftest,gtfGlb};