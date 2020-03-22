/**
 * @param {string} str
 * @param {{
 * repeatTime: number;
 * separator: string;
 * addition: string;
 * additionRepeatTimes: number;
 * additionSeparator: string;
 * }} options
 */
module.exports = function repeater(str, {repeatTimes, separator='+', addition='', additionRepeatTimes, additionSeparator='|'}) {
    const resolvedAddition = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
    return (str + resolvedAddition + separator).repeat(repeatTimes -1) + str + resolvedAddition;
}