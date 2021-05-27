# https://www.youtube.com/watch?v=QgEIPPtzFgk
# Tim hoan vi lien ke lon hon
# Neu khong co so nay, hay tra ve day hoan vi nho nhat (day tang dan)
# hoan vi & sort

# Vd Input -> output
# 1,2,3 --> 1,3,2
# 3,2,1 -> 1,2,3
# 1,1,5 -> 1,5,1


def next_permutation(nums):
    right = len(nums) - 1
    # find first point pivot
    while right > 0:
        if nums[right - 1] < nums[right]:
            left = right - 1
            break
        right -= 1
    if right == 0:
        return nums.sort()

    for right in range(len(nums) - 1, -1, -1):
        # find first number than left point from the right if exists
        if nums[right] > nums[left]:
            nums[right], nums[left] = nums[left], nums[right]
            nums[left + 1 :] = sorted(nums[left + 1 :])
            return nums


print(next_permutation([3, 7, 1, 5, 9, 8, 6, 4, 2]))


# https://leetcode.com/problems/next-permutation/
# My solution on leetcode
# Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
# just rearrange, no sort
class Solution:
    def nextPermutation2(self, nums) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        if n < 2:
            return nums

        i = n - 1
        j = i

        while i > 0 and nums[i] <= nums[i - 1]:
            i -= 1

        if i == 0:
            return nums.reverse()

        i -= 1

        while j > i:
            if nums[j] > nums[i]:
                break
            j -= 1

        nums[i], nums[j] = nums[j], nums[i]

        nums[i + 1 :] = nums[:i:-1]  # reverse

        return nums
