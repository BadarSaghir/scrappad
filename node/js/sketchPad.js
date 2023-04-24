/**
 * @global
 */
class SketchPad {
  /**
   *
   * @param {HTMLElement |null} container
   * @param {number} size
   */
  constructor(container, size = 400) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = size;
    this.canvas.height = size;
    this.canvas.style.backgroundColor = "white";
    this.canvas.style.boxShadow = "0px 0px 10px 2px black";

    this.undoBtn = document.createElement("button");
    this.undoBtn.innerHTML = "UNDO";

    this.lineBr = document.createElement("br");

    container?.appendChild(this.canvas);
    container?.appendChild(this.undoBtn);
    this.ctx = this.canvas.getContext("2d");

    /**
     * @type {(number[])[][]}
     */
    this.paths = [];
    /**
     * @type {boolean}
     */
    this.isDrawing = false;
    this.#addEventListener();
    this.reset();
  }

  handleMouseDown(/**@type {MouseEvent|Touch} */ evt) {
    const mouse = this.getMouse(evt);
    this.isDrawing = true;
    this.paths.push([mouse]);
  }
  handleMouseMove(/**@type {MouseEvent|Touch} */ evt) {
    if (this.isDrawing) {
      const mouse = this.getMouse(evt);
      const lastPath = this.paths[this.paths.length - 1];
      lastPath.push(mouse);
      this.#reDraw();
    }
  }
  stopDrawing() {
    this.isDrawing = false;
  }
  #addEventListener() {
    this.canvas.onmousedown = (ev) => this.handleMouseDown(ev);
    this.canvas.onmousemove = (ev) => this.handleMouseMove(ev);
    document.onmouseup = () => this.stopDrawing();
    this.canvas.ontouchstart = (ev) => {
      const loc = /**@type {Touch}*/ (ev.touches[0]);
      this.handleMouseDown(loc);
    };
    this.canvas.ontouchmove = (ev) => {
      const loc = /**@type {Touch}*/ (ev.touches[0]);
      this.handleMouseMove(loc);
    };
    document.ontouchend = () => this.stopDrawing();
    this.undoBtn.onclick = () => {
      this.paths.pop();
      this.#reDraw();
    };
  }
  #reDraw() {
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    draw.paths(this.ctx, this.paths);
    this.setUndoBtn();
  }

  setUndoBtn() {
    this.undoBtn.disabled = this.paths.length > 0 ? false : true;
  }

  /**
   *
   * @param {MouseEvent | Touch} evt
   * @returns {number[]}
   */
  getMouse(evt) {
    const rect = this.canvas.getBoundingClientRect();
    const mouse = [
      Math.round(evt.clientX - rect.left),
      Math.round(evt.clientY - rect.top),
    ];
    return mouse;
  }

  reset() {
    this.isDrawing = false;
    this.paths = [];
    this.#reDraw();
  }
}
