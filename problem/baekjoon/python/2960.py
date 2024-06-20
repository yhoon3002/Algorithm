# 에라토스테네스의 체
import sys
import math


def eratosthenes():
    inputs = list(map(int, sys.stdin.readline().split(" ")))
    N = inputs[0]
    K = inputs[1]

    count = 0
    arr = []
    answer = 0

    for i in range(2, N + 1):
        arr.append(i)

    for i in range(2, N + 1):
        for j in range(i, N + 1, i):
            if j in arr:
                count += 1
                arr.remove(j)

                if K == count:
                    answer = j
                    break

    print(answer)


eratosthenes()
