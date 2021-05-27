# given  a list of number, print all permutations of this list
# ex input: [1,2,3]--> print result: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
# https://www.youtube.com/watch?v=4Cx37wiYsZQ

# 1th solution
def permute(nums):
    def backtrack(arr, step):
        if step == len(nums):  # stop condition
            res.append(arr)
            return
        for i in range(len(nums)):
            if not flag[i]:  # assign a flag to ignore i for the next backtrack
                flag[i] = True
                backtrack(arr + [nums[i]], step + 1)
                flag[i] = False

    res, flag = [], [False] * len(nums)
    backtrack([], 0)
    return res


# print(permute([1, 2, 3, 4]))


# 2rd solution: optimise
def permute2(nums):
    def backtrack(step):
        if step == len(nums):
            # print(nums[:])
            res.append(nums[:])
        for i in range(step, len(nums)):
            nums[step], nums[i] = nums[i], nums[step]
            # print("step, i", step, i)
            # print("arr", nums[:])
            backtrack(step + 1)
            nums[step], nums[i] = nums[i], nums[step]

    res = []
    backtrack(0)
    return res


print(permute2([1, 2, 3]))


# bonus question: display only permutation result with repeat value
# ex: input: [1,1,2]
# output: [[1,1,2], [1,2,1], [2,1,1]]
def permute_unique1(nums):
    def backtrack(nums, step):
        if step == len(nums):
            res.append(nums[:])
        for x in set(nums[step:]):
            remaining = nums[step:]
            remaining.remove(x)
            backtrack(nums[:step] + [x] + remaining, step + 1)

    res = []
    backtrack(nums, 0)
    return res


print("3", permute_unique1([1, 1, 2, 3, 1]))
