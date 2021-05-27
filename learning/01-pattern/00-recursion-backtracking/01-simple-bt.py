# https://o2.edu.vn/thuat-toan-quay-lui-va-minh-hoa/

n = 3
x = n * [0]


def fine_print(x):
    tmp = ""
    for i in x:
        tmp += str(i)
    return tmp


count = 0


def bin_gen(i):
    global count
    for j in range(n):
        x[i] = j
        if i == n - 1:
            count += 1
            print(fine_print(x))
        else:
            bin_gen(i + 1)


bin_gen(0)
print(count)


def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
