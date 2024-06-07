# 좌표 정렬하기
import sys


def sort_coordinate():
    num = int(sys.stdin.readline())
    inputs = []

    for _ in range(num):
        inputs.append(list(map(int, sys.stdin.readline().split())))

    inputs.sort(key=lambda x: (x[0], x[1]))

    for i in range(num):
        print(inputs[i][0], inputs[i][1])


sort_coordinate()
