
var isPossible = function(nums) {
    const map = new Map();
    for (let x of nums) {
        if (!map.has(x)) {
            map.set(x, new MinPriorityQueue());
        }
        if (map.has(x - 1)) {
            const prevLength = map.get(x - 1).dequeue()['priority'];
            if (map.get(x - 1).isEmpty()) {
                map.delete(x - 1);
            }
            map.get(x).enqueue(x, prevLength + 1);
        } else {
            map.get(x).enqueue(x, 1);
        }
    }
    for (let [key, value] of map.entries()) {
        if (value.front()['priority'] < 3) {
            return false;
        }
    }
    return true;
};
console.log(isPossible([1,2,3,3,4,5]))