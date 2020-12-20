def maxProfit( prices, fee: int) -> int:
    profit, cost = 0, prices[0]
    for price in prices:
        cost = min(cost, price - profit)
        profit = max(profit, price - cost - fee)
        print(f'{cost=},{profit=}')

    return profit
# prices = [1, 3, 2, 4, 8, 9]
# fee = 2
# print(maxProfit(prices,2))


# def allPathsSourceTarget(graph):
#     n = len(graph)
#     ans = []

#     def f(node, path):
#         if node == n - 1:
#             ans.append(path + [node])
#             return
#         for next_node in graph[node]:
#             f(next_node, path + [node])

#     f(0, [])
#     return ans

# g = [[1,2],[3],[3],[]]
# print(allPathsSourceTarget(g))


def smallestSubsequence(s: str) -> str:
    ans = set()
    for i in s:
        
        if i not in ans:
            ans.add(i)
    return "".join([i for i in ans])
s1 = "leetcode"
print(smallestSubsequence(s1))