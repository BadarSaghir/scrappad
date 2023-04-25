const utils = {
  /**
   *
   * @param {number} count
   * @param {number} max
   */
  printProgress: (count, max) => {},
  /**
   * 
   * @param {number} n 
   */
  formatPercent:(n)=>(n*100).toFixed(2)+"%"
};

/**
 *
 * @param {number} count
 * @param {number} max
 */
utils.printProgress = (count, max) => {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0)
  const percent=utils.formatPercent(count/max)
  process.stdout.write(count+"/"+max+` ("${percent}")`)
};

if(typeof module!==undefined) module.exports=utils