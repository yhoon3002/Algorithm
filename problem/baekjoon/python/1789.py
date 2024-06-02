# 수들의 합
# 실패
import sys
import math


def sum():
    s = int(sys.stdin.readline())

    total = 0
    count = 0

    for i in range(1, int(math.sqrt(s * 2))):
        total += i

        if total <= s:
            count += 1
        elif total > s:
            count -= 1
            break

    print(count)


sum()
