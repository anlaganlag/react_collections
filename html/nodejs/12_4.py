
from collections import defaultdict
import heapq
def foo(nums): 
    mp = defaultdict(list)
    for x in nums:
        if queue := mp.get(x - 1):
            prevLength = heapq.heappop(queue)
            heapq.heappush(mp[x], prevLength + 1)
        else:
            heapq.heappush(mp[x], 1)
    
    return not any(queue and queue[0] < 3 for queue in mp.values())
l1=[1,2,3,3,4,5]
l2=[1,2,3,3,4,4,5,5]
l1= [1,2,3,4,4,5]
print(l1,foo(l1))
