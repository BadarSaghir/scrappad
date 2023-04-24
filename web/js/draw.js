/**
 * @global
 */
const draw = {
  /**
   *
   * @param {CanvasRenderingContext2D | null} ctx
   * @param {(number[])[]} path
   * @param {string | CanvasGradient | CanvasPattern} color
   */
  path: (ctx, path, color = "black") => {
    if (ctx) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(path[0][0], path[0][1]);
      path.forEach((cord, idx) => {
        ctx.lineTo(cord[0], cord[1]);
      });
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.stroke();
    }
  },
  /**
   *
   * @param {CanvasRenderingContext2D | null} ctx
   * @param {(number[])[][]} paths
   * @param {string | CanvasGradient | CanvasPattern} color
   */
  paths: (ctx, paths, color = "black") => {
    paths.forEach((path, idx) => {
      draw.path(ctx, path, color);
    });
  },
};
