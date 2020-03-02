module.exports = function countCats(matrix) {
 return matrix.flat().reduce((acc,el)=>{ return (el ==='^^') ? (acc=acc+1): acc },0 );
}
