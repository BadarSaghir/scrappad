const fs = require("fs")
const constants = {
    DATA_DIR: "../data",
    RAW_DIR: "",
    DATASET_DIR: "",
    JSON_DIR: "",
    IMG_DIR: "",
    SAMPLES: "",
  };
  
  constants.RAW_DIR = constants.DATA_DIR + "/raw";
  constants.DATASET_DIR = constants.DATA_DIR + "/dataset";
  if (!fs.existsSync(constants.DATASET_DIR)) 
  fs.mkdirSync(constants.DATASET_DIR);
  constants.JSON_DIR = constants.DATASET_DIR + "/json";
  if (!fs.existsSync(constants.JSON_DIR)) 
  fs.mkdirSync(constants.JSON_DIR);
  constants.IMG_DIR = constants.DATASET_DIR + "/img";
  if (!fs.existsSync(constants.DATASET_DIR)) 
  fs.mkdirSync(constants.IMG_DIR);
  constants.SAMPLES = constants.DATASET_DIR + "/samples.json";

  module.exports=constants