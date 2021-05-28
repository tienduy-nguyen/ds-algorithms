def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)


# not good
def fibonacci_recursion(n):
    if n < 2:
        return n
    return fibonacci_recursion(n - 1) + fibonacci_recursion(n - 2)


def fibonacci(n):
    if n <= 1:
        return n
    fib = [0, 1]
    for i in range(2, n + 1):
        fib[i] = fib[i - 1] + fib[i - 2]
    return fib[n]


# Dynamic programing
def fibonacci_dp(n):
    if n <= 1:
        return n

    first, second = 0, 1

    for i in range(2, n + 1):
        first, second = second, first + second
    return second
