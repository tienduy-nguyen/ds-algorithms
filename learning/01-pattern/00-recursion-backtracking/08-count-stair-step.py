# Cầu thang để lên tầng trên có n bậc thang.
# Giả sử mỗi lần chúng ta chỉ có thể bước 1 or 2 bước, có bnhieu cách bước để đi tới tầng trên
# vd: input= 2 -> output = 2 (1+1, 2)
# input  =3 -> output = 3 (1+1+1, 1+2, 2+1)
def recursion(n, mem=dict()):
    if n <= 1:
        return 1
    if mem.get(n, 0) == 0:
        mem[n] = recursion(n - 1, mem) + recursion(n - 2, mem)

    return mem[n]


print(recursion(2))
print(recursion(3))
print(recursion(4))
print(recursion(10))


def withdraw(amount, coins):
    def dp(amount, coins, k):
        if amount == 0:
            return 1
        if amount < 0 or len(coins) < 1:
            return 0

        for i in range(len(coins)):
            if (amount, k) not in res:
                res[(amount, k)] = dp(amount - coins[-1], coins, k) + dp(amount, coins[:-1], k - 1)

        return len(res)

    res = {}
    return dp(amount, coins, len(coins) - 1)
