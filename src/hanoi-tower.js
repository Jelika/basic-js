module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const result ={ turns: (Math.pow(2,disksNumber)-1),
       seconds: (Math.pow(2,disksNumber)-1)/(turnsSpeed/3600)

};
return result;
}
