import numpy as np

board = np.full((8, 8), 0)


def print_board(bo):
    for r in bo:
        for c in r:
            print(c, end=" ")
        print()


def possible(x, y):
    for i in range(x):
        if a[i] == y or x + y == i + a[i] or x - y == i - a[i]:
            return False
    return True


print_board(board)
