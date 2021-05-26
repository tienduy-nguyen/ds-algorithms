# https://o2.edu.vn/python-bai-toan-xep-hau-su-dung-de-quy/

# backtracking solution

n = 8
a = n * [0]
# a = [0, 4, 7, 5, 2, 6, 1, 3]


def print_board(b):
    l = len(b)
    for i in range(l):
        for j in range(l):
            if j == a[i]:
                print(1, end=" ")
            else:
                print(0, end=" ")
        print()


def possible(x, y):
    for i in range(x):
        if a[i] == y or x + y == i + a[i] or x - y == i - a[i]:
            return False
    return True


# Recursion function
count = 0


def gen(i, n):
    global count
    for j in range(n):
        if possible(i, j):
            a[i] = j
            if i == n - 1:
                count += 1
                # print(a)
            gen(i + 1, n)


# print_board(a)
gen(0, n)
print(count)
