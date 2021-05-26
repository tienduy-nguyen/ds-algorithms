import numpy as np

board = np.full((8, 8), 0)


def print_board(bo):
    for d in bo:
        for c in d:
            print(c, end=" ")
        print()


def solve(bo):
    l = len(bo)
    for d in range(l):
        for c in range(l):
            if bo[d][c] == 0:
                if possible(bo, d, c):
                    bo[d][c] = 1
                    solve(bo)
                if sum(sum(a) for a in bo) == l:
                    return bo
                else:
                    bo[d][c] = 0
    return bo


def possible(bo, d, c):
    l = len(bo)
    for i in range(l):
        if bo[i][c] == 1:
            return False
    for i in range(l):
        if bo[d][i] == 1:
            return False
    for i in range(l):
        for j in range(l):
            if bo[i][j] == 1:
                if c - d == j - i or c + d == i + j:
                    return False
    return True


solve(board)
print_board(board)
