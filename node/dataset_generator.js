const utils= require("./js/utils");

const fs = require("fs");
const draw=require("./js/draw")
const {createCanvas}=require('canvas')
const canvas= createCanvas(400,400)
const ctx=canvas.getContext("2d")
const constants= require("./js/constants")

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
      student_name: student,
    });
  const  paths= drawings[label]
    fs.writeFileSync(
      constants.JSON_DIR + "/" + id + ".json",
      JSON.stringify(paths)
    );
    genrateImageFile(constants.IMG_DIR + "/" + id + ".png",paths)
    utils.printProgress(id,fileName.length*8)
    id++;
  }
});

fs.writeFileSync(constants.SAMPLES, JSON.stringify(samples));

/**
 * @param {string} image
 * @param {number[][][]} paths
 */
function genrateImageFile(image, paths) {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  draw.paths(ctx,paths,"black")
  const buffer=canvas.toBuffer("image/png")
  fs.writeFileSync(image,buffer)
}

