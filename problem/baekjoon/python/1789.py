# 수들의 합
import sys


def sum():
    s = int(sys.stdin.readline())

    temp = 0
    count = 0

    while s > 0:
        temp += 1

        s -= temp
        count += 1

    if s < 0:
        count -= 1

    print(count)


sum()
