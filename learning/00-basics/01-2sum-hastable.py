def two_sum_hastable(nums, target):
    hashtable = {}
    for i, num in enumerate(nums):
        remaining = target - num
        if remaining not in hashtable:
            hashtable[num] = i
        else:
            return [hashtable[remaining], i]
