# Bo tri cuoc hop
# https://www.youtube.com/watch?v=N-ZfCOclB4I
# vd [[5,25], [10,30], [30,40]] -> output count: 2
# [[6, 13], [0, 5]] -> output count: 1

from heapq import *


def min_meeting_room(arr):
    arr.sort()
    print(arr)
    res = []
    for it in arr:
        if len(res) and res[0][0] <= it[0]:
            heappop(res)
        heappush(res, (it[1], it[0]))
    print(len(res))
    print(res)
    return len(res)


min_meeting_room([[6, 13], [0, 5]])  # 1
min_meeting_room([[5, 25], [10, 30], [30, 40]])  # 2
min_meeting_room([[5, 25], [10, 30], [30, 40], [41, 45], [50, 100], [60, 105]])  # 2
min_meeting_room([[1, 10], [6, 8], [5, 8], [41, 45], [2, 4], [2, 7]])  # 4
