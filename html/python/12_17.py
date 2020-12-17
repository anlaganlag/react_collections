def maxProfit( prices, fee: int) -> int:
    profit, cost = 0, prices[0]
    for price in prices:
        cost = min(cost, price - profit)
        profit = max(profit, price - cost - fee)
        print(f'{cost=},{profit=}')

    return profit
prices = [1, 3, 2, 4, 8, 9]
fee = 2
print(maxProfit(prices,2))