var findRadius = function (houses, heaters) {
    let ans = Number.MIN_SAFE_INTEGER
    // 排序
    heaters.sort((a, b) => a - b)
    const len = heaters.length

    for (let i = 0, len = houses.length; i < len; i++) {
        const house = houses[i]
        const targetPos = binarySearch(heaters, 0, len - 1, house)
        let closestDistance = Number.MAX_SAFE_INTEGER
        if (heaters[targetPos] === house) {
            ans = Math.max(ans, 0)
            continue
        }
        // 比较前一个 和 后一个 得到最小值
        // 算出距离该房子最近的左右两端加热器离房子的距离并取最小值
        const pre = heaters[targetPos - 1]
        const cur = heaters[targetPos]
        if (pre !== undefined) {
            closestDistance = Math.min(closestDistance, Math.abs(house - pre))
        } else {
            closestDistance = Math.abs(house - cur)
        }

        if (cur !== undefined) {
            closestDistance = Math.min(closestDistance, Math.abs(house - cur))
        } else {
            closestDistance = Math.abs(house - pre)
        }

        // 取出这些最小值中的最大值
        ans = Math.max(ans, closestDistance)
    }

    return ans
};


// 二分查找
function binarySearch(array, start, end, target) {
    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);
        const middle = array[mid];
        if (target > middle) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
}
var a = [101027544, 144108930, 282475249, 457850878, 458777923, 470211272, 622650073, 984943658];
var b = [16531729, 74243042, 114807987, 115438165, 137522503, 143542612, 441282327, 784484492, 823378840, 823564440]
findRadius(a, b);