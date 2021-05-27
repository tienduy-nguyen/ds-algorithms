# https://www.youtube.com/watch?v=-pwA82acNNY
def recursion(amount, coins):
    if amount == 0:
        return 1
    if amount < 0 or len(coins) == 0:
        return 0
    return recursion(amount - coins[-1], coins) + recursion(amount, coins[:-1])


def recursion2(amount, coins):
    if amount == 0:
        return 1
    if amount < 0 or len(coins) == 0:
        return 0
    return recursion(amount - coins[0], coins) + recursion(amount, coins[1:])


print(recursion(5, [5, 2, 1]))


def dynamic_programming(amount, coins):
    def ways(amount, coins, n):
        if amount == 0:
            print(res)
            return 1
        if amount < 0 or len(coins) == 0:
            return 0

        # use a secondary spreadsheet - su dung bang tinh phu
        if (amount, n) not in res:
            res[(amount, n)] = ways(amount - coins[-1], coins, n) + ways(amount, coins[:-1], n - 1)
        return res[(amount, n)]

    res = {}
    return ways(amount, coins, len(coins) - 1)


print(dynamic_programming(5, [5, 2, 1]))
