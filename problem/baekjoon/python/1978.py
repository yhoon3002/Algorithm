# 소수 찾기
import sys


def find_decimal():
    inputs = int(sys.stdin.readline())
    number = list(map(int, sys.stdin.readline().split(" ")))

    count = 0
    for i in range(inputs):
        if number[i] == 1:
            continue

        for j in range(2, number[i]):
            if number[i] % j == 0:
                break
        else:
            count += 1

    print(count)


find_decimal()
