let chain = [];

let validityOfPosition = (position, length) => Number.isInteger(position) && position >= 0 && position < length-1;

let reformValue = (value) => {
  value = (typeof value !== "undefined") ? value : '';
  return (value === null) ? 'null' : value;
};

const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    chain.push(reformValue(value));
    return this;
  },
  removeLink(position) {
    position -= 1;
    if(!validityOfPosition(position, this.getLength())){
    chain = [];
    throw new Error()
  } chain.splice(position, 1);
  return this;
  },
  reverseChain() {
    chain.reverse();
    return this;
  },
  finishChain() {
    let resultChain =  `( ${chain.join(' )~~( ')} )`; 
    chain = [];
    return resultChain;
  }
};

module.exports = chainMaker;
