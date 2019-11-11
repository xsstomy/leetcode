## 475. 供暖器
---
```冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

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
```


## 解题思路
---
遍历房子，找到每个房子在加热器中的位置（排序好的加热器）算出距离该房子最近的左右两端加热器离房子的距离并取最小值。最后取出这些最小值中的最大值。边界加判断条件。

为什么用二分查找
## code
---
```javascript
/**
 * 
 * 475. Heaters
 * 
 * Easy
 * 
 * 184ms 100%
 * 39mb 74.45%
 */
const findRadius = (houses, heaters) => {
  let ans = Number.MIN_SAFE_INTEGER
  // 排序
  heaters.sort((a, b) => a - b)
  const len = heaters.length

  for (let i = 0, max = houses.length; i < max; i++) {
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
    }
    closestDistance = Math.min(closestDistance, Math.abs(house - cur))
    // 取出这些最小值中的最大值
    ans = Math.max(ans, closestDistance)
  }

  return ans
}

// 二分查找
function binarySearch(array, start, end, target) {
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    const middle = array[mid]
    if (target > middle) {
      start = mid + 1
    } else {
      end = mid
    }
  }
  return start
}

```

binarySearch(array, start, end, target) {
    while(start < end) {
        const mid = Math.floor(start + (end - start) / 2);
        const middle = array[mid]
        if (target > middle) {
            start = mid + 1;
        }else {
            end = mid
        }
    }

    return start
}