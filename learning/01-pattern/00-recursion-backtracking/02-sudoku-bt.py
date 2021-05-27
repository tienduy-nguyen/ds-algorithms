# https://o2.edu.vn/thuat-toan-giai-sudoku-bang-quay-lui-backtracking/
table = [
    [7, 8, 0, 4, 0, 0, 1, 2, 0],
    [6, 0, 0, 0, 7, 5, 0, 0, 9],
    [0, 0, 0, 6, 0, 1, 0, 7, 8],
    [0, 0, 7, 0, 4, 0, 2, 6, 0],
    [0, 0, 1, 0, 5, 0, 9, 3, 0],
    [9, 0, 4, 0, 6, 0, 0, 0, 5],
    [0, 7, 0, 3, 0, 0, 0, 1, 2],
    [1, 2, 0, 0, 0, 7, 4, 0, 0],
    [0, 4, 9, 2, 0, 6, 0, 0, 7],
]


def print_sudoku(q):
    for d in range(len(q)):
        if d % 3 == 0 and d != 0:
            print("- - - - - - - - - - -")
        for c in range(len(q[0])):
            if c % 3 == 0 and c != 0:
                print("| ", end="")
            print(str(q[d][c])) if c == 8 else print(str(q[d][c]), end=" ")


# print_sudoku(table)


def find_empty(q):
    for d in range(len(q)):
        for c in range(len(q[0])):
            if q[d][c] == 0:
                return d, c
    return None


def check(q, value, d, c):
    # check duplicate value in same row
    for i in range(len(q[0])):
        if q[i][c] == value and i != d:
            return False
    # check duplicate value in same column
    for i in range(len(q)):
        if q[d][i] == value and i != c:
            return False
    # check duplicate value in matrix 3x3 to satisfy condition of sudoku
    x = d // 3
    y = c // 3
    for i in range(x * 3, x * 3 + 3):
        for j in range(y * 3, y * 3 + 3):
            if q[i][j] == value and i != d and j != c:
                return False
    return True


def solve(q):
    found = find_empty(q)
    if not found:
        return True
    else:
        d, c = found
    for i in range(1, 10):
        if check(q, i, d, c):
            q[d][c] = i
            if solve(q):
                return True
            else:
                q[d][c] = 0
    return False


print_sudoku(table)
solve(table)
print("Result of sudoku: ")
print_sudoku(table)
