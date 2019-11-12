/**
 * @time 20191112
 * @xsstomy
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var leng = s.length;
    if (leng <= 1) return leng;

    var max = 0;
    var i = 0;
    var tempStr = '';

    while (i < leng) {
        var currChar = s.charAt(i);
        var index = tempStr.indexOf(currChar);

        if (index === -1) {
            i++;
            tempStr += currChar;
            max = Math.max(max, tempStr.length);
        } else {
            tempStr = tempStr.slice(index + 1);
        }
    }

    return max;
};