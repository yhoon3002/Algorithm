# 중복 빼고 정렬하기
import sys


def sort():
    n = int(sys.stdin.readline())

    inputs = list(map(int, sys.stdin.readline().split(" ")))

    sets = set(inputs)

    sorted_inputs = sorted(sets)

    print(*sorted_inputs)


sort()
