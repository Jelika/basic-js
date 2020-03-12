module.exports = class DepthCalculator {
    calculateDepth(arr,depth=0,arrOfDepth=[] ) {
        depth++;
        arrOfDepth.push(depth);
       arr.forEach(element => { if(Array.isArray(element)) this.calculateDepth(element,depth,arrOfDepth);
     });
     return Math.max(...arrOfDepth);
    }
};