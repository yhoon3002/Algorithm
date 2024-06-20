# 소수
import sys
import math


def decimal():
    M = int(sys.stdin.readline())
    N = int(sys.stdin.readline())
    answer = []

    for i in range(M, N + 1):
        if i == 1:
            continue

        for j in range(2, int(math.sqrt(i)) + 1):
            if i % j == 0:
                break
        else:
            answer.append(i)

    if len(answer) == 0:
        print(-1)
    else:
        print(sum(answer))
        print(min(answer))


decimal()
