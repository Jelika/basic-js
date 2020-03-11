module.exports = function transform( arr ) {
    if (!Array.isArray(arr)) throw new Error('not an array');
    if (arr.length === 0) return [];
    let resultArray=[];
    for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
        case '--discard-prev':
            resultArray.pop();
            break;
        case '--discard-next':
            i++;
            break;
        case '--double-next':
            ((i+1) < arr.length)? resultArray.push(arr[i+1]):resultArray;
            break;
        case '--double-prev':
            (i !== 0)? resultArray.push(arr[i - 1]): resultArray;
            break;
        default:
            resultArray.push(arr[i]);
            break;
    }
}
return resultArray;
};

