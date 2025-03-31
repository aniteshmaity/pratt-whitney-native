import { Asset } from "expo-asset";

const gtfCutway = Asset.fromModule(require("../../assets/3dModels/GTF_Cutaway.glb")).uri;
const gtftest = Asset.fromModule(require("../../assets/3dModels/turbine__turbofan_engine__jet_engine.glb")).uri;

export default {gtfCutway,gtftest};