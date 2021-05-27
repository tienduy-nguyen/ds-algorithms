# https://www.youtube.com/watch?v=ntiLsiFmoik
# Cho truoc mot tap hop gom nhu so khong trung nhau, in ra tat ca cac tap hop con
# (ke ca tap lon nhat) khong bi lap cua no
# vd: input: nums = [1,2,3]
# output: [[3], [1], [2], [1,2,3], [1,3], [2,3], [1,2], []]


def subsets(nums):
    def comb(arr, step):
        if len(arr) == k:  # stop condition
            res.append(arr[:])
            return
        for i in range(step, len(nums)):
            comb(arr + [nums[i]], i + 1)  # join array

    res = []
    for k in range(len(nums) + 1):
        comb([], 0)
    return res


print(subsets([1, 2, 3]))
