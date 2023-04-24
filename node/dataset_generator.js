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
constants.JSON_DIR = constants.DATASET_DIR + "/json";
constants.IMG_DIR = constants.DATASET_DIR + "/img";
constants.SAMPLES = constants.DATASET_DIR + "/samples.json";

const fs = require("fs");
const fileName = fs.readdirSync(constants.RAW_DIR);
/**
 * @type {{id:number,label:string,student_name:string,student_id:string}[]}
 */
const samples = [];
let id = 1;
fileName.forEach((file) => {
  const content = fs.readFileSync(constants.RAW_DIR + "/" + file);
  /**
   * @type {{session:string,student:string,drawings:{  [key: string]: number[][][]}}}
   */
  const { session, student, drawings } = JSON.parse(content.toString());
  for (let label in drawings) {
    samples.push({
      id: id,
      label: label,
      student_id: session,
      student_name:student
    });
    id++
  }
});

fs.writeFileSync(constants.SAMPLES,JSON.stringify(samples))
