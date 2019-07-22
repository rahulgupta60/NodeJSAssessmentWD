const url = require('url');

//Check Positive && number 
const isPositiveNumber = (input) => (!isNaN(input) && Math.sign(input))

// Check number for augment
module.exports.validateInput = ([input1, input2]) => {
  if (input1 && input2) {
    return isPositiveNumber(input1) && isPositiveNumber(input2)
  }
  throw new Error("input are missing")
};

// extractQuery and convert in array
module.exports.extractQuery = (reuestUrl) => {
  console.log('TCL: module.exports.extractQuery -> reuestUrl', reuestUrl);
  const url_parts = url.parse(reuestUrl, true);
  const { query: { q } } = url_parts
  return q.split(',');
};

module.exports.computeProduct = ([input1, input2]) => input1 * input2