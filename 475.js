/**
475. 供暖器
-- -
``
`冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

现在，给出位于一条水平线上的房屋和供暖器的位置，找到可以覆盖所有房屋的最小加热半径。

所以，你的输入将会是房屋和供暖器的位置。你将输出供暖器的最小加热半径。

说明:

给出的房屋和供暖器的数目是非负数且不会超过 25000。
给出的房屋和供暖器的位置均是非负数且不会超过10^9。
只要房屋位于供暖器的半径内(包括在边缘上)，它就可以得到供暖。
所有供暖器都遵循你的半径标准，加热的半径也一样。
示例 1:

输入: [1,2,3],[2]
输出: 1
解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
示例 2:

输入: [1,2,3,4],[1,4]
输出: 1
解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。
`
``


##
解题思路
-- -
遍历房子， 找到每个房子在加热器中的位置（ 排序好的加热器） 算出距离该房子最近的左右两端加热器离房子的距离并取最小值。 最后取出这些最小值中的最大值。 边界加判断条件。




 * 
 * 475. Heaters
 * 
 * Easy
 * 
 * 184ms 100%
 * 39mb 74.45%
 */
const findRadius = (houses, heaters) => {
    heaters.sort((n1, n2) => n1 - n2);
    let i = 0,
        r = Number.MIN_SAFE_INTEGER;
    while (i < houses.length) {
        console.log(i, getMinRadius(houses[i], heaters))
        r = Math.max(r, getMinRadius(houses[i++], heaters))
    }
    return r;
};
const getMinRadius = (num, nums) => {
    let start = 0,
        end = nums.length - 1,
        mid = Math.floor((start + end) / 2);

    // 判断边界
    if (num <= nums[0]) {
        return nums[0] - num;
    }
    if (num >= nums[end]) {
        return num - nums[end];
    }

    // 目标在范围内
    while (start < end) {
        if (nums[mid] === num) {
            return 0;
        }
        if (nums[mid] > num) {
            end = mid;
            mid = Math.floor((start + end) / 2);
        } else {
            start = mid + 1;
            mid = Math.floor((start + end) / 2);
        }
    }
    return Math.min(Math.abs(nums[mid] - num), Math.abs(nums[mid - 1] - num))
}