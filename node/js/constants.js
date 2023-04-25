const fs = require("fs")
const constants = {
    DATA_DIR: "../data",
    RAW_DIR: "",
    DATASET_DIR: "",
    JSON_DIR: "",
    IMG_DIR: "",
    SAMPLES: "",
    JS_OBJECTS:"../web/js_objects",
    SAMPLES_JS:""
  };
  
  constants.RAW_DIR = constants.DATA_DIR + "/raw";
  constants.DATASET_DIR = constants.DATA_DIR + "/dataset";
  if (!fs.existsSync(constants.DATASET_DIR)) fs.mkdirSync(constants.DATASET_DIR);
  constants.JSON_DIR = constants.DATASET_DIR + "/json";
  if (!fs.existsSync(constants.JSON_DIR))fs.mkdirSync(constants.JSON_DIR);
  constants.IMG_DIR = constants.DATASET_DIR + "/img";
  if (!fs.existsSync(constants.IMG_DIR)) fs.mkdirSync(constants.IMG_DIR);
  constants.SAMPLES = constants.DATASET_DIR + "/samples.json";
  constants.SAMPLES_JS = constants.JS_OBJECTS + "/samples.js";
  if (!fs.existsSync(constants.JS_OBJECTS)) fs.mkdirSync(constants.JS_OBJECTS);
  module.exports=constants