def two_sum(arr, target):
    arr.sort()
    print(arr)
    l = len(arr)
    left = 0
    right = l - 1
    while left < right:
        sum = arr[left] + arr[right]
        if sum == target:
            return left, right
        if sum < target:
            left -= 1
        else:
            right -= 1
    return None


# print(two_sum([2, 7, 11, 15], 9))


def three_sum(arr, target):
    arr.sort()
    l = len(arr)
    count = 0
    for i in range(l - 2):
        target_two_sum = target - arr[0]
        print("target 2 sums", target_two_sum)
        arr = arr[i + 1 :]
        count += 1
        print("new arr:", arr)
        check = two_sum(arr, target_two_sum)
        if check:
            return i, count + check[0], count + check[1]
    return None


print(three_sum([2, 7, 11, 1, 15], 10))
