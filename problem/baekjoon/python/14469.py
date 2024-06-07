# 소가 길을 건너간 이유 3
import sys


def cow_sort():
    n = int(sys.stdin.readline())

    cow_list = []

    for _ in range(n):
        cow_list.append(list(map(int, sys.stdin.readline().split())))

    cow_list.sort(key=lambda x: (x[0]))

    time = cow_list[0][0] + cow_list[0][1]

    for i in range(1, len(cow_list)):
        if cow_list[i][0] > time:
            time = cow_list[i][0] + cow_list[i][1]
        else:
            time += cow_list[i][1]

    print(time)


cow_sort()
