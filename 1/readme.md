```javascript

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i = 0,
        j = 0,
        iNum = 0,
        jNum = 0,
        leng = nums.length;

    for(i = 0; i < leng; i += 1) {
        iNum = nums[i];
        for(j = i + 1; j < leng; j += 1) {
            jNum = nums[j];
            if((iNum + jNum) === target) {
                return [i,j];
            }
        }
    }
};

```



