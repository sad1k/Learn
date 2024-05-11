/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    let curr = []
    function dfs(i, sum){
        if(sum > target || i >= candidates.length){
            return
        }else if(sum === target){
            res.push([...curr])
            return
        }
        sum += candidates[i]
        curr.push(candidates[i])
        dfs(i, sum)
        sum-=candidates[i]
        curr.pop()
        dfs(i + 1, sum)
        return
    }
    dfs(0, 0)
    return res
};

combinationSum([2,3,6,7], 7)