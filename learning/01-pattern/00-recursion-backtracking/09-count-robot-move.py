# https://www.youtube.com/watch?v=RpjrU7qUMBI
def count_unique_path_with_obstacles(grid):
    def ways(i, j):
        if i == cols and j == rows and grid[i][j] == 0:  #
            return 1
        if i > cols or j > rows or grid[i][j] == 1:  # grid[i][j] ==1 -> obstacle
            return 0

        return ways(i + 1, j) + ways(i, j + 1)

    cols, rows = len(grid[0]) - 1, len(grid) - 1
    return ways(0, 0)


def dp(grid):
    def ways(i, j):
        if i == cols and j == rows and grid[i][j] == 0:  #
            return 1
        if i > cols or j > rows or grid[i][j] == 1:  # grid[i][j] ==1 -> obstacle
            return 0

        if (i, j) not in res:
            res[(i, j)] = ways(i + 1, j) + ways(i, j + 1)
        return res[(i, j)]

    res = {}
    cols, rows = len(grid[0]) - 1, len(grid) - 1

    return ways(0, 0)
