let idx = 0;
const labels = [
  "car",
  "fish",
  "house",
  "tree",
  "bicycle",
  "guitar",
  "pencil",
  "clock",
];

const sketchPadContainer = document.getElementById("sketchPadContainer");
const sketchPad = new SketchPad(sketchPadContainer);
const submitBtn = document.getElementById("adavanceBtn");
const studentField = /**@type {HTMLInputElement} */ (
  document.getElementById("student")
);
const instructions = /**@type {HTMLInputElement} */ (
  document.getElementById("instructions")
);

const data = {
  student: "",
  sessoon: new Date().getTime(),
/**@type {Record<string,((number[])[][])>} */
  drawings: {},
};

if (submitBtn && sketchPadContainer)
  submitBtn.onclick = (ev) => {
    if (studentField?.value == "") {
      alert("Please type your name first!");
      return;
    }

    data.student = studentField.value;
    studentField.style.display = "none";
    sketchPadContainer.style.visibility = "visible";
    const label = labels[idx];
    instructions.innerHTML = "Please Draw a " + label;
    submitBtn.innerHTML = "Next";
    submitBtn.onclick = (evt) => next(evt);
  };

/**
 *
 * @param {MouseEvent} evt
 */
function next(evt) {
    if(sketchPad.paths.length==0){
        alert("Draw Something First!")
        return
    }
    const label = labels[idx];
    data.drawings[label]=sketchPad.paths
    sketchPad.reset()
    idx++
    if(idx<labels.length){
    const nextlabel = labels[idx];
    instructions.innerHTML = "Please Draw a " + nextlabel;
    }else{
        if(sketchPadContainer)
        sketchPadContainer.style.visibility="hidden"
        instructions.innerHTML="Thank you!"
        if(submitBtn){
        submitBtn.innerHTML="Save"
        submitBtn.onclick=save
        }
    }
}
function save(){
    if(submitBtn && instructions){
        submitBtn.style.display="none"
       instructions.innerHTML="Take your download File and place it alongside others datasets"
       const downloadLink=document.createElement('a')
       downloadLink.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(JSON.stringify(data)))
       const fileName=data.sessoon+".json"
       downloadLink.setAttribute('download',fileName)
       document.body.appendChild(downloadLink)
       downloadLink.click()
       document.body.removeChild(downloadLink)
       downloadLink.style.display="none"
        }

}