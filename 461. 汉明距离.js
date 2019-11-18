/**
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

注意：
0 ≤ x, y < 231.

示例:

输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。

 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let strX = x.toString(2);
    let strY = y.toString(2);
    let max = Math.max(strX.length, strY.length);
    let min = Math.min(strX.length, strY.length);
    let temStr = "";
    for (let i = 0; i < max - min; i++) {
        temStr += "0";
    }


    let sum = 0;
    if (strX.length >= strY.length) {
        strY = temStr + strY;
        for (let i = 0; i < max; i++) {
            if (strX[i] != strY[i]) {
                sum++;
            }
        }
    } else if (strY.length >= strX.length) {
        strX = temStr + strX;
        for (let i = 0; i < max; i++) {
            if (strY[i] != strX[i]) {
                sum++;
            }
        }
    }


    return sum;
};