module.exports = function createDreamTeam(members) {
 if(Array.isArray(members)){
     if(members.length==0) {
         throw 'array is empty'} else {
        let result = members.reduce((acc,el,index) => 
     {
        return typeof el === "string" ? ( el = el.replace(/\s/g, ''), acc += el[0].toUpperCase()): acc}, []);
        return ( result === [] ) ? false : result.split('').sort().join('');
    }
}
else return false ;
}